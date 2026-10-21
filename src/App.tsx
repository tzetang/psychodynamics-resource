import { useCallback } from 'react';
import { useHashRoute } from './lib/useHashRoute';
import { ConceptPage } from './pages/ConceptPage';
import { HomePage } from './pages/HomePage';
import { SituationPage } from './pages/SituationPage';
import { Footer, Header } from './shell/Header';

export default function App() {
  const { route, navigate } = useHashRoute();
  const presenting = route.name === 'situation' && route.present;

  const setPresent = useCallback(
    (present: boolean) => {
      if (route.name === 'situation') navigate({ ...route, present }, { replace: true });
    },
    [route, navigate],
  );

  return (
    <div className="flex min-h-screen flex-col bg-surface text-ink">
      {!presenting && <Header />}
      <main className={presenting ? 'flex-1' : 'mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6'}>
        {route.name === 'situation' ? (
          <SituationPage key={route.id} id={route.id} present={route.present} onPresentChange={setPresent} />
        ) : route.name === 'concept' ? (
          <ConceptPage key={route.id} id={route.id} />
        ) : (
          <HomePage />
        )}
      </main>
      {!presenting && <Footer />}
    </div>
  );
}
