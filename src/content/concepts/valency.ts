import { clipOf } from '../helpers';
import difficult from '../situations/08-difficult-person';
import type { Concept } from '../types';

const concept: Concept = {
  id: 'valency',
  name: 'Who catches the feeling',
  definition: 'A group quietly hands out roles, such as the worrier or the rescuer, and a member\'s own history can make them readier to take one on.',
  atWork: [
    'Whenever the group gets nervous, someone ends up raising the alarm for everyone.',
    'When things get tense, someone ends up cracking jokes for the room.',
    'Someone with less power takes on whatever the others do not want.',
  ],
  yourPart: 'You have your own readiness too. Notice which role you slip into, and what the team would do if you did not.',
  leavesOut: 'Valency describes a readiness, not a fixed personality. The same person can fill different roles in different groups.',
  clip: clipOf(difficult.watch, 'valency', 'Animated clip: several people hand out the same feeling, and some catch it while others let it bounce.', [
    {
      id: 'handed-out',
      caption: 'The same feeling is offered to several people.',
      forces: {},
      haze: 0.3,
      particles: [
        { from: 'b', to: 'one', family: 'anger', resolve: 'settle' },
        { from: 'd', to: 'c', family: 'anger', resolve: 'bounce', delayMs: 400 },
        { from: 'f', to: 'one', family: 'anger', resolve: 'settle', delayMs: 800 },
      ],
    },
    {
      id: 'catches',
      caption: 'Some people catch it and carry it, while others let it pass. The readiness to catch is called valency.',
      forces: {},
      haze: 0.3,
      hazeScope: 'one',
      highlight: ['one'],
      particles: [
        { from: 'c', to: 'one', family: 'anger', resolve: 'settle' },
        { from: 'e', to: 'you', family: 'anger', resolve: 'bounce', delayMs: 500 },
      ],
    },
  ]),
  sources: { theorists: ['Wilfred Bion'], works: [{ title: 'Experiences in Groups', year: 1961 }] },
};

export default concept;
