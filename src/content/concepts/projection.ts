import { clipOf } from '../helpers';
import report from '../situations/03-report-needs-reassurance';
import type { Concept } from '../types';

const concept: Concept = {
  id: 'projection',
  name: 'Seeing it in them',
  definition: 'Pushing a feeling you cannot tolerate in yourself onto someone else, so that it seems to belong to them.',
  atWork: [
    'A manager who feels unsure insists the team lacks confidence.',
    'You are irritated by a colleague for being "defensive" when you were the one on edge.',
    'A team that fears failing decides one department is incompetent.',
  ],
  yourPart: 'When you are strongly sure what someone else is feeling, check whether it is also yours.',
  leavesOut: 'Sometimes what you see in the other person really is there. Projection is one possible explanation, not the only one.',
  clip: clipOf(report.watch, 'projection', 'Animated clip: a feeling you cannot hold is pushed onto someone else.', [
    {
      id: 'own',
      caption: 'You feel an uncomfortable feeling, but it is hard to own.',
      forces: {},
      haze: 0.4,
      hazeScope: 'you',
      highlight: ['you'],
    },
    {
      id: 'pushed',
      caption: 'Without noticing, you hand it over. Now it seems to belong to them.',
      forces: {},
      haze: 0.4,
      hazeScope: 'them',
      highlight: ['them'],
      particles: [{ from: 'you', to: 'them', family: 'anxiety', resolve: 'settle' }],
    },
  ]),
  sources: {
    theorists: ['Sigmund Freud'],
    works: [{ title: 'Psycho-Analytic Notes on an Autobiographical Account of a Case of Paranoia (Dementia Paranoides)', year: 1911 }],
  },
};

export default concept;
