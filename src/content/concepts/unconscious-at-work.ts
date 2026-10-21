import { beatsOf, clipOf } from '../helpers';
import overreact from '../situations/01-overreact-to-criticism';
import type { Concept } from '../types';

const concept: Concept = {
  id: 'unconscious-at-work',
  name: 'Below the waterline',
  definition: 'A lot of what drives how we act at work is not noticed in the moment: it sits below the waterline.',
  atWork: [
    'You realise afterwards that a calm-looking meeting left you drained.',
    'A team keeps repeating the same argument without knowing why.',
    'A decision feels "obviously right" for reasons you cannot quite explain.',
  ],
  yourPart: 'What you do not notice in yourself still shapes the room. Getting curious about your own reactions brings some of it above the line.',
  leavesOut: 'The picture splits the world into noticed and not noticed. In real life the line moves all the time, and not everything below it is hidden meaning.',
  clip: clipOf(
    overreact.watch,
    'unconscious-at-work',
    'Animated clip: a feeling sits below the waterline until you notice it.',
    beatsOf(overreact.watch, 'surface', 'your-part'),
  ),
  sources: {
    theorists: ['Sigmund Freud', 'Manfred Kets de Vries'],
    works: [
      { title: 'The Unconscious', year: 1915 },
      { title: 'Organizations on the Couch (editor)', year: 1991 },
    ],
  },
};

export default concept;
