import { useId, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FEELING_LABEL, feelingTone, tone } from './tokens';
import { STAGE_HEIGHT, STAGE_WIDTH, type BoundaryShape, type FeelingFamily, type Overlay } from './types';

/** Shared transition for anything that moves between settled snapshots. */
export const MOVE = { duration: 1.1, ease: [0.45, 0, 0.2, 1] } as const;

/** Motion transitions collapse to instant jumps when the user prefers reduced motion. */
export function useMove(scale = 1) {
  const reduced = useReducedMotion();
  return reduced ? ({ duration: 0 } as const) : ({ ...MOVE, duration: MOVE.duration * scale } as const);
}

export const PERSON_R = 30;
export const LEADER_R = 22;
export const ORB_R = 15;

interface ActorGlyphProps {
  label?: string;
  highlight?: boolean;
}

/** Hollow circle: a person. */
export function Person({ label, highlight, outsider }: ActorGlyphProps & { outsider?: boolean }) {
  return (
    <g>
      {highlight && <circle r={PERSON_R + 10} fill="none" stroke={tone('accent', 0.55)} strokeWidth={3} />}
      <circle
        className="idle-breathe"
        r={PERSON_R}
        fill={tone('surface-raised', 0.92)}
        stroke={outsider ? tone('ink-soft') : tone('glyph')}
        strokeWidth={3.5}
        strokeDasharray={outsider ? '7 6' : undefined}
      />
      {label && <GlyphLabel y={PERSON_R + 30}>{label}</GlyphLabel>}
    </g>
  );
}

/** Ringed, filled circle: the viewer's own position. */
export function Leader({ label = 'You', highlight }: ActorGlyphProps) {
  return (
    <g>
      {highlight && <circle r={LEADER_R + 26} fill="none" stroke={tone('accent', 0.4)} strokeWidth={3} />}
      <circle r={LEADER_R + 12} fill="none" stroke={tone('accent')} strokeWidth={3.5} />
      <circle className="idle-breathe" r={LEADER_R} fill={tone('accent')} />
      <GlyphLabel y={LEADER_R + 50} strong>
        {label}
      </GlyphLabel>
    </g>
  );
}

function GlyphLabel({ y, children, strong }: { y: number; children: ReactNode; strong?: boolean }) {
  return (
    <text
      y={y}
      textAnchor="middle"
      fontSize={26}
      fontWeight={strong ? 700 : 500}
      fill={tone(strong ? 'accent' : 'ink-soft')}
      style={{ paintOrder: 'stroke', stroke: tone('stage', 0.9), strokeWidth: 6 }}
    >
      {children}
    </text>
  );
}

interface OrbProps {
  family: FeelingFamily;
  /** Radius multiplier. */
  size?: number;
  /** Moving orbs stay out of the tab order; static ones can opt in. */
  focusable?: boolean;
}

/** Small glowing orb coloured by feeling family; the family name shows on hover or focus. */
export function Orb({ family, size = 1, focusable = false }: OrbProps) {
  const [shown, setShown] = useState(false);
  const r = ORB_R * size;
  return (
    <g
      tabIndex={focusable ? 0 : undefined}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      onFocus={() => setShown(true)}
      onBlur={() => setShown(false)}
      style={{ outline: 'none' }}
    >
      <title>{FEELING_LABEL[family]}</title>
      <circle r={r * 1.9} fill={feelingTone(family, 0.22)} />
      <circle r={r} fill={feelingTone(family)} stroke={tone('surface-raised', 0.85)} strokeWidth={2} />
      {shown && (
        <text
          y={-r * 2.2}
          textAnchor="middle"
          fontSize={24}
          fontWeight={600}
          fill={feelingTone(family)}
          style={{ paintOrder: 'stroke', stroke: tone('surface-raised'), strokeWidth: 7 }}
        >
          {FEELING_LABEL[family]}
        </text>
      )}
    </g>
  );
}

interface HazeProps {
  level: number;
  /** Centre and radius for a local haze; omitted for the whole stage. */
  local?: { cx: number; cy: number; r: number };
}

const STAGE_BLOBS = [
  { cx: 200, cy: 170, r: 330, drift: 0 },
  { cx: 760, cy: 150, r: 360, drift: 1 },
  { cx: 480, cy: 470, r: 420, drift: 2 },
];

/** Background haze whose density follows the anxiety value. */
export function Haze({ level, local }: HazeProps) {
  const move = useMove();
  const fade = useMove(0.55);
  const id = useId().replace(/:/g, '');
  const gradient = `haze-${id}`;
  const blobs = local ? [{ ...local, drift: 0 }] : STAGE_BLOBS;
  return (
    <motion.g initial={false} animate={{ opacity: Math.min(1, level * 1.15) }} transition={fade} pointerEvents="none">
      <defs>
        <radialGradient id={gradient}>
          <stop offset="0%" style={{ stopColor: tone('haze') }} stopOpacity={0.75} />
          <stop offset="55%" style={{ stopColor: tone('haze') }} stopOpacity={0.3} />
          <stop offset="100%" style={{ stopColor: tone('haze') }} stopOpacity={0} />
        </radialGradient>
      </defs>
      {local ? (
        <motion.circle initial={false} animate={{ cx: local.cx, cy: local.cy, r: local.r }} transition={move} fill={`url(#${gradient})`} />
      ) : (
        blobs.map((b, i) => (
          <circle key={i} className={`haze-drift-${b.drift}`} cx={b.cx} cy={b.cy} r={b.r} fill={`url(#${gradient})`} />
        ))
      )}
    </motion.g>
  );
}

/** Dashed outline around a team or organization. */
export function Boundary({ shape, label }: { shape: BoundaryShape; label?: string }) {
  const move = useMove();
  return (
    <g>
      <motion.rect
        initial={false}
        animate={{ x: shape.x, y: shape.y, width: shape.width, height: shape.height }}
        rx={64}
        transition={move}
        fill={tone('surface-raised', 0.25)}
        stroke={tone('ink-soft', 0.75)}
        strokeWidth={3}
        strokeDasharray="12 10"
      />
      {label && (
        <motion.text
          initial={false}
          animate={{ x: shape.x + shape.width / 2, y: shape.y - 12 }}
          transition={move}
          textAnchor="middle"
          fontSize={26}
          fontWeight={600}
          fill={tone('ink-soft')}
          style={{ paintOrder: 'stroke', stroke: tone('stage'), strokeWidth: 7 }}
        >
          {label}
        </motion.text>
      )}
    </g>
  );
}

/** Where a defense blocks, flips or redirects a feeling. */
export function Gate({ at, label, state = 'block' }: { at: [number, number]; label?: string; state?: 'block' | 'flip' | 'redirect' }) {
  const [x, y] = at;
  return (
    <g transform={`translate(${x} ${y})`}>
      <line x1={-14} y1={-34} x2={-14} y2={34} stroke={tone('glyph')} strokeWidth={6} strokeLinecap="round" />
      <line x1={14} y1={-34} x2={14} y2={34} stroke={tone('glyph')} strokeWidth={6} strokeLinecap="round" />
      {state === 'block' && <line x1={-14} y1={0} x2={14} y2={0} stroke={tone('feel-anger')} strokeWidth={5} strokeLinecap="round" />}
      {state === 'flip' && (
        <path d="M -12 12 Q 0 -24 12 12" fill="none" stroke={tone('feel-anger')} strokeWidth={5} strokeLinecap="round" />
      )}
      {state === 'redirect' && (
        <path d="M -12 -6 L 4 -6 L 4 18" fill="none" stroke={tone('feel-anger')} strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
      )}
      {label && (
        <text y={62} textAnchor="middle" fontSize={24} fontWeight={600} fill={tone('ink-soft')}>
          {label}
        </text>
      )}
    </g>
  );
}

/** The line between what is noticed and what is not. */
export function Waterline({ y, above, below }: { y: number; above?: string; below?: string }) {
  const wave = Array.from({ length: 101 }, (_, i) => `${i === 0 ? 'M' : 'L'} ${i * 10} ${(y + Math.sin(i / 2.4) * 6).toFixed(1)}`).join(' ');
  return (
    <g pointerEvents="none">
      <rect x={0} y={y} width={STAGE_WIDTH} height={STAGE_HEIGHT - y} fill={tone('accent', 0.07)} />
      <path d={wave} fill="none" stroke={tone('accent', 0.7)} strokeWidth={3} strokeDasharray="3 9" strokeLinecap="round" />
      {above && (
        <text x={STAGE_WIDTH - 18} y={y - 26} textAnchor="end" fontSize={22} fontWeight={600} fill={tone('ink-soft')}>
          {above}
        </text>
      )}
      {below && (
        <text x={STAGE_WIDTH - 18} y={y + 44} textAnchor="end" fontSize={22} fontWeight={600} fill={tone('ink-soft')}>
          {below}
        </text>
      )}
    </g>
  );
}

export function OverlayGlyph({ overlay }: { overlay: Overlay }) {
  return overlay.kind === 'waterline' ? (
    <Waterline y={overlay.y} above={overlay.above} below={overlay.below} />
  ) : (
    <Gate at={overlay.at} label={overlay.label} state={overlay.state} />
  );
}
