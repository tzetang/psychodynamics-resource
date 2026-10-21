import { useCallback, useEffect, useState } from 'react';

export type Route =
  | { name: 'home'; present: boolean }
  | { name: 'situation'; id: string; present: boolean }
  | { name: 'concept'; id: string; present: boolean };

export function parseHash(hash: string): Route {
  const raw = hash.replace(/^#/, '');
  const [path, query = ''] = raw.split('?');
  const present = new URLSearchParams(query).get('present') === '1';
  const parts = path.split('/').filter(Boolean);

  if (parts[0] === 's' && parts[1]) return { name: 'situation', id: decodeURIComponent(parts[1]), present };
  if (parts[0] === 'c' && parts[1]) return { name: 'concept', id: decodeURIComponent(parts[1]), present };
  return { name: 'home', present };
}

export function routeToHash(route: Route): string {
  const base =
    route.name === 'situation' ? `#/s/${encodeURIComponent(route.id)}`
    : route.name === 'concept' ? `#/c/${encodeURIComponent(route.id)}`
    : '#/';
  return route.present ? `${base}?present=1` : base;
}

/** Hash routing without a router dependency; the browser owns back/forward. */
export function useHashRoute() {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));

  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  /** Pushes a history entry; `replace` swaps the current one (e.g. toggling present mode). */
  const navigate = useCallback((next: Route, options?: { replace?: boolean }) => {
    const hash = routeToHash(next);
    if (options?.replace) {
      window.history.replaceState(null, '', hash);
      setRoute(parseHash(hash));
    } else {
      window.location.hash = hash;
    }
  }, []);

  return { route, navigate };
}
