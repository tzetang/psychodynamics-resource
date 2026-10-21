## 1. TypeScript Schema & Onboarding Data Model

- [x] 1.1 Extend `src/types/psychodynamics.ts` with interfaces for the curated onboarding experience (`OnboardingPillar`, `SurfaceVsDepthComparison`, `RealWorldBehaviorScenario`, `HistoricalEvolutionEra`, `MythVsRealityItem`, and `StarterPathway`).
- [x] 1.2 Create `src/data/onboarding.ts` with plain-English orientation content explaining what psychodynamics is and what problem it solves, including surface-vs-underlying comparisons and Shedler's (2010) empirical pillars translated for beginners.
- [x] 1.3 Populate `src/data/onboarding.ts` with 6 research-grounded real-world behavioral scenarios ("Why Do We Do That?"), each containing the everyday situation, the "Conscious Story", the 4-part "What's Happening Underneath" dynamic breakdown, the empirical research inspiration (e.g., Vaillant's Grant Study, Luborsky's CCRT, attachment & affect phobia research), and links to formal concepts, lenses, and playgrounds.
- [x] 1.4 Populate `src/data/onboarding.ts` with the 5-era problem-driven historical narrative ("Why the Field Evolved"), 5 interactive "Pop-Culture Myths vs. Modern Empirical Reality" cards, and 4 Curated Starter Pathways.

## 2. Interactive Curated Onboarding View (`OnboardingView.tsx`)

- [x] 2.1 Build the hero orientation and Section 1 ("What Is Psychodynamics & What Is It For?") in `src/components/OnboardingView.tsx`, including an interactive "Surface View vs. Psychodynamic View" comparator and the 4 core ideas in plain English.
- [x] 2.2 Build Section 2 ("Why Do We Do That? Real-World Behavior Decoder") in `src/components/OnboardingView.tsx` with scenario selector cards, progressive reveal between "What I Tell Myself (Conscious Story)" and "What's Happening Underneath", empirical research callouts, and an optional expandable "When You're Ready: Formal Theory Bridge" with deep-link buttons.
- [x] 2.3 Build Section 3 ("A Bite-Sized Living History & Myth-Buster") in `src/components/OnboardingView.tsx` featuring an interactive 5-era timeline showing the human puzzle each wave solved, alongside flip/expandable "Myth vs. Empirical Reality" cards.
- [x] 2.4 Build Section 4 ("Curated Starter Pathways") in `src/components/OnboardingView.tsx` providing 4 tailored launchpads into the Lenses, Playgrounds, and Concept Atlas based on learner goals.

## 3. Navigation Integration & Verification

- [x] 3.1 Update `src/App.tsx` to add `'onboarding'` (`0. Start Here`) as the default entry tab in the top navigation bar and wire navigation handlers so clicking any scenario bridge or starter pathway opens the target Lens, Playground preset, or Concept Atlas entry seamlessly.
- [x] 3.2 Verify light/dark theme styling, responsive mobile/desktop layout, and TypeScript production build (`npm run build`).
