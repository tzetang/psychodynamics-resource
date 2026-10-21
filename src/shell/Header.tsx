export function Header() {
  return (
    <header className="border-b border-line bg-surface-raised">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#/"
          className="text-base font-bold tracking-tight text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:text-lg"
        >
          Psychodynamics at Work
        </a>
        <a
          href="#/"
          className="text-sm font-medium text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          All situations
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <p className="mx-auto max-w-5xl px-4 py-5 text-sm leading-relaxed text-ink-soft sm:px-6">
        These pictures describe patterns between people, not types of people. They simplify on purpose. For anything that feels bigger than
        a work dynamic, talk to HR, a coach or a mental-health professional.
      </p>
    </footer>
  );
}
