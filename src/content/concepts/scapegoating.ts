import { beatsOf, clipOf } from '../helpers';
import difficult from '../situations/08-difficult-person';
import type { Concept } from '../types';

const concept: Concept = {
  id: 'scapegoating',
  name: 'Putting it on one person',
  definition: "A group relieves its own tension by loading it, mostly unspoken, onto one member who then seems to be \"the problem\".",
  atWork: [
    'The same person is interrupted, blamed or left out of the loop.',
    'When the team gets tense, the talk turns to one person.',
    'After that person leaves, the tension finds someone else.',
  ],
  yourPart: 'You may find yourself agreeing, or treating that person as the whole problem. Ask what the team as a whole is avoiding.',
  leavesOut: 'The person may also have real issues to address. The pattern is about what the group does with them, and does not excuse or deny their own behaviour.',
  clip: clipOf(difficult.watch, 'scapegoating', "Animated clip: a team's tension gets placed on one member and the group feels relief.", beatsOf(difficult.watch, 'tense', 'one-person', 'relief')),
  sources: {
    theorists: ['Ezra Vogel', 'Norman Bell'],
    works: [{ title: 'The Emotionally Disturbed Child as the Family Scapegoat', year: 1960 }],
  },
};

export default concept;
