import {
  OnboardingPillar,
  SurfaceVsDepthComparison,
  RealWorldBehaviorScenario,
  HistoricalEvolutionEra,
  MythVsRealityItem,
  StarterPathway,
} from '../types/psychodynamics';

export const ONBOARDING_CORE_PREMISE = {
  eyebrow: '0. Start Here · Plain-English Orientation',
  headline: 'Why do smart, self-aware people keep doing things they consciously want to stop?',
  leadParagraph:
    'You already know that procrastinating hurts your career, that picking a fight when you feel insecure pushes your partner away, and that bottling up anger leaves you exhausted. Yet knowing that rarely stops the pattern. Psychodynamics is the study of the hidden emotional logic underneath our behavior—how our minds automatically protect us from feelings we once learned were unsafe, and how yesterday’s survival strategies quietly become today’s roadblocks.',
  whatItIsInOneSentence:
    'Just as "thermodynamics" studies how heat and energy move and transform inside a physical system, "psychodynamics" studies how wishes, fears, and emotional energy move, collide, and transform inside a human mind.',
  whatProblemItSolves:
    'Most advice assumes that if you just tell yourself to think rationally, your feelings and habits will obey. Psychodynamics starts where willpower fails: it asks what hidden job a frustrating habit is secretly doing to protect you.',
};

export const SURFACE_VS_DEPTH_COMPARISONS: SurfaceVsDepthComparison[] = [
  {
    id: 'chronic-procrastination',
    everydayProblem: 'Putting off an important creative or career project until the last minute',
    personQuote: '"I just have terrible discipline. I need a stricter productivity app."',
    surfaceView: {
      label: 'Surface / Willpower View',
      assumption: 'The problem is poor time management, laziness, or weak habits.',
      typicalAdvice: 'Buy a planner, set 25-minute timers, and force yourself to work.',
      whyItOftenStalls:
        'You still avoid the desk—because the problem was never the calendar. It was the emotional stakes attached to finishing.',
    },
    psychodynamicView: {
      label: 'Psychodynamic / Underlying-Pattern View',
      hiddenFunction:
        'Procrastination is acting as an emotional shield. If you try at 100% effort and the work is judged as mediocre, your deepest sense of worth feels crushed. If you rush it in 3 hours, your mind keeps a built-in excuse: "Well, I barely tried."',
      curiousQuestion: 'What vulnerable feeling—shame, exposure, or disappointing someone—is procrastination protecting you from right now?',
      whatChanges:
        'Instead of fighting "laziness," you address the fear of harsh judgment and perfectionistic shame that made starting feel dangerous.',
    },
  },
  {
    id: 'picking-fights-after-closeness',
    everydayProblem: 'Picking a petty argument or going cold right after a warm, intimate weekend',
    personQuote: '"We just have communication issues—or maybe we aren’t compatible."',
    surfaceView: {
      label: 'Surface / Symptom View',
      assumption: 'You are genuinely furious about the unwashed coffee mug, or you lack conflict-resolution skills.',
      typicalAdvice: 'Use "I-statements" and negotiate household chores more clearly.',
      whyItOftenStalls:
        'Next time closeness deepens, your mind simply finds a brand-new topic to pick a fight over.',
    },
    psychodynamicView: {
      label: 'Psychodynamic / Underlying-Pattern View',
      hiddenFunction:
        'Letting someone matter deeply activates an old, unspoken alarm: "Now they have the power to hurt or leave me." Picking a fight creates controlled distance so you feel back in control before you can be blindsided.',
      curiousQuestion: 'When did feeling close and dependent first start feeling like standing on a trapdoor?',
      whatChanges:
        'You begin to notice the "intimacy hangover" alarm in real time and name the vulnerability instead of blowing up the bridge.',
    },
  },
  {
    id: 'chronic-overhelping-burnout',
    everydayProblem: 'Saying "yes" to everyone’s problems at work and home while feeling secretly exhausted and bitter',
    personQuote: '"I’m just too nice—people always take advantage of me."',
    surfaceView: {
      label: 'Surface / Behavioral View',
      assumption: 'You simply forgot to say "no" and need assertiveness scripts.',
      typicalAdvice: 'Practice saying "I don’t have bandwidth right now."',
      whyItOftenStalls:
        'Every time you try to say "no," a wave of guilt or panic hits you, so you apologize and take on the task anyway.',
    },
    psychodynamicView: {
      label: 'Psychodynamic / Underlying-Pattern View',
      hiddenFunction:
        'Early on, you may have learned that having your own needs or anger risked rejection—whereas being the indispensable fixer kept you safe and valued. Meanwhile, your natural frustration doesn’t vanish; it leaks out sideways as exhaustion or quiet resentment.',
      curiousQuestion: 'What happens inside you if you imagine someone being disappointed with you—and you not fixing it?',
      whatChanges:
        'You separate healthy generosity from compulsive self-erasure, allowing your own needs and frustration into the room without terror.',
    },
  },
  {
    id: 'going-numb-in-conflict',
    everydayProblem: 'Going completely blank, robotic, or ultra-intellectual during emotional conversations',
    personQuote: '"I’m just a logical, unemotional person. I don’t see why everyone gets so worked up."',
    surfaceView: {
      label: 'Surface / Trait View',
      assumption: 'You simply have a cool, rational personality with low emotional intensity.',
      typicalAdvice: 'Keep relying on logic—or try harder to "be more expressive."',
      whyItOftenStalls:
        'Partners feel lonely around your wall, and your muted stress often shows up in your body instead (tension, insomnia, stomach knots).',
    },
    psychodynamicView: {
      label: 'Psychodynamic / Underlying-Pattern View',
      hiddenFunction:
        'Your mind isn’t lacking emotion—it is pulling an automatic circuit breaker. It keeps the factual words on screen while unplugging the bodily feeling so you don’t feel flooded, helpless, or out of control.',
      curiousQuestion: 'What emotion would surge up if the logical circuit breaker stayed open for ten seconds?',
      whatChanges:
        'You build tolerance for feeling grief, anger, or tenderness in your body without needing to anesthetize yourself.',
    },
  },
];

export const ONBOARDING_PILLARS: OnboardingPillar[] = [
  {
    id: 'unconscious-undercurrent',
    number: '01',
    plainEnglishTitle: 'Much of Mental Life Happens Off-Stage',
    everydayQuestion: 'Why do I react before I even know why I’m upset?',
    coreIdea:
      'Just as your brain regulates your heartbeat and balance without asking your permission, it also tracks emotional threats, wishes, and slights outside conscious awareness. You can sincerely believe one story in your head while your gut and actions are following another.',
    concreteExample:
      'Forgetting a meeting you secretly dreaded, or feeling an instant knot in your stomach around a boss whose tone subtly resembles a hyper-critical parent.',
    shedlerEmpiricalAnchor:
      'Shedler (2010) Core Feature #1 & #2: Focus on affect and unconscious / conflicting mental processes supported by cognitive and affective neuroscience.',
    accentColor: 'indigo',
  },
  {
    id: 'protective-sideways-moves',
    number: '02',
    plainEnglishTitle: 'Self-Sabotage Is Almost Always Self-Protection in Disguise',
    everydayQuestion: 'Why do I keep doing things that work against my own goals?',
    coreIdea:
      'When a genuine feeling (like anger, longing, envy, or grief) feels too dangerous or shameful to face directly, the mind automatically bends, hides, or redirects it. Clinicians call these "defense mechanisms"—not because you are being stubborn, but because your mind is trying to keep you safe from emotional pain.',
    concreteExample:
      'Cracking a self-deprecating joke the exact second a conversation turns tender, so no one can reject your sincere feelings.',
    shedlerEmpiricalAnchor:
      'Shedler (2010) Core Feature #3: Identifying recurring efforts to avoid distressing thoughts and feelings (Defense Mechanisms / DMRS).',
    accentColor: 'emerald',
  },
  {
    id: 'past-templates-in-present',
    number: '03',
    plainEnglishTitle: 'Yesterday’s Survival Map Shapes Today’s Relationships',
    everydayQuestion: 'Why do I keep ending up in the same relationship dynamic with totally different people?',
    coreIdea:
      'As children, we build an intuitive map of how people work: "If I need comfort, people get annoyed," or "I am only loved when I achieve." In adulthood, we don’t just remember that map—we unconsciously expect it, look for it, and sometimes accidentally nudge new people into playing the old familiar role.',
    concreteExample:
      'Expecting a partner to lose interest, becoming guarded and chilly first, and accidentally causing the very distance you feared.',
    shedlerEmpiricalAnchor:
      'Shedler (2010) Core Feature #4, #5 & #6: Recurring themes/patterns, developmental origins, and interpersonal relations (Luborsky’s CCRT & Attachment Research).',
    accentColor: 'amber',
  },
  {
    id: 'insight-plus-new-experience',
    number: '04',
    plainEnglishTitle: 'Naming What’s Underneath Restores Your Freedom to Choose',
    everydayQuestion: 'How does understanding this actually help me change?',
    coreIdea:
      'As long as a fear or wish operates in the dark, it runs on autopilot. When you can safely feel the avoided emotion and see the old survival rule in daylight—especially inside a relationship that responds differently than the past—you stop having to act it out automatically.',
    concreteExample:
      'Catching yourself about to send a cutting text, recognizing "Wait—I’m actually terrified they forgot me," and expressing the honest need instead.',
    shedlerEmpiricalAnchor:
      'Shedler (2010) Meta-Analytic Finding: Psychodynamic therapy produces large effect sizes (d = 0.97) that continue to grow after treatment ends because underlying patterns shift.',
    accentColor: 'rose',
  },
];

export const REAL_WORLD_SCENARIOS: RealWorldBehaviorScenario[] = [
  {
    id: 'intimacy-hangover-pullback',
    categoryTag: 'Relationships & Closeness',
    title: 'Picking a Fight Right After a Great Weekend',
    subtitle: 'Why closeness can suddenly trigger an urge to pull away or find fault',
    everydaySituation:
      'Maya and her partner just spent their warmest, most connected weekend together—laughing, opening up about childhood memories, and talking about moving in together. On Monday morning, her partner takes 45 minutes longer than usual to reply to a text. Maya’s chest tightens; when he calls that evening, she is icy, sarcastic, and picks an argument about how "we’re clearly on different wavelengths."',
    consciousStory:
      '"I’m just annoyed that he’s inconsistent, and maybe I realized over the weekend that we have too many little incompatibilities."',
    underneathBreakdown: {
      hiddenWishOrFeeling:
        'A deep wish to be treasured, safe, and emotionally held by someone who truly matters.',
      whyItFeelsUnsafe:
        'Letting someone become that important activates an old emotional memory: "When I let my guard down and need someone, that is the exact moment I get dropped or humiliated."',
      sidewaysProtectiveMove:
        'Rather than waiting helplessly to be hurt, her mind hits the eject button first—turning tender longing into cool irritation and pre-emptive withdrawal.',
      theIronyOrCost:
        'Her partner feels baffled and pushed away by the sudden chill, pulling back in self-defense—which accidentally "proves" Maya’s fear that people always go distant!',
    },
    researchInspiration: {
      studyOrFramework: 'Core Conflictual Relationship Theme (CCRT) & Attachment Deactivation Studies',
      researchers: 'Lester Luborsky (1977, 1998) & Mary Main / Phillip Shaver',
      plainEnglishFinding:
        'In hundreds of recorded relationship narratives, Luborsky showed that people repeatedly replay a 3-part script: a core Wish (W), an expected negative Response from the Other (RO), and a defensive Response of the Self (RS) that often provokes the exact reaction they feared.',
    },
    formalBridge: {
      formalConceptName: 'Core Conflictual Relationship Theme (CCRT) & Pre-emptive Enactment',
      whyItHasThisName:
        'Psychodynamic researchers call this a "CCRT loop" or "interpersonal enactment"—where an old protective script is acted out in real time instead of being put into words.',
      linkedConceptId: 'ccrt',
      linkedLensId: 'relational-empirical',
      linkedPlayground: {
        playgroundId: 'interpersonal-ccrt',
        presetId: 'closeness-preemptive-withdrawal',
        buttonLabel: 'Simulate This Relationship Loop (CCRT)',
      },
    },
  },
  {
    id: 'compulsive-rescuing-resentment',
    categoryTag: 'Work & Boundaries',
    title: 'Being the "Nicest Person in the Room"—And Secretly Steaming',
    subtitle: 'Why chronic people-pleasing and over-helping leave you exhausted and resentful',
    everydaySituation:
      'Whenever a colleague is overwhelmed or a friend has a crisis, Jordan immediately volunteers to take over—staying up until 1 a.m. fixing someone else’s slide deck and smiling warmly: "No problem at all, happy to help!" Yet two days later, Jordan feels a heavy, nameless exhaustion, snaps at a barista over a minor mistake, and lies awake thinking, "Nobody ever takes care of me."',
    consciousStory:
      '"I just have high empathy and strong work ethic. I don’t know why everyone around me is so selfish."',
    underneathBreakdown: {
      hiddenWishOrFeeling:
        'Healthy irritation ("That’s unfair—do your own work!") and a wish to be cared for without having to earn it through endless service.',
      whyItFeelsUnsafe:
        'Growing up, showing anger or saying "no" triggered guilt, coldness, or explosive conflict. Jordan’s mind learned an iron law: "Anger makes you bad and unlovable; only selfless helpers are safe."',
      sidewaysProtectiveMove:
        'Whenever frustration rises, Jordan’s mind automatically flips it 180 degrees into extra-sweet helpfulness—working twice as hard to prove there is zero anger inside.',
      theIronyOrCost:
        'Because Jordan wears a mask of cheerful availability, others keep handing over more burdens, while the buried anger leaks out as burnout, headaches, and secret bitterness.',
    },
    researchInspiration: {
      studyOrFramework: 'Harvard Grant Study of Adult Development & DMRS Defense Hierarchy',
      researchers: 'Anna Freud (1936), George Vaillant (1977, 2012), & J. Christopher Perry',
      plainEnglishFinding:
        'Longitudinal tracking across decades showed that when people forbid themselves from feeling normal anger, they often convert it into its exaggerated opposite (compulsive niceness/appeasement)—which predicts higher somatic stress and relational resentment than healthy assertiveness.',
    },
    formalBridge: {
      formalConceptName: 'Reaction Formation & Appeasement Loop',
      whyItHasThisName:
        'Clinicians call turning an unacceptable emotion (like anger) into its exaggerated opposite (extra sweetness) "Reaction Formation"—and distinguishes it from genuine mature Altruism, which leaves you energized rather than depleted.',
      linkedConceptId: 'reaction-formation',
      linkedLensId: 'ego-psychology',
      linkedPlayground: {
        playgroundId: 'defense-switchboard',
        presetId: 'reaction-formation',
        buttonLabel: 'Test Reaction Formation in Defense Switchboard',
      },
    },
  },
  {
    id: 'laughing-at-painful-news',
    categoryTag: 'Emotions & Stress',
    title: 'Cracking a Joke or Going Clinical During Painful News',
    subtitle: 'Why we sometimes sound like a textbook or stand-up comic when life hurts',
    everydaySituation:
      'After being passed over for a promotion he worked toward for two years, Sam tells his friends the story at dinner. Instead of looking sad or angry, Sam delivers a hilarious, razor-sharp analysis of corporate macroeconomics and roasts his own career prospects—Waiters and friends are laughing, yet later that night Sam feels a strange, hollow numbness and can’t sleep.',
    consciousStory:
      '"Honestly, it’s fine. Statistically, tech restructurings happen every 18 months, so there’s no point getting emotional about it."',
    underneathBreakdown: {
      hiddenWishOrFeeling:
        'Stinging hurt, humiliation, and grief ("I poured my heart into this and felt invisible").',
      whyItFeelsUnsafe:
        'Feeling raw disappointment in front of others feels like losing composure and exposing a wound that no one will soothe.',
      sidewaysProtectiveMove:
        'Sam’s mind keeps the factual story in full view while severing the wire to the physical sting—wrapping the pain in abstract data and quick wit.',
      theIronyOrCost:
        'It keeps Sam high-functioning in the moment, but because the grief is quarantined rather than felt, no one knows he needs support—and he feels weirdly disconnected from his own life.',
    },
    researchInspiration: {
      studyOrFramework: 'Defense Mechanism Rating Scales (DMRS) — Obsessional / Neurotic Level',
      researchers: 'J. Christopher Perry (1990) & Allan Abbass (ISTDP Affect Research)',
      plainEnglishFinding:
        'Empirical transcript coding shows that high-functioning adults under stress frequently separate the "idea" of an event from its "affect" (bodily feeling), speaking in third-person generalizations when describing personal loss.',
    },
    formalBridge: {
      formalConceptName: 'Isolation of Affect & Intellectualization',
      whyItHasThisName:
        'Psychodynamics separates every emotional event into an "Idea" (the facts) and an "Affect" (the bodily feeling). Keeping the facts conscious while muting or abstracting the feeling is called Isolation of Affect and Intellectualization.',
      linkedConceptId: 'isolation-of-affect',
      linkedLensId: 'ego-psychology',
      linkedPlayground: {
        playgroundId: 'defense-switchboard',
        presetId: 'intellectualization',
        buttonLabel: 'Explore Idea vs. Affect Routing in Lab',
      },
    },
  },
  {
    id: 'pedestal-to-villain-whiplash',
    categoryTag: 'Trust & Idealization',
    title: 'From "My Favorite Person Ever" to "Dead to Me" in One Afternoon',
    subtitle: 'Why disappointment can make someone suddenly look 100% fake or untrustworthy',
    everydaySituation:
      'When Elena starts working with a new mentor, she feels invigorated: "Finally, someone who truly gets me and isn’t petty like my old bosses!" Three weeks later, the mentor is distracted during a check-in and gives blunt, rushed feedback on a draft. Instantly, Elena’s warmth vanishes: "I knew it—she’s just another cold, manipulative fraud who never cared at all."',
    consciousStory:
      '"I finally saw her true colors today. Everything nice she did before was clearly fake."',
    underneathBreakdown: {
      hiddenWishOrFeeling:
        'A longing for a completely safe, reliable protector who will never bruise or disappoint her.',
      whyItFeelsUnsafe:
        'Holding two conflicting truths at once ("This person genuinely cares about me AND she was inconsiderate and stressed today") feels emotionally agonizing—like letting poison contaminate something precious.',
      sidewaysProtectiveMove:
        'To protect herself from the shock of disappointment, Elena’s mind stores "Good/Safe" and "Bad/Hurting" in two separate, air-tight mental rooms. The moment hurt appears, the entire person is moved into the "All-Bad" room.',
      theIronyOrCost:
        'Relationships become a rollercoaster of pedestals and burnings, making steady, imperfect human closeness feel impossible.',
    },
    researchInspiration: {
      studyOrFramework: 'Reflective Functioning / Mentalization (MBT) & Object Relations Studies',
      researchers: 'Melanie Klein, Otto Kernberg (TFP), & Peter Fonagy (MBT)',
      plainEnglishFinding:
        'Neuroimaging and attachment research by Fonagy and colleagues shows that when attachment alarm surges past a threshold, prefrontal "mentalizing" (the ability to see mixed motives and nuanced shades of gray) temporarily goes offline, reverting to all-or-nothing categorization.',
    },
    formalBridge: {
      formalConceptName: 'Splitting & The Shift to Whole-Object Constancy',
      whyItHasThisName:
        'Object Relations theory calls keeping good and bad experiences strictly divided "Splitting," and calls the hard-won ability to stay connected to a flawed, three-dimensional human "Object Constancy" (or the Depressive Position).',
      linkedConceptId: 'splitting',
      linkedLensId: 'object-relations',
      linkedPlayground: {
        playgroundId: 'object-theater',
        presetId: 'mild-criticism',
        buttonLabel: 'Try the Internal Object Theater Simulator',
      },
    },
  },
  {
    id: 'procrastination-perfectionism-shield',
    categoryTag: 'Self-Worth & Ambition',
    title: 'Self-Sabotaging a Big Opportunity by Waiting Until Midnight',
    subtitle: 'How procrastination secretly protects fragile self-esteem from a real verdict',
    everydaySituation:
      'Devon cares deeply about applying for a prestigious fellowship. He has six weeks to write the proposal. Yet every time he opens the document, he suddenly feels an urgent need to reorganize his email folders, clean the kitchen, or research font pairings. He finally writes the entire application in a panicked 4-hour sprint before the deadline.',
    consciousStory:
      '"I only work well under pressure—or maybe I just have terrible focus when deadlines are far away."',
    underneathBreakdown: {
      hiddenWishOrFeeling:
        'A fierce hunger to create something remarkable and be seen as genuinely brilliant.',
      whyItFeelsUnsafe:
        'If Devon pours his whole heart and best effort into the proposal over six weeks and still gets rejected, it won’t just feel like a rejected paper—it will feel like proof that *he himself* is inadequate.',
      sidewaysProtectiveMove:
        'By delaying until the last possible night, his mind constructs a hidden insurance policy: if it succeeds, he’s a genius; if it fails, "Well, I only spent four hours on it—nobody knows what I could do if I really tried."',
      theIronyOrCost:
        'The shield protects his pride from a direct hit, but robs him of ever experiencing what he is truly capable of—and keeps him living in chronic dread.',
    },
    researchInspiration: {
      studyOrFramework: 'Self Psychology & Narcissistic Vulnerability / Shame Regulation Research',
      researchers: 'Heinz Kohut (1971, 1977) & Paul Hewitt / Andrew Elliot',
      plainEnglishFinding:
        'Clinical and empirical studies on perfectionistic avoidance show that chronic procrastination on high-identity tasks is rarely driven by apathy; it is regulated by unconscious shame-avoidance when global self-worth is fused with performance.',
    },
    formalBridge: {
      formalConceptName: 'Narcissistic Vulnerability & Grandiose/Avoidant Protection',
      whyItHasThisName:
        'In Self Psychology, "narcissistic vulnerability" doesn’t mean arrogance—it means a fragile sense of self-worth that feels threatened by ordinary imperfection, requiring perfectionistic shields or avoidance to prevent crushing shame.',
      linkedConceptId: 'narcissistic-vulnerability',
      linkedLensId: 'self-psychology',
      linkedPlayground: {
        playgroundId: 'object-theater',
        presetId: 'praise-deflation',
        buttonLabel: 'Explore Self-Esteem & Criticism in Object Theater',
      },
    },
  },
  {
    id: 'displaced-anger-wrong-target',
    categoryTag: 'Everyday Spillover',
    title: 'Smiling at a Demanding Boss—Then Snapping at Traffic or Your Partner',
    subtitle: 'Where an emotion goes when the real target has too much power',
    everydaySituation:
      'At 4:30 p.m., Marcus’s director publicly criticizes his report using figures the director himself supplied—and then asks Marcus to redo it before morning. Marcus nods politely: "Understood, I’ll take care of it." On the drive home, he furiously honks at a slow driver, and ten minutes after walking through the front door, he blows up at his partner for leaving shoes in the hallway.',
    consciousStory:
      '"People on the road are idiots today, and it’s basic respect not to leave shoes in the entryway!"',
    underneathBreakdown: {
      hiddenWishOrFeeling:
        'Hot, humiliated anger at the director ("You threw me under the bus for your own mistake!").',
      whyItFeelsUnsafe:
        'Telling off the director threatens Marcus’s job, paycheck, and professional standing—so an internal alarm blocks direct expression.',
      sidewaysProtectiveMove:
        'The anger doesn’t evaporate just because Marcus smiled. Instead, his mind keeps the full emotional charge intact and reroutes it onto a safer target (the slow driver, the shoes in the hall) who won’t fire him.',
      theIronyOrCost:
        'His job stays safe, but his home life absorbs the shrapnel of work—and Marcus feels ashamed afterward without realizing where the fury actually came from.',
    },
    researchInspiration: {
      studyOrFramework: 'Malan’s Triangle of Conflict & Vaillant’s Longitudinal Defense Studies',
      researchers: 'Sigmund Freud, Anna Freud, David Malan (1979), & George Vaillant (1992)',
      plainEnglishFinding:
        'Affective and psychodynamic studies demonstrate that suppressed emotional arousal remains physiologically active and readily transfers ("displaces") onto secondary, lower-risk stimuli—unless the person consciously names the original source or channels the energy constructively.',
    },
    formalBridge: {
      formalConceptName: 'Displacement (vs. Sublimation)',
      whyItHasThisName:
        'Psychodynamics calls moving an emotion from a dangerous original target to a safer substitute target "Displacement"—and contrasts it with "Sublimation," where that same raw energy is consciously harnessed into a workout, boundary strategy, or creative outlet.',
      linkedConceptId: 'displacement',
      linkedLensId: 'drive-conflict',
      linkedPlayground: {
        playgroundId: 'defense-switchboard',
        presetId: 'displacement',
        buttonLabel: 'Simulate Displacement vs. Sublimation in Lab',
      },
    },
  },
];

export const HISTORICAL_EVOLUTION_ERAS: HistoricalEvolutionEra[] = [
  {
    id: 'era-1-unconscious-conflict',
    stepNumber: 1,
    eraYears: '1890s – 1920s',
    chapterTitle: 'The Puzzle of Symptoms With No Physical Cause',
    humanPuzzle:
      'Patients arrived in 1890s neurology clinics with paralyzed limbs, sudden blindness, or debilitating dread—even though their nerves and organs were completely intact. Why would a healthy body or mind attack itself?',
    whatPreviousViewMissed:
      '19th-century medicine assumed that if a symptom wasn’t caused by a visible brain lesion, the patient was either "degenerate" or faking it.',
    breakthroughIdea:
      'Sigmund Freud and Josef Breuer realized these symptoms had *meaning*. When an emotional wish or painful memory clashed violently with a person’s moral standards, it didn’t vanish—it was pushed out of conscious awareness, leaking back out as a disguised symptom or slip.',
    keyFigures: ['Sigmund Freud', 'Josef Breuer'],
    everydayTakeaway:
      'You can have a fierce tug-of-war happening inside you without realizing it—and a symptom is often a compromise between a forbidden feeling and the fear of feeling it.',
    modernResearchConnection:
      'Validated today by implicit memory science and David Malan’s Triangle of Conflict (used in evidence-based Intensive Short-Term Dynamic Psychotherapy, ISTDP).',
    linkedLensId: 'drive-conflict',
  },
  {
    id: 'era-2-adaptive-ego-defenses',
    stepNumber: 2,
    eraYears: '1930s – 1960s',
    chapterTitle: 'Wait—How Do Healthy People Cope Under Pressure?',
    humanPuzzle:
      'If everyone has unconscious conflicts and painful feelings, why do some people thrive, joke, and create art under stress while others fall apart or deny reality?',
    whatPreviousViewMissed:
      'Early theory focused so heavily on buried, volcanic urges ("the Id") that it neglected the part of the mind that actually navigates daily reality, work, and coping ("the Ego").',
    breakthroughIdea:
      'Anna Freud mapped out the mind’s exact catalog of "defense mechanisms," and George Vaillant later tracked hundreds of adults over 75 years—proving that defenses live on a spectrum from immature/costly (denial, projection) to highly adaptive and life-enhancing (humor, altruism, sublimation).',
    keyFigures: ['Anna Freud', 'Heinz Hartmann', 'George Vaillant'],
    everydayTakeaway:
      'Everyone uses psychological defenses. Mental health isn’t having zero defenses—it’s upgrading from rigid, costly shields to flexible, mature ones.',
    modernResearchConnection:
      'Operationalized in J. Christopher Perry’s Defense Mechanism Rating Scales (DMRS) and the Harvard Study of Adult Development.',
    linkedLensId: 'ego-psychology',
  },
  {
    id: 'era-3-wired-for-relationships',
    stepNumber: 3,
    eraYears: '1940s – 1970s',
    chapterTitle: 'We Aren’t Driven by Isolated Instincts—We Are Wired for People',
    humanPuzzle:
      'While studying infants, war orphans, and hospitalized toddlers, clinicians saw something shocking: babies who had plenty of food and warmth still withered if deprived of consistent human bonding. And adults repeatedly stayed attached to harsh or unavailable partners.',
    whatPreviousViewMissed:
      'Classical theory assumed humans only cared about other people as a means to satisfy bodily drives (hunger, pleasure).',
    breakthroughIdea:
      'Ronald Fairbairn, Melanie Klein, Donald Winnicott, and John Bowlby revolutionized the field: *connection is the primary human survival drive*. From infancy, we record our earliest caregiving relationships as internal mental templates ("Internal Objects" or "Working Models") that color how we see everyone we meet.',
    keyFigures: ['Melanie Klein', 'Donald Winnicott', 'W.R.D. Fairbairn', 'John Bowlby'],
    everydayTakeaway:
      'We don’t react to people solely as they are today; we react through the lens of the internal relationship map we built to survive childhood.',
    modernResearchConnection:
      'Forms the bedrock of modern Attachment Theory (Bowlby/Ainsworth), Otto Kernberg’s Transference-Focused Psychotherapy (TFP), and Peter Fonagy’s Mentalization (MBT).',
    linkedLensId: 'object-relations',
  },
  {
    id: 'era-4-fragile-self-and-shame',
    stepNumber: 4,
    eraYears: '1970s – 1980s',
    chapterTitle: 'What When the Core Problem isn’t Guilt—It’s Feeling Empty or Defective?',
    humanPuzzle:
      'Clinicians noticed a growing group of patients who didn’t feel torn by guilty desires; instead, they felt hollow, fraudulent, hypersensitive to slights, or swingingly perfectionistic and deflated.',
    whatPreviousViewMissed:
      'Interpreting a shame-fragile person’s hidden aggression often made them feel attacked and misunderstood rather than helped.',
    breakthroughIdea:
      'Heinz Kohut founded Self Psychology, showing that a sturdy sense of self-worth isn’t automatic—it requires early empathy, being proudly seen ("mirroring"), and having steady role models ("idealizing"). When those are missing, people develop protective perfectionism or people-pleasing to hold a fragile self together.',
    keyFigures: ['Heinz Kohut'],
    everydayTakeaway:
      'Bragging, perfectionism, or shutting down after mild feedback is often a desperate attempt to keep a bruised sense of self from crumbling.',
    modernResearchConnection:
      'Anchored modern empirical research into narcissistic vulnerability, shame regulation, and the therapeutic power of empathic attunement.',
    linkedLensId: 'self-psychology',
  },
  {
    id: 'era-5-lab-science-and-neuroscience',
    stepNumber: 5,
    eraYears: '1980s – Present',
    chapterTitle: 'Bringing Psychodynamics Into the Lab, RCTs, and Brain Scanners',
    humanPuzzle:
      'Critics rightly asked: "These clinical stories are compelling, but can you measure them reliably in transcripts, test them in randomized controlled trials (RCTs), and locate them in the brain?"',
    whatPreviousViewMissed:
      'Mid-20th-century psychoanalysis often relied on authority and private case notes rather than standardized empirical measurement.',
    breakthroughIdea:
      'Researchers built rigorous lab tools—Luborsky’s CCRT to score relationship loops in transcripts, Shedler’s meta-analyses comparing psychodynamic RCTs with CBT and antidepressants, Fonagy’s Mentalization trials, and Mark Solms’ Neuropsychoanalysis mapping primary emotional brain circuits.',
    keyFigures: ['Lester Luborsky', 'Jonathan Shedler', 'Peter Fonagy', 'Otto Kernberg', 'Mark Solms'],
    everydayTakeaway:
      'Modern psychodynamics is a two-person, empirically validated science of how relationships, emotion regulation, and neurobiology interact.',
    modernResearchConnection:
      'Synthesized in the Psychodynamic Diagnostic Manual (PDM-2), Shedler’s (2010) American Psychologist review, and affective neuroscience.',
    linkedLensId: 'relational-empirical',
  },
];

export const MYTH_VS_REALITY_ITEMS: MythVsRealityItem[] = [
  {
    id: 'myth-no-empirical-evidence',
    mythHeadline: 'Myth #1: "Psychodynamics has no scientific evidence—only CBT is evidence-based."',
    whyPeopleThinkThis:
      'Mid-century psychoanalysts were slow to run randomized controlled trials (RCTs), allowing pharmaceutical and brief-protocol researchers to dominate early headlines.',
    empiricalRealityHeadline:
      'Reality: Meta-analyses of RCTs show psychodynamic therapy has effect sizes as large as—or larger than—CBT and antidepressants, and its benefits keep growing after therapy ends.',
    evidenceSummary:
      'In his landmark American Psychologist paper, Jonathan Shedler (2010) synthesized multiple meta-analyses (including Abbass et al. & Leichsenring & Rabung), reporting an overall effect size of d = 0.97 for psychodynamic therapy—comparable to or exceeding CBT (d ≈ 0.68) and antidepressant medication (d ≈ 0.31). Even more striking: at 9–24 month follow-ups after treatment ended, patients’ gains grew larger (up to d = 1.51) because changing underlying emotional patterns builds lasting internal capacity.',
    keyCitation: 'Shedler, J. (2010). The Efficacy of Psychodynamic Psychotherapy. American Psychologist, 65(2), 98–109.',
    linkedConceptId: 'pdm2-framework',
  },
  {
    id: 'myth-silent-blank-screen-couch',
    mythHeadline: 'Myth #2: "It’s just lying on a couch for 10 years while a silent therapist nods and blames your mother."',
    whyPeopleThinkThis:
      'New Yorker cartoons and 1950s movies froze an outdated caricature of classical psychoanalysis in popular culture.',
    empiricalRealityHeadline:
      'Reality: Modern psychodynamic work is active, collaborative, face-to-face, and focused on your present-day emotional and relationship loops.',
    evidenceSummary:
      'Contemporary evidence-based dynamic therapies—such as Transference-Focused Psychotherapy (TFP), Mentalization-Based Treatment (MBT), and Intensive Short-Term Dynamic Psychotherapy (ISTDP)—are structured, highly interactive face-to-face conversations (often 16 to 40 sessions). We explore childhood not to assign blame to parents, but to recognize how an old survival map is quietly running your life *today* so you can update it.',
    keyCitation: 'Abbass et al. (2014); Fonagy & Bateman (MBT); Kernberg et al. (TFP).',
    linkedConceptId: 'corrective-emotional-experience',
  },
  {
    id: 'myth-everything-is-victorian-sex',
    mythHeadline: 'Myth #3: "Freud said every human problem is secretly about repressed Victorian sex."',
    whyPeopleThinkThis:
      'Freud’s earliest 1900s writings focused heavily on biological libido and taboo impulses in turn-of-the-century Vienna.',
    empiricalRealityHeadline:
      'Reality: Over the past 85 years, the field discovered that our deepest struggles revolve around attachment, safety, grief, anger, and self-worth.',
    evidenceSummary:
      'Starting with Fairbairn, Bowlby, Winnicott, and Kohut—and confirmed by modern affective neuroscience (Panksepp & Solms)—psychodynamics recognizes seven core emotional brain systems: SEEKING (curiosity/purpose), PANIC/GRIEF (attachment & separation), CARE, PLAY, RAGE, FEAR, and LUST. Most everyday defenses protect us from attachment grief, humiliation, or vulnerability.',
    keyCitation: 'Solms, M. (2015, 2021). The Feeling Brain / The Hidden Spring; Panksepp (1998).',
    linkedConceptId: 'neuropsychoanalysis-affect',
  },
  {
    id: 'myth-defenses-mean-broken-or-weak',
    mythHeadline: 'Myth #4: "Using defense mechanisms means you are manipulative, weak, or mentally ill."',
    whyPeopleThinkThis:
      'In everyday slang, calling someone "defensive" sounds like an insult.',
    empiricalRealityHeadline:
      'Reality: Defenses are normal psychological immune responses—and mature defenses predict lifelong health, thriving relationships, and resilience.',
    evidenceSummary:
      'George Vaillant’s 75-year Harvard Grant Study followed 268 men from college into their 80s and 90s. Every single participant used defense mechanisms. The strongest predictor of flourishing mental health, warm relationships, and higher income at age 75 wasn’t childhood wealth or IQ—it was shifting from immature defenses (projection, passive aggression) to mature defenses like Humor, Altruism, Anticipation, and Sublimation.',
    keyCitation: 'Vaillant, G. E. (1977). Adaptation to Life; Vaillant, G. E. (2012). Triumphs of Experience.',
    linkedConceptId: 'dmrs-hierarchy',
  },
  {
    id: 'myth-unconscious-is-mystical',
    mythHeadline: 'Myth #5: "The \'unconscious mind\' is an unprovable, mystical philosophy."',
    whyPeopleThinkThis:
      'Before modern brain imaging and cognitive science, nobody could directly observe non-conscious mental processing in a laboratory.',
    empiricalRealityHeadline:
      'Reality: Cognitive neuroscience and neuropsychoanalysis now confirm that the vast majority of emotional evaluation and habit activation happens outside conscious awareness.',
    evidenceSummary:
      'Modern neuroscience distinguishes between explicit (declarative) memory and implicit (procedural/emotional) memory mediated by subcortical networks and the amygdala. We continuously detect relational cues and activate protective routines milliseconds before the prefrontal cortex constructs a conscious explanation.',
    keyCitation: 'Solms (2018) Frontiers in Behavioral Neuroscience; Westen (1998) Psychological Bulletin.',
    linkedConceptId: 'primary-secondary-process',
  },
];

export const STARTER_PATHWAYS: StarterPathway[] = [
  {
    id: 'pathway-everyday-defenses',
    badge: 'Track 1 · Most Popular for Beginners',
    title: 'Everyday Stress, Anxiety & Self-Defense',
    whoThisIsFor:
      'You want to understand why your mind overthinks, procrastinates, jokes away pain, or snaps at the wrong person under stress.',
    whatYouWillExplore:
      'Jump into the Defense Switchboard Simulator to test how the exact same emotional trigger transforms when routed through 7 different defense mechanisms, or explore Lens 2 (Ego Psychology).',
    accentColor: 'emerald',
    recommendedLensId: 'ego-psychology',
    recommendedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'intellectualization',
      buttonLabel: 'Launch Defense Switchboard Lab',
    },
    recommendedConceptIds: ['triangle-of-conflict', 'isolation-of-affect', 'sublimation'],
  },
  {
    id: 'pathway-relationship-loops',
    badge: 'Track 2 · Relationships & Attachment',
    title: 'Why Do We Repeat the Same Relationship Loops?',
    whoThisIsFor:
      'You are curious about attachment, why closeness can trigger pullback or conflict, and how early family templates replay in adult partnerships.',
    whatYouWillExplore:
      'Step through Luborsky’s CCRT Interpersonal Loop Simulator to see how a hidden wish and fear accidentally pull others into confirming our old expectations—and how to interrupt the cycle.',
    accentColor: 'rose',
    recommendedLensId: 'relational-empirical',
    recommendedPlayground: {
      playgroundId: 'interpersonal-ccrt',
      presetId: 'closeness-preemptive-withdrawal',
      buttonLabel: 'Launch Relationship Loop (CCRT) Lab',
    },
    recommendedConceptIds: ['ccrt', 'internal-working-models', 'corrective-emotional-experience'],
  },
  {
    id: 'pathway-splitting-and-self-worth',
    badge: 'Track 3 · Pedestals, Criticism & Self-Esteem',
    title: 'All-or-Nothing Thinking, Shame & Fragile Pride',
    whoThisIsFor:
      'You want to understand why mild criticism can feel crushing, or why people swing between putting someone on a pedestal and writing them off completely.',
    whatYouWillExplore:
      'Experiment with the Internal Object Theater Simulator to slide between "Split / All-or-Nothing Mode" and "Integrated / Whole-Person Mode," and explore Object Relations & Self Psychology.',
    accentColor: 'amber',
    recommendedLensId: 'object-relations',
    recommendedPlayground: {
      playgroundId: 'object-theater',
      presetId: 'mild-criticism',
      buttonLabel: 'Launch Internal Object Theater Lab',
    },
    recommendedConceptIds: ['splitting', 'object-constancy', 'narcissistic-vulnerability'],
  },
  {
    id: 'pathway-full-five-lenses',
    badge: 'Track 4 · Complete Curriculum Map',
    title: 'Compare All 5 Schools Side-by-Side',
    whoThisIsFor:
      'Now that you have the big picture, you want to see how the 5 major schools of psychodynamics compare—including a single real-life case analyzed through all 5 lenses.',
    whatYouWillExplore:
      'Open "1. The 5 Lenses" to inspect the interactive mind architecture diagram, the 5-school comparison matrix, and how each school formulates the same person’s struggle.',
    accentColor: 'indigo',
    recommendedLensId: 'drive-conflict',
    recommendedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'repression',
      buttonLabel: 'Open Defense Switchboard',
    },
    recommendedConceptIds: ['dmrs-hierarchy', 'pdm2-framework', 'neuropsychoanalysis-affect'],
  },
];
