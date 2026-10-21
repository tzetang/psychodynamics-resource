import {
  CCRTPatternScenario,
  DefenseMechanismSimulation,
  DefenseTriggerScenario,
  ObjectRelationsTrigger,
} from '../types/psychodynamics';

// ============================================================================
// PLAYGROUND 1: DEFENSE MECHANISM SWITCHBOARD & MALAN'S TRIANGLE OF CONFLICT
// ============================================================================
export const DEFENSE_TRIGGERS: DefenseTriggerScenario[] = [
  {
    id: 'unfair-boss',
    title: 'Trigger 1: Passed Over & Blamed at Work',
    context: 'Your director takes credit for your month-long project in front of leadership and blames you for a minor scheduling delay.',
    rawImpulseIdea: '"My director is unfair—I want to confront him and expose what he did!"',
    rawImpulseAffect: 'Hot retaliatory rage + humiliation (90% intensity)',
    signalAnxietyWarning: 'DANGER: If I show anger toward authority, I will be punished, exiled, or seen as out of control.',
  },
  {
    id: 'partner-distance',
    title: 'Trigger 2: Partner Pulls Away After Intimacy',
    context: 'After a deeply vulnerable weekend together, your partner goes quiet and cancels Wednesday dinner to "catch up on solo errands."',
    rawImpulseIdea: '"I need reassurance and closeness right now—please don’t leave me hanging."',
    rawImpulseAffect: 'Acute attachment panic + tender longing + hurt (85% intensity)',
    signalAnxietyWarning: 'DANGER: Showing how much I need them will make me look needy and hand them the power to crush me.',
  },
  {
    id: 'rival-success',
    title: 'Trigger 3: Close Friend Wins the Award You Wanted',
    context: 'Your best friend wins the prestigious fellowship you both applied for, while your application is rejected.',
    rawImpulseIdea: '"I am bitterly envious and wish I had won instead of them."',
    rawImpulseAffect: 'Bitter envy + competitive resentment + shame (80% intensity)',
    signalAnxietyWarning: 'DANGER: Good friends aren’t supposed to feel envious—this makes me a petty, awful person.',
  },
];

export const DEFENSE_SIMULATIONS: DefenseMechanismSimulation[] = [
  {
    id: 'splitting',
    conceptId: 'splitting',
    name: 'Splitting',
    dmrsLevel: 2,
    dmrsCategory: 'Major Image-Distorting (Borderline)',
    minEgoCapacityRequired: 10,
    shortRule: 'Compartmentalizes Self & Other into 100% All-Good or 100% All-Bad extremes; amplifies raw affect.',
    ideaAction: 'split',
    affectAction: 'pass',
    outcomesByTrigger: {
      'unfair-boss': {
        ideaTransformation: 'Erases all memory of the director’s past support; categorizes him as a 100% sadistic monster.',
        affectTransformation: 'Unmodulated persecutory rage floods consciousness.',
        consciousExperience: '"He is pure evil and has been plotting to destroy my career from day one!"',
        observableBehavior: 'Sends a scorched-earth resignation email or rallies coworkers into an all-or-nothing war.',
        clinicalTradeoff: 'Eliminates confusing ambivalence immediately, but fractures reality testing and burns bridges.',
      },
      'partner-distance': {
        ideaTransformation: 'Partner flips instantly from "Soulmate" to "Cold Narcissist Who Never Loved Me."',
        affectTransformation: 'Attachment longing is converted into desperate abandonment fury.',
        consciousExperience: '"The entire weekend was a lie—they never cared about me at all!"',
        observableBehavior: 'Texts "We’re done, don’t ever contact me again" and blocks their number.',
        clinicalTradeoff: 'Protects against the agony of uncertain waiting, but destroys the relationship.',
      },
      'rival-success': {
        ideaTransformation: 'Splits self into "Total Worthless Loser" and friend/committee into "Corrupt Frauds."',
        affectTransformation: 'Shame and envy erupt as all-consuming self-hatred or bitter contempt.',
        consciousExperience: '"I am complete garbage and the whole field is rigged against me."',
        observableBehavior: 'Cuts off the friend abruptly or abandons the career path altogether.',
        clinicalTradeoff: 'Avoids mourning a painful loss mixed with love, at the cost of isolation.',
      },
    },
  },
  {
    id: 'projection',
    conceptId: 'projection',
    name: 'Projection',
    dmrsLevel: 3,
    dmrsCategory: 'Disavowal',
    minEgoCapacityRequired: 25,
    shortRule: 'Keeps the impulse in awareness, but swaps the pronoun from "I feel X toward them" to "They feel X toward me."',
    ideaAction: 'redirect-other',
    affectAction: 'redirect-other',
    outcomesByTrigger: {
      'unfair-boss': {
        ideaTransformation: 'Disowns your own retaliatory hostility and attributes a vendetta to the director.',
        affectTransformation: 'Rage is experienced as hypervigilant fear and righteous self-defense.',
        consciousExperience: '"I’m not angry at all, but I can tell he’s obsessed with trying to get me fired."',
        observableBehavior: 'Scans every neutral email from the boss for hidden threats and acts guarded.',
        clinicalTradeoff: 'Spares you guilt over your own aggression, but leaves you living in a paranoid world.',
      },
      'partner-distance': {
        ideaTransformation: 'Projects your own hurt/anger onto the partner: "You’re mad at me."',
        affectTransformation: 'Longing is masked by defensive accusation.',
        consciousExperience: '"Why are you suddenly acting so hostile and judgmental toward me?"',
        observableBehavior: 'Repeatedly accuses the partner of being angry until an argument actually starts.',
        clinicalTradeoff: 'Avoids owning vulnerable neediness, while creating interpersonal friction.',
      },
      'rival-success': {
        ideaTransformation: 'Projects your own competitive envy onto the winning friend.',
        affectTransformation: 'Envy is turned into suspicion of the friend’s arrogance.',
        consciousExperience: '"Ever since she won, she’s been looking down on me and rubbing it in my face."',
        observableBehavior: 'Acts frosty and accuses the friend of being smug.',
        clinicalTradeoff: 'Protects moral self-image ("I’m not envious"), but ruins friendship trust.',
      },
    },
  },
  {
    id: 'repression',
    conceptId: 'repression',
    name: 'Repression',
    dmrsLevel: 5,
    dmrsCategory: 'Obsessional / Neurotic',
    minEgoCapacityRequired: 50,
    shortRule: 'Banishes the cognitive IDEA underground into the unconscious, while the AFFECT leaks out in disguise or in the body.',
    ideaAction: 'block',
    affectAction: 'discharge-body',
    outcomesByTrigger: {
      'unfair-boss': {
        ideaTransformation: 'The thought "I am furious at my boss" is completely blocked from awareness.',
        affectTransformation: 'Visceral anger stays active in the autonomic nervous system (migraine, jaw clenching, fatigue).',
        consciousExperience: '"The meeting was totally fine! I just have this brutal tension headache and feel wiped out."',
        observableBehavior: 'Smiles politely in the meeting, then spends the evening in bed with stomach spasms.',
        clinicalTradeoff: 'Preserves external harmony and moral conscience, at the cost of somatic distress and emotional numbness.',
      },
      'partner-distance': {
        ideaTransformation: 'Forgets how much the canceled dinner mattered ("I didn’t even realize it was Wednesday").',
        affectTransformation: 'Attachment sadness lingers as vague, free-floating gloom or restlessness.',
        consciousExperience: '"I’m not bothered that he canceled—I just feel oddly blue and unfocused tonight."',
        observableBehavior: 'Scrolls aimlessly or overeats without connecting the mood to the canceled date.',
        clinicalTradeoff: 'Avoids conscious rejection pain, but leaves emotional needs unaddressed.',
      },
      'rival-success': {
        ideaTransformation: 'Consciously forgets the rival’s news or draws a blank when trying to send a congratulatory note.',
        affectTransformation: 'Envy and grief surface as sudden unexplained tearfulness over a sad commercial.',
        consciousExperience: '"I’m totally happy for her! Weirdly, I completely forgot to reply to her text."',
        observableBehavior: 'Unintended slips (forgetting the celebration party date) paired with vague guilt.',
        clinicalTradeoff: 'Keeps conscious self-image pure, while the conflict leaks out via slips.',
      },
    },
  },
  {
    id: 'reaction-formation',
    conceptId: 'reaction-formation',
    name: 'Reaction Formation',
    dmrsLevel: 5,
    dmrsCategory: 'Obsessional / Neurotic',
    minEgoCapacityRequired: 55,
    shortRule: 'Inverts the unacceptable Idea and Affect 180 degrees into their exact exaggerated opposite.',
    ideaAction: 'invert',
    affectAction: 'invert',
    outcomesByTrigger: {
      'unfair-boss': {
        ideaTransformation: '"I hate him" is flipped 180° into "He is so brilliant and overworked—I must rescue him."',
        affectTransformation: 'Fury is converted into anxious, compulsive solicitousness.',
        consciousExperience: '"I really need to work until 1 AM tonight to make sure his slides look extra polished!"',
        observableBehavior: 'Praises the boss effusively in public and volunteers for even more unpaid work.',
        clinicalTradeoff: 'Guarantees zero conflict with authority, but breeds chronic burnout and resentment.',
      },
      'partner-distance': {
        ideaTransformation: '"I want you close" is inverted into exaggerated cheerfulness about being alone.',
        affectTransformation: 'Hurt is converted into brittle, hyper-enthusiastic caretaking.',
        consciousExperience: '"Oh yay, take the whole week off! In fact, let me drop groceries at your door so you can focus!"',
        observableBehavior: 'Acts overly accommodating and cheerful while suppressing every personal need.',
        clinicalTradeoff: 'Never risks appearing demanding, but starves authentic intimacy.',
      },
      'rival-success': {
        ideaTransformation: '"I resent your win" flips into saintly, over-the-top adulation.',
        affectTransformation: 'Envy is harnessed to fuel compulsive celebration planning.',
        consciousExperience: '"You deserved this 100 times more than me! Let me organize a 40-person surprise party for you!"',
        observableBehavior: 'Showers the friend with exhausting, slightly suffocating praise.',
        clinicalTradeoff: 'Protects against superego guilt over envy, but feels hollow and exhausting inside.',
      },
    },
  },
  {
    id: 'displacement',
    conceptId: 'displacement',
    name: 'Displacement',
    dmrsLevel: 5,
    dmrsCategory: 'Obsessional / Neurotic',
    minEgoCapacityRequired: 50,
    shortRule: 'Keeps the genuine Idea and raw Affect intact, but redirects them onto a safer, less threatening target.',
    ideaAction: 'pass',
    affectAction: 'pass',
    outcomesByTrigger: {
      'unfair-boss': {
        ideaTransformation: 'Shifts the grievance from the powerful director onto a slow barista or messy roommate.',
        affectTransformation: 'Full 90% rage is discharged—just aimed at the substitute target.',
        consciousExperience: '"It is completely unacceptable that this cafe took 12 minutes to make my sandwich!"',
        observableBehavior: 'Stays silent at work, then snaps furiously at a family member or customer service rep.',
        clinicalTradeoff: 'Releases emotional pressure safely away from the boss, but damages innocent relationships.',
      },
      'partner-distance': {
        ideaTransformation: 'Redirects anger about being blown off onto a friend who replied late to a group chat.',
        affectTransformation: 'Hurt and irritation pour out toward the safer target.',
        consciousExperience: '"Nobody in my friend group ever respects my time!"',
        observableBehavior: 'Picks a disproportionate argument with a friend or sibling that evening.',
        clinicalTradeoff: 'Spares the romantic bond from direct confrontation, while confusing everyone else.',
      },
      'rival-success': {
        ideaTransformation: 'Displaces resentment from the best friend onto an unrelated organization or minor rule.',
        affectTransformation: 'Bitter indignation is vented fiercely at the substitute target.',
        consciousExperience: '"The parking office at this university is corrupt and incompetent!"',
        observableBehavior: 'Writes a 3-page complaint letter about a trivial administrative issue.',
        clinicalTradeoff: 'Preserves the friendship on the surface while discharging competitive rage elsewhere.',
      },
    },
  },
  {
    id: 'isolation-of-affect',
    conceptId: 'isolation-of-affect',
    name: 'Isolation of Affect',
    dmrsLevel: 6,
    dmrsCategory: 'Obsessional / Neurotic',
    minEgoCapacityRequired: 65,
    shortRule: 'Retains the exact factual IDEA in crisp detail while surgically unplugging the emotional AFFECT.',
    ideaAction: 'pass',
    affectAction: 'block',
    outcomesByTrigger: {
      'unfair-boss': {
        ideaTransformation: 'Remembers and states every factual detail of the boss’s credit-stealing with precision.',
        affectTransformation: 'Anger and humiliation are completely muted; vocal tone is flat and matter-of-fact.',
        consciousExperience: '"At 10:14 AM he attributed my Q3 architecture to himself. I feel completely neutral about it."',
        observableBehavior: 'Recounts the betrayal like a court stenographer reading a weather report.',
        clinicalTradeoff: 'Allows clear-headed cognitive survival under fire, but causes emotional deadness and disconnection.',
      },
      'partner-distance': {
        ideaTransformation: 'Acknowledges the canceled dinner and shift in tone as objective data points.',
        affectTransformation: 'Attachment longing and sting of rejection are severed from awareness.',
        consciousExperience: '"She canceled Wednesday dinner at 4 PM. That frees up 2.5 hours in my calendar."',
        observableBehavior: 'Replies "Acknowledged, enjoy your errands" with zero warmth or protest.',
        clinicalTradeoff: 'Prevents emotional flooding, but makes the person seem robotic and unreachable to partners.',
      },
      'rival-success': {
        ideaTransformation: 'Catalogues the exact scoring criteria and outcome of the fellowship without distortion.',
        affectTransformation: 'Disappointment and envy are completely numbed.',
        consciousExperience: '"She received the grant and my proposal was declined in round two. It’s just data."',
        observableBehavior: 'Discusses the rejection immediately with eerie calm and zero visible sadness.',
        clinicalTradeoff: 'Avoids messy vulnerability, but blocks necessary mourning and emotional support.',
      },
    },
  },
  {
    id: 'intellectualization',
    conceptId: 'intellectualization',
    name: 'Intellectualization',
    dmrsLevel: 6,
    dmrsCategory: 'Obsessional / Neurotic',
    minEgoCapacityRequired: 65,
    shortRule: 'Escapes first-person emotional pain by zooming out into abstract theories, statistics, or philosophical concepts.',
    ideaAction: 'abstract',
    affectAction: 'block',
    outcomesByTrigger: {
      'unfair-boss': {
        ideaTransformation: 'Converts "My boss hurt me" into an abstract sociological thesis on corporate hierarchies.',
        affectTransformation: 'Personal outrage is neutralized by academic curiosity.',
        consciousExperience: '"Middle-management credit appropriation is a classic byproduct of Weberian bureaucracy."',
        observableBehavior: 'Lectures friends on organizational game theory instead of saying "I feel betrayed."',
        clinicalTradeoff: 'Provides cognitive mastery, while keeping vulnerability locked behind a lectern.',
      },
      'partner-distance': {
        ideaTransformation: 'Turns personal heartache into a textbook analysis of attachment styles.',
        affectTransformation: 'Raw longing is replaced by diagnostic theorizing.',
        consciousExperience: '"It’s fascinating how modern dyads oscillate between autonomy and enmeshment post-intimacy."',
        observableBehavior: 'Analyzes the relationship like a research paper rather than sharing feelings.',
        clinicalTradeoff: 'Feels smart and in control, but substitutes insight-jargon for real emotional intimacy.',
      },
      'rival-success': {
        ideaTransformation: 'Abstracts personal loss into macroeconomic funding statistics.',
        affectTransformation: 'Sting of defeat is buffered by analytical distance.',
        consciousExperience: '"Statistically, grant selection with an 8% base rate is indistinguishable from a Poisson lottery."',
        observableBehavior: 'Debates institutional methodology rather than admitting disappointment.',
        clinicalTradeoff: 'Protects pride through intellect, while leaving the hurt unmourned.',
      },
    },
  },
  {
    id: 'sublimation',
    conceptId: 'sublimation',
    name: 'Sublimation & Mature Integration',
    dmrsLevel: 7,
    dmrsCategory: 'High-Adaptive (Mature)',
    minEgoCapacityRequired: 80,
    shortRule: 'Keeps both Idea and Affect conscious, integrated, and channeled into constructive assertion, creativity, or humor.',
    ideaAction: 'pass',
    affectAction: 'channel-constructive',
    outcomesByTrigger: {
      'unfair-boss': {
        ideaTransformation: 'Fully recognizes the injustice and formulates a strategic, self-respecting response.',
        affectTransformation: 'Harnesses the anger as calm, firm assertive energy rather than destructive rage or numbness.',
        consciousExperience: '"I feel angry that he took credit—and I’m going to use this fuel to document my work and address it directly."',
        observableBehavior: 'Schedules a calm 1-on-1 to clarify authorship and channels ambition into leading the next high-visibility initiative.',
        clinicalTradeoff: 'Requires high affect tolerance, yielding authentic self-respect and effective real-world impact.',
      },
      'partner-distance': {
        ideaTransformation: 'Holds both the wish for closeness AND respect for the partner’s space without catastrophizing.',
        affectTransformation: 'Feels the tender disappointment, regulates it, and communicates warmly.',
        consciousExperience: '"I feel a little bummed because I loved our weekend and miss you—let’s lock in Friday night together."',
        observableBehavior: 'Expresses warmth and desire clearly without attacking or withdrawing, then enjoys a creative evening solo.',
        clinicalTradeoff: 'Tolerates vulnerability openly, deepening secure attachment.',
      },
      'rival-success': {
        ideaTransformation: 'Holds both genuine love for the friend AND honest grief/envy over one’s own loss.',
        affectTransformation: 'Channels competitive fire into sharpening future work and celebrating the friend authentically.',
        consciousExperience: '"I’m honestly jealous and sad I didn’t get it—AND I’m proud of you! Buy me a drink while I lick my wounds."',
        observableBehavior: 'Uses playful humor and honest vulnerability with the friend, then channels the drive into a stronger project.',
        clinicalTradeoff: 'Full Depressive-Position and Level 7 maturity: zero reality distortion, deepening both ambition and friendship.',
      },
    },
  },
];

// ============================================================================
// PLAYGROUND 2: INTERNAL OBJECT THEATER (SPLITTING VS. INTEGRATION)
// ============================================================================
export const OBJECT_THEATER_TRIGGERS: ObjectRelationsTrigger[] = [
  {
    id: 'mild-criticism',
    title: 'Scenario 1: Mentor Gives 90% Praise + 10% Critique',
    eventDescription: 'A mentor you admire praises your dedication, then points out two flawed assumptions in your draft that need rewriting.',
    attachmentThreatType: 'criticism',
    splitState: {
      dominantHalf: 'all-bad-persecutory',
      selfRepresentation: 'Humiliated, Defective Fraud ("I am worthless garbage")',
      objectRepresentation: 'Sadistic, Betraying Critic ("They secretly despise me")',
      connectingAffect: 'Persecutory Shame & Vindictive Rage',
      unsplitShadowNote: 'The All-Good Idealized dyad ("Brilliant Star + Perfect Savior Mentor") is completely walled off behind the splitting barrier and inaccessible to memory.',
      behavioralEnactment: 'Tears up the draft, decides the mentor is toxic, or fires off a defensive counter-attack.',
    },
    integratedState: {
      selfRepresentation: 'Capable Learner with Blind Spots ("I did strong work AND missed two points")',
      objectRepresentation: 'Demanding but Invested Mentor ("They care enough to push me harder")',
      connectingAffect: 'Tolerable Disappointment Tempered by Gratitude & Curiosity',
      mentalizingReflection: '"My stomach dropped when I saw the red ink, which made me want to write them off—but looking at the whole picture, they’re helping me make the paper bulletproof."',
      behavioralResponse: 'Allows 15 minutes to feel stung, then integrates the edits and thanks the mentor.',
    },
  },
  {
    id: 'friend-cancels',
    title: 'Scenario 2: Close Friend Cancels Dinner Last-Minute',
    eventDescription: 'Two hours before your planned dinner, a close friend texts: "So sorry, I’m completely swamped with a deadline—can we reschedule?"',
    attachmentThreatType: 'abandonment',
    splitState: {
      dominantHalf: 'all-bad-persecutory',
      selfRepresentation: 'Unwanted, Forgotten Castoff ("Nobody ever prioritizes me")',
      objectRepresentation: 'Selfish, Abandoning Betrayer ("They only use me when convenient")',
      connectingAffect: 'Abandonment Panic & Cold Contempt',
      unsplitShadowNote: 'Object Constancy collapses: years of the friend showing up reliably vanish behind the splitting wall.',
      behavioralEnactment: 'Replies with icy sarcasm ("Whatever, don’t bother") or silently vows to cut them off forever.',
    },
    integratedState: {
      selfRepresentation: 'Valued Friend Who Is Disappointed Tonight ("I really wanted company, and I’ll be okay")',
      objectRepresentation: 'Stressed Friend Who Still Loves Me ("They’re overwhelmed today, not abandoning me")',
      connectingAffect: 'Poignant Disappointment Held Inside Enduring Warmth (Object Constancy)',
      mentalizingReflection: '"I feel lonely tonight because I was looking forward to this, but I know they love me and are drowning in work right now."',
      behavioralResponse: 'Texts back: "Aw I’m bummed, I was looking forward to seeing you! Good luck crushing the deadline—let’s pick a night next week."',
    },
  },
  {
    id: 'praise-deflation',
    title: 'Scenario 3: Romantic Partner Is Quiet & Distracted at Breakfast',
    eventDescription: 'After an amazing week together, your partner is quiet at breakfast, checking their phone and giving brief answers.',
    attachmentThreatType: 'intimacy-engulfment',
    splitState: {
      dominantHalf: 'rapid-oscillation',
      selfRepresentation: 'Oscillating: Needy Clinger ↔ Superior Self-Sufficient Island',
      objectRepresentation: 'Oscillating: Withholding Rejector ↔ Suffocating Trap',
      connectingAffect: 'Hypervigilant Dread & Preemptive Contempt',
      unsplitShadowNote: 'In Paranoid-Schizoid / Psychic Equivalence mode, "They look quiet" equals the objective certainty "Love is dead."',
      behavioralEnactment: 'Picks a preemptive fight ("What is your problem with me?!") or turns into a wall of ice for three days.',
    },
    integratedState: {
      selfRepresentation: 'Secure Partner Curious About the Other’s Mind',
      objectRepresentation: 'Whole Human Partner With Their Own Inner Weather',
      connectingAffect: 'Calm Attachment Security + Gentle Empathy',
      mentalizingReflection: '"Part of me jumped to wondering if I did something wrong, but their quiet mood probably isn’t even about me—let me just ask warmly."',
      behavioralResponse: 'Puts a hand on their shoulder: "Hey, you seem a little miles-away this morning—everything okay with your day?"',
    },
  },
];

// ============================================================================
// PLAYGROUND 3: INTERPERSONAL LOOP & LUBORSKY'S CCRT SIMULATOR
// ============================================================================
export const CCRT_SCENARIOS: CCRTPatternScenario[] = [
  {
    id: 'closeness-preemptive-withdrawal',
    title: 'Loop 1: The Preemptive Withdrawal (Fear of Rejection)',
    subtitle: 'How guarding against rejection accidentally manufactures rejection',
    originTemplate:
      'Learned with an inconsistently available or emotionally overwhelmed caregiver: showing raw need led to being brushed off or feeling ashamed of wanting too much.',
    wish: 'W (Wish): To be deeply known, cherished, and prioritized without having to beg.',
    fearedResponseFromOther: 'Expected RO: If I show how much I care, the other person will find me "too much" and pull away.',
    enactmentSteps: {
      step1WishAndAnxiety: {
        internalState: 'Person A feels a surge of tender longing and wishes to feel close to Person B after a stressful day.',
        signalAnxiety: 'Signal Anxiety spikes: "If I ask for comfort and they’re busy, I’ll feel humiliated and needy."',
      },
      step2DefensiveSignal: {
        mechanismUsed: 'Isolation of Affect + Preemptive Deactivation',
        conceptId: 'isolation-of-affect',
        overtBehaviorSent: 'Person A acts cool, aloof, and hyper-independent—giving one-word replies and acting busy on their laptop.',
        subtextSignal: 'Hidden test: "If you really loved me, you’d read my mind and pursue me through my wall."',
      },
      step3PulledResponseFromOther: {
        otherInternalReaction: 'Person B senses the icy wall, feels shut out or unwanted, and assumes Person A wants to be left alone.',
        otherObservableAction: 'Person B stops trying to connect, retreats to the other room, and makes plans with friends instead.',
        roClassification: 'Actual RO Pulled: Distant, withdrawing, and unavailable.',
      },
      step4ConfirmingResponseOfSelf: {
        selfFeelingAndAction: 'Person A watches Person B walk away, feels a crushing wave of loneliness and bitter resentment, and retreats deeper into isolation.',
        rsClassification: 'RS (Response of Self): Hurt, confirmed in loneliness, and vowed to never rely on anyone.',
        unconsciousConclusion: 'Self-Fulfilling Conclusion: "See?! Every time I need someone, they abandon me. I can only count on myself."',
      },
    },
    therapeuticInterruption: {
      step3MentalizingResponseFromOther: {
        therapistOrPartnerStance: 'Mentalizing & Naming the Protective Wall Without Retaliating',
        observableResponse:
          'Instead of walking away hurt, Person B pauses warmly: "Hey, I notice you went really quiet and armoured-up after your long day. Usually when you go icy like that, it means you’re actually hurting and scared I won’t show up. Come sit with me."',
      },
      step4CorrectiveEmotionalExperience: {
        newSelfResponse: 'Person A’s defensive armor softens; they let out a breath and admit: "Yeah... I had a rough day and was scared to seem needy."',
        schemaUpdate: 'Corrective Update: "Showing my vulnerability directly brings closeness; it’s my icy armor that was pushing people away."',
      },
    },
  },
  {
    id: 'hypervigilance-hostility-induction',
    title: 'Loop 2: Projective Identification (Provoking the Feared Critic)',
    subtitle: 'How scanning for hostility pressures the other person into becoming hostile',
    originTemplate:
      'Learned with a harsh, unpredictable, or blaming caregiver: safety required constant hypervigilant scanning for the first sign of displeasure.',
    wish: 'W (Wish): To be respected, safe, and accepted without being judged or controlled.',
    fearedResponseFromOther: 'Expected RO: Others are secretly looking down on me, waiting to attack or humiliate me.',
    enactmentSteps: {
      step1WishAndAnxiety: {
        internalState: 'Person A wants Person B’s respect on a joint project, but feels underlying self-doubt and vulnerability.',
        signalAnxiety: 'Signal Anxiety + Projection: Person A’s own harsh inner critic is projected onto Person B ("They think I’m incompetent").',
      },
      step2DefensiveSignal: {
        mechanismUsed: 'Projective Identification (Interpersonal Pressure)',
        conceptId: 'projective-identification',
        overtBehaviorSent: 'When Person B asks a neutral clarifying question, Person A snaps sarcastically: "Oh, I see you’re already policing my work—just say you think I’m an idiot!"',
        subtextSignal: 'Interpersonal induction: pressuring Person B into the role of the exasperated, attacking judge.',
      },
      step3PulledResponseFromOther: {
        otherInternalReaction: 'Person B (who initially felt friendly) feels unfairly attacked, cornered, and increasingly irritated by the constant accusations.',
        otherObservableAction: 'Person B finally loses patience and snaps back: "You know what? It’s impossible to collaborate with you when you’re this defensive!"',
        roClassification: 'Actual RO Pulled: Exasperated, critical, and attacking.',
      },
      step4ConfirmingResponseOfSelf: {
        selfFeelingAndAction: 'Person A feels righteous vindication mixed with rage—completely blind to how their own initial hostility provoked the counter-attack.',
        rsClassification: 'RS (Response of Self): Counter-attacking, aggrieved victim.',
        unconsciousConclusion: 'Self-Fulfilling Conclusion: "I KNEW it! They were hostile toward me from the very beginning!"',
      },
    },
    therapeuticInterruption: {
      step3MentalizingResponseFromOther: {
        therapistOrPartnerStance: 'Bionian Containment + Refusing the Projected "Bad Judge" Role',
        observableResponse:
          'Person B notices the surge of provoked irritation inside themselves, breathes, and says calmly: "Whoa, hold on—when I asked that question, it sounded to you like I was attacking your competence. I actually respect your work and want us on the same team. What made it land like an attack?"',
      },
      step4CorrectiveEmotionalExperience: {
        newSelfResponse: 'Person A steps out of Psychic Equivalence mode, realizes Person B isn’t attacking, and feels their nervous system settle.',
        schemaUpdate: 'Corrective Update: "My alarm bell mistook a neutral question for my old critic—and when we pause, I’m actually safe here."',
      },
    },
  },
  {
    id: 'appeasement-invisible-resentment',
    title: 'Loop 3: The False-Self Appeasement & Resentment Cycle',
    subtitle: 'How hiding your needs to keep the peace guarantees your needs are ignored',
    originTemplate:
      'Learned with a fragile, narcissistic, or overburdened caregiver: the child’s own needs were treated as selfish burdens, so love required being the effortless caretaker.',
    wish: 'W (Wish): To be cared for, noticed, and have my needs matter equally.',
    fearedResponseFromOther: 'Expected RO: If I express a preference or say no, the other person will be angry, overwhelmed, or abandon me.',
    enactmentSteps: {
      step1WishAndAnxiety: {
        internalState: 'Person A is exhausted and wishes Person B would take over weekend chores and ask how Person A is feeling.',
        signalAnxiety: 'Superego Guilt + Signal Anxiety: "Asking for help is selfish and will cause conflict."',
      },
      step2DefensiveSignal: {
        mechanismUsed: 'Reaction Formation + Compliant False Self',
        conceptId: 'reaction-formation',
        overtBehaviorSent: 'Person A smiles brightly, says "No, I’ve got everything covered, you go relax!", and works silently until midnight.',
        subtextSignal: 'Trains Person B to believe Person A has zero needs and genuinely enjoys doing 100% of the labor.',
      },
      step3PulledResponseFromOther: {
        otherInternalReaction: 'Taking Person A’s cheerful insistence at face value, Person B relaxes on the couch and doesn’t offer to help.',
        otherObservableAction: 'Person B enjoys their free afternoon and asks Person A to grab them a drink on the way back from the kitchen.',
        roClassification: 'Actual RO Pulled: Oblivious, taking for granted, unreciprocating.',
      },
      step4ConfirmingResponseOfSelf: {
        selfFeelingAndAction: 'Person A boils with silent martyrdom, develops a tension migraine, or leaks passive-aggressive sighs while feeling totally unseen.',
        rsClassification: 'RS (Response of Self): Exhausted, silently resentful martyr.',
        unconsciousConclusion: 'Self-Fulfilling Conclusion: "Nobody ever takes care of me—people only use me for what I do for them."',
      },
    },
    therapeuticInterruption: {
      step3MentalizingResponseFromOther: {
        therapistOrPartnerStance: 'Looking Past the Compliant False Self to Invite Authentic Need',
        observableResponse:
          'Person B (or the therapist) notices the over-functioning: "Wait—you’re smiling and saying you’ve got it all, but your shoulders look exhausted. I don’t want you carrying everything alone. Tell me what you actually need right now, even if it feels uncomfortable to ask."',
      },
      step4CorrectiveEmotionalExperience: {
        newSelfResponse: 'Person A takes the risk of expressing a direct request ("Honestly, I’m wiped out and would love for you to handle dinner")—and sees Person B gladly step up.',
        schemaUpdate: 'Corrective Update: "Having needs doesn’t destroy love; hiding my needs behind a polite mask is what kept me invisible."',
      },
    },
  },
  {
    id: 'authority-defiance-loop',
    title: 'Loop 4: Control vs. Defiant Self-Sabotage',
    subtitle: 'How fighting an internalized controller can trick you into sabotaging your own goals',
    originTemplate:
      'Learned with an intrusive, micromanaging caregiver where the only way to preserve an autonomous sense of self was through passive resistance or defiance.',
    wish: 'W (Wish): To be autonomous, respected as my own person, and supported in my goals.',
    fearedResponseFromOther: 'Expected RO: Authority figures and partners want to control, micromanage, and swallow my autonomy.',
    enactmentSteps: {
      step1WishAndAnxiety: {
        internalState: 'Person A wants to succeed on an important deadline and values their mentor/partner’s encouragement.',
        signalAnxiety: 'Transference Alarm: Any reminder or structure from the other person feels like suffocating parental control.',
      },
      step2DefensiveSignal: {
        mechanismUsed: 'Transference + Passive-Aggressive Procrastination',
        conceptId: 'transference',
        overtBehaviorSent: 'Person A procrastinates on their own goal, misses agreed check-ins, and gives vague, evasive updates.',
        subtextSignal: 'Unconscious victory: "You can’t control me!"—even though it’s Person A’s own dream at stake.',
      },
      step3PulledResponseFromOther: {
        otherInternalReaction: 'Person B grows anxious watching the deadline slip and feels forced to step in and check up more frequently.',
        otherObservableAction: 'Person B sends repeated reminders: "Did you finish Section 2 yet? Let’s review your schedule."',
        roClassification: 'Actual RO Pulled: Micromanaging, nagging, and controlling.',
      },
      step4ConfirmingResponseOfSelf: {
        selfFeelingAndAction: 'Person A feels suffocated and furious at the "nagging," rebelling further by abandoning the project altogether.',
        rsClassification: 'RS (Response of Self): Defiant, suffocated, and self-sabotaging.',
        unconsciousConclusion: 'Self-Fulfilling Conclusion: "Everyone is always trying to boss me around and control my life!"',
      },
    },
    therapeuticInterruption: {
      step3MentalizingResponseFromOther: {
        therapistOrPartnerStance: 'Stepping Out of the "Warden" Role & Handing Back Ownership',
        observableResponse:
          'Person B catches the enactment: "I realize the more I remind you, the more I start sounding like a nagging parent—and the more you have to fight me to feel free. This goal belongs to YOU, not me. How do you want us to handle this so I’m an ally instead of a warden?"',
      },
      step4CorrectiveEmotionalExperience: {
        newSelfResponse: 'With no external controller left to fight, Person A feels their own genuine desire to succeed return and takes ownership of the work.',
        schemaUpdate: 'Corrective Update: "I don’t have to burn down my own goals just to prove nobody owns me."',
      },
    },
  },
];
