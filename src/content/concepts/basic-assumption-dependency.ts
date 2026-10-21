import { dependencyScene } from '../situations/05-everyone-waits';
import type { Concept } from '../types';

const [calm, , checkingIn, everyoneWaits] = dependencyScene.beats;

const concept: Concept = {
  id: 'basic-assumption-dependency',
  name: 'Waiting to be rescued',
  definition: 'A group acts as if one person must supply every answer, and quietly stops using its own judgment.',
  atWork: [
    'Small choices the team could make wait for your sign-off.',
    'Meetings end with "let\'s see what they think" and nothing moves until you speak.',
    'People bring problems to you but not proposals.',
  ],
  yourPart:
    'Answering every question feels helpful, and it keeps you needed. Each answer also teaches the group that waiting for you works.',
  leavesOut:
    'This picture shows one pattern at one moment. Real teams mix several, and waiting can also be a sensible response to unclear roles or a genuine approval process.',
  clip: {
    ...dependencyScene,
    id: 'concept:basic-assumption-dependency',
    label: 'Animated clip: a team gathers around its leader and waits for every decision.',
    knobs: [],
    beats: [calm, checkingIn, everyoneWaits],
  },
  sources: {
    theorists: ['Wilfred Bion'],
    works: [{ title: 'Experiences in Groups', year: 1961 }],
  },
};

export default concept;
