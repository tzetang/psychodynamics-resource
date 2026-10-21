import { useState, useMemo, useEffect } from 'react';
import { LensId, PlaygroundId } from './types/psychodynamics';
import { CONCEPTS } from './data/concepts';
import { FIVE_LENSES } from './data/lenses';
import { FiveLensesView } from './components/FiveLensesView';
import { PlaygroundsView } from './components/PlaygroundsView';
import { ConceptAtlasView } from './components/ConceptAtlasView';
import { OnboardingView } from './components/OnboardingView';
import {
  Compass,
  Play,
  BookOpen,
  Search,
  BrainCircuit,
  Sparkles,
  ArrowUpRight,
  X,
  Sun,
  Moon,
} from 'lucide-react';

type ActiveTab = 'onboarding' | 'lenses' | 'playgrounds' | 'atlas';
type ThemeMode = 'dark' | 'light';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('onboarding');
  const [selectedLensId, setSelectedLensId] = useState<LensId>('drive-conflict');
  const [activePlaygroundId, setActivePlaygroundId] = useState<PlaygroundId>('defense-switchboard');
  const [activePresetId, setActivePresetId] = useState<string | undefined>('repression');
  const [selectedConceptId, setSelectedConceptId] = useState<string>('triangle-of-conflict');
  const [quickSearch, setQuickSearch] = useState<string>('');
  const [quickSearchOpen, setQuickSearchOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('psychodynamics-theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('theme-light');
    } else {
      root.classList.remove('theme-light');
    }
    window.localStorage.setItem('psychodynamics-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const quickResults = useMemo(() => {
    if (!quickSearch.trim()) return [];
    const q = quickSearch.toLowerCase();
    return CONCEPTS.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.subtitle.toLowerCase().includes(q) ||
        c.tenSecondIntuition.toLowerCase().includes(q) ||
        c.foundationalOrigin.theorist.toLowerCase().includes(q)
    ).slice(0, 7);
  }, [quickSearch]);

  const handleOpenLens = (lensId: LensId) => {
    setSelectedLensId(lensId);
    setActiveTab('lenses');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPlayground = (playgroundId: PlaygroundId, presetId?: string) => {
    setActivePlaygroundId(playgroundId);
    setActivePresetId(presetId);
    setActiveTab('playgrounds');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInspectConcept = (conceptId: string) => {
    setSelectedConceptId(conceptId);
    setActiveTab('atlas');
    setQuickSearch('');
    setQuickSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col transition-colors duration-200">
      {/* Top Sticky Navigation Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/90 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          {/* Brand Logo */}
          <button
            onClick={() => setActiveTab('onboarding')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-rose-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <BrainCircuit className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-sm sm:text-base text-white tracking-tight flex items-center gap-2">
                Psychodynamics Atlas
                <span className="hidden md:inline-block text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                  Foundational + Empirical
                </span>
              </div>
              <div className="text-[11px] text-slate-400">
                Interactive Visual Guide & Dynamic Simulators
              </div>
            </div>
          </button>

          {/* Primary Navigation Tabs */}
          <nav className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveTab('onboarding')}
              className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                activeTab === 'onboarding'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>0. Start Here</span>
              <span className="hidden lg:inline-block text-[10px] font-mono opacity-80">
                (Orientation)
              </span>
            </button>

            <button
              onClick={() => setActiveTab('lenses')}
              className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                activeTab === 'lenses'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>1. The 5 Lenses</span>
              <span className="hidden lg:inline-block text-[10px] font-mono opacity-80">
                (5 Schools)
              </span>
            </button>

            <button
              onClick={() => setActiveTab('playgrounds')}
              className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                activeTab === 'playgrounds'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>2. Playgrounds</span>
              <span className="hidden lg:inline-block text-[10px] font-mono opacity-80">
                (3 Labs)
              </span>
            </button>

            <button
              onClick={() => setActiveTab('atlas')}
              className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                activeTab === 'atlas'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>3. Concept Atlas</span>
              <span className="hidden lg:inline-block text-[10px] font-mono opacity-80">
                ({CONCEPTS.length})
              </span>
            </button>
          </nav>

          {/* Right Utilities: Global Instant Concept Lookup + Light/Dark Theme Toggle */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-60">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={quickSearch}
                onFocus={() => setQuickSearchOpen(true)}
                onChange={(e) => {
                  setQuickSearch(e.target.value);
                  setQuickSearchOpen(true);
                }}
                placeholder="Quick lookup (e.g. Splitting, CCRT)..."
                className="w-full pl-8 pr-7 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400"
              />
              {quickSearch && (
                <button
                  onClick={() => {
                    setQuickSearch('');
                    setQuickSearchOpen(false);
                  }}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Quick Search Dropdown */}
              {quickSearchOpen && quickResults.length > 0 && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-2 z-50 space-y-1">
                  <div className="px-2.5 py-1 text-[10px] font-mono uppercase text-slate-400 flex items-center justify-between">
                    <span>Instant Atlas Jump</span>
                    <span>{quickResults.length} matches</span>
                  </div>
                  {quickResults.map((c) => {
                    const lens = FIVE_LENSES.find((l) => l.id === c.lens);
                    return (
                      <button
                        key={c.id}
                        onClick={() => handleInspectConcept(c.id)}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-800 transition flex items-start justify-between gap-2"
                      >
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-white truncate">{c.name}</div>
                          <div className="text-[11px] text-slate-400 truncate">{c.subtitle}</div>
                        </div>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-indigo-300 border border-slate-800 shrink-0 flex items-center gap-0.5">
                          {lens?.shortName.split('.')[1] || c.category}
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-200 flex items-center gap-1.5 shrink-0 transition"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden md:inline">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-500" />
                  <span className="hidden md:inline">Dark</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main
        className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-6"
        onClick={() => {
          if (quickSearchOpen) setQuickSearchOpen(false);
        }}
      >
        {activeTab === 'onboarding' && (
          <OnboardingView
            onOpenLens={handleOpenLens}
            onOpenPlayground={handleOpenPlayground}
            onInspectConcept={handleInspectConcept}
          />
        )}

        {activeTab === 'lenses' && (
          <FiveLensesView
            selectedLensId={selectedLensId}
            onSelectLens={setSelectedLensId}
            onOpenPlayground={handleOpenPlayground}
            onInspectConcept={handleInspectConcept}
          />
        )}

        {activeTab === 'playgrounds' && (
          <PlaygroundsView
            activePlaygroundId={activePlaygroundId}
            activePresetId={activePresetId}
            onSelectPlayground={(pid, preset) => {
              setActivePlaygroundId(pid);
              setActivePresetId(preset);
            }}
            onInspectConcept={handleInspectConcept}
          />
        )}

        {activeTab === 'atlas' && (
          <ConceptAtlasView
            selectedConceptId={selectedConceptId}
            onSelectConcept={setSelectedConceptId}
            onOpenPlayground={handleOpenPlayground}
          />
        )}
      </main>

      {/* Grounded Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/90 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>
              Grounded in Foundational Psychoanalytic Theory (Freud, A. Freud, Klein, Winnicott, Fairbairn, Kohut, Bowlby, Mitchell) & Modern Empirical Frameworks (PDM-2, DMRS, CCRT, TFP, MBT, ISTDP, Solms).
            </span>
          </div>
          <div className="font-mono text-[11px] text-slate-400 shrink-0">
            Educational & Theoretical Atlas
          </div>
        </div>
      </footer>
    </div>
  );
}
