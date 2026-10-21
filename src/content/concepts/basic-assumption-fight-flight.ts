import { beatsOf, clipOf } from '../helpers';
import enemy from '../situations/07-outside-enemy';
import type { Concept } from '../types';

const concept: Concept = {
  id: 'basic-assumption-fight-flight',
  name: 'Us against them',
  definition: 'A group deals with anxiety by pulling together against an enemy, or by running from a threat, instead of doing its own work.',
  atWork: [
    'The team unites in anger at another department.',
    'Everyone avoids a hard topic by "moving on".',
    'A reorg is blamed on "them upstairs" in every meeting.',
  ],
  yourPart: 'It is easy to be popular by joining the attack. Naming the real concern, and what the team is avoiding, is harder and more useful.',
  leavesOut: 'Sometimes there really is an outside threat. The pattern is about using an enemy to avoid something else, not about whether the enemy is real.',
  clip: clipOf(enemy.watch, 'basic-assumption-fight-flight', 'Animated clip: a team pulls together against an outside group, and its own tensions go quiet.', beatsOf(enemy.watch, 'friction', 'huddle', 'unity')),
  sources: { theorists: ['Wilfred Bion'], works: [{ title: 'Experiences in Groups', year: 1961 }] },
};

export default concept;
