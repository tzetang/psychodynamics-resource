import { anchor, hazeKnob, outsider, person, you } from '../helpers';
import type { Situation } from '../types';
import type { Beat, KnobSpec, SceneDef } from '../../stage/types';

const distance: KnobSpec = {
  id: 'distance',
  label: 'How far from the real work are people?',
  lowLabel: 'Close to it',
  highLabel: 'Far from it',
  default: 0.5,
  apply: (beat, v) => ({
    ...beat,
    forces: {
      ...beat.forces,
      ...(beat.forces.awayFrom && { awayFrom: { ...beat.forces.awayFrom, strength: Math.min(1, beat.forces.awayFrom.strength * (0.2 + 1.6 * v)) } }),
    },
  }),
};

const beats: Beat[] = [
  {
    id: 'real-work',
    caption: 'The organization exists to do real work. That work involves hard choices, risk and people\'s feelings.',
    forces: {},
    haze: 0.3,
    highlight: ['work'],
    particles: [
      { from: 'work', to: 'you', family: 'anxiety', resolve: 'settle' },
      { from: 'work', to: 'p3', family: 'anxiety', resolve: 'settle', delayMs: 600, size: 0.8 },
    ],
  },
  {
    id: 'process-grows',
    caption: 'Facing it directly stirs anxiety. So a process grows: another review, another sign-off, another form.',
    forces: {},
    haze: 0.3,
    show: ['gate'],
    particles: [
      { from: 'work', to: 'gate', family: 'anxiety', resolve: 'absorb' },
      { from: 'work', to: 'gate', family: 'anxiety', resolve: 'absorb', delayMs: 800, size: 0.8 },
    ],
  },
  {
    id: 'safer',
    caption: 'The process takes the anxiety. People feel safer, and fewer decisions belong to anyone in particular.',
    forces: { awayFrom: { target: 'work', strength: 0.35 } },
    haze: 0.15,
    show: ['gate'],
    particles: [
      { from: 'gate', to: 'p1', family: 'calm', resolve: 'settle' },
      { from: 'gate', to: 'p2', family: 'calm', resolve: 'settle', delayMs: 500 },
    ],
  },
  {
    id: 'becomes-the-work',
    caption: 'Over time the process becomes the work. Effort goes into protecting people from the feelings, not into the people the work is for.',
    forces: { awayFrom: { target: 'work', strength: 0.55 } },
    haze: 0.1,
    show: ['gate'],
    highlight: ['work'],
    particles: [{ from: 'work', to: 'gate', family: 'anxiety', resolve: 'absorb', size: 0.7 }],
  },
  {
    id: 'your-part',
    caption: 'You probably sign off and enforce the same process. Asking "What is this step protecting us from?" is a way in.',
    isYourPart: true,
    forces: { awayFrom: { target: 'work', strength: 0.55 } },
    haze: 0.1,
    show: ['gate'],
    highlight: ['you'],
    particles: [{ from: 'work', to: 'you', family: 'anxiety', resolve: 'settle', delayMs: 300 }],
  },
];

const watch: SceneDef = {
  id: 'process-protects-us',
  label: 'Animated scene: a process grows to absorb anxiety about the real work, and people drift away from the work it was meant to serve.',
  actors: [
    you(300, 300),
    person('p1', 270, 140),
    person('p2', 270, 460),
    person('p3', 450, 110),
    person('p4', 450, 490),
    outsider('work', 880, 300, 'The real work'),
    anchor('gate', 640, 300),
  ],
  boundaries: [{ id: 'org', label: 'The organization', members: ['you', 'p1', 'p2', 'p3', 'p4'] }],
  overlays: [
    { id: 'gate', kind: 'gate', at: [640, 300], label: 'Process', state: 'block' },
    { id: 'redesigned', kind: 'gate', at: [640, 300], label: 'Fewer steps', state: 'redirect' },
  ],
  beats,
  knobs: [hazeKnob({ id: 'anxiety', label: 'How anxious is the real work?', lowLabel: 'Routine', highLabel: 'High stakes' }), distance],
};

const situation: Situation = {
  id: 'process-protects-us',
  level: 'org',
  title: 'The process that protects us from the real work',
  watch,
  name: ['social-defenses-against-anxiety', 'role-and-boundary'],
  tries: [
    {
      id: 'ask-what-it-protects',
      label: 'Ask what each step protects us from',
      stance: 'You get curious about what a step is for, and you ask the people who run it. You keep the steps that protect people from real risk, and you let go of the ones that only protect them from discomfort.',
      afterBeats: [
        beats[1],
        {
          id: 'ask',
          caption: 'You ask, "What is this step protecting us from?" and you wait for an honest answer.',
          isYourPart: true,
          forces: { awayFrom: { target: 'work', strength: 0.35 } },
          haze: 0.2,
          show: ['gate'],
          highlight: ['you'],
          particles: [{ from: 'you', to: 'p1', family: 'calm', resolve: 'settle' }],
        },
        {
          id: 'fear',
          caption: 'People name the fear: getting it wrong in front of someone who matters. Once it is said aloud, it is easier to look at.',
          forces: { awayFrom: { target: 'work', strength: 0.35 } },
          haze: 0.25,
          show: ['gate'],
          particles: [
            { from: 'p1', to: 'you', family: 'anxiety', resolve: 'absorb' },
            { from: 'p2', to: 'you', family: 'anxiety', resolve: 'absorb', delayMs: 600 },
          ],
        },
        {
          id: 'redesign',
          caption: 'Some steps can go. The rest stay on purpose, not out of habit, and people are closer to the work again.',
          forces: { awayFrom: { target: 'work', strength: 0.15 } },
          haze: 0.2,
          show: ['redesigned'],
          highlight: ['work'],
          particles: [{ from: 'work', to: 'p3', family: 'calm', resolve: 'settle' }],
        },
      ],
    },
  ],
  escalation:
    'If the process is hiding a real safety, legal or ethical risk, escalate it through the proper channel instead of changing it yourself. If people fear punishment for speaking up about the work, that is a culture problem for senior leadership and HR.',
};

export default situation;
