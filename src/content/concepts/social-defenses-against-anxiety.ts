import { beatsOf, clipOf } from '../helpers';
import process from '../situations/10-process-protects-us';
import type { Concept } from '../types';

const concept: Concept = {
  id: 'social-defenses-against-anxiety',
  name: 'Rules that protect us from feelings',
  definition: 'Structures, rules and routines that grow up in an organization to shield people from the anxiety of the real work.',
  atWork: [
    'Layers of sign-off that no one person is responsible for.',
    'Meetings about the work instead of doing it.',
    'Scripts and checklists that keep people from engaging with the person in front of them.',
  ],
  yourPart: 'You probably help enforce the process. Asking "What is this step protecting us from?" is the way in.',
  leavesOut: 'Some rules protect against real risk, and are there for good reason. The pattern is about rules that outlive their purpose and protect feelings, not people.',
  clip: clipOf(process.watch, 'social-defenses-against-anxiety', 'Animated clip: a process grows to absorb anxiety and people drift away from the real work.', beatsOf(process.watch, 'process-grows', 'safer', 'becomes-the-work')),
  sources: {
    theorists: ['Isabel Menzies Lyth', 'Elliott Jaques'],
    works: [
      { title: 'A Case-Study in the Functioning of Social Systems as a Defence against Anxiety', year: 1960 },
      { title: 'Social Systems as a Defence against Persecutory and Depressive Anxiety', year: 1955 },
    ],
  },
};

export default concept;
