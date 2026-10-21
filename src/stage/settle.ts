import { forceCollide, forceSimulation, type SimulationNodeDatum } from 'd3-force';
import { STAGE_HEIGHT, STAGE_WIDTH, type ActorRole, type Beat, type BoundaryShape, type ForceSpec, type KnobValues, type Point, type SceneDef, type Snapshot } from './types';

interface SimNode extends SimulationNodeDatum {
  id: string;
  role: ActorRole;
  hx: number;
  hy: number;
}

const TICKS = 300;
const HOME_PULL = 0.1;
/** Closest ring around the leader (full dependency) and how far the loosest gathering reaches. */
const RING_RADIUS = 135;
const RING_SLACK = 320;
const PAIR_DISTANCE = 76;
const COLLIDE: Record<SimNode['role'], number> = { person: 40, leader: 48, outsider: 40, anchor: 1 };

/** Deterministic PRNG so jiggle on coincident nodes is the same every run. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hashSeed(text: string): number {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) h = Math.imul(h ^ text.charCodeAt(i), 16777619);
  return h >>> 0;
}

function centroid(nodes: SimNode[]): Point {
  if (nodes.length === 0) return [0, 0];
  let x = 0;
  let y = 0;
  for (const n of nodes) {
    x += n.x ?? n.hx;
    y += n.y ?? n.hy;
  }
  return [x / nodes.length, y / nodes.length];
}

type Force = ((alpha: number) => void) & { initialize?: (nodes: SimNode[]) => void };

function makeForce(apply: (alpha: number) => void): Force {
  return apply;
}

function buildForces(scene: SceneDef, nodes: SimNode[], forces: ForceSpec): Force[] {
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const people = nodes.filter((n) => n.role === 'person');
  const leader = nodes.find((n) => n.role === 'leader');
  const list: Force[] = [];

  list.push(
    makeForce((alpha) => {
      for (const n of nodes) {
        n.vx = (n.vx ?? 0) + (n.hx - (n.x ?? n.hx)) * HOME_PULL * alpha;
        n.vy = (n.vy ?? 0) + (n.hy - (n.y ?? n.hy)) * HOME_PULL * alpha;
      }
    }),
  );

  if (forces.towardLeader && leader) {
    const k = 0.8;
    const ring = RING_RADIUS + (1 - Math.min(1, forces.towardLeader)) * RING_SLACK;
    list.push(
      makeForce((alpha) => {
        const lx = leader.x ?? leader.hx;
        const ly = leader.y ?? leader.hy;
        for (const n of people) {
          const dx = lx - (n.x ?? n.hx);
          const dy = ly - (n.y ?? n.hy);
          const d = Math.hypot(dx, dy) || 1;
          if (d > ring) {
            const f = ((d - ring) / d) * k * alpha;
            n.vx = (n.vx ?? 0) + dx * f;
            n.vy = (n.vy ?? 0) + dy * f;
          }
        }
      }),
    );
  }

  if (forces.cluster) {
    const k = 0.3 * forces.cluster;
    list.push(
      makeForce((alpha) => {
        const [cx, cy] = centroid(people);
        for (const n of people) {
          n.vx = (n.vx ?? 0) + (cx - (n.x ?? n.hx)) * k * alpha;
          n.vy = (n.vy ?? 0) + (cy - (n.y ?? n.hy)) * k * alpha;
        }
      }),
    );
  }

  if (forces.awayFrom) {
    const { target, strength } = forces.awayFrom;
    const targetNode = typeof target === 'string' ? byId.get(target) : undefined;
    list.push(
      makeForce((alpha) => {
        const tx = targetNode ? (targetNode.x ?? targetNode.hx) : (target as Point)[0];
        const ty = targetNode ? (targetNode.y ?? targetNode.hy) : (target as Point)[1];
        for (const n of people) {
          if (n === targetNode) continue;
          const dx = (n.x ?? n.hx) - tx;
          const dy = (n.y ?? n.hy) - ty;
          const d = Math.hypot(dx, dy) || 1;
          n.vx = (n.vx ?? 0) + (dx / d) * strength * 18 * alpha;
          n.vy = (n.vy ?? 0) + (dy / d) * strength * 18 * alpha;
        }
      }),
    );
  }

  if (forces.pair) {
    const a = byId.get(forces.pair.a);
    const b = byId.get(forces.pair.b);
    const k = 0.6 * forces.pair.strength;
    if (a && b) {
      list.push(
        makeForce((alpha) => {
          const dx = (b.x ?? b.hx) - (a.x ?? a.hx);
          const dy = (b.y ?? b.hy) - (a.y ?? a.hy);
          const d = Math.hypot(dx, dy) || 1;
          if (d > PAIR_DISTANCE) {
            const f = ((d - PAIR_DISTANCE) / d) * k * alpha * 0.5;
            a.vx = (a.vx ?? 0) + dx * f;
            a.vy = (a.vy ?? 0) + dy * f;
            b.vx = (b.vx ?? 0) - dx * f;
            b.vy = (b.vy ?? 0) - dy * f;
          }
        }),
      );
    }
  }

  if (forces.boundaryPull && scene.boundaries) {
    const k = 0.3 * forces.boundaryPull;
    for (const boundary of scene.boundaries) {
      const members = boundary.members.map((id) => byId.get(id)).filter((n): n is SimNode => !!n);
      list.push(
        makeForce((alpha) => {
          const [cx, cy] = centroid(members);
          for (const n of members) {
            if (n.role === 'leader') continue;
            n.vx = (n.vx ?? 0) + (cx - (n.x ?? n.hx)) * k * alpha;
            n.vy = (n.vy ?? 0) + (cy - (n.y ?? n.hy)) * k * alpha;
          }
        }),
      );
    }
  }

  return list;
}

const BOUNDARY_PAD = 58;
/** Room kept clear above a boundary for its label. */
const LABEL_ROOM = 40;
const EDGE_MARGIN = 12;

function boundaryShapes(scene: SceneDef, positions: Record<string, Point>): Record<string, BoundaryShape> {
  const shapes: Record<string, BoundaryShape> = {};
  for (const boundary of scene.boundaries ?? []) {
    const pts = boundary.members.map((id) => positions[id]).filter((p): p is Point => !!p);
    if (pts.length === 0) continue;
    const left = Math.max(EDGE_MARGIN, Math.min(...pts.map((p) => p[0])) - BOUNDARY_PAD);
    const right = Math.min(STAGE_WIDTH - EDGE_MARGIN, Math.max(...pts.map((p) => p[0])) + BOUNDARY_PAD);
    const top = Math.max(LABEL_ROOM, Math.min(...pts.map((p) => p[1])) - BOUNDARY_PAD);
    const bottom = Math.min(STAGE_HEIGHT - EDGE_MARGIN, Math.max(...pts.map((p) => p[1])) + BOUNDARY_PAD);
    shapes[boundary.id] = { x: left, y: top, width: right - left, height: bottom - top };
  }
  return shapes;
}

/**
 * Runs the layout headless to equilibrium and returns actor positions in viewBox units.
 * Fixed seed and initial positions make the result identical on every run.
 */
export function settleBeat(scene: SceneDef, beat: Beat, seed = 1): Snapshot {
  const nodes: SimNode[] = scene.actors.map((a) => ({
    id: a.id,
    role: a.role,
    hx: a.home[0],
    hy: a.home[1],
    x: a.home[0],
    y: a.home[1],
    vx: 0,
    vy: 0,
  }));

  const pinned: Record<string, Point> = {
    ...Object.fromEntries(
      scene.actors.filter((a) => a.role !== 'person').map((a) => [a.id, a.home] as [string, Point]),
    ),
    ...(beat.forces.pinned ?? {}),
  };
  for (const n of nodes) {
    const p = pinned[n.id];
    if (p) {
      n.x = n.fx = p[0];
      n.y = n.fy = p[1];
    }
  }

  const sim = forceSimulation<SimNode>(nodes)
    .randomSource(mulberry32(seed ^ hashSeed(`${scene.id}/${beat.id}`)))
    .alpha(0.6)
    .alphaDecay(0)
    .alphaTarget(0.6)
    .stop();

  sim.force('collide', forceCollide<SimNode>((n) => COLLIDE[n.role]).iterations(2));
  buildForces(scene, nodes, beat.forces).forEach((f, i) => sim.force(`f${i}`, f));
  sim.tick(TICKS);

  const positions: Record<string, Point> = {};
  for (const n of nodes) {
    positions[n.id] = [Math.round((n.x ?? n.hx) * 10) / 10, Math.round((n.y ?? n.hy) * 10) / 10];
  }
  return { positions, boundaries: boundaryShapes(scene, positions) };
}

export function applyKnobs(scene: SceneDef, beat: Beat, values: KnobValues): Beat {
  return scene.knobs.reduce((b, knob) => knob.apply(b, values[knob.id] ?? knob.default), beat);
}

export function defaultKnobValues(scene: SceneDef): KnobValues {
  return Object.fromEntries(scene.knobs.map((k) => [k.id, k.default]));
}
