import React, { useState, useMemo } from 'react';
import { CONCEPTS, CONCEPTS_BY_ID } from '../data/concepts';
import { FIVE_LENSES } from '../data/lenses';
import { ConceptCategory, LensId, PlaygroundId } from '../types/psychodynamics';
import { ConceptGraph } from './ConceptGraph';
import { ConceptInspector } from './ConceptInspector';
import {
  Search,
  Filter,
  Network,
  BookOpen,
  X,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface ConceptAtlasViewProps {
  selectedConceptId: string;
  onSelectConcept: (conceptId: string) => void;
  onOpenPlayground: (playgroundId: PlaygroundId, presetId?: string) => void;
}

const ALL_CATEGORIES: ConceptCategory[] = [
  'Defense Mechanism',
  'Psychic Structure',
  'Internal Object & Position',
  'Relational & Transference',
  'Developmental & Self',
  'Empirical & Clinical Framework',
];

export const ConceptAtlasView: React.FC<ConceptAtlasViewProps> = ({
  selectedConceptId,
  onSelectConcept,
  onOpenPlayground,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLens, setSelectedLens] = useState<LensId | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<ConceptCategory | 'all'>('all');
  const [selectedDmrsCluster, setSelectedDmrsCluster] = useState<'all' | 'mature' | 'neurotic' | 'immature'>('all');
  const [showGraph, setShowGraph] = useState<boolean>(true);

  const filteredConcepts = useMemo(() => {
    return CONCEPTS.filter((c) => {
      if (selectedLens !== 'all' && c.lens !== selectedLens) return false;
      if (selectedCategory !== 'all' && c.category !== selectedCategory) return false;
      if (selectedDmrsCluster !== 'all') {
        if (!c.dmrsLevel) return false;
        if (selectedDmrsCluster === 'mature' && c.dmrsLevel < 7) return false;
        if (selectedDmrsCluster === 'neurotic' && (c.dmrsLevel < 5 || c.dmrsLevel > 6)) return false;
        if (selectedDmrsCluster === 'immature' && c.dmrsLevel > 4) return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const hay = [
          c.name,
          c.subtitle,
          c.tenSecondIntuition,
          c.foundationalOrigin.theorist,
          c.category,
          ...c.empiricalResearch.map((e) => `${e.frameworkName} ${e.citation}`),
        ]
          .join(' ')
          .toLowerCase();
        return hay.includes(q);
      }

      return true;
    });
  }, [searchQuery, selectedLens, selectedCategory, selectedDmrsCluster]);

  const activeConcept =
    CONCEPTS_BY_ID[selectedConceptId] || filteredConcepts[0] || CONCEPTS[0];

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedLens('all');
    setSelectedCategory('all');
    setSelectedDmrsCluster('all');
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Top Search & Filter Control Panel */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/85 p-6 shadow-xl space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Grounded Reference Encyclopedia • {CONCEPTS.length} Core Concepts
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              Visual Concept Atlas & Relationship Graph
            </h1>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Every concept includes a 10-second plain-English intuition, Idea-vs-Affect routing circuit, foundational citation, modern empirical validation (DMRS, PDM-2, CCRT, TFP, MBT), and side-by-side disambiguation.
            </p>
          </div>

          <button
            onClick={() => setShowGraph((prev) => !prev)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
          >
            <Network className="w-4 h-4 text-indigo-400" />
            {showGraph ? 'Hide Constellation Map' : 'Show Constellation Map'}
          </button>
        </div>

        {/* Search Input + Filter Pills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Search Bar (5 cols) */}
          <div className="lg:col-span-5 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concept, theorist (Freud, Klein, Kohut, Fonagy), or tool (CCRT, DMRS)..."
              className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs md:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Dropdown & DMRS Filter (7 cols) */}
          <div className="lg:col-span-7 flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <Filter className="w-3.5 h-3.5 text-indigo-400" /> Filters:
            </div>

            <select
              value={selectedLens}
              onChange={(e) => setSelectedLens(e.target.value as LensId | 'all')}
              className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-indigo-400"
            >
              <option value="all">All 5 Lenses ({CONCEPTS.length})</option>
              {FIVE_LENSES.map((l) => (
                <option key={l.id} value={l.id}>
                  {l.shortName}
                </option>
              ))}
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as ConceptCategory | 'all')}
              className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-indigo-400"
            >
              <option value="all">All Categories</option>
              {ALL_CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={selectedDmrsCluster}
              onChange={(e) =>
                setSelectedDmrsCluster(
                  e.target.value as 'all' | 'mature' | 'neurotic' | 'immature'
                )
              }
              className="px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:border-indigo-400"
            >
              <option value="all">All DMRS Levels</option>
              <option value="mature">DMRS Level 7 (Mature)</option>
              <option value="neurotic">DMRS Levels 5–6 (Neurotic / Obsessional)</option>
              <option value="immature">DMRS Levels 1–4 (Immature / Splitting / Disavowal)</option>
            </select>

            {(searchQuery ||
              selectedLens !== 'all' ||
              selectedCategory !== 'all' ||
              selectedDmrsCluster !== 'all') && (
              <button
                onClick={resetFilters}
                className="px-3 py-2 rounded-xl bg-rose-950/50 hover:bg-rose-900/60 border border-rose-500/30 text-xs text-rose-200 transition"
              >
                Reset ({filteredConcepts.length} shown)
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Interactive Node-Link Concept Constellation Graph */}
      {showGraph && (
        <ConceptGraph
          concepts={CONCEPTS}
          selectedConceptId={activeConcept.id}
          onSelectConcept={onSelectConcept}
        />
      )}

      {/* Selected Concept Anatomy Inspector */}
      <ConceptInspector
        concept={activeConcept}
        onSelectConcept={onSelectConcept}
        onOpenPlayground={onOpenPlayground}
      />

      {/* Filtered Concept Cards Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-indigo-400" />
            Browse All Matching Concepts ({filteredConcepts.length} of {CONCEPTS.length})
          </h3>
          <span className="text-xs text-slate-400">
            Click any card to load it into the Concept Anatomy Inspector above
          </span>
        </div>

        {filteredConcepts.length === 0 ? (
          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-8 text-center space-y-3">
            <p className="text-sm text-slate-300">
              No concepts matched your current search or filter combination.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredConcepts.map((c) => {
              const lensObj = FIVE_LENSES.find((l) => l.id === c.lens) || FIVE_LENSES[0];
              const isSelected = c.id === activeConcept.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    onSelectConcept(c.id);
                    window.scrollTo({ top: 280, behavior: 'smooth' });
                  }}
                  className={`text-left p-5 rounded-2xl border transition flex flex-col justify-between ${
                    isSelected
                      ? 'bg-indigo-950/50 border-indigo-400 ring-2 ring-indigo-400/30 shadow-lg'
                      : 'bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-1.5">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${lensObj.badgeClasses}`}>
                        {lensObj.shortName}
                      </span>
                      {c.dmrsLevel && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-amber-300 border border-slate-700">
                          DMRS L{c.dmrsLevel}
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white leading-snug">{c.name}</h4>
                      <div className="text-[11px] font-mono text-indigo-300 mt-0.5 line-clamp-1">
                        {c.subtitle}
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {c.tenSecondIntuition}
                    </p>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 font-mono truncate">
                      {c.foundationalOrigin.theorist.split('&')[0]} ({c.foundationalOrigin.year})
                    </span>
                    <span className="text-indigo-400 font-medium inline-flex items-center gap-1 shrink-0">
                      Inspect <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};
