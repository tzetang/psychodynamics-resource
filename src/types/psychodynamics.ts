export type LensId =
  | 'drive-conflict'
  | 'ego-psychology'
  | 'object-relations'
  | 'self-psychology'
  | 'relational-empirical';

export type ConceptCategory =
  | 'Defense Mechanism'
  | 'Psychic Structure'
  | 'Internal Object & Position'
  | 'Relational & Transference'
  | 'Developmental & Self'
  | 'Empirical & Clinical Framework';

export type DMRSLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type PlaygroundId =
  | 'defense-switchboard'
  | 'object-theater'
  | 'interpersonal-ccrt';

export interface PlaygroundDeepLink {
  playgroundId: PlaygroundId;
  presetId: string;
  buttonLabel: string;
}

export interface IdeaVsAffectRouting {
  rawImpulseExample: string;
  ideaFate: 'Conscious' | 'Repressed / Blocked' | 'Inverted / Opposite' | 'Attributed to Other' | 'Generalized / Abstracted' | 'Split / Compartmentalized' | 'Transformed / Integrated';
  ideaDescription: string;
  affectFate: 'Conscious' | 'Suppressed / Numbed' | 'Converted / Displaced' | 'Amplified / Split' | 'Projected / Induced in Other' | 'Channeled / Regulated';
  affectDescription: string;
  consciousOutput: string;
}

export interface FoundationalOrigin {
  theorist: string;
  year: string;
  seminalWork: string;
  originalFormulation: string;
}

export interface EmpiricalResearchNote {
  frameworkName: string; // e.g., "DMRS (Perry / Vaillant)", "PDM-2", "CCRT (Luborsky)", "TFP (Kernberg)", "MBT (Fonagy)", "Shedler (2010)", "Solms Neuropsychoanalysis"
  citation: string;
  findingOrOperationalization: string;
}

export interface ConfusedWithComparison {
  targetConceptId: string;
  sharedSurface: string;
  keyDistinction: string;
  thisConceptRule: string;
  otherConceptRule: string;
}

export interface PsychodynamicConcept {
  id: string;
  name: string;
  subtitle: string;
  lens: LensId;
  category: ConceptCategory;
  dmrsLevel?: DMRSLevel;
  dmrsLevelName?: string;
  tenSecondIntuition: string;
  clinicalVignette: string;
  ideaVsAffect: IdeaVsAffectRouting;
  pdm2Context: string;
  foundationalOrigin: FoundationalOrigin;
  empiricalResearch: EmpiricalResearchNote[];
  relatedConceptIds: string[];
  confusedWith: ConfusedWithComparison[];
  linkedPlayground: PlaygroundDeepLink;
}

export interface TheoristProfile {
  name: string;
  era: string;
  keyContribution: string;
}

export interface PsychodynamicLens {
  id: LensId;
  order: number;
  name: string;
  shortName: string;
  eraSummary: string;
  cameraFocalMetaphor: string;
  coreQuestion: string;
  plainEnglishOverview: string;
  historicalShiftFromPrior: string;
  whatMotivatesBehavior: string;
  whySufferingHappens: string;
  howChangeHappens: string;
  foundationalTheorists: TheoristProfile[];
  modernEmpiricalExtensions: {
    name: string;
    researchers: string;
    summary: string;
  }[];
  colorAccent: string;
  badgeClasses: string;
  coreConceptIds: string[];
  linkedPlayground: PlaygroundDeepLink;
}

export interface UnifiedCaseScenario {
  id: string;
  title: string;
  presentingSituation: string;
  surfaceSymptom: string;
  formulationsByLens: Record<
    LensId,
    {
      headline: string;
      unconsciousDynamic: string;
      clinicalFocus: string;
      keyConceptId: string;
    }
  >;
}

// Playground 1: Defense Switchboard & Malan's Triangle of Conflict
export interface DefenseTriggerScenario {
  id: string;
  title: string;
  context: string;
  rawImpulseIdea: string;
  rawImpulseAffect: string;
  signalAnxietyWarning: string;
}

export interface DefenseMechanismSimulation {
  id: string;
  conceptId: string;
  name: string;
  dmrsLevel: DMRSLevel;
  dmrsCategory: 'High-Adaptive (Mature)' | 'Obsessional / Neurotic' | 'Minor Image-Distorting' | 'Disavowal' | 'Major Image-Distorting (Borderline)' | 'Action';
  minEgoCapacityRequired: number; // 0 to 100
  shortRule: string;
  ideaAction: 'pass' | 'block' | 'invert' | 'redirect-other' | 'abstract' | 'split';
  affectAction: 'pass' | 'block' | 'invert' | 'redirect-other' | 'discharge-body' | 'channel-constructive';
  outcomesByTrigger: Record<
    string,
    {
      ideaTransformation: string;
      affectTransformation: string;
      consciousExperience: string;
      observableBehavior: string;
      clinicalTradeoff: string;
    }
  >;
}

// Playground 2: Internal Object Theater (Klein / Kernberg / Fonagy)
export interface ObjectRelationsTrigger {
  id: string;
  title: string;
  eventDescription: string;
  attachmentThreatType: 'abandonment' | 'criticism' | 'intimacy-engulfment' | 'success-envy';
  splitState: {
    dominantHalf: 'all-bad-persecutory' | 'all-good-idealized' | 'rapid-oscillation';
    selfRepresentation: string;
    objectRepresentation: string;
    connectingAffect: string;
    unsplitShadowNote: string;
    behavioralEnactment: string;
  };
  integratedState: {
    selfRepresentation: string;
    objectRepresentation: string;
    connectingAffect: string;
    mentalizingReflection: string;
    behavioralResponse: string;
  };
}

// Playground 3: Interpersonal Loop & Luborsky's CCRT Simulator
export interface CCRTPatternScenario {
  id: string;
  title: string;
  subtitle: string;
  originTemplate: string;
  wish: string; // W: Core Wish
  fearedResponseFromOther: string; // RO (Negative expectation)
  enactmentSteps: {
    step1WishAndAnxiety: {
      internalState: string;
      signalAnxiety: string;
    };
    step2DefensiveSignal: {
      mechanismUsed: string;
      conceptId: string;
      overtBehaviorSent: string;
      subtextSignal: string;
    };
    step3PulledResponseFromOther: {
      otherInternalReaction: string;
      otherObservableAction: string;
      roClassification: string;
    };
    step4ConfirmingResponseOfSelf: {
      selfFeelingAndAction: string;
      rsClassification: string;
      unconsciousConclusion: string;
    };
  };
  therapeuticInterruption: {
    step3MentalizingResponseFromOther: {
      therapistOrPartnerStance: string;
      observableResponse: string;
    };
    step4CorrectiveEmotionalExperience: {
      newSelfResponse: string;
      schemaUpdate: string;
    };
  };
}

// ============================================================================
// Curated Onboarding ("0. Start Here: Orientation") Interfaces
// ============================================================================

export interface OnboardingPillar {
  id: string;
  number: string;
  plainEnglishTitle: string;
  everydayQuestion: string;
  coreIdea: string;
  concreteExample: string;
  shedlerEmpiricalAnchor: string;
  accentColor: 'indigo' | 'emerald' | 'amber' | 'rose';
}

export interface SurfaceVsDepthComparison {
  id: string;
  everydayProblem: string;
  personQuote: string;
  surfaceView: {
    label: string;
    assumption: string;
    typicalAdvice: string;
    whyItOftenStalls: string;
  };
  psychodynamicView: {
    label: string;
    hiddenFunction: string;
    curiousQuestion: string;
    whatChanges: string;
  };
}

export interface RealWorldBehaviorScenario {
  id: string;
  categoryTag: string;
  title: string;
  subtitle: string;
  everydaySituation: string;
  consciousStory: string;
  underneathBreakdown: {
    hiddenWishOrFeeling: string;
    whyItFeelsUnsafe: string;
    sidewaysProtectiveMove: string;
    theIronyOrCost: string;
  };
  researchInspiration: {
    studyOrFramework: string;
    researchers: string;
    plainEnglishFinding: string;
  };
  formalBridge: {
    formalConceptName: string;
    whyItHasThisName: string;
    linkedConceptId: string;
    linkedLensId: LensId;
    linkedPlayground: PlaygroundDeepLink;
  };
}

export interface HistoricalEvolutionEra {
  id: string;
  stepNumber: number;
  eraYears: string;
  chapterTitle: string;
  humanPuzzle: string;
  whatPreviousViewMissed: string;
  breakthroughIdea: string;
  keyFigures: string[];
  everydayTakeaway: string;
  modernResearchConnection: string;
  linkedLensId: LensId;
}

export interface MythVsRealityItem {
  id: string;
  mythHeadline: string;
  whyPeopleThinkThis: string;
  empiricalRealityHeadline: string;
  evidenceSummary: string;
  keyCitation: string;
  linkedConceptId: string;
}

export interface StarterPathway {
  id: string;
  badge: string;
  title: string;
  whoThisIsFor: string;
  whatYouWillExplore: string;
  accentColor: 'indigo' | 'emerald' | 'amber' | 'rose';
  recommendedLensId: LensId;
  recommendedPlayground: PlaygroundDeepLink;
  recommendedConceptIds: string[];
}

