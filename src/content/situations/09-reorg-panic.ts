import { containmentKnob, hazeKnob, outsider, person, you } from '../helpers';
import type { Situation } from '../types';
import type { Beat, SceneDef } from '../../stage/types';

const beats: Beat[] = [
  {
    id: 'announce',
    caption: 'Leadership announces a restructuring. Nothing else is known yet.',
    forces: {},
    haze: 0.15,
    highlight: ['lead'],
    particles: [
      { from: 'lead', to: 'you', family: 'anxiety', resolve: 'settle' },
      { from: 'lead', to: 'c', family: 'anxiety', resolve: 'settle', delayMs: 400 },
      { from: 'lead', to: 'f', family: 'anxiety', resolve: 'settle', delayMs: 800 },
    ],
  },
  {
    id: 'spreads',
    caption: 'Anxiety starts where the news lands and travels along the lines people talk across, inside teams and between them.',
    forces: {},
    haze: 0.35,
    hazeScope: 't1',
    particles: [
      { from: 'you', to: 'a', family: 'anxiety', resolve: 'settle' },
      { from: 'b', to: 'c', family: 'anxiety', resolve: 'settle', delayMs: 500 },
      { from: 'e', to: 'f', family: 'anxiety', resolve: 'settle', delayMs: 1000 },
    ],
  },
  {
    id: 'rumours',
    caption: 'Soon every team is on edge. Rumours fill the gaps, and each team huddles inward, looking for who will be safe.',
    forces: { boundaryPull: 0.12 },
    haze: 0.55,
    particles: [
      { from: 'a', to: 'b', family: 'anxiety', resolve: 'settle', size: 0.9 },
      { from: 'c', to: 'd', family: 'anxiety', resolve: 'settle', size: 0.9, delayMs: 400 },
      { from: 'g', to: 'f', family: 'anxiety', resolve: 'settle', size: 0.9, delayMs: 800 },
      { from: 'd', to: 'e', family: 'anxiety', resolve: 'settle', size: 0.9, delayMs: 1200 },
    ],
  },
  {
    id: 'multiplies',
    caption: 'With nothing to hold it, the anxiety multiplies. Each leader can pass it on, or take it in and pass it up.',
    forces: { boundaryPull: 0.12 },
    haze: 0.6,
    highlight: ['you'],
    particles: [
      { from: 'a', to: 'you', family: 'anxiety', resolve: 'absorb' },
      { from: 'b', to: 'you', family: 'anxiety', resolve: 'absorb', delayMs: 600 },
    ],
  },
  {
    id: 'your-part',
    caption: 'You are carrying your own worry about the reorg. You can only steady others if you have somewhere to put yours: a peer, a coach, a clear question for leadership.',
    isYourPart: true,
    forces: { boundaryPull: 0.12 },
    haze: 0.4,
    hazeScope: 't1',
    highlight: ['you'],
    particles: [
      { from: 'you', to: 'lead', family: 'longing', resolve: 'absorb' },
      { from: 'lead', to: 'you', family: 'calm', resolve: 'settle', size: 0.7, delayMs: 1700 },
      { from: 'you', to: 'a', family: 'calm', resolve: 'settle', size: 0.7, delayMs: 2800 },
    ],
  },
];

const watch: SceneDef = {
  id: 'reorg-panic',
  label: 'Animated scene: news of a reorganization spreads anxiety across teams, and each team huddles inward.',
  actors: [
    outsider('lead', 500, 70, 'Leadership'),
    you(180, 300),
    person('a', 100, 470),
    person('b', 290, 440),
    person('c', 430, 300),
    person('d', 500, 430),
    person('e', 610, 330),
    person('f', 770, 300),
    person('g', 850, 440),
  ],
  boundaries: [
    { id: 't1', label: 'Your team', members: ['you', 'a', 'b'] },
    { id: 't2', label: 'Team 2', members: ['c', 'd', 'e'] },
    { id: 't3', label: 'Team 3', members: ['f', 'g'] },
  ],
  beats,
  knobs: [
    hazeKnob({ id: 'clarity', label: 'How much do people know?', lowLabel: 'Nothing yet', highLabel: 'A clear plan', default: 0.2, invert: true }),
    containmentKnob('you', { label: 'How steadily do you hold your team\'s worry?' }),
  ],
};

const situation: Situation = {
  id: 'reorg-panic',
  level: 'org',
  title: 'Reorg panic',
  watch,
  name: ['anxiety', 'containment', 'role-and-boundary'],
  tries: [
    {
      id: 'share-what-you-know',
      label: 'Share what you know, what you don\'t, and when you\'ll know more',
      stance: 'You tell your team honestly what is known and not known, and you give them a regular, short update even when it is "no news". You find your own place to put your worry.',
      afterBeats: [
        beats[0],
        {
          id: 'tell',
          caption: 'You tell your team what you know, what you do not, and when you will next update them.',
          isYourPart: true,
          forces: {},
          haze: 0.3,
          hazeScope: 't1',
          highlight: ['you'],
          particles: [
            { from: 'you', to: 'a', family: 'calm', resolve: 'settle' },
            { from: 'you', to: 'b', family: 'calm', resolve: 'settle', delayMs: 500 },
          ],
        },
        {
          id: 'rhythm',
          caption: 'A steady rhythm of updates, even a short "no news yet", gives rumours less to feed on. You also take your own worry to a peer.',
          isYourPart: true,
          forces: { boundaryPull: 0.08 },
          haze: 0.25,
          particles: [
            { from: 'you', to: 'lead', family: 'longing', resolve: 'absorb' },
            { from: 'lead', to: 'you', family: 'calm', resolve: 'settle', size: 0.7, delayMs: 1500 },
            { from: 'c', to: 'd', family: 'calm', resolve: 'settle', delayMs: 800 },
          ],
        },
        {
          id: 'held',
          caption: 'The anxiety is still there. It has somewhere to go, and rumours lose their energy.',
          forces: {},
          haze: 0.15,
          particles: [{ from: 'e', to: 'f', family: 'calm', resolve: 'settle' }],
        },
      ],
    },
  ],
  escalation:
    'If people are losing sleep, or someone in your team is showing signs of acute distress, point them to the employee-assistance service or a mental-health professional. Questions about redundancy, rights or fairness belong with HR, not with you improvising an answer.',
};

export default situation;
