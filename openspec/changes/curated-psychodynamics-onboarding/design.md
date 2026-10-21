## Context

The Psychodynamics Atlas currently launches straight into **The 5 Lenses** (`FiveLensesView`), **Dynamic Playgrounds** (`PlaygroundsView`), and the **Concept Atlas** (`ConceptAtlasView`). While those views provide rich theoretical and empirical depth, learners who are completely new to psychodynamics face an immediate cognitive hurdle: they are asked to compare five theoretical schools and dozens of clinical terms before they have built a gut-level intuition for *what psychodynamics actually is*, *why the field exists*, *how it evolved*, and *how it explains ordinary, recognizable human behavior*.

This design adds a curated, jargon-free onboarding experience (**"0. Start Here: Orientation"**) that eases learners into the field through everyday behavioral puzzles, plain-English explanations of what psychodynamics is for, a problem-driven story of its history, and optional bridges into formal concepts and simulators.

## Goals / Non-Goals

**Goals:**
- **Prevent theoretical overwhelm**: Give beginners a welcoming, plain-English "Chapter 0" before exposing formal terminology like *projective identification*, *DMRS levels*, or *paranoid-schizoid position*.
- **Connect theory to everyday life first**: Provide 6 interactive, research-grounded real-world behavior scenarios ("Why Do We Do That?") where users first see an ordinary human moment and the person's "Conscious Story," then unpack "What's Happening Underneath" step-by-step before seeing the formal psychodynamic name.
- **Explain what psychodynamics is for and why its history evolved**: Present the practical purpose of the field (why smart people repeat painful patterns they consciously want to stop) and a 5-chapter historical narrative framed around *which human puzzle each generation was trying to solve*, plus a myth-busting module grounded in modern empirical research (Shedler 2010, Vaillant's Grant Study, Luborsky's CCRT, Solms' neuropsychoanalysis).
- **Provide seamless, low-friction ramps into the rest of the app**: End with curated starter tracks and inline "When You're Ready" deep-links that jump directly to the relevant Lens, Playground preset, or Concept Atlas node.

**Non-Goals:**
- Replacing or watering down the existing 5 Lenses, 3 Playgrounds, or 30+ Concept Atlas entries.
- Turning the onboarding into a wall of textbook prose; every module must remain interactive, scannable, and progressive.
- Clinical self-diagnosis or therapy advice.

## Decisions

### 1. Primary Navigation & Progressive 4-Stage Architecture (`OnboardingView.tsx`)
- **Decision**: Add `'onboarding'` as the default initial `ActiveTab` in `App.tsx` (`0. Start Here`), positioned to the left of `1. The 5 Lenses`, `2. Dynamic Playgrounds`, and `3. Concept Atlas`. Inside `OnboardingView`, organize the experience into four interactive stages with both a stage-jumper pill bar and a continuous guided flow:
  1. **What Is It & What Is It For?** (The Core Premise, Surface vs. Beneath-the-Surface toggle, and the 4 Core Pillars in Plain English)
  2. **"Why Do We Do That?" Real-World Scenarios** (Interactive everyday behavior decoder grounded in research)
  3. **A Bite-Sized Living History & Myth-Buster** (Problem-driven timeline from 1890s neurology to modern affective neuroscience + Myths vs. Empirical Reality)
  4. **Where to Go Next (Curated Starter Pathways)** (4 tailored entry tracks into the Lenses, Playgrounds, and Atlas)
- **Rationale**: Keeping Onboarding as a top-level tab makes it immediately visible on first visit while allowing returning users to jump straight to Lenses, Playgrounds, or Atlas in one click.
- **Alternatives Considered**:
  - *A blocking modal wizard on first visit*: Rejected because modals feel cramped for rich interactive scenarios and are frustrating if dismissed accidentally.
  - *Embedding onboarding inside the top of FiveLensesView*: Rejected because `FiveLensesView` is already dense with the 5-school comparison matrix, mental model diagram, and unified case vignette.

### 2. "Phenomenon-First, Label-Second" Scenario Cards (`RealWorldBehaviorScenario`)
- **Decision**: Structure each real-world scenario around a three-step progressive reveal:
  1. **The Everyday Scene & "What I Tell Myself" (Conscious Story)**: A relatable, non-clinical situation (e.g., picking a fight with a partner right after an intimate weekend; laughing while describing a painful layoff; procrastinating on a career-defining project; chronically rescuing coworkers while feeling secretly bitter).
  2. **The Underneath Decoder (Step-by-Step Dynamic Breakdown)**: Shows in plain language:
     - *Hidden Wish / Vulnerable Feeling*
     - *Why It Feels Unsafe (The Alarm)*
     - *The Automatic Sideways Move (The Protective Strategy)*
     - *The Irony / Cost (Why the pattern repeats)*
  3. **Research Grounding & "When You're Ready" Formal Bridge**: Explains the empirical research study or clinical observation behind this phenomenon (e.g., Vaillant's 75-year Harvard Grant Study, Luborsky's CCRT transcripts, Bowlby/Ainsworth attachment avoidance studies, ISTDP affect phobia research) and provides 1-click deep links to the formal Concept, Lens, and Interactive Playground preset.
- **Rationale**: Cognitive science shows learners absorb complex abstractions much faster when anchored to a concrete, recognizable phenomenon first ("Oh, I've seen that in real life!") before learning the technical term.

### 3. Problem-Driven History Timeline Instead of Biographical Encyclopedia
- **Decision**: Frame the history module as **"5 Moments When Psychodynamics Hit a Wall—And Evolved"**:
  - **Era 1 (1890s–1920s)**: *The Mystery of Symptoms With No Physical Cause* (Freud's shift from neurology to unconscious conflict)
  - **Era 2 (1930s–1960s)**: *Wait—How Do Healthy People Cope?* (Anna Freud & George Vaillant's shift to the adaptive Ego and measurable defense maturity)
  - **Era 3 (1940s–1970s)**: *We Aren't Just Driven by Instincts—We Are Wired for People* (Klein, Winnicott, Fairbairn, Bowlby on early caregiving templates and internal maps)
  - **Era 4 (1970s–1980s)**: *What When the Core Sense of Self Feels Empty or Fragile?* (Heinz Kohut on self-worth, shame, and empathy)
  - **Era 5 (1980s–Present)**: *Can We Measure This in the Lab and Brain Scanner?* (Luborsky's CCRT, Shedler's meta-analyses, Fonagy's Mentalization, Kernberg's TFP, Solms' Neuropsychoanalysis)
- **Rationale**: Beginners often wonder why psychodynamics has multiple schools. Showing that each wave was built to answer a real human puzzle that the previous wave missed turns a confusing tangle of names into a single coherent story.

### 4. Strongly-Typed Onboarding Dataset (`src/data/onboarding.ts`)
- **Decision**: Store all onboarding content in a dedicated, strongly-typed module `src/data/onboarding.ts` with interfaces in `src/types/psychodynamics.ts`, ensuring every cross-reference (`linkedLensId`, `linkedConceptId`, `linkedPlayground`) is validated against existing IDs at compile time.

## Risks / Trade-offs

- **[Risk] Adding a 4th primary navigation tab could crowd the header on small mobile screens** → **Mitigation**: Use compact responsive labels in the header nav (`0. Start Here`, `1. 5 Lenses`, `2. Playgrounds`, `3. Atlas`) with flex-wrap support so mobile viewports remain clean and accessible.
- **[Risk] Onboarding could still feel too long if all sections are expanded simultaneously** → **Mitigation**: Use interactive sub-navigation pills inside `OnboardingView`, collapsible "Formal Theory Bridge" drawers on scenario cards, and interactive selector tabs for the History timeline and Scenario explorer so only one focused card is spotlighted at a time.
