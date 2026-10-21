import React from 'react';
import { PlaygroundId } from '../types/psychodynamics';
import { DefenseSwitchboard } from './playgrounds/DefenseSwitchboard';
import { ObjectRelationsTheater } from './playgrounds/ObjectRelationsTheater';
import { InterpersonalLoopSimulator } from './playgrounds/InterpersonalLoopSimulator';
import { Sliders, Theater, RefreshCw, Sparkles } from 'lucide-react';

interface PlaygroundsViewProps {
  activePlaygroundId: PlaygroundId;
  activePresetId?: string;
  onSelectPlayground: (playgroundId: PlaygroundId, presetId?: string) => void;
  onInspectConcept: (conceptId: string) => void;
}

const PLAYGROUND_TABS: {
  id: PlaygroundId;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
}[] = [
  {
    id: 'defense-switchboard',
    title: '1. Defense Switchboard & Triangle of Conflict',
    subtitle: 'Malan’s Triangle + Anna Freud Idea-vs-Affect Routing + Vaillant/Perry DMRS Hierarchy',
    badge: 'Lenses 1 & 2 • Intrapsychic & Ego',
    icon: <Sliders className="w-4 h-4 text-amber-400" />,
  },
  {
    id: 'object-theater',
    title: '2. Internal Object Theater (Splitting vs. Integration)',
    subtitle: 'Klein’s Paranoid-Schizoid vs. Depressive Positions + Kernberg Dyads + Fonagy Mentalization',
    badge: 'Lenses 3 & 4 • Object Relations & Self',
    icon: <Theater className="w-4 h-4 text-violet-400" />,
  },
  {
    id: 'interpersonal-ccrt',
    title: '3. Interpersonal Loop & CCRT Simulator',
    subtitle: 'Luborsky’s CCRT (Wish → RO → RS) + Projective Identification + Corrective Interruption',
    badge: 'Lens 5 • Two-Person Relational & Empirical',
    icon: <RefreshCw className="w-4 h-4 text-emerald-400" />,
  },
];

export const PlaygroundsView: React.FC<PlaygroundsViewProps> = ({
  activePlaygroundId,
  activePresetId,
  onSelectPlayground,
  onInspectConcept,
}) => {
  return (
    <div className="space-y-6 pb-12">
      {/* Playground Switcher Header */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
        <div className="max-w-3xl mb-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Dynamic Sandboxes
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Psychodynamic Playgrounds: Put the Mind in Motion
          </h1>
          <p className="text-xs md:text-sm text-slate-400 mt-1">
            Psychodynamics describes psychological forces interacting dynamically over time. Choose one of the three interactive simulators below to step through animations, swap triggers, and adjust ego or mentalization dials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PLAYGROUND_TABS.map((tab) => {
            const isActive = tab.id === activePlaygroundId;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectPlayground(tab.id)}
                className={`text-left p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-indigo-950/60 border-indigo-400 ring-2 ring-indigo-400/30 shadow-lg'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-700">
                      {tab.badge}
                    </span>
                    {tab.icon}
                  </div>
                  <div className="font-bold text-sm text-white mt-1">{tab.title}</div>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{tab.subtitle}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Selected Playground */}
      {activePlaygroundId === 'defense-switchboard' && (
        <DefenseSwitchboard
          initialPresetId={activePresetId}
          onInspectConcept={onInspectConcept}
        />
      )}
      {activePlaygroundId === 'object-theater' && (
        <ObjectRelationsTheater
          initialPresetId={activePresetId}
          onInspectConcept={onInspectConcept}
        />
      )}
      {activePlaygroundId === 'interpersonal-ccrt' && (
        <InterpersonalLoopSimulator
          initialPresetId={activePresetId}
          onInspectConcept={onInspectConcept}
        />
      )}
    </div>
  );
};
