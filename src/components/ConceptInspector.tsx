import React, { useState, useEffect } from 'react';
import { PlaygroundId, PsychodynamicConcept } from '../types/psychodynamics';
import { CONCEPTS_BY_ID } from '../data/concepts';
import { FIVE_LENSES } from '../data/lenses';
import {
  Play,
  Brain,
  HeartPulse,
  BookMarked,
  FlaskConical,
  Scale,
  ArrowLeftRight,
  Sparkles,
  Stethoscope,
  Network,
  X,
} from 'lucide-react';

interface ConceptInspectorProps {
  concept: PsychodynamicConcept;
  onSelectConcept: (conceptId: string) => void;
  onOpenPlayground: (playgroundId: PlaygroundId, presetId?: string) => void;
}

export const ConceptInspector: React.FC<ConceptInspectorProps> = ({
  concept,
  onSelectConcept,
  onOpenPlayground,
}) => {
  const [comparedTargetId, setComparedTargetId] = useState<string | null>(
    concept.confusedWith[0]?.targetConceptId || null
  );

  useEffect(() => {
    setComparedTargetId(concept.confusedWith[0]?.targetConceptId || null);
  }, [concept.id]);

  const lensObj = FIVE_LENSES.find((l) => l.id === concept.lens) || FIVE_LENSES[0];
  const activeComparison = concept.confusedWith.find(
    (c) => c.targetConceptId === comparedTargetId
  );
  const comparedConcept = comparedTargetId ? CONCEPTS_BY_ID[comparedTargetId] : null;

  return (
    <div className="bg-slate-900/95 border border-indigo-500/30 rounded-3xl p-6 shadow-2xl space-y-6">
      {/* Header Banner */}
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="space-y-2 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${lensObj.badgeClasses}`}>
              {lensObj.shortName}
            </span>
            <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              {concept.category}
            </span>
            {concept.dmrsLevelName && (
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                DMRS {concept.dmrsLevelName}
              </span>
            )}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">{concept.name}</h2>
          <p className="text-sm font-mono text-indigo-300">{concept.subtitle}</p>
        </div>

        <button
          onClick={() =>
            onOpenPlayground(
              concept.linkedPlayground.playgroundId,
              concept.linkedPlayground.presetId
            )
          }
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition shrink-0"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          {concept.linkedPlayground.buttonLabel}
        </button>
      </div>

      {/* 1. 10-Second Plain-English Intuition & Clinical Vignette */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-7 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 p-5 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-1.5 font-semibold">
            <Sparkles className="w-3.5 h-3.5" /> 10-Second Plain-English Intuition
          </div>
          <p className="text-sm md:text-base text-slate-100 leading-relaxed">
            {concept.tenSecondIntuition}
          </p>
        </div>

        <div className="md:col-span-5 rounded-2xl bg-slate-950/80 border border-slate-800 p-5 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5 font-semibold">
            <Stethoscope className="w-3.5 h-3.5" /> Everyday & Clinical Vignette
          </div>
          <p className="text-xs md:text-sm font-serif italic text-slate-200 leading-relaxed">
            "{concept.clinicalVignette}"
          </p>
        </div>
      </div>

      {/* 2. Idea vs. Affect Pathway Schematic */}
      <div className="rounded-2xl bg-slate-950 border border-slate-800 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
            Psychodynamic Circuit: What Happens to the IDEA vs. the AFFECT?
          </div>
          <div className="text-xs font-mono text-slate-400">
            Raw Trigger: <span className="text-slate-200">{concept.ideaVsAffect.rawImpulseExample}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-sky-950/25 border border-sky-500/30 p-4 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-sky-400 font-bold flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5" /> 1. Idea (Representation)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-200 border border-sky-500/40">
                {concept.ideaVsAffect.ideaFate}
              </span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {concept.ideaVsAffect.ideaDescription}
            </p>
          </div>

          <div className="rounded-xl bg-rose-950/25 border border-rose-500/30 p-4 space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-rose-400 font-bold flex items-center gap-1.5">
                <HeartPulse className="w-3.5 h-3.5" /> 2. Affect (Emotional Charge)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-200 border border-rose-500/40">
                {concept.ideaVsAffect.affectFate}
              </span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {concept.ideaVsAffect.affectDescription}
            </p>
          </div>

          <div className="rounded-xl bg-emerald-950/25 border border-emerald-500/30 p-4 space-y-1.5">
            <div className="text-xs font-mono uppercase text-emerald-400 font-bold">
              3. Conscious Surface Output
            </div>
            <p className="text-xs text-slate-100 leading-relaxed">
              {concept.ideaVsAffect.consciousOutput}
            </p>
            <div className="pt-2 border-t border-emerald-500/20 text-[11px] text-slate-400">
              <strong className="text-emerald-300">PDM-2 Context:</strong> {concept.pdm2Context}
            </div>
          </div>
        </div>
      </div>

      {/* 3. Foundational Origin + Modern Empirical Grounding */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Foundational Origin */}
        <div className="rounded-2xl bg-slate-950/90 border border-slate-800 p-5 space-y-2.5">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5 font-semibold">
            <BookMarked className="w-4 h-4" /> Foundational Psychoanalytic Origin
          </div>
          <div className="flex items-center justify-between text-xs bg-slate-900 px-3 py-2 rounded-xl border border-slate-800">
            <span className="font-bold text-white">{concept.foundationalOrigin.theorist}</span>
            <span className="font-mono text-amber-300">{concept.foundationalOrigin.year}</span>
          </div>
          <div className="text-xs font-serif italic text-indigo-300">
            Seminal Work: {concept.foundationalOrigin.seminalWork}
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {concept.foundationalOrigin.originalFormulation}
          </p>
        </div>

        {/* Modern Empirical Research */}
        <div className="rounded-2xl bg-slate-950/90 border border-emerald-500/30 p-5 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-semibold">
            <FlaskConical className="w-4 h-4" /> Modern Empirical & Neuroscience Grounding
          </div>
          {concept.empiricalResearch.map((emp) => (
            <div key={emp.frameworkName} className="space-y-1 bg-slate-900/80 p-3 rounded-xl border border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-1">
                <span className="text-xs font-bold text-emerald-300">{emp.frameworkName}</span>
                <span className="text-[11px] font-mono text-slate-400">{emp.citation}</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {emp.findingOrOperationalization}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Interactive "Often Confused With" Side-by-Side Comparator */}
      {concept.confusedWith.length > 0 && (
        <div className="rounded-2xl bg-amber-950/15 border border-amber-500/35 p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5 font-semibold">
                <Scale className="w-4 h-4" /> "Often Confused With" Side-by-Side Disambiguator
              </span>
              <p className="text-xs text-slate-400 mt-0.5">
                Click a contrasting concept pill below to compare their exact mechanisms side-by-side.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {concept.confusedWith.map((item) => {
                const target = CONCEPTS_BY_ID[item.targetConceptId];
                if (!target) return null;
                const isSelected = comparedTargetId === item.targetConceptId;
                return (
                  <button
                    key={item.targetConceptId}
                    onClick={() =>
                      setComparedTargetId(isSelected ? null : item.targetConceptId)
                    }
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition ${
                      isSelected
                        ? 'bg-amber-500/25 border-amber-400 text-amber-200 shadow'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <ArrowLeftRight className="w-3.5 h-3.5 text-amber-400" />
                    vs. {target.name}
                  </button>
                );
              })}
            </div>
          </div>

          {activeComparison && comparedConcept && (
            <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-4">
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="text-xs text-slate-400">
                    <strong className="text-slate-200">Why They Look Similar on the Surface:</strong>{' '}
                    {activeComparison.sharedSurface}
                  </div>
                  <div className="text-xs text-amber-300">
                    <strong className="text-amber-200">Core Clinical Distinction:</strong>{' '}
                    {activeComparison.keyDistinction}
                  </div>
                </div>
                <button
                  onClick={() => setComparedTargetId(null)}
                  className="p-1 text-slate-500 hover:text-slate-300"
                  title="Close comparison"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Left Column: Current Concept */}
                <div className="rounded-xl bg-indigo-950/30 border border-indigo-500/30 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{concept.name}</span>
                    {concept.dmrsLevelName && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-200">
                        {concept.dmrsLevelName}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono text-indigo-300 bg-slate-950/70 p-2.5 rounded-lg border border-indigo-500/20">
                    {activeComparison.thisConceptRule}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                    <div className="bg-slate-950 p-2 rounded border border-slate-800">
                      <span className="text-sky-400 font-mono block">Idea Fate:</span>
                      <span className="text-slate-200">{concept.ideaVsAffect.ideaFate}</span>
                    </div>
                    <div className="bg-slate-950 p-2 rounded border border-slate-800">
                      <span className="text-rose-400 font-mono block">Affect Fate:</span>
                      <span className="text-slate-200">{concept.ideaVsAffect.affectFate}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Contrasted Concept */}
                <div className="rounded-xl bg-amber-950/25 border border-amber-500/30 p-4 space-y-2 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white">{comparedConcept.name}</span>
                      {comparedConcept.dmrsLevelName && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-200">
                          {comparedConcept.dmrsLevelName}
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-mono text-amber-200 bg-slate-950/70 p-2.5 rounded-lg border border-amber-500/20">
                      {activeComparison.otherConceptRule}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                      <div className="bg-slate-950 p-2 rounded border border-slate-800">
                        <span className="text-sky-400 font-mono block">Idea Fate:</span>
                        <span className="text-slate-200">{comparedConcept.ideaVsAffect.ideaFate}</span>
                      </div>
                      <div className="bg-slate-950 p-2 rounded border border-slate-800">
                        <span className="text-rose-400 font-mono block">Affect Fate:</span>
                        <span className="text-slate-200">{comparedConcept.ideaVsAffect.affectFate}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectConcept(comparedConcept.id)}
                    className="mt-3 w-full py-1.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-amber-300 font-medium transition"
                  >
                    Switch Inspector to {comparedConcept.name} →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 5. Connected Concepts in the Atlas */}
      <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5 mr-2">
          <Network className="w-3.5 h-3.5 text-indigo-400" /> Connected Concepts:
        </span>
        {concept.relatedConceptIds.map((rid) => {
          const rel = CONCEPTS_BY_ID[rid];
          if (!rel) return null;
          return (
            <button
              key={rid}
              onClick={() => onSelectConcept(rid)}
              className="px-3 py-1 rounded-full bg-slate-950 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/40 text-xs text-slate-300 hover:text-indigo-200 transition"
            >
              {rel.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
