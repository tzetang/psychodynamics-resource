import { beatsOf, clipOf } from '../helpers';
import overreact from '../situations/01-overreact-to-criticism';
import type { Concept } from '../types';

const concept: Concept = {
  id: 'defenses',
  name: 'Defenses',
  definition: 'Automatic ways of turning an uncomfortable feeling into something easier to live with, before you notice you are doing it.',
  atWork: [
    'Feeling hurt and answering with sarcasm.',
    'Joking about a problem so you do not have to look at it.',
    'Taking on more work instead of admitting you are overwhelmed.',
  ],
  yourPart: 'Everyone has defenses, you included. They show up most when you are under pressure, which is also when your team is watching you most.',
  leavesOut: 'Defenses are not flaws. They help us get through the day, and many are useful. This picture shows only one of them.',
  clip: clipOf(
    overreact.watch,
    'defenses',
    'Animated clip: an anxious feeling reaches a gate and is turned into a sharp reply.',
    beatsOf(overreact.watch, 'flicker', 'flip', 'surface'),
  ),
  sources: { theorists: ['Anna Freud'], works: [{ title: 'The Ego and the Mechanisms of Defence', year: 1936 }] },
};

export default concept;
