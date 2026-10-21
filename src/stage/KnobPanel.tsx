import { Lock } from 'lucide-react';
import type { KnobSpec, KnobValues } from './types';

interface KnobPanelProps {
  knobs: KnobSpec[];
  values: KnobValues;
  locked: boolean;
  onChange: (id: string, value: number) => void;
  compact?: boolean;
}

/** Plain-labelled sliders that stay locked until the guided beats have played once. */
export function KnobPanel({ knobs, values, locked, onChange, compact }: KnobPanelProps) {
  if (knobs.length === 0) return null;
  return (
    <div className={`rounded-2xl border border-line bg-surface-raised ${compact ? 'p-3' : 'p-4'}`}>
      <div className="mb-3 flex items-center gap-2 text-sm text-ink-soft">
        {locked && <Lock size={14} aria-hidden />}
        <span>{locked ? 'Watch the scene through once, then these unlock.' : 'Change the conditions and watch what shifts.'}</span>
      </div>
      <div className={`grid gap-4 ${compact ? '' : 'sm:grid-cols-2'}`}>
        {knobs.map((knob) => {
          const value = values[knob.id] ?? knob.default;
          const id = `knob-${knob.id}`;
          return (
            <div key={knob.id} className={locked ? 'opacity-55' : undefined}>
              <label htmlFor={id} className="mb-1 block text-sm font-semibold text-ink">
                {knob.label}
              </label>
              <input
                id={id}
                type="range"
                min={0}
                max={1}
                step={0.05}
                value={value}
                disabled={locked}
                onChange={(e) => onChange(knob.id, Number(e.target.value))}
                aria-valuetext={`${Math.round(value * 100)} percent, between ${knob.lowLabel} and ${knob.highLabel}`}
                className="h-2 w-full cursor-pointer accent-accent disabled:cursor-not-allowed"
              />
              <div className="mt-1 flex justify-between gap-3 text-xs text-ink-soft">
                <span>{knob.lowLabel}</span>
                <span className="text-right">{knob.highLabel}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
