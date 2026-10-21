import { Stage } from './Stage';
import type { Frame, SceneDef } from './types';

interface StoryboardProps {
  scene: SceneDef;
  getFrame: (index: number) => Frame;
}

/** Reduced-motion renderer: each settled beat as a static frame with its caption. */
export function Storyboard({ scene, getFrame }: StoryboardProps) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2" aria-label={scene.label}>
      {scene.beats.map((beat, i) => {
        const frame = getFrame(i);
        return (
          <li key={beat.id} className="overflow-hidden rounded-2xl border border-line bg-surface-raised">
            <Stage scene={scene} frame={frame} runKey={`${beat.id}-${i}`} still />
            <p className="p-3 text-sm leading-snug text-ink">
              <span className="mr-1.5 font-semibold text-accent">{i + 1}.</span>
              {beat.isYourPart && <span className="mr-1.5 rounded bg-accent-soft px-1.5 py-0.5 text-xs font-semibold text-accent">Your part</span>}
              {frame.beat.caption}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
