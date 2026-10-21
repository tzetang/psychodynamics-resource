## 1. Project Scaffold & Core Data Schema

- [x] 1.1 Initialize Vite + React + TypeScript + Tailwind CSS + Lucide Icons web application in the project root
- [x] 1.2 Define TypeScript interfaces (`src/types/psychodynamics.ts`) for Lenses, Concepts (with Idea-vs-Affect routing, DMRS levels, PDM-2 context, Foundational Origins, Empirical Research citations, and Confused-With links), and Playground simulation presets
- [x] 1.3 Author the 5 Lenses dataset (`src/data/lenses.ts`) covering Drive/Conflict, Ego Psychology, Object Relations, Self Psychology, and Relational/Empirical psychodynamics, including unified case comparisons across all 5 lenses
- [x] 1.4 Author the Concept Atlas dataset (`src/data/concepts.ts`) with 28+ grounded concepts, relationships, Idea-vs-Affect pathway specs, foundational citations, and empirical research notes (DMRS, PDM-2, CCRT, ISTDP, TFP, MBT, Shedler 2010, Solms)
- [x] 1.5 Author the Playground scenarios dataset (`src/data/playgrounds.ts`) for the Defense Switchboard, Internal Object Theater, and Interpersonal CCRT Loop

## 2. Guided Intro Curriculum: The 5 Lenses View

- [x] 2.1 Build the interactive 5 Lenses timeline/camera-zoom navigation and Lens detail inspector (`src/components/FiveLensesView.tsx`)
- [x] 2.2 Build custom interactive SVG mental-model diagrams for each of the 5 Lenses (Drive pressure/conflict, Ego mediator, Self-Object dyad, Selfobject cohesion triad, Two-person relational field)
- [x] 2.3 Implement the "Same Human Struggle, 5 Lenses" interactive case switcher showing how all 5 schools formulate the same scenario differently
- [x] 2.4 Wire deep-link actions from each Lens into the corresponding Playground preset and Concept Atlas entries

## 3. Dynamic Playgrounds View

- [x] 3.1 Build Playground 1: **Defense Mechanism Switchboard & Triangle of Conflict** (`src/components/playgrounds/DefenseSwitchboard.tsx`) with animated Idea + Affect particle routing, Malan's Triangle of Conflict visualizer, DMRS maturity level indicator, Stress/Ego Capacity slider, and step-by-step playback controls
- [x] 3.2 Build Playground 2: **Internal Object Theater (Splitting vs. Integration)** (`src/components/playgrounds/ObjectRelationsTheater.tsx`) with Klein/Kernberg All-Good vs. All-Bad Self-Object-Affect dyads, relational trigger selector, and an interactive Integration / Mentalization slider that visually dissolves the splitting barrier into Depressive Position ambivalence
- [x] 3.3 Build Playground 3: **Interpersonal Loop & CCRT Simulator** (`src/components/playgrounds/InterpersonalLoopSimulator.tsx`) animating Luborsky's CCRT (Wish → Response from Other → Response of Self), Transference/Projective Identification enactments, and a toggle between "Self-Fulfilling Enactment" and "Therapeutic/Mentalizing Interruption"

## 4. Visual Concept Atlas & Lookup View

- [x] 4.1 Build the searchable, filterable Concept Atlas layout (`src/components/ConceptAtlasView.tsx`) with instant search and filters by Lens, Category, and DMRS Maturity Level
- [x] 4.2 Build the interactive SVG Concept Relationship Graph (`src/components/ConceptGraph.tsx`) highlighting connected nodes across schools and mechanisms on hover/selection
- [x] 4.3 Build the Concept Anatomy Inspector (`src/components/ConceptInspector.tsx`) displaying the 10-second intuition, interactive Idea-vs-Affect circuit diagram, Foundational Origin citation, Modern Empirical & Clinical Grounding, and deep-link button to open in Playground
- [x] 4.4 Implement the interactive "Often Confused With" side-by-side comparison modal/drawer contrasting pairs like *Repression vs. Suppression*, *Isolation of Affect vs. Intellectualization*, and *Projection vs. Projective Identification*

## 5. App Shell, Cross-View Deep-Linking & Verification

- [x] 5.1 Build the main application navigation header, global quick-search, and cross-view state router (`src/App.tsx`) supporting seamless jumps between Lenses, Playgrounds, and Concept Atlas cards
- [x] 5.2 Verify TypeScript compilation, production bundle build (`npm run build`), and interactive rendering across all views and playgrounds
