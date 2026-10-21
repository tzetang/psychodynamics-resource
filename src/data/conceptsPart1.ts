import { PsychodynamicConcept } from '../types/psychodynamics';

export const CONCEPTS_PART_1: PsychodynamicConcept[] = [
  // ============================================================================
  // LENS 1: DRIVE & CONFLICT THEORY
  // ============================================================================
  {
    id: 'triangle-of-conflict',
    name: 'Malan’s Triangle of Conflict',
    subtitle: 'Impulse/Feeling ↔ Signal Anxiety ↔ Defense Mechanism',
    lens: 'drive-conflict',
    category: 'Psychic Structure',
    tenSecondIntuition:
      'Whenever an authentic core emotion or wish feels dangerous to express, it triggers automatic Signal Anxiety—which immediately recruits a Defense Mechanism to hide or disguise the feeling.',
    clinicalVignette:
      'When asked about his father’s criticism, a patient’s shoulders tense (Anxiety) and he changes the subject to philosophical stoicism (Defense) to avoid feeling grief and rage (Core Feeling).',
    ideaVsAffect: {
      rawImpulseExample: 'Grief and anger at a critical parent.',
      ideaFate: 'Generalized / Abstracted',
      ideaDescription: 'The specific memory or grievance is deflected into safe, abstract commentary.',
      affectFate: 'Converted / Displaced',
      affectDescription: 'Visceral emotion is converted into physiological tension (tight chest, dry mouth, sighing) and masked by the defense.',
      consciousOutput: 'Polite detachment accompanied by physical tension and avoidance of the emotional core.',
    },
    pdm2Context:
      'Foundational clinical map across PDM-2 P-Axis and M-Axis for tracking how defences regulate unconscious conflict and signal anxiety in session.',
    foundationalOrigin: {
      theorist: 'David Malan (building on S. Freud, 1926 & Ezriel, 1952)',
      year: '1979',
      seminalWork: 'Individual Psychotherapy and the Science of Psychodynamics',
      originalFormulation:
        'Represented intrapsychic conflict as an inverted triangle with Hidden Impulse/Feeling at the bottom vertex, Anxiety and Defense at the upper two vertices, linked to the Triangle of Persons (Past, Current, Therapist).',
    },
    empiricalResearch: [
      {
        frameworkName: 'ISTDP & Affect Phobia Meta-Analyses',
        citation: 'Abbass et al. (2014); McCullough et al. (2003)',
        findingOrOperationalization:
          'Video-coded process-outcome studies show that unlocking the bottom vertex (visceral Affect) while regulating Anxiety and relinquishing tactical Defenses strongly predicts symptom remission.',
      },
    ],
    relatedConceptIds: [
      'signal-anxiety',
      'compromise-formation',
      'repression',
      'isolation-of-affect',
      'somatization',
    ],
    confusedWith: [
      {
        targetConceptId: 'structural-model',
        sharedSurface: 'Both are three-part models of intrapsychic tension.',
        keyDistinction:
          'The Structural Model (Id, Ego, Superego) maps enduring agencies of the mind, whereas Malan’s Triangle of Conflict maps a moment-by-moment clinical process you can see in real time.',
        thisConceptRule: 'Tracks the micro-sequence: Core Feeling → Anxiety → Defense.',
        otherConceptRule: 'Maps the macro-agencies: Instinctual Drive (Id) ↔ Mediator (Ego) ↔ Moral Critic (Superego).',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'repression',
      buttonLabel: 'Test Triangle of Conflict in Switchboard',
    },
  },
  {
    id: 'signal-anxiety',
    name: 'Signal Anxiety',
    subtitle: 'The Ego’s Early-Warning Smoke Detector',
    lens: 'drive-conflict',
    category: 'Psychic Structure',
    tenSecondIntuition:
      'A tiny, unconscious "smoke alarm" puff of anxiety triggered when a forbidden wish or feeling starts stirring—alerting the Ego to deploy a defense before full panic hits.',
    clinicalVignette:
      'Just before disagreeing with her boss, Sarah feels a sudden micro-wave of nausea and throat tightness, prompting her to smile and agree instead.',
    ideaVsAffect: {
      rawImpulseExample: '"I want to tell my boss his plan is reckless."',
      ideaFate: 'Repressed / Blocked',
      ideaDescription: 'The assertive thought is flagged as dangerous to attachment security and halted.',
      affectFate: 'Converted / Displaced',
      affectDescription: 'Emerging assertive anger is preempted by autonomic arousal (heart rate, stomach drop) that mobilizes defense.',
      consciousOutput: 'Brief unexplained nervousness followed by compliant agreement.',
    },
    pdm2Context:
      'PDM-2 M-Axis differentiates regulated signal anxiety (which mobilizes higher neurotic defenses) from overwhelming traumatic/annihilation anxiety (which collapses ego functioning).',
    foundationalOrigin: {
      theorist: 'Sigmund Freud',
      year: '1926',
      seminalWork: 'Inhibitions, Symptoms and Anxiety',
      originalFormulation:
        'Reversed his earlier theory: anxiety is not transformed repressed libido; rather, the Ego generates a small "signal" of anticipated danger (loss of love, castration, superego condemnation) to initiate repression.',
    },
    empiricalResearch: [
      {
        frameworkName: 'ISTDP Striated vs. Smooth Muscle Anxiety Pathways',
        citation: 'Davanloo (1990); Abbass (2015)',
        findingOrOperationalization:
          'Clinically distinguishes three somatic channels of unconscious anxiety: striated muscle tension (hand clenching, sighing), smooth muscle somatization (GI spasm, migraine), and cognitive-perceptual disruption.',
      },
    ],
    relatedConceptIds: [
      'triangle-of-conflict',
      'repression',
      'structural-model',
      'somatization',
    ],
    confusedWith: [
      {
        targetConceptId: 'somatization',
        sharedSurface: 'Both involve bodily sensations triggered by emotional conflict.',
        keyDistinction:
          'Signal anxiety is the brief warning alarm that triggers a defense; somatization is when the warded-off conflict and affect are chronically converted into physical illness/pain.',
        thisConceptRule: 'Acts as the trigger switch that recruits a defense.',
        otherConceptRule: 'Acts as the symptom endpoint when emotion is routed into bodily distress.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'repression',
      buttonLabel: 'Watch Signal Anxiety Trigger Defenses',
    },
  },
  {
    id: 'compromise-formation',
    name: 'Compromise Formation',
    subtitle: 'How One Symptom Secretly Satisfies Both Wish and Punishment',
    lens: 'drive-conflict',
    category: 'Psychic Structure',
    tenSecondIntuition:
      'When a forbidden wish and an inner moral prohibition collide, the mind strikes an unconscious bargain: creating a symptom, slip, or habit that partially expresses BOTH the wish and the defense against it.',
    clinicalVignette:
      'A man who resents his demanding mother but feels guilty for his anger repeatedly forgets to book his flight home—satisfying his wish to stay away while punishing himself with frantic last-minute stress and guilt.',
    ideaVsAffect: {
      rawImpulseExample: '"I don’t want to visit my mother, and I resent her demands."',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'Both the hostile wish and the self-punishing guilt are fused into a single disguised act ("an honest mistake").',
      affectFate: 'Converted / Displaced',
      affectDescription: 'Resentment is hidden behind anxious remorse over forgetting.',
      consciousOutput: '"I feel terrible—I completely forgot the deadline for booking my ticket!"',
    },
    pdm2Context:
      'Explains why neurotic symptoms are tenacious: they simultaneously serve drive gratification, moral self-punishment, and defensive protection.',
    foundationalOrigin: {
      theorist: 'Sigmund Freud & Charles Brenner',
      year: '1896 / 1982',
      seminalWork: 'Further Remarks on the Neuro-Psychoses of Defence; The Mind in Conflict (Brenner)',
      originalFormulation:
        'Brenner expanded Freud’s concept to show that not only neurotic symptoms, but dreams, character traits, jokes, and artistic creations are compromise formations among drive derivatives, anxiety, defense, and superego.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Cognitive-Affective Neural Conflict Processing',
        citation: 'Shevrin et al. (1996, 2013)',
        findingOrOperationalization:
          'Subliminal ERP (event-related potential) brain studies demonstrated distinct unconscious neural signatures when words connected to a patient’s unconscious conflict versus conscious symptom words are presented.',
      },
    ],
    relatedConceptIds: [
      'triangle-of-conflict',
      'structural-model',
      'repression',
      'undoing',
    ],
    confusedWith: [
      {
        targetConceptId: 'sublimation',
        sharedSurface: 'Both transform raw unconscious impulses into a new outward form.',
        keyDistinction:
          'Sublimation channels the impulse flexibly into a conflict-free, socially rewarding activity without self-punishment; a neurotic Compromise Formation remains rigid, disguised, and partially self-defeating.',
        thisConceptRule: 'Disguised bargain combining forbidden wish + defensive self-punishment.',
        otherConceptRule: 'Healthy, non-punitive channeling of drive energy into valued mastery.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'reaction-formation',
      buttonLabel: 'See Compromise Outputs in Switchboard',
    },
  },
  {
    id: 'structural-model',
    name: 'Structural Model (Id, Ego, Superego)',
    subtitle: 'Drive Engine, Executive Mediator, and Internalized Conscience',
    lens: 'drive-conflict',
    category: 'Psychic Structure',
    tenSecondIntuition:
      'Instead of dividing the mind only by what is conscious vs. unconscious, Freud mapped three functional agencies: passionate biological urges (Id), harsh moral standards (Superego), and the pragmatic negotiator caught between them and reality (Ego).',
    clinicalVignette:
      'Id: "Tell him off right now!" Superego: "Good people never feel angry—you are selfish for even thinking it." Ego: "Let’s take a breath and bring up the scheduling issue calmly tomorrow."',
    ideaVsAffect: {
      rawImpulseExample: 'Collision between raw desire/aggression (Id) and moral condemnation (Superego).',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'The Ego arbitrates between wish, moral prohibition, and external consequences.',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'Depending on Ego strength, affect is either repressed via defenses or modulated for realistic action.',
      consciousOutput: 'Adaptive compromise or neurotic inhibition depending on how harsh the Superego is.',
    },
    pdm2Context:
      'Reflected in PDM-2 Mental Functioning capacities: impulse regulation, moral reasoning/superego integration, and reality testing.',
    foundationalOrigin: {
      theorist: 'Sigmund Freud',
      year: '1923',
      seminalWork: 'The Ego and the Id',
      originalFormulation:
        'Introduced the tripartite structural model because the Ego’s defenses and the Superego’s punitive guilt operate largely unconsciously alongside the Id.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Neuropsychoanalysis (The Conscious Id)',
        citation: 'Mark Solms (2013, 2021) & Jaak Panksepp',
        findingOrOperationalization:
          'Solms revised Freud’s cortical bias: subcortical upper-brainstem affective circuits generate raw conscious feeling (Id), while prefrontal-hippocampal networks construct predictive cognitive models and inhibition (Ego).',
      },
    ],
    relatedConceptIds: [
      'triangle-of-conflict',
      'signal-anxiety',
      'compromise-formation',
      'repression',
    ],
    confusedWith: [
      {
        targetConceptId: 'triangle-of-conflict',
        sharedSurface: 'Both describe three interacting internal forces.',
        keyDistinction:
          'Id/Ego/Superego are personified structural agencies; Malan’s Triangle of Conflict is a functional process map (Feeling ↔ Anxiety ↔ Defense).',
        thisConceptRule: 'Three functional agencies: Id (drives), Superego (morality), Ego (mediator).',
        otherConceptRule: 'Three process states: Hidden Feeling, Signal Anxiety, Defense.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'repression',
      buttonLabel: 'Explore Ego Mediation in Switchboard',
    },
  },
  {
    id: 'repression',
    name: 'Repression',
    subtitle: 'Unconsciously Banishing the Idea While the Affect Lingers',
    lens: 'drive-conflict',
    category: 'Defense Mechanism',
    dmrsLevel: 5,
    dmrsLevelName: 'Level 5: Neurotic (Repression / Hysterical)',
    tenSecondIntuition:
      'The mind automatically ejects an unacceptable thought, wish, or memory from conscious awareness—you genuinely don’t know what you’re upset about, even though the emotional charge still leaks out.',
    clinicalVignette:
      'After his brother is praised at dinner, Mark suddenly feels inexplicably exhausted and tearful, with zero conscious awareness of competitive jealousy or anger toward his brother.',
    ideaVsAffect: {
      rawImpulseExample: '"I am furious that my parents always favor my brother."',
      ideaFate: 'Repressed / Blocked',
      ideaDescription: 'The cognitive representation ("I am angry at my brother/parents") is blocked from entering consciousness.',
      affectFate: 'Converted / Displaced',
      affectDescription: 'The emotional charge remains active, leaking out as unexplained sadness, fatigue, or bodily tension.',
      consciousOutput: '"I don’t know why I suddenly feel so gloomy and tired tonight—nothing happened."',
    },
    pdm2Context:
      'Core neurotic-level defense (DMRS Level 5); contrasts with borderline splitting where contradictory states remain conscious sequentially.',
    foundationalOrigin: {
      theorist: 'Sigmund Freud & Anna Freud',
      year: '1915 / 1936',
      seminalWork: 'Repression (1915); The Ego and the Mechanisms of Defence (1936)',
      originalFormulation:
        'Described by Freud as "the cornerstone on which the whole structure of psychoanalysis rests": keeping an ideational representative out of consciousness.',
    },
    empiricalResearch: [
      {
        frameworkName: 'DMRS Level 5 & fMRI Memory Inhibition',
        citation: 'Perry (1990); Anderson et al. (2004, Science)',
        findingOrOperationalization:
          'DMRS operationalizes repression by observing intact affect paired with missing cognitive content ("I feel awful, I have no idea why"). Neuroimaging shows dorsolateral prefrontal cortex down-regulating hippocampal memory retrieval.',
      },
    ],
    relatedConceptIds: [
      'suppression',
      'isolation-of-affect',
      'triangle-of-conflict',
      'signal-anxiety',
      'displacement',
    ],
    confusedWith: [
      {
        targetConceptId: 'suppression',
        sharedSurface: 'Both involve putting a distressing thought out of mind.',
        keyDistinction:
          'Repression is unconscious and automatic (you don’t know what you buried); Suppression is conscious and deliberate ("I’ll set this worry aside until after my presentation").',
        thisConceptRule: 'Unconscious, automatic (DMRS Level 5): blocks the Idea from awareness.',
        otherConceptRule: 'Conscious, voluntary (DMRS Level 7 Mature): temporarily shelves the thought.',
      },
      {
        targetConceptId: 'isolation-of-affect',
        sharedSurface: 'Both sever the link between the thought (Idea) and the feeling (Affect).',
        keyDistinction:
          'They are exact mirror images: Repression banishes the IDEA while the feeling leaks out; Isolation of Affect keeps the IDEA crystal clear in consciousness while numbing the FEELING.',
        thisConceptRule: 'Idea is buried; Affect remains vaguely felt.',
        otherConceptRule: 'Idea remains conscious and detailed; Affect is completely numbed.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'repression',
      buttonLabel: 'Animate Repression (Idea vs. Affect)',
    },
  },
  {
    id: 'displacement',
    name: 'Displacement',
    subtitle: 'Redirecting a Dangerous Feeling Onto a Safer Target',
    lens: 'drive-conflict',
    category: 'Defense Mechanism',
    dmrsLevel: 5,
    dmrsLevelName: 'Level 5: Neurotic',
    tenSecondIntuition:
      'Keep the real emotion, keep the real urge—just swap the target from someone powerful/dangerous (your boss or partner) to someone safe or trivial (the waiter, the dog, or traffic).',
    clinicalVignette:
      'Humiliated by a senior surgeon during rounds, a resident says nothing, goes home, and explodes in fury because his roommate left a single spoon in the sink.',
    ideaVsAffect: {
      rawImpulseExample: 'Rage at a humiliating authority figure.',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'The target object representation is swapped from the dangerous authority figure to a substitute target with a superficial associative link.',
      affectFate: 'Conscious',
      affectDescription: 'The full intensity of the original anger is felt and discharged—just aimed at the wrong address.',
      consciousOutput: 'Disproportionate outrage over a minor household annoyance.',
    },
    pdm2Context:
      'Neurotic defense (DMRS Level 5) underlying phobias, everyday transference spillovers, and marital scapegoating.',
    foundationalOrigin: {
      theorist: 'Sigmund Freud',
      year: '1900 / 1909',
      seminalWork: 'The Interpretation of Dreams; Analysis of a Phobia in a Five-Year-Old Boy ("Little Hans")',
      originalFormulation:
        'Identified displacement as a primary-process mechanism where affective cathexis slides freely from an original representation to an associated substitute.',
    },
    empiricalResearch: [
      {
        frameworkName: 'DMRS & Experimental Triggered Displaced Aggression',
        citation: 'Perry (1990); Marcus-Newhall et al. (2000 Meta-Analysis)',
        findingOrOperationalization:
          'Meta-analysis of 49 experimental studies confirmed that when retaliation against an initial provoker is inhibited, minor subsequent triggers elicit amplified displaced aggression.',
      },
    ],
    relatedConceptIds: [
      'repression',
      'transference',
      'projection',
      'sublimation',
    ],
    confusedWith: [
      {
        targetConceptId: 'projection',
        sharedSurface: 'Both relocate an internal conflict onto someone else in the environment.',
        keyDistinction:
          'In Displacement, you still own the feeling ("I am furious at this waiter!"); in Projection, you disown the feeling and claim the other person has it ("Why are you being so hostile to me?").',
        thisConceptRule: 'Changes the TARGET of your feeling ("I am angry at B instead of A").',
        otherConceptRule: 'Changes the OWNER of the feeling ("A is angry at me, not me at A").',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'displacement',
      buttonLabel: 'Simulate Target Swap in Switchboard',
    },
  },
  {
    id: 'somatization',
    name: 'Somatization & Affect Conversion',
    subtitle: 'When Unfelt Emotion Speaks Through the Body',
    lens: 'drive-conflict',
    category: 'Defense Mechanism',
    dmrsLevel: 2,
    dmrsLevelName: 'Level 2: Action / Somatizing',
    tenSecondIntuition:
      'When neither the thought nor the conscious emotion is allowed into awareness, the autonomic nervous system and body absorb the emotional charge as physical pain, GI distress, migraines, or paralysis.',
    clinicalVignette:
      'Whenever asked to speak about his deceased mother, a stoic engineer reports zero sadness—instead, his stomach cramps severely and a migraine aura begins within three minutes.',
    ideaVsAffect: {
      rawImpulseExample: 'Intense grief and protest over loss or mistreatment.',
      ideaFate: 'Repressed / Blocked',
      ideaDescription: 'Psychological meaning and relational link are completely disconnected from awareness.',
      affectFate: 'Converted / Displaced',
      affectDescription: 'Affective arousal bypasses emotional consciousness and routes into smooth-muscle, autonomic, or sensory-motor pathways.',
      consciousOutput: 'Preoccupation with unexplained physical symptoms without subjective emotional distress.',
    },
    pdm2Context:
      'Detailed in PDM-2 S-Axis (Somatic Symptom Disorders) and M-Axis (Alexithymia and concrete somatic experiencing).',
    foundationalOrigin: {
      theorist: 'Sigmund Freud,Josef Breuer & Franz Alexander',
      year: '1895 / 1950',
      seminalWork: 'Studies on Hysteria (1895); Psychosomatic Medicine (Alexander, 1950)',
      originalFormulation:
        'Distinguished symbolic conversion symptoms from vegetative/autonomic organ neuroses resulting from chronic unexpressed affective arousal.',
    },
    empiricalResearch: [
      {
        frameworkName: 'ISTDP for Functional Somatic Disorders',
        citation: 'Abbass, Kisely & Kroenke (2009, 2020); Lumley & Schubiner (2019)',
        findingOrOperationalization:
          'Multiple RCTs in emergency departments and pain clinics show that short-term psychodynamic emotion-focused therapy significantly reduces medically unexplained symptoms, chronic pain, and healthcare utilization.',
      },
    ],
    relatedConceptIds: [
      'signal-anxiety',
      'repression',
      'triangle-of-conflict',
      'isolation-of-affect',
    ],
    confusedWith: [
      {
        targetConceptId: 'signal-anxiety',
        sharedSurface: 'Both produce physical sensations in the body.',
        keyDistinction:
          'Signal anxiety is a momentary autonomic warning cue; Somatization converts the entire emotional conflict into chronic somatic preoccupation while erasing psychological awareness.',
        thisConceptRule: 'Emotion is replaced by physical illness/pain; psychological link is denied.',
        otherConceptRule: 'Brief physiological alarm warning the Ego that a forbidden feeling is near.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'repression',
      buttonLabel: 'Explore Somatic Affect Routing in Switchboard',
    },
  },

  // ============================================================================
  // LENS 2: EGO PSYCHOLOGY & DEFENSE MECHANISMS
  // ============================================================================
  {
    id: 'isolation-of-affect',
    name: 'Isolation of Affect',
    subtitle: 'Keeping the Crystal-Clear Idea While Severing the Emotion',
    lens: 'ego-psychology',
    category: 'Defense Mechanism',
    dmrsLevel: 6,
    dmrsLevelName: 'Level 6: Obsessional',
    tenSecondIntuition:
      'The exact inverse of Repression: you remember and describe every factual detail of a traumatic or infuriating event in a calm, robotic monotone—completely unplugged from the emotional charge.',
    clinicalVignette:
      'A patient recounts being betrayed by her fiancé with the exact tone and facial expression of someone reading a grocery receipt.',
    ideaVsAffect: {
      rawImpulseExample: '"My partner cheated on me and shattered my trust."',
      ideaFate: 'Conscious',
      ideaDescription: 'The cognitive facts remain 100% conscious, accurate, and accessible without distortion.',
      affectFate: 'Suppressed / Numbed',
      affectDescription: 'The painful emotional charge (grief, rage, humiliation) is surgically severed and quarantined from awareness.',
      consciousOutput: 'Crisp, factual reporting devoid of subjective feeling ("It was an unfortunate breach of contract").',
    },
    pdm2Context:
      'Hallmark of PDM-2 Obsessive-Compulsive Personality Styles and DMRS Level 6 Obsessional defenses.',
    foundationalOrigin: {
      theorist: 'Sigmund Freud & Anna Freud',
      year: '1926 / 1936',
      seminalWork: 'Inhibitions, Symptoms and Anxiety; The Ego and the Mechanisms of Defence',
      originalFormulation:
        'Described how obsessional neurosis avoids repression by leaving the pathogenic memory in consciousness while stripping away its associative affective links.',
    },
    empiricalResearch: [
      {
        frameworkName: 'DMRS Level 6 Obsessional Cluster',
        citation: 'Perry (1990); Vaillant (1992)',
        findingOrOperationalization:
          'Rated in DMRS when a speaker describes emotionally charged personal events with flat/neutral vocal prosody and explicit denial or absence of feeling while retaining cognitive clarity.',
      },
    ],
    relatedConceptIds: [
      'intellectualization',
      'repression',
      'rationalization',
      'undoing',
      'dmrs-hierarchy',
    ],
    confusedWith: [
      {
        targetConceptId: 'intellectualization',
        sharedSurface: 'Both sound detached, cerebral, and emotionless in conversation.',
        keyDistinction:
          'Isolation of Affect states the specific personal facts without feeling ("My father died Tuesday; the funeral was at 2pm"); Intellectualization escapes personal facts into abstract theories ("Mortality statistics in septuagenarians reflect socioeconomic trends").',
        thisConceptRule: 'Specific personal facts stay conscious; only the feeling is unplugged.',
        otherConceptRule: 'Personal experience is replaced with abstract, academic generalizations.',
      },
      {
        targetConceptId: 'repression',
        sharedSurface: 'Both separate Idea from Affect at the Neurotic/Obsessional level.',
        keyDistinction:
          'Isolation keeps the Idea and blocks the Affect; Repression blocks the Idea while the Affect leaks out.',
        thisConceptRule: 'Keeps the Idea, drops the Affect.',
        otherConceptRule: 'Drops the Idea, keeps the diffused Affect.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'isolation-of-affect',
      buttonLabel: 'Watch Isolation Unplug Affect in Switchboard',
    },
  },
  {
    id: 'intellectualization',
    name: 'Intellectualization',
    subtitle: 'Escaping Personal Pain Into Abstract Theory and Jargon',
    lens: 'ego-psychology',
    category: 'Defense Mechanism',
    dmrsLevel: 6,
    dmrsLevelName: 'Level 6: Obsessional',
    tenSecondIntuition:
      'When a raw personal feeling hits, the mind zooms up into the clouds of philosophy, statistics, or psychological jargon—turning an intimate wound into a safe seminar topic.',
    clinicalVignette:
      'Asked how he feels about his wife asking for a divorce, a professor replies: "Well, late-capitalist nuclear families experience a 44% dissolution rate due to shifting attachment paradigms."',
    ideaVsAffect: {
      rawImpulseExample: '"I feel terrified and abandoned that my wife is leaving me."',
      ideaFate: 'Generalized / Abstracted',
      ideaDescription: 'First-person singular ("I hurt") is converted into third-person abstract principles ("People in modern marriages...").',
      affectFate: 'Suppressed / Numbed',
      affectDescription: 'Vulnerability and grief are neutralized by cognitive complexity.',
      consciousOutput: 'Impressive analytical monologue that keeps both speaker and listener at an emotional distance.',
    },
    pdm2Context:
      'DMRS Level 6 Obsessional defense; frequently encountered in high-functioning professionals and therapists-in-training.',
    foundationalOrigin: {
      theorist: 'Anna Freud',
      year: '1936',
      seminalWork: 'The Ego and the Mechanisms of Defence',
      originalFormulation:
        'First spotlighted in adolescents who manage surging instinctual anxieties by debating grand philosophical, political, and scientific abstractions.',
    },
    empiricalResearch: [
      {
        frameworkName: 'DMRS & Linguistic Distancing Markers',
        citation: 'Perry (1990); Pennebaker (2011)',
        findingOrOperationalization:
          'Empirical transcript analysis identifies intellectualization through a sudden drop in first-person pronouns ("I/me") and spike in abstract nouns and generic pronouns ("one/people").',
      },
    ],
    relatedConceptIds: [
      'isolation-of-affect',
      'rationalization',
      'undoing',
      'dmrs-hierarchy',
    ],
    confusedWith: [
      {
        targetConceptId: 'isolation-of-affect',
        sharedSurface: 'Both are Level 6 Obsessional defenses that sound unemotional.',
        keyDistinction:
          'Intellectualization generalizes into abstract concepts/theories; Isolation of Affect stays concrete about the personal event while muting the emotion.',
        thisConceptRule: 'Escapes personal specifics into abstract, generalized theory.',
        otherConceptRule: 'Reports concrete personal specifics with zero emotional tone.',
      },
      {
        targetConceptId: 'rationalization',
        sharedSurface: 'Both use elaborate logical explanations to manage discomfort.',
        keyDistinction:
          'Intellectualization uses abstract theory to avoid FEELING an emotion; Rationalization invents plausible excuses to justify an ACTION or disappointment ("sour grapes").',
        thisConceptRule: 'Uses abstract academic concepts to distance from emotion.',
        otherConceptRule: 'Invents self-serving excuses to make an unacceptable motive or failure look reasonable.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'intellectualization',
      buttonLabel: 'Simulate Intellectualization in Switchboard',
    },
  },
  {
    id: 'reaction-formation',
    name: 'Reaction Formation',
    subtitle: 'Converting an Unacceptable Impulse Into Its Exact Opposite',
    lens: 'ego-psychology',
    category: 'Defense Mechanism',
    dmrsLevel: 5,
    dmrsLevelName: 'Level 5: Neurotic',
    tenSecondIntuition:
      'Fighting fire by turning yourself into an ice sculpture: when the mind is terrified of feeling rage, greed, or envy, it flips the dial 180 degrees into exaggerated sweetness, deference, or moral crusading.',
    clinicalVignette:
      'Resenting a demanding newborn or a promoted coworker feels monstrous, so the person showers them with suffocating, compulsive praise and over-solicitous care.',
    ideaVsAffect: {
      rawImpulseExample: '"I resent my rival and wish they would fail."',
      ideaFate: 'Inverted / Opposite',
      ideaDescription: 'Hostility or desire is inverted into its polar opposite ("I adore them and only want to serve them").',
      affectFate: 'Converted / Displaced',
      affectDescription: 'Aggressive charge is harnessed to fuel rigid, overly intense kindness or moral zeal.',
      consciousOutput: 'Performative, slightly brittle sycophancy or saintliness that leaks hostility at the edges.',
    },
    pdm2Context:
      'Central in PDM-2 Obsessive-Compulsive and Masochistic/Self-Defeating dynamics where anger is forbidden by the Superego.',
    foundationalOrigin: {
      theorist: 'Sigmund Freud & Anna Freud',
      year: '1905 / 1936',
      seminalWork: 'Three Essays on the Theory of Sexuality; The Ego and the Mechanisms of Defence',
      originalFormulation:
        'Explained how permanent character traits (excessive cleanliness, deference, prudishness) form as counter-cathexes against persistent unconscious impulses.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Experimental Social Psychology & DMRS Level 5',
        citation: 'Adams et al. (1996); Baumeister, Dale & Sommer (1998)',
        findingOrOperationalization:
          'Empirical studies demonstrate that individuals with high defensive moral crusading show heightened physiological arousal specifically to the taboo stimuli they most vehemently condemn.',
      },
    ],
    relatedConceptIds: [
      'undoing',
      'compromise-formation',
      'isolation-of-affect',
      'sublimation',
    ],
    confusedWith: [
      {
        targetConceptId: 'sublimation',
        sharedSurface: 'Both turn an unacceptable impulse into prosocial behavior.',
        keyDistinction:
          'Reaction Formation is rigid, anxious, and brittle—the original impulse is repressed and constantly pushing back; Sublimation is flexible, gratifying, and integrative.',
        thisConceptRule: 'Rigid 180° inversion ("I must be endlessly sweet because anger is evil").',
        otherConceptRule: 'Flexible, authentic transformation ("I channel my competitive fire into advocacy").',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'reaction-formation',
      buttonLabel: 'Watch 180° Inversion in Switchboard',
    },
  },
  {
    id: 'undoing',
    name: 'Undoing',
    subtitle: 'Magical Counter-Actions to Cancel Out a "Bad" Thought or Deed',
    lens: 'ego-psychology',
    category: 'Defense Mechanism',
    dmrsLevel: 6,
    dmrsLevelName: 'Level 6: Obsessional',
    tenSecondIntuition:
      'Pressing an internal Ctrl+Z: after having an aggressive thought or making an assertive statement, the person immediately apologizes, qualifies, or performs a ritual to symbolically "erase" the offense.',
    clinicalVignette:
      'In therapy, a client says, "Sometimes my husband is really selfish—though of course he works so hard and I’m probably just being ungrateful, he’s actually wonderful."',
    ideaVsAffect: {
      rawImpulseExample: '"My partner treated me selfishly."',
      ideaFate: 'Conscious',
      ideaDescription: 'The critical thought briefly surfaces, then is immediately neutralized by a contradictory statement or ritual.',
      affectFate: 'Suppressed / Numbed',
      affectDescription: 'Brief flash of anger is quenched by guilt-driven appeasement.',
      consciousOutput: 'Chronically hedged, self-canceling statements ("Yes, but also no") or compulsive checking rituals.',
    },
    pdm2Context:
      'DMRS Level 6 Obsessional defense; prominent in obsessive ruminative styles where assertive anger triggers immediate superego guilt.',
    foundationalOrigin: {
      theorist: 'Sigmund Freud',
      year: '1909 / 1926',
      seminalWork: 'Notes Upon a Case of Obsessional Neurosis ("Rat Man"); Inhibitions, Symptoms and Anxiety',
      originalFormulation:
        'Described diphasic obsessional acts in which the first act is cancelled out by a second act, treating past thoughts as if they can be magically unwritten.',
    },
    empiricalResearch: [
      {
        frameworkName: 'DMRS Level 6 & Thought-Action Fusion Research',
        citation: 'Perry (1990); Shafran, Thordarson & Rachman (1996)',
        findingOrOperationalization:
          'Operationalized in DMRS whenever a subject makes a loaded statement and immediately retracts or qualifies it to appease guilt; closely linked to cognitive Thought-Action Fusion.',
      },
    ],
    relatedConceptIds: [
      'isolation-of-affect',
      'reaction-formation',
      'compromise-formation',
    ],
    confusedWith: [
      {
        targetConceptId: 'reaction-formation',
        sharedSurface: 'Both counter an unacceptable impulse with opposite behavior.',
        keyDistinction:
          'Reaction Formation is a continuous, steady character posture (only the opposite shows); Undoing is a two-step oscillation where the forbidden impulse leaks out first and is then hastily retracted.',
        thisConceptRule: 'Two-step sequence: Step 1 (express impulse) → Step 2 (retract/apologize to cancel it).',
        otherConceptRule: 'Continuous stance: only the opposite attitude is allowed into awareness.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'reaction-formation',
      buttonLabel: 'Explore Obsessional Defenses in Switchboard',
    },
  },
  {
    id: 'rationalization',
    name: 'Rationalization',
    subtitle: 'Spinning Plausible Excuses to Disguise Uncomfortable Motives',
    lens: 'ego-psychology',
    category: 'Defense Mechanism',
    dmrsLevel: 3,
    dmrsLevelName: 'Level 3: Disavowal',
    tenSecondIntuition:
      'The mind’s internal PR spin-doctor: inventing logical, socially acceptable reasons for behavior that was actually driven by jealousy, fear, selfishness, or hurt pride ("sour grapes").',
    clinicalVignette:
      'Rejected from a fellowship he desperately wanted, a clinician says, "Honestly, that program is way too bureaucratic anyway—it would have stifled my creativity."',
    ideaVsAffect: {
      rawImpulseExample: '"I feel crushed and inadequate that I was rejected."',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'The painful truth of rejection or selfish motive is replaced with a flattering, logical narrative.',
      affectFate: 'Suppressed / Numbed',
      affectDescription: 'Shame, envy, or guilt is smoothed over by self-justifying conviction.',
      consciousOutput: 'Plausible-sounding excuses that protect self-esteem while obscuring the real motive.',
    },
    pdm2Context:
      'Classified at DMRS Level 3 (Disavowal cluster alongside Denial and Projection) because it disavows the true internal motive.',
    foundationalOrigin: {
      theorist: 'Ernest Jones',
      year: '1908',
      seminalWork: 'Rationalisation in Every-Day Life (Journal of Abnormal Psychology)',
      originalFormulation:
        'Introduced by Freud’s biographer Ernest Jones to describe the invention of a plausible reason for an attitude or action whose real motive is unrecognized.',
    },
    empiricalResearch: [
      {
        frameworkName: 'DMRS Level 3 Disavowal & Cognitive Dissonance',
        citation: 'Perry (1990); Festinger (1957); Cushman (2020)',
        findingOrOperationalization:
          'Converges with post-hoc confabulation and cognitive dissonance research showing how prefrontal narrative generators fabricate socially acceptable explanations for subcortically driven choices.',
      },
    ],
    relatedConceptIds: [
      'intellectualization',
      'projection',
      'devaluation-idealization',
      'dmrs-hierarchy',
    ],
    confusedWith: [
      {
        targetConceptId: 'intellectualization',
        sharedSurface: 'Both rely heavily on reasoning and verbal explanations.',
        keyDistinction:
          'Rationalization makes up self-serving excuses for a specific action or hurt ("I didn’t want that job anyway"); Intellectualization retreats into genuine abstract theories to avoid feeling ("Labor markets are shifting").',
        thisConceptRule: 'Self-serving excuse or "sour grapes" justification (DMRS Level 3).',
        otherConceptRule: 'Flight into abstract, academic generalization (DMRS Level 6).',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'intellectualization',
      buttonLabel: 'Compare Reasoning Defenses in Switchboard',
    },
  },
  {
    id: 'projection',
    name: 'Projection',
    subtitle: 'Attributing Your Own Unwanted Impulse Onto Someone Else',
    lens: 'ego-psychology',
    category: 'Defense Mechanism',
    dmrsLevel: 3,
    dmrsLevelName: 'Level 3: Disavowal',
    tenSecondIntuition:
      'When owning an internal feeling (like hostility, envy, or attraction) feels intolerable, the mind edits the pronoun from "I hate you" to "You hate me"—and then feels justified acting defensive.',
    clinicalVignette:
      'Feeling unacknowledged competitive envy toward a new colleague, a manager becomes convinced the new hire is "scheming against me and giving me dirty looks."',
    ideaVsAffect: {
      rawImpulseExample: '"I feel hostile and competitive toward this person."',
      ideaFate: 'Attributed to Other',
      ideaDescription: 'The representation of the impulse is kept intact, but its subject/owner is swapped from Self to Other.',
      affectFate: 'Projected / Induced in Other',
      affectDescription: 'Hostility is experienced as righteous fear or self-defense against a perceived threat.',
      consciousOutput: 'Suspicion, hypervigilance, or grievance ("Why do they have it out for me?").',
    },
    pdm2Context:
      'DMRS Level 3 Disavowal defense; when rigid and untestable against reality, underpins Paranoid Personality dynamics in PDM-2.',
    foundationalOrigin: {
      theorist: 'Sigmund Freud',
      year: '1895 / 1911',
      seminalWork: 'Draft H; Psycho-Analytic Notes on an Autobiographical Account of a Case of Paranoia (Schreber)',
      originalFormulation:
        'Formulated how an internal perception is suppressed, and in its place its content, after undergoing distortion, enters consciousness in the form of an external perception.',
    },
    empiricalResearch: [
      {
        frameworkName: 'DMRS Level 3 & False Consensus / Defensive Projection',
        citation: 'Perry (1990); Newman, Duff & Baumeister (1997, Psychological Review)',
        findingOrOperationalization:
          'Experimental studies show that suppressing an unwanted trait chronically primes that trait construct, causing subjects to hyper-detect it in ambiguous behaviors of others.',
      },
    ],
    relatedConceptIds: [
      'projective-identification',
      'splitting',
      'displacement',
      'paranoid-schizoid-position',
    ],
    confusedWith: [
      {
        targetConceptId: 'projective-identification',
        sharedSurface: 'Both involve attributing an internal part of oneself onto another person.',
        keyDistinction:
          'Projection is a one-person mental attribution ("You’re angry at me," while the other person is actually calm); Projective Identification includes interpersonal pressure that actually INDUCES the other person to start feeling and acting out that projected state.',
        thisConceptRule: 'Intrapsychic misattribution: you perceive your disowned feeling in them, without necessarily making them feel it.',
        otherConceptRule: 'Interpersonal induction: you project a split-off part AND pressure the other person until they actually feel and enact it.',
      },
      {
        targetConceptId: 'displacement',
        sharedSurface: 'Both shift an emotion from its original source.',
        keyDistinction:
          'Projection changes WHO owns the feeling ("You are angry at me"); Displacement changes WHOM you aim your feeling at ("I am angry at the waiter instead of my boss").',
        thisConceptRule: 'Swaps the SUBJECT ("They feel X toward me").',
        otherConceptRule: 'Swaps the OBJECT ("I feel X toward substitute Y").',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'projection',
      buttonLabel: 'Simulate Projection in Switchboard',
    },
  },
  {
    id: 'suppression',
    name: 'Suppression',
    subtitle: 'Consciously Shelving a Worry Until You Can Deal With It',
    lens: 'ego-psychology',
    category: 'Defense Mechanism',
    dmrsLevel: 7,
    dmrsLevelName: 'Level 7: High-Adaptive (Mature)',
    tenSecondIntuition:
      'Unlike unconscious Repression, Suppression is a conscious, mature executive skill: acknowledging a painful feeling ("I am really anxious about this biopsy result"), placing it in a mental holding tray during a meeting, and returning to process it later.',
    clinicalVignette:
      'An ER doctor feels grief after a difficult code, takes 60 seconds to acknowledge it, sets it aside to treat the next patient safely, and talks it through with a peer after her shift.',
    ideaVsAffect: {
      rawImpulseExample: 'Acute worry or grief arriving at an inconvenient moment.',
      ideaFate: 'Conscious',
      ideaDescription: 'The thought is fully recognized and remembered—never erased from awareness.',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'Affective urgency is temporarily modulated without numbing or somatic conversion.',
      consciousOutput: 'Focused presence in the moment with full ability to revisit the emotion later.',
    },
    pdm2Context:
      'DMRS Level 7 High-Adaptive defense; indicator of strong Ego regulation on the PDM-2 M-Axis.',
    foundationalOrigin: {
      theorist: 'Anna Freud & George Vaillant',
      year: '1936 / 1977',
      seminalWork: 'Adaptation to Life (Vaillant, 1977)',
      originalFormulation:
        'Vaillant described suppression as the "stoicism" of mature defenses: keeping both the idea and the affect in mind while postponing action or rumination.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Harvard Grant Study & DMRS Level 7',
        citation: 'Vaillant (1977, 2002); Perry (1990)',
        findingOrOperationalization:
          'Use of mature Level 7 defenses (Suppression, Humor, Sublimation, Altruism) between ages 20–47 robustly predicted psychosocial thriving, income, and health at age 75.',
      },
    ],
    relatedConceptIds: [
      'repression',
      'sublimation',
      'dmrs-hierarchy',
    ],
    confusedWith: [
      {
        targetConceptId: 'repression',
        sharedSurface: 'Both keep distressing thoughts from dominating current attention.',
        keyDistinction:
          'Suppression is conscious, flexible, and temporary (Level 7 Mature); Repression is unconscious, automatic, and banishes the idea completely (Level 5 Neurotic).',
        thisConceptRule: 'Conscious postponement: "I know what hurts, and I’ll tend to it tonight."',
        otherConceptRule: 'Unconscious amnesia: "I have no idea why I feel so tense."',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'sublimation',
      buttonLabel: 'Compare Mature vs. Neurotic Routing',
    },
  },
  {
    id: 'sublimation',
    name: 'Sublimation',
    subtitle: 'Alchemizing Raw Conflict Into Creative or Prosocial Mastery',
    lens: 'ego-psychology',
    category: 'Defense Mechanism',
    dmrsLevel: 7,
    dmrsLevelName: 'Level 7: High-Adaptive (Mature)',
    tenSecondIntuition:
      'The gold standard of mature defenses: instead of blocking or fighting a powerful raw emotion (grief, rage, competitive fire), the mind channels that exact energy into art, humor, mentorship, athletics, or social reform.',
    clinicalVignette:
      'After surviving a bitter wrongful dismissal, an employee channels her outrage into founding a pro-bono workplace rights clinic and writing a sharp, funny guidebook for workers.',
    ideaVsAffect: {
      rawImpulseExample: 'Fierce anger and grief over injustice or loss.',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'The core meaning is fully owned and elevated into a symbolic, constructive goal.',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'The raw emotional energy is preserved as vital fuel rather than dammed up, resulting in genuine satisfaction.',
      consciousOutput: 'Vitality, creative synthesis, humor, and meaningful contribution.',
    },
    pdm2Context:
      'DMRS Level 7 High-Adaptive defense; represents full integration of drive, affect, and social reality.',
    foundationalOrigin: {
      theorist: 'Sigmund Freud & George Vaillant',
      year: '1905 / 1977',
      seminalWork: 'Three Essays on the Theory of Sexuality; Adaptation to Life',
      originalFormulation:
        'Freud proposed that instinctual aims can be deflected toward socially higher, non-conflictual goals without losing their underlying vitality.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Harvard Grant Study Longitudinal Outcomes',
        citation: 'Vaillant (1977, 1993, 2012)',
        findingOrOperationalization:
          'Sublimation and Humor emerged as the strongest psychological predictors of successful aging, marital satisfaction, and resilience following bereavement.',
      },
    ],
    relatedConceptIds: [
      'suppression',
      'reaction-formation',
      'compromise-formation',
      'dmrs-hierarchy',
    ],
    confusedWith: [
      {
        targetConceptId: 'reaction-formation',
        sharedSurface: 'Both result in socially praised behavior.',
        keyDistinction:
          'Reaction Formation blocks the original impulse and forces its rigid opposite; Sublimation honors and uses the original energy flexibly without anxiety.',
        thisConceptRule: 'Integrates and channels the authentic impulse (Level 7 Mature).',
        otherConceptRule: 'Represses the impulse and performs its brittle opposite (Level 5 Neurotic).',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'sublimation',
      buttonLabel: 'Watch Sublimation Channel Energy in Switchboard',
    },
  },
];
