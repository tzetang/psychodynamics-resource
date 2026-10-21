import { clipOf } from '../helpers';
import reorg from '../situations/09-reorg-panic';
import type { Concept } from '../types';

const concept: Concept = {
  id: 'role-and-boundary',
  name: 'Roles and boundaries',
  definition: 'Who does what, and who belongs where, which gives people a place to stand and keeps worry from leaking across the lines.',
  atWork: [
    'Everyone knows what is theirs to decide, and what is not.',
    'A restructure leaves people unsure what their role is, and the whole system gets anxious.',
    'Two teams both think they own a problem, and neither does.',
  ],
  yourPart: 'Clear roles, including your own, are one of the strongest ways to contain a group. Check that people know where they stand.',
  leavesOut: 'Clear roles do not remove anxiety, and rigid roles can become a defense of their own. The aim is clarity, not walls.',
  clip: clipOf(reorg.watch, 'role-and-boundary', 'Animated clip: clear boundaries keep worry within teams, and blurred ones let it cross.', [
    {
      id: 'clear',
      caption: 'With clear roles and boundaries, each team knows what is theirs, and worry stays near where it starts.',
      forces: { boundaryPull: 0.12 },
      haze: 0.1,
      hazeScope: 't1',
      particles: [{ from: 'you', to: 'a', family: 'calm', resolve: 'settle' }],
    },
    {
      id: 'blurred',
      caption: 'When roles blur, no one is sure what is theirs. Worry and blame cross the lines between teams.',
      forces: { boundaryPull: 0.02 },
      haze: 0.45,
      particles: [
        { from: 'b', to: 'c', family: 'anxiety', resolve: 'settle' },
        { from: 'e', to: 'f', family: 'anxiety', resolve: 'settle', delayMs: 500 },
        { from: 'g', to: 'a', family: 'anxiety', resolve: 'settle', delayMs: 1000 },
      ],
    },
  ]),
  sources: {
    theorists: ['A. K. Rice'],
    works: [
      { title: 'Learning for Leadership', year: 1965 },
      { title: 'The Enterprise and Its Environment', year: 1963 },
    ],
  },
};

export default concept;
