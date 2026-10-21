## 1. Foundations

- [x] 1.1 Add `motion`, `d3-force` and `@types/d3-force` to package.json and confirm `npm run build` still passes
- [x] 1.2 Define light-only design tokens (surfaces, ink, accent, glyph stroke, haze, five feeling families) as CSS custom properties on `:root` in `src/index.css`
- [x] 1.3 Map tokens into `tailwind.config.js` theme colours (`bg-surface`, `text-ink`, `feel-*`, ...) and check the contrast targets (text 4.5:1, glyph 3:1)
- [x] 1.4 Add `useHashRoute` hook supporting `#/`, `#/s/<id>`, `#/c/<id>`, `#/spike` and the `present=1` flag, with working browser back/forward

## 2. Stage engine core

- [x] 2.1 Create `src/stage/types.ts` with `Actor`, `ForceSpec`, `ParticleSpec`, `Beat`, `KnobSpec`, `SceneDef`, `FeelingFamily` per design D5
- [x] 2.2 Implement `settleBeat(scene, beat, seed)`: headless d3-force run (fixed seed and initial positions, collision force) returning actor positions in viewBox units
- [x] 2.3 Implement `useSceneSnapshots(scene, knobValues)` that caches settled snapshots per beat and re-settles the current beat on knob change (debounced ~50 ms)
- [x] 2.4 Build glyph components `<Person>`, `<Leader>`, `<Orb>`, `<Haze>`, `<Boundary>`, `<Gate>`, `<Waterline>` using only token colours
- [x] 2.5 Build `<Stage>`: fixed 1000×600 viewBox SVG that animates actors between snapshots with Motion and renders haze and boundaries
- [x] 2.6 Implement particle animation for each resolve type (absorb, bounce, settle, transform, split) along paths between actors
- [x] 2.7 Build the playback controller: play/pause, next/prev, restart, scrubber, auto-pause per beat, autoplay toggle; captions rendered as HTML outside the SVG
- [x] 2.8 Build the knob panel: knobs locked until the first full playback, plain labels and low/high end labels, live updates via `KnobSpec.apply`
- [x] 2.9 Build `<Storyboard>` reduced-motion renderer from cached snapshots and switch it in via `useReducedMotion`
- [x] 2.10 Add keyboard control (arrows/space on the focused stage), an `aria-live` caption region, an accessible stage label, and a glyph legend popover

## 3. Spike scene and legibility gate

- [x] 3.1 Author the "Everyone waits for me to decide" situation: calm → stress → dependency cluster → your-part beat, plus anxiety and containment knobs and one Try stance with `afterBeats`
- [x] 3.2 Mount it on the temporary `#/spike` route alongside the existing app
- [x] 3.3 Check it at 360px, laptop and projector sizes; fix overlaps and pacing
- [x] 3.4 Run the legibility check with at least two people unfamiliar with the material; record findings in design.md and adjust glyphs, captions and timing before continuing

## 4. Content model

- [x] 4.1 Create `src/content/types.ts` with `Situation`, `Try`, `Concept`, `Sources`, `ZoomLevel`
- [x] 4.2 Create `src/content/index.ts` registries with dev-time validation (concept ids resolve, each situation has a your-part beat, 1–2 knobs, escalation note present)
- [x] 4.3 Write the content checklist (`openspec/changes/practitioner-visual-rebuild/content-checklist.md`): dynamics-not-diagnoses, everyday language, every motion is captioned, stances are the leader's own

## 5. App shell

- [x] 5.1 Delete the old components (`src/components/**`), data (`src/data/**`), clinical types, the theme toggle and the `html.theme-light` CSS override block
- [x] 5.2 Rewrite `App.tsx` as the new shell: header, routed main area, footer, no theme toggle
- [x] 5.3 Build the home situation picker grouped Self → Pair → Team → Org, with level descriptions and static glyph thumbnails (snapshot of beat 0)
- [x] 5.4 Build the situation page: Watch (stage) → Name (concept links) → Try (stance selector that replays `afterBeats`), with the escalation note always visible
- [x] 5.5 Build the concept page: clip first, then definition, at-work examples, your part, linked situations, collapsed "Where this comes from", and a "what this picture leaves out" line
- [x] 5.6 Build Present mode: hidden chrome, full-viewport stage, captions ≥28px, Right/Left/Space stepping, Esc exits to the same beat, compact knob overlay
- [x] 5.7 Check responsive layout from 360px to 1920px with no horizontal page scroll
- [x] 5.8 Remove the `#/spike` route and fold the spike scene into the content registry

## 6. Situation content

- [x] 6.1 Self: "I overreact to criticism" (anxiety → defense, gate and waterline glyphs)
- [x] 6.2 Self: "One person always gets under my skin" (transference)
- [x] 6.3 Pair: "The report who needs constant reassurance" (containment absorb/bounce)
- [x] 6.4 Pair: "I keep rescuing the same person" (projective identification, repeating loop)
- [x] 6.5 Team: "Meetings that decide nothing" (pairing)
- [x] 6.6 Team: "The team turns on an outside enemy" (fight/flight)
- [x] 6.7 Team: "There's always one 'difficult' person" (scapegoating, valency; removal moves the orbs to the next person)
- [x] 6.8 Org: "Reorg panic" (anxiety spreading across boundaries; containment at scale)
- [x] 6.9 Org: "The process that protects us from the real work" (social defenses)

## 7. Concept content

- [x] 7.1 Write the ~15 concept pages listed in the concept-guide spec, each with a definition, at-work examples, your part, and sources
- [x] 7.2 Build each concept clip, reusing situation scenes with trimmed beats where possible
- [x] 7.3 Confirm every Name-step reference resolves and every concept links back to at least one situation

## 8. Verification

- [x] 8.1 Review all situation and concept copy against the content checklist
- [x] 8.2 Accessibility pass: keyboard-only walkthrough, screen-reader caption announcements, reduced-motion storyboard on every scene, contrast check
- [x] 8.3 Present-mode run-through of all 10 situations on a projector-sized viewport
- [x] 8.4 `npm run build` passes with no type errors; check bundle size impact of motion and d3-force
