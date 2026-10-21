import { conceptById, situationsForConcept } from '../content';
import { NotFound } from '../shell/NotFound';
import { SceneViewer } from '../stage/SceneViewer';

export function ConceptPage({ id }: { id: string }) {
  const concept = conceptById.get(id);
  if (!concept) return <NotFound what="idea" />;

  const situations = situationsForConcept(concept.id);

  return (
    <article className="space-y-8">
      <header>
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">An idea behind the pictures</p>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{concept.name}</h1>
      </header>

      <div className="space-y-3">
        <SceneViewer key={concept.clip.id} scene={concept.clip} autoStart />
        <p className="text-sm italic leading-relaxed text-ink-soft">What this picture leaves out: {concept.leavesOut}</p>
      </div>

      <p className="max-w-3xl text-xl font-medium leading-relaxed text-ink">{concept.definition}</p>

      <section aria-labelledby="at-work" className="space-y-2">
        <h2 id="at-work" className="text-lg font-bold">
          What it looks like at work
        </h2>
        <ul className="list-disc space-y-1.5 pl-5 text-base leading-relaxed text-ink">
          {concept.atWork.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="your-part" className="space-y-2">
        <h2 id="your-part" className="text-lg font-bold">
          Your part
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-ink">{concept.yourPart}</p>
      </section>

      {situations.length > 0 && (
        <section aria-labelledby="seen-in" className="space-y-2">
          <h2 id="seen-in" className="text-lg font-bold">
            Where you might see it
          </h2>
          <ul className="space-y-1.5">
            {situations.map((s) => (
              <li key={s.id}>
                <a href={`#/s/${s.id}`} className="text-base font-medium text-accent underline">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <details className="rounded-2xl border border-line bg-surface-raised p-4">
        <summary className="cursor-pointer text-base font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent">
          Where this comes from
        </summary>
        <div className="mt-3 space-y-2 text-base leading-relaxed text-ink">
          <p>{concept.sources.theorists.join(', ')}</p>
          <ul className="list-disc pl-5">
            {concept.sources.works.map((w) => (
              <li key={w.title}>
                <cite>{w.title}</cite> ({w.year})
              </li>
            ))}
          </ul>
        </div>
      </details>
    </article>
  );
}
