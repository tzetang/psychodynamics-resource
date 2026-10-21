import type { Situation } from '../types';
import type { Beat, KnobSpec, ParticleSpec, SceneDef } from '../../stage/types';

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));

const anxiety: KnobSpec = {
  id: 'anxiety',
  label: 'How tense is it?',
  lowLabel: 'Calm',
  highLabel: 'High pressure',
  default: 0.5,
  apply: (beat, v) => ({
    ...beat,
    haze: clamp01(beat.haze * (0.4 + 1.2 * v)),
    forces: {
      ...beat.forces,
      ...(beat.forces.towardLeader !== undefined && { towardLeader: clamp01(beat.forces.towardLeader * (0.6 + 0.8 * v)) }),
    },
  }),
};

/** Feelings people hand up to the leader: held when containment is high, bounced back when it is low. */
const isHandedUp = (p: ParticleSpec) => p.to === 'you' && (p.family === 'anxiety' || p.family === 'longing');

const containment: KnobSpec = {
  id: 'containment',
  label: 'How steadily do you hold it?',
  lowLabel: 'Worry bounces around',
  highLabel: 'Worry is held and settled',
  default: 0.3,
  apply: (beat, v) => {
    const shift = v - 0.3;
    const particles: ParticleSpec[] = (beat.particles ?? []).map((p) =>
      isHandedUp(p) && v < 0.15 ? { ...p, resolve: 'bounce' } : p,
    );
    if (v >= 0.7) {
      for (const p of beat.particles ?? []) {
        if (isHandedUp(p)) {
          particles.push({ from: 'you', to: p.from, family: 'calm', resolve: 'settle', size: 0.7, delayMs: (p.delayMs ?? 0) + 1700 });
        }
      }
    }
    return {
      ...beat,
      haze: clamp01(beat.haze * (1 - 0.9 * shift)),
      forces: {
        ...beat.forces,
        ...(beat.forces.towardLeader !== undefined && { towardLeader: clamp01(beat.forces.towardLeader * (1 - 0.8 * shift)) }),
      },
      particles,
    };
  },
};

const base = {
  actors: [
    { id: 'you', role: 'leader' as const, label: 'You', home: [500, 300] as [number, number] },
    { id: 'a', role: 'person' as const, home: [150, 140] as [number, number] },
    { id: 'b', role: 'person' as const, home: [360, 85] as [number, number] },
    { id: 'c', role: 'person' as const, home: [660, 90] as [number, number] },
    { id: 'd', role: 'person' as const, home: [860, 170] as [number, number] },
    { id: 'e', role: 'person' as const, home: [190, 470] as [number, number] },
    { id: 'f', role: 'person' as const, home: [820, 470] as [number, number] },
  ],
  boundaries: [{ id: 'team', label: 'Your team', members: ['you', 'a', 'b', 'c', 'd', 'e', 'f'] }],
  knobs: [anxiety, containment],
};

const watchBeats: Beat[] = [
  {
    id: 'calm',
    caption: 'A normal week. Everyone is getting on with their own work.',
    forces: {},
    haze: 0.06,
  },
  {
    id: 'pressure',
    caption: 'A deadline lands and the pressure rises. A decision is needed.',
    forces: { cluster: 0.2 },
    haze: 0.5,
  },
  {
    id: 'checking-in',
    caption: 'People start checking with you before they act. Small questions turn into "what should I do?"',
    forces: { cluster: 0.1, towardLeader: 0.5 },
    haze: 0.5,
    particles: [
      { from: 'a', to: 'you', family: 'longing', resolve: 'absorb' },
      { from: 'd', to: 'you', family: 'longing', resolve: 'absorb', delayMs: 500 },
      { from: 'e', to: 'you', family: 'longing', resolve: 'absorb', delayMs: 1000 },
    ],
  },
  {
    id: 'everyone-waits',
    caption: 'Soon the whole group is waiting for you. Ideas and decisions travel to you and stall there.',
    forces: { towardLeader: 0.95 },
    haze: 0.4,
    highlight: ['you'],
    particles: [
      { from: 'b', to: 'you', family: 'anxiety', resolve: 'absorb' },
      { from: 'c', to: 'you', family: 'anxiety', resolve: 'absorb', delayMs: 500 },
      { from: 'f', to: 'you', family: 'anxiety', resolve: 'absorb', delayMs: 1000 },
    ],
  },
  {
    id: 'your-part',
    caption: 'Every time you answer, it helps right now. It also teaches the group that waiting for you works.',
    isYourPart: true,
    forces: { towardLeader: 0.95 },
    haze: 0.35,
    highlight: ['you'],
    particles: [
      { from: 'you', to: 'a', family: 'calm', resolve: 'settle' },
      { from: 'you', to: 'd', family: 'calm', resolve: 'settle', delayMs: 500 },
      { from: 'a', to: 'you', family: 'longing', resolve: 'absorb', delayMs: 2600 },
      { from: 'd', to: 'you', family: 'longing', resolve: 'absorb', delayMs: 3100 },
    ],
  },
];

const dependencyScene: SceneDef = {
  ...base,
  id: 'dependency',
  label: 'Animated scene: a team slowly gathers around its leader and waits for every decision.',
  beats: watchBeats,
};

/** Try stance: hand the decision back. Same cast and knobs, different beats. */
const handBackScene: SceneDef = {
  ...base,
  id: 'dependency:hand-back',
  label: 'Animated scene: the leader asks "what would you do?" and the team starts deciding among themselves.',
  beats: [
    {
      id: 'pressure',
      caption: 'Same week, same deadline. The pressure is real.',
      forces: { cluster: 0.2 },
      haze: 0.5,
    },
    {
      id: 'ask-back',
      caption: 'Someone brings you a question. You ask, "What would you do?" and wait.',
      isYourPart: true,
      forces: { towardLeader: 0.35, cluster: 0.1 },
      haze: 0.45,
      highlight: ['you', 'a'],
      particles: [{ from: 'a', to: 'you', family: 'longing', resolve: 'transform', transformTo: 'calm' }],
    },
    {
      id: 'peers',
      caption: 'They decide, and others notice. People start asking each other first.',
      forces: { towardLeader: 0.1, pair: { a: 'a', b: 'b', strength: 0.8 } },
      haze: 0.3,
      particles: [
        { from: 'a', to: 'b', family: 'calm', resolve: 'settle' },
        { from: 'c', to: 'd', family: 'calm', resolve: 'settle', delayMs: 600 },
      ],
    },
    {
      id: 'shared',
      caption: 'You stay available for the hard calls. The worry is now spread across the group, not carried only by you.',
      isYourPart: true,
      forces: {},
      haze: 0.12,
      highlight: ['you'],
      particles: [
        { from: 'a', to: 'b', family: 'calm', resolve: 'settle' },
        { from: 'c', to: 'd', family: 'calm', resolve: 'settle', delayMs: 500 },
        { from: 'e', to: 'f', family: 'calm', resolve: 'settle', delayMs: 1000 },
      ],
    },
  ],
};

const everyoneWaits: Situation = {
  id: 'everyone-waits',
  level: 'team',
  title: 'Everyone waits for me to decide',
  watch: dependencyScene,
  name: ['basic-assumption-dependency'],
  tries: [
    {
      id: 'hand-back',
      label: 'Hand the decision back',
      stance:
        'When someone brings you a question, you ask what they would do and wait, even when the silence is uncomfortable. You stay available for the calls that really are yours.',
      afterBeats: handBackScene.beats,
    },
  ],
  escalation:
    'If people seem afraid to act because of what happens when they get it wrong, bring in HR or a coach to look at how mistakes are treated. If someone seems unable to cope with ordinary pressure and is visibly struggling, encourage them to talk to a mental-health professional rather than carrying it yourself.',
};

export { dependencyScene };
export default everyoneWaits;
