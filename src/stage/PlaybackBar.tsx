import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from 'lucide-react';
import type { Playback } from './usePlayback';

const base =
  'inline-flex items-center justify-center gap-1.5 rounded-lg border px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';
const button = `${base} border-line bg-surface-raised text-ink hover:bg-accent-soft`;
const primary = `${base} border-accent bg-accent text-surface-raised hover:opacity-90`;

export function PlaybackBar({ playback, large }: { playback: Playback; large?: boolean }) {
  const { index, count, playing, isLast, isFirst, autoplay } = playback;
  const size = large ? 'min-h-[3rem] px-4 text-base' : '';
  const primaryLabel = playing ? 'Pause' : isLast ? 'Replay' : isFirst ? 'Play' : 'Continue';
  const onPrimary = playing ? playback.pause : isLast ? playback.restart : playback.play;
  const PrimaryIcon = playing ? Pause : isLast ? RotateCcw : Play;

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2" role="group" aria-label="Scene playback">
      <button type="button" onClick={onPrimary} className={`${primary} ${size}`}>
        <PrimaryIcon size={16} aria-hidden />
        {primaryLabel}
      </button>
      <button type="button" onClick={playback.prev} disabled={isFirst} className={`${button} ${size}`} aria-label="Previous beat">
        <ChevronLeft size={18} aria-hidden />
      </button>
      <button type="button" onClick={playback.next} disabled={isLast} className={`${button} ${size}`} aria-label="Next beat">
        <ChevronRight size={18} aria-hidden />
      </button>
      <button type="button" onClick={playback.restart} disabled={isFirst} className={`${button} ${size}`} aria-label="Restart">
        <RotateCcw size={16} aria-hidden />
      </button>

      <label className="flex min-w-[8rem] flex-1 items-center gap-2 text-sm text-ink-soft">
        <span className="sr-only">Beat</span>
        <input
          type="range"
          min={0}
          max={count - 1}
          step={1}
          value={index}
          onChange={(e) => playback.goTo(Number(e.target.value))}
          aria-valuetext={`Beat ${index + 1} of ${count}`}
          className="h-2 w-full cursor-pointer accent-accent"
        />
        <span aria-hidden className="whitespace-nowrap tabular-nums">
          {index + 1} / {count}
        </span>
      </label>

      <label className="inline-flex cursor-pointer items-center gap-2 text-sm text-ink-soft">
        <input type="checkbox" checked={autoplay} onChange={(e) => playback.setAutoplay(e.target.checked)} className="h-4 w-4 accent-accent" />
        Autoplay
      </label>
    </div>
  );
}
