## ADDED Requirements

### Requirement: Situation picker home
The home screen SHALL be a "What's happening?" situation picker. It SHALL group situations under the zoom levels Self, Pair, Team and Org, in that order, and each level SHALL have a one-line plain description. Each situation card SHALL show its title in everyday language and a small static glyph thumbnail of its scene.

#### Scenario: Pick a situation
- **WHEN** the user selects a situation card on the home screen
- **THEN** that situation's page opens at the Watch step with the scene at beat 0

### Requirement: Shareable navigation
Situations and concepts SHALL each have a stable URL (hash-based routing is acceptable). Browser back and forward SHALL move between visited screens.

#### Scenario: Deep link
- **WHEN** the user opens a URL for a specific situation
- **THEN** the app loads straight into that situation

#### Scenario: Back navigation
- **WHEN** the user goes from home to a situation to a concept and presses browser back
- **THEN** the situation page is shown again

### Requirement: Present mode
The app SHALL provide a Present mode for workshops and coaching. In Present mode:
- header, footer and secondary navigation are hidden
- the stage and caption fill the viewport, with enlarged type (captions at least 28px)
- Right/Left Arrow and Space step through beats, and Esc exits
- knobs stay available in a compact overlay

#### Scenario: Enter and step
- **WHEN** the user turns on Present mode on a situation and presses Right Arrow
- **THEN** the chrome is hidden, the scene fills the screen, and it moves to the next beat

#### Scenario: Exit
- **WHEN** the user presses Esc in Present mode
- **THEN** the normal layout returns at the same situation and beat

### Requirement: Responsive layout
The shell and stage SHALL work from 360px wide up to large projector displays without horizontal page scrolling. The stage SHALL scale to its container while keeping its aspect ratio.

#### Scenario: Phone width
- **WHEN** the viewport is 360px wide
- **THEN** the situation picker shows as a single column and the stage fits within the viewport width
