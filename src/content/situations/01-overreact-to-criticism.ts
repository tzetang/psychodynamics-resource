import { anchor, hazeKnob, outsider, you } from '../helpers';
import type { Situation } from '../types';
import type { Beat, KnobSpec, SceneDef } from '../../stage/types';

/** How fast the defense steps in: low means the anxiety is simply felt, high means it is flipped into a sharp reply. */
const defense: KnobSpec = {
  id: 'defense',
  label: 'How fast does your defense step in?',
  lowLabel: 'You feel the sting',
  highLabel: 'It comes out as a sharp reply',
  default: 0.6,
  apply: (beat, v) => ({
    ...beat,
    show: v < 0.25 ? beat.show?.filter((id) => id !== 'gate') : beat.show,
    particles: beat.particles?.map((p) => {
      if (p.resolve === 'transform' && p.family === 'anxiety') return v < 0.25 ? { ...p, resolve: 'settle', transformTo: undefined } : p;
      if (p.family === 'anger') return { ...p, size: (p.size ?? 1) * (0.6 + 0.67 * v) };
      return p;
    }),
  }),
};

const beats: Beat[] = [
  {
    id: 'comment',
    caption: 'A colleague says, "This draft needs more work." It is an ordinary comment.',
    forces: {},
    haze: 0.04,
    highlight: ['critic'],
  },
  {
    id: 'flicker',
    caption: 'A flicker of anxiety lands in you. It is small and it happens fast.',
    forces: {},
    haze: 0.35,
    hazeScope: 'you',
    particles: [{ from: 'critic', to: 'you', family: 'anxiety', resolve: 'settle' }],
  },
  {
    id: 'flip',
    caption: 'A defense steps in before you notice. The anxiety reaches a gate and is turned into something else.',
    forces: {},
    haze: 0.35,
    hazeScope: 'you',
    show: ['gate'],
    highlight: ['you'],
    particles: [{ from: 'critic', to: 'you', family: 'anxiety', resolve: 'transform', transformTo: 'anger' }],
  },
  {
    id: 'surface',
    caption: 'What your colleague sees is the sharp reply. The anxiety underneath stays below the waterline, unnoticed.',
    forces: {},
    haze: 0.3,
    hazeScope: 'you',
    show: ['gate', 'waterline'],
    particles: [
      { from: 'you', to: 'critic', family: 'anger', resolve: 'settle' },
      { from: 'you', to: 'beneath', family: 'anxiety', resolve: 'settle', delayMs: 400 },
    ],
  },
  {
    id: 'your-part',
    caption: 'Noticing the flicker before the reply is the one place you can change what happens next. Ask yourself, "What did I just feel?"',
    isYourPart: true,
    forces: {},
    haze: 0.2,
    hazeScope: 'you',
    show: ['waterline'],
    highlight: ['you'],
    particles: [{ from: 'beneath', to: 'you', family: 'anxiety', resolve: 'transform', transformTo: 'calm' }],
  },
];

const watch: SceneDef = {
  id: 'overreact-to-criticism',
  label: 'Animated scene: a small criticism arrives, a defense turns the anxiety into a sharp reply, and the real feeling stays below the waterline.',
  actors: [you(300, 230), outsider('critic', 760, 230, 'Colleague'), anchor('beneath', 300, 470)],
  overlays: [
    { id: 'gate', kind: 'gate', at: [470, 230], label: 'Defense', state: 'flip' },
    { id: 'waterline', kind: 'waterline', y: 350, above: 'What you notice', below: 'What you do not' },
  ],
  beats,
  knobs: [hazeKnob({ id: 'sting', label: 'How much does it sting?', lowLabel: 'Barely registers', highLabel: 'Really stings' }), defense],
};

const situation: Situation = {
  id: 'overreact-to-criticism',
  level: 'self',
  title: 'I overreact to criticism',
  watch,
  name: ['anxiety', 'defenses', 'unconscious-at-work'],
  tries: [
    {
      id: 'pause',
      label: 'Pause and name the feeling',
      stance: 'When a comment stings, you stop for a breath and say to yourself what you feel before you answer. You reply to what was said, not to the sting.',
      afterBeats: [
        { ...beats[0] },
        { ...beats[1] },
        {
          id: 'pause',
          caption: 'You stop for a breath. The feeling is still there, and now you can see it.',
          isYourPart: true,
          forces: {},
          haze: 0.3,
          hazeScope: 'you',
          show: ['waterline'],
          highlight: ['you'],
          particles: [{ from: 'beneath', to: 'you', family: 'anxiety', resolve: 'transform', transformTo: 'calm' }],
        },
        {
          id: 'reply',
          caption: 'You answer the comment itself: "Good point. Which part?" Your colleague gets a conversation, not a fight.',
          isYourPart: true,
          forces: {},
          haze: 0.1,
          hazeScope: 'you',
          highlight: ['you', 'critic'],
          particles: [{ from: 'you', to: 'critic', family: 'calm', resolve: 'settle' }],
        },
      ],
    },
  ],
  escalation:
    'If a reaction like this is frequent, out of proportion at work and elsewhere, or leaves you shaken for days, talk to a coach or a mental-health professional. If the criticism itself is hostile, humiliating or repeated, that is a matter for HR.',
};

export default situation;
