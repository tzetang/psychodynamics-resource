import { beatsOf, clipOf } from '../helpers';
import meetings from '../situations/06-meetings-decide-nothing';
import type { Concept } from '../types';

const concept: Concept = {
  id: 'basic-assumption-pairing',
  name: 'Waiting for the next idea',
  definition: 'A group puts its hope in a pair, an idea or a future event to solve the problem, instead of deciding now.',
  atWork: [
    'Two people talk for an hour while everyone else watches.',
    '"Let us park this until the next offsite."',
    'A new tool, hire or reorg is expected to fix everything.',
  ],
  yourPart: 'Good conversation is enjoyable, and it spares you the discomfort of deciding. Name the decision out loud and who owns it.',
  leavesOut: 'Some topics really do need more time. The pattern is about hope used to avoid deciding, not about discussion in general.',
  clip: clipOf(meetings.watch, 'basic-assumption-pairing', 'Animated clip: two people talk while the room hopes the talk will solve it.', beatsOf(meetings.watch, 'pair-talks', 'hope', 'next-time')),
  sources: { theorists: ['Wilfred Bion'], works: [{ title: 'Experiences in Groups', year: 1961 }] },
};

export default concept;
