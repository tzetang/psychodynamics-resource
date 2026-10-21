import { useCallback, useEffect, useState, type KeyboardEvent } from 'react';
import { useReducedMotion } from 'motion/react';
import { SlidersHorizontal, X } from 'lucide-react';
import { KnobPanel } from './KnobPanel';
import { Legend } from './Legend';
import { PlaybackBar } from './PlaybackBar';
import { Stage } from './Stage';
import { Storyboard } from './Storyboard';
import { FEELING_LABEL, feelingTone } from './tokens';
import { defaultKnobValues } from './settle';
import { usePlayback } from './usePlayback';
import { useSceneSnapshots } from './useSceneSnapshots';
import type { FeelingFamily, SceneDef } from './types';

interface SceneViewerProps {
  scene: SceneDef;
  /** Keep knobs unlocked, e.g. after the viewer has already seen the original scene. */
  startUnlocked?: boolean;
  /** Play through the beats as soon as the viewer mounts (used when a stance is chosen). */
  autoStart?: boolean;
  /** Present mode: the parent supplies a full-viewport container; chrome shrinks to what a room needs. */
  variant?: 'default' | 'present';
}

const isTypingTarget = (t: EventTarget | null) => t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement;

/** Stage, captions, playback and knobs for one scene. Key by `scene.id` to reset on change. */
export function SceneViewer({ scene, startUnlocked, autoStart, variant = 'default' }: SceneViewerProps) {
  const present = variant === 'present';
  const reduced = useReducedMotion();
  const [knobValues, setKnobValues] = useState(() => defaultKnobValues(scene));
  const [knobsOpen, setKnobsOpen] = useState(false);
  const { getFrame, count } = useSceneSnapshots(scene, knobValues);
  const playback = usePlayback(count, { finished: startUnlocked, autoStart });

  const frame = getFrame(playback.index);
  const unlocked = reduced || playback.finished;
  const setKnob = useCallback((id: string, value: number) => setKnobValues((v) => ({ ...v, [id]: value })), []);

  const toggle = playback.playing ? playback.pause : playback.isLast ? playback.restart : playback.play;

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.key === 'ArrowRight') playback.next();
    else if (e.key === 'ArrowLeft') playback.prev();
    else if (e.key === ' ') toggle();
    else return;
    e.preventDefault();
  };

  // Present mode steps from anywhere on the page, since there is no focused stage in a room.
  const { next, prev } = playback;
  useEffect(() => {
    if (!present) return;
    const onWindowKey = (e: globalThis.KeyboardEvent) => {
      if (isTypingTarget(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === ' ') toggle();
      else return;
      e.preventDefault();
    };
    window.addEventListener('keydown', onWindowKey);
    return () => window.removeEventListener('keydown', onWindowKey);
  });

  const families = [...new Set((frame.beat.particles ?? []).flatMap((p) => [p.family, ...(p.transformTo ? [p.transformTo] : [])]))] as FeelingFamily[];

  const caption = (
    <div className={present ? 'flex-none' : 'sm:min-h-[7.5rem] flex-1'}>
      <p
        aria-live="polite"
        aria-atomic="true"
        className={present ? 'text-[clamp(28px,3.2vw,48px)] font-medium leading-snug text-ink' : 'text-base leading-relaxed text-ink sm:text-lg'}
      >
        {frame.beat.isYourPart && (
          <span className={`mr-2 rounded bg-accent-soft px-2 py-0.5 font-semibold text-accent ${present ? 'text-lg' : 'text-sm'}`}>Your part</span>
        )}
        {frame.beat.caption}
      </p>
      {families.length > 0 && (
        <p className={`mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-ink-soft ${present ? 'text-lg' : 'text-sm'}`}>
          <span>Feelings moving:</span>
          {families.map((family) => (
            <span key={family} className="inline-flex items-center gap-1.5">
              <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: feelingTone(family) }} />
              {FEELING_LABEL[family]}
            </span>
          ))}
        </p>
      )}
    </div>
  );

  if (reduced) {
    return (
      <section aria-label={scene.label} className="space-y-4">
        <Storyboard scene={scene} getFrame={getFrame} />
        <KnobPanel knobs={scene.knobs} values={knobValues} locked={false} onChange={setKnob} />
      </section>
    );
  }

  const runKey = `${scene.id}-${playback.index}-${playback.run}`;

  if (present) {
    return (
      <section aria-label={scene.label} className="flex h-full min-h-0 flex-col gap-3 p-3 sm:p-5">
        <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl border border-line bg-stage">
          <div className="h-full w-full" style={{ aspectRatio: '1000 / 600', maxWidth: '100%' }}>
            <Stage scene={scene} frame={frame} runKey={runKey} fill />
          </div>
        </div>
        {caption}
        <div className="relative flex flex-wrap items-center gap-3">
          <div className="min-w-0 flex-1">
            <PlaybackBar playback={playback} large />
          </div>
          {scene.knobs.length > 0 && (
            <button
              type="button"
              onClick={() => setKnobsOpen((v) => !v)}
              aria-expanded={knobsOpen}
              className="inline-flex min-h-[3rem] items-center gap-2 rounded-lg border border-line bg-surface-raised px-4 text-base font-medium text-ink hover:bg-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <SlidersHorizontal size={18} aria-hidden />
              Knobs
            </button>
          )}
          {knobsOpen && (
            <div className="absolute bottom-full right-0 z-10 mb-2 w-[min(92vw,26rem)] rounded-2xl shadow-lg">
              <div className="flex justify-end rounded-t-2xl border border-b-0 border-line bg-surface-raised px-2 pt-2">
                <button
                  type="button"
                  onClick={() => setKnobsOpen(false)}
                  aria-label="Close knobs"
                  className="rounded p-1 text-ink-soft hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <X size={16} aria-hidden />
                </button>
              </div>
              <KnobPanel knobs={scene.knobs} values={knobValues} locked={!unlocked} onChange={setKnob} compact />
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section aria-label={scene.label} className="space-y-4">
      <div
        tabIndex={0}
        role="group"
        aria-roledescription="scene player"
        aria-label={`${scene.label}. Use left and right arrow keys to move between beats, and space to play.`}
        onKeyDown={onKeyDown}
        className="overflow-hidden rounded-2xl border border-line bg-stage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Stage scene={scene} frame={frame} runKey={runKey} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        {caption}
        <Legend />
      </div>

      <PlaybackBar playback={playback} />

      <KnobPanel knobs={scene.knobs} values={knobValues} locked={!unlocked} onChange={setKnob} />
    </section>
  );
}
