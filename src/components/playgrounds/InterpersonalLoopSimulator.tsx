import React, { useState, useEffect } from 'react';
import { CCRT_SCENARIOS } from '../../data/playgrounds';
import {
  Play,
  Pause,
  StepForward,
  RotateCcw,
  RefreshCw,
  ShieldCheck,
  BookOpen,
  Users,
  Sparkles,
} from 'lucide-react';

interface InterpersonalLoopSimulatorProps {
  initialPresetId?: string;
  onInspectConcept: (conceptId: string) => void;
}

export const InterpersonalLoopSimulator: React.FC<InterpersonalLoopSimulatorProps> = ({
  initialPresetId,
  onInspectConcept,
}) => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>(
    initialPresetId && CCRT_SCENARIOS.some((s) => s.id === initialPresetId)
      ? initialPresetId
      : CCRT_SCENARIOS[0].id
  );
  const [mode, setMode] = useState<'enactment' | 'interruption'>('enactment');
  const [currentStep, setCurrentStep] = useState<number>(3);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (initialPresetId && CCRT_SCENARIOS.some((s) => s.id === initialPresetId)) {
      setSelectedScenarioId(initialPresetId);
      setCurrentStep(3);
    }
  }, [initialPresetId]);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= 3) {
          setIsPlaying(false);
          return 3;
        }
        return prev + 1;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeScenario =
    CCRT_SCENARIOS.find((s) => s.id === selectedScenarioId) || CCRT_SCENARIOS[0];

  const handleAnimate = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentStep(0);
      setIsPlaying(true);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Controls: CCRT Pattern Selector + Enactment vs Interruption Toggle */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Scenario Selector (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
          <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" /> Step A: Select a Core Conflictual Relationship Theme (CCRT)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-3">
            {CCRT_SCENARIOS.map((scen) => (
              <button
                key={scen.id}
                onClick={() => {
                  setSelectedScenarioId(scen.id);
                  setCurrentStep(0);
                  setIsPlaying(true);
                }}
                className={`text-left p-3 rounded-xl border text-xs transition ${
                  scen.id === selectedScenarioId
                    ? 'bg-emerald-600/20 border-emerald-400 text-white font-semibold shadow'
                    : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <div className="font-bold text-white">{scen.title}</div>
                <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">{scen.subtitle}</div>
              </button>
            ))}
          </div>
          <div className="text-xs text-slate-300 bg-slate-950/80 border border-slate-800 rounded-xl p-3">
            <strong className="text-emerald-300">Developmental Origin Template:</strong>{' '}
            {activeScenario.originTemplate}
          </div>
        </div>

        {/* Mode Toggle + Luborsky Formula Summary (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Step B: Choose Relational Pathway
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
              <button
                onClick={() => {
                  setMode('enactment');
                  setCurrentStep(0);
                  setIsPlaying(true);
                }}
                className={`p-3 rounded-xl border text-left transition ${
                  mode === 'enactment'
                    ? 'bg-rose-500/20 border-rose-400 text-rose-100 font-semibold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <RefreshCw className="w-3.5 h-3.5 text-rose-400" /> Self-Fulfilling Enactment
                </div>
                <div className="text-[11px] opacity-80 mt-1">
                  Person B gets hooked into confirming Person A’s worst fear.
                </div>
              </button>

              <button
                onClick={() => {
                  setMode('interruption');
                  setCurrentStep(0);
                  setIsPlaying(true);
                }}
                className={`p-3 rounded-xl border text-left transition ${
                  mode === 'interruption'
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-100 font-semibold'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Corrective / Mentalizing
                </div>
                <div className="text-[11px] opacity-80 mt-1">
                  Person B contains the pull and creates a Corrective Experience.
                </div>
              </button>
            </div>
          </div>

          <div className="rounded-xl bg-slate-950 border border-slate-800 p-3 space-y-1.5 text-xs">
            <div className="text-emerald-300 font-medium">{activeScenario.wish}</div>
            <div className="text-rose-300 font-medium">{activeScenario.fearedResponseFromOther}</div>
          </div>
        </div>
      </div>

      {/* Main 4-Step Interactive Loop Stage */}
      <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                Luborsky’s CCRT & Two-Person Enactment Simulator
              </span>
              <button
                onClick={() => onInspectConcept('ccrt')}
                className="text-xs text-indigo-400 hover:text-indigo-300 underline underline-offset-4 inline-flex items-center gap-1"
              >
                <BookOpen className="w-3.5 h-3.5" /> Inspect CCRT in Atlas
              </button>
            </div>
            <h3 className="text-xl font-bold text-white mt-0.5">{activeScenario.title}</h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleAnimate}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow transition"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              {isPlaying ? 'Pause' : 'Play 4-Stage Cycle'}
            </button>
            <button
              onClick={() => {
                setIsPlaying(false);
                setCurrentStep((prev) => (prev + 1) % 4);
              }}
              className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
            >
              <StepForward className="w-3.5 h-3.5" /> Step ({currentStep + 1}/4)
            </button>
            <button
              onClick={() => {
                setIsPlaying(false);
                setCurrentStep(3);
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition"
              title="Show Full Cycle"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Animated Two-Person SVG Loop Diagram */}
        <svg viewBox="0 0 760 250" className="w-full h-auto bg-slate-950 rounded-2xl border border-slate-800">
          {/* Person A Node */}
          <rect
            x="25"
            y="45"
            width="195"
            height="160"
            rx="16"
            fill="#0f172a"
            stroke={currentStep === 0 || currentStep === 3 ? '#38bdf8' : '#334155'}
            strokeWidth={currentStep === 0 || currentStep === 3 ? '3' : '1.5'}
          />
          <text x="122" y="72" textAnchor="middle" fill="#e0f2fe" fontSize="13" fontWeight="bold">
            PERSON A (SELF)
          </text>
          <text x="122" y="96" textAnchor="middle" fill="#38bdf8" fontSize="10.5" fontWeight="bold">
            Stage 1: Core Wish (W)
          </text>
          <text x="122" y="114" textAnchor="middle" fill="#94a3b8" fontSize="9.5">
            + Signal Anxiety / Fear
          </text>
          <line x1="45" y1="130" x2="200" y2="130" stroke="#1e293b" />
          <text
            x="122"
            y="152"
            textAnchor="middle"
            fill={mode === 'enactment' ? '#fda4af' : '#6ee7b7'}
            fontSize="10.5"
            fontWeight="bold"
          >
            Stage 4: Self Response (RS)
          </text>
          <text x="122" y="172" textAnchor="middle" fill="#cbd5e1" fontSize="9.5">
            {mode === 'enactment' ? '"See?! My fear was right!"' : '"Wait—I am actually safe!"'}
          </text>

          {/* Person B Node */}
          <rect
            x="540"
            y="45"
            width="195"
            height="160"
            rx="16"
            fill="#0f172a"
            stroke={
              currentStep === 2
                ? mode === 'enactment'
                  ? '#f43f5e'
                  : '#10b981'
                : '#334155'
            }
            strokeWidth={currentStep === 2 ? '3' : '1.5'}
          />
          <text x="637" y="72" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="bold">
            PERSON B (OTHER)
          </text>
          <text
            x="637"
            y="105"
            textAnchor="middle"
            fill={mode === 'enactment' ? '#fda4af' : '#6ee7b7'}
            fontSize="10.5"
            fontWeight="bold"
          >
            Stage 3: Response of Other (RO)
          </text>
          <text x="637" y="128" textAnchor="middle" fill="#cbd5e1" fontSize="10">
            {mode === 'enactment'
              ? 'Hooked into Countertransference'
              : 'Mentalizing & Containment'}
          </text>
          <text x="637" y="150" textAnchor="middle" fill="#94a3b8" fontSize="9.5">
            {mode === 'enactment'
              ? 'Enacts the exact dreaded role'
              : 'Disconfirms old template'}
          </text>

          {/* Top Arc: Stage 2 Defensive Signal (A -> B) */}
          <g opacity={currentStep >= 1 ? 1 : 0.25}>
            <path
              d="M 225 82 Q 380 20 535 82"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="3"
              strokeDasharray="6 4"
              className="animate-dash-flow"
            />
            <rect
              x="250"
              y="18"
              width="260"
              height="44"
              rx="10"
              fill="#451a03"
              stroke={currentStep === 1 ? '#fbbf24' : '#92400e'}
              strokeWidth={currentStep === 1 ? '2.5' : '1.5'}
            />
            <text x="380" y="36" textAnchor="middle" fill="#fef3c7" fontSize="10.5" fontWeight="bold">
              STAGE 2: DEFENSIVE / PROVOCATIVE SIGNAL
            </text>
            <text x="380" y="52" textAnchor="middle" fill="#fde68a" fontSize="9.5" fontFamily="monospace">
              {activeScenario.enactmentSteps.step2DefensiveSignal.mechanismUsed}
            </text>
          </g>

          {/* Bottom Arc: Stage 3 -> Stage 4 Feedback (B -> A) */}
          <g opacity={currentStep >= 2 ? 1 : 0.25}>
            <path
              d="M 535 168 Q 380 230 225 168"
              fill="none"
              stroke={mode === 'enactment' ? '#f43f5e' : '#10b981'}
              strokeWidth="3"
              strokeDasharray="6 4"
              className="animate-dash-flow"
            />
            <rect
              x="245"
              y="186"
              width="270"
              height="44"
              rx="10"
              fill={mode === 'enactment' ? '#4c0519' : '#064e3b'}
              stroke={mode === 'enactment' ? '#fb7185' : '#34d399'}
              strokeWidth={currentStep >= 2 ? '2' : '1'}
            />
            <text x="380" y="204" textAnchor="middle" fill="#f8fafc" fontSize="10.5" fontWeight="bold">
              {mode === 'enactment'
                ? 'PULLED ENACTMENT CONFIRMS FEAR (RO)'
                : 'CORRECTIVE EMOTIONAL EXPERIENCE'}
            </text>
            <text
              x="380"
              y="220"
              textAnchor="middle"
              fill={mode === 'enactment' ? '#fda4af' : '#6ee7b7'}
              fontSize="9.5"
              fontFamily="monospace"
            >
              {mode === 'enactment'
                ? 'Loop reinforces itself for next time ↻'
                : 'Pathogenic belief disconfirmed ✓'}
            </text>
          </g>
        </svg>

        {/* 4-Stage Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Step 1 */}
          <div
            onClick={() => setCurrentStep(0)}
            className={`cursor-pointer rounded-2xl border p-4 transition ${
              currentStep === 0
                ? 'bg-sky-950/35 border-sky-400 shadow-lg'
                : 'bg-slate-950/80 border-slate-800'
            }`}
          >
            <div className="text-[11px] font-mono uppercase text-sky-400 font-bold mb-1">
              Stage 1 • Wish (W) & Anxiety
            </div>
            <p className="text-xs text-slate-200 leading-relaxed mb-2">
              {activeScenario.enactmentSteps.step1WishAndAnxiety.internalState}
            </p>
            <div className="text-[11px] text-amber-300 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
              {activeScenario.enactmentSteps.step1WishAndAnxiety.signalAnxiety}
            </div>
          </div>

          {/* Step 2 */}
          <div
            onClick={() => setCurrentStep(1)}
            className={`cursor-pointer rounded-2xl border p-4 transition flex flex-col justify-between ${
              currentStep === 1
                ? 'bg-amber-950/35 border-amber-400 shadow-lg'
                : 'bg-slate-950/80 border-slate-800'
            }`}
          >
            <div>
              <div className="text-[11px] font-mono uppercase text-amber-400 font-bold mb-1">
                Stage 2 • Defensive Signal Sent
              </div>
              <p className="text-xs text-slate-200 leading-relaxed mb-2">
                {activeScenario.enactmentSteps.step2DefensiveSignal.overtBehaviorSent}
              </p>
              <div className="text-[11px] text-slate-400 italic">
                {activeScenario.enactmentSteps.step2DefensiveSignal.subtextSignal}
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onInspectConcept(activeScenario.enactmentSteps.step2DefensiveSignal.conceptId);
              }}
              className="mt-3 text-[11px] text-indigo-300 hover:text-indigo-200 font-mono flex items-center gap-1"
            >
              <BookOpen className="w-3 h-3" /> Inspect{' '}
              {activeScenario.enactmentSteps.step2DefensiveSignal.mechanismUsed}
            </button>
          </div>

          {/* Step 3 */}
          <div
            onClick={() => setCurrentStep(2)}
            className={`cursor-pointer rounded-2xl border p-4 transition ${
              currentStep === 2
                ? mode === 'enactment'
                  ? 'bg-rose-950/40 border-rose-400 shadow-lg'
                  : 'bg-emerald-950/40 border-emerald-400 shadow-lg'
                : 'bg-slate-950/80 border-slate-800'
            }`}
          >
            <div
              className={`text-[11px] font-mono uppercase font-bold mb-1 ${
                mode === 'enactment' ? 'text-rose-400' : 'text-emerald-400'
              }`}
            >
              Stage 3 • Response of Other (RO)
            </div>
            {mode === 'enactment' ? (
              <>
                <p className="text-xs text-slate-200 leading-relaxed mb-2">
                  {activeScenario.enactmentSteps.step3PulledResponseFromOther.otherInternalReaction}
                </p>
                <div className="text-[11px] text-rose-200 bg-rose-950/40 p-2.5 rounded-xl border border-rose-500/30">
                  <strong>Action:</strong>{' '}
                  {activeScenario.enactmentSteps.step3PulledResponseFromOther.otherObservableAction}
                </div>
              </>
            ) : (
              <>
                <div className="text-xs font-semibold text-emerald-300 mb-1">
                  {activeScenario.therapeuticInterruption.step3MentalizingResponseFromOther.therapistOrPartnerStance}
                </div>
                <p className="text-xs text-slate-200 leading-relaxed bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-500/30">
                  {activeScenario.therapeuticInterruption.step3MentalizingResponseFromOther.observableResponse}
                </p>
              </>
            )}
          </div>

          {/* Step 4 */}
          <div
            onClick={() => setCurrentStep(3)}
            className={`cursor-pointer rounded-2xl border p-4 transition ${
              currentStep === 3
                ? mode === 'enactment'
                  ? 'bg-rose-950/40 border-rose-400 shadow-lg'
                  : 'bg-emerald-950/40 border-emerald-400 shadow-lg'
                : 'bg-slate-950/80 border-slate-800'
            }`}
          >
            <div
              className={`text-[11px] font-mono uppercase font-bold mb-1 ${
                mode === 'enactment' ? 'text-rose-400' : 'text-emerald-400'
              }`}
            >
              Stage 4 • Response of Self (RS)
            </div>
            {mode === 'enactment' ? (
              <>
                <p className="text-xs text-slate-200 leading-relaxed mb-2">
                  {activeScenario.enactmentSteps.step4ConfirmingResponseOfSelf.selfFeelingAndAction}
                </p>
                <div className="text-[11px] font-serif italic text-rose-200 bg-rose-950/40 p-2.5 rounded-xl border border-rose-500/30">
                  {activeScenario.enactmentSteps.step4ConfirmingResponseOfSelf.unconsciousConclusion}
                </div>
              </>
            ) : (
              <>
                <p className="text-xs text-slate-200 leading-relaxed mb-2">
                  {activeScenario.therapeuticInterruption.step4CorrectiveEmotionalExperience.newSelfResponse}
                </p>
                <div className="text-[11px] font-serif italic text-emerald-200 bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-500/30">
                  {activeScenario.therapeuticInterruption.step4CorrectiveEmotionalExperience.schemaUpdate}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
