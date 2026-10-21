## ADDED Requirements

### Requirement: Light-only token-based theme
The application SHALL render in a single light theme. All colours used by UI chrome and by scenes SHALL be defined as CSS custom properties (design tokens) on `:root`. No component or scene SHALL hardcode hex colour values, and there SHALL be no theme toggle and no `!important` theme override layer.

#### Scenario: Colours come from tokens
- **WHEN** any scene glyph or UI surface is rendered
- **THEN** its fill, stroke and text colours resolve from `var(--token)` values defined on `:root`

#### Scenario: No theme toggle
- **WHEN** the user views any screen
- **THEN** no light/dark toggle is shown and the page renders on the light background token regardless of the OS colour-scheme preference

### Requirement: Shared glyph vocabulary
The system SHALL provide a fixed glyph vocabulary whose meaning is identical in every scene:
- person: hollow circle
- leader: filled/ringed circle
- feeling: small glowing orb, coloured by feeling family
- anxiety: background haze whose density reflects intensity
- boundary: dashed outline around a team or organization
- gate: the point where a defense blocks, flips or redirects a feeling
- waterline: the line between what is noticed and what is not

#### Scenario: Glyph meaning is consistent
- **WHEN** a feeling orb appears in a Self scene and in a Team scene
- **THEN** both use the same shape, size range and feeling-family colour

#### Scenario: Glyph legend is reachable
- **WHEN** the user opens the legend from any scene
- **THEN** each glyph is shown with a one-line plain-language meaning

### Requirement: Feeling families are colour-coded and labelled
Feelings SHALL be grouped into a small set of families (anxiety/fear, anger, shame, longing/need, relief/calm). Each family SHALL have its own token colour. A colour SHALL never be the only carrier of meaning: every orb's family SHALL also be available as a text label, either on hover/focus or in the caption.

#### Scenario: Colour plus label
- **WHEN** the user focuses or hovers a feeling orb
- **THEN** its feeling family name is shown as text

### Requirement: Readable light-theme contrast
Body text SHALL meet WCAG AA contrast (4.5:1) against its background token, and scene glyph strokes SHALL meet 3:1 against the stage background token.

#### Scenario: Contrast check
- **WHEN** the token set is checked with a contrast tool
- **THEN** all text/background pairs meet 4.5:1 and all glyph/stage pairs meet 3:1
