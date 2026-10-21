## Context

The current app (Vite + React 18 + TypeScript + Tailwind, no router, no animation library) is a clinician-oriented atlas. Almost all of its content is prose in `src/data/*.ts`, rendered as cards. It has a few hand-drawn SVGs with hardcoded hex colours, and a light theme bolted on through `!important` overrides of Tailwind class names in `src/index.css`.

This change replaces it with a product for managers and leaders: situation-first, animated, light-only (see proposal.md). The hard part is the **stage engine**. Every situation and concept depends on a force-driven glyph scene that a lay person can read without explanation, and that can be stepped, scrubbed, adjusted with knobs, shown in Present mode, and shown as a reduced-motion storyboard.

## Goals / Non-Goals

**Goals:**
- One data-driven stage engine that renders all 10 situations and all concept clips.
- Scenes that are deterministic and scrubbable, not live physics that differs on every run.
- Light-only tokens consumed by both Tailwind and SVG.
- Content authored as typed TypeScript modules, kept separate from rendering.
- Proving the engine on one scene before writing the rest of the content.

**Non-Goals:**
- Dark mode (the tokens make it possible later; it is not built now).
- Porting any of the 40 clinical concepts, the 5 Lenses, or the 3 playgrounds.
- A free-form sandbox (adding or removing people, injecting events).
- Backend, accounts, progress tracking, or analytics.
- Internationalization.

## Decisions

### D1. Beats are full snapshots; forces only compute the layout
Each beat declares the **complete** target state of the scene: the force parameters for the layout, haze level, which particles fire, and the caption. When a scene loads, the engine runs the d3-force simulation **headless to settle** for each beat (fixed seed, fixed initial positions, about 300 ticks) and caches the resulting actor positions. Playback then animates between cached snapshots using Motion.

- *Why:* Scrubbing, previous-beat, Present-mode stepping, reduced-motion storyboards and deterministic layouts all fall out of "jump to snapshot N". A live simulation would wobble differently every time and couldn't be scrubbed.
- *Knobs:* When a knob changes, the engine re-settles the current beat with the new parameters (cheap at fewer than 15 actors) and animates to the new snapshot.
- *Alternative considered:* A live, continuously ticking simulation rendered every frame. It feels more organic but is non-deterministic, hard to scrub, and harder to make reduced-motion safe. Rejected. A small idle "breathing" jitter can be layered on top with CSS for liveliness.

### D2. Motion for animation, d3-force for layout only
Use `motion` (Framer Motion's successor package) for SVG element transitions, particle path animation (`offsetPath`/keyframes along computed points) and `useReducedMotion`. Use `d3-force` purely as a numeric layout solver, with no d3 DOM manipulation, so React stays in control of rendering.

- *Alternatives:* CSS-only animation (too limited for path-following particles and orchestrated sequences); GSAP (capable, but imperative and outside React's model); canvas or PixiJS (unnecessary with fewer than 20 elements, and loses SVG accessibility and crisp text).

### D3. SVG stage with a fixed viewBox
The stage is one `<svg viewBox="0 0 1000 600">` that scales to its container while keeping its aspect ratio. Captions are **HTML outside the SVG**, so they reflow and enlarge in Present mode. Glyphs are React components (`<Person>`, `<Leader>`, `<Orb>`, `<Haze>`, `<Boundary>`, `<Gate>`, `<Waterline>`) that take semantic props and read colours from tokens.

### D4. Token system shared by Tailwind and SVG
Define tokens as CSS custom properties on `:root` in `src/index.css`: surfaces, text, accent, glyph strokes, and one token per feeling family (`--feel-anxiety`, `--feel-anger`, `--feel-shame`, `--feel-longing`, `--feel-calm`), plus haze. Extend `tailwind.config.js` `theme.colors` so Tailwind classes resolve to those variables (`bg-surface`, `text-ink`, ...). SVG glyphs use `fill="var(--feel-anxiety)"`. Remove the whole `html.theme-light` override block.

### D5. Scene definition schema (sketch)
```ts
type ActorRole = 'person' | 'leader' | 'outsider';
interface Actor { id: string; role: ActorRole; label?: string; home: [number, number] }

interface ForceSpec {
  towardLeader?: number;      // dependency
  cluster?: number;           // cohesion
  awayFrom?: { target: string | [number, number]; strength: number }; // fight/flight
  pair?: { a: string; b: string; strength: number };                  // pairing
  pinned?: Record<string, [number, number]>;
  boundaryPull?: number;
}

interface ParticleSpec {
  from: string; to: string; family: FeelingFamily;
  resolve: 'absorb' | 'bounce' | 'settle' | 'transform' | 'split';
  transformTo?: FeelingFamily; size?: number; delayMs?: number;
}

interface Beat {
  id: string; caption: string; isYourPart?: boolean;
  forces: ForceSpec; haze: number /* 0..1 */; hazeScope?: 'stage' | string;
  particles?: ParticleSpec[]; highlight?: string[];
}

interface KnobSpec {
  id: string; label: string; lowLabel: string; highLabel: string;
  default: number;
  apply: (beat: Beat, value: number) => Beat;   // pure transform of the beat
}

interface SceneDef { id: string; actors: Actor[]; boundaries?: BoundarySpec[]; beats: Beat[]; knobs: KnobSpec[] }
```
Knobs are **pure functions over a beat**, so the snapshot model (D1) still holds. "Try" stances are expressed as alternate beat lists (`afterBeats`) on the same `SceneDef`, not as separate scenes.

### D6. Content modules
- `src/content/situations/<id>.ts` exports `Situation { id, level, title, watch: SceneDef, name: conceptId[], tries: Try[], escalation }`.
- `src/content/concepts/<id>.ts` exports `Concept { id, name, definition, atWork[], yourPart, clip: SceneDef, sources }`.
- `src/content/index.ts` builds registries and validates at module load in dev (every referenced concept id exists, every situation has a your-part beat, knob count is 1–2) by throwing a descriptive error.

### D7. Hash routing, no router dependency
Routes are `#/`, `#/s/<situationId>`, `#/c/<conceptId>`, plus `?present=1`. A small `useHashRoute` hook does the parsing, and browser history works natively. React Router isn't worth adding for three routes.

### D8. Reduced motion is a renderer mode, not a degraded path
`useReducedMotion()` switches `<Stage>` into `<Storyboard>`, which renders each cached snapshot (D1) as a static mini-stage with its caption. Because the snapshots already exist, this costs little and stays correct automatically.

### D9. Spike gate before content
Build the engine against a single scene, **"Everyone waits for me to decide"** (dependency). It exercises forces, haze, particles, a your-part beat, two knobs, and a Try. Hold a legibility check (can someone unfamiliar describe what's happening from the animation plus captions?) before writing the other 9 situations. If it fails, iterate on the glyph vocabulary and pacing first.

## Risks / Trade-offs

- **Abstract glyphs don't read as people or feelings** → Use the spike gate (D9), always show captions, provide a legend, label the leader glyph "You", and use subtle idle motion so glyphs feel alive.
- **Animation without meaning ("motion as decoration")** → Content checklist rule: every motion must correspond to a captioned change in the dynamic. Anything that isn't is cut in review.
- **Over-simplifying the theory, or lending it false authority** → "Where this comes from" expanders; a fixed "what this picture leaves out" line on concept pages; dynamics-not-diagnoses review.
- **Managers misusing the concepts to label staff** → Framing rules in the situation-scenes and concept-guide specs, an escalation note on every situation, and a mandatory your-part beat.
- **Content effort is underestimated** (10 scripted scenes plus 15 concepts plus clips) → Concept clips reuse a situation's scene with fewer beats where possible; author in priority order; the spike scene sets the template.
- **Force layouts produce awkward overlaps at the 360px stage scale** → Collision force plus a minimum glyph radius in viewBox units; check snapshots at the smallest size.
- **The headless settle cost when knobs change** → Fewer than 15 actors × 300 ticks is negligible; debounce knob input by about 50 ms.

## Migration Plan

This is a single-branch replacement with no data or user migration. Theme preference in `localStorage` (`psychodynamics-theme`) is simply ignored.
1. Add dependencies and tokens. Build the engine and the spike scene alongside the old app on a temporary `#/spike` route.
2. Pass the spike gate.
3. Delete the old components and data, build the shell and the remaining content.
4. Rollback means reverting the branch; the clinical app stays in git history (commit `8be8695`).

## Open Questions

- Should the leader glyph carry the label "You" everywhere, or only in Self/Pair scenes? (Lean: everywhere, for "your part".)
- Who checks the dynamics-not-diagnoses rule: the author's own checklist, or a domain reviewer (coach or org consultant) before release?
- Should scenes reuse a fixed cast (the same named team members) across Team and Org situations to build familiarity?
- Is a printable or exportable storyboard (from D8 snapshots) wanted for workshop handouts? It's cheap to add later.

## Implementation notes (spike)

Deviations from the D5 sketch found while building the engine against the dependency scene:

- `SceneDef` gains `label` (accessible description) and optional `overlays` (`waterline`, `gate`); a `Beat` shows them through `show: string[]`. Needed by the Self scenes (gate, waterline).
- Boundaries are rounded rectangles (`BoundaryShape { x, y, width, height }`) derived from member positions, clamped to the stage. An ellipse could not enclose corner members without filling the whole stage.
- `towardLeader` is graded: it sets the radius at which people gather (135 at 1.0, up to ~455 at 0), so knobs that scale it visibly loosen or tighten the group instead of acting as an on/off switch.
- Containment knob (spike): low makes anxiety/longing orbs bounce back, high adds a smaller calm orb returning to the sender, and it thins haze and loosens the group.
- Scenes are keyed by `SceneDef.id`; a Try stance is the same cast and knobs with its own id (`<situation>:<stance>`) and its own beats.

## Spike gate result (D9)

Legibility check on `#/spike` ("Everyone waits for me to decide") was reported as **passed** by the author on 2026-10-21; no glyph, caption or timing changes were requested. Work continued with the shell and the remaining content.

## Verification notes (section 8)

- **Bundle (8.4):** production JS is 395.6 kB (125.9 kB gzip), down from 517.2 kB (151.3 kB gzip) for the clinical app at commit `8be8695`, and the >500 kB chunk warning is gone. `d3-force` is about 4 kB gzip; `motion/react` is at most about 48 kB gzip when imported whole (less after tree-shaking).
- **Accessibility (8.2):** axe-core (WCAG 2 A/AA, 2.1 AA, best practice) reports 0 violations on all 26 routes. `color-contrast` comes back "incomplete" because of the haze gradients, so contrast was checked from tokens (`scripts` in the change notes): text 6.1:1 or better, glyphs 4.4:1 or better. Keyboard-only walkthrough, `aria-live` caption updates, arrow-key stepping, keyboard-unlocked knobs, and the reduced-motion storyboard (25 pages, no running animations, no player controls) all pass. Not done: a real screen-reader session (NVDA, VoiceOver).
- **Present mode (8.3):** all 10 situations stepped beat by beat at 1920×1080 and 1280×720: caption at least 28px, controls inside the viewport, no overlap, no horizontal scroll, no header or footer.
