import React, { useState } from 'react';
import { FIVE_LENSES, UNIFIED_CASE_SCENARIOS } from '../data/lenses';
import { CONCEPTS_BY_ID } from '../data/concepts';
import { LensId, PlaygroundId } from '../types/psychodynamics';
import { LensMentalModelDiagram } from './LensMentalModelDiagram';
import {
  Camera,
  Compass,
  Play,
  BookOpen,
  History,
  FlaskConical,
  Users,
  ArrowRight,
  Layers,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';

interface FiveLensesViewProps {
  selectedLensId: LensId;
  onSelectLens: (lensId: LensId) => void;
  onOpenPlayground: (playgroundId: PlaygroundId, presetId?: string) => void;
  onInspectConcept: (conceptId: string) => void;
}

export const FiveLensesView: React.FC<FiveLensesViewProps> = ({
  selectedLensId,
  onSelectLens,
  onOpenPlayground,
  onInspectConcept,
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(UNIFIED_CASE_SCENARIOS[0].id);

  const activeLens = FIVE_LENSES.find((l) => l.id === selectedLensId) || FIVE_LENSES[0];
  const activeCase =
    UNIFIED_CASE_SCENARIOS.find((c) => c.id === selectedCaseId) || UNIFIED_CASE_SCENARIOS[0];

  const accentBorderMap: Record<LensId, string> = {
    'drive-conflict': 'border-rose-500/40 bg-rose-950/20',
    'ego-psychology': 'border-amber-500/40 bg-amber-950/20',
    'object-relations': 'border-violet-500/40 bg-violet-950/20',
    'self-psychology': 'border-cyan-500/40 bg-cyan-950/20',
    'relational-empirical': 'border-emerald-500/40 bg-emerald-950/20',
  };

  return (
    <div className="space-y-10 pb-12">
      {/* Beginner Orientation Banner ("I don't know what I don't know") */}
      <section className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 p-6 md:p-8 shadow-2xl">
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" /> Start Here • Orientation for Beginners
          </div>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
            Psychodynamics Is Not One Monolith—It’s <span className="text-indigo-400">5 Camera Lenses</span> on the Human Mind
          </h1>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            If you are new to psychodynamics, the jargon can feel overwhelming because terms come from{' '}
            <strong className="text-white">five distinct historical and empirical waves</strong> (Fred Pine’s
            classic "Four Psychologies" plus the modern Relational & Empirical wave). Each wave zooms the
            camera to a different level: from <em className="text-rose-300">buried biological drives</em>, to{' '}
            <em className="text-amber-300">ego defense filters</em>, to{' '}
            <em className="text-violet-300">internalized self-other relationships</em>, to{' '}
            <em className="text-cyan-300">self-esteem cohesion</em>, to{' '}
            <em className="text-emerald-300">two-person interpersonal loops</em>.
          </p>
        </div>

        {/* Camera Zoom Stepper Bar */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-5 gap-2.5">
          {FIVE_LENSES.map((lens) => {
            const isSelected = lens.id === selectedLensId;
            return (
              <button
                key={lens.id}
                onClick={() => onSelectLens(lens.id)}
                className={`text-left p-3.5 rounded-2xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? `${accentBorderMap[lens.id]} ring-2 ring-white/20 shadow-lg scale-[1.01]`
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md border ${lens.badgeClasses}`}>
                      Lens {lens.order}
                    </span>
                    <Camera className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                  </div>
                  <div className="font-semibold text-sm text-white mt-1.5">{lens.name}</div>
                </div>
                <div className="text-[11px] text-slate-400 mt-2 line-clamp-2">{lens.eraSummary}</div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Active Lens Inspector */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left 7 Cols: Core Overview, Diagram, and Mechanics */}
        <div className="lg:col-span-7 space-y-6">
          <div className={`rounded-3xl border p-6 shadow-xl ${accentBorderMap[activeLens.id]}`}>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className={`text-xs font-mono px-3 py-1 rounded-full border ${activeLens.badgeClasses}`}>
                Wave {activeLens.order} of 5 • {activeLens.eraSummary}
              </span>
              <button
                onClick={() =>
                  onOpenPlayground(
                    activeLens.linkedPlayground.playgroundId,
                    activeLens.linkedPlayground.presetId
                  )
                }
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                {activeLens.linkedPlayground.buttonLabel}
              </button>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{activeLens.name}</h2>
            <p className="text-xs font-mono text-slate-300 bg-slate-950/60 border border-slate-800 rounded-xl px-3.5 py-2.5 mb-4 flex items-center gap-2">
              <Camera className="w-4 h-4 text-indigo-400 shrink-0" />
              <span>
                <strong>Camera Focal Point:</strong> {activeLens.cameraFocalMetaphor}
              </span>
            </p>

            {/* Core Organizing Question */}
            <div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-4 mb-5">
              <div className="text-xs uppercase font-mono tracking-wider text-indigo-400 mb-1 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" /> Core Clinical Question This Lens Asks
              </div>
              <p className="text-base md:text-lg font-serif italic text-slate-100">
                "{activeLens.coreQuestion}"
              </p>
            </div>

            {/* Plain-English Intuition */}
            <div className="space-y-3 text-sm text-slate-200 leading-relaxed">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Plain-English Intuition
              </h3>
              <p>{activeLens.plainEnglishOverview}</p>
            </div>

            {/* 3-Pillar Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
              <div className="bg-slate-950/70 border border-slate-800/90 rounded-2xl p-3.5">
                <div className="text-[11px] font-mono uppercase text-indigo-400 mb-1">
                  1. What Motivates Us?
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{activeLens.whatMotivatesBehavior}</p>
              </div>
              <div className="bg-slate-950/70 border border-slate-800/90 rounded-2xl p-3.5">
                <div className="text-[11px] font-mono uppercase text-rose-400 mb-1">
                  2. Why Do We Suffer?
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{activeLens.whySufferingHappens}</p>
              </div>
              <div className="bg-slate-950/70 border border-slate-800/90 rounded-2xl p-3.5">
                <div className="text-[11px] font-mono uppercase text-emerald-400 mb-1">
                  3. How Does Change Happen?
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">{activeLens.howChangeHappens}</p>
              </div>
            </div>
          </div>

          {/* Interactive SVG Mental Model Diagram */}
          <LensMentalModelDiagram
            lensId={activeLens.id}
            onSelectConcept={onInspectConcept}
          />
        </div>

        {/* Right 5 Cols: Historical Lineage, Empirical Extensions, & Core Concepts */}
        <div className="lg:col-span-5 space-y-5">
          {/* Historical Shift */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">
              <History className="w-4 h-4" /> Historical Shift From Prior Waves
            </div>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              {activeLens.historicalShiftFromPrior}
            </p>
          </div>

          {/* Foundational Theorists */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400 mb-3">
              <Users className="w-4 h-4" /> Foundational Theorists & Lineage
            </div>
            <div className="space-y-3">
              {activeLens.foundationalTheorists.map((t) => (
                <div key={t.name} className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-white">{t.name}</span>
                    <span className="text-[11px] font-mono text-slate-400">{t.era}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">{t.keyContribution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Modern Empirical Validation & Clinical Extensions */}
          <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3">
              <FlaskConical className="w-4 h-4" /> Modern Empirical & Neuroscience Grounding
            </div>
            <div className="space-y-3">
              {activeLens.modernEmpiricalExtensions.map((ext) => (
                <div key={ext.name} className="bg-slate-950/80 border border-emerald-500/20 rounded-xl p-3.5">
                  <div className="font-semibold text-xs text-emerald-300">{ext.name}</div>
                  <div className="text-[11px] font-mono text-slate-400 mb-1.5">{ext.researchers}</div>
                  <p className="text-xs text-slate-300 leading-relaxed">{ext.summary}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Concepts in This Lens (Deep-Links to Concept Atlas) */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-300">
                <BookOpen className="w-4 h-4 text-indigo-400" /> Core Concepts in This Lens
              </span>
              <span className="text-[11px] text-slate-500">Click to open in Atlas</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeLens.coreConceptIds.map((cid) => {
                const concept = CONCEPTS_BY_ID[cid];
                if (!concept) return null;
                return (
                  <button
                    key={cid}
                    onClick={() => onInspectConcept(cid)}
                    className="group text-left p-2.5 rounded-xl bg-slate-950/80 hover:bg-indigo-950/40 border border-slate-800 hover:border-indigo-500/40 transition flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-indigo-300 truncate">
                        {concept.name}
                      </div>
                      <div className="text-[10px] text-slate-400 truncate">{concept.category}</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-indigo-400 shrink-0" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Same Human Struggle, 5 Lenses Interactive Comparison Matrix */}
      <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 md:p-8 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Layers className="w-4 h-4" /> Side-by-Side Formulation Matrix
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-white mt-1">
              Same Human Struggle, Viewed Through All 5 Lenses
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Select a real-world scenario below to see how each of the five psychodynamic schools illuminates a different facet of the exact same behavior.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {UNIFIED_CASE_SCENARIOS.map((scenario, idx) => (
              <button
                key={scenario.id}
                onClick={() => setSelectedCaseId(scenario.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition ${
                  selectedCaseId === scenario.id
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-md'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                Case {idx + 1}: {scenario.title.replace(/^Case \d+: /, '')}
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Vignette Header */}
        <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-5">
          <div className="text-xs font-mono uppercase text-amber-400 mb-1">Presenting Moment</div>
          <p className="text-sm md:text-base text-slate-100 leading-relaxed">
            {activeCase.presentingSituation}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
            <span>
              <strong>Observable Surface Symptom:</strong> {activeCase.surfaceSymptom}
            </span>
          </div>
        </div>

        {/* 5-Column Lens Formulations */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {FIVE_LENSES.map((lens) => {
            const formulation = activeCase.formulationsByLens[lens.id];
            const linkedConcept = CONCEPTS_BY_ID[formulation.keyConceptId];
            const isCurrentLens = lens.id === selectedLensId;

            return (
              <div
                key={lens.id}
                onClick={() => onSelectLens(lens.id)}
                className={`cursor-pointer rounded-2xl border p-4 flex flex-col justify-between transition ${
                  isCurrentLens
                    ? `${accentBorderMap[lens.id]} ring-1 ring-white/20`
                    : 'bg-slate-950/70 border-slate-800/90 hover:border-slate-700'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${lens.badgeClasses}`}>
                      {lens.shortName}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">{formulation.headline}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{formulation.unconsciousDynamic}</p>
                  <div className="pt-2 border-t border-slate-800/80">
                    <div className="text-[10px] font-mono uppercase text-indigo-400 mb-1">
                      Clinical Focus:
                    </div>
                    <p className="text-xs text-slate-400 italic leading-relaxed">
                      {formulation.clinicalFocus}
                    </p>
                  </div>
                </div>

                {linkedConcept && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onInspectConcept(linkedConcept.id);
                    }}
                    className="mt-4 w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-indigo-950/60 border border-slate-700/80 hover:border-indigo-500/40 text-left flex items-center justify-between text-[11px] text-indigo-300 font-medium transition"
                  >
                    <span className="truncate">Concept: {linkedConcept.name}</span>
                    <ArrowRight className="w-3 h-3 shrink-0" />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
