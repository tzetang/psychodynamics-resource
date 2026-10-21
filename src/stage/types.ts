export type FeelingFamily = 'anxiety' | 'anger' | 'shame' | 'longing' | 'calm';

/** `anchor` is an invisible fixed point that feelings can travel to (e.g. below the waterline). */
export type ActorRole = 'person' | 'leader' | 'outsider' | 'anchor';

export type Point = [number, number];

export interface Actor {
  id: string;
  role: ActorRole;
  label?: string;
  /** Working position in viewBox units; also the layout's starting point. */
  home: Point;
}

export interface BoundarySpec {
  id: string;
  label?: string;
  members: string[];
}

export interface ForceSpec {
  /** 0..1 dependency: everyone gathers on a ring around the leader. */
  towardLeader?: number;
  /** 0..1 cohesion: people drift toward the group's centre. */
  cluster?: number;
  /** Push people away from an actor (by id) or a point; for fight/flight. */
  awayFrom?: { target: string | Point; strength: number };
  /** Draw two actors together. */
  pair?: { a: string; b: string; strength: number };
  /** Fix actors at a position, overriding every other force. */
  pinned?: Record<string, Point>;
  /** 0..1 pull of each boundary's members toward their own centre. */
  boundaryPull?: number;
}

export type ParticleResolve = 'absorb' | 'bounce' | 'settle' | 'transform' | 'split';

export interface ParticleSpec {
  from: string;
  to: string;
  family: FeelingFamily;
  resolve: ParticleResolve;
  transformTo?: FeelingFamily;
  size?: number;
  delayMs?: number;
}

export interface Beat {
  id: string;
  caption: string;
  isYourPart?: boolean;
  forces: ForceSpec;
  /** 0..1 */
  haze: number;
  /** 'stage' (default), a boundary id or an actor id. */
  hazeScope?: string;
  particles?: ParticleSpec[];
  highlight?: string[];
  /** Overlay ids visible in this beat. */
  show?: string[];
  /** Actor ids faded out for this beat (they keep their place in the layout). */
  hide?: string[];
}

export type Overlay =
  | { id: string; kind: 'waterline'; y: number; above?: string; below?: string }
  | { id: string; kind: 'gate'; at: Point; label?: string; state?: 'block' | 'flip' | 'redirect' };

export interface KnobSpec {
  id: string;
  label: string;
  lowLabel: string;
  highLabel: string;
  /** 0..1 */
  default: number;
  /** Pure transform of a beat, so the snapshot model holds. */
  apply: (beat: Beat, value: number) => Beat;
}

export interface SceneDef {
  /** Unique per beat list (a Try stance gets its own id). */
  id: string;
  /** Accessible description of the scene as a whole. */
  label: string;
  actors: Actor[];
  boundaries?: BoundarySpec[];
  overlays?: Overlay[];
  beats: Beat[];
  knobs: KnobSpec[];
}

/** Rounded rectangle in viewBox units. */
export interface BoundaryShape {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Snapshot {
  positions: Record<string, Point>;
  boundaries: Record<string, BoundaryShape>;
}

/** One beat after knobs are applied and its layout has settled. */
export interface Frame {
  beat: Beat;
  snapshot: Snapshot;
}

export type KnobValues = Record<string, number>;

export const STAGE_WIDTH = 1000;
export const STAGE_HEIGHT = 600;
