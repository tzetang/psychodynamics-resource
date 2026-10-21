import { clipOf } from '../helpers';
import report from '../situations/03-report-needs-reassurance';
import type { Concept } from '../types';

const concept: Concept = {
  id: 'anxiety',
  name: 'Anxiety in the air',
  definition: 'A feeling of threat, often without a clear cause, that moves between people like weather.',
  atWork: [
    'A deadline email changes the mood of the whole floor.',
    'You feel tense before a meeting and cannot say why.',
    "One person's worry makes the next person's worry louder.",
  ],
  yourPart: 'Your own anxiety travels too. Teams read your tension faster than they hear what you say.',
  leavesOut: 'Ordinary worry is not a disorder, and not all anxiety hides something deeper. Sometimes the threat is real and the worry is a fair response.',
  clip: clipOf(report.watch, 'anxiety', 'Animated clip: a worry lands on one person and the mood around them thickens.', [
    { id: 'calm', caption: 'People are getting on with their work. The mood is steady.', forces: {}, haze: 0.05 },
    {
      id: 'lands',
      caption: 'A worry lands. It shows up as tension, and it passes from one person to the next like weather.',
      forces: {},
      haze: 0.5,
      hazeScope: 'them',
      particles: [{ from: 'them', to: 'you', family: 'anxiety', resolve: 'settle' }],
    },
  ]),
  sources: { theorists: ['Sigmund Freud'], works: [{ title: 'Inhibitions, Symptoms and Anxiety', year: 1926 }] },
};

export default concept;
