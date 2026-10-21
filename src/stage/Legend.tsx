import { useState, type ReactNode } from 'react';
import { HelpCircle, X } from 'lucide-react';
import { Boundary, Gate, Leader, Orb, Person } from './glyphs';
import { FEELING_LABEL, FEELING_ORDER, feelingTone, tone } from './tokens';

function Swatch({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 120 90" width={72} height={54} aria-hidden className="shrink-0 rounded-lg bg-stage">
      {children}
    </svg>
  );
}

const ITEMS: { name: string; meaning: string; swatch: ReactNode }[] = [
  {
    name: 'Person',
    meaning: 'A hollow circle: someone in the situation.',
    swatch: (
      <g transform="translate(60 45) scale(0.9)">
        <Person />
      </g>
    ),
  },
  {
    name: 'You',
    meaning: 'A ringed, filled circle: your own position as the leader.',
    swatch: (
      <g transform="translate(60 45) scale(0.8)">
        <Leader label="" />
      </g>
    ),
  },
  {
    name: 'Someone outside',
    meaning: 'A dashed circle: someone outside the group, or not in the room (another team, or a person from your past).',
    swatch: (
      <g transform="translate(60 45) scale(0.9)">
        <Person outsider />
      </g>
    ),
  },
  {
    name: 'Feeling',
    meaning: 'A small glowing orb. Its colour is the kind of feeling, and it travels from one person to another.',
    swatch: (
      <g transform="translate(60 45) scale(1.6)">
        <Orb family="anxiety" />
      </g>
    ),
  },
  {
    name: 'Anxiety haze',
    meaning: 'A background haze. The denser it is, the more tension is in the room.',
    swatch: (
      <>
        <defs>
          <radialGradient id="legend-haze">
            <stop offset="0%" style={{ stopColor: tone('haze') }} stopOpacity={0.8} />
            <stop offset="100%" style={{ stopColor: tone('haze') }} stopOpacity={0} />
          </radialGradient>
        </defs>
        <circle cx={60} cy={45} r={44} fill="url(#legend-haze)" />
      </>
    ),
  },
  {
    name: 'Boundary',
    meaning: 'A dashed outline around a team or an organization: who is inside and who is not.',
    swatch: (
      <Boundary shape={{ x: 12, y: 16, width: 96, height: 58 }} />
    ),
  },
  {
    name: 'Gate',
    meaning: 'Where a defense blocks, flips or redirects a feeling.',
    swatch: (
      <g transform="scale(0.8) translate(15 12)">
        <Gate at={[60, 40]} />
      </g>
    ),
  },
  {
    name: 'Waterline',
    meaning: 'The line between what is noticed (above) and what is not (below).',
    swatch: (
      <>
        <rect x={0} y={45} width={120} height={45} fill={tone('accent', 0.1)} />
        <line x1={0} y1={45} x2={120} y2={45} stroke={tone('accent', 0.7)} strokeWidth={2.5} strokeDasharray="2 6" strokeLinecap="round" />
      </>
    ),
  },
];

/** Glyph legend: every glyph with a one-line plain-language meaning. */
export function Legend() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="glyph-legend"
        className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-raised px-3 py-2 text-sm font-medium text-ink-soft hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
      >
        <HelpCircle size={16} aria-hidden />
        What do the shapes mean?
      </button>
      {open && (
        <div
          id="glyph-legend"
          role="dialog"
          aria-label="What the shapes mean"
          className="absolute left-0 z-20 sm:left-auto sm:right-0 mt-2 w-[min(92vw,26rem)] rounded-2xl border border-line bg-surface-raised p-4 shadow-lg"
        >
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-ink">What the shapes mean</h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close legend"
              className="rounded p-1 text-ink-soft hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              <X size={16} aria-hidden />
            </button>
          </div>
          <ul className="space-y-3">
            {ITEMS.map((item) => (
              <li key={item.name} className="flex items-center gap-3">
                <Swatch>{item.swatch}</Swatch>
                <p className="text-sm leading-snug text-ink-soft">
                  <span className="font-semibold text-ink">{item.name}.</span> {item.meaning}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t border-line pt-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-soft">Feeling colours</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
              {FEELING_ORDER.map((family) => (
                <li key={family} className="flex items-center gap-1.5 text-sm text-ink-soft">
                  <span aria-hidden className="inline-block h-3 w-3 rounded-full" style={{ background: feelingTone(family) }} />
                  {FEELING_LABEL[family]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
