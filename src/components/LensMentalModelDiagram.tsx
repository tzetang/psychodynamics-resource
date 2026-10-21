import React, { useState } from 'react';
import { LensId } from '../types/psychodynamics';
import { Sparkles, Eye } from 'lucide-react';

interface LensMentalModelDiagramProps {
  lensId: LensId;
  onSelectConcept: (conceptId: string) => void;
}

export const LensMentalModelDiagram: React.FC<LensMentalModelDiagramProps> = ({
  lensId,
  onSelectConcept,
}) => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  if (lensId === 'drive-conflict') {
    return (
      <div className="bg-slate-900/90 border border-rose-500/30 rounded-2xl p-5 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Mental Model • Lens 1
            </span>
            <h4 className="text-base font-semibold text-white">
              Intrapsychic Collision & Compromise Formation
            </h4>
          </div>
          <div className="flex gap-1.5 text-xs">
            {['1. Raw Drive', '2. Signal Anxiety', '3. Compromise Symptom'].map((label, idx) => (
              <button
                key={label}
                onClick={() => setActiveLayer(idx)}
                className={`px-2.5 py-1 rounded-lg border transition ${
                  activeLayer === idx
                    ? 'bg-rose-500/20 border-rose-400 text-rose-200 font-medium'
                    : 'bg-slate-800/70 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <svg viewBox="0 0 680 270" className="w-full h-auto bg-slate-950/80 rounded-xl border border-slate-800">
          <defs>
            <linearGradient id="unconsciousGrad" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#881337" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.1" />
            </linearGradient>
            <marker id="arrowRose" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#fb7185" />
            </marker>
            <marker id="arrowAmber" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
            </marker>
            <marker id="arrowIndigo" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#818cf8" />
            </marker>
          </defs>

          {/* Unconscious depth background */}
          <rect x="10" y="135" width="660" height="125" rx="10" fill="url(#unconsciousGrad)" />
          <line x1="15" y1="135" x2="665" y2="135" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="6 6" />
          <text x="25" y="127" fill="#94a3b8" fontSize="10" fontFamily="monospace">
            CONSCIOUS SURFACE (AWARENESS)
          </text>
          <text x="25" y="152" fill="#fda4af" fontSize="10" fontFamily="monospace">
            UNCONSCIOUS DEPTH (REPRESSION BARRIER)
          </text>

          {/* Bottom Left: Endogenous Drive / Wish */}
          <g
            className="cursor-pointer"
            onClick={() => onSelectConcept('structural-model')}
          >
            <rect
              x="45"
              y="175"
              width="195"
              height="68"
              rx="12"
              fill="#4c0519"
              stroke={activeLayer === 0 ? '#fb7185' : '#9f1239'}
              strokeWidth={activeLayer === 0 ? '2.5' : '1.5'}
            />
            <text x="142" y="198" textAnchor="middle" fill="#fecdd3" fontSize="12" fontWeight="bold">
              ID / ENDOGENOUS DRIVE
            </text>
            <text x="142" y="216" textAnchor="middle" fill="#fda4af" fontSize="10.5">
              Forbidden Wish, Rage, or Desire
            </text>
            <text x="142" y="232" textAnchor="middle" fill="#fb7185" fontSize="9.5" fontFamily="monospace">
              [Click: Structural Model]
            </text>
          </g>

          {/* Bottom Right: Punitive Superego Prohibition */}
          <g
            className="cursor-pointer"
            onClick={() => onSelectConcept('triangle-of-conflict')}
          >
            <rect
              x="440"
              y="175"
              width="195"
              height="68"
              rx="12"
              fill="#1e1b4b"
              stroke={activeLayer === 1 ? '#818cf8' : '#4338ca'}
              strokeWidth={activeLayer === 1 ? '2.5' : '1.5'}
            />
            <text x="537" y="198" textAnchor="middle" fill="#e0e7ff" fontSize="12" fontWeight="bold">
              SUPEREGO PROHIBITION
            </text>
            <text x="537" y="216" textAnchor="middle" fill="#a5b4fc" fontSize="10.5">
              Guilt, Moral Taboo & Threat
            </text>
            <text x="537" y="232" textAnchor="middle" fill="#818cf8" fontSize="9.5" fontFamily="monospace">
              [Click: Triangle of Conflict]
            </text>
          </g>

          {/* Center Collision: Signal Anxiety */}
          <g
            className="cursor-pointer"
            onClick={() => onSelectConcept('signal-anxiety')}
          >
            <circle
              cx="340"
              cy="195"
              r="38"
              fill="#451a03"
              stroke="#fbbf24"
              strokeWidth={activeLayer === 1 ? '3' : '1.5'}
            />
            <text x="340" y="191" textAnchor="middle" fill="#fde68a" fontSize="11" fontWeight="bold">
              SIGNAL
            </text>
            <text x="340" y="205" textAnchor="middle" fill="#fde68a" fontSize="11" fontWeight="bold">
              ANXIETY
            </text>
          </g>

          {/* Animated Force Arrows */}
          <path
            d="M 240 205 L 295 200"
            stroke="#fb7185"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            className="animate-dash-flow"
            markerEnd="url(#arrowRose)"
          />
          <path
            d="M 440 205 L 385 200"
            stroke="#818cf8"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            className="animate-dash-flow"
            markerEnd="url(#arrowIndigo)"
          />
          <path
            d="M 340 155 L 340 96"
            stroke="#fbbf24"
            strokeWidth="2.5"
            strokeDasharray="5 4"
            className="animate-dash-flow"
            markerEnd="url(#arrowAmber)"
          />

          {/* Top Center: Conscious Compromise Formation */}
          <g
            className="cursor-pointer"
            onClick={() => onSelectConcept('compromise-formation')}
          >
            <rect
              x="205"
              y="22"
              width="270"
              height="66"
              rx="12"
              fill="#0f172a"
              stroke={activeLayer === 2 ? '#fbbf24' : '#475569'}
              strokeWidth={activeLayer === 2 ? '2.5' : '1.5'}
            />
            <text x="340" y="45" textAnchor="middle" fill="#f8fafc" fontSize="12.5" fontWeight="bold">
              COMPROMISE FORMATION (SYMPTOM / SLIP)
            </text>
            <text x="340" y="63" textAnchor="middle" fill="#cbd5e1" fontSize="10.5">
              Disguised expression of Wish + Defensive Self-Punishment
            </text>
            <text x="340" y="78" textAnchor="middle" fill="#fbbf24" fontSize="9.5" fontFamily="monospace">
              [Click: Compromise Formation]
            </text>
          </g>
        </svg>
      </div>
    );
  }

  if (lensId === 'ego-psychology') {
    return (
      <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-5 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Mental Model • Lens 2
            </span>
            <h4 className="text-base font-semibold text-white">
              The Ego’s Defense Switchboard: Separating Idea from Affect
            </h4>
          </div>
          <div className="flex gap-1.5 text-xs">
            {[
              { label: 'Repression (Blocks Idea)', idx: 0 },
              { label: 'Isolation (Blocks Affect)', idx: 1 },
              { label: 'Sublimation (Channels Both)', idx: 2 },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveLayer(item.idx)}
                className={`px-2.5 py-1 rounded-lg border transition ${
                  activeLayer === item.idx
                    ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-medium'
                    : 'bg-slate-800/70 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <svg viewBox="0 0 680 250" className="w-full h-auto bg-slate-950/80 rounded-xl border border-slate-800">
          {/* Raw Input */}
          <rect x="25" y="75" width="155" height="100" rx="12" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
          <text x="102" y="102" textAnchor="middle" fill="#f8fafc" fontSize="11.5" fontWeight="bold">
            RAW TRIGGER
          </text>
          <circle cx="52" cy="128" r="7" fill="#38bdf8" />
          <text x="66" y="132" fill="#bae6fd" fontSize="11" fontWeight="bold">
            IDEA (Thought)
          </text>
          <circle cx="52" cy="152" r="7" fill="#f43f5e" />
          <text x="66" y="156" fill="#fecdd3" fontSize="11" fontWeight="bold">
            AFFECT (Charge)
          </text>

          {/* Ego Switchboard Gate */}
          <g
            className="cursor-pointer"
            onClick={() =>
              onSelectConcept(
                activeLayer === 0
                  ? 'repression'
                  : activeLayer === 1
                  ? 'isolation-of-affect'
                  : 'sublimation'
              )
            }
          >
            <rect x="255" y="45" width="170" height="160" rx="16" fill="#451a03" stroke="#f59e0b" strokeWidth="2" />
            <text x="340" y="72" textAnchor="middle" fill="#fde68a" fontSize="12" fontWeight="bold">
              EGO DEFENSE FILTER
            </text>
            <text x="340" y="92" textAnchor="middle" fill="#fbbf24" fontSize="10.5" fontFamily="monospace">
              {activeLayer === 0
                ? 'Mode: REPRESSION (L5)'
                : activeLayer === 1
                ? 'Mode: ISOLATION (L6)'
                : 'Mode: SUBLIMATION (L7)'}
            </text>
            <line x1="275" y1="105" x2="405" y2="105" stroke="#78350f" strokeWidth="1" />
            <text x="340" y="128" textAnchor="middle" fill="#bae6fd" fontSize="10.5">
              Idea: {activeLayer === 0 ? '⛔ BLOCKED' : activeLayer === 1 ? '✅ PASSES CLEAR' : '✨ INTEGRATED'}
            </text>
            <text x="340" y="152" textAnchor="middle" fill="#fecdd3" fontSize="10.5">
              Affect: {activeLayer === 0 ? '⚡ LEAKS / SOMATIC' : activeLayer === 1 ? '⛔ NUMBED' : '✨ CHANNELED'}
            </text>
            <text x="340" y="185" textAnchor="middle" fill="#fcd34d" fontSize="9.5" fontFamily="monospace">
              [Click to Inspect Concept]
            </text>
          </g>

          {/* Input streams */}
          <path d="M 180 110 L 255 110" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 4" className="animate-dash-flow" />
          <path d="M 180 145 L 255 145" stroke="#f43f5e" strokeWidth="3" strokeDasharray="6 4" className="animate-dash-flow" />

          {/* Output streams based on mode */}
          {activeLayer === 0 && (
            <>
              <line x1="425" y1="110" x2="465" y2="110" stroke="#64748b" strokeWidth="2" strokeDasharray="2 4" />
              <text x="472" y="114" fill="#94a3b8" fontSize="11">
                Idea forgotten ("Why am I tense?")
              </text>
              <path d="M 425 145 L 590 145" stroke="#f43f5e" strokeWidth="3" strokeDasharray="6 4" className="animate-dash-flow" />
              <text x="445" y="172" fill="#fda4af" fontSize="11">
                Affect leaks as free-floating anxiety/body tension
              </text>
            </>
          )}
          {activeLayer === 1 && (
            <>
              <path d="M 425 110 L 595 110" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 4" className="animate-dash-flow" />
              <text x="445" y="98" fill="#bae6fd" fontSize="11">
                Idea stays 100% conscious & factual
              </text>
              <line x1="425" y1="145" x2="465" y2="145" stroke="#64748b" strokeWidth="2" strokeDasharray="2 4" />
              <text x="472" y="150" fill="#94a3b8" fontSize="11">
                Affect unplugged (monotone detachment)
              </text>
            </>
          )}
          {activeLayer === 2 && (
            <>
              <path d="M 425 110 L 595 110" stroke="#38bdf8" strokeWidth="3" strokeDasharray="6 4" className="animate-dash-flow" />
              <path d="M 425 145 L 595 145" stroke="#10b981" strokeWidth="3" strokeDasharray="6 4" className="animate-dash-flow" />
              <text x="445" y="96" fill="#bae6fd" fontSize="11">
                Truth stays conscious & owned
              </text>
              <text x="445" y="172" fill="#6ee7b7" fontSize="11">
                Affect fuels creative mastery & assertion
              </text>
            </>
          )}
        </svg>
      </div>
    );
  }

  if (lensId === 'object-relations') {
    const isIntegrated = activeLayer === 1;
    return (
      <div className="bg-slate-900/90 border border-violet-500/30 rounded-2xl p-5 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violet-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Mental Model • Lens 3
            </span>
            <h4 className="text-base font-semibold text-white">
              Kernberg’s Self–Object–Affect Dyads: Splitting vs. Whole-Object Integration
            </h4>
          </div>
          <div className="flex gap-1.5 text-xs">
            <button
              onClick={() => setActiveLayer(0)}
              className={`px-3 py-1 rounded-lg border transition ${
                !isIntegrated
                  ? 'bg-violet-500/20 border-violet-400 text-violet-200 font-medium'
                  : 'bg-slate-800/70 border-slate-700 text-slate-400'
              }`}
            >
              Paranoid-Schizoid (Split Wall)
            </button>
            <button
              onClick={() => setActiveLayer(1)}
              className={`px-3 py-1 rounded-lg border transition ${
                isIntegrated
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-medium'
                  : 'bg-slate-800/70 border-slate-700 text-slate-400'
              }`}
            >
              Depressive Position (Integrated)
            </button>
          </div>
        </div>

        <svg viewBox="0 0 680 250" className="w-full h-auto bg-slate-950/80 rounded-xl border border-slate-800">
          {!isIntegrated ? (
            <>
              {/* Upper All-Good Dyad */}
              <rect x="25" y="20" width="630" height="90" rx="12" fill="#064e3b" fillOpacity="0.25" stroke="#10b981" strokeDasharray="4 4" />
              <text x="40" y="40" fill="#6ee7b7" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
                IDEALIZED "ALL-GOOD" COMPARTMENT
              </text>
              <circle cx="145" cy="72" r="28" fill="#065f46" stroke="#34d399" strokeWidth="2" />
              <text x="145" y="75" textAnchor="middle" fill="#ecfdf5" fontSize="10.5" fontWeight="bold">
                All-Good Self
              </text>
              <line x1="175" y1="72" x2="475" y2="72" stroke="#34d399" strokeWidth="2.5" />
              <rect x="265" y="57" width="145" height="28" rx="8" fill="#022c22" stroke="#10b981" />
              <text x="337" y="75" textAnchor="middle" fill="#6ee7b7" fontSize="10.5">
                Affect: Blissful Merger
              </text>
              <circle cx="515" cy="72" r="28" fill="#065f46" stroke="#34d399" strokeWidth="2" />
              <text x="515" y="75" textAnchor="middle" fill="#ecfdf5" fontSize="10.5" fontWeight="bold">
                Ideal Object
              </text>

              {/* Rigid Splitting Barrier */}
              <g className="cursor-pointer" onClick={() => onSelectConcept('splitting')}>
                <line x1="20" y1="125" x2="660" y2="125" stroke="#f43f5e" strokeWidth="4" />
                <rect x="225" y="112" width="230" height="26" rx="6" fill="#881337" stroke="#fb7185" />
                <text x="340" y="129" textAnchor="middle" fill="#ffe4e6" fontSize="10.5" fontWeight="bold" fontFamily="monospace">
                  ⚡ SPLITTING BARRIER (CLICK TO VIEW)
                </text>
              </g>

              {/* Lower All-Bad Dyad */}
              <rect x="25" y="142" width="630" height="90" rx="12" fill="#4c0519" fillOpacity="0.3" stroke="#f43f5e" />
              <text x="40" y="162" fill="#fda4af" fontSize="10.5" fontFamily="monospace" fontWeight="bold">
                PERSECUTORY "ALL-BAD" COMPARTMENT
              </text>
              <circle cx="145" cy="195" r="28" fill="#881337" stroke="#fb7185" strokeWidth="2" />
              <text x="145" y="198" textAnchor="middle" fill="#ffe4e6" fontSize="10.5" fontWeight="bold">
                Worthless Self
              </text>
              <line x1="175" y1="195" x2="475" y2="195" stroke="#fb7185" strokeWidth="2.5" strokeDasharray="5 3" className="animate-dash-flow" />
              <rect x="265" y="180" width="145" height="28" rx="8" fill="#4c0519" stroke="#f43f5e" />
              <text x="337" y="198" textAnchor="middle" fill="#fda4af" fontSize="10.5">
                Affect: Rage & Terror
              </text>
              <circle cx="515" cy="195" r="28" fill="#881337" stroke="#fb7185" strokeWidth="2" />
              <text x="515" y="198" textAnchor="middle" fill="#ffe4e6" fontSize="10.5" fontWeight="bold">
                Sadistic Object
              </text>
            </>
          ) : (
            <g className="cursor-pointer" onClick={() => onSelectConcept('depressive-position')}>
              <rect x="35" y="30" width="610" height="190" rx="16" fill="#1e1b4b" fillOpacity="0.45" stroke="#a78bfa" strokeWidth="2" />
              <text x="340" y="58" textAnchor="middle" fill="#ddd6fe" fontSize="12" fontWeight="bold" fontFamily="monospace">
                DEPRESSIVE POSITION: WHOLE-OBJECT INTEGRATION & OBJECT CONSTANCY
              </text>

              <circle cx="160" cy="135" r="48" fill="#312e81" stroke="#a78bfa" strokeWidth="2.5" />
              <text x="160" y="128" textAnchor="middle" fill="#f5f3ff" fontSize="12" fontWeight="bold">
                Whole Self
              </text>
              <text x="160" y="146" textAnchor="middle" fill="#c4b5fd" fontSize="10">
                Worthy + Fallible
              </text>

              <line x1="210" y1="135" x2="470" y2="135" stroke="#a78bfa" strokeWidth="3" />
              <rect x="245" y="110" width="190" height="50" rx="10" fill="#0f172a" stroke="#8b5cf6" strokeWidth="1.5" />
              <text x="340" y="131" textAnchor="middle" fill="#e9d5ff" fontSize="11" fontWeight="bold">
                Ambivalence & Reparation
              </text>
              <text x="340" y="148" textAnchor="middle" fill="#a78bfa" fontSize="9.5">
                "I am angry AT you AND I love you"
              </text>

              <circle cx="520" cy="135" r="48" fill="#312e81" stroke="#a78bfa" strokeWidth="2.5" />
              <text x="520" y="128" textAnchor="middle" fill="#f5f3ff" fontSize="12" fontWeight="bold">
                Whole Other
              </text>
              <text x="520" y="146" textAnchor="middle" fill="#c4b5fd" fontSize="10">
                Loving + Imperfect
              </text>
              <text x="340" y="205" textAnchor="middle" fill="#c4b5fd" fontSize="10" fontFamily="monospace">
                [Click to Inspect Depressive Position]
              </text>
            </g>
          )}
        </svg>
      </div>
    );
  }

  if (lensId === 'self-psychology') {
    return (
      <div className="bg-slate-900/90 border border-cyan-500/30 rounded-2xl p-5 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Mental Model • Lens 4
            </span>
            <h4 className="text-base font-semibold text-white">
              Kohut’s Tripolar Self & Selfobject Nutrients
            </h4>
          </div>
          <div className="flex gap-1.5 text-xs">
            <button
              onClick={() => setActiveLayer(0)}
              className={`px-3 py-1 rounded-lg border transition ${
                activeLayer === 0
                  ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 font-medium'
                  : 'bg-slate-800/70 border-slate-700 text-slate-400'
              }`}
            >
              Empathic Selfobject Supply (Cohesion)
            </button>
            <button
              onClick={() => setActiveLayer(1)}
              className={`px-3 py-1 rounded-lg border transition ${
                activeLayer === 1
                  ? 'bg-rose-500/20 border-rose-400 text-rose-200 font-medium'
                  : 'bg-slate-800/70 border-slate-700 text-slate-400'
              }`}
            >
              Empathic Rupture (Shame / Grandiosity)
            </button>
          </div>
        </div>

        <svg viewBox="0 0 680 250" className="w-full h-auto bg-slate-950/80 rounded-xl border border-slate-800">
          {/* Three Selfobject Poles */}
          <g className="cursor-pointer" onClick={() => onSelectConcept('selfobject-needs')}>
            <rect x="30" y="25" width="165" height="58" rx="10" fill="#083344" stroke="#22d3ee" strokeWidth="1.5" />
            <text x="112" y="48" textAnchor="middle" fill="#cffafe" fontSize="11.5" fontWeight="bold">
              1. MIRRORING
            </text>
            <text x="112" y="66" textAnchor="middle" fill="#67e8f9" fontSize="10">
              "See & prize my worth"
            </text>

            <rect x="257" y="15" width="165" height="58" rx="10" fill="#083344" stroke="#22d3ee" strokeWidth="1.5" />
            <text x="340" y="38" textAnchor="middle" fill="#cffafe" fontSize="11.5" fontWeight="bold">
              2. IDEALIZING
            </text>
            <text x="340" y="56" textAnchor="middle" fill="#67e8f9" fontSize="10">
              "Calm strength to merge with"
            </text>

            <rect x="485" y="25" width="165" height="58" rx="10" fill="#083344" stroke="#22d3ee" strokeWidth="1.5" />
            <text x="567" y="48" textAnchor="middle" fill="#cffafe" fontSize="11.5" fontWeight="bold">
              3. TWINSHIP
            </text>
            <text x="567" y="66" textAnchor="middle" fill="#67e8f9" fontSize="10">
              "Kinship among humans"
            </text>
          </g>

          {/* Supply Lines */}
          <line
            x1="150"
            y1="83"
            x2="275"
            y2="145"
            stroke={activeLayer === 0 ? '#22d3ee' : '#f43f5e'}
            strokeWidth="2.5"
            strokeDasharray={activeLayer === 0 ? '6 4' : '2 6'}
            className={activeLayer === 0 ? 'animate-dash-flow' : ''}
          />
          <line
            x1="340"
            y1="73"
            x2="340"
            y2="130"
            stroke={activeLayer === 0 ? '#22d3ee' : '#f43f5e'}
            strokeWidth="2.5"
            strokeDasharray={activeLayer === 0 ? '6 4' : '2 6'}
            className={activeLayer === 0 ? 'animate-dash-flow' : ''}
          />
          <line
            x1="530"
            y1="83"
            x2="405"
            y2="145"
            stroke={activeLayer === 0 ? '#22d3ee' : '#f43f5e'}
            strokeWidth="2.5"
            strokeDasharray={activeLayer === 0 ? '6 4' : '2 6'}
            className={activeLayer === 0 ? 'animate-dash-flow' : ''}
          />

          {/* Central Nuclear Self */}
          <g
            className="cursor-pointer"
            onClick={() =>
              onSelectConcept(
                activeLayer === 0 ? 'transmuting-internalization' : 'narcissistic-vulnerability'
              )
            }
          >
            <rect
              x="175"
              y="130"
              width="330"
              height="95"
              rx="16"
              fill={activeLayer === 0 ? '#0f172a' : '#4c0519'}
              stroke={activeLayer === 0 ? '#22d3ee' : '#fb7185'}
              strokeWidth="2.5"
            />
            <text x="340" y="158" textAnchor="middle" fill="#f8fafc" fontSize="13" fontWeight="bold">
              {activeLayer === 0
                ? 'COHESIVE NUCLEAR SELF'
                : 'FRAGMENTING SELF (NARCISSISTIC INJURY)'}
            </text>
            <text x="340" y="180" textAnchor="middle" fill="#cbd5e1" fontSize="10.5">
              {activeLayer === 0
                ? 'Vitality, regulated self-esteem, and Transmuting Internalization'
                : 'Oscillates between Grandiose Armor & Crushing Shame / Rage'}
            </text>
            <text x="340" y="205" textAnchor="middle" fill="#67e8f9" fontSize="9.5" fontFamily="monospace">
              [Click to Inspect Concept]
            </text>
          </g>
        </svg>
      </div>
    );
  }

  // Lens 5: Relational & Empirical Two-Person Field
  return (
    <div className="bg-slate-900/90 border border-emerald-500/30 rounded-2xl p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Mental Model • Lens 5
          </span>
          <h4 className="text-base font-semibold text-white">
            The Two-Person Relational Field & Luborsky’s CCRT Loop
          </h4>
        </div>
        <div className="flex gap-1.5 text-xs">
          <button
            onClick={() => setActiveLayer(0)}
            className={`px-3 py-1 rounded-lg border transition ${
              activeLayer === 0
                ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-medium'
                : 'bg-slate-800/70 border-slate-700 text-slate-400'
            }`}
          >
            Repetitive Enactment Loop
          </button>
          <button
            onClick={() => setActiveLayer(1)}
            className={`px-3 py-1 rounded-lg border transition ${
              activeLayer === 1
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200 font-medium'
                : 'bg-slate-800/70 border-slate-700 text-slate-400'
            }`}
          >
            Mentalizing & Corrective Experience
          </button>
        </div>
      </div>

      <svg viewBox="0 0 680 250" className="w-full h-auto bg-slate-950/80 rounded-xl border border-slate-800">
        {/* Person A */}
        <g className="cursor-pointer" onClick={() => onSelectConcept('ccrt')}>
          <rect x="30" y="60" width="185" height="130" rx="14" fill="#064e3b" fillOpacity="0.4" stroke="#10b981" strokeWidth="2" />
          <text x="122" y="88" textAnchor="middle" fill="#ecfdf5" fontSize="12" fontWeight="bold">
            PERSON A (SELF)
          </text>
          <text x="122" y="110" textAnchor="middle" fill="#6ee7b7" fontSize="10.5">
            1. Core Wish (W)
          </text>
          <text x="122" y="130" textAnchor="middle" fill="#fda4af" fontSize="10">
            + Dreaded Expectation (RO)
          </text>
          <text x="122" y="152" textAnchor="middle" fill="#cbd5e1" fontSize="10">
            4. Self Response (RS)
          </text>
          <text x="122" y="176" textAnchor="middle" fill="#34d399" fontSize="9" fontFamily="monospace">
            [Click: CCRT Formula]
          </text>
        </g>

        {/* Person B */}
        <g className="cursor-pointer" onClick={() => onSelectConcept('mentalization')}>
          <rect x="465" y="60" width="185" height="130" rx="14" fill="#1e1b4b" fillOpacity="0.6" stroke="#818cf8" strokeWidth="2" />
          <text x="557" y="88" textAnchor="middle" fill="#e0e7ff" fontSize="12" fontWeight="bold">
            PERSON B (OTHER)
          </text>
          <text x="557" y="115" textAnchor="middle" fill="#a5b4fc" fontSize="10.5">
            {activeLayer === 0 ? '3. Pulled Into Enactment' : '3. Mentalizing Stance'}
          </text>
          <text x="557" y="136" textAnchor="middle" fill="#cbd5e1" fontSize="10">
            {activeLayer === 0 ? 'Confirms dreaded RO' : 'Disconfirms feared RO'}
          </text>
          <text x="557" y="176" textAnchor="middle" fill="#818cf8" fontSize="9" fontFamily="monospace">
            [Click: Mentalization]
          </text>
        </g>

        {/* Top Arrow: A -> B */}
        <path
          d="M 220 90 Q 340 35 460 90"
          fill="none"
          stroke="#fbbf24"
          strokeWidth="2.5"
          strokeDasharray="6 4"
          className="animate-dash-flow"
        />
        <rect x="240" y="34" width="200" height="28" rx="6" fill="#0f172a" stroke="#fbbf24" />
        <text x="340" y="52" textAnchor="middle" fill="#fde68a" fontSize="10">
          2. Defensive Signal / Transference Cue
        </text>

        {/* Bottom Arrow: B -> A */}
        <path
          d="M 460 160 Q 340 215 220 160"
          fill="none"
          stroke={activeLayer === 0 ? '#f43f5e' : '#10b981'}
          strokeWidth="2.5"
          strokeDasharray="6 4"
          className="animate-dash-flow"
        />
        <rect
          x="220"
          y="190"
          width="240"
          height="28"
          rx="6"
          fill="#0f172a"
          stroke={activeLayer === 0 ? '#f43f5e' : '#10b981'}
        />
        <text
          x="340"
          y="208"
          textAnchor="middle"
          fill={activeLayer === 0 ? '#fda4af' : '#6ee7b7'}
          fontSize="10"
        >
          {activeLayer === 0
            ? '3. Provoked Reaction ("See? I knew it!")'
            : '3. Corrective Emotional Experience'}
        </text>
      </svg>
      <div className="mt-2 flex items-center justify-between text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <Eye className="w-3.5 h-3.5 text-indigo-400" /> Click any node inside the diagram to open its Concept Anatomy card.
        </span>
      </div>
    </div>
  );
};
