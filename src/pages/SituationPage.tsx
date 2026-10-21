import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { ArrowLeft, Presentation } from 'lucide-react';
import { conceptById, situationById } from '../content';
import { ZOOM_LEVELS } from '../content/types';
import { NotFound } from '../shell/NotFound';
import { SceneViewer } from '../stage/SceneViewer';
import { PresentSlot } from './PresentSlot';

interface SituationPageProps {
  id: string;
  present: boolean;
  onPresentChange: (present: boolean) => void;
}

function Step({ number, title, hint, hidden, children }: { number: number; title: string; hint?: string; hidden?: boolean; children: ReactNode }) {
  return (
    <section className={hidden ? 'hidden' : 'space-y-4'} aria-label={`${title} step`}>
      <div className="flex items-baseline gap-3">
        <span aria-hidden className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-surface-raised">
          {number}
        </span>
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          {hint && <p className="text-sm text-ink-soft">{hint}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}

export function SituationPage({ id, present, onPresentChange }: SituationPageProps) {
  const situation = situationById.get(id);
  const [tryId, setTryId] = useState<string | null>(null);

  const stance = situation?.tries.find((t) => t.id === tryId);
  const tryScene = useMemo(
    () => (situation && stance ? { ...situation.watch, id: `${situation.watch.id}:${stance.id}`, beats: stance.afterBeats } : null),
    [situation, stance],
  );

  useEffect(() => {
    if (!present) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onPresentChange(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [present, onPresentChange]);

  if (!situation) return <NotFound what="situation" />;

  const level = ZOOM_LEVELS.find((l) => l.id === situation.level);
  const watching = present && !tryScene;
  const exit = () => onPresentChange(false);

  return (
    <article className="space-y-10">
      <header className={present ? 'hidden' : 'space-y-3'}>
        <a
          href="#/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <ArrowLeft size={16} aria-hidden />
          What's happening?
        </a>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">{level?.label}</p>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{situation.title}</h1>
          </div>
          <button
            type="button"
            onClick={() => onPresentChange(true)}
            className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface-raised px-3 py-2 text-sm font-medium text-ink hover:bg-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <Presentation size={16} aria-hidden />
            Present
          </button>
        </div>
      </header>

      <Step number={1} title="Watch" hint="Step through the scene. Your part is marked." hidden={present && !watching}>
        <PresentSlot present={present} active={watching} onExit={exit}>
          <SceneViewer scene={situation.watch} variant={watching ? 'present' : 'default'} />
        </PresentSlot>
      </Step>

      <Step number={2} title="Name" hint="The idea behind what you just saw." hidden={present}>
        <ul className="grid gap-3 sm:grid-cols-2">
          {situation.name.map((conceptId) => {
            const concept = conceptById.get(conceptId);
            if (!concept) return null;
            return (
              <li key={conceptId}>
                <a
                  href={`#/c/${concept.id}`}
                  className="block h-full rounded-2xl border border-line bg-surface-raised p-4 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  <span className="block text-base font-semibold text-accent">{concept.name}</span>
                  <span className="mt-1 block text-base leading-relaxed text-ink">{concept.definition}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </Step>

      <Step number={3} title="Try" hint="Pick a stance and watch the picture change." hidden={present && !tryScene}>
        <div className={present ? 'hidden' : 'space-y-3'}>
          <div role="group" aria-label="Leader stances" className="flex flex-wrap gap-2">
            {situation.tries.map((t) => (
              <button
                key={t.id}
                type="button"
                aria-pressed={t.id === tryId}
                onClick={() => setTryId(t.id)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  t.id === tryId ? 'border-accent bg-accent text-surface-raised' : 'border-line bg-surface-raised text-ink hover:bg-accent-soft'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          {stance ? <p className="max-w-3xl text-base leading-relaxed text-ink">{stance.stance}</p> : <p className="text-ink-soft">Nothing chosen yet.</p>}
        </div>
        {tryScene && (
          <PresentSlot present={present} active={!!tryScene} onExit={exit}>
            <SceneViewer key={tryScene.id} scene={tryScene} startUnlocked autoStart variant={present ? 'present' : 'default'} />
          </PresentSlot>
        )}
      </Step>

      <aside className={present ? 'hidden' : 'rounded-2xl border-l-4 border-accent bg-accent-soft p-5'} aria-label="When this is more than a team dynamic">
        <h2 className="text-base font-bold text-ink">When this is more than a team dynamic</h2>
        <p className="mt-2 text-base leading-relaxed text-ink">{situation.escalation}</p>
      </aside>
    </article>
  );
}
