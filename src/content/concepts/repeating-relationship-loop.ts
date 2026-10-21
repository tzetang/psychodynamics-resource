import { beatsOf, clipOf } from '../helpers';
import rescuing from '../situations/04-keep-rescuing';
import type { Concept } from '../types';

const concept: Concept = {
  id: 'repeating-relationship-loop',
  name: 'The loop',
  definition: 'Two people fall into a pattern where each one\'s usual move brings out the other\'s, so the same scene replays.',
  atWork: [
    'You push for updates, they withdraw, you push harder.',
    'Every review ends with the same argument.',
    'One person always rescues and the other always needs rescuing.',
  ],
  yourPart: 'You cannot change the other person, but if you change your half of the loop, the loop has to change.',
  leavesOut: 'It takes two to form a loop, but not to the same degree. Power, pay and position are not equal, and some loops are one-sided.',
  clip: clipOf(
    rescuing.watch,
    'repeating-relationship-loop',
    'Animated clip: one person\'s move triggers the other\'s, and the pair replays the same scene.',
    beatsOf(rescuing.watch, 'rescue', 'again', 'your-part'),
  ),
  sources: {
    theorists: ['Sigmund Freud', 'Timothy Leary'],
    works: [
      { title: 'Remembering, Repeating and Working-Through', year: 1914 },
      { title: 'Interpersonal Diagnosis of Personality', year: 1957 },
    ],
  },
};

export default concept;
