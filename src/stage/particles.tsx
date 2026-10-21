import { motion } from 'motion/react';
import { Orb } from './glyphs';
import { tone } from './tokens';
import type { FeelingFamily, ParticleSpec, Point } from './types';

const PATH_SAMPLES = 12;
const EDGE = 40;
const FRAME_SECONDS = 0.07;

interface Frame {
  x: number;
  y: number;
  r: number;
  o: number;
}

interface Track {
  family: FeelingFamily;
  frames: Frame[];
}

const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

function dir(a: Point, b: Point): Point {
  const d = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
  return [(b[0] - a[0]) / d, (b[1] - a[1]) / d];
}

/** Quadratic arc from a to b, sampled with eased spacing so linear keyframes read as eased motion. */
function arcPoints(a: Point, b: Point, bend: number): Point[] {
  const mx = (a[0] + b[0]) / 2;
  const my = (a[1] + b[1]) / 2;
  const [dx, dy] = dir(a, b);
  const dist = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const cx = mx - dy * dist * bend;
  const cy = my + dx * dist * bend;
  return Array.from({ length: PATH_SAMPLES + 1 }, (_, i) => {
    const t = easeInOut(i / PATH_SAMPLES);
    const u = 1 - t;
    return [u * u * a[0] + 2 * u * t * cx + t * t * b[0], u * u * a[1] + 2 * u * t * cy + t * t * b[1]] as Point;
  });
}

const along = (p: Point, d: Point, by: number): Point => [p[0] + d[0] * by, p[1] + d[1] * by];

function travel(a: Point, b: Point, bend: number, rFrom: number, rTo: number): Frame[] {
  return arcPoints(a, b, bend).map((p, i, all) => ({
    x: p[0],
    y: p[1],
    r: rFrom + (rTo - rFrom) * (i / (all.length - 1)),
    o: 1,
  }));
}

function ramp(from: Frame, to: Frame, n: number): Frame[] {
  return Array.from({ length: n }, (_, i) => {
    const t = (i + 1) / n;
    return { x: from.x + (to.x - from.x) * t, y: from.y + (to.y - from.y) * t, r: from.r + (to.r - from.r) * t, o: from.o + (to.o - from.o) * t };
  });
}

const last = (frames: Frame[]) => frames[frames.length - 1];
const hidden = (n: number, at: Frame): Frame[] => Array.from({ length: n }, () => ({ ...at, o: 0 }));

function buildTracks(spec: ParticleSpec, from: Point, to: Point): { tracks: Track[]; loop: boolean } {
  const toward = dir(from, to);
  const start = along(from, toward, EDGE);
  const arrive = along(to, toward, -EDGE);
  const out = travel(start, arrive, 0.16, 1, 1);
  const end = last(out);

  switch (spec.resolve) {
    case 'absorb': {
      const center: Frame = { x: to[0], y: to[1], r: 0, o: 0 };
      return { tracks: [{ family: spec.family, frames: [...out, ...ramp(end, center, 5)] }], loop: true };
    }
    case 'bounce': {
      const back = travel(arrive, start, 0.16, 1, 1.75);
      return {
        tracks: [{ family: spec.family, frames: [...out, ...back, ...ramp(last(back), { ...last(back), o: 0 }, 3)] }],
        loop: true,
      };
    }
    case 'settle': {
      const lodged: Frame = { x: arrive[0] + toward[1] * 30, y: arrive[1] - toward[0] * 30, r: 0.85, o: 1 };
      return { tracks: [{ family: spec.family, frames: [...out, ...ramp(end, lodged, 5)] }], loop: false };
    }
    case 'transform': {
      const softer = spec.transformTo ?? 'calm';
      const shrunk: Frame = { ...end, r: 0.75 };
      const back = travel(arrive, start, -0.16, 0.75, 0.75);
      const fadeOut = ramp(end, { ...end, o: 0 }, 3);
      const fadeIn = ramp({ ...shrunk, o: 0 }, shrunk, 3);
      const home: Frame = { x: from[0], y: from[1], r: 0, o: 0 };
      const returning = [...back, ...ramp(last(back), home, 4)];
      return {
        tracks: [
          { family: spec.family, frames: [...out, ...fadeOut, ...hidden(returning.length, last(fadeOut))] },
          { family: softer, frames: [...hidden(out.length, { ...shrunk, o: 0 }), ...fadeIn, ...returning] },
        ],
        loop: true,
      };
    }
    case 'split': {
      const fade = ramp(end, { ...end, r: 0.4, o: 0 }, 3);
      const spread = (sign: number): Frame[] => {
        const born: Frame = { ...end, r: 0.6, o: 1 };
        const gone: Frame = { x: end.x + toward[0] * 20 - toward[1] * 70 * sign, y: end.y + toward[1] * 20 + toward[0] * 70 * sign, r: 0.6, o: 0 };
        const mid: Frame = { ...gone, o: 1 };
        return [...hidden(out.length, { ...end, r: 0.6 }), ...ramp({ ...born, o: 0 }, born, 3), ...ramp(born, mid, 6), ...ramp(mid, gone, 2)];
      };
      const kids = [spread(1), spread(-1)];
      return {
        tracks: [
          { family: spec.family, frames: [...out, ...fade, ...hidden(kids[0].length - out.length - fade.length, last(fade))] },
          { family: spec.family, frames: kids[0] },
          { family: spec.family, frames: kids[1] },
        ],
        loop: true,
      };
    }
  }
}

interface ParticleLayerProps {
  particles: ParticleSpec[];
  positions: Record<string, Point>;
  /** Changes whenever the animation should restart (beat change, replay). */
  runKey: string;
}

function ParticleTrack({ track, delayMs, loop, size }: { track: Track; delayMs: number; loop: boolean; size: number }) {
  const { frames } = track;
  const first = frames[0];
  return (
    <motion.g
      initial={{ x: first.x, y: first.y, scale: first.r * size, opacity: 0 }}
      animate={{
        x: frames.map((f) => f.x),
        y: frames.map((f) => f.y),
        scale: frames.map((f) => Math.max(f.r, 0.001) * size),
        opacity: frames.map((f) => f.o),
      }}
      transition={{
        duration: frames.length * FRAME_SECONDS,
        ease: 'linear',
        delay: delayMs / 1000,
        ...(loop ? { repeat: Infinity, repeatDelay: 0.6 } : {}),
      }}
    >
      <Orb family={track.family} />
    </motion.g>
  );
}

export function ParticleLayer({ particles, positions, runKey }: ParticleLayerProps) {
  return (
    <g>
      {particles.map((spec, i) => {
        const from = positions[spec.from];
        const to = positions[spec.to];
        if (!from || !to) return null;
        const { tracks, loop } = buildTracks(spec, from, to);
        return tracks.map((track, t) => (
          <ParticleTrack key={`${runKey}-${i}-${t}`} track={track} delayMs={spec.delayMs ?? i * 350} loop={loop} size={spec.size ?? 1} />
        ));
      })}
    </g>
  );
}

/** Storyboard version: the path as a dashed arc with the orb part-way along it. */
export function StaticParticleLayer({ particles, positions }: Omit<ParticleLayerProps, 'runKey'>) {
  return (
    <g>
      {particles.map((spec, i) => {
        const from = positions[spec.from];
        const to = positions[spec.to];
        if (!from || !to) return null;
        const toward = dir(from, to);
        const pts = arcPoints(along(from, toward, EDGE), along(to, toward, -EDGE), 0.16);
        const d = pts.map((p, j) => `${j === 0 ? 'M' : 'L'} ${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
        const mid = pts[Math.round(PATH_SAMPLES * 0.55)];
        const tip = pts[pts.length - 1];
        const prev = pts[pts.length - 2];
        const [ux, uy] = dir(prev, tip);
        const head = `M ${tip[0] - ux * 16 - uy * 9} ${tip[1] - uy * 16 + ux * 9} L ${tip[0]} ${tip[1]} L ${tip[0] - ux * 16 + uy * 9} ${tip[1] - uy * 16 - ux * 9}`;
        return (
          <g key={i}>
            <path d={d} fill="none" stroke={tone('ink-soft', 0.5)} strokeWidth={3} strokeDasharray="4 9" strokeLinecap="round" />
            <path d={head} fill="none" stroke={tone('ink-soft', 0.7)} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
            <g transform={`translate(${mid[0]} ${mid[1]}) scale(${spec.size ?? 1})`}>
              <Orb family={spec.family} />
            </g>
          </g>
        );
      })}
    </g>
  );
}
