import { hazeKnob, outsider, person, you } from '../helpers';
import type { Situation } from '../types';
import type { Beat, KnobSpec, SceneDef } from '../../stage/types';

const threat: KnobSpec = {
  id: 'threat',
  label: 'How threatening is the outside group?',
  lowLabel: 'A minor irritation',
  highLabel: 'A serious threat',
  default: 0.5,
  apply: (beat, v) => {
    const k = 0.3 + 1.4 * v;
    return {
      ...beat,
      forces: {
        ...beat.forces,
        ...(beat.forces.cluster !== undefined && { cluster: Math.min(1, (beat.forces.cluster * k)) }),
        ...(beat.forces.awayFrom && { awayFrom: { ...beat.forces.awayFrom, strength: Math.min(1, (beat.forces.awayFrom.strength * k)) } }),
      },
    };
  },
};

const beats: Beat[] = [
  {
    id: 'friction',
    caption: 'Inside the team there is ordinary friction: small disagreements and irritations that nobody has dealt with.',
    forces: {},
    haze: 0.25,
    particles: [
      { from: 'b', to: 'c', family: 'anger', resolve: 'bounce', size: 0.8 },
      { from: 'd', to: 'e', family: 'anger', resolve: 'bounce', size: 0.8, delayMs: 800 },
    ],
  },
  {
    id: 'decision',
    caption: 'Another team, a client or "management" makes a decision that affects everyone. It stings.',
    forces: {},
    haze: 0.4,
    highlight: ['rival'],
    particles: [
      { from: 'rival', to: 'a', family: 'anger', resolve: 'settle' },
      { from: 'rival', to: 'c', family: 'anger', resolve: 'settle', delayMs: 500 },
    ],
  },
  {
    id: 'huddle',
    caption: 'The team pulls together. The friction inside goes quiet.',
    forces: { cluster: 0.6, awayFrom: { target: 'rival', strength: 0.4 } },
    haze: 0.4,
    particles: [
      { from: 'a', to: 'rival', family: 'anger', resolve: 'settle' },
      { from: 'c', to: 'rival', family: 'anger', resolve: 'settle', delayMs: 500 },
      { from: 'e', to: 'rival', family: 'anger', resolve: 'settle', delayMs: 1000 },
    ],
  },
  {
    id: 'unity',
    caption: 'It feels like unity, and it is partly unity against someone. The outside group now carries all the blame, and the team\'s own tensions stay unspoken.',
    forces: { cluster: 0.6, awayFrom: { target: 'rival', strength: 0.4 } },
    haze: 0.35,
    highlight: ['rival'],
    particles: [
      { from: 'b', to: 'rival', family: 'anger', resolve: 'settle' },
      { from: 'd', to: 'rival', family: 'anger', resolve: 'settle', delayMs: 500 },
      { from: 'a', to: 'rival', family: 'anger', resolve: 'settle', delayMs: 1000 },
    ],
  },
  {
    id: 'your-part',
    caption: 'It is tempting to join, or stoke, the shared anger: it makes you popular and the team tight. You can name the real concern and what the team is not talking about.',
    isYourPart: true,
    forces: { cluster: 0.6, awayFrom: { target: 'rival', strength: 0.4 } },
    haze: 0.3,
    highlight: ['you'],
    particles: [{ from: 'you', to: 'rival', family: 'anger', resolve: 'settle' }],
  },
];

const watch: SceneDef = {
  id: 'outside-enemy',
  label: 'Animated scene: a team pulls together against an outside group, and its own tensions go quiet.',
  actors: [
    you(380, 300),
    person('a', 210, 150),
    person('b', 400, 85),
    person('c', 215, 440),
    person('d', 410, 510),
    person('e', 150, 300),
    outsider('rival', 870, 300, 'Other team'),
  ],
  boundaries: [{ id: 'team', label: 'Your team', members: ['you', 'a', 'b', 'c', 'd', 'e'] }],
  beats,
  knobs: [hazeKnob({ id: 'tension', label: 'How tense is the team already?', lowLabel: 'Relaxed', highLabel: 'On edge' }), threat],
};

const situation: Situation = {
  id: 'outside-enemy',
  level: 'team',
  title: 'The team turns on an outside enemy',
  watch,
  name: ['basic-assumption-fight-flight'],
  tries: [
    {
      id: 'name-the-worry',
      label: 'Name the real worry, then return to the task',
      stance: 'You take the concern behind the anger seriously and say what it is. Then you bring attention back to what the team can do, including the tensions inside it.',
      afterBeats: [
        beats[0],
        beats[1],
        {
          id: 'acknowledge',
          caption: 'You say, "That decision hurts, and here is what worries me about it." You join the concern without joining the attack.',
          isYourPart: true,
          forces: { cluster: 0.3, awayFrom: { target: 'rival', strength: 0.2 } },
          haze: 0.3,
          highlight: ['you'],
          particles: [{ from: 'you', to: 'a', family: 'calm', resolve: 'settle' }],
        },
        {
          id: 'task',
          caption: 'Attention goes back to your own work. The other team is a fact to deal with, not an enemy, and the friction inside can be discussed.',
          forces: {},
          haze: 0.15,
          particles: [{ from: 'b', to: 'c', family: 'calm', resolve: 'settle' }],
        },
      ],
    },
  ],
  escalation:
    'If the anger toward the outside group turns into harassment, threats or exclusion of individuals, take it to HR. If the team is stuck in a standing feud with another group, a facilitator or senior sponsor can work across the boundary in a way you cannot from inside.',
};

export default situation;
