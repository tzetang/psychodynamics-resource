## Why

Jumping directly into five theoretical schools, interactive simulators, and 30+ clinical concepts can overwhelm learners who do not yet have a grounded intuition for *what psychodynamics actually is*, *what problem it exists to solve*, and *how it shows up in ordinary human behavior*. Before encountering formal terminology, newcomers need a curated, plain-English onboarding experience that connects recognizable real-world behaviors, the practical purpose of the field, and a bite-sized story of its historical evolution.

## What Changes

- Introduce a new default entry view (**"0. Start Here: Orientation"**) ahead of "The 5 Lenses", designed as a progressive, jargon-free onboarding journey into psychodynamics.
- Add **"What Is Psychodynamics & What Is It For?"**: An interactive orientation explaining the central puzzle of psychodynamics—why intelligent, self-aware people repeatedly think, feel, or do things they consciously intend not to do—framed around Jonathan Shedler's (2010) empirical synthesis of distinctive psychodynamic features and a "Surface Symptom vs. Underlying Dynamic Meaning" comparison.
- Add **"Why Do We Do That?" Real-World & Research-Grounded Behavioral Scenarios**: A curated set of relatable, everyday human behavior vignettes modeled on empirical and longitudinal psychodynamic research (e.g., Vaillant's 75-year Grant Study of adult defenses, Luborsky's CCRT relationship transcripts, attachment and affect-regulation studies). Each scenario lets learners explore:
  - The observable everyday behavior and the person's "Conscious Story"
  - A step-by-step plain-English reveal of the hidden emotional logic ("What's Happening Underneath")
  - The empirical research inspiration behind the vignette
  - Optional "When You're Ready" bridges linking to the corresponding Lens, Playground, and Concept Atlas entry.
- Add **"A Bite-Sized Story of the Field (Why Theory Evolved)"**: An interactive narrative timeline from 1890s neurology to 21st-century affective neuroscience and empirical outcome research, framed around *what real-world blind spot each era was trying to solve*, paired with a **"Pop-Culture Myths vs. Modern Empirical Reality"** interactive myth-buster.
- Add **"Curated Starter Pathways"**: Goal-oriented entry tracks at the end of onboarding (e.g., *Everyday Self-Understanding*, *Relationship Loops*, *Empirical & Neuroscience Skeptic's Track*, or *Full 5 Lenses Curriculum*) so users can transition into the rest of the app with confidence rather than cognitive overload.

## Capabilities

### New Capabilities
- `curated-onboarding`: A beginner-friendly onboarding experience featuring an interactive introduction to what psychodynamics is for, research-grounded real-world behavioral scenarios ("Why Do We Do That?"), a problem-driven historical timeline with myth-busting, and curated starter pathways into the lenses, playgrounds, and concept atlas.

### Modified Capabilities
<!-- None -->

## Impact

- **`src/types/psychodynamics.ts`**: Adds TypeScript interfaces for onboarding modules, real-world behavior scenarios, historical turning points, myth-vs-reality cards, and curated starter pathways.
- **`src/data/onboarding.ts`**: New structured dataset containing plain-English orientation content, 6+ research-grounded real-world behavioral scenarios, historical evolution milestones, myth-busters, and starter tracks.
- **`src/components/OnboardingView.tsx`**: New interactive onboarding view component with progressive disclosure, scenario reveal cards, interactive timeline, and deep-link navigation callbacks.
- **`src/App.tsx`**: Adds the `"onboarding"` tab (`0. Start Here`) as the primary entry point in the top navigation bar and wires deep-link handlers from onboarding scenarios and starter tracks to the Lenses, Playgrounds, and Concept Atlas views.
