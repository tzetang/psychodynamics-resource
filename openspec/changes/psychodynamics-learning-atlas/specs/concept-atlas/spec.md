## ADDED Requirements

### Requirement: Searchable and Filterable Concept Atlas
The system SHALL provide a searchable and filterable visual encyclopedia of at least 25 core psychodynamic concepts spanning Drive Theory, Ego Psychology, Object Relations, Self Psychology, Relational/Attachment theory, and Empirical Assessment frameworks.

#### Scenario: Searching and filtering concepts
- **WHEN** the user types a query into the search bar or selects filters by Lens, Category (Defense, Structure, Relational Process, Developmental, Empirical Framework), or DMRS Maturity Level
- **THEN** the Concept Atlas immediately filters both the visual concept cards and the interactive concept network graph to matching entries.

### Requirement: Interactive Concept Relationship Graph
The system SHALL render an interactive node-link visual map showing how psychodynamic concepts connect across schools and mechanisms (e.g., how *Splitting* connects to *Projective Identification*, *Paranoid-Schizoid Position*, and *Borderline Personality Organization*).

#### Scenario: Selecting a node in the concept graph
- **WHEN** the user clicks or hovers a concept node in the visual graph
- **THEN** the graph highlights its connected parent/child/contrasting concepts and opens the detailed Concept Inspector panel for that node.

### Requirement: Grounded Concept Anatomy and Side-by-Side Comparison
The system SHALL display for every concept: (1) a 10-second plain-English intuition, (2) a visual schematic or Idea-vs-Affect pathway diagram, (3) Foundational Origin with primary theorist and publication year, (4) Modern Empirical & Clinical Grounding (such as DMRS, PDM-2, CCRT, ISTDP, TFP, MBT, Shedler 2010, or neuropsychoanalysis), and (5) an interactive "Often Confused With" side-by-side comparison toggle.

#### Scenario: Comparing two commonly confused concepts side-by-side
- **WHEN** the user views a concept (such as *Projection*) and clicks one of its "Often Confused With" pills (such as *Projective Identification*)
- **THEN** the system renders a side-by-side comparison matrix contrasting their mechanism, Idea-vs-Affect routing, interpersonal impact, and clinical level.
