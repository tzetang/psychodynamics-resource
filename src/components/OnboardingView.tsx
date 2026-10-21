import React, { useState } from 'react';
import {
  ONBOARDING_CORE_PREMISE,
  SURFACE_VS_DEPTH_COMPARISONS,
  ONBOARDING_PILLARS,
  REAL_WORLD_SCENARIOS,
  HISTORICAL_EVOLUTION_ERAS,
  MYTH_VS_REALITY_ITEMS,
  STARTER_PATHWAYS,
} from '../data/onboarding';
import { FIVE_LENSES } from '../data/lenses';
import { CONCEPTS_BY_ID } from '../data/concepts';
import { LensId, PlaygroundId } from '../types/psychodynamics';
import {
  Sparkles,
  Compass,
  Eye,
  Layers,
  FlaskConical,
  History,
  CheckCircle2,
  ArrowRight,
  Play,
  BookOpen,
  ShieldAlert,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Quote,
} from 'lucide-react';

interface OnboardingViewProps {
  onOpenLens: (lensId: LensId) => void;
  onOpenPlayground: (playgroundId: PlaygroundId, presetId?: string) => void;
  onInspectConcept: (conceptId: string) => void;
}

export const OnboardingView: React.FC<OnboardingViewProps> = ({
  onOpenLens,
  onOpenPlayground,
  onInspectConcept,
}) => {
  const [selectedSurfaceComparisonId, setSelectedSurfaceComparisonId] = useState<string>(
    SURFACE_VS_DEPTH_COMPARISONS[0].id
  );
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(
    REAL_WORLD_SCENARIOS[0].id
  );
  const [scenarioViewMode, setScenarioViewMode] = useState<'conscious' | 'underneath'>('underneath');
  const [formalBridgeOpen, setFormalBridgeOpen] = useState<boolean>(false);
  const [selectedEraId, setSelectedEraId] = useState<string>(HISTORICAL_EVOLUTION_ERAS[0].id);
  const [expandedMythIds, setExpandedMythIds] = useState<Record<string, boolean>>({
    [MYTH_VS_REALITY_ITEMS[0].id]: true,
  });

  const activeComparison =
    SURFACE_VS_DEPTH_COMPARISONS.find((c) => c.id === selectedSurfaceComparisonId) ||
    SURFACE_VS_DEPTH_COMPARISONS[0];

  const activeScenario =
    REAL_WORLD_SCENARIOS.find((s) => s.id === selectedScenarioId) || REAL_WORLD_SCENARIOS[0];

  const activeEra =
    HISTORICAL_EVOLUTION_ERAS.find((e) => e.id === selectedEraId) || HISTORICAL_EVOLUTION_ERAS[0];

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleMyth = (mythId: string) => {
    setExpandedMythIds((prev) => ({
      ...prev,
      [mythId]: !prev[mythId],
    }));
  };

  const pillarAccentClasses: Record<'indigo' | 'emerald' | 'amber' | 'rose', string> = {
    indigo: 'border-indigo-500/30 bg-indigo-950/20 text-indigo-300',
    emerald: 'border-emerald-500/30 bg-emerald-950/20 text-emerald-300',
    amber: 'border-amber-500/30 bg-amber-950/20 text-amber-300',
    rose: 'border-rose-500/30 bg-rose-950/20 text-rose-300',
  };

  return (
    <div className="space-y-12 pb-14">
      {/* Hero Banner & Quick Stage Jumper */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 p-6 md:p-9 shadow-2xl">
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> {ONBOARDING_CORE_PREMISE.eyebrow}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
            {ONBOARDING_CORE_PREMISE.headline}
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {ONBOARDING_CORE_PREMISE.leadParagraph}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-300 mb-1 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" /> What the word actually means
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {ONBOARDING_CORE_PREMISE.whatItIsInOneSentence}
              </p>
            </div>
            <div className="rounded-2xl bg-slate-950/70 border border-slate-800 p-4">
              <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 mb-1 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" /> What problem it exists to solve
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {ONBOARDING_CORE_PREMISE.whatProblemItSolves}
              </p>
            </div>
          </div>
        </div>

        {/* Guided 4-Stage Pill Jumper */}
        <div className="mt-7 pt-5 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono uppercase text-slate-400 mr-1">
            4-Step Orientation:
          </span>
          <button
            onClick={() => scrollToSection('section-what-is-it')}
            className="px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-200 transition flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-indigo-400" />
            <span>1. What Is It For?</span>
          </button>
          <button
            onClick={() => scrollToSection('section-why-do-we-do-that')}
            className="px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-200 transition flex items-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>2. "Why Do We Do That?" (6 Real-Life Scenarios)</span>
          </button>
          <button
            onClick={() => scrollToSection('section-living-history')}
            className="px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-200 transition flex items-center gap-1.5"
          >
            <History className="w-3.5 h-3.5 text-amber-400" />
            <span>3. Bite-Sized History & Myth-Buster</span>
          </button>
          <button
            onClick={() => scrollToSection('section-starter-pathways')}
            className="px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-200 transition flex items-center gap-1.5"
          >
            <Compass className="w-3.5 h-3.5 text-rose-400" />
            <span>4. Where to Go Next</span>
          </button>
        </div>
      </section>

      {/* =====================================================================
          SECTION 1: WHAT IS PSYCHODYNAMICS & WHAT IS IT FOR?
          ===================================================================== */}
      <section id="section-what-is-it" className="space-y-6 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              Part 1 of 4 • The Core Lens
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              Surface View vs. Psychodynamic View: How It Changes the Question
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Pick an everyday struggle below to see the difference between treating a habit as a
            "willpower glitch" versus decoding the protective job it is secretly doing.
          </p>
        </div>

        {/* Interactive Surface vs. Depth Comparator */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/75 p-5 md:p-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {SURFACE_VS_DEPTH_COMPARISONS.map((item) => {
              const isSelected = item.id === activeComparison.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedSurfaceComparisonId(item.id)}
                  className={`text-left p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-indigo-500/50 bg-indigo-950/30 ring-2 ring-indigo-400/20 shadow-md'
                      : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div className="text-xs font-bold text-white leading-snug mb-2">
                    {item.everydayProblem}
                  </div>
                  <div className="text-[11px] italic text-slate-400">{item.personQuote}</div>
                </button>
              );
            })}
          </div>

          {/* Side-by-Side Comparison Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Surface View Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  {activeComparison.surfaceView.label}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">Symptom-Only Focus</span>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">
                    Default Assumption
                  </div>
                  <p className="text-slate-200 mt-0.5">{activeComparison.surfaceView.assumption}</p>
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-slate-400">
                    Typical Advice
                  </div>
                  <p className="text-slate-300 mt-0.5">
                    {activeComparison.surfaceView.typicalAdvice}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-mono uppercase text-rose-300">
                    Why It Often Stalls
                  </div>
                  <p className="text-slate-300 mt-0.5">
                    {activeComparison.surfaceView.whyItOftenStalls}
                  </p>
                </div>
              </div>
            </div>

            {/* Psychodynamic View Card */}
            <div className="rounded-2xl border border-indigo-500/40 bg-indigo-950/20 p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {activeComparison.psychodynamicView.label}
                </span>
                <span className="text-[11px] text-indigo-300 font-mono">
                  Hidden Emotional Logic
                </span>
              </div>
              <div className="space-y-2.5 text-xs sm:text-sm">
                <div>
                  <div className="text-[11px] font-mono uppercase text-indigo-300">
                    What Hidden Job the Behavior Is Doing
                  </div>
                  <p className="text-white mt-0.5 leading-relaxed">
                    {activeComparison.psychodynamicView.hiddenFunction}
                  </p>
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase text-amber-300">
                    The Psychodynamic Question
                  </div>
                  <p className="text-amber-200/90 italic mt-0.5">
                    "{activeComparison.psychodynamicView.curiousQuestion}"
                  </p>
                </div>
                <div className="pt-2 border-t border-indigo-500/20">
                  <div className="text-[11px] font-mono uppercase text-emerald-300">
                    What Changes When You See Underneath
                  </div>
                  <p className="text-slate-200 mt-0.5">
                    {activeComparison.psychodynamicView.whatChanges}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars in Plain English (Shedler 2010 Synthesis) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg font-bold text-white">
              The 4 Core Ideas of Psychodynamics in Plain English
            </h3>
            <span className="hidden sm:inline-block text-[11px] font-mono text-slate-400">
              Adapted from Jonathan Shedler’s (2010) Empirical Synthesis
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ONBOARDING_PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                className={`rounded-2xl border p-5 space-y-2.5 ${pillarAccentClasses[pillar.accentColor]}`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider">
                    Core Idea {pillar.number}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 italic">
                    {pillar.everydayQuestion}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">{pillar.plainEnglishTitle}</h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {pillar.coreIdea}
                </p>
                <div className="rounded-xl bg-slate-950/70 border border-slate-800/80 p-3 text-xs text-slate-300">
                  <strong className="text-white">Real-life snapshot: </strong>
                  {pillar.concreteExample}
                </div>
                <div className="text-[11px] font-mono text-slate-400 pt-1 flex items-center gap-1.5">
                  <FlaskConical className="w-3.5 h-3.5 shrink-0 text-indigo-400" />
                  <span>{pillar.shedlerEmpiricalAnchor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: "WHY DO WE DO THAT?" REAL-WORLD BEHAVIOR DECODER
          ===================================================================== */}
      <section id="section-why-do-we-do-that" className="space-y-6 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
              Part 2 of 4 • Phenomenon First, Labels Second
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              "Why Do We Do That?" — 6 Real-Life Behavioral Puzzles
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Every scenario below is modeled on empirical psychodynamic research. Choose a moment you
            recognize from everyday life to inspect what happens beneath the surface.
          </p>
        </div>

        {/* Scenario Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {REAL_WORLD_SCENARIOS.map((scenario, idx) => {
            const isSelected = scenario.id === activeScenario.id;
            return (
              <button
                key={scenario.id}
                onClick={() => {
                  setSelectedScenarioId(scenario.id);
                  setFormalBridgeOpen(false);
                }}
                className={`text-left p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-emerald-500/50 bg-emerald-950/25 ring-2 ring-emerald-400/20 shadow-lg'
                    : 'border-slate-800 bg-slate-900/70 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950 text-emerald-300 border border-slate-800">
                      {scenario.categoryTag}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">#{idx + 1}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white leading-snug">{scenario.title}</h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{scenario.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Scenario Interactive Stage */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-5 md:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
            <div>
              <span className="text-xs font-mono uppercase text-emerald-300">
                {activeScenario.categoryTag}
              </span>
              <h3 className="text-lg sm:text-2xl font-bold text-white mt-0.5">
                {activeScenario.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">{activeScenario.subtitle}</p>
            </div>

            {/* Progressive View Toggle */}
            <div className="inline-flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-2xl border border-slate-800 self-start">
              <button
                onClick={() => setScenarioViewMode('conscious')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                  scenarioViewMode === 'conscious'
                    ? 'bg-slate-800 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                1. Conscious Story Only
              </button>
              <button
                onClick={() => setScenarioViewMode('underneath')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                  scenarioViewMode === 'underneath'
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                2. Reveal What’s Underneath
              </button>
            </div>
          </div>

          {/* Step 1: The Everyday Scene & Conscious Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-7 rounded-2xl bg-slate-950/80 border border-slate-800 p-5 space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                The Everyday Moment (What Any Observer Sees)
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {activeScenario.everydaySituation}
              </p>
            </div>

            <div className="lg:col-span-5 rounded-2xl bg-slate-950/80 border border-slate-800 p-5 flex flex-col justify-between space-y-3">
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Quote className="w-3.5 h-3.5" /> What I Tell Myself (The Conscious Story)
                </div>
                <p className="text-xs sm:text-sm text-white italic mt-2 leading-relaxed">
                  {activeScenario.consciousStory}
                </p>
              </div>
              {scenarioViewMode === 'conscious' && (
                <button
                  onClick={() => setScenarioViewMode('underneath')}
                  className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition flex items-center justify-center gap-1.5"
                >
                  <span>Unpack What’s Happening Underneath</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Step 2: The 4-Part Underneath Breakdown */}
          {scenarioViewMode === 'underneath' && (
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Step-by-Step Dynamic Breakdown (Beneath Conscious Awareness)
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="rounded-2xl border border-indigo-500/30 bg-indigo-950/20 p-4 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-indigo-300">
                    1. Hidden Wish or Vulnerable Feeling
                  </div>
                  <p className="text-xs sm:text-sm text-white leading-relaxed">
                    {activeScenario.underneathBreakdown.hiddenWishOrFeeling}
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-4 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-amber-300">
                    2. Why It Feels Unsafe (The Alarm)
                  </div>
                  <p className="text-xs sm:text-sm text-white leading-relaxed">
                    {activeScenario.underneathBreakdown.whyItFeelsUnsafe}
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-4 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-300">
                    3. Automatic Sideways Move (Protection)
                  </div>
                  <p className="text-xs sm:text-sm text-white leading-relaxed">
                    {activeScenario.underneathBreakdown.sidewaysProtectiveMove}
                  </p>
                </div>

                <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-4 space-y-1.5">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-rose-300">
                    4. The Irony / Hidden Cost
                  </div>
                  <p className="text-xs sm:text-sm text-white leading-relaxed">
                    {activeScenario.underneathBreakdown.theIronyOrCost}
                  </p>
                </div>
              </div>

              {/* Empirical Research Inspiration Callout */}
              <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-300 flex items-center gap-1.5">
                    <FlaskConical className="w-3.5 h-3.5" /> Real-World Research Behind This Pattern:{' '}
                    <span className="text-white font-semibold">
                      {activeScenario.researchInspiration.studyOrFramework}
                    </span>{' '}
                    ({activeScenario.researchInspiration.researchers})
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeScenario.researchInspiration.plainEnglishFinding}
                  </p>
                </div>

                <button
                  onClick={() => setFormalBridgeOpen((prev) => !prev)}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-indigo-500/40 text-xs font-semibold text-indigo-300 shrink-0 flex items-center gap-1.5 transition"
                >
                  <span>When You’re Ready: Formal Theory Bridge</span>
                  {formalBridgeOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Optional Expandable "When You're Ready: Formal Theory Bridge" */}
              {formalBridgeOpen && (
                <div className="rounded-2xl border border-indigo-500/40 bg-indigo-950/25 p-5 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-mono uppercase text-indigo-300">
                        What Clinicians & Researchers Call This Pattern
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                        {activeScenario.formalBridge.formalConceptName}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                        {activeScenario.formalBridge.whyItHasThisName}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2.5 pt-2 border-t border-indigo-500/20">
                    <button
                      onClick={() =>
                        onOpenPlayground(
                          activeScenario.formalBridge.linkedPlayground.playgroundId,
                          activeScenario.formalBridge.linkedPlayground.presetId
                        )
                      }
                      className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-md shadow-indigo-600/20"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{activeScenario.formalBridge.linkedPlayground.buttonLabel}</span>
                    </button>

                    <button
                      onClick={() =>
                        onInspectConcept(activeScenario.formalBridge.linkedConceptId)
                      }
                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition flex items-center gap-1.5"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                      <span>
                        Inspect in Concept Atlas (
                        {CONCEPTS_BY_ID[activeScenario.formalBridge.linkedConceptId]?.name ||
                          activeScenario.formalBridge.linkedConceptId}
                        )
                      </span>
                    </button>

                    <button
                      onClick={() => onOpenLens(activeScenario.formalBridge.linkedLensId)}
                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition flex items-center gap-1.5"
                    >
                      <Compass className="w-3.5 h-3.5 text-emerald-400" />
                      <span>
                        Open Matching School (
                        {FIVE_LENSES.find(
                          (l) => l.id === activeScenario.formalBridge.linkedLensId
                        )?.shortName || activeScenario.formalBridge.linkedLensId}
                        )
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: A BITE-SIZED LIVING HISTORY & MYTH-BUSTER
          ===================================================================== */}
      <section id="section-living-history" className="space-y-8 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400">
              Part 3 of 4 • Why the Field Evolved
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              A Bite-Sized Story of Psychodynamics: 5 Moments the Field Hit a Wall—And Evolved
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Why are there 5 schools of psychodynamics instead of one? Because each generation ran
            into a real-world human puzzle that the previous generation’s theory couldn’t explain.
          </p>
        </div>

        {/* Interactive 5-Era Timeline Stepper */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/75 p-5 md:p-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
            {HISTORICAL_EVOLUTION_ERAS.map((era) => {
              const isSelected = era.id === activeEra.id;
              return (
                <button
                  key={era.id}
                  onClick={() => setSelectedEraId(era.id)}
                  className={`text-left p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'border-amber-500/50 bg-amber-950/30 ring-2 ring-amber-400/20 shadow-lg'
                      : 'border-slate-800 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-900 text-amber-300 border border-slate-800">
                        Wave {era.stepNumber}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">{era.eraYears}</span>
                    </div>
                    <div className="text-xs font-bold text-white leading-snug mt-1">
                      {era.chapterTitle}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Era Detail Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/85 p-5 md:p-6 space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div>
                <div className="text-xs font-mono text-amber-300 uppercase">
                  Wave {activeEra.stepNumber} ({activeEra.eraYears}) • Key Figures:{' '}
                  {activeEra.keyFigures.join(', ')}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                  {activeEra.chapterTitle}
                </h3>
              </div>

              <button
                onClick={() => onOpenLens(activeEra.linkedLensId)}
                className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-amber-500/30 text-amber-300 text-xs font-semibold transition flex items-center gap-1.5 self-start shrink-0"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Explore Lens {activeEra.stepNumber} in Depth</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1.5">
                <div className="text-[11px] font-mono uppercase text-rose-300">
                  1. The Real-Life Puzzle
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {activeEra.humanPuzzle}
                </p>
                <div className="pt-2 mt-2 border-t border-slate-800 text-[11px] text-slate-400">
                  <strong className="text-slate-300">What earlier views missed: </strong>
                  {activeEra.whatPreviousViewMissed}
                </div>
              </div>

              <div className="rounded-2xl border border-amber-500/30 bg-amber-950/15 p-4 space-y-1.5">
                <div className="text-[11px] font-mono uppercase text-amber-300">
                  2. The Breakthrough Shift
                </div>
                <p className="text-xs sm:text-sm text-white leading-relaxed">
                  {activeEra.breakthroughIdea}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/15 p-4 space-y-1.5 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-mono uppercase text-emerald-300">
                    3. Everyday Takeaway Today
                  </div>
                  <p className="text-xs sm:text-sm text-white leading-relaxed mt-1">
                    {activeEra.everydayTakeaway}
                  </p>
                </div>
                <div className="pt-2 mt-2 border-t border-emerald-500/20 text-[11px] text-slate-300">
                  <strong className="text-emerald-300">Modern Lab Connection: </strong>
                  {activeEra.modernResearchConnection}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Pop-Culture Myths vs. Modern Empirical Reality */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-rose-400" />
                Pop-Culture Myths vs. Modern Empirical Reality
              </h3>
              <p className="text-xs text-slate-400">
                Click any common stereotype below to inspect what modern clinical trials,
                longitudinal studies, and neuroscience actually show.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {MYTH_VS_REALITY_ITEMS.map((item) => {
              const isExpanded = !!expandedMythIds[item.id];
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/75 overflow-hidden transition"
                >
                  <button
                    onClick={() => toggleMyth(item.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 hover:bg-slate-900 transition"
                  >
                    <div className="space-y-1">
                      <div className="text-xs sm:text-sm font-bold text-rose-300">
                        {item.mythHeadline}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-emerald-300 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{item.empiricalRealityHeadline}</span>
                      </div>
                    </div>
                    <div className="shrink-0 text-slate-400">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-4 pb-5 sm:px-5 pt-2 border-t border-slate-800/80 bg-slate-950/60 space-y-3">
                      <div className="text-xs text-slate-400">
                        <strong className="text-slate-300">Why people think this: </strong>
                        {item.whyPeopleThinkThis}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {item.evidenceSummary}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                        <span className="text-[11px] font-mono text-indigo-300">
                          Source: {item.keyCitation}
                        </span>
                        <button
                          onClick={() => onInspectConcept(item.linkedConceptId)}
                          className="text-xs font-semibold text-indigo-300 hover:text-indigo-200 flex items-center gap-1"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>
                            See related concept (
                            {CONCEPTS_BY_ID[item.linkedConceptId]?.name || item.linkedConceptId})
                          </span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: CURATED STARTER PATHWAYS (WHERE TO GO NEXT)
          ===================================================================== */}
      <section id="section-starter-pathways" className="space-y-6 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-rose-400">
              Part 4 of 4 • Choose Your Starting Track
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              Where Would You Like to Go Next? (4 Curated Launchpads)
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            You don’t need to memorize all 35+ concepts at once. Pick the question below that sparks
            your curiosity right now—we’ll jump you straight to the best interactive lab, school, or
            concept.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {STARTER_PATHWAYS.map((pathway) => {
            const lens = FIVE_LENSES.find((l) => l.id === pathway.recommendedLensId);
            return (
              <div
                key={pathway.id}
                className={`rounded-3xl border p-6 flex flex-col justify-between space-y-5 ${pillarAccentClasses[pathway.accentColor]}`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-800">
                      {pathway.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{pathway.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    <strong className="text-white">Best if: </strong>
                    {pathway.whoThisIsFor}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pathway.whatYouWillExplore}
                  </p>

                  {/* Recommended Concept Pills */}
                  <div className="pt-2">
                    <div className="text-[10px] font-mono uppercase text-slate-400 mb-1.5">
                      Starter Concepts in This Track:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {pathway.recommendedConceptIds.map((cid) => {
                        const concept = CONCEPTS_BY_ID[cid];
                        return (
                          <button
                            key={cid}
                            onClick={() => onInspectConcept(cid)}
                            className="px-2.5 py-1 rounded-lg bg-slate-950/85 hover:bg-slate-900 border border-slate-800 text-[11px] text-slate-200 transition flex items-center gap-1"
                          >
                            <BookOpen className="w-3 h-3 text-indigo-400" />
                            <span>{concept?.name || cid}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Primary Launch Action Buttons */}
                <div className="pt-3 border-t border-slate-800/70 flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() =>
                      onOpenPlayground(
                        pathway.recommendedPlayground.playgroundId,
                        pathway.recommendedPlayground.presetId
                      )
                    }
                    className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition flex items-center gap-1.5 shadow-md shadow-indigo-600/20"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>{pathway.recommendedPlayground.buttonLabel}</span>
                  </button>

                  <button
                    onClick={() => onOpenLens(pathway.recommendedLensId)}
                    className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-900 border border-slate-800 text-slate-200 text-xs font-semibold transition flex items-center gap-1.5"
                  >
                    <Compass className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Open {lens?.shortName || '5 Lenses'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
