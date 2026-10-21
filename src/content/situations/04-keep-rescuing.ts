import { hazeKnob, person, you } from '../helpers';
import type { Situation } from '../types';
import type { Beat, KnobSpec, SceneDef } from '../../stage/types';

const jumpIn: KnobSpec = {
  id: 'jump-in',
  label: 'How quickly do you step in?',
  lowLabel: 'You wait and ask first',
  highLabel: 'You jump straight in',
  default: 0.6,
  apply: (beat, v) => ({
    ...beat,
    forces: beat.forces.pair ? { ...beat.forces, pair: { ...beat.forces.pair, strength: Math.min(1, beat.forces.pair.strength * (0.3 + 1.2 * v) / 1.02) } } : beat.forces,
    particles: beat.particles?.map((p) => (p.family === 'calm' && p.from === 'you' ? { ...p, size: (p.size ?? 1) * (0.5 + v) } : p)),
  }),
};

const beats: Beat[] = [
  {
    id: 'overwhelmed',
    caption: 'A colleague mentions they are overwhelmed again.',
    forces: {},
    haze: 0.3,
    hazeScope: 'them',
    particles: [{ from: 'them', to: 'you', family: 'longing', resolve: 'settle' }],
  },
  {
    id: 'pull',
    caption: 'You feel a strong pull to step in and fix it. It feels like it is coming from you, and part of it was handed to you.',
    forces: { pair: { a: 'you', b: 'them', strength: 0.6 } },
    haze: 0.3,
    hazeScope: 'them',
    highlight: ['you'],
    particles: [{ from: 'them', to: 'you', family: 'longing', resolve: 'settle' }],
  },
  {
    id: 'rescue',
    caption: 'You take the task. Relief flows to both of you.',
    forces: { pair: { a: 'you', b: 'them', strength: 0.9 } },
    haze: 0.12,
    particles: [
      { from: 'you', to: 'them', family: 'calm', resolve: 'settle' },
      { from: 'them', to: 'you', family: 'calm', resolve: 'settle', delayMs: 600, size: 0.8 },
    ],
  },
  {
    id: 'again',
    caption: 'Next time the same helpless feeling shows up in them and the same urge shows up in you. The pattern repeats.',
    forces: { pair: { a: 'you', b: 'them', strength: 0.9 } },
    haze: 0.3,
    hazeScope: 'them',
    highlight: ['you', 'them'],
    particles: [
      { from: 'them', to: 'you', family: 'longing', resolve: 'settle' },
      { from: 'you', to: 'them', family: 'calm', resolve: 'settle', delayMs: 1600 },
      { from: 'them', to: 'you', family: 'longing', resolve: 'settle', delayMs: 2800, size: 0.8 },
    ],
  },
  {
    id: 'your-part',
    caption: 'The helpless feeling and the urge to rescue come as a pair. Stepping in less, and asking what they would try first, loosens it.',
    isYourPart: true,
    forces: { pair: { a: 'you', b: 'them', strength: 0.3 } },
    haze: 0.2,
    hazeScope: 'them',
    highlight: ['you'],
    particles: [{ from: 'you', to: 'them', family: 'longing', resolve: 'settle' }],
  },
];

const watch: SceneDef = {
  id: 'keep-rescuing',
  label: 'Animated scene: a colleague feels helpless, you feel a pull to rescue, and the pair of feelings repeats.',
  actors: [you(290, 300), person('them', 710, 300, 'Colleague')],
  beats,
  knobs: [
    hazeKnob({ id: 'overwhelm', label: 'How overwhelmed do they feel?', lowLabel: 'A bit stretched', highLabel: 'Swamped' }),
    jumpIn,
  ],
};

const situation: Situation = {
  id: 'keep-rescuing',
  level: 'pair',
  title: 'I keep rescuing the same person',
  watch,
  name: ['projective-identification', 'repeating-relationship-loop'],
  tries: [
    {
      id: 'ask-first',
      label: 'Ask what they would try first',
      stance: 'When you feel the pull to rescue, you notice it and pause. You ask, "What would you try first?" and let them take the first step before you offer anything.',
      afterBeats: [
        beats[0],
        { ...beats[1], isYourPart: true, caption: 'You notice the pull to step in. You treat it as information about the moment, not an instruction.' },
        {
          id: 'ask',
          caption: 'You ask, "What would you try first?" The helpless feeling goes back to them as a question they can answer.',
          isYourPart: true,
          forces: { pair: { a: 'you', b: 'them', strength: 0.2 } },
          haze: 0.2,
          hazeScope: 'them',
          highlight: ['you'],
          particles: [{ from: 'you', to: 'them', family: 'longing', resolve: 'transform', transformTo: 'calm' }],
        },
        {
          id: 'first-step',
          caption: 'They take a first step. The pull in you eases, and the loop has less to feed on.',
          forces: {},
          haze: 0.08,
          highlight: ['them'],
          particles: [{ from: 'them', to: 'you', family: 'calm', resolve: 'settle', size: 0.7 }],
        },
      ],
    },
  ],
  escalation:
    'If the person is repeatedly in crisis, seems unable to function without help, or you find yourself unable to stop rescuing, bring in HR or a coach, and encourage them to seek support outside work. If you are doing their job on top of yours, that is a workload problem to raise with your own manager.',
};

export default situation;
