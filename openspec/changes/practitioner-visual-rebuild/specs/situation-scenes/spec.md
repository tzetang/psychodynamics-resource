## ADDED Requirements

### Requirement: Initial situation set
The system SHALL ship these 10 situations, each assigned to a zoom level:

| Level | Situation | Core concept(s) |
|---|---|---|
| Self | I overreact to criticism | anxiety → defense |
| Self | One person always gets under my skin | transference |
| Pair | The report who needs constant reassurance | containment |
| Pair | I keep rescuing the same person | projective identification; repeating relationship loop |
| Team | Everyone waits for me to decide | basic assumption: dependency |
| Team | Meetings that decide nothing | basic assumption: pairing |
| Team | The team turns on an outside enemy | basic assumption: fight/flight |
| Team | There's always one "difficult" person | scapegoating; valency |
| Org | Reorg panic | anxiety moving through a system; containment at scale |
| Org | The process that protects us from the real work | social defenses against anxiety |

#### Scenario: All situations present
- **WHEN** the home screen loads
- **THEN** all 10 situations are listed under their zoom levels

### Requirement: Watch → Name → Try flow
Every situation page SHALL present three steps in order:
1. **Watch**: the animated scene of the dynamic, with beat captions in everyday workplace language.
2. **Name**: the concept(s) behind it, each in one plain sentence, linking to its concept page.
3. **Try**: one to three leader stances. Each one replays the scene as an animated "after" version showing how the dynamic shifts.

#### Scenario: Name step links to concept
- **WHEN** the user reaches the Name step and selects a concept
- **THEN** the corresponding concept page opens

#### Scenario: Try shows the after state
- **WHEN** the user selects a leader stance in the Try step
- **THEN** the stage replays with that stance applied and visibly different actor/particle behaviour

### Requirement: "Your part" beat
Every situation's scene SHALL include at least one beat that shows how the leader (the viewer's position) takes part in or feeds the dynamic.

#### Scenario: Leader participation shown
- **WHEN** the user plays any situation's scene to the end
- **THEN** at least one beat caption and animation shows the leader's own contribution (e.g. the leader answering every question, which deepens dependency)

### Requirement: Dynamics, not diagnoses
Situation copy SHALL describe what is happening between people and in roles. It SHALL NOT label any individual with a clinical term or diagnosis. Leader stances SHALL be framed as the leader's own stance or actions, never as techniques applied to an individual.

#### Scenario: Content review
- **WHEN** the situation content is reviewed against the content checklist
- **THEN** no caption or stance applies a diagnostic label to an individual (e.g. "she is splitting", "he is narcissistic")

### Requirement: Escalation note
Every situation SHALL include a short "When this is more than a team dynamic" note naming the signals that call for HR, a coach, or a mental-health professional.

#### Scenario: Escalation visible
- **WHEN** the user views any situation
- **THEN** the escalation note is visible without opening an expander

### Requirement: Situation knobs
Each situation SHALL declare 1–2 knobs relevant to its dynamic. Each knob SHALL have a plain-language label and low/high end labels (e.g. "Containment: you absorb it ↔ you hand it back").

#### Scenario: Labelled knobs
- **WHEN** the knobs unlock
- **THEN** each knob shows its name and plain-language labels for both ends
