export function NotFound({ what }: { what: string }) {
  return (
    <div className="py-16 text-center">
      <h1 className="text-2xl font-bold">We couldn't find that {what}.</h1>
      <p className="mt-3 text-ink-soft">
        <a href="#/" className="font-medium text-accent underline">
          Back to what's happening
        </a>
      </p>
    </div>
  );
}
