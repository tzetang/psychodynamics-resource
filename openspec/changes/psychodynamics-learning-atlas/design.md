## Context

This is a greenfield interactive educational resource designed for someone new to psychodynamics ("I don't know what I don't know") who wants a visual lookup and dynamic visual aids (animations and playgrounds) grounded in both foundational psychoanalytic theory and modern empirical research.

Psychodynamic concepts are inherently mechanical and relational—they describe how unconscious wishes, anxieties, defenses, internal object dyads, and interpersonal patterns interact dynamically over time. Static text fails to convey these dynamics, while pop-psychology diagrams (such as simplistic icebergs) strip away theoretical and empirical rigor.

## Goals / Non-Goals

**Goals:**
- Provide a clear introductory orientation (**The 5 Lenses**) based on Fred Pine's "Four Psychologies" (Drive, Ego, Object Relations, Self) plus the 5th Relational/Attachment & Empirical wave.
- Deliver **3 rich Interactive Dynamic Playgrounds** with both animated step-by-step playback and user-adjustable simulation controls:
  1. **The Defense Switchboard & Triangle of Conflict** (Malan's Impulse-Anxiety-Defense triangle + Anna Freud/Vaillant/Perry DMRS routing of *Idea* vs. *Affect* particles).
  2. **The Internal Object Theater** (Klein's Paranoid-Schizoid vs. Depressive positions + Kernberg's split vs. integrated Self-Object-Affect dyads + Fonagy's mentalization/integration slider).
  3. **The Interpersonal Loop / CCRT Simulator** (Luborsky's Core Conflictual Relationship Theme: Wish → Response from Other → Response of Self + Transference/Projective Identification enactments + Therapeutic/Secure interruption).
- Deliver a **Visual Concept Atlas** with instant search, filtering by school/maturity/category, an interactive node-link relationship map, "Idea vs. Affect" circuit diagrams, side-by-side "Often Confused With" comparisons, foundational citations, and empirical research grounding (DMRS, PDM-2, CCRT, ISTDP, TFP, MBT, Shedler 2010, Solms neuropsychoanalysis).
- Enable seamless deep-linking across views (e.g., clicking "Projection" in the Concept Atlas or 5 Lenses opens it directly in the Defense Switchboard Playground).

**Non-Goals:**
- Clinical diagnosis or self-treatment tool (clearly framed as an educational and theoretical atlas).
- Backend server, database, or user authentication (runs 100% locally in the browser with zero external API keys required).
- Exhaustive coverage of every niche psychoanalytic splinter school (focuses on the high-yield foundational + empirically validated canon).

## Decisions

### 1. Frontend Stack: React 18 + TypeScript + Vite + Tailwind CSS + Lucide Icons
- **Rationale**: Provides rapid local execution, type safety for strongly-typed theoretical/empirical datasets, and declarative SVG + CSS state-driven animations for playgrounds and node graphs without heavy 3D engine overhead.
- **Alternatives Considered**:
  - *Static Markdown / Docs generator (Docusaurus/VitePress)*: Rejected because custom multi-parameter interactive playgrounds and synchronized Idea/Affect SVG animations are awkward to build and link inside static docs.
  - *Heavy WebGL/Canvas libraries (Three.js/PixiJS)*: Rejected because psychodynamic diagrams rely on crisp typography, accessible UI controls, readable callouts, and structured vector pathways best rendered with SVG + HTML/CSS transitions.

### 2. Animation & Playground Architecture: Deterministic State-Machine + Continuous Sliders
- **Rationale**: Learners benefit from two complementary modes inside each playground:
  1. **Step-by-Step Animated Walkthrough (`step: 0..N` + Play/Pause timer)**: Walks through how an unconscious trigger activates signal anxiety, engages a defense filter, and produces a conscious symptom/behavior.
  2. **Continuous Parameter Sliders**: Such as "Ego Capacity / Stress Level" or "Integration / Mentalization Level" that dynamically interpolate visual states (e.g., dissolving the splitting barrier between All-Good and All-Bad object dyads).
- **Alternatives Considered**:
  - *Video/GIF pre-renders*: Rejected because users cannot swap triggers, toggle defenses, or drag sliders to experiment with the system.

### 3. Theoretical & Empirical Data Schema (`src/data/`)
- **Rationale**: To guarantee academic and clinical rigor, every concept and playground model is backed by a strongly-typed TypeScript schema containing:
  - `id`, `name`, `tagline`, `lens` (Drive, Ego, Object Relations, Self, Relational)
  - `ideaVsAffect`: explicit breakdown of what happens to the **Cognitive Representation (Idea)** vs. the **Emotional Charge (Affect)**
  - `dmrsLevel`: Vaillant / Perry Defense Mechanism Rating Scale level (1–7) where applicable
  - `pdm2Context`: Psychodynamic Diagnostic Manual (PDM-2) relevance
  - `foundationalOrigin`: Theorist, year, seminal work, and original formulation
  - `empiricalResearch`: Modern empirical validation, operationalized tools (CCRT, DMRS, SWAP-200, RF), or neuropsychoanalytic correlates
  - `confusedWith`: Array of contrasting concept IDs with explicit distinction notes
  - `linkedPlayground`: Deep-link preset into one of the interactive playgrounds

## Risks / Trade-offs

- **[Risk] Information overload for a beginner ("I don't know what I don't know")** → **Mitigation**: Use progressive disclosure. Every concept and lens starts with a "10-Second Plain-English Intuition" and interactive visual before revealing deeper tabs/sections for Foundational Lineage, Idea-vs-Affect Mechanics, and Empirical Research Citations.
- **[Risk] Complex SVG node graphs becoming cluttered** → **Mitigation**: Use curated, structured radial/layered layouts grouped by the 5 Lenses with hover/selection highlighting of direct neighbors rather than chaotic physics-only spaghetti graphs.
