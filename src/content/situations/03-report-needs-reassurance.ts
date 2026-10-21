import { containmentKnob, hazeKnob, person, you } from '../helpers';
import type { Situation } from '../types';
import type { Beat, SceneDef } from '../../stage/types';

const beats: Beat[] = [
  {
    id: 'steady',
    caption: 'A report you work with closely is getting on with their work.',
    forces: {},
    haze: 0.05,
  },
  {
    id: 'arrives',
    caption: 'Something small goes wrong and they feel anxious. They bring it to you, again.',
    forces: {},
    haze: 0.5,
    hazeScope: 'them',
    highlight: ['them'],
    particles: [{ from: 'them', to: 'you', family: 'anxiety', resolve: 'absorb' }],
  },
  {
    id: 'what-happens',
    caption: 'What you do with the worry decides what comes back. Held steadily, it returns as something calmer. Pushed away, it returns bigger.',
    forces: {},
    haze: 0.4,
    hazeScope: 'them',
    particles: [
      { from: 'them', to: 'you', family: 'anxiety', resolve: 'absorb' },
      { from: 'them', to: 'you', family: 'anxiety', resolve: 'absorb', delayMs: 800, size: 0.8 },
    ],
  },
  {
    id: 'your-part',
    caption: 'You can only hold their worry while yours is held. If you are tense yourself, or rush to fix it, it goes straight back.',
    isYourPart: true,
    forces: {},
    haze: 0.35,
    hazeScope: 'you',
    highlight: ['you'],
    particles: [{ from: 'them', to: 'you', family: 'anxiety', resolve: 'absorb' }],
  },
];

const watch: SceneDef = {
  id: 'report-needs-reassurance',
  label: 'Animated scene: a report brings their worry to you and what comes back depends on how steadily you hold it.',
  actors: [you(290, 300), person('them', 710, 300, 'Report')],
  beats,
  knobs: [
    hazeKnob({ id: 'worry', label: 'How worried are they?', lowLabel: 'A passing worry', highLabel: 'Very anxious' }),
    containmentKnob('you'),
  ],
};

const situation: Situation = {
  id: 'report-needs-reassurance',
  level: 'pair',
  title: 'The report who needs constant reassurance',
  watch,
  name: ['containment', 'anxiety'],
  tries: [
    {
      id: 'steady-then-ask',
      label: 'Stay steady, then ask what they think',
      stance: 'You listen without hurrying to fix it, and you stay calm. Then you ask what they think the next step is, so the worry comes back to them in a form they can use.',
      afterBeats: [
        beats[0],
        {
          id: 'arrives',
          caption: 'They bring you the worry. You listen, breathe, and do not rush to fix it.',
          isYourPart: true,
          forces: {},
          haze: 0.45,
          hazeScope: 'them',
          highlight: ['you'],
          particles: [
            { from: 'them', to: 'you', family: 'anxiety', resolve: 'absorb' },
            { from: 'you', to: 'them', family: 'calm', resolve: 'settle', size: 0.7, delayMs: 1600 },
          ],
        },
        {
          id: 'ask',
          caption: 'Then you ask, "What do you think the next step is?" The worry turns into a plan they can own.',
          isYourPart: true,
          forces: {},
          haze: 0.2,
          hazeScope: 'them',
          highlight: ['you', 'them'],
          particles: [{ from: 'you', to: 'them', family: 'calm', resolve: 'settle', delayMs: 300 }],
        },
        {
          id: 'lighter',
          caption: 'They leave lighter, and next time they check in a little less.',
          forces: {},
          haze: 0.08,
          highlight: ['them'],
        },
      ],
    },
  ],
  escalation:
    'If the anxiety seems to take over their day, shows up in their health, or does not ease however steady you are, encourage them to talk to their doctor or an employee-assistance service. You are a manager, not their therapist. If workload or unclear expectations are driving it, that is for you and HR to fix.',
};

export default situation;
