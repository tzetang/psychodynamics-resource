import React, { useState, useMemo } from 'react';
import { LensId, PsychodynamicConcept } from '../types/psychodynamics';
import { FIVE_LENSES } from '../data/lenses';
import { Network, Sparkles } from 'lucide-react';

interface ConceptGraphProps {
  concepts: PsychodynamicConcept[];
  selectedConceptId: string;
  onSelectConcept: (conceptId: string) => void;
}

const LENS_COLUMN_X: Record<LensId, number> = {
  'drive-conflict': 105,
  'ego-psychology': 275,
  'object-relations': 445,
  'self-psychology': 615,
  'relational-empirical': 785,
};

const LENS_STROKE: Record<LensId, string> = {
  'drive-conflict': '#fb7185',
  'ego-psychology': '#fbbf24',
  'object-relations': '#a78bfa',
  'self-psychology': '#22d3ee',
  'relational-empirical': '#34d399',
};

const LENS_FILL: Record<LensId, string> = {
  'drive-conflict': '#4c0519',
  'ego-psychology': '#451a03',
  'object-relations': '#2e1065',
  'self-psychology': '#083344',
  'relational-empirical': '#064e3b',
};

export const ConceptGraph: React.FC<ConceptGraphProps> = ({
  concepts,
  selectedConceptId,
  onSelectConcept,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeFocusId = hoveredId || selectedConceptId;

  const { nodes, edges } = useMemo(() => {
    const grouped: Record<LensId, PsychodynamicConcept[]> = {
      'drive-conflict': [],
      'ego-psychology': [],
      'object-relations': [],
      'self-psychology': [],
      'relational-empirical': [],
    };

    concepts.forEach((c) => {
      grouped[c.lens].push(c);
    });

    const nodePositions: Record<
      string,
      { x: number; y: number; concept: PsychodynamicConcept }
    > = {};

    (Object.keys(grouped) as LensId[]).forEach((lensId) => {
      const list = grouped[lensId];
      const colX = LENS_COLUMN_X[lensId];
      const count = list.length;
      const topPadding = 68;
      const availableHeight = 365;
      const stepY = count > 1 ? availableHeight / (count - 1) : 0;

      list.forEach((concept, idx) => {
        const y = count === 1 ? topPadding + availableHeight / 2 : topPadding + idx * stepY;
        nodePositions[concept.id] = { x: colX, y, concept };
      });
    });

    const edgeList: {
      key: string;
      fromId: string;
      toId: string;
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      kind: 'related' | 'confused';
    }[] = [];

    const seen = new Set<string>();

    concepts.forEach((c) => {
      const fromPos = nodePositions[c.id];
      if (!fromPos) return;

      c.relatedConceptIds.forEach((targetId) => {
        const toPos = nodePositions[targetId];
        if (!toPos) return;
        const pairKey = [c.id, targetId].sort().join('--');
        if (seen.has(pairKey)) return;
        seen.add(pairKey);
        edgeList.push({
          key: pairKey,
          fromId: c.id,
          toId: targetId,
          x1: fromPos.x,
          y1: fromPos.y,
          x2: toPos.x,
          y2: toPos.y,
          kind: 'related',
        });
      });

      c.confusedWith.forEach((conf) => {
        const toPos = nodePositions[conf.targetConceptId];
        if (!toPos) return;
        const pairKey = `conf--${[c.id, conf.targetConceptId].sort().join('--')}`;
        if (seen.has(pairKey)) return;
        seen.add(pairKey);
        edgeList.push({
          key: pairKey,
          fromId: c.id,
          toId: conf.targetConceptId,
          x1: fromPos.x,
          y1: fromPos.y,
          x2: toPos.x,
          y2: toPos.y,
          kind: 'confused',
        });
      });
    });

    return {
      nodes: Object.values(nodePositions),
      edges: edgeList,
    };
  }, [concepts]);

  const connectedSet = useMemo(() => {
    const set = new Set<string>();
    if (!activeFocusId) return set;
    set.add(activeFocusId);
    edges.forEach((e) => {
      if (e.fromId === activeFocusId) set.add(e.toId);
      if (e.toId === activeFocusId) set.add(e.fromId);
    });
    return set;
  }, [activeFocusId, edges]);

  return (
    <div className="bg-slate-900/95 border border-slate-800 rounded-3xl p-5 shadow-xl space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
            <Network className="w-3.5 h-3.5" /> Interactive Concept Constellation Across the 5 Lenses
          </span>
          <h3 className="text-base font-bold text-white">
            Click or hover any node to illuminate its cross-school mechanisms & "Often Confused With" links
          </h3>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-slate-300">
            <span className="w-5 h-0.5 bg-indigo-400 inline-block" /> Theoretical Connection
          </span>
          <span className="flex items-center gap-1.5 text-amber-300">
            <span className="w-5 h-0.5 border-b-2 border-dashed border-amber-400 inline-block" /> "Often Confused With" Contrast
          </span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 890 475"
          className="w-full min-w-[720px] h-auto bg-slate-950 rounded-2xl border border-slate-800"
        >
          {/* Column Headers for the 5 Lenses */}
          {FIVE_LENSES.map((lens) => {
            const cx = LENS_COLUMN_X[lens.id];
            return (
              <g key={lens.id}>
                <line
                  x1={cx}
                  y1={42}
                  x2={cx}
                  y2={450}
                  stroke="#1e293b"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <rect
                  x={cx - 76}
                  y={10}
                  width={152}
                  height={26}
                  rx={6}
                  fill="#0f172a"
                  stroke={LENS_STROKE[lens.id]}
                  strokeOpacity="0.5"
                />
                <text
                  x={cx}
                  y={27}
                  textAnchor="middle"
                  fill={LENS_STROKE[lens.id]}
                  fontSize="10"
                  fontFamily="monospace"
                  fontWeight="bold"
                >
                  {lens.shortName}
                </text>
              </g>
            );
          })}

          {/* Edges */}
          {edges.map((edge) => {
            const isHighlighted =
              edge.fromId === activeFocusId || edge.toId === activeFocusId;
            const midX = (edge.x1 + edge.x2) / 2;
            const curveOffset = edge.x1 === edge.x2 ? 32 : 0;

            return (
              <path
                key={edge.key}
                d={`M ${edge.x1} ${edge.y1} Q ${midX + curveOffset} ${(edge.y1 + edge.y2) / 2} ${edge.x2} ${edge.y2}`}
                fill="none"
                stroke={
                  isHighlighted
                    ? edge.kind === 'confused'
                      ? '#fbbf24'
                      : '#818cf8'
                    : '#334155'
                }
                strokeWidth={isHighlighted ? 2.4 : 1}
                strokeOpacity={isHighlighted ? 0.95 : 0.22}
                strokeDasharray={edge.kind === 'confused' ? '5 4' : 'none'}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map(({ x, y, concept }) => {
            const isSelected = concept.id === selectedConceptId;
            const isConnected = connectedSet.has(concept.id);
            const dimNode = activeFocusId && !isConnected;
            const label =
              concept.name.length > 22
                ? concept.name.slice(0, 20) + '…'
                : concept.name;

            return (
              <g
                key={concept.id}
                transform={`translate(${x}, ${y})`}
                onClick={() => onSelectConcept(concept.id)}
                onMouseEnter={() => setHoveredId(concept.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="cursor-pointer transition-opacity duration-200"
                opacity={dimNode ? 0.28 : 1}
              >
                <rect
                  x={-74}
                  y={-15}
                  width={148}
                  height={30}
                  rx={8}
                  fill={isSelected ? '#312e81' : LENS_FILL[concept.lens]}
                  stroke={isSelected ? '#ffffff' : LENS_STROKE[concept.lens]}
                  strokeWidth={isSelected ? 2.5 : isConnected ? 1.8 : 1}
                />
                <text
                  x={0}
                  y={4}
                  textAnchor="middle"
                  fill="#f8fafc"
                  fontSize="9.5"
                  fontWeight={isSelected ? 'bold' : 'normal'}
                >
                  {label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};
