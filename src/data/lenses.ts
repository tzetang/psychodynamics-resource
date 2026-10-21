import { PsychodynamicLens, UnifiedCaseScenario } from '../types/psychodynamics';

export const FIVE_LENSES: PsychodynamicLens[] = [
  {
    id: 'drive-conflict',
    order: 1,
    name: 'Drive & Conflict Theory',
    shortName: '1. Drive & Conflict',
    eraSummary: '1890s–1920s • Classical Psychoanalysis',
    cameraFocalMetaphor: 'Zoomed inside the individual psyche: forbidden biological instincts colliding with internalized moral prohibitions.',
    coreQuestion: 'What taboo wish, anger, or desire is clashing with conscience right now—and what symptom is the compromise?',
    plainEnglishOverview:
      'The original wave of psychodynamics proposes that the human mind is never completely at peace with itself. Biological and emotional drives (desire, rage, ambition, longing) press for expression, but expressing them raw threatens social punishment or guilt. The mind resolves this collision outside of awareness, often producing symptoms, slips, or inhibitions as a "compromise formation" that partially expresses both the wish and the punishment.',
    historicalShiftFromPrior:
      'Shifted 19th-century neurology and psychiatry away from viewing hysteria and neurosis as purely degenerate brain lesions, discovering instead that symptoms carry symbolic meaning rooted in unconscious emotional conflict.',
    whatMotivatesBehavior:
      'Endogenous affective/instinctual drives (libidinal seeking, attachment longing, aggressive self-assertion) seeking discharge and gratification.',
    whySufferingHappens:
      'When an unconscious wish is judged dangerous or unacceptable by internalized prohibitions, triggering signal anxiety and forcing the wish into hiding—where it leaks out as a disguised symptom.',
    howChangeHappens:
      'Making the unconscious conflict conscious: tracing the symptom back to the warded-off wish and guilt so the adult mind can choose deliberately rather than via automatic repression.',
    foundationalTheorists: [
      {
        name: 'Sigmund Freud',
        era: '1856–1939',
        keyContribution: 'Topographical (Unconscious/Preconscious/Conscious) and Structural (Id/Ego/Superego) models; Signal Anxiety (1926); Compromise Formation.',
      },
      {
        name: 'Karl Abraham',
        era: '1877–1925',
        keyContribution: 'Linked early developmental stages of drive organization to depression, mourning, and character structure.',
      },
      {
        name: 'Charles Brenner',
        era: '1913–2008',
        keyContribution: 'Modern Conflict Theory: showed that every thought, symptom, and character trait is a multi-layered compromise formation between wish, anxiety, defense, and superego.',
      },
    ],
    modernEmpiricalExtensions: [
      {
        name: 'Neuropsychoanalysis & Affective Neuroscience',
        researchers: 'Mark Solms & Jaak Panksepp (2015, 2021)',
        summary: 'Demonstrated that Freud’s "Id" corresponds to conscious subcortical brainstem affective command systems (SEEKING, RAGE, FEAR, PANIC/GRIEF, CARE, LUST, PLAY) rather than the cortex.',
      },
      {
        name: 'Intensive Short-Term Dynamic Psychotherapy (ISTDP)',
        researchers: 'Habib Davanloo & Allan Abbass (2015)',
        summary: 'Empirically validated, video-recorded therapy using Malan’s Triangle of Conflict to help patients experience blocked core emotions directly, resolving somatization and treatment-resistant depression.',
      },
    ],
    colorAccent: 'rose',
    badgeClasses: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
    coreConceptIds: [
      'triangle-of-conflict',
      'compromise-formation',
      'signal-anxiety',
      'repression',
      'structural-model',
      'displacement',
      'somatization',
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'repression',
      buttonLabel: 'Simulate Conflict & Repression in Switchboard',
    },
  },
  {
    id: 'ego-psychology',
    order: 2,
    name: 'Ego Psychology & Defense Mechanisms',
    shortName: '2. Ego & Defenses',
    eraSummary: '1930s–1960s • Adaptive & Defensive Functions',
    cameraFocalMetaphor: 'Focused on the mind’s executive "traffic controller" and the ingenious filters it uses to route Ideas vs. Affects.',
    coreQuestion: 'How is this person’s mind automatically filtering, distorting, or rerouting painful reality and emotion to stay safe?',
    plainEnglishOverview:
      'Instead of staring only at buried taboo wishes, Ego Psychology turned the spotlight onto the part of the mind that does the hiding and adapting: the Ego. Anna Freud and her successors mapped out the specific catalogue of defense mechanisms—from immature reality distortion (denial, projection) to neurotic filtering (isolation of affect, intellectualization, reaction formation) to mature mastery (humor, sublimation).',
    historicalShiftFromPrior:
      'Moved from "excavating buried Id content" to analyzing the Ego’s defensive armor and adaptive capacities (impulse regulation, reality testing, affect tolerance).',
    whatMotivatesBehavior:
      'Maintaining psychological equilibrium, minimizing overwhelming signal anxiety, and adapting effectively to external reality.',
    whySufferingHappens:
      'Defenses that once protected a child in an overwhelming environment become rigid, automatic adult habits that block intimacy, vitality, or accurate reality testing.',
    howChangeHappens:
      'Helping the person notice their defenses in real time ("Look how quickly you turned that sadness into a joke"), strengthening ego capacity, and shifting from rigid/immature defenses toward flexible, mature ones.',
    foundationalTheorists: [
      {
        name: 'Anna Freud',
        era: '1895–1982',
        keyContribution: 'The Ego and the Mechanisms of Defence (1936): systematically classified defenses and showed how they separately manipulate Ideas vs. Affects.',
      },
      {
        name: 'Heinz Hartmann',
        era: '1894–1970',
        keyContribution: 'Ego Psychology and the Problem of Adaptation (1939): introduced the "conflict-free ego sphere" (memory, perception, synthesis).',
      },
      {
        name: 'George Vaillant',
        era: '1934–present',
        keyContribution: 'Organized defenses into a developmental continuum from Psychotic/Immature to Neurotic to Mature across the 75-year Harvard Grant Study.',
      },
    ],
    modernEmpiricalExtensions: [
      {
        name: 'Defense Mechanism Rating Scale (DMRS)',
        researchers: 'J. Christopher Perry (1990) & Mariagrazia Di Giuseppe (2020)',
        summary: 'Gold-standard observer-rated 7-level hierarchy of 30 defense mechanisms; empirically predicts symptom severity, alliance, and treatment outcome.',
      },
      {
        name: 'Harvard Study of Adult Development',
        researchers: 'George Vaillant (1977, 1993)',
        summary: 'Longitudinal tracking over 75+ years proved that maturity of defense mechanisms (sublimation, humor, suppression, altruism) strongly predicts late-life mental health, relationship satisfaction, and physical longevity.',
      },
    ],
    colorAccent: 'amber',
    badgeClasses: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
    coreConceptIds: [
      'isolation-of-affect',
      'intellectualization',
      'reaction-formation',
      'projection',
      'sublimation',
      'suppression',
      'rationalization',
      'undoing',
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'isolation-of-affect',
      buttonLabel: 'Explore Idea vs. Affect Routing in Switchboard',
    },
  },
  {
    id: 'object-relations',
    order: 3,
    name: 'Object Relations Theory',
    shortName: '3. Object Relations',
    eraSummary: '1940s–1970s • British & American Schools',
    cameraFocalMetaphor: 'Focused on the "Internal Theater": the cast of internalized Self-and-Other relationships playing out inside the mind.',
    coreQuestion: 'Who is the "Internal Self" and who is the "Internal Other" on stage right now—and can they hold good and bad together without splitting?',
    plainEnglishOverview:
      'In psychodynamic jargon, an "object" is not a thing—it is a person (specifically, the target of attachment and relational longing). Object Relations theorists discovered that humans are fundamentally relationship-seeking rather than mere pleasure-seeking machines. As children, we internalize early caregiver interactions as enduring mental templates consisting of three parts: a Self-Representation, an Object-Representation, and the Affect linking them. Under stress, we may "split" people into All-Good rescuers or All-Bad persecutors.',
    historicalShiftFromPrior:
      'Replaced Freud’s solitary biological drive-discharge model with Fairbairn’s revolutionary dictum: "Libido is not primarily pleasure-seeking, Display-seeking; it is object-seeking."',
    whatMotivatesBehavior:
      'The fundamental human need for attachment, human connection, and preserving ties to internalized figures (even painful ones).',
    whySufferingHappens:
      'Early relational trauma or inconsistency leaves the internal world fractured into extreme "All-Good" and "All-Bad" split dyads (Paranoid-Schizoid position), causing volatile relationship swings and terror of abandonment.',
    howChangeHappens:
      'Integrating split "All-Good" and "All-Bad" representations into whole, realistic, nuanced views of self and others (Klein’s Depressive Position / Object Constancy).',
    foundationalTheorists: [
      {
        name: 'Melanie Klein',
        era: '1882–1960',
        keyContribution: 'Paranoid-Schizoid Position (splitting, projection, idealization) vs. Depressive Position (integration, ambivalence, reparation); Projective Identification.',
      },
      {
        name: 'Donald Winnicott',
        era: '1896–1971',
        keyContribution: 'Good-Enough Mothering, Holding Environment, Transitional Objects, and True Self vs. compliant False Self.',
      },
      {
        name: 'W.R.D. Fairbairn & Otto Kernberg',
        era: '1889–1964 / 1928–present',
        keyContribution: 'Fairbairn formulated the Moral Defense and internal saboteur; Kernberg synthesized Object Relations with Ego Psychology via Self-Object-Affect dyads.',
      },
    ],
    modernEmpiricalExtensions: [
      {
        name: 'Transference-Focused Psychotherapy (TFP)',
        researchers: 'Otto Kernberg, Frank Yeomans, Kenneth Levy (2006, 2015)',
        summary: 'Randomized controlled trials show TFP significantly increases attachment security and reflective functioning in Borderline Personality Organization by integrating split Self-Object-Affect dyads.',
      },
      {
        name: 'Social Cognition and Object Relations Scale (SCORS)',
        researchers: 'Drew Westen (1991, 1998)',
        summary: 'Empirically measures complexity of representations of people, affect-tone of relationship paradigms, and capacity for emotional investment.',
      },
    ],
    colorAccent: 'violet',
    badgeClasses: 'bg-violet-500/15 text-violet-300 border-violet-500/30',
    coreConceptIds: [
      'splitting',
      'projective-identification',
      'paranoid-schizoid-position',
      'depressive-position',
      'object-constancy',
      'true-false-self',
      'holding-environment',
    ],
    linkedPlayground: {
      playgroundId: 'object-theater',
      presetId: 'mild-criticism',
      buttonLabel: 'Open Internal Object Theater (Splitting vs. Integration)',
    },
  },
  {
    id: 'self-psychology',
    order: 4,
    name: 'Self Psychology',
    shortName: '4. Self Psychology',
    eraSummary: '1970s–1980s • Heinz Kohut & Self-Cohesion',
    cameraFocalMetaphor: 'Focused on the structural integrity of the Self: how empathy, mirroring, and idealization prevent shame and fragmentation.',
    coreQuestion: 'How fragile or cohesive does this person’s sense of self-worth feel—and what empathetic nutrient was missing when they armored up?',
    plainEnglishOverview:
      'Heinz Kohut noticed that many patients were not suffering from guilt over taboo sexual or aggressive wishes—they were suffering from feeling empty, fraudulent, hypersensitive to slights, or prone to shame and collapse. Self Psychology explains that just as the body needs oxygen throughout life, the human psyche needs ongoing empathetic responses from others ("selfobjects") who validate our worth (Mirroring), offer calm strength to look up to (Idealizing), and make us feel part of the human tribe (Twinship).',
    historicalShiftFromPrior:
      'Shifted clinical posture from suspicious "unmasking of hidden drives" to sustained empathic immersion, recognizing that narcissistic rage and grandiosity are desperate attempts to hold a fragmenting self together.',
    whatMotivatesBehavior:
      'Maintaining a cohesive, vital, continuous sense of Self and fulfilling one’s nuclear ambitions and ideals.',
    whySufferingHappens:
      'Chronic empathetic failures in childhood prevent the development of internal self-soothing, leaving the adult dependent on external approval and vulnerable to shame, depletion, or narcissistic rage when slighted.',
    howChangeHappens:
      'Through "Transmuting Internalization": experiencing deep empathy followed by manageable, non-traumatic micro-disappointments that allow the person to gradually build their own internal self-esteem regulation.',
    foundationalTheorists: [
      {
        name: 'Heinz Kohut',
        era: '1913–1981',
        keyContribution: 'The Analysis of the Self (1971); Selfobject needs (Mirroring, Idealizing, Twinship); Narcissistic Rage; Transmuting Internalization.',
      },
      {
        name: 'Ernest Wolf',
        era: '1921–2018',
        keyContribution: 'Systematized selfobject transferences and the clinical repair of empathic ruptures.',
      },
    ],
    modernEmpiricalExtensions: [
      {
        name: 'Pathological Narcissism Inventory (PNI) & Shame Research',
        researchers: 'Aaron Pincus & Michael Lukowitsky (2010)',
        summary: 'Empirically validated Kohut’s clinical observation that narcissistic grandiosity and narcissistic vulnerability/shame oscillate within the same individual.',
      },
      {
        name: 'Alliance Rupture & Repair Research',
        researchers: 'Jeremy Safran & J. Christopher Muran (2000)',
        summary: 'Demonstrated empirically that noticing and empathically repairing relational micro-ruptures in therapy is one of the strongest predictors of clinical improvement.',
      },
    ],
    colorAccent: 'cyan',
    badgeClasses: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30',
    coreConceptIds: [
      'selfobject-needs',
      'transmuting-internalization',
      'narcissistic-vulnerability',
      'true-false-self',
      'devaluation-idealization',
    ],
    linkedPlayground: {
      playgroundId: 'object-theater',
      presetId: 'praise-deflation',
      buttonLabel: 'Simulate Idealization & Self-Esteem Collapse',
    },
  },
  {
    id: 'relational-empirical',
    order: 5,
    name: 'Relational, Attachment & Empirical Psychodynamics',
    shortName: '5. Relational & Empirical',
    eraSummary: '1980s–Present • Two-Person Psychology & Neuroscience',
    cameraFocalMetaphor: 'Zoomed out to the Two-Person Relational Field: how two minds unconsciously pull each other into recurring interpersonal loops.',
    coreQuestion: 'What repetitive interpersonal dance (Wish → Expected Response from Other → Self Response) is being enacted between us right now?',
    plainEnglishOverview:
      'The modern wave integrates Attachment Theory, Relational Psychoanalysis, and rigorous empirical research. Instead of viewing the therapist or partner as a neutral blank screen, it recognizes a "Two-Person Psychology": our unconscious expectations actively shape how we treat others, subtly nudging them to act in ways that confirm our deepest fears (Enactments). Modern tools like Luborsky’s CCRT and Fonagy’s Mentalization (MBT) make these loops observable, measurable, and changeable.',
    historicalShiftFromPrior:
      'Moved from a "One-Person Psychology" (observing an isolated mind under a microscope) to a "Two-Person Field" where interpersonal patterns are co-constructed—and backed by RCTs, attachment studies, and affective neuroscience.',
    whatMotivatesBehavior:
      'Attachment security, epistemic trust, mutual recognition, and making sense of one’s own and others’ mental states (Mentalization).',
    whySufferingHappens:
      'Rigid interpersonal templates (CCRTs) and attachment insecurities cause the person to misread others’ intentions under arousal and unconsciously provoke the very rejection or control they dread.',
    howChangeHappens:
      'Catching the interpersonal enactment in the room with curiosity rather than blame, restoring Mentalization (thinking about feeling and feeling about thinking), and creating a new corrective relational experience.',
    foundationalTheorists: [
      {
        name: 'John Bowlby & Mary Main',
        era: '1907–1990 / 1943–2023',
        keyContribution: 'Attachment Theory, Internal Working Models, and the Adult Attachment Interview (AAI).',
      },
      {
        name: 'Stephen Mitchell & Jessica Benjamin',
        era: '1946–2000 / 1946–present',
        keyContribution: 'Relational Matrix, Two-Person Enactments, and Intersubjectivity ("Thirdness" vs. "Doer and Done-To" complementarity).',
      },
      {
        name: 'Lester Luborsky, Peter Fonagy & Jonathan Shedler',
        era: 'Contemporary Empirical Wave',
        keyContribution: 'Operationalized CCRT, Mentalization / Reflective Functioning (MBT), PDM-2, and meta-analytic proof of psychodynamic efficacy.',
      },
    ],
    modernEmpiricalExtensions: [
      {
        name: 'Core Conflictual Relationship Theme (CCRT)',
        researchers: 'Lester Luborsky & Paul Crits-Christoph (1990, 1998)',
        summary: 'Quantitative narrative coding method extracting Wish (W), Response from Other (RO), and Response of Self (RS) from relationship episodes with high inter-rater reliability.',
      },
      {
        name: 'Mentalization-Based Treatment (MBT) & Reflective Functioning',
        researchers: 'Peter Fonagy & Anthony Bateman (2004, 2016)',
        summary: 'Empirically validated model showing how attachment hyperactivation shuts down prefrontal mentalizing capacity.',
      },
      {
        name: 'The Efficacy of Psychodynamic Psychotherapy',
        researchers: 'Jonathan Shedler (American Psychologist, 2010) & Leichsenring (2023)',
        summary: 'Landmark meta-analytic synthesis demonstrating psychodynamic therapy effect sizes (d = 0.97) equal or exceed other therapies, with benefits uniquely continuing to grow after treatment ends.',
      },
    ],
    colorAccent: 'emerald',
    badgeClasses: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    coreConceptIds: [
      'ccrt',
      'transference',
      'countertransference',
      'enactment',
      'mentalization',
      'corrective-emotional-experience',
      'pdm2-framework',
      'dmrs-hierarchy',
    ],
    linkedPlayground: {
      playgroundId: 'interpersonal-ccrt',
      presetId: 'closeness-preemptive-withdrawal',
      buttonLabel: 'Launch Interpersonal CCRT Loop Simulator',
    },
  },
];

export const UNIFIED_CASE_SCENARIOS: UnifiedCaseScenario[] = [
  {
    id: 'intimacy-pullback',
    title: 'Case 1: Pulling Away Right When a Relationship Deepens',
    presentingSituation:
      'Maya (32) has been dating a warm, dependable partner for four months. The weekend after her partner says "I’m falling in love with you," Maya suddenly feels irritated by how he chews his food, picks a cold intellectual argument about his career ambition, and considers ending the relationship.',
    surfaceSymptom: 'Sudden emotional numbing, hyper-criticism, and urge to flee after intimacy increases.',
    formulationsByLens: {
      'drive-conflict': {
        headline: 'Closeness Triggers Forbidden Longing & Signal Anxiety',
        unconsciousDynamic:
          'Deep emotional closeness activates intense unconscious longings for merger alongside buried anger/guilt toward early figures. Signal anxiety warns that yielding to desire is dangerous; picking a fight serves as a compromise formation that discharges tension while restoring distance.',
        clinicalFocus: 'Explore the anxiety that spiked immediately after hearing "I love you" and the taboo feelings beneath the irritation.',
        keyConceptId: 'signal-anxiety',
      },
      'ego-psychology': {
        headline: 'Isolation of Affect, Intellectualization & Fault-Finding',
        unconsciousDynamic:
          'Maya’s ego automatically deploys Isolation of Affect (numbing her tender feelings) and Rationalization/Devaluation (focusing on his career and chewing) to keep vulnerability out of consciousness.',
        clinicalFocus: 'Gently point out the timing of the defense: how her mind switched from feeling moved on Sunday to analyzing his flaws on Monday.',
        keyConceptId: 'isolation-of-affect',
      },
      'object-relations': {
        headline: 'Flip from Idealized Object to Suffocating/Disappointing Object',
        unconsciousDynamic:
          'Closeness threatens to awaken an internal template of a needy, engulfing, or eventually abandonar caregiver. To protect herself, Maya flips the partner from the "All-Good Idealized" compartment into the "Flawed/Suffocating" compartment (Splitting).',
        clinicalFocus: 'Help Maya hold both images of her partner at the same time—capable of loving her AND having ordinary human flaws—without needing to demolish him.',
        keyConceptId: 'splitting',
      },
      'self-psychology': {
        headline: 'Fear of Shame and Re-Traumatization of a Vulnerable Self',
        unconsciousDynamic:
          'Letting someone matter deeply gives them the power to crush Maya’s self-esteem if they ever fail to mirror her. Dismissing him first restores a sense of autonomous self-sufficiency and shields her from devastating shame.',
        clinicalFocus: 'Empathize with how terrifying it feels to hand someone the power to hurt her pride and sense of self-cohesion.',
        keyConceptId: 'narcissistic-vulnerability',
      },
      'relational-empirical': {
        headline: 'Self-Fulfilling CCRT Enactment & Loss of Mentalization',
        unconsciousDynamic:
          'Maya’s CCRT: Wish (to be deeply loved) → Expected Response from Other (they will control or reject me once they see the real me) → Response of Self (attack and withdraw first). By acting cold, she inadvertently pulls her partner to become hurt and distant—confirming her template.',
        clinicalFocus: 'Map the 4-step interpersonal loop and restore mentalizing curiosity about what both she and her partner were feeling in that moment.',
        keyConceptId: 'ccrt',
      },
    },
  },
  {
    id: 'perfectionist-burnout',
    title: 'Case 2: Chronic Overwork, People-Pleasing & Sudden Somatization',
    presentingSituation:
      'David (29), a software lead, never says no to extra requests from his director. When a less-qualified peer is promoted over him, David smiles, congratulates everyone warmly, works until 2 AM helping the peer onboard, and develops severe tension migraines and stomach spasms.',
    surfaceSymptom: 'Compulsive helpfulness, inability to feel anger, and acute physical symptoms.',
    formulationsByLens: {
      'drive-conflict': {
        headline: 'Repressed Rage Routing into the Body (Somatization)',
        unconsciousDynamic:
          'Passing David over triggered intense retaliatory rage toward his boss. Because a punitive Superego equates anger with being a "destructive, bad person," the rage is blocked from consciousness and discharged through striated muscle tension and GI autonomic pathways.',
        clinicalFocus: 'Use Malan’s Triangle of Conflict to help David physically feel the visceral anger in his chest/jaw without equating feeling angry with harming anyone.',
        keyConceptId: 'triangle-of-conflict',
      },
      'ego-psychology': {
        headline: 'Reaction Formation & Undoing Under High Stress',
        unconsciousDynamic:
          'David’s ego converts an unacceptable impulse ("I hate my boss and rival") into its exact behavioral opposite—excessive warmth and working until 2 AM to help the rival (Reaction Formation).',
        clinicalFocus: 'Examine the cost of his extreme niceness and expand his ego tolerance for healthy, assertive displeasure.',
        keyConceptId: 'reaction-formation',
      },
      'object-relations': {
        headline: 'Compliant "False Self" Preserving Tie to a Conditional Object',
        unconsciousDynamic:
          'Following Winnicott and Fairbairn, David operates through a compliant False Self. Internally, he believes attachment only survives if he is tirelessly useful; any protest risks total abandonment by the internalized authority figure.',
        clinicalFocus: 'Provide a holding environment where David’s authentic disappointment and "True Self" needs are welcomed rather than exploited.',
        keyConceptId: 'true-false-self',
      },
      'self-psychology': {
        headline: 'Dependence on External Mirroring to Prevent Self-Depletion',
        unconsciousDynamic:
          'David relies on being the "indispensable hero" at work as an external selfobject prop to regulate his self-worth. Being passed over punctured that mirroring supply, leaving him depleted and overworking frantically to win back validation.',
        clinicalFocus: 'Validate the narcissistic injury of being overlooked and build internal self-worth independent of constant productivity.',
        keyConceptId: 'selfobject-needs',
      },
      'relational-empirical': {
        headline: 'Doer-and-Done-To Complementarity in the Workplace & Therapy',
        unconsciousDynamic:
          'David’s deferential, self-effacing signals unintentionally train colleagues (and potentially his therapist) to take him for granted—recreating the exact dynamic where his needs are invisible.',
        clinicalFocus: 'Notice how David even tries to be the "model, effortless patient" in session, inviting him to take up space and express dissatisfaction safely.',
        keyConceptId: 'enactment',
      },
    },
  },
  {
    id: 'mentor-criticism-spiral',
    title: 'Case 3: Collapse and Fury After Constructive Feedback',
    presentingSituation:
      'Elena (25), a graduate researcher, receives a draft back from her advisor with mostly praise and three paragraphs of direct critique. She immediately feels her advisor secretly despises her, decides her entire thesis is garbage, and drafts a scorching email accusing the advisor of bad faith.',
    surfaceSymptom: 'All-or-nothing evaluation of self and mentor following ordinary critique.',
    formulationsByLens: {
      'drive-conflict': {
        headline: 'Harsh Superego Attack Externalized Onto the Advisor',
        unconsciousDynamic:
          'Elena’s own savage internal critic (Superego) attacks her for any imperfection. Because the internal guilt/shame is unbearable, she attributes the hostility outward onto the advisor ("She hates me").',
        clinicalFocus: 'Differentiate Elena’s punitive internal standard from the advisor’s actual balanced feedback.',
        keyConceptId: 'structural-model',
      },
      'ego-psychology': {
        headline: 'Regression to Projection and Devaluation Under Ego Threat',
        unconsciousDynamic:
          'The spike in shame temporarily overwhelms Elena’s higher-level defenses, triggering a shift down the DMRS hierarchy toward Projection (attributing hostility to the advisor) and Devaluation (declaring the project and mentor worthless).',
        clinicalFocus: 'Pause the impulsive action (sending the email) so ego reality-testing can recover.',
        keyConceptId: 'projection',
      },
      'object-relations': {
        headline: 'Loss of Object Constancy & Paranoid-Schizoid Splitting',
        unconsciousDynamic:
          'Under stress, the splitting barrier activates: the advisor flips instantaneously from an "All-Good Mentor" to an "All-Bad Persecutor," and Elena flips from "Brilliant Star" to "Total Fraud."',
        clinicalFocus: 'Foster Depressive Position integration: helping Elena access memory of the advisor’s goodwill alongside the frustration of the red ink.',
        keyConceptId: 'paranoid-schizoid-position',
      },
      'self-psychology': {
        headline: 'Empathic Rupture Triggering Fragmentation & Narcissistic Rage',
        unconsciousDynamic:
          'Elena experienced the advisor as an idealized selfobject holding her fragile academic confidence together. The blunt critique felt like a sudden withdrawal of attunement; her scorching email is Narcissistic Rage aimed at restoring agency over a fragmenting self.',
        clinicalFocus: 'Acknowledge the sting of the rupture first before analyzing the defensive rage.',
        keyConceptId: 'transmuting-internalization',
      },
      'relational-empirical': {
        headline: 'Hyperactivation Shutting Down Prefrontal Mentalization',
        unconsciousDynamic:
          'Attachment threat pushed Elena above her arousal threshold, switching off reflective functioning (MBT) and putting her into "Psychic Equivalence Mode" ("Because I feel humiliated, it is an objective fact that she wants me to fail").',
        clinicalFocus: 'Re-ignite mentalizing curiosity: "What are three other possible states of mind your advisor might have been in when writing those notes?"',
        keyConceptId: 'mentalization',
      },
    },
  },
];
