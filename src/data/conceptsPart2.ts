import { PsychodynamicConcept } from '../types/psychodynamics';

export const CONCEPTS_PART_2: PsychodynamicConcept[] = [
  // ============================================================================
  // LENS 3: OBJECT RELATIONS THEORY
  // ============================================================================
  {
    id: 'splitting',
    name: 'Splitting',
    subtitle: 'Dividing Self and Others Into "All-Good" or "All-Bad" Compartments',
    lens: 'object-relations',
    category: 'Defense Mechanism',
    dmrsLevel: 2,
    dmrsLevelName: 'Level 2: Major Image-Distorting (Borderline)',
    tenSecondIntuition:
      'When holding mixed feelings ("I love you AND I’m furious at you right now") feels like the good will be destroyed by the bad, the mind builds a wall: people are either 100% soulmate angels or 100% toxic monsters—and can flip in a second.',
    clinicalVignette:
      'On Tuesday, a patient tells her therapist "You’re the only person who has ever understood me." On Thursday, when the therapist starts 3 minutes late, she says "You’re a cold, greedy fraud who never cared."',
    ideaVsAffect: {
      rawImpulseExample: 'Frustration at someone you also deeply need and love.',
      ideaFate: 'Split / Compartmentalized',
      ideaDescription: 'Positive memories and representations of the person are completely walled off from current awareness; only the all-bad or all-good image exists.',
      affectFate: 'Amplified / Split',
      affectDescription: 'Pure unmodulated rage/terror or pure idealized euphoria floods consciousness with zero ambivalent softening.',
      consciousOutput: 'Absolute certainty that the other (or oneself) is entirely wonderful or entirely malicious.',
    },
    pdm2Context:
      'Central mechanism of Borderline Personality Organization on the PDM-2 P-Axis and DMRS Level 2 Major Image-Distorting defenses.',
    foundationalOrigin: {
      theorist: 'Melanie Klein, Ronald Fairbairn & Otto Kernberg',
      year: '1946 / 1975',
      seminalWork: 'Notes on Some Schizoid Mechanisms (Klein, 1946); Borderline Conditions and Pathological Narcissism (Kernberg, 1975)',
      originalFormulation:
        'Klein showed that the early ego protects the "Good Breast/Object" from being contaminated by persecutory rage toward the frustrating "Bad Object" by keeping them actively split apart.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Transference-Focused Psychotherapy (TFP) & DMRS Level 2',
        citation: 'Kernberg et al. (2008); Levy et al. (2006, J. Consulting & Clinical Psychology)',
        findingOrOperationalization:
          'RCT comparing TFP, DBT, and supportive therapy demonstrated that TFP uniquely increased Reflective Functioning (RF) and resolved split internal representations into integrated narratives.',
      },
    ],
    relatedConceptIds: [
      'paranoid-schizoid-position',
      'depressive-position',
      'projective-identification',
      'object-constancy',
      'devaluation-idealization',
    ],
    confusedWith: [
      {
        targetConceptId: 'repression',
        sharedSurface: 'Both keep conflicting mental contents separated.',
        keyDistinction:
          'Repression is a horizontal barrier pushing a forbidden idea permanently underground into the unconscious; Splitting is a vertical wall keeping two conscious states ("I adore you" / "I hate you") from meeting at the same time.',
        thisConceptRule: 'Vertical division (Level 2): alternates consciously between All-Good and All-Bad extremes.',
        otherConceptRule: 'Horizontal barrier (Level 5): banishes the forbidden idea beneath conscious awareness.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'object-theater',
      presetId: 'mild-criticism',
      buttonLabel: 'Dissolve the Splitting Barrier in Object Theater',
    },
  },
  {
    id: 'projective-identification',
    name: 'Projective Identification',
    subtitle: 'Projecting a Split-Off Part AND Pressuring the Other to Enact It',
    lens: 'object-relations',
    category: 'Relational & Transference',
    dmrsLevel: 2,
    dmrsLevelName: 'Level 2: Major Image-Distorting (Borderline)',
    tenSecondIntuition:
      'Projection with interpersonal teeth: you don’t just think the other person is angry or controlling—you unconsciously behave in ways that actually provoke and pressure them until they start feeling and acting exactly like the figure you feared.',
    clinicalVignette:
      'Convinced a colleague despises him, Alex speaks to her in a guarded, sarcastic, accusing tone until the previously friendly colleague finally snaps in irritation—prompting Alex to think, "See? I knew she hated me from the start!"',
    ideaVsAffect: {
      rawImpulseExample: 'Intolerable internal hostility, helplessness, or shame.',
      ideaFate: 'Attributed to Other',
      ideaDescription: 'An intolerable self- or object-representation is relocated into the other person.',
      affectFate: 'Projected / Induced in Other',
      affectDescription: 'Through subtle vocal, non-verbal, and behavioral pressure, the affect is induced inside the other person ("interpersonal induction").',
      consciousOutput: 'Feeling like the innocent victim of the other person’s provoked reaction.',
    },
    pdm2Context:
      'Key bridge between intrapsychic defense (DMRS Level 2) and interpersonal enactment in PDM-2 Borderline and Severe Narcissistic dynamics.',
    foundationalOrigin: {
      theorist: 'Melanie Klein, Wilfred Bion & Thomas Ogden',
      year: '1946 / 1959 / 1979',
      seminalWork: 'Notes on Some Schizoid Mechanisms (Klein); On Projective Identification (Ogden, 1979)',
      originalFormulation:
        'Bion and Ogden expanded Klein’s intrapsychic phantasy into a 3-step interpersonal process: (1) projecting an unwanted part into the other, (2) interpersonal pressure inducing the other to feel it, and (3) "containment" and re-internalization if the therapist digests it without retaliating.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Countertransference Questionnaire (CTQ) & Interpersonal Inducement',
        citation: 'Betan, Heim, Zittel Conklin & Westen (2005, American Journal of Psychiatry)',
        findingOrOperationalization:
          'Factor analysis of 181 clinicians showed that borderline projective dynamics reliably induce measurable, predictable countertransference states (overwhelmed/disorganized, mistreated, or idealized) across independent therapists.',
      },
    ],
    relatedConceptIds: [
      'projection',
      'splitting',
      'enactment',
      'countertransference',
      'holding-environment',
    ],
    confusedWith: [
      {
        targetConceptId: 'projection',
        sharedSurface: 'Both involve seeing your own disowned feelings inside another person.',
        keyDistinction:
          'Simple Projection stays inside your own head (the other person doesn’t actually feel what you project); Projective Identification recruits the other person via behavioral pressure until they genuinely feel and act out the projected role.',
        thisConceptRule: 'Two-person induction: you pressure them until they actually feel/act out the projected state.',
        otherConceptRule: 'One-person misperception: you falsely believe they feel X, while they remain unaffected.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'interpersonal-ccrt',
      presetId: 'hypervigilance-hostility-induction',
      buttonLabel: 'Step Through Projective Identification Loop',
    },
  },
  {
    id: 'paranoid-schizoid-position',
    name: 'Paranoid-Schizoid Position',
    subtitle: 'The Psychological Mode of Splitting, Threat, and Part-Objects',
    lens: 'object-relations',
    category: 'Internal Object & Position',
    tenSecondIntuition:
      'Not an illness, but a fundamental mode of human experience we all slip into when terrified or betrayed: a black-and-white world of heroes vs. villains, where the primary anxiety is "Who is trying to hurt or betray me?"',
    clinicalVignette:
      'During a bitter divorce or online flame war, nuance vanishes: any attempt to see the other person’s complexity feels like treason, and only total vindication feels safe.',
    ideaVsAffect: {
      rawImpulseExample: 'Overwhelming threat, betrayal, or helplessness.',
      ideaFate: 'Split / Compartmentalized',
      ideaDescription: 'People are experienced as "part-objects" (purely gratifying functions or purely persecutory threats) rather than whole human beings.',
      affectFate: 'Amplified / Split',
      affectDescription: 'Persecutory anxiety, righteous fury, and omnipotent certainty dominate.',
      consciousOutput: 'Us-vs-Them certainty, inability to mourn or feel remorse, and craving for retaliation.',
    },
    pdm2Context:
      'Describes the structural organization of mind when operating at lower/borderline levels of personality organization under stress.',
    foundationalOrigin: {
      theorist: 'Melanie Klein',
      year: '1946',
      seminalWork: 'Notes on Some Schizoid Mechanisms',
      originalFormulation:
        'Named "paranoid" for the predominant persecutory anxiety (fear of attack from the bad object) and "schizoid" for the central mechanism of splitting self and object.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Reflective Functioning & Psychic Equivalence Mode',
        citation: 'Fonagy & Target (1996); Kernberg (2004)',
        findingOrOperationalization:
          'Empirical attachment studies map Klein’s Paranoid-Schizoid position onto "Psychic Equivalence" under high amygdala arousal, where internal fear is equated with external malevolence.',
      },
    ],
    relatedConceptIds: [
      'depressive-position',
      'splitting',
      'projective-identification',
      'object-constancy',
    ],
    confusedWith: [
      {
        targetConceptId: 'depressive-position',
        sharedSurface: 'Both are Kleinian "positions" (lifelong modes of organizing experience rather than Childhood-only stages).',
        keyDistinction:
          'Paranoid-Schizoid is organized around Splitting and fear of harm to the SELF ("They are out to get me"); Depressive Position is organized around Integration and concern for the OTHER ("I can hurt the person I love, and I want to repair it").',
        thisConceptRule: 'Part-objects, splitting, persecutory anxiety, zero ambivalence.',
        otherConceptRule: 'Whole-objects, integration, capacity for ambivalence, mourning, and reparation.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'object-theater',
      presetId: 'friend-cancels',
      buttonLabel: 'Experience Paranoid-Schizoid vs. Depressive Position',
    },
  },
  {
    id: 'depressive-position',
    name: 'Depressive Position',
    subtitle: 'Whole-Object Integration, Ambivalence, Grief, and Reparation',
    lens: 'object-relations',
    category: 'Internal Object & Position',
    tenSecondIntuition:
      'In Kleinian theory, the "Depressive Position" is NOT clinical depression—it is emotional maturity! It is the humbling realization that the person you are furious at is the exact same whole person you love, unlocking empathy, nuance, remorse, and repair.',
    clinicalVignette:
      'After a heated argument with her partner, Elena stays grounded: "I’m really angry that he forgot our anniversary plan, AND I know he loves me and has been overwhelmed this week. We can talk this through."',
    ideaVsAffect: {
      rawImpulseExample: 'Anger and disappointment toward a loved person.',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'The "frustrating object" and the "loved object" are held together in a single, three-dimensional mental representation.',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'Hate is tempered by love, transforming destructive rage into tolerable disappointment, poignant grief, and the wish to repair.',
      consciousOutput: 'Mature ambivalence, gratitude, realistic self-appraisal, and capacity for relationship repair.',
    },
    pdm2Context:
      'Corresponds to healthy/neurotic identity integration and high object constancy on the PDM-2 M-Axis.',
    foundationalOrigin: {
      theorist: 'Melanie Klein',
      year: '1935 / 1940',
      seminalWork: 'A Contribution to the Psychogenesis of Manic-Depressive States; Mourning and Its Relation to Manic-Depressive States',
      originalFormulation:
        'Described the developmental watershed when the child recognizes that the mother they love and the mother they hate in frustration are one and the same person, awakening guilt and the drive for reparation.',
    },
    empiricalResearch: [
      {
        frameworkName: 'SCORS Complexity of Representations & TFP Outcomes',
        citation: 'Westen (1991); Levy et al. (2006)',
        findingOrOperationalization:
          'Higher SCORS scores for integrated, nuanced self-other narratives strongly correlate with secure attachment, lower interpersonal chaos, and successful psychotherapy outcomes.',
      },
    ],
    relatedConceptIds: [
      'paranoid-schizoid-position',
      'object-constancy',
      'splitting',
      'mentalization',
    ],
    confusedWith: [
      {
        targetConceptId: 'paranoid-schizoid-position',
        sharedSurface: 'Both are Kleinian structural positions of the mind.',
        keyDistinction:
          'Depressive Position holds Good + Bad together in one whole person; Paranoid-Schizoid splits Good and Bad into separate compartments.',
        thisConceptRule: 'Integrated whole objects, mature ambivalence, remorse, and reparation.',
        otherConceptRule: 'Split part-objects, black-and-white certainty, and persecutory fear.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'object-theater',
      presetId: 'mild-criticism',
      buttonLabel: 'Slide Into Depressive Position Integration',
    },
  },
  {
    id: 'object-constancy',
    name: 'Object Constancy',
    subtitle: 'Keeping an Internal Emotional Tie When Apart or Angry',
    lens: 'object-relations',
    category: 'Internal Object & Position',
    tenSecondIntuition:
      'Emotional "object permanence": the capacity to still feel loved by and connected to someone even when they are out of sight, busy, or when the two of you are in the middle of a disagreement.',
    clinicalVignette:
      'Without object constancy, an unanswered text for 3 hours feels like the relationship has evaporated ("Out of sight = love is dead"). With object constancy, the internal warmth remains steady across silence or conflict.',
    ideaVsAffect: {
      rawImpulseExample: 'Separation, silence, or temporary frustration with a loved one.',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'A soothing internal representation of the loved person remains accessible in working memory despite frustration.',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'Separation panic and rage are buffered by enduring internal warmth.',
      consciousOutput: 'Ability to tolerate solitude, ambiguity, and disagreement without needing frantic reassurance or burning bridges.',
    },
    pdm2Context:
      'Explicitly assessed under PDM-2 M-Axis Capacity for Relationships and Intimacy (internalized object stability).',
    foundationalOrigin: {
      theorist: 'Margaret Mahler & Heinz Hartmann',
      year: '1968 / 1975',
      seminalWork: 'The Psychological Birth of the Human Infant (Mahler, Pine & Bergman, 1975)',
      originalFormulation:
        'Observed in developmental mother-infant research as the culmination of separation-individuation (around 24–36 months), when the child internalizes a stable, soothing maternal image.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Attachment Security & Evocative Memory Under Stress',
        citation: 'Mikulincer & Shaver (2016); Bowlby (1980)',
        findingOrOperationalization:
          'Experimental priming studies confirm that securely attached adults automatically activate soothing mental representations of attachment figures when exposed to threat stimuli.',
      },
    ],
    relatedConceptIds: [
      'depressive-position',
      'splitting',
      'holding-environment',
      'transmuting-internalization',
    ],
    confusedWith: [
      {
        targetConceptId: 'splitting',
        sharedSurface: 'Both describe what happens to internal images of loved ones during conflict.',
        keyDistinction:
          'Object Constancy is the healthy capacity that prevents Splitting: when you have Object Constancy, anger doesn’t erase your memory of love.',
        thisConceptRule: 'Maintains a stable, loving internal bond even during anger or physical absence.',
        otherConceptRule: 'Erases all positive history the moment frustration or distance occurs.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'object-theater',
      presetId: 'friend-cancels',
      buttonLabel: 'Test Object Constancy During Separation',
    },
  },
  {
    id: 'true-false-self',
    name: 'True Self vs. Compliant False Self',
    subtitle: 'Authentic Spontaneity vs. Protective Caretaker Mask',
    lens: 'object-relations',
    category: 'Developmental & Self',
    tenSecondIntuition:
      'When a child’s caregivers are overwhelmed or conditional, the child learns to hide their spontaneous "True Self" behind a hyper-attuned, polite "False Self" that scans the room and becomes whatever others need—often leaving the adult successful on paper but feeling hollow or unreal inside.',
    clinicalVignette:
      'A widely admired executive confesses in therapy: "Everyone loves my warmth and competence, but I feel like an actor reading lines. When I’m alone on Sunday, I don’t even know what music or food I actually like."',
    ideaVsAffect: {
      rawImpulseExample: 'Spontaneous personal need, messy emotion, or protest.',
      ideaFate: 'Repressed / Blocked',
      ideaDescription: 'Authentic personal desires are subordinated to scanning and fulfilling the expectations of the other.',
      affectFate: 'Suppressed / Numbed',
      affectDescription: 'Vitality and spontaneous feeling are replaced by dutiful compliance and chronic inner emptiness.',
      consciousOutput: 'High social adaptability paired with subjective futility, exhaustion, or feeling like an impostor.',
    },
    pdm2Context:
      'Featured in PDM-2 Narcissistic, Depressive, and Masochistic personality patterns where compliance masks an unmirrored core.',
    foundationalOrigin: {
      theorist: 'Donald Winnicott',
      year: '1960',
      seminalWork: 'Ego Distortion in Terms of True and False Self',
      originalFormulation:
        'Explained that when the mother cannot adapt "good-enough" to the infant’s spontaneous gesture, the infant is forced into premature compliance with the mother’s mood, constructing a defensive False Self to shield the True Self.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Authenticity Scale & Pathological Altruism / Silencing the Self',
        citation: 'Wood et al. (2008); Jack (1991, Silencing the Self Scale)',
        findingOrOperationalization:
          'Empirical research links chronic self-silencing and False-Self compliance to treatment-resistant depression, burnout, and somatic symptoms.',
      },
    ],
    relatedConceptIds: [
      'holding-environment',
      'selfobject-needs',
      'reaction-formation',
      'narcissistic-vulnerability',
    ],
    confusedWith: [
      {
        targetConceptId: 'reaction-formation',
        sharedSurface: 'Both can look like excessive politeness or people-pleasing.',
        keyDistinction:
          'Reaction Formation specifically inverts a forbidden impulse (like rage) into its opposite; a False Self is a broader developmental shell built to manage an environment that couldn’t hold spontaneous vitality.',
        thisConceptRule: 'Developmental shell of compliance that hides spontaneous vitality and needs.',
        otherConceptRule: 'Specific ego defense that converts a taboo impulse (e.g., hate) into its opposite (sweetness).',
      },
    ],
    linkedPlayground: {
      playgroundId: 'interpersonal-ccrt',
      presetId: 'appeasement-invisible-resentment',
      buttonLabel: 'See False-Self Appeasement Loop in CCRT',
    },
  },
  {
    id: 'holding-environment',
    name: 'Holding Environment & Containment',
    subtitle: 'Creating a Psychological Space Safe Enough to Metabolize Raw Emotion',
    lens: 'object-relations',
    category: 'Developmental & Self',
    tenSecondIntuition:
      'Just as an infant needs physical arms so it doesn’t feel like it is falling forever, a person in distress needs a "Holding Environment" (Winnicott) and "Containment" (Bion)—a relationship where raw, terrifying emotions can be expressed, absorbed without retaliation or panic, and handed back in a digestible form.',
    clinicalVignette:
      'When a patient panics and lashes out in session, the therapist neither crumbles nor scolds—staying calm, curious, and steady so the patient realizes their big feelings won’t destroy the relationship.',
    ideaVsAffect: {
      rawImpulseExample: 'Unprocessed "beta-elements" (nameless dread, raw rage, fragmentation).',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'The caregiver/therapist lends their own reflective mind ("alpha-function") to name and organize the chaotic experience.',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'Unbearable affect is co-regulated until the person can hold it inside their own mind.',
      consciousOutput: 'Feeling deeply understood, calmer, and able to think about what just felt unthinkable.',
    },
    pdm2Context:
      'Foundational mechanism of therapeutic action across all PDM-2 structural levels, especially when building basic trust and affect regulation.',
    foundationalOrigin: {
      theorist: 'Donald Winnicott & Wilfred Bion',
      year: '1960 / 1962',
      seminalWork: 'The Theory of the Parent-Infant Relationship (Winnicott); Learning from Experience (Bion)',
      originalFormulation:
        'Winnicott emphasized the protective reliability of the "Holding Environment"; Bion formulated the "Container/Contained" model where the mother digests the infant’s projected terror and returns it as thinkable meaning.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Co-Regulation, Epistemic Trust & Alliance Research',
        citation: 'Fonagy & Allison (2014); Tronick (Still-Face Paradigm, 1978)',
        findingOrOperationalization:
          'Developmental neuroscience confirms that dyadic affect co-regulation directly scaffolds prefrontal-amygdala connectivity and opens "epistemic trust" for social learning.',
      },
    ],
    relatedConceptIds: [
      'true-false-self',
      'projective-identification',
      'corrective-emotional-experience',
      'mentalization',
    ],
    confusedWith: [
      {
        targetConceptId: 'corrective-emotional-experience',
        sharedSurface: 'Both describe healing relational experiences in therapy.',
        keyDistinction:
          'Holding/Containment is the ongoing background safety and emotional digestion of unbearable states; Corrective Emotional Experience is a specific relational moment where the therapist responds differently than the patient’s feared historical figure.',
        thisConceptRule: 'Ongoing emotional scaffolding and digestion of raw affect (Winnicott/Bion).',
        otherConceptRule: 'Disconfirming a specific pathogenic interpersonal expectation in action (Alexander).',
      },
    ],
    linkedPlayground: {
      playgroundId: 'interpersonal-ccrt',
      presetId: 'closeness-preemptive-withdrawal',
      buttonLabel: 'Toggle Therapeutic Containment in CCRT Loop',
    },
  },

  // ============================================================================
  // LENS 4: SELF PSYCHOLOGY
  // ============================================================================
  {
    id: 'selfobject-needs',
    name: 'Selfobject Needs (Mirroring, Idealizing, Twinship)',
    subtitle: 'How Other People Function as "Psychological Oxygen" for Self-Cohesion',
    lens: 'self-psychology',
    category: 'Developmental & Self',
    tenSecondIntuition:
      'Kohut discovered we never outgrow our need for other people to help regulate our sense of worth and vitality. We need three lifelong psychological nutrients from others ("selfobjects"): Mirroring ("See and delight in who I am"), Idealizing ("Let me feel safe looking up to your calm strength"), and Twinship ("Let me feel I belong among kindred humans").',
    clinicalVignette:
      'A musician doesn’t just want technical critique from her mentor; she needs the "gleam in the mentor’s eye" (Mirroring) and the mentor’s steady composure before concerts (Idealizing) to feel cohesive.',
    ideaVsAffect: {
      rawImpulseExample: 'Yearning for recognition, safety, and kinship.',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'When met with empathy, external validation gradually builds an internal sense of competence and ideals.',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'Shame and fragmentation anxiety settle into quiet pride, vitality, and ambition.',
      consciousOutput: 'Cohesive self-esteem, creative drive, and resilience.',
    },
    pdm2Context:
      'Informs PDM-2 M-Axis Self-Esteem Regulation and P-Axis Narcissistic spectrum formulations.',
    foundationalOrigin: {
      theorist: 'Heinz Kohut',
      year: '1971 / 1977 / 1984',
      seminalWork: 'The Analysis of the Self (1971); The Restoration of the Self (1977)',
      originalFormulation:
        'Spelled "selfobject" as one word (no hyphen) because the other person is experienced functionally as part of the person’s own self-regulatory machinery.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Selfobject Needs Inventory (SONI) & Social Baseline Theory',
        citation: 'Banai, Mikulincer & Shaver (2005); Coan & Sbarra (2015)',
        findingOrOperationalization:
          'Psychometric validation of Kohut’s tripolar selfobject model shows that unmet mirroring and twinship needs predict shame-proneness, depression, and defensive grandiosity.',
      },
    ],
    relatedConceptIds: [
      'transmuting-internalization',
      'narcissistic-vulnerability',
      'devaluation-idealization',
      'holding-environment',
    ],
    confusedWith: [
      {
        targetConceptId: 'object-constancy',
        sharedSurface: 'Both involve how we rely on internalized relationships for stability.',
        keyDistinction:
          'Object Relations focuses on differentiating Self from Other and loving a separate whole person; Self Psychology focuses on how others function as empathetic scaffolding to keep the Self cohesive and proud.',
        thisConceptRule: 'Three empathetic nutrients (Mirroring, Idealizing, Twinship) that sustain Self-worth.',
        otherConceptRule: 'Maintaining an enduring emotional tie to a separate loved person during frustration or absence.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'object-theater',
      presetId: 'praise-deflation',
      buttonLabel: 'Explore Mirroring & Idealization in Object Theater',
    },
  },
  {
    id: 'transmuting-internalization',
    name: 'Transmuting Internalization & Optimal Frustration',
    subtitle: 'How Manageable Micro-Disappointments Build Internal Self-Soothing',
    lens: 'self-psychology',
    category: 'Developmental & Self',
    tenSecondIntuition:
      'How do we stop needing constant external applause to feel okay? First, we experience reliable empathy; then, when the parent or therapist inevitably has small, non-traumatic misses ("optimal frustrations") and repairs them with warmth, we gradually build our own internal emotional thermostat.',
    clinicalVignette:
      'When a therapist goes on a one-week vacation after months of deep attunement, they explore the client’s hurt together—and the client discovers she can now soothe herself using the internalized voice of the therapy.',
    ideaVsAffect: {
      rawImpulseExample: 'Sting of an empathic miss or temporary unavailability of an idealized figure.',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'Instead of shattering the relationship, the rupture is understood and repaired.',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'Acute disappointment is metabolized into new internal self-regulatory structure.',
      consciousOutput: 'Growing capacity to calm, encourage, and validate oneself from the inside.',
    },
    pdm2Context:
      'Explains structural growth on the PDM-2 M-Axis (moving from external self-esteem dependence to internal self-cohesion).',
    foundationalOrigin: {
      theorist: 'Heinz Kohut',
      year: '1971',
      seminalWork: 'The Analysis of the Self',
      originalFormulation:
        'Proposed that psychic structure is built bit by bit when selfobject functions (soothing, mirroring) are gradually internalized following manageable, non-traumatic frustrations.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Alliance Rupture-Repair Meta-Analysis',
        citation: 'Eubanks, Muran & Safran (2018, Psychotherapy)',
        findingOrOperationalization:
          'Meta-analysis across 11 studies (N = 1,318) confirmed that successfully resolved empathic ruptures yield significantly stronger treatment outcomes (r = .29) than therapies with no ruptures or unresolved ruptures.',
      },
    ],
    relatedConceptIds: [
      'selfobject-needs',
      'narcissistic-vulnerability',
      'object-constancy',
      'corrective-emotional-experience',
    ],
    confusedWith: [
      {
        targetConceptId: 'corrective-emotional-experience',
        sharedSurface: 'Both explain how therapy creates lasting emotional change.',
        keyDistinction:
          'Transmuting Internalization specifically describes how repairing small empathic misses builds internal self-soothing; Corrective Emotional Experience describes disconfirming a feared interpersonal expectation.',
        thisConceptRule: 'Empathy + manageable micro-frustration + repair = internal self-soothing structure.',
        otherConceptRule: 'Experiencing a safe response where trauma history predicted danger or rejection.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'object-theater',
      presetId: 'praise-deflation',
      buttonLabel: 'Simulate Rupture & Integration in Theater',
    },
  },
  {
    id: 'narcissistic-vulnerability',
    name: 'Narcissistic Vulnerability, Shame & Rage',
    subtitle: 'Why Grandiosity and Fragile Humiliation Are Two Sides of One Coin',
    lens: 'self-psychology',
    category: 'Developmental & Self',
    tenSecondIntuition:
      'In psychodynamics, "narcissism" isn’t having too much self-love—it’s having a painfully fragile self-esteem thermostat. To avoid feeling like a worthless nothing (humiliation/fragmentation), the mind inflates into superior armor ("I’m exceptional") or explodes in Narcissistic Rage when slighted.',
    clinicalVignette:
      'Passed over for a speaking slot, a consultant alternates between arrogant contempt ("Everyone at that conference is an idiot anyway") and lying awake at 3 AM feeling like a complete failure.',
    ideaVsAffect: {
      rawImpulseExample: '"That slight made me feel small, invisible, and defective."',
      ideaFate: 'Split / Compartmentalized',
      ideaDescription: 'Self-representation oscillates between Grandiose/Superior and Depleted/Worthless.',
      affectFate: 'Amplified / Split',
      affectDescription: 'Searing shame is either masked by haughty superiority or discharged as vindictive Narcissistic Rage.',
      consciousOutput: 'Hypersensitivity to criticism, envy, perfectionism, or righteous fury over perceived disrespect.',
    },
    pdm2Context:
      'PDM-2 P-Axis explicitly maps both the Arrogant/Entitled (Thick-Skinned) and Depressed/Depleted (Thin-Skinned/Vulnerable) presentations of narcissistic dynamics.',
    foundationalOrigin: {
      theorist: 'Heinz Kohut & Otto Kernberg',
      year: '1971 / 1972 / 1975',
      seminalWork: 'Thoughts on Narcissism and Narcissistic Rage (Kohut, 1972); Borderline Conditions and Pathological Narcissism (Kernberg, 1975)',
      originalFormulation:
        'Kohut distinguished ordinary competitive anger from Narcissistic Rage—which arises from an unbearable injury to a fragile self and seeks to blot out the offending flaw.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Pathological Narcissism Inventory (PNI)',
        citation: 'Pincus et al. (2009); Ronningstam (2016)',
        findingOrOperationalization:
          'Empirical research shows that DSM-style "grandiose only" criteria miss half the clinical picture; ecological momentary assessment proves grandiose individuals fluctuate into vulnerable shame states following interpersonal slights.',
      },
    ],
    relatedConceptIds: [
      'selfobject-needs',
      'devaluation-idealization',
      'splitting',
      'transmuting-internalization',
    ],
    confusedWith: [
      {
        targetConceptId: 'devaluation-idealization',
        sharedSurface: 'Both involve swings between feeling superior/special and feeling worthless.',
        keyDistinction:
          'Narcissistic Vulnerability describes the broader structural fragility of self-worth and shame regulation; Idealization & Devaluation are the specific DMRS Level 4 defense mechanisms used to prop up that fragile self.',
        thisConceptRule: 'Structural fragility of self-esteem oscillating between grandiosity, shame, and rage.',
        otherConceptRule: 'Specific DMRS Level 4 defenses that inflate or trash self/other images to regulate esteem.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'object-theater',
      presetId: 'praise-deflation',
      buttonLabel: 'Explore Grandiose vs. Depleted Swings in Theater',
    },
  },
  {
    id: 'devaluation-idealization',
    name: 'Idealization & Devaluation',
    subtitle: 'Putting People on a Pedestal—Then Tearing Them Down When They Disappoint',
    lens: 'self-psychology',
    category: 'Defense Mechanism',
    dmrsLevel: 4,
    dmrsLevelName: 'Level 4: Minor Image-Distorting (Narcissistic)',
    tenSecondIntuition:
      'To feel safe or special, you inflate someone (a partner, boss, or therapist) into a flawless genius ("Idealization") so you can bask in their glow. The moment they show an ordinary human flaw, you trash them as useless ("Devaluation") to protect yourself from disappointment or envy.',
    clinicalVignette:
      'A client raves that his new doctor is "a world-class visionary," then dismisses the entire clinic as "incompetent hacks" after a minor billing error.',
    ideaVsAffect: {
      rawImpulseExample: 'Vulnerability, envy, or disappointment in someone you depend on.',
      ideaFate: 'Split / Compartmentalized',
      ideaDescription: 'Exaggerates either the perfection or the worthlessness of self or other to protect self-esteem.',
      affectFate: 'Converted / Displaced',
      affectDescription: 'Shame and disappointment are converted into haughty dismissal or awestruck merger.',
      consciousOutput: 'Cycles of "pedestal-then-trashcan" in careers, mentors, and romantic relationships.',
    },
    pdm2Context:
      'DMRS Level 4 Minor Image-Distorting defense cluster; core defensive signature of narcissistic self-esteem regulation.',
    foundationalOrigin: {
      theorist: 'Melanie Klein, Otto Kernberg & Heinz Kohut',
      year: '1946 / 1975',
      seminalWork: 'Borderline Conditions and Pathological Narcissism (Kernberg, 1975)',
      originalFormulation:
        'Classified in DMRS at Level 4 (above Level 2 Borderline Splitting) when used primarily to regulate self-esteem rather than total loss of reality-testing.',
    },
    empiricalResearch: [
      {
        frameworkName: 'DMRS Level 4 Minor Image-Distorting Hierarchy',
        citation: 'Perry (1990); Clemence et al. (2009)',
        findingOrOperationalization:
          'Empirical DMRS ratings show Level 4 defenses (Omnipotence, Idealization, Devaluation) cluster strongly in narcissistic presentations and decrease significantly over successful long-term psychodynamic therapy.',
      },
    ],
    relatedConceptIds: [
      'narcissistic-vulnerability',
      'splitting',
      'selfobject-needs',
      'dmrs-hierarchy',
    ],
    confusedWith: [
      {
        targetConceptId: 'splitting',
        sharedSurface: 'Both swing between extreme positive and negative evaluations of people.',
        keyDistinction:
          'In the DMRS hierarchy, Level 4 Idealization/Devaluation inflates or belittles someone’s worth to protect SELF-ESTEEM ("He’s mediocre, I’m better"); Level 2 Splitting fractures the entire psyche into terrifying persecutors vs. saviors ("He is pure evil trying to destroy me").',
        thisConceptRule: 'Level 4: Inflates or belittles value/status to protect pride and self-esteem.',
        otherConceptRule: 'Level 2: Total affective compartmentation into All-Good savior vs. All-Bad persecutor.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'object-theater',
      presetId: 'praise-deflation',
      buttonLabel: 'Test Idealization & Devaluation in Object Theater',
    },
  },
];
