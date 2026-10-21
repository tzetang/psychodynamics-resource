## Why

The current atlas is written for clinicians: about 220k characters of prose built around therapy vignettes, PDM-2, DMRS and the history of the schools. Its first screen has no visuals at all. Our actual audience is managers and leaders who already work in organizations and have no academic training. They come with a workplace situation ("my team waits for me to decide everything"), not a concept name, and they learn dynamics by watching them unfold, not by reading definitions.

## What Changes

- **BREAKING** Replace the whole current experience with a practitioner-focused product. This removes the "Start Here" onboarding, the 5 Lenses, the 3 clinical Playgrounds, the 40-concept clinical Concept Atlas, the dark theme, and the `!important` light-theme override layer.
- Add a **situation-first home**: "What's happening?" situations grouped by zoom level (Self → Pair → Team → Org).
- Add a **stage engine**. It renders every situation as an animated, force-driven scene of abstract glyphs: people ◯, the leader ◉, feelings ●, anxiety haze, and team or organization boundaries. Each scene has guided beats (play/step/scrub) and then unlocks 1–2 knobs (e.g. anxiety, containment).
- Add a **Watch → Name → Try** learning loop for each situation. You watch the dynamic, name the concept behind it, and try a leader stance. The "try" step plays an animated "after" version.
- Add a **first content set**: 10 workplace situations and about 15 plain-language concepts from systems psychodynamics and individual psychodynamics. Sources sit in a collapsed "Where this comes from" expander.
- Add **practitioner guardrails** to all content. Concepts name dynamics, not people. Every scene shows the leader's own part. Moves are leader stances, not techniques done to others. Each situation says when to bring in HR, a coach or a clinician.
- Add a **Present mode** for workshops and coaching: large type, hidden chrome, and keyboard stepping through beats.
- Add a **light-only visual system** built on CSS custom-property tokens, so a dark theme can be added later as a token swap.
- Make every animated scene respect `prefers-reduced-motion` by showing a static storyboard of its beats instead.

## Capabilities

### New Capabilities
- `visual-language`: Light-only design tokens and the shared glyph vocabulary (person, leader, feeling, anxiety haze, boundary, gate) with fixed meanings across the product.
- `stage-engine`: Data-driven animated scene renderer. Covers the force-driven actor layout, travelling feeling particles, the anxiety field, boundaries, beat timeline playback (play/step/scrub), knobs, and the reduced-motion storyboard fallback.
- `situation-scenes`: The 10 workplace situations across Self/Pair/Team/Org. Each has a Watch → Name → Try flow, a scripted scene, knobs, an animated "after" state, a "your part" beat, and an escalation note.
- `concept-guide`: About 15 plain-language concept pages linked from situations. Each has a short animated clip, an everyday definition, a "names dynamics not people" framing, and a collapsed sources expander.
- `practitioner-shell`: App shell. Covers the situation-picker home grouped by zoom level, navigation between situations and concepts, and Present mode.

### Modified Capabilities
<!-- None: earlier changes (psychodynamics-learning-atlas, curated-psychodynamics-onboarding) were never archived into openspec/specs/, so there are no main specs to delta. Their capabilities are retired by this change. -->

## Impact

- **Removed code:** `src/components/*` (OnboardingView, FiveLensesView, PlaygroundsView, ConceptAtlasView, ConceptGraph, ConceptInspector, LensMentalModelDiagram, playgrounds/*), `src/data/*`, most of `src/types/psychodynamics.ts`, and the theme override layer in `src/index.css`.
- **Rewritten:** `src/App.tsx` (new shell, no theme toggle, no `localStorage` theme key).
- **New dependencies:** `motion` (animation) and `d3-force` (actor layout), plus `@types/d3-force`.
- **Retired capabilities:** concept-atlas, dynamic-playgrounds, five-lenses-curriculum and curated-onboarding (from the unarchived earlier changes). Their clinical content stays available in git history.
- **Unchanged:** Vite, React 18, TypeScript, Tailwind and lucide-react stay as they are.
