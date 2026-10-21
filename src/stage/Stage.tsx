import { motion } from 'motion/react';
import { Boundary, Haze, Leader, OverlayGlyph, Person, useMove } from './glyphs';
import { ParticleLayer, StaticParticleLayer } from './particles';
import { tone } from './tokens';
import { STAGE_HEIGHT, STAGE_WIDTH, type Frame, type SceneDef } from './types';

interface StageProps {
  scene: SceneDef;
  frame: Frame;
  /** Changes whenever travelling particles should restart. */
  runKey: string;
  /** Storyboard mode: particles are drawn as static arrows. */
  still?: boolean;
  /** Fill the parent's height (Present mode) instead of sizing by width. */
  fill?: boolean;
}

/** Local haze radius around an actor, in viewBox units. */
const ACTOR_HAZE_R = 200;

/** Renders one settled frame; positions animate whenever the frame changes. */
export function Stage({ scene, frame, runKey, still, fill }: StageProps) {
  const move = useMove();
  const fade = useMove(0.55);
  const { beat, snapshot } = frame;
  const highlighted = new Set(beat.highlight ?? []);
  const shown = new Set(beat.show ?? []);
  const hidden = new Set(beat.hide ?? []);

  let local: { cx: number; cy: number; r: number } | undefined;
  if (beat.hazeScope && beat.hazeScope !== 'stage') {
    const shape = snapshot.boundaries[beat.hazeScope];
    const point = snapshot.positions[beat.hazeScope];
    if (shape) local = { cx: shape.x + shape.width / 2, cy: shape.y + shape.height / 2, r: Math.max(shape.width, shape.height) * 0.7 };
    else if (point) local = { cx: point[0], cy: point[1], r: ACTOR_HAZE_R };
  }

  return (
    <svg
      viewBox={`0 0 ${STAGE_WIDTH} ${STAGE_HEIGHT}`}
      role="img"
      aria-label={scene.label}
      className={`block w-full select-none ${fill ? 'h-full' : 'h-auto'}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <rect width={STAGE_WIDTH} height={STAGE_HEIGHT} fill={tone('stage')} />

      {scene.overlays
        ?.filter((o) => o.kind === 'waterline')
        .map((o) => (
          <motion.g key={o.id} initial={false} animate={{ opacity: shown.has(o.id) ? 1 : 0 }} transition={fade}>
            <OverlayGlyph overlay={o} />
          </motion.g>
        ))}

      <Haze level={beat.haze} local={local} />

      {scene.boundaries?.map((b) => {
        const shape = snapshot.boundaries[b.id];
        return shape ? <Boundary key={b.id} shape={shape} label={b.label} /> : null;
      })}

      {scene.overlays
        ?.filter((o) => o.kind === 'gate')
        .map((o) => (
          <motion.g key={o.id} initial={false} animate={{ opacity: shown.has(o.id) ? 1 : 0 }} transition={fade}>
            <OverlayGlyph overlay={o} />
          </motion.g>
        ))}

      {scene.actors.filter((a) => a.role !== 'anchor').map((actor) => {
        const [x, y] = snapshot.positions[actor.id] ?? actor.home;
        const highlight = highlighted.has(actor.id);
        return (
          <motion.g key={actor.id} initial={false} animate={{ x, y, opacity: hidden.has(actor.id) ? 0 : 1 }} transition={move}>
            {actor.role === 'leader' ? (
              <Leader label={actor.label} highlight={highlight} />
            ) : (
              <Person label={actor.label} highlight={highlight} outsider={actor.role === 'outsider'} />
            )}
          </motion.g>
        );
      })}

      {beat.particles &&
        (still ? (
          <StaticParticleLayer particles={beat.particles} positions={snapshot.positions} />
        ) : (
          <ParticleLayer particles={beat.particles} positions={snapshot.positions} runKey={runKey} />
        ))}
    </svg>
  );
}
