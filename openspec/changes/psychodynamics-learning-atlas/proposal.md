## Why

Psychodynamics is fundamentally a study of psychological forces in motion—conflict, defense, internal object relations, and interpersonal loops—yet introductory resources remain dense, static walls of text or overly simplified pop-psychology metaphors. Learners without prior background need an interactive, visually dynamic resource grounded in both foundational psychoanalytic theory and modern empirical psychodynamic research to build an accurate mental model of the field.

## What Changes

- Create an interactive web application serving as an introductory visual atlas and dynamic playground for learning psychodynamics.
- Introduce **The 5 Lenses Guided Curriculum**, an interactive map introducing the five major waves of psychodynamic thought (Drive/Conflict, Ego Psychology & Defenses, Object Relations, Self Psychology, and Relational/Attachment) so beginners can orient themselves to "what they don't know."
- Introduce **Interactive Dynamic Playgrounds** with step-by-step animated flows and user-controlled simulation dials:
  1. **Defense Mechanism Switchboard & Triangle of Conflict** (Malan's Triangle of Conflict, Anna Freud's Idea-vs-Affect routing, Vaillant/Perry DMRS hierarchy).
  2. **Internal Object Theater** (Klein's Paranoid-Schizoid vs. Depressive positions, Kernberg's split vs. integrated self-other dyads, Fonagy's mentalization/integration slider).
  3. **Interpersonal Loop & CCRT Simulator** (Luborsky's Core Conflictual Relationship Theme: Wish → Response from Other → Response of Self, Transference/Projective Identification enactments, and therapeutic interruption).
- Introduce a **Visual Concept Atlas & Lookup**, a searchable and filterable encyclopedia of core psychodynamic concepts with interactive relationship graphs, "Idea vs. Affect" circuit comparisons, "Often Confused With" side-by-side contrasts, foundational citations, and modern empirical grounding (PDM-2, DMRS, CCRT, Shedler, neuropsychoanalysis).

## Capabilities

### New Capabilities
- `five-lenses-curriculum`: Interactive introductory roadmap covering the 5 major schools/waves of psychodynamics, their core questions, historical evolution, key theorists, and direct deep-links into playgrounds and concepts.
- `dynamic-playgrounds`: Interactive animated sandboxes (Defense Switchboard & Triangle of Conflict, Internal Object Theater, Interpersonal CCRT Loop) allowing users to step through animations and adjust psychological parameters (triggers, defense maturity, stress/ego capacity, integration).
- `concept-atlas`: Searchable, filterable visual lookup and interactive node-link concept graph of core psychodynamic concepts, complete with foundational origins, modern empirical research citations, Idea-vs-Affect pathway breakdowns, and side-by-side concept comparisons.

### Modified Capabilities
<!-- None - greenfield project -->

## Impact

- Initializes a new frontend web application (React, TypeScript, Vite, Tailwind CSS, Lucide icons, and SVG/canvas interactive animations).
- Establishes structured, citation-backed dataset modules (`src/data/`) covering the 5 schools, 30+ core concepts, empirical frameworks (DMRS, PDM-2, CCRT, ISTDP, TFP, MBT), and interactive scenario scripts.
- Zero external backend dependencies; runs completely locally in the browser with instant search and responsive interactive visuals.
