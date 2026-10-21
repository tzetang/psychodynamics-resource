## ADDED Requirements

### Requirement: Initial concept set
The system SHALL provide a concept page for each concept named by the initial situations, about 15 in total. At minimum these are: anxiety, defenses, transference, containment, projection, projective identification, repeating relationship loop, basic assumption: dependency, basic assumption: fight/flight, basic assumption: pairing, scapegoating, valency, social defenses against anxiety, role and boundary, and the unconscious at work (the waterline).

#### Scenario: Every situation concept resolves
- **WHEN** any situation's Name step references a concept
- **THEN** a concept page with that id exists

### Requirement: Concept page structure
Each concept page SHALL show, in this order:
1. A short animated clip built from the stage engine and glyph vocabulary.
2. A one-sentence everyday definition.
3. "What it looks like at work": 2–3 short examples.
4. "Your part": how a leader gets caught up in it.
5. Links to the situations where it appears.
6. A collapsed "Where this comes from" expander.

#### Scenario: Visual first
- **WHEN** a concept page opens
- **THEN** the animated clip is the first content element, above any paragraph text

### Requirement: Plain language with sources tucked away
Concept copy outside the sources expander SHALL use everyday language without unexplained academic terms. The "Where this comes from" expander SHALL list the originating theorist(s), key work and year, and SHALL be collapsed by default.

#### Scenario: Sources collapsed
- **WHEN** a concept page first renders
- **THEN** the theorist and citation details are hidden until the user opens "Where this comes from"

### Requirement: Concepts describe dynamics
Concept definitions SHALL be framed as patterns that happen in and between people and groups. They SHALL NOT be framed as traits or categories for labelling an individual.

#### Scenario: Framing review
- **WHEN** concept content is reviewed against the content checklist
- **THEN** no definition invites the reader to classify a specific colleague
