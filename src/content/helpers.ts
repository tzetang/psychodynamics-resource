import type { Actor, Beat, KnobSpec, ParticleSpec, Point, SceneDef } from '../stage/types';

export const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

export const person = (id: string, x: number, y: number, label?: string): Actor => ({ id, role: 'person', home: [x, y], label });
export const you = (x = 500, y = 300): Actor => ({ id: 'you', role: 'leader', label: 'You', home: [x, y] });
export const outsider = (id: string, x: number, y: number, label?: string): Actor => ({ id, role: 'outsider', home: [x, y], label });
export const anchor = (id: string, x: number, y: number): Actor => ({ id, role: 'anchor', home: [x, y] });

/** A scene for a concept page: the same cast and stage as a situation, with its own short run of beats and no knobs. */
export function clipOf(scene: SceneDef, id: string, label: string, beats: Beat[], extra?: Partial<SceneDef>): SceneDef {
  return { ...scene, id: `concept:${id}`, label, knobs: [], beats, ...extra };
}

/** Beats of a situation by id, in the order asked for. */
export function beatsOf(scene: SceneDef, ...ids: string[]): Beat[] {
  return ids.map((id) => {
    const beat = scene.beats.find((b) => b.id === id);
    if (!beat) throw new Error(`Scene "${scene.id}" has no beat "${id}"`);
    return beat;
  });
}

interface HazeKnobOptions {
  id: string;
  label: string;
  lowLabel: string;
  highLabel: string;
  default?: number;
  /** Higher values thin the haze instead of thickening it. */
  invert?: boolean;
}

/** Scales every beat's haze; the default setting leaves the authored scene unchanged. */
export function hazeKnob({ id, label, lowLabel, highLabel, default: def = 0.5, invert }: HazeKnobOptions): KnobSpec {
  const factor = (v: number) => 0.4 + 1.2 * (invert ? 1 - v : v);
  return {
    id,
    label,
    lowLabel,
    highLabel,
    default: def,
    apply: (beat, v) => ({ ...beat, haze: clamp01(beat.haze * (factor(v) / factor(def))) }),
  };
}

/** Feelings handed up to the leader: held when containment is high, bounced back when it is low. */
const handedUp = (leaderId: string) => (p: ParticleSpec) => p.to === leaderId && (p.family === 'anxiety' || p.family === 'longing');

export function containmentKnob(leaderId = 'you', options?: Partial<Pick<KnobSpec, 'label' | 'lowLabel' | 'highLabel'>>): KnobSpec {
  const isHandedUp = handedUp(leaderId);
  return {
    id: 'containment',
    label: options?.label ?? 'How steadily do you hold it?',
    lowLabel: options?.lowLabel ?? 'Worry bounces around',
    highLabel: options?.highLabel ?? 'Worry is held and settled',
    default: 0.3,
    apply: (beat, v) => {
      const shift = v - 0.3;
      const particles: ParticleSpec[] = (beat.particles ?? []).map((p) => (isHandedUp(p) && v < 0.15 ? { ...p, resolve: 'bounce' } : p));
      if (v >= 0.7) {
        for (const p of beat.particles ?? []) {
          if (isHandedUp(p)) {
            particles.push({ from: leaderId, to: p.from, family: 'calm', resolve: 'settle', size: 0.7, delayMs: (p.delayMs ?? 0) + 1700 });
          }
        }
      }
      return {
        ...beat,
        haze: clamp01(beat.haze * (1 - 0.9 * shift)),
        forces: {
          ...beat.forces,
          ...(beat.forces.towardLeader !== undefined && { towardLeader: clamp01(beat.forces.towardLeader * (1 - 0.8 * shift)) }),
        },
        particles,
      };
    },
  };
}

export const lerpPoint = (a: Point, b: Point, t: number): Point => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
