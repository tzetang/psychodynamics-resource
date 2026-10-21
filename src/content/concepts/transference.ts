import { beatsOf, clipOf } from '../helpers';
import underSkin from '../situations/02-person-under-my-skin';
import type { Concept } from '../types';

const concept: Concept = {
  id: 'transference',
  name: 'Old feelings, new person',
  definition: 'Carrying feelings about someone from your past into a present relationship, and responding to the new person as if they were the old one.',
  atWork: [
    'A colleague who reminds you of a strict teacher makes you feel small.',
    'You expect a new boss to let you down because the last one did.',
    'Someone triggers a strong reaction, and you cannot say what they actually did.',
  ],
  yourPart: 'Your reactions are made of the present and your own history. Asking "Who does this remind me of?" gives you a choice about what to do next.',
  leavesOut: 'Sometimes the person really is difficult. The picture explains why a reaction can be bigger than the moment, not whether it is deserved.',
  clip: clipOf(
    underSkin.watch,
    'transference',
    'Animated clip: a feeling from someone in the past is sent toward a colleague who reminds you of them.',
    beatsOf(underSkin.watch, 'jolt', 'before', 'treated-as'),
  ),
  sources: { theorists: ['Sigmund Freud'], works: [{ title: 'The Dynamics of Transference', year: 1912 }] },
};

export default concept;
