import { PsychodynamicConcept } from '../types/psychodynamics';

export const CONCEPTS_PART_4: PsychodynamicConcept[] = [
  {
    id: 'primary-secondary-process',
    name: 'Primary vs. Secondary Process Thinking',
    subtitle: 'Associative Dream-Logic vs. Linear, Reality-Tested Thought',
    lens: 'drive-conflict',
    category: 'Psychic Structure',
    tenSecondIntuition:
      'The mind runs two operating systems at once: Primary Process is the wild, timeless, metaphorical poetry of dreams and raw emotion (where opposites coexist and one image morphs into another); Secondary Process is the logical, time-aware, verbal executive reasoning of the waking Ego.',
    clinicalVignette:
      'In a dream (Primary Process), your childhood house is simultaneously your current office, and your boss is also your father; waking reflection (Secondary Process) unpacks why your brain fused those two authority figures together.',
    ideaVsAffect: {
      rawImpulseExample: 'Warded-off emotional memories and wishes seeking representation.',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'Primary process condenses and displaces multiple meanings into vivid symbols; Secondary process translates them into linear language.',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'Primary process moves affect freely across associations; Secondary process binds and delays affect for reality-testing.',
      consciousOutput: 'Creative metaphor, dreams, slips of the tongue, and symbolic insight.',
    },
    pdm2Context:
      'Assessed on the PDM-2 M-Axis under Reality Testing and capacity for symbolic vs. concrete thinking.',
    foundationalOrigin: {
      theorist: 'Sigmund Freud',
      year: '1900 / 1911',
      seminalWork: 'The Interpretation of Dreams (1900); Formulations on the Two Principles of Mental Functioning (1911)',
      originalFormulation:
        'Contrasted the Pleasure Principle’s mobile energy (condensation, displacement, timelessness) with the Reality Principle’s bound energy.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Default Mode Network (DMN) vs. Fronto-Parietal Free Energy',
        citation: 'Carhart-Harris & Friston (2010, Brain)',
        findingOrOperationalization:
          'Landmark neurobiology paper demonstrated that Freud’s Primary vs. Secondary process maps directly onto Default Mode Network entropic activity versus executive hierarchical predictive coding.',
      },
    ],
    relatedConceptIds: [
      'structural-model',
      'displacement',
      'compromise-formation',
      'sublimation',
    ],
    confusedWith: [
      {
        targetConceptId: 'mentalization',
        sharedSurface: 'Both describe modes of how the mind processes thoughts and feelings.',
        keyDistinction:
          'Primary/Secondary Process contrasts dreamlike associative symbolism with logical reality-testing; Mentalization specifically refers to understanding behavior in terms of intentional mental states.',
        thisConceptRule: 'Associative, symbolic dream-logic (Primary) vs. linear reality-tested logic (Secondary).',
        otherConceptRule: 'Understanding self and others as having minds, feelings, and perspectives.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'displacement',
      buttonLabel: 'Explore Associative Displacement in Switchboard',
    },
  },
  {
    id: 'acting-out',
    name: 'Acting Out',
    subtitle: 'Discharging an Unbearable Feeling Into Immediate Action Instead of Words',
    lens: 'ego-psychology',
    category: 'Defense Mechanism',
    dmrsLevel: 1,
    dmrsLevelName: 'Level 1: Action',
    tenSecondIntuition:
      'When an emotion (like abandonment panic or humiliation) feels too scorching to pause and feel inside, the person short-circuits reflection and discharges the tension immediately through an impulsive action—slamming a door, sending a bridges-burning text, bingeing, or storming out.',
    clinicalVignette:
      'Instead of saying "I feel hurt that you canceled our session next week," a patient skips the current session without calling and blocks the clinic’s number.',
    ideaVsAffect: {
      rawImpulseExample: '"I feel terrified and furious that you are leaving me behind."',
      ideaFate: 'Repressed / Blocked',
      ideaDescription: 'Symbolic reflection ("What am I feeling and why?") is bypassed completely.',
      affectFate: 'Converted / Displaced',
      affectDescription: 'Raw emotional tension is evacuated directly into motor behavior to get immediate relief.',
      consciousOutput: 'Impulsive behavioral eruption followed later by regret or confusion.',
    },
    pdm2Context:
      'DMRS Level 1 Action defense; prominent when impulse regulation and affect tolerance on the PDM-2 M-Axis are overwhelmed.',
    foundationalOrigin: {
      theorist: 'Sigmund Freud',
      year: '1914',
      seminalWork: 'Remembering, Repeating and Working-Through',
      originalFormulation:
        'Freud observed that "the patient does not remember anything of what he has forgotten and repressed, but acts it out. He reproduces it not as a memory, but as an action."',
    },
    empiricalResearch: [
      {
        frameworkName: 'DMRS Level 1 Action Defenses & Therapy Dropout',
        citation: 'Perry (1990); Høglend & Perry (1998)',
        findingOrOperationalization:
          'High baseline reliance on Level 1 Action defenses predicts impulsive premature termination unless addressed early through containment and contract-setting.',
      },
    ],
    relatedConceptIds: [
      'enactment',
      'somatization',
      'splitting',
      'dmrs-hierarchy',
    ],
    confusedWith: [
      {
        targetConceptId: 'enactment',
        sharedSurface: 'Both involve putting an unconscious conflict into action rather than words.',
        keyDistinction:
          'Acting Out is a one-person DMRS Level 1 defense (impulsive discharge to avoid feeling); Relational Enactment is a subtler two-person dance where both people’s unconscious scripts hook into each other.',
        thisConceptRule: 'One-person impulsive behavioral discharge (DMRS Level 1) that bypasses reflection.',
        otherConceptRule: 'Two-person co-constructed interpersonal pattern unfolding between two minds.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'projection',
      buttonLabel: 'Explore Low-Ego-Capacity Defenses in Switchboard',
    },
  },
  {
    id: 'altruism-humor',
    name: 'Humor & Altruism (Mature Defenses)',
    subtitle: 'Facing Pain Directly Through Playful Perspective and Generosity',
    lens: 'ego-psychology',
    category: 'Defense Mechanism',
    dmrsLevel: 7,
    dmrsLevelName: 'Level 7: High-Adaptive (Mature)',
    tenSecondIntuition:
      'Mature defenses don’t hide from truth—they soften its sting. Humor lets you speak an uncomfortable human truth with a warm wink that invites connection without biting; healthy Altruism transforms personal wounds into genuine, gratifying support for others going through the same struggle.',
    clinicalVignette:
      'A man who grew up feeling painfully awkward at new schools becomes the warm, self-deprecating mentor who welcomes every nervous new intern on their first day.',
    ideaVsAffect: {
      rawImpulseExample: 'Painful vulnerability, mortality, or historical wound.',
      ideaFate: 'Conscious',
      ideaDescription: 'The painful truth remains fully in view without denial or distortion.',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'Distress is metabolised into shared playfulness (Humor) or vicarious mastery and warmth (Altruism).',
      consciousOutput: 'Resilience, social connection, and deep personal meaning.',
    },
    pdm2Context:
      'Hallmarks of DMRS Level 7 High-Adaptive functioning on the PDM-2 M-Axis.',
    foundationalOrigin: {
      theorist: 'Sigmund Freud, Anna Freud & George Vaillant',
      year: '1927 / 1936 / 1977',
      seminalWork: 'Humour (Freud, 1927); Adaptation to Life (Vaillant, 1977)',
      originalFormulation:
        'Freud called humor "the highest of these defensive processes," where the Superego speaks kindly and consolingly to the Ego rather than condemning it.',
    },
    empiricalResearch: [
      {
        frameworkName: 'DMRS Level 7 & Vaillant Longitudinal Cohort',
        citation: 'Vaillant (1977, 2000, American Psychologist)',
        findingOrOperationalization:
          'Distinguished healthy Level 7 Altruism (which brings genuine joy and boundary respect) from neurotic self-sacrificing masochism / Reaction Formation.',
      },
    ],
    relatedConceptIds: [
      'sublimation',
      'suppression',
      'reaction-formation',
      'dmrs-hierarchy',
    ],
    confusedWith: [
      {
        targetConceptId: 'reaction-formation',
        sharedSurface: 'Both can look like helping others or making jokes when stressed.',
        keyDistinction:
          'Mature Altruism/Humor brings genuine warmth, choice, and relief; Reaction Formation or compulsive people-pleasing feels obligatory, exhausting, and hides secret resentment.',
        thisConceptRule: 'Authentic, flexible, gratifying connection (Level 7 Mature).',
        otherConceptRule: 'Compulsive, resentful self-effacement masking forbidden anger (Level 5 Neurotic).',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'sublimation',
      buttonLabel: 'Test Level 7 Mature Defenses in Switchboard',
    },
  },
  {
    id: 'internal-working-models',
    name: 'Internal Working Models of Attachment',
    subtitle: 'Bowlby’s Cognitive-Affective Maps of "Am I Worthy?" and "Are Others Reliable?"',
    lens: 'relational-empirical',
    category: 'Developmental & Self',
    tenSecondIntuition:
      'John Bowlby bridged psychoanalysis with ethology and developmental science: from thousands of real interactions with early caregivers, a child builds an implicit map ("Internal Working Model") answering two core questions: (1) Am I worthy of love when I need help? and (2) Will other people show up or reject/overwhelm me?',
    clinicalVignette:
      'An adult with an Avoidant/Dismissing working model automatically down-regulates distress signals ("Needing people only gets you disappointed"), while an Anxious/Preoccupied model amplifies distress to keep attachment figures close.',
    ideaVsAffect: {
      rawImpulseExample: 'Innate biological attachment system activated by threat, illness, or separation.',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'Predicts whether proximity-seeking will bring comfort, rejection (deactivation), or inconsistent responsiveness (hyperactivation).',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'Secure models co-regulate affect smoothly; insecure models either suppress vulnerability (Avoidant) or amplify alarm (Anxious).',
      consciousOutput: 'Enduring adult attachment style in romance, friendship, and therapy.',
    },
    pdm2Context:
      'Foundational developmental spine of the PDM-2 across Infancy, Adolescence, and Adult M-Axis capacities.',
    foundationalOrigin: {
      theorist: 'John Bowlby, Mary Ainsworth & Mary Main',
      year: '1969 / 1978 / 1985',
      seminalWork: 'Attachment and Loss Trilogy (Bowlby, 1969–1980); Strange Situation (Ainsworth, 1978); Adult Attachment Interview (Main, 1985)',
      originalFormulation:
        'Demonstrated that real-world caregiver responsiveness—not just internal fantasy—shapes enduring procedural schemas of self and other.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Adult Attachment Interview (AAI) & 30-Year Longitudinal Studies',
        citation: 'Main, Kaplan & Cassidy (1985); Sroufe et al. (2005, Minnesota Longitudinal Study)',
        findingOrOperationalization:
          'Prospective 30-year tracking from infancy to adulthood confirmed that early attachment security and parental reflective functioning predict adult emotional regulation and peer/romantic competence.',
      },
    ],
    relatedConceptIds: [
      'ccrt',
      'object-constancy',
      'mentalization',
      'holding-environment',
    ],
    confusedWith: [
      {
        targetConceptId: 'ccrt',
        sharedSurface: 'Both describe internal relational templates carried from childhood into adulthood.',
        keyDistinction:
          'Internal Working Models come from Attachment Theory (Secure, Avoidant, Anxious, Disorganized strategies for safety); CCRT is Luborsky’s clinical transcript coding method mapping specific Wishes, Responses from Other, and Responses of Self.',
        thisConceptRule: 'Attachment-system map governing proximity-seeking, hyperactivation, or deactivation.',
        otherConceptRule: 'Narrative coding formula: Wish (W) → Response from Other (RO) → Response of Self (RS).',
      },
    ],
    linkedPlayground: {
      playgroundId: 'interpersonal-ccrt',
      presetId: 'closeness-preemptive-withdrawal',
      buttonLabel: 'Simulate Attachment Deactivation in CCRT Loop',
    },
  },
  {
    id: 'introjection-identification',
    name: 'Introjection & Identification with the Aggressor',
    subtitle: 'Swallowing an External Voice Whole—Or Becoming the Critic to Stop Feeling Helpless',
    lens: 'object-relations',
    category: 'Defense Mechanism',
    dmrsLevel: 3,
    dmrsLevelName: 'Level 3–5: Internalizing Spectrum',
    tenSecondIntuition:
      'How does an outside critic become the voice inside your own head? Through Introjection, a child absorbs a caregiver’s attitudes into their own psyche. In "Identification with the Aggressor" (Ferenczi & Anna Freud), a helpless person escapes terror by adopting the posture, tone, and harshness of the very authority figure who intimidated them.',
    clinicalVignette:
      'A junior doctor who was relentlessly shamed by senior attendings during residency finds himself using the exact same cutting sarcasm with medical students three years later.',
    ideaVsAffect: {
      rawImpulseExample: 'Helplessness, terror, and humiliation at the hands of a powerful figure.',
      ideaFate: 'Inverted / Opposite',
      ideaDescription: 'Flips role from the passive "Victim/Done-To" into the active "Critic/Doer"—either toward oneself (harsh Superego) or toward others.',
      affectFate: 'Converted / Displaced',
      affectDescription: 'Vulnerable fear and shame are replaced by the feeling of righteous power and control.',
      consciousOutput: 'Harsh inner self-attack ("I’m pathetic") or intimidating superiority toward subordinates.',
    },
    pdm2Context:
      'Explains both Introjective Depression (turning the critic inward) and bully/victim role reversals in trauma on the PDM-2 P-Axis.',
    foundationalOrigin: {
      theorist: 'Sándor Ferenczi & Anna Freud',
      year: '1932 / 1936',
      seminalWork: 'Confusion of Tongues Between Adults and the Child (Ferenczi, 1932); The Ego and the Mechanisms of Defence (A. Freud, 1936)',
      originalFormulation:
        'Described how transforming oneself from the person threatened into the person who makes the threat masters overwhelming traumatic helplessness.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Blatt’s Introjective vs. Anaclitic Configuration & SASB',
        citation: 'Sidney Blatt (2004, Experiences of Depression); Lorna Smith Benjamin (SASB, 1996)',
        findingOrOperationalization:
          'Benjamin’s Structural Analysis of Social Behavior (SASB) empirically measures how individuals treat themselves ("Introject") in direct parallel to how early attachment figures treated them.',
      },
    ],
    relatedConceptIds: [
      'structural-model',
      'projection',
      'projective-identification',
      'true-false-self',
    ],
    confusedWith: [
      {
        targetConceptId: 'projection',
        sharedSurface: 'Both blur the boundary between Self and Other.',
        keyDistinction:
          'Projection pushes an unwanted part of the SELF outward onto the OTHER; Introjection pulls an attitude or role of the OTHER inward into the SELF.',
        thisConceptRule: 'Outside → Inside: absorbing an external figure’s voice or role into your own self.',
        otherConceptRule: 'Inside → Outside: attributing your own internal impulse onto someone else.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'interpersonal-ccrt',
      presetId: 'authority-defiance-loop',
      buttonLabel: 'Explore Role Reversal in CCRT Simulator',
    },
  },
  {
    id: 'neuropsychoanalysis-affect',
    name: 'Affective Neuroscience & The Conscious Id',
    subtitle: 'Panksepp & Solms’s Discovery of the 7 Subcortical Emotional Drive Systems',
    lens: 'relational-empirical',
    category: 'Empirical & Clinical Framework',
    tenSecondIntuition:
      'Modern neuroscience vindicated—and updated—core psychodynamic theory. Jaak Panksepp and Mark Solms proved that raw emotions are generated deep in ancient subcortical brainstem circuits conserved across all mammals: SEEKING, RAGE, FEAR, LUST, CARE, PANIC/GRIEF (attachment separation), and PLAY. Psychodynamics is the study of how our thinking cortex learns to regulate and satisfy these 7 biological emotional needs in the real world.',
    clinicalVignette:
      'Depression following heartbreak is not a random "serotonin deficiency"—it is the chronic activation of the mammalian PANIC/GRIEF separation-distress circuit shutting down the dopaminergic SEEKING system to prevent fruitless searching.',
    ideaVsAffect: {
      rawImpulseExample: 'Endogenous homeostatic emotional needs arising from the upper brainstem (PAG).',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'Cortical memory systems build predictive action programs ("how to meet my needs without getting hurt").',
      affectFate: 'Conscious',
      affectDescription: 'Affect is intrinsically conscious ("feelings are how we experience homeostatic unmet needs").',
      consciousOutput: 'Integrated emotional vitality when predictions work; chronic anxiety/depression when early predictions fail.',
    },
    pdm2Context:
      'Provides the neurobiological foundation for PDM-2’s emphasis on primary affect regulation and attachment.',
    foundationalOrigin: {
      theorist: 'Jaak Panksepp & Mark Solms',
      year: '1998 / 2015 / 2021',
      seminalWork: 'Affective Neuroscience (Panksepp, 1998); The Hidden Spring: A Journey to the Source of Consciousness (Solms, 2021)',
      originalFormulation:
        'Integrated Karl Friston’s Free Energy Principle with Panksepp’s 7 subcortical affective command systems to form modern Neuropsychoanalysis.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Affective Neuroscience Personality Scales (ANPS) & Hydranencephaly Studies',
        citation: 'Davis & Panksepp (2011); Solms & Panksepp (2012); Damasio (2010)',
        findingOrOperationalization:
          'Clinical lesion studies show that children born without a cerebral cortex (hydranencephaly) still display full primary emotional responses (joy, play, separation protest) via intact subcortical circuits—proving affect is subcortical.',
      },
    ],
    relatedConceptIds: [
      'structural-model',
      'triangle-of-conflict',
      'internal-working-models',
      'pdm2-framework',
    ],
    confusedWith: [
      {
        targetConceptId: 'structural-model',
        sharedSurface: 'Both map the biological engine of drives vs. cortical executive control.',
        keyDistinction:
          'Freud assumed the Id was completely unconscious and the Cortex produced consciousness; Solms proved the subcortical Id IS the fountainhead of raw conscious feeling, while cortical Ego predictions run mostly unconsciously!',
        thisConceptRule: 'Modern neurobiological map: 7 subcortical conscious affective drives + unconscious cortical predictions.',
        otherConceptRule: 'Classical 1923 structural map: Id, Ego, and Superego.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'sublimation',
      buttonLabel: 'Route Subcortical Affect in Switchboard',
    },
  },
];
