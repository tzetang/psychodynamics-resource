## ADDED Requirements

### Requirement: Interactive Five Lenses Roadmap
The system SHALL display an interactive introductory curriculum organized around the 5 major lenses of psychodynamics: (1) Drive & Conflict Theory, (2) Ego Psychology & Defense Mechanisms, (3) Object Relations Theory, (4) Self Psychology, and (5) Relational, Attachment & Modern Empirical Psychodynamics.

#### Scenario: Learner explores a psychodynamic lens
- **WHEN** the user selects one of the 5 Lenses (e.g., "Object Relations Theory")
- **THEN** the system displays the lens's core organizing question, plain-English overview, historical shift from prior lenses, key foundational theorists (e.g., Klein, Winnicott, Fairbairn), modern empirical extensions (e.g., Kernberg TFP, Fonagy Mentalization), an interactive visual diagram of its core mental model, and clickable links to its associated Playground and core concepts.

### Requirement: Lens Comparison Matrix and Visual Camera Zoom Metaphor
The system SHALL provide a visual comparison showing how each of the 5 Lenses views the same human struggle through a different focal point (e.g., forbidden wish vs. adaptive defense vs. internal self-other template vs. self-cohesion vs. two-person enactment).

#### Scenario: Comparing all five lenses on a unified case example
- **WHEN** the user toggles a shared case scenario in the 5 Lenses view
- **THEN** the system highlights how each of the 5 schools formulates the exact same clinical or everyday moment differently.

### Requirement: Direct Deep-Linking to Playgrounds and Concept Atlas
The system SHALL allow users to jump directly from any Lens card into the corresponding Interactive Playground preset or Concept Atlas entry.

#### Scenario: Navigating from a lens to a playground
- **WHEN** the user clicks "Open in Playground" on a Lens (such as Ego Psychology)
- **THEN** the application switches to the Dynamic Playgrounds view with the corresponding simulator (Defense Mechanism Switchboard) active.
