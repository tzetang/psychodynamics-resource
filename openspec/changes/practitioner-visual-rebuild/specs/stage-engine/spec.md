## ADDED Requirements

### Requirement: Scenes are declared as data
The stage engine SHALL render a scene entirely from a typed scene definition. The definition contains actors (id, role, label, initial position hint), boundaries, an ordered list of beats, and knob definitions. Adding a new situation SHALL NOT require new rendering code unless it needs a new glyph primitive.

#### Scenario: Render from definition
- **WHEN** the engine receives a valid scene definition
- **THEN** it renders the actors, boundaries and anxiety field described there, positioned at beat 0

### Requirement: Force-driven actor layout
Actor positions SHALL be computed by a force simulation. Each beat or knob value can change the forces: attraction toward the leader, clustering, repulsion from an outside target, pairing, and the pull of a boundary. The arrangement of the group SHALL therefore emerge from those forces and visibly express the dynamic (e.g. everyone orbiting the leader under dependency).

#### Scenario: Group reshapes on beat change
- **WHEN** a scene advances from a "calm" beat to a "dependency" beat
- **THEN** the person glyphs move smoothly from spread-out working positions into a cluster around the leader

#### Scenario: Layout is deterministic
- **WHEN** the same scene is loaded twice with the same knob values
- **THEN** the actors settle into the same arrangement (the simulation uses a fixed seed and initial positions)

### Requirement: Travelling feeling particles
Beats SHALL be able to emit feeling orbs that travel along a path from one actor to another. On arrival an orb SHALL resolve in one of these ways: absorb (contained), bounce back (amplified), settle (lodged in a recipient), transform (changes family or softens), or split.

#### Scenario: Containment absorbs and returns softened
- **WHEN** an anxiety orb travels from a report to the leader with containment set high
- **THEN** the orb is absorbed and a smaller relief/calm orb travels back to the report

#### Scenario: Low containment bounces back
- **WHEN** the same orb arrives with containment set low
- **THEN** the orb bounces back to the report larger than before

### Requirement: Anxiety field
The stage SHALL render an anxiety haze whose density and extent come from the current anxiety value. The haze SHALL be able to cover the whole stage or be local to a boundary or actor.

#### Scenario: Haze tracks anxiety
- **WHEN** the anxiety knob is raised
- **THEN** the haze becomes denser within 600 ms and the actors' forces update in line with the scene's knob mapping

### Requirement: Beat timeline playback
Each scene SHALL have an ordered list of beats, each with a short caption. The engine SHALL provide play, pause, next beat, previous beat, restart and a scrubber. Playback SHALL auto-pause at the end of each beat until the user continues, unless autoplay is on. The current beat's caption SHALL always be visible as text.

#### Scenario: Step through beats
- **WHEN** the user presses "next beat"
- **THEN** the scene animates to the next beat's state and shows that beat's caption

#### Scenario: Scrub backward
- **WHEN** the user drags the scrubber to an earlier beat
- **THEN** the scene shows that beat's settled state without replaying the intermediate beats

### Requirement: Knobs unlock after guided playback
Scenes SHALL declare 1–2 knobs (e.g. anxiety, containment, role clarity) that map onto the scene's force and particle parameters. Knobs SHALL be locked until the guided beats have been played once, and SHALL then update the scene live.

#### Scenario: Knobs locked before playback
- **WHEN** the user opens a scene for the first time
- **THEN** the knobs are visible but disabled, with a hint to watch the scene first

#### Scenario: Knob changes the dynamic live
- **WHEN** the user raises containment after playback has finished
- **THEN** the anxiety haze thins and the actors drift back toward their working positions

### Requirement: Reduced-motion storyboard
When `prefers-reduced-motion: reduce` is active, the engine SHALL NOT animate. It SHALL instead render each beat as a static frame, laid out as a storyboard sequence with its caption. Knob changes SHALL jump straight to the settled state.

#### Scenario: Reduced motion
- **WHEN** the OS reduced-motion preference is on and a scene opens
- **THEN** the beats appear as a row or grid of static frames with captions, and no transitions or particle motion play

### Requirement: Keyboard and screen-reader access
All playback controls and knobs SHALL be operable by keyboard. The stage SHALL expose a live text region announcing the current beat's caption, and SHALL have an accessible label describing the scene.

#### Scenario: Keyboard stepping
- **WHEN** the stage has focus and the user presses Right Arrow
- **THEN** the scene moves to the next beat and the caption is announced
