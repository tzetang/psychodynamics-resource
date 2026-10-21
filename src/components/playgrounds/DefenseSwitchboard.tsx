import React, { useState, useEffect } from 'react';
import { DEFENSE_SIMULATIONS, DEFENSE_TRIGGERS } from '../../data/playgrounds';
import {
  Play,
  Pause,
  RotateCcw,
  StepForward,
  Sliders,
  ShieldAlert,
  BookOpen,
  Zap,
  Brain,
  HeartPulse,
  CheckCircle2,
} from 'lucide-react';

interface DefenseSwitchboardProps {
  initialPresetId?: string;
  onInspectConcept: (conceptId: string) => void;
}

const STEP_LABELS = [
  {
    step: 0,
    title: '1. Unconscious Trigger & Raw Impulse',
    vertex: 'Hidden Feeling / Impulse (Bottom Vertex)',
    desc: 'An interpersonal event activates a raw cognitive Idea paired with an intense visceral Affect.',
  },
  {
    step: 1,
    title: '2. Signal Anxiety Alarm',
    vertex: 'Signal Anxiety (Top-Right Vertex)',
    desc: 'The Ego detects that expressing the raw impulse threatens attachment, pride, or conscience, firing an autonomic warning signal.',
  },
  {
    step: 2,
    title: '3. Ego Defense Switchboard Routing',
    vertex: 'Defense Mechanism (Top-Left Vertex)',
    desc: 'To quell Signal Anxiety, the selected Defense Mechanism separately filters, blocks, inverts, or channels the IDEA vs. the AFFECT.',
  },
  {
    step: 3,
    title: '4. Conscious Experience & Trade-Off',
    vertex: 'Conscious Compromise Output',
    desc: 'What actually reaches conscious awareness and observable behavior—along with its clinical trade-off.',
  },
];

export const DefenseSwitchboard: React.FC<DefenseSwitchboardProps> = ({
  initialPresetId,
  onInspectConcept,
}) => {
  const [selectedTriggerId, setSelectedTriggerId] = useState<string>(DEFENSE_TRIGGERS[0].id);
  const [selectedDefenseId, setSelectedDefenseId] = useState<string>(
    initialPresetId && DEFENSE_SIMULATIONS.some((d) => d.id === initialPresetId)
      ? initialPresetId
      : 'repression'
  );
  const [egoCapacity, setEgoCapacity] = useState<number>(75);
  const [currentStep, setCurrentStep] = useState<number>(3);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (initialPresetId && DEFENSE_SIMULATIONS.some((d) => d.id === initialPresetId)) {
      setSelectedDefenseId(initialPresetId);
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
    }, 1800);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const activeTrigger =
    DEFENSE_TRIGGERS.find((t) => t.id === selectedTriggerId) || DEFENSE_TRIGGERS[0];
  const activeDefense =
    DEFENSE_SIMULATIONS.find((d) => d.id === selectedDefenseId) || DEFENSE_SIMULATIONS[2];
  const activeOutcome = activeDefense.outcomesByTrigger[activeTrigger.id];

  const handlePlayRestart = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentStep(0);
      setIsPlaying(true);
    }
  };

  const dmrsColorBadge = (level: number) => {
    if (level >= 7) return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
    if (level >= 5) return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
  };

  return (
    <div className="space-y-6">
      {/* Top Control Deck: Trigger Selector + Ego Capacity Slider */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Trigger Selector (7 cols) */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-2 flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" /> Step A: Choose an Interpersonal Trigger Scenario
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3">
            {DEFENSE_TRIGGERS.map((trig) => (
              <button
                key={trig.id}
                onClick={() => {
                  setSelectedTriggerId(trig.id);
                  setCurrentStep(0);
                  setIsPlaying(true);
                }}
                className={`text-left p-3 rounded-xl border text-xs transition ${
                  trig.id === selectedTriggerId
                    ? 'bg-indigo-600/20 border-indigo-400 text-white font-semibold shadow'
                    : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                {trig.title}
              </button>
            ))}
          </div>
          <p className="text-xs text-slate-300 bg-slate-950/80 border border-slate-800/80 rounded-xl p-3">
            <strong className="text-white">Context:</strong> {activeTrigger.context}
          </p>
        </div>

        {/* Stress vs. Ego Capacity Slider (5 cols) */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" /> Ego Regulatory Capacity vs. Stress
              </span>
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-950 border border-slate-700 text-white">
                Capacity: {egoCapacity}% (Stress: {100 - egoCapacity}%)
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mb-3">
              Drag to see which DMRS defense levels remain accessible as stress overwhelms prefrontal ego capacity.
            </p>
            <input
              type="range"
              min={10}
              max={100}
              step={5}
              value={egoCapacity}
              onChange={(e) => {
                const val = Number(e.target.value);
                setEgoCapacity(val);
              }}
              className="w-full accent-indigo-500 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
              <span>10% (Acute Trauma / Panic)</span>
              <span>55% (Moderate Conflict)</span>
              <span>100% (Calm & Rested)</span>
            </div>
          </div>

          <div className="mt-3 text-xs rounded-xl bg-slate-950/90 border border-slate-800 p-2.5 text-slate-300">
            {egoCapacity >= 80 ? (
              <span className="text-emerald-300">
                ✓ High Ego Capacity: Mature Level 7 defenses (Sublimation, Humor, Suppression) are fully online.
              </span>
            ) : egoCapacity >= 50 ? (
              <span className="text-amber-300">
                ⚠ Moderate Stress Threshold: Mature Level 7 defenses strain; Neurotic/Obsessional filters (Levels 5–6) dominate.
              </span>
            ) : (
              <span className="text-rose-300">
                ⚡ High Stress / Ego Overload: Prefrontal mentalizing drops offline; Disavowal & Splitting (Levels 2–3) activate.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Defense Switchboard Selector Bar */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <ShieldAlert className="w-3.5 h-3.5" /> Step B: Select a Defense Mechanism on the Switchboard (DMRS Hierarchy)
          </span>
          <span className="text-[11px] text-slate-400">
            Defenses dimmed in red require more Ego Capacity ({'>'} {egoCapacity}%) than currently set on slider
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {DEFENSE_SIMULATIONS.map((def) => {
            const isSelected = def.id === selectedDefenseId;
            const isOverCapacity = def.minEgoCapacityRequired > egoCapacity;
            return (
              <button
                key={def.id}
                onClick={() => {
                  setSelectedDefenseId(def.id);
                  setCurrentStep(0);
                  setIsPlaying(true);
                }}
                className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${
                  isSelected
                    ? 'bg-indigo-600/25 border-indigo-400 ring-2 ring-indigo-400/30 shadow-lg'
                    : isOverCapacity
                    ? 'bg-slate-950/40 border-rose-900/40 opacity-60 hover:opacity-100'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <span
                    className={`inline-block text-[10px] font-mono px-1.5 py-0.5 rounded border mb-1.5 ${dmrsColorBadge(
                      def.dmrsLevel
                    )}`}
                  >
                    DMRS L{def.dmrsLevel}
                  </span>
                  <div className="text-xs font-bold text-white leading-tight">{def.name}</div>
                </div>
                <div className="mt-2 text-[10px] font-mono text-slate-400">
                  {isOverCapacity ? `Needs ≥${def.minEgoCapacityRequired}% Ego` : 'Online'}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Visual Stage: Animated Idea vs Affect Switchboard + Malan's Triangle of Conflict */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left 8 Cols: Animated Idea + Affect Switchboard Circuit */}
        <div className="lg:col-span-8 bg-slate-900/95 border border-slate-800 rounded-3xl p-5 md:p-6 shadow-2xl space-y-5">
          {/* Playback Controls Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${dmrsColorBadge(activeDefense.dmrsLevel)}`}>
                  DMRS Level {activeDefense.dmrsLevel} • {activeDefense.dmrsCategory}
                </span>
                <button
                  onClick={() => onInspectConcept(activeDefense.conceptId)}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-medium inline-flex items-center gap-1 underline underline-offset-4"
                >
                  <BookOpen className="w-3.5 h-3.5" /> Open in Concept Atlas
                </button>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                {activeDefense.name}: Idea vs. Affect Routing
              </h3>
              <p className="text-xs text-slate-400">{activeDefense.shortRule}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePlayRestart}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow transition"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                {isPlaying ? 'Pause' : 'Animate Flow'}
              </button>
              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStep((prev) => (prev + 1) % 4);
                }}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition"
                title="Step Forward"
              >
                <StepForward className="w-3.5 h-3.5" /> Step ({currentStep + 1}/4)
              </button>
              <button
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStep(3);
                }}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition"
                title="Show All Steps"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Step Indicator Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {STEP_LABELS.map((s) => (
              <button
                key={s.step}
                onClick={() => {
                  setIsPlaying(false);
                  setCurrentStep(s.step);
                }}
                className={`p-2.5 rounded-xl border text-left transition ${
                  currentStep === s.step
                    ? 'bg-indigo-950/70 border-indigo-400 text-white'
                    : currentStep > s.step
                    ? 'bg-slate-950/80 border-slate-800 text-slate-300'
                    : 'bg-slate-950/30 border-slate-800/50 text-slate-500'
                }`}
              >
                <div className="text-[11px] font-bold">{s.title}</div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">{s.vertex}</div>
              </button>
            ))}
          </div>

          {/* Animated SVG Circuit Diagram */}
          <svg viewBox="0 0 760 280" className="w-full h-auto bg-slate-950 rounded-2xl border border-slate-800 p-2">
            {/* Stage Columns Background */}
            <rect x="15" y="20" width="185" height="240" rx="12" fill="#0f172a" stroke={currentStep >= 0 ? '#334155' : '#1e293b'} strokeWidth="1.5" />
            <text x="107" y="42" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace" fontWeight="bold">
              STAGE 1: RAW IMPULSE
            </text>

            <rect x="220" y="20" width="130" height="240" rx="12" fill="#0f172a" stroke={currentStep >= 1 ? '#f59e0b' : '#1e293b'} strokeWidth={currentStep === 1 ? '2.5' : '1.5'} />
            <text x="285" y="42" textAnchor="middle" fill="#fbbf24" fontSize="10" fontFamily="monospace" fontWeight="bold">
              STAGE 2: ANXIETY
            </text>

            <rect x="370" y="20" width="165" height="240" rx="12" fill="#0f172a" stroke={currentStep >= 2 ? '#818cf8' : '#1e293b'} strokeWidth={currentStep === 2 ? '2.5' : '1.5'} />
            <text x="452" y="42" textAnchor="middle" fill="#a5b4fc" fontSize="10" fontFamily="monospace" fontWeight="bold">
              STAGE 3: EGO FILTER
            </text>

            <rect x="555" y="20" width="190" height="240" rx="12" fill="#0f172a" stroke={currentStep >= 3 ? '#10b981' : '#1e293b'} strokeWidth={currentStep === 3 ? '2.5' : '1.5'} />
            <text x="650" y="42" textAnchor="middle" fill="#6ee7b7" fontSize="10" fontFamily="monospace" fontWeight="bold">
              STAGE 4: CONSCIOUSNESS
            </text>

            {/* IDEA TRACK (TOP TRACK - BLUE) */}
            <g opacity={currentStep >= 0 ? 1 : 0.25}>
              <rect x="28" y="65" width="160" height="68" rx="10" fill="#082f49" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="48" cy="87" r="7" fill="#38bdf8" />
              <text x="62" y="91" fill="#e0f2fe" fontSize="11" fontWeight="bold">
                IDEA (Cognitive)
              </text>
              <text x="38" y="114" fill="#bae6fd" fontSize="9.5">
                Unconscious Wish / Thought
              </text>
            </g>

            {/* AFFECT TRACK (BOTTOM TRACK - ROSE) */}
            <g opacity={currentStep >= 0 ? 1 : 0.25}>
              <rect x="28" y="160" width="160" height="68" rx="10" fill="#4c0519" stroke="#fb7185" strokeWidth="1.5" />
              <circle cx="48" cy="182" r="7" fill="#fb7185" />
              <text x="62" y="186" fill="#ffe4e6" fontSize="11" fontWeight="bold">
                AFFECT (Emotion)
              </text>
              <text x="38" y="209" fill="#fda4af" fontSize="9.5">
                Visceral Emotional Charge
              </text>
            </g>

            {/* Stage 1 -> Stage 2 Cables */}
            {currentStep >= 1 && (
              <>
                <path d="M 188 99 L 235 122" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 4" className="animate-dash-flow" />
                <path d="M 188 194 L 235 162" stroke="#fb7185" strokeWidth="3" strokeDasharray="6 4" className="animate-dash-flow" />
              </>
            )}

            {/* Stage 2: Signal Anxiety Detector */}
            <g opacity={currentStep >= 1 ? 1 : 0.25}>
              <circle cx="285" cy="145" r="44" fill="#451a03" stroke="#fbbf24" strokeWidth="2" />
              <text x="285" y="138" textAnchor="middle" fill="#fef3c7" fontSize="11" fontWeight="bold">
                SIGNAL
              </text>
              <text x="285" y="153" textAnchor="middle" fill="#fef3c7" fontSize="11" fontWeight="bold">
                ANXIETY
              </text>
              <text x="285" y="170" textAnchor="middle" fill="#fbbf24" fontSize="8.5" fontFamily="monospace">
                ALARM FIRES
              </text>
            </g>

            {/* Stage 2 -> Stage 3 Cables */}
            {currentStep >= 2 && (
              <>
                <path d="M 328 128 L 382 99" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 4" className="animate-dash-flow" />
                <path d="M 328 162 L 382 194" stroke="#fb7185" strokeWidth="3" strokeDasharray="6 4" className="animate-dash-flow" />
              </>
            )}

            {/* Stage 3: Defense Mechanism Routing Gates */}
            <g opacity={currentStep >= 2 ? 1 : 0.25}>
              {/* Idea Gate */}
              <rect x="382" y="65" width="140" height="68" rx="10" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
              <text x="452" y="88" textAnchor="middle" fill="#e0e7ff" fontSize="10.5" fontWeight="bold">
                IDEA GATE
              </text>
              <text x="452" y="110" textAnchor="middle" fill="#38bdf8" fontSize="10" fontFamily="monospace">
                {activeDefense.ideaAction === 'block' && '⛔ REPRESSED'}
                {activeDefense.ideaAction === 'pass' && '✅ ALLOWED IN'}
                {activeDefense.ideaAction === 'invert' && '🔄 180° INVERTED'}
                {activeDefense.ideaAction === 'redirect-other' && '👉 ATTRIBUTED OUT'}
                {activeDefense.ideaAction === 'abstract' && '☁️ ABSTRACTED'}
                {activeDefense.ideaAction === 'split' && '⚡ SPLIT IN TWO'}
              </text>

              {/* Affect Gate */}
              <rect x="382" y="160" width="140" height="68" rx="10" fill="#1e1b4b" stroke="#818cf8" strokeWidth="1.5" />
              <text x="452" y="183" textAnchor="middle" fill="#e0e7ff" fontSize="10.5" fontWeight="bold">
                AFFECT GATE
              </text>
              <text x="452" y="205" textAnchor="middle" fill="#fb7185" fontSize="10" fontFamily="monospace">
                {activeDefense.affectAction === 'block' && '🔇 NUMBED / SEVERED'}
                {activeDefense.affectAction === 'pass' && '🔥 FELT INTACT'}
                {activeDefense.affectAction === 'invert' && '🔄 FLIPPED TO SWEET'}
                {activeDefense.affectAction === 'redirect-other' && '👉 FEARED FROM OTHER'}
                {activeDefense.affectAction === 'discharge-body' && '🫀 SOMATIC LEAK'}
                {activeDefense.affectAction === 'channel-constructive' && '✨ FUEL FOR MASTERY'}
              </text>
            </g>

            {/* Stage 3 -> Stage 4 Output Cables */}
            {currentStep >= 3 && (
              <>
                <path
                  d="M 522 99 L 568 99"
                  stroke={activeDefense.ideaAction === 'block' ? '#475569' : '#38bdf8'}
                  strokeWidth="3"
                  strokeDasharray={activeDefense.ideaAction === 'block' ? '2 5' : '6 4'}
                  className={activeDefense.ideaAction === 'block' ? '' : 'animate-dash-flow'}
                />
                <path
                  d="M 522 194 L 568 194"
                  stroke={activeDefense.affectAction === 'block' ? '#475569' : '#fb7185'}
                  strokeWidth="3"
                  strokeDasharray={activeDefense.affectAction === 'block' ? '2 5' : '6 4'}
                  className={activeDefense.affectAction === 'block' ? '' : 'animate-dash-flow'}
                />
              </>
            )}

            {/* Stage 4: Conscious Outcomes */}
            <g opacity={currentStep >= 3 ? 1 : 0.25}>
              <rect
                x="568"
                y="65"
                width="164"
                height="68"
                rx="10"
                fill={activeDefense.ideaAction === 'block' ? '#0f172a' : '#082f49'}
                stroke={activeDefense.ideaAction === 'block' ? '#475569' : '#38bdf8'}
                strokeWidth="1.5"
              />
              <text x="650" y="90" textAnchor="middle" fill="#e0f2fe" fontSize="10.5" fontWeight="bold">
                {activeDefense.ideaAction === 'block' ? 'Blank / Amnesia' : 'Conscious Thought'}
              </text>
              <text x="650" y="110" textAnchor="middle" fill="#94a3b8" fontSize="9.5">
                See Idea fate below ↓
              </text>

              <rect
                x="568"
                y="160"
                width="164"
                height="68"
                rx="10"
                fill={activeDefense.affectAction === 'block' ? '#0f172a' : '#4c0519'}
                stroke={activeDefense.affectAction === 'block' ? '#475569' : '#fb7185'}
                strokeWidth="1.5"
              />
              <text x="650" y="185" textAnchor="middle" fill="#ffe4e6" fontSize="10.5" fontWeight="bold">
                {activeDefense.affectAction === 'block' ? 'Emotional Monotone' : 'Felt / Somatic State'}
              </text>
              <text x="650" y="205" textAnchor="middle" fill="#fda4af" fontSize="9.5">
                See Affect fate below ↓
              </text>
            </g>
          </svg>

          {/* Detailed Idea vs. Affect Outcome Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-sky-950/25 border border-sky-500/30 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-sky-400 flex items-center gap-1.5 font-semibold">
                  <Brain className="w-4 h-4" /> What Happens to the IDEA (Cognitive)
                </span>
              </div>
              <div className="text-xs text-slate-400">
                <strong>Raw Unconscious Idea:</strong> {activeTrigger.rawImpulseIdea}
              </div>
              <div className="text-xs text-sky-100 bg-slate-950/70 p-3 rounded-xl border border-sky-500/20 leading-relaxed">
                <strong>After {activeDefense.name}:</strong> {activeOutcome.ideaTransformation}
              </div>
            </div>

            <div className="rounded-2xl bg-rose-950/25 border border-rose-500/30 p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-rose-400 flex items-center gap-1.5 font-semibold">
                  <HeartPulse className="w-4 h-4" /> What Happens to the AFFECT (Emotional)
                </span>
              </div>
              <div className="text-xs text-slate-400">
                <strong>Raw Unconscious Affect:</strong> {activeTrigger.rawImpulseAffect}
              </div>
              <div className="text-xs text-rose-100 bg-slate-950/70 p-3 rounded-xl border border-rose-500/20 leading-relaxed">
                <strong>After {activeDefense.name}:</strong> {activeOutcome.affectTransformation}
              </div>
            </div>
          </div>

          {/* Conscious Result & Clinical Trade-Off */}
          <div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Final Conscious Experience & Observable Behavior
              </span>
            </div>
            <p className="text-sm font-serif italic text-white bg-slate-900/90 p-3 rounded-xl border border-slate-800">
              {activeOutcome.consciousExperience}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
              <div className="text-slate-300">
                <strong className="text-slate-100">Observable Action:</strong> {activeOutcome.observableBehavior}
              </div>
              <div className="text-amber-300/90">
                <strong className="text-amber-200">Clinical Trade-Off:</strong> {activeOutcome.clinicalTradeoff}
              </div>
            </div>
          </div>
        </div>

        {/* Right 4 Cols: Malan's Triangle of Conflict Live Visualizer */}
        <div className="lg:col-span-4 bg-slate-900/95 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-rose-400">
              Clinical Compass • David Malan (1979)
            </span>
            <h4 className="text-lg font-bold text-white mt-0.5">
              Malan’s Triangle of Conflict
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Every psychodynamic intervention tracks where the person is on this inverted triangle right now.
            </p>
          </div>

          <svg viewBox="0 0 340 285" className="w-full h-auto bg-slate-950 rounded-2xl border border-slate-800">
            {/* Triangle Edges */}
            <polygon
              points="70,65 270,65 170,225"
              fill="rgba(99, 102, 241, 0.06)"
              stroke="#475569"
              strokeWidth="2.5"
            />

            {/* Top Left Vertex: DEFENSE (D) */}
            <g
              className="cursor-pointer"
              onClick={() => setCurrentStep(2)}
            >
              <circle
                cx="70"
                cy="65"
                r="38"
                fill="#1e1b4b"
                stroke={currentStep === 2 ? '#818cf8' : '#4338ca'}
                strokeWidth={currentStep === 2 ? '3.5' : '2'}
              />
              <text x="70" y="58" textAnchor="middle" fill="#e0e7ff" fontSize="11" fontWeight="bold">
                DEFENSE
              </text>
              <text x="70" y="74" textAnchor="middle" fill="#a5b4fc" fontSize="9.5" fontFamily="monospace">
                {activeDefense.name.slice(0, 12)}
              </text>
            </g>

            {/* Top Right Vertex: ANXIETY (A) */}
            <g
              className="cursor-pointer"
              onClick={() => setCurrentStep(1)}
            >
              <circle
                cx="270"
                cy="65"
                r="38"
                fill="#451a03"
                stroke={currentStep === 1 ? '#fbbf24' : '#b45309'}
                strokeWidth={currentStep === 1 ? '3.5' : '2'}
              />
              <text x="270" y="58" textAnchor="middle" fill="#fef3c7" fontSize="11" fontWeight="bold">
                ANXIETY
              </text>
              <text x="270" y="74" textAnchor="middle" fill="#fbbf24" fontSize="9.5" fontFamily="monospace">
                Signal Warning
              </text>
            </g>

            {/* Bottom Vertex: IMPULSE / CORE FEELING (F) */}
            <g
              className="cursor-pointer"
              onClick={() => setCurrentStep(0)}
            >
              <circle
                cx="170"
                cy="225"
                r="42"
                fill="#4c0519"
                stroke={currentStep === 0 ? '#fb7185' : '#be123c'}
                strokeWidth={currentStep === 0 ? '3.5' : '2'}
              />
              <text x="170" y="218" textAnchor="middle" fill="#ffe4e6" fontSize="11" fontWeight="bold">
                IMPULSE /
              </text>
              <text x="170" y="233" textAnchor="middle" fill="#ffe4e6" fontSize="11" fontWeight="bold">
                FEELING
              </text>
            </g>

            {/* Center Label */}
            <text x="170" y="128" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
              TRIANGLE OF
            </text>
            <text x="170" y="142" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="monospace">
              CONFLICT
            </text>
          </svg>

          {/* Vertex Details */}
          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-xl bg-rose-950/30 border border-rose-500/30">
              <div className="font-mono uppercase text-[10px] text-rose-400 font-semibold">
                Bottom Vertex • Warded-Off Feeling
              </div>
              <div className="text-slate-200 mt-0.5">{activeTrigger.rawImpulseAffect}</div>
            </div>

            <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30">
              <div className="font-mono uppercase text-[10px] text-amber-400 font-semibold">
                Top-Right Vertex • Signal Anxiety Belief
              </div>
              <div className="text-slate-200 mt-0.5">{activeTrigger.signalAnxietyWarning}</div>
            </div>

            <div className="p-3 rounded-xl bg-indigo-950/30 border border-indigo-500/30">
              <div className="font-mono uppercase text-[10px] text-indigo-400 font-semibold">
                Top-Left Vertex • Active Defense (L{activeDefense.dmrsLevel})
              </div>
              <div className="text-slate-200 mt-0.5">
                <strong>{activeDefense.name}:</strong> {activeDefense.shortRule}
              </div>
            </div>
          </div>

          <button
            onClick={() => onInspectConcept('triangle-of-conflict')}
            className="w-full py-2.5 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-indigo-300 flex items-center justify-center gap-2 transition"
          >
            <BookOpen className="w-3.5 h-3.5" /> Read Full "Triangle of Conflict" Entry
          </button>
        </div>
      </div>
    </div>
  );
};
