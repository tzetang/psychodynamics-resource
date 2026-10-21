import { hazeKnob, lerpPoint, outsider, person, you } from '../helpers';
import type { Situation } from '../types';
import type { Beat, KnobSpec, Point, SceneDef } from '../../stage/types';

const PAST_FAR: Point = [500, 90];

/** How much of the feeling belongs to someone from before: the ghost drifts closer to the colleague the more it does. */
const pastKnob: KnobSpec = {
  id: 'past',
  label: 'How much is about someone from before?',
  lowLabel: 'All about them',
  highLabel: 'Mostly about my past',
  default: 0.6,
  apply: (beat, v) => {
    const near = beat.forces.pinned?.past;
    if (!near) return beat;
    return { ...beat, forces: { ...beat.forces, pinned: { ...beat.forces.pinned, past: lerpPoint(PAST_FAR, near, Math.min(1, v / 0.6)) } } };
  },
};

const beats: Beat[] = [
  {
    id: 'meeting',
    caption: 'A colleague speaks up in the meeting. Nothing unusual is happening.',
    forces: {},
    hide: ['past'],
    haze: 0.04,
  },
  {
    id: 'jolt',
    caption: 'You feel a jolt of irritation, bigger than the moment deserves.',
    forces: {},
    haze: 0.4,
    hazeScope: 'you',
    hide: ['past'],
    particles: [{ from: 'them', to: 'you', family: 'anger', resolve: 'settle' }],
  },
  {
    id: 'before',
    caption: 'Some of that feeling is not about them. It belongs to someone from before: a critical boss, a sibling, a teacher.',
    forces: { pinned: { past: PAST_FAR } },
    haze: 0.35,
    hazeScope: 'you',
    highlight: ['past'],
    particles: [{ from: 'past', to: 'you', family: 'anger', resolve: 'settle' }],
  },
  {
    id: 'treated-as',
    caption: 'Without noticing, you start treating this colleague as that earlier person, and the old feeling gets sent their way.',
    forces: { pinned: { past: [745, 185] } },
    haze: 0.35,
    hazeScope: 'you',
    highlight: ['them', 'past'],
    particles: [
      { from: 'you', to: 'them', family: 'anger', resolve: 'settle' },
      { from: 'you', to: 'them', family: 'anger', resolve: 'settle', delayMs: 700, size: 0.8 },
    ],
  },
  {
    id: 'your-part',
    caption: 'Ask yourself, "Who does this remind me of?" The reaction tells you something about you as well as about them.',
    isYourPart: true,
    forces: { pinned: { past: PAST_FAR } },
    haze: 0.2,
    hazeScope: 'you',
    highlight: ['you'],
    particles: [{ from: 'you', to: 'past', family: 'anger', resolve: 'settle' }],
  },
];

const watch: SceneDef = {
  id: 'person-under-my-skin',
  label: 'Animated scene: an old feeling from someone in the past gets sent toward a colleague who only reminds you of them.',
  actors: [you(300, 300), person('them', 740, 350, 'Colleague'), outsider('past', 500, 90, 'Someone from before')],
  beats,
  knobs: [hazeKnob({ id: 'jolt', label: 'How big is the jolt?', lowLabel: 'A twinge', highLabel: 'Hard to ignore' }), pastKnob],
};

const situation: Situation = {
  id: 'person-under-my-skin',
  level: 'self',
  title: 'One person always gets under my skin',
  watch,
  name: ['transference', 'projection'],
  tries: [
    {
      id: 'who-reminds',
      label: 'Ask who it reminds you of',
      stance: 'When the irritation shows up, you get curious before you act: what about this feels familiar? You give the feeling back to where it started and respond to the person in front of you.',
      afterBeats: [
        beats[0],
        beats[1],
        { ...beats[2], id: 'curious', isYourPart: true, caption: 'You stop and ask, "Who does this remind me of?" The ghost of someone from before comes into view.' },
        {
          id: 'returned',
          caption: 'You hand the old feeling back to where it belongs. What is left is a plain disagreement you can talk about.',
          isYourPart: true,
          forces: { pinned: { past: PAST_FAR } },
          haze: 0.1,
          hazeScope: 'you',
          highlight: ['you', 'them'],
          particles: [
            { from: 'you', to: 'past', family: 'anger', resolve: 'settle' },
            { from: 'you', to: 'them', family: 'calm', resolve: 'settle', delayMs: 900, size: 0.7 },
          ],
        },
      ],
    },
  ],
  escalation:
    'If strong reactions to one person come with dread, sleeplessness or thoughts of leaving, a coach or mental-health professional is the right place to explore it. If the person is actually treating you badly, that is a matter for HR, not a pattern to reflect on alone.',
};

export default situation;
