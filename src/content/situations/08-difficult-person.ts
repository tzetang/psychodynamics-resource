import { anchor, hazeKnob, person, you } from '../helpers';
import type { Situation } from '../types';
import type { Beat, KnobSpec, SceneDef } from '../../stage/types';

const blame: KnobSpec = {
  id: 'blame',
  label: 'How much lands on one person?',
  lowLabel: 'Shared across the team',
  highLabel: 'All on one person',
  default: 0.6,
  apply: (beat, v) => {
    const k = (0.2 + 1.3 * v) / 0.98;
    return {
      ...beat,
      forces: {
        ...beat.forces,
        ...(beat.forces.awayFrom && { awayFrom: { ...beat.forces.awayFrom, strength: Math.min(1, beat.forces.awayFrom.strength * k) } }),
      },
      particles: beat.particles?.map((p) => (p.to === 'one' ? { ...p, size: (p.size ?? 1) * Math.min(1.5, 0.5 + v) } : p)),
    };
  },
};

const beats: Beat[] = [
  {
    id: 'tense',
    caption: 'The team is tense about a project that keeps slipping. Everyone carries some irritation and worry.',
    forces: {},
    haze: 0.35,
    particles: [
      { from: 'b', to: 'project', family: 'anxiety', resolve: 'absorb', size: 0.8 },
      { from: 'd', to: 'project', family: 'anxiety', resolve: 'absorb', size: 0.8, delayMs: 600 },
      { from: 'f', to: 'project', family: 'anger', resolve: 'absorb', size: 0.8, delayMs: 1200 },
    ],
  },
  {
    id: 'one-person',
    caption: 'Little by little, the group starts to place the tension on one person. Nobody says so. It shows in who gets interrupted and who gets blamed.',
    forces: { awayFrom: { target: 'one', strength: 0.25 } },
    haze: 0.35,
    highlight: ['one'],
    particles: [
      { from: 'b', to: 'one', family: 'anger', resolve: 'settle' },
      { from: 'd', to: 'one', family: 'anger', resolve: 'settle', delayMs: 500 },
      { from: 'f', to: 'one', family: 'anxiety', resolve: 'settle', delayMs: 1000 },
    ],
  },
  {
    id: 'ready',
    caption: 'Why this person? Some people are readier than others to carry what the group hands them: they react in a way that fits the part, or they have less power. That readiness is called valency.',
    forces: { awayFrom: { target: 'one', strength: 0.25 } },
    haze: 0.3,
    hazeScope: 'one',
    highlight: ['one'],
    particles: [
      { from: 'c', to: 'one', family: 'anger', resolve: 'settle' },
      { from: 'e', to: 'one', family: 'anxiety', resolve: 'settle', delayMs: 600 },
    ],
  },
  {
    id: 'relief',
    caption: 'The rest of the team feels better. The tension drops, and the project problem has not moved.',
    forces: { awayFrom: { target: 'one', strength: 0.25 } },
    haze: 0.15,
    particles: [
      { from: 'b', to: 'c', family: 'calm', resolve: 'settle' },
      { from: 'd', to: 'e', family: 'calm', resolve: 'settle', delayMs: 600 },
      { from: 'f', to: 'you', family: 'calm', resolve: 'settle', delayMs: 1200 },
    ],
  },
  {
    id: 'your-part',
    caption: 'It is easy to join in, or to treat that one person as the whole problem. Asking "What is the team avoiding?" brings the shared tension back where it belongs.',
    isYourPart: true,
    forces: { awayFrom: { target: 'one', strength: 0.12 } },
    haze: 0.2,
    highlight: ['you'],
    particles: [
      { from: 'one', to: 'project', family: 'anger', resolve: 'absorb' },
      { from: 'you', to: 'one', family: 'calm', resolve: 'settle', delayMs: 900 },
    ],
  },
];

const watch: SceneDef = {
  id: 'difficult-person',
  label: 'Animated scene: a team under pressure slowly places its tension on one person, and the group feels relief while the real problem stays put.',
  actors: [
    you(500, 300),
    person('b', 340, 140),
    person('c', 660, 140),
    person('d', 840, 250),
    person('e', 800, 450),
    person('f', 500, 490),
    person('one', 180, 330),
    anchor('project', 500, 190),
  ],
  boundaries: [{ id: 'team', label: 'The team', members: ['you', 'b', 'c', 'd', 'e', 'f', 'one'] }],
  beats,
  knobs: [hazeKnob({ id: 'pressure', label: 'How much pressure is the team under?', lowLabel: 'Not much', highLabel: 'A lot' }), blame],
};

const situation: Situation = {
  id: 'difficult-person',
  level: 'team',
  title: 'There\'s always one "difficult" person',
  watch,
  name: ['scapegoating', 'valency'],
  tries: [
    {
      id: 'return-the-problem',
      label: 'Return the problem to the team',
      stance: 'You notice when conversation keeps circling one person, and you steer it back to the work: what is the team actually stuck on? You keep that person in the group.',
      afterBeats: [
        beats[0],
        { ...beats[1], id: 'one-person' },
        {
          id: 'name-pattern',
          caption: 'You say, "We keep coming back to one person. What is the project problem we are not facing?"',
          isYourPart: true,
          forces: { awayFrom: { target: 'one', strength: 0.1 } },
          haze: 0.3,
          highlight: ['you'],
          particles: [{ from: 'you', to: 'project', family: 'calm', resolve: 'settle' }],
        },
        {
          id: 'work',
          caption: 'People begin to talk about the work itself. The one person is back in the group, and the real problem is on the table.',
          forces: {},
          haze: 0.2,
          particles: [
            { from: 'one', to: 'c', family: 'calm', resolve: 'settle' },
            { from: 'b', to: 'project', family: 'anxiety', resolve: 'absorb', size: 0.8, delayMs: 700 },
          ],
        },
      ],
    },
  ],
  escalation:
    'If someone is being excluded, mocked or targeted over time, or they say they feel unsafe, that is a matter for HR, and may be bullying. If their own behaviour is genuinely a problem, address it directly and fairly with them as an individual, separately from this pattern.',
};

export default situation;
