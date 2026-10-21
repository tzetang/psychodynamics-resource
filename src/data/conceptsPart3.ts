import { PsychodynamicConcept } from '../types/psychodynamics';

export const CONCEPTS_PART_3: PsychodynamicConcept[] = [
  // ============================================================================
  // LENS 5: RELATIONAL, ATTACHMENT & EMPIRICAL PSYCHODYNAMICS
  // ============================================================================
  {
    id: 'ccrt',
    name: 'Core Conflictual Relationship Theme (CCRT)',
    subtitle: 'Wish (W) → Response from Other (RO) → Response of Self (RS)',
    lens: 'relational-empirical',
    category: 'Empirical & Clinical Framework',
    tenSecondIntuition:
      'Luborsky’s famous empirical formula for your recurring relationship "deja vu": every person carries a core unconscious script made of three parts: (1) What I Wish for from others, (2) How I expect/provoke Others to Respond, and (3) How I Respond in turn.',
    clinicalVignette:
      'Wish: "I want to be close and supported." Expected Response from Other (RO): "They will feel burdened and reject me." Response of Self (RS): "I act aloof and self-sufficient first—which makes them pull away, proving my fear right!"',
    ideaVsAffect: {
      rawImpulseExample: 'Attachment wish colliding with expected relational rejection or control.',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'Internal working model filters ambiguous interpersonal cues to match the historical RO script.',
      affectFate: 'Projected / Induced in Other',
      affectDescription: 'Defensive self-response (RS) subtly recruits the other person into enacting the dreaded RO.',
      consciousOutput: '"Why do I keep dating the exact same kind of unavailable person?"',
    },
    pdm2Context:
      'Standardized empirical method for formulating relational patterns on the PDM-2 M-Axis and P-Axis.',
    foundationalOrigin: {
      theorist: 'Lester Luborsky',
      year: '1977 / 1990',
      seminalWork: 'Understanding Transference: The Core Conflictual Relationship Theme Method (Luborsky & Crits-Christoph, 1990)',
      originalFormulation:
        'Created the first reliable, quantitative method to operationalize Freud’s concept of the "transference template" by coding relationship episodes told in therapy transcripts.',
    },
    empiricalResearch: [
      {
        frameworkName: 'CCRT Reliability & Treatment Outcome Studies',
        citation: 'Luborsky & Crits-Christoph (1998); Wiseman & Tishby (2017)',
        findingOrOperationalization:
          'Studies across thousands of coded relationship narratives show high inter-judge agreement (Cohen’s kappa .65–.80) and demonstrate that successful therapy doesn’t erase the Wish (W), but significantly changes negative RO and RS patterns.',
      },
    ],
    relatedConceptIds: [
      'transference',
      'enactment',
      'corrective-emotional-experience',
      'projective-identification',
      'mentalization',
    ],
    confusedWith: [
      {
        targetConceptId: 'transference',
        sharedSurface: 'Both describe repeating old relationship patterns with new people.',
        keyDistinction:
          'Transference is the broad clinical phenomenon of experiencing current people through past templates; the CCRT is Luborsky’s specific, measurable 3-part research and clinical formula (Wish → RO → RS) that maps how transference works.',
        thisConceptRule: 'Explicit 3-component empirical formula: Wish (W) → Response from Other (RO) → Response of Self (RS).',
        otherConceptRule: 'The lived phenomenon of redirecting feelings and expectations from past figures onto a present person.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'interpersonal-ccrt',
      presetId: 'closeness-preemptive-withdrawal',
      buttonLabel: 'Simulate CCRT Loops (W → RO → RS)',
    },
  },
  {
    id: 'transference',
    name: 'Transference',
    subtitle: 'Experiencing a Present Person Through the Lens of Past Attachment Figures',
    lens: 'relational-empirical',
    category: 'Relational & Transference',
    tenSecondIntuition:
      'The brain is a prediction machine built in childhood: we don’t meet new bosses, partners, or therapists with blank eyes—we unconsciously superimpose the expectations, longings, and fears we learned with our earliest caregivers onto them.',
    clinicalVignette:
      'When her therapist pauses silently for five seconds to think, a patient whose mother used silent withdrawal as punishment immediately feels a wave of panic: "She’s disgusted with me."',
    ideaVsAffect: {
      rawImpulseExample: 'Ambiguous cue from an important person in the present.',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'Present perception is assimilated into an enduring procedural relational schema from the past.',
      affectFate: 'Conscious',
      affectDescription: 'Full childhood emotional intensity (terror, longing, defiance) is felt toward the present person.',
      consciousOutput: 'Immediate emotional conviction about what the other person is thinking or intending.',
    },
    pdm2Context:
      'Ubiquitous across PDM-2; offers a live "in-the-room window" into the patient’s internal object world.',
    foundationalOrigin: {
      theorist: 'Sigmund Freud',
      year: '1905 / 1912',
      seminalWork: 'Fragment of an Analysis of a Case of Hysteria ("Dora"); The Dynamics of Transference (1912)',
      originalFormulation:
        'Initially viewed by Freud as an obstacle to remembering, then recognized as the most powerful clinical arena where forgotten relational conflicts come alive in the present.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Social-Cognitive Transference & RCTs of Transference Work',
        citation: 'Andersen & Berk (1998, Psychological Review); Høglend et al. (2008, American Journal of Psychiatry)',
        findingOrOperationalization:
          'Susan Andersen’s lab proved experimentally that transference occurs automatically in everyday life when a new person resembles a significant other; Høglend’s RCT showed transference interpretations are especially effective for patients with low quality of object relations.',
      },
    ],
    relatedConceptIds: [
      'countertransference',
      'ccrt',
      'enactment',
      'displacement',
    ],
    confusedWith: [
      {
        targetConceptId: 'projection',
        sharedSurface: 'Both distort how we perceive another person.',
        keyDistinction:
          'Projection disowns a specific unwanted impulse right now ("I’m not angry, YOU’RE angry"); Transference imports an entire historical relationship role ("You are going to judge me just like my father did").',
        thisConceptRule: 'Superimposing a past relationship template/role onto a current person.',
        otherConceptRule: 'Attributing your own disowned current impulse (e.g., hostility) onto someone else.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'interpersonal-ccrt',
      presetId: 'authority-defiance-loop',
      buttonLabel: 'See Transference Live in CCRT Simulator',
    },
  },
  {
    id: 'countertransference',
    name: 'Countertransference',
    subtitle: 'Using Your Own Emotional Reaction as a Radar for the Other’s Unconscious',
    lens: 'relational-empirical',
    category: 'Relational & Transference',
    tenSecondIntuition:
      'Originally viewed as a therapist’s personal blind spot, modern psychodynamics treats Countertransference as a vital diagnostic radar: the specific emotions pulled out of you when sitting with someone (feeling unusually sleepy, protective, walking on eggshells, or inadequate) often reveal the exact role you are being invited to play in their internal drama.',
    clinicalVignette:
      'A usually warm therapist notices herself feeling uncharacteristically lecturing and critical with a particular client—realizing she has been pulled into the role of the client’s demanding father.',
    ideaVsAffect: {
      rawImpulseExample: 'Subtle interpersonal pressure and non-verbal signals from the patient.',
      ideaFate: 'Conscious',
      ideaDescription: 'The listener reflects on their own unexpected thoughts/fantasies as clinical data about the relational field.',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'Instead of acting out the induced feeling, the clinician contains and studies it.',
      consciousOutput: '"Notice what is happening between us right now—I feel pulled to give you a checklist..."',
    },
    pdm2Context:
      'PDM-2 explicitly includes a "Characteristic Countertransference" section for every single syndrome to help clinicians orient themselves.',
    foundationalOrigin: {
      theorist: 'Sigmund Freud, Paula Heimann & Heinrich Racker',
      year: '1910 / 1950 / 1957',
      seminalWork: 'On Counter-Transference (Heimann, 1950); Transference and Countertransference (Racker, 1968)',
      originalFormulation:
        'Heimann revolutionized the field by arguing that the analyst’s emotional response is not merely personal interference, but "one of the most important tools for his work." Racker distinguished Concordant (feeling what the patient feels) vs. Complementary (feeling what the patient’s internal object feels) countertransference.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Countertransference Management Meta-Analysis & CTQ',
        citation: 'Hayes, Gelso & Hummel (2011, Psychotherapy); Betan et al. (2005)',
        findingOrOperationalization:
          'Meta-analyses show that acting out countertransference harms outcomes, whereas therapist self-insight and countertransference management strongly correlate with superior clinical gains (r = .56).',
      },
    ],
    relatedConceptIds: [
      'transference',
      'projective-identification',
      'enactment',
      'ccrt',
    ],
    confusedWith: [
      {
        targetConceptId: 'transference',
        sharedSurface: 'Both are unconscious relational reactions in the clinical dyad.',
        keyDistinction:
          'Transference flows from the patient’s templates onto the therapist/partner; Countertransference is the emotional reaction evoked inside the therapist/listener (both personal and diagnostically induced).',
        thisConceptRule: 'The emotional and role response evoked inside the listener/clinician.',
        otherConceptRule: 'The patient’s historical template projected onto the clinician/other.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'interpersonal-ccrt',
      presetId: 'hypervigilance-hostility-induction',
      buttonLabel: 'Explore Pulled Responses in CCRT Simulator',
    },
  },
  {
    id: 'enactment',
    name: 'Relational Enactment',
    subtitle: 'When Two People Unconsciously Act Out the Script Before They Can Talk About It',
    lens: 'relational-empirical',
    category: 'Relational & Transference',
    tenSecondIntuition:
      'Before an unconscious conflict can be put into words, two people almost always end up acting it out like a tiny play. Neither person realizes it at first—until they pause, step back, and say, "Wait, look at the dance we just got stuck in!"',
    clinicalVignette:
      'A client who feels nobody ever prioritizes him asks at the very last second of session for a fee reduction; the rushed therapist says no brusquely—inadvertently recreating the exact childhood scene of being brushed aside.',
    ideaVsAffect: {
      rawImpulseExample: 'Unsymbolized relational conflict that cannot yet be spoken directly.',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'The conflict is staged behaviorally between two people in the room.',
      affectFate: 'Projected / Induced in Other',
      affectDescription: 'Both participants’ unconscious blind spots hook into each other ("two-person interlocking script").',
      consciousOutput: 'A tense interpersonal impasse that—once recognized with curiosity—becomes a breakthrough.',
    },
    pdm2Context:
      'Central concept in Contemporary Relational Psychoanalysis and PDM-2 interpersonal process formulation.',
    foundationalOrigin: {
      theorist: 'Theodore Jacobs, Owen Renik & Stephen Mitchell',
      year: '1986 / 1993 / 1997',
      seminalWork: 'On Countertransference Enactments (Jacobs, 1986); Influence and Autonomy in Psychoanalysis (Mitchell, 1997)',
      originalFormulation:
        'Shifted psychoanalysis from a "One-Person" model (neutral observer watching a patient) to a "Two-Person" model where therapist and patient inevitably co-participate in enactments and then collaborate to untangle them.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Rupture-Resolution & Dyadic Systems Research',
        citation: 'Safran & Muran (2000); Beebe & Lachmann (2002)',
        findingOrOperationalization:
          'Micro-analytic video coding of adult therapy and mother-infant dyads shows that mutual dysregulation followed by collaborative repair is the primary engine of relational reorganization.',
      },
    ],
    relatedConceptIds: [
      'ccrt',
      'projective-identification',
      'transference',
      'countertransference',
      'corrective-emotional-experience',
    ],
    confusedWith: [
      {
        targetConceptId: 'projective-identification',
        sharedSurface: 'Both involve two people getting pulled into an emotional dance.',
        keyDistinction:
          'Projective Identification comes from Object Relations and emphasizes one person projecting a split-off internal part into the other; Relational Enactment comes from Two-Person Relational theory and emphasizes how BOTH people’s unconscious histories interlock.',
        thisConceptRule: 'Two-person co-created interpersonal play where both participants’ blind spots interlock.',
        otherConceptRule: 'Intrapsychic defense + interpersonal pressure relocating a split-off self/object state into the other.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'interpersonal-ccrt',
      presetId: 'closeness-preemptive-withdrawal',
      buttonLabel: 'Step Through Enactment vs. Interruption',
    },
  },
  {
    id: 'mentalization',
    name: 'Mentalization & Reflective Functioning (MBT)',
    subtitle: 'Holding Mind in Mind: Seeing the Thoughts and Feelings Behind Behavior',
    lens: 'relational-empirical',
    category: 'Empirical & Clinical Framework',
    tenSecondIntuition:
      'Coined by Peter Fonagy, Mentalization is the imaginative capacity to understand your own and other people’s behavior in terms of mental states (wishes, fears, beliefs)—and recognizing that your feeling is not an objective fact ("Just because I feel she hates me doesn’t mean she actually does; maybe she’s just stressed").',
    clinicalVignette:
      'When her partner texts a one-word reply "Ok.", low mentalizing says: "He’s furious and we’re over." High mentalizing pauses and wonders: "I feel anxious seeing that period, but he’s probably just walking into a meeting."',
    ideaVsAffect: {
      rawImpulseExample: 'Attachment alarm triggered by an ambiguous interpersonal cue.',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'Moves from "Psychic Equivalence" (inside = outside) to flexible perspective-taking and curiosity.',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'Prefrontal reflection down-regulates amygdala hyperarousal ("affective mentalizing: feeling while thinking").',
      consciousOutput: 'Humility, curiosity about others’ minds, and emotional resilience during conflict.',
    },
    pdm2Context:
      'Explicitly rated as one of the 12 core capacities on the PDM-2 Mental Functioning (M-Axis): Capacity for Mentalization and Reflective Functioning.',
    foundationalOrigin: {
      theorist: 'Peter Fonagy, Mary Target & Anthony Bateman',
      year: '1991 / 2002 / 2004',
      seminalWork: 'Affect Regulation, Mentalization, and the Development of the Self (2002); Psychotherapy for Borderline Personality Disorder: Mentalization-Based Treatment (2004)',
      originalFormulation:
        'Synthesized Bowlby’s Attachment Theory with French/British psychoanalysis, operationalizing "Reflective Functioning (RF)" on the Adult Attachment Interview.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Reflective Functioning Scale (RFS) & MBT Randomized Trials',
        citation: 'Bateman & Fonagy (1999, 2008, 2009); Katznelson (2014)',
        findingOrOperationalization:
          '8-year follow-up RCTs demonstrated that Mentalization-Based Treatment (MBT) produces dramatic, enduring reductions in suicidality, hospitalization, and interpersonal distress.',
      },
    ],
    relatedConceptIds: [
      'depressive-position',
      'splitting',
      'ccrt',
      'holding-environment',
      'pdm2-framework',
    ],
    confusedWith: [
      {
        targetConceptId: 'intellectualization',
        sharedSurface: 'Both involve thinking about mental states and behavior.',
        keyDistinction:
          'Intellectualization is cold, detached over-theorizing used to AVOID feeling; genuine Mentalization ("affective mentalizing") means staying connected to your real emotion while holding curiosity and perspective.',
        thisConceptRule: 'Feeling your emotion while staying curious and flexible about minds ("warm reflection").',
        otherConceptRule: 'Escaping into cold, abstract theories or "hyper-mentalizing" to avoid vulnerability.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'object-theater',
      presetId: 'mild-criticism',
      buttonLabel: 'Drag the Mentalization / Integration Slider',
    },
  },
  {
    id: 'corrective-emotional-experience',
    name: 'Corrective Emotional Experience',
    subtitle: 'Healing Old Templates by Experiencing a New Relational Outcome in Real Time',
    lens: 'relational-empirical',
    category: 'Relational & Transference',
    tenSecondIntuition:
      'Insight alone rarely rewires deep attachment fears. Deep change happens when you take a vulnerable risk expecting the old punishment or rejection—and the other person responds with unexpected safety, steadiness, and respect, updating your nervous system’s prediction.',
    clinicalVignette:
      'A client finally admits he is angry at his therapist, bracing to be shamed or kicked out like he was as a child. Instead, the therapist leans in warmly: "Thank you for telling me directly—that took courage, and you have every right to be upset with me."',
    ideaVsAffect: {
      rawImpulseExample: 'Expressing a warded-off wish or protest while expecting catastrophe.',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'Prediction error ("mismatch") between the expected archaic Response from Other (RO) and the actual safe response updates the internal working model.',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'Defensive terror gives way to relief, grief, and deepened epistemic trust.',
      consciousOutput: '"Wait... I spoke my truth, and the relationship actually got stronger instead of blowing up."',
    },
    pdm2Context:
      'Core relational mechanism of change bridging insight and procedural memory reconsolidation.',
    foundationalOrigin: {
      theorist: 'Franz Alexander & Thomas French (and Weiss & Sampson Control-Mastery Theory)',
      year: '1946 / 1986',
      seminalWork: 'Psychoanalytic Therapy: Principles and Application (Alexander & French, 1946); The Psychoanalytic Process (Weiss & Sampson, 1986)',
      originalFormulation:
        'Alexander defined it as re-exposing the patient, under more favorable circumstances, to emotional situations they could not handle in the past; Weiss & Sampson showed patients unconsciously "test" the therapist to disconfirm pathogenic beliefs.',
    },
    empiricalResearch: [
      {
        frameworkName: 'Memory Reconsolidation & Control-Mastery Plan Compatibility',
        citation: 'Lane, Ryan, Nadel & Greenberg (2015, Behavioral and Brain Sciences); Silberschatz (2005)',
        findingOrOperationalization:
          'Neuroscience of memory reconsolidation proves that activating an old emotional memory alongside an experiential "prediction error" physically updates the synaptic trace in the amygdala-hippocampal complex.',
      },
    ],
    relatedConceptIds: [
      'ccrt',
      'enactment',
      'holding-environment',
      'transmuting-internalization',
    ],
    confusedWith: [
      {
        targetConceptId: 'holding-environment',
        sharedSurface: 'Both emphasize the healing power of the therapeutic relationship.',
        keyDistinction:
          'Holding Environment is the steady background safety of the setting; Corrective Emotional Experience is a specific turning-point moment where a feared interpersonal outcome is disconfirmed.',
        thisConceptRule: 'Experiential "prediction error" that disconfirms a feared relational expectation.',
        otherConceptRule: 'Continuous empathetic safety and containment that allows raw states to be held.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'interpersonal-ccrt',
      presetId: 'closeness-preemptive-withdrawal',
      buttonLabel: 'Toggle Corrective Interruption in CCRT Simulator',
    },
  },
  {
    id: 'dmrs-hierarchy',
    name: 'Defense Mechanism Rating Scale (DMRS)',
    subtitle: 'Vaillant & Perry’s Empirical 7-Level Hierarchy of Defense Maturity',
    lens: 'relational-empirical',
    category: 'Empirical & Clinical Framework',
    dmrsLevel: 7,
    dmrsLevelName: 'Levels 1–7 Empirical Hierarchy',
    tenSecondIntuition:
      'Not all defense mechanisms are created equal! Researchers George Vaillant and J. Christopher Perry organized 30 defenses into a 7-step ladder from Level 1–2 (Action & Borderline Splitting) up through Level 5–6 (Neurotic & Obsessional) to Level 7 (Mature: Humor, Sublimation, Suppression).',
    clinicalVignette:
      'Under mild stress, someone uses Level 7 Humor; under heavier stress, they slip to Level 6 Intellectualization; under severe attachment terror, they may regress to Level 2 Splitting or Projection.',
    ideaVsAffect: {
      rawImpulseExample: 'Escalating internal or interpersonal stress.',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'Lower levels distort external reality (Splitting/Denial); middle levels censor ideas or affects (Repression/Isolation); Level 7 integrates both.',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'Tracks how flexibly vs. rigidly affect is metabolized across the 7 levels.',
      consciousOutput: 'An Overall Defensive Functioning (ODF) score ranging from 1.0 to 7.0.',
    },
    pdm2Context:
      'Directly integrated into the PDM-2 M-Axis item "Defensive Patterns and Capacities."',
    foundationalOrigin: {
      theorist: 'George Vaillant & J. Christopher Perry',
      year: '1977 / 1990',
      seminalWork: 'Adaptation to Life (Vaillant, 1977); Defense Mechanism Rating Scales (Perry, 1990)',
      originalFormulation:
        'Transformed Anna Freud’s qualitative list of defenses into a reliable, quantitative hierarchy rated from verbatim clinical transcripts and Q-sort/self-report instruments (DMRS-Q, DMRS-SR-30).',
    },
    empiricalResearch: [
      {
        frameworkName: 'DMRS Overall Defensive Functioning (ODF) Longitudinal Studies',
        citation: 'Perry & Bond (2012, American Journal of Psychiatry); Di Giuseppe & Perry (2021)',
        findingOrOperationalization:
          'Longitudinal clinical trials show that upward shifts in Overall Defensive Functioning (ODF) up the 7-level hierarchy strongly predict recovery from depression, anxiety, and personality disorders.',
      },
    ],
    relatedConceptIds: [
      'sublimation',
      'suppression',
      'isolation-of-affect',
      'repression',
      'projection',
      'splitting',
    ],
    confusedWith: [
      {
        targetConceptId: 'pdm2-framework',
        sharedSurface: 'Both are modern empirical psychodynamic assessment systems.',
        keyDistinction:
          'DMRS specifically rates the 7 levels of Defense Mechanisms; PDM-2 is the comprehensive diagnostic manual covering Personality (P-Axis), Mental Functioning (M-Axis), and Symptoms (S-Axis).',
        thisConceptRule: '7-level empirical hierarchy specifically measuring 30 defense mechanisms.',
        otherConceptRule: '3-axis diagnostic manual mapping whole-person personality, mental capacities, and symptom experience.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'defense-switchboard',
      presetId: 'sublimation',
      buttonLabel: 'Adjust Stress Slider Across DMRS Levels',
    },
  },
  {
    id: 'pdm2-framework',
    name: 'Psychodynamic Diagnostic Manual (PDM-2)',
    subtitle: 'Understanding "Who a Person Is" Rather Than Just "What Symptoms They Have"',
    lens: 'relational-empirical',
    category: 'Empirical & Clinical Framework',
    tenSecondIntuition:
      'While the DSM lists surface symptom checklists (like a fever chart), the PDM-2 maps the whole person across three dimensions: P-Axis (Personality organization: Healthy → Neurotic → Borderline → Psychotic), M-Axis (12 core Mental capacities like mentalization and defenses), and S-Axis (what symptoms feel like from the inside).',
    clinicalVignette:
      'Two patients meet identical DSM criteria for Major Depression, but PDM-2 reveals Patient A has an Introjective/Self-Critical depression (driven by harsh guilt and perfectionism) while Patient B has an Anaclitic depression (driven by terror of abandonment and emptiness)—requiring completely different clinical focus.',
    ideaVsAffect: {
      rawImpulseExample: 'Clinical suffering presented in consultation.',
      ideaFate: 'Transformed / Integrated',
      ideaDescription: 'Contextualizes symptoms inside the person’s developmental history, relational templates, and structural level.',
      affectFate: 'Channeled / Regulated',
      affectDescription: 'Honors the subjective lived meaning of symptoms rather than reducing them to isolated behaviors.',
      consciousOutput: 'A compassionate, dimensional case formulation grounded in empirical research.',
    },
    pdm2Context:
      'The overarching diagnostic and conceptual blueprint uniting all 5 Lenses of contemporary psychodynamics.',
    foundationalOrigin: {
      theorist: 'Vittorio Lingiardi & Nancy McWilliams (Editors)',
      year: '2006 / 2017',
      seminalWork: 'Psychodynamic Diagnostic Manual, Second Edition (PDM-2, Guilford Press, 2017)',
      originalFormulation:
        'Developed by an international task force of psychoanalytic researchers and clinicians (incorporating SWAP-200, DMRS, SCORS, and Sydney Blatt’s Anaclitic/Introjective research) as a person-centered complement to DSM/ICD.',
    },
    empiricalResearch: [
      {
        frameworkName: 'SWAP-200, Psychodiagnostic Chart-2 (PDC-2) & Shedler (2010)',
        citation: 'Shedler & Westen (2007); Gordon & Bornstein (2018); Shedler (2010, American Psychologist)',
        findingOrOperationalization:
          'Empirical validation of the PDM-2’s Psychodiagnostic Chart (PDC-2) shows high construct validity and clinical utility across cultures, while Shedler (2010) synthesized meta-analytic proof of psychodynamic treatment efficacy.',
      },
    ],
    relatedConceptIds: [
      'dmrs-hierarchy',
      'mentalization',
      'ccrt',
      'splitting',
      'depressive-position',
    ],
    confusedWith: [
      {
        targetConceptId: 'dmrs-hierarchy',
        sharedSurface: 'Both are empirically validated assessment frameworks used in psychodynamics.',
        keyDistinction:
          'PDM-2 is the comprehensive 3-axis manual of personality structure, mental capacities, and subjective symptoms; DMRS is the specialized scale for rating defense mechanisms.',
        thisConceptRule: 'Three-axis person-centered diagnostic manual (P-Axis, M-Axis, S-Axis).',
        otherConceptRule: '7-level observer-rated hierarchy of 30 defense mechanisms.',
      },
    ],
    linkedPlayground: {
      playgroundId: 'object-theater',
      presetId: 'mild-criticism',
      buttonLabel: 'Explore Structural Levels in Object Theater',
    },
  },
];
