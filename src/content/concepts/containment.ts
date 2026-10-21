import { clipOf } from '../helpers';
import report from '../situations/03-report-needs-reassurance';
import type { Concept } from '../types';

const concept: Concept = {
  id: 'containment',
  name: 'Holding it steady',
  definition: "Taking in someone's worry without being knocked over by it, and giving it back in a calmer form they can use.",
  atWork: [
    'You listen to a nervous colleague, stay calm, and they leave steadier.',
    'A manager says "that is a lot, let us work out what matters first".',
    'A team feels better after a leader names the problem plainly.',
  ],
  yourPart: 'You can only hold what you can bear yourself. If you are anxious or in a hurry to fix it, the worry goes straight back and grows.',
  leavesOut: 'Containment is not absorbing everything. A leader who takes it all in becomes the bottleneck, and some worry needs a different kind of help.',
  clip: clipOf(report.watch, 'containment', 'Animated clip: a worry is taken in steadily and returns as something calmer.', [
    {
      id: 'arrives',
      caption: 'Someone brings you a worry.',
      forces: {},
      haze: 0.5,
      hazeScope: 'them',
      particles: [{ from: 'them', to: 'you', family: 'anxiety', resolve: 'absorb' }],
    },
    {
      id: 'held',
      caption: 'You take it in steadily, and what comes back is calmer.',
      forces: {},
      haze: 0.2,
      hazeScope: 'them',
      highlight: ['you'],
      particles: [
        { from: 'them', to: 'you', family: 'anxiety', resolve: 'absorb' },
        { from: 'you', to: 'them', family: 'calm', resolve: 'settle', size: 0.7, delayMs: 1600 },
      ],
    },
  ]),
  sources: { theorists: ['Wilfred Bion'], works: [{ title: 'Learning from Experience', year: 1962 }] },
};

export default concept;
