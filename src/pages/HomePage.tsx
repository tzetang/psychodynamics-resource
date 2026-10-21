import { ZOOM_LEVELS } from '../content/types';
import { concepts, situationsByLevel } from '../content';
import { SceneThumb } from '../shell/SceneThumb';

export function HomePage() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">What's happening?</h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft">
          Pick the situation that sounds like yours. Watch how it unfolds, put a name to it, then try a different stance.
        </p>
      </section>

      {ZOOM_LEVELS.map((level) => {
        const items = situationsByLevel(level.id);
        if (items.length === 0) return null;
        return (
          <section key={level.id} aria-labelledby={`level-${level.id}`}>
            <h2 id={`level-${level.id}`} className="text-xl font-bold">
              {level.label}
            </h2>
            <p className="mt-1 text-ink-soft">{level.description}</p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#/s/${s.id}`}
                    className="group block h-full overflow-hidden rounded-2xl border border-line bg-surface-raised transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <SceneThumb scene={s.watch} />
                    <span className="block p-4 text-base font-semibold leading-snug text-ink group-hover:text-accent">{s.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        );
      })}

      {concepts.length > 0 && (
        <section aria-labelledby="ideas">
          <h2 id="ideas" className="text-xl font-bold">
            The ideas behind the pictures
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {concepts.map((c) => (
              <li key={c.id}>
                <a
                  href={`#/c/${c.id}`}
                  className="inline-block rounded-full border border-line bg-surface-raised px-3 py-1.5 text-sm font-medium text-ink hover:bg-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
