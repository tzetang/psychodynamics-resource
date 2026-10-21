import { beatsOf, clipOf } from '../helpers';
import rescuing from '../situations/04-keep-rescuing';
import type { Concept } from '../types';

const concept: Concept = {
  id: 'projective-identification',
  name: 'Feeling what they hand you',
  definition: "Someone's unspoken feeling lands in you so strongly that you start to feel it, and act on it, as if it were your own.",
  atWork: [
    'After a call with a certain client you feel inexplicably useless.',
    'You find yourself taking over for a colleague who has not asked.',
    'A confident-looking team leaves you feeling anxious, as if you were carrying their worry.',
  ],
  yourPart: 'A strong, sudden feeling in a particular relationship is worth treating as a clue about the other person as well as about you.',
  leavesOut: 'Some feelings in you are just yours. This picture shows one route by which feelings travel, and it is hard to prove in any one case.',
  clip: clipOf(
    rescuing.watch,
    'projective-identification',
    'Animated clip: a feeling of helplessness lands in you as a strong urge to rescue.',
    beatsOf(rescuing.watch, 'overwhelmed', 'pull', 'rescue'),
  ),
  sources: {
    theorists: ['Melanie Klein', 'Thomas Ogden'],
    works: [
      { title: 'Notes on Some Schizoid Mechanisms', year: 1946 },
      { title: 'Projective Identification and Psychotherapeutic Technique', year: 1982 },
    ],
  },
};

export default concept;
