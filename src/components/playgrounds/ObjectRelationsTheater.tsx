import React, { useState, useEffect } from 'react';
import { OBJECT_THEATER_TRIGGERS } from '../../data/playgrounds';
import {
  Sliders,
  Split,
  Merge,
  BookOpen,
  Sparkles,
  AlertTriangle,
  HeartHandshake,
} from 'lucide-react';

interface ObjectRelationsTheaterProps {
  initialPresetId?: string;
  onInspectConcept: (conceptId: string) => void;
}

export const ObjectRelationsTheater: React.FC<ObjectRelationsTheaterProps> = ({
  initialPresetId,
  onInspectConcept,
}) => {
  const [selectedTriggerId, setSelectedTriggerId] = useState<string>(
    initialPresetId && OBJECT_THEATER_TRIGGERS.some((t) => t.id === initialPresetId)
      ? initialPresetId
      : OBJECT_THEATER_TRIGGERS[0].id
  );
  // 0 = Pure Paranoid-Schizoid Splitting, 100 = Full Depressive Position Integration
  const [integrationLevel, setIntegrationLevel] = useState<number>(20);

  useEffect(() => {
    if (initialPresetId && OBJECT_THEATER_TRIGGERS.some((t) => t.id === initialPresetId)) {
      setSelectedTriggerId(initialPresetId);
    }
  }, [initialPresetId]);

  const activeTrigger =
    OBJECT_THEATER_TRIGGERS.find((t) => t.id === selectedTriggerId) || OBJECT_THEATER_TRIGGERS[0];

  const isIntegrated = integrationLevel >= 55;
  const barrierOpacity = Math.max(0, 1 - integrationLevel / 65);
  const verticalSpread = Math.round((1 - integrationLevel / 100) * 58);

  return (
    <div className="space-y-6">
      {/* Top Controls: Trigger Selector + Integration/Mentalization Slider */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Trigger Selector (6 cols) */}
        <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-5">
          <div className="text-xs font-mono uppercase tracking-wider text-violet-400 mb-2 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Step A: Select a Relational Trigger Event
          </div>
          <div className="grid grid-cols-1 gap-2 mb-3">
            {OBJECT_THEATER_TRIGGERS.map((trig) => (
              <button
                key={trig.id}
                onClick={() => setSelectedTriggerId(trig.id)}
                className={`text-left p-3 rounded-xl border text-xs transition flex items-center justify-between ${
                  trig.id === selectedTriggerId
                    ? 'bg-violet-600/25 border-violet-400 text-white font-semibold shadow'
                    : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span>{trig.title}</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-900 text-violet-300 border border-slate-700">
                  {trig.attachmentThreatType}
                </span>
              </button>
            ))}
          </div>
          <div className="text-xs text-slate-300 bg-slate-950/80 border border-slate-800 rounded-xl p-3">
            <strong className="text-white">External Event:</strong> {activeTrigger.eventDescription}
          </div>
        </div>

        {/* Integration / Mentalization Slider (6 cols) */}
        <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" /> Step B: Integration & Mentalization Dial
              </span>
              <span
                className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded border ${
                  isIntegrated
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                    : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                }`}
              >
                {isIntegrated
                  ? `Depressive Position (${integrationLevel}% Integrated)`
                  : `Paranoid-Schizoid (${100 - integrationLevel}% Split)`}
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-3">
              Drag the slider to dissolve the Kleinian/Kernbergian <strong>Splitting Barrier</strong> and bring All-Good and All-Bad part-objects together into whole-object ambivalence.
            </p>

            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={integrationLevel}
              onChange={(e) => setIntegrationLevel(Number(e.target.value))}
              className="w-full accent-violet-500 cursor-pointer"
            />

            <div className="flex justify-between gap-2 mt-3">
              <button
                onClick={() => setIntegrationLevel(10)}
                className={`flex-1 py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition ${
                  !isIntegrated
                    ? 'bg-rose-500/20 border-rose-400 text-rose-200'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Split className="w-3.5 h-3.5" /> Split Mode (Paranoid-Schizoid)
              </button>
              <button
                onClick={() => setIntegrationLevel(90)}
                className={`flex-1 py-2 px-3 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition ${
                  isIntegrated
                    ? 'bg-emerald-500/20 border-emerald-400 text-emerald-200'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                <Merge className="w-3.5 h-3.5" /> Integrated Mode (Depressive Position)
              </button>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => onInspectConcept('splitting')}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-700 text-violet-300 inline-flex items-center gap-1"
            >
              <BookOpen className="w-3 h-3" /> Splitting
            </button>
            <button
              onClick={() => onInspectConcept('paranoid-schizoid-position')}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-700 text-violet-300 inline-flex items-center gap-1"
            >
              <BookOpen className="w-3 h-3" /> Paranoid-Schizoid
            </button>
            <button
              onClick={() => onInspectConcept('depressive-position')}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-700 text-emerald-300 inline-flex items-center gap-1"
            >
              <BookOpen className="w-3 h-3" /> Depressive Position
            </button>
            <button
              onClick={() => onInspectConcept('object-constancy')}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-950 hover:bg-slate-800 border border-slate-700 text-emerald-300 inline-flex items-center gap-1"
            >
              <BookOpen className="w-3 h-3" /> Object Constancy
            </button>
          </div>
        </div>
      </div>

      {/* Main Internal Object Stage */}
      <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-violet-400">
              Internal Object Relations Theater • Kernberg Self–Object–Affect Dyads
            </span>
            <h3 className="text-xl font-bold text-white">
              {isIntegrated
                ? 'Whole-Object Integration: Love & Frustration Held Together'
                : 'Active Splitting Barrier: Black-and-White Part-Object Polarity'}
            </h3>
          </div>
          <div className="text-xs font-mono text-slate-400">
            Splitting Wall Opacity: {Math.round(barrierOpacity * 100)}%
          </div>
        </div>

        {/* Dynamic SVG Stage */}
        <svg viewBox="0 0 760 290" className="w-full h-auto bg-slate-950 rounded-2xl border border-slate-800">
          {/* Upper Dyad: Idealized / Good Memory */}
          <g
            transform={`translate(0, ${-verticalSpread})`}
            opacity={isIntegrated ? 1 : 0.3}
            className="transition-all duration-300"
          >
            <circle cx="170" cy="145" r="46" fill="#064e3b" stroke="#34d399" strokeWidth="2.5" />
            <text x="170" y="138" textAnchor="middle" fill="#ecfdf5" fontSize="11" fontWeight="bold">
              GOOD SELF
            </text>
            <text x="170" y="155" textAnchor="middle" fill="#6ee7b7" fontSize="9.5">
              Worthy & Loved
            </text>

            <line x1="216" y1="145" x2="544" y2="145" stroke="#34d399" strokeWidth="2.5" />

            <circle cx="590" cy="145" r="46" fill="#064e3b" stroke="#34d399" strokeWidth="2.5" />
            <text x="590" y="138" textAnchor="middle" fill="#ecfdf5" fontSize="11" fontWeight="bold">
              GOOD OBJECT
            </text>
            <text x="590" y="155" textAnchor="middle" fill="#6ee7b7" fontSize="9.5">
              Caring & Supportive
            </text>
          </g>

          {/* Lower Dyad: Persecutory / Frustrating */}
          <g
            transform={`translate(0, ${verticalSpread})`}
            opacity={isIntegrated ? 0.85 : 1}
            className="transition-all duration-300"
          >
            <circle
              cx="170"
              cy="145"
              r="46"
              fill={isIntegrated ? '#312e81' : '#881337'}
              stroke={isIntegrated ? '#a78bfa' : '#fb7185'}
              strokeWidth="2.5"
            />
            <text x="170" y="138" textAnchor="middle" fill="#fff1f2" fontSize="11" fontWeight="bold">
              {isIntegrated ? 'WHOLE SELF' : 'BAD / HURT SELF'}
            </text>
            <text x="170" y="155" textAnchor="middle" fill="#fda4af" fontSize="9.5">
              {isIntegrated ? 'Stung + Capable' : 'Defective / Castoff'}
            </text>

            <line
              x1="216"
              y1="145"
              x2="544"
              y2="145"
              stroke={isIntegrated ? '#a78bfa' : '#fb7185'}
              strokeWidth="3"
              strokeDasharray={isIntegrated ? 'none' : '6 4'}
              className={isIntegrated ? '' : 'animate-dash-flow'}
            />

            <circle
              cx="590"
              cy="145"
              r="46"
              fill={isIntegrated ? '#312e81' : '#881337'}
              stroke={isIntegrated ? '#a78bfa' : '#fb7185'}
              strokeWidth="2.5"
            />
            <text x="590" y="138" textAnchor="middle" fill="#fff1f2" fontSize="11" fontWeight="bold">
              {isIntegrated ? 'WHOLE OTHER' : 'BAD OBJECT'}
            </text>
            <text x="590" y="155" textAnchor="middle" fill="#fda4af" fontSize="9.5">
              {isIntegrated ? 'Loving + Imperfect' : 'Sadistic / Rejecting'}
            </text>
          </g>

          {/* Center Affect Bridge Box */}
          <g>
            <rect
              x="260"
              y="113"
              width="240"
              height="64"
              rx="14"
              fill={isIntegrated ? '#1e1b4b' : '#4c0519'}
              stroke={isIntegrated ? '#34d399' : '#fb7185'}
              strokeWidth="2"
            />
            <text x="380" y="136" textAnchor="middle" fill="#f8fafc" fontSize="11" fontWeight="bold">
              {isIntegrated ? 'INTEGRATED AFFECTIVE BRIDGE' : 'UNMODULATED SPLIT AFFECT'}
            </text>
            <text
              x="380"
              y="156"
              textAnchor="middle"
              fill={isIntegrated ? '#6ee7b7' : '#fda4af'}
              fontSize="10"
            >
              {isIntegrated
                ? activeTrigger.integratedState.connectingAffect
                : activeTrigger.splitState.connectingAffect}
            </text>
          </g>

          {/* Splitting Barrier Line */}
          {barrierOpacity > 0.05 && (
            <g opacity={barrierOpacity}>
              <line x1="30" y1="145" x2="730" y2="145" stroke="#f43f5e" strokeWidth="4" strokeDasharray="10 5" />
              <rect x="255" y="18" width="250" height="26" rx="6" fill="#881337" stroke="#fb7185" />
              <text x="380" y="35" textAnchor="middle" fill="#ffe4e6" fontSize="10" fontFamily="monospace" fontWeight="bold">
                ⚡ ACTIVE SPLITTING BARRIER (MEMORY WALLED OFF)
              </text>
            </g>
          )}
        </svg>

        {/* Detailed Comparison of Split vs. Integrated Experience */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            className={`rounded-2xl border p-4 ${
              isIntegrated
                ? 'bg-indigo-950/30 border-indigo-500/30'
                : 'bg-rose-950/30 border-rose-500/30'
            }`}
          >
            <div className="text-xs font-mono uppercase text-slate-400 mb-1">
              1. Active Self-Representation
            </div>
            <div className="text-sm font-bold text-white mb-2">
              {isIntegrated
                ? activeTrigger.integratedState.selfRepresentation
                : activeTrigger.splitState.selfRepresentation}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isIntegrated
                ? 'Self-esteem stays intact despite frustration; flaws do not equal total worthlessness.'
                : 'Without integration, any flaw or rejection threatens total collapse into feeling defective.'}
            </p>
          </div>

          <div
            className={`rounded-2xl border p-4 ${
              isIntegrated
                ? 'bg-indigo-950/30 border-indigo-500/30'
                : 'bg-rose-950/30 border-rose-500/30'
            }`}
          >
            <div className="text-xs font-mono uppercase text-slate-400 mb-1">
              2. Active Object-Representation
            </div>
            <div className="text-sm font-bold text-white mb-2">
              {isIntegrated
                ? activeTrigger.integratedState.objectRepresentation
                : activeTrigger.splitState.objectRepresentation}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isIntegrated
                ? 'Object Constancy holds: you remember their past warmth even while annoyed with them today.'
                : activeTrigger.splitState.unsplitShadowNote}
            </p>
          </div>

          <div
            className={`rounded-2xl border p-4 ${
              isIntegrated
                ? 'bg-emerald-950/30 border-emerald-500/30'
                : 'bg-amber-950/30 border-amber-500/30'
            }`}
          >
            <div className="text-xs font-mono uppercase text-slate-400 mb-1 flex items-center gap-1.5">
              {isIntegrated ? (
                <>
                  <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" /> 3. Mentalizing & Action
                </>
              ) : (
                <>
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" /> 3. Psychic Equivalence & Action
                </>
              )}
            </div>
            <p className="text-xs italic text-slate-200 mb-2">
              {isIntegrated
                ? activeTrigger.integratedState.mentalizingReflection
                : '"Because I feel hurt right now, it is an objective fact that they have bad intentions."'}
            </p>
            <div className="text-xs text-slate-300 pt-2 border-t border-slate-800">
              <strong className="text-white">Resulting Behavior:</strong>{' '}
              {isIntegrated
                ? activeTrigger.integratedState.behavioralResponse
                : activeTrigger.splitState.behavioralEnactment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
