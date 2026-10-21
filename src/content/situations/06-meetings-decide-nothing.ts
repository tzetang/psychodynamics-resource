import { anchor, hazeKnob, person, you } from '../helpers';
import type { Situation } from '../types';
import type { Beat, KnobSpec, SceneDef } from '../../stage/types';

const watchPull: KnobSpec = {
  id: 'watching',
  label: 'How much does the room watch the pair?',
  lowLabel: 'Everyone joins in',
  highLabel: 'Everyone leans back and watches',
  default: 0.6,
  apply: (beat, v) => ({
    ...beat,
    forces: {
      ...beat.forces,
      ...(beat.forces.pair && { pair: { ...beat.forces.pair, strength: Math.min(1, (beat.forces.pair.strength * (0.3 + 1.2 * v)) / 1.02) } }),
      ...(beat.forces.cluster !== undefined && { cluster: Math.min(1, (beat.forces.cluster * (0.3 + 1.2 * v)) / 1.02) }),
    },
  }),
};

const beats: Beat[] = [
  {
    id: 'agenda',
    caption: 'A meeting starts. There is a hard decision on the agenda.',
    forces: {},
    haze: 0.2,
  },
  {
    id: 'pair-talks',
    caption: 'Two people start a long, lively exchange of ideas. The room leans in.',
    forces: { pair: { a: 'a', b: 'b', strength: 0.9 }, cluster: 0.2 },
    haze: 0.2,
    highlight: ['a', 'b'],
    particles: [
      { from: 'a', to: 'b', family: 'calm', resolve: 'settle' },
      { from: 'b', to: 'a', family: 'calm', resolve: 'settle', delayMs: 700 },
    ],
  },
  {
    id: 'hope',
    caption: 'Everyone else watches, hopeful. The talk feels productive, and nothing gets decided.',
    forces: { pair: { a: 'a', b: 'b', strength: 0.9 }, cluster: 0.3 },
    haze: 0.2,
    particles: [
      { from: 'c', to: 'a', family: 'longing', resolve: 'settle' },
      { from: 'd', to: 'b', family: 'longing', resolve: 'settle', delayMs: 500 },
      { from: 'e', to: 'a', family: 'longing', resolve: 'settle', delayMs: 1000 },
      { from: 'f', to: 'b', family: 'longing', resolve: 'settle', delayMs: 1500 },
    ],
  },
  {
    id: 'next-time',
    caption: 'The meeting ends with "let\'s pick this up next time." The hope moves to the next meeting, or a new idea, as if that will solve it.',
    forces: { pair: { a: 'a', b: 'b', strength: 0.6 }, cluster: 0.2 },
    haze: 0.25,
    particles: [
      { from: 'c', to: 'next', family: 'longing', resolve: 'absorb' },
      { from: 'f', to: 'next', family: 'longing', resolve: 'absorb', delayMs: 600 },
      { from: 'b', to: 'next', family: 'longing', resolve: 'absorb', delayMs: 1200 },
    ],
  },
  {
    id: 'your-part',
    caption: 'You enjoy the good conversation too, and it spares you the discomfort of deciding. Saying "We need to decide this today" breaks the spell.',
    isYourPart: true,
    forces: { pair: { a: 'a', b: 'b', strength: 0.6 }, cluster: 0.2 },
    haze: 0.2,
    highlight: ['you'],
    particles: [{ from: 'you', to: 'next', family: 'longing', resolve: 'absorb' }],
  },
];

const watch: SceneDef = {
  id: 'meetings-decide-nothing',
  label: 'Animated scene: two people talk at length while the rest of the room hopes the talk will solve the problem, and nothing is decided.',
  actors: [
    you(500, 440),
    person('a', 330, 210),
    person('b', 670, 210),
    person('c', 150, 340),
    person('d', 850, 340),
    person('e', 250, 500),
    person('f', 750, 500),
    anchor('next', 900, 70),
  ],
  boundaries: [{ id: 'team', label: 'The meeting', members: ['you', 'a', 'b', 'c', 'd', 'e', 'f'] }],
  beats,
  knobs: [hazeKnob({ id: 'pressure', label: 'How hard is the decision?', lowLabel: 'Easy to make', highLabel: 'Uncomfortable' }), watchPull],
};

const situation: Situation = {
  id: 'meetings-decide-nothing',
  level: 'team',
  title: 'Meetings that decide nothing',
  watch,
  name: ['basic-assumption-pairing'],
  tries: [
    {
      id: 'name-the-decision',
      label: 'Name the decision out loud',
      stance: 'You say plainly what has to be decided and by when, and you ask the room who is ready to own it. You accept that a decision may be imperfect.',
      afterBeats: [
        beats[0],
        { ...beats[1], id: 'pair-talks' },
        {
          id: 'name',
          caption: 'You say, "We need to decide this today. What are the options, and who will own it?"',
          isYourPart: true,
          forces: { pair: { a: 'a', b: 'b', strength: 0.3 }, cluster: 0.4 },
          haze: 0.3,
          highlight: ['you'],
          particles: [
            { from: 'you', to: 'c', family: 'calm', resolve: 'settle' },
            { from: 'you', to: 'd', family: 'calm', resolve: 'settle', delayMs: 400 },
          ],
        },
        {
          id: 'decided',
          caption: 'The whole room joins in. A decision is made, even if imperfect, and the hope turns into ownership.',
          forces: { cluster: 0.4 },
          haze: 0.1,
          particles: [
            { from: 'c', to: 'a', family: 'calm', resolve: 'settle' },
            { from: 'e', to: 'f', family: 'calm', resolve: 'settle', delayMs: 500 },
          ],
        },
      ],
    },
  ],
  escalation:
    'If the stalling hides a real conflict that people are afraid to voice, or someone is being shut out of the decision, bring in a facilitator or coach. If the avoidance is about something unsafe, such as a compliance or safety concern, escalate it through the proper channel rather than waiting for the room to be ready.',
};

export default situation;
