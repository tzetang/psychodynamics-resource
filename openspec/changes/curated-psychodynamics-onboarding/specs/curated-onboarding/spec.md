## ADDED Requirements

### Requirement: Default Curated Onboarding Entry View
The system SHALL provide a dedicated "Start Here: Orientation" (`onboarding`) view as the default entry tab before "The 5 Lenses", introducing newcomers to psychodynamics in plain English before exposing dense theoretical terminology.

#### Scenario: Initial application load defaults to Curated Onboarding
- **WHEN** a user opens the Psychodynamics Atlas application
- **THEN** the system displays the "0. Start Here" Curated Onboarding view as the active primary tab and allows switching between Onboarding, The 5 Lenses, Dynamic Playgrounds, and the Concept Atlas at any time

#### Scenario: Guided progression across onboarding stages
- **WHEN** a user navigates through the Curated Onboarding view
- **THEN** the system presents four progressive sections: (1) What Psychodynamics Is & What It's For, (2) Real-World Behavioral Scenarios ("Why Do We Do That?"), (3) A Bite-Sized Living History & Myth-Busting, and (4) Curated Starter Pathways

### Requirement: Plain-English Orientation on What Psychodynamics Is For
The system SHALL explain the core purpose of psychodynamics—understanding why people repeatedly feel, think, or act in ways that contradict their conscious intentions—using a visual comparison between surface-level observation and underlying dynamic meaning, anchored in empirical core principles (such as Shedler's distinctive features of psychodynamic thought).

#### Scenario: Exploring surface behavior vs underlying dynamic meaning
- **WHEN** a user views the "What Is Psychodynamics & What Is It For?" section
- **THEN** the system displays an interactive contrast between "Surface / Symptom-Only View" and "Psychodynamic / Underlying-Pattern View" alongside the core pillars of psychodynamic thinking in plain, jargon-free language

### Requirement: Research-Grounded Real-World Behavioral Scenarios
The system SHALL provide at least 6 interactive real-world behavioral scenarios ("Why Do We Do That?") grounded in empirical and clinical research (e.g., Vaillant's Grant Study of adult defenses, Luborsky's CCRT relationship transcripts, attachment/defensive exclusion studies) that allow learners to explore everyday behaviors before seeing technical labels.

#### Scenario: Selecting and unpacking a real-world behavior scenario
- **WHEN** a user selects a real-world behavior scenario card (such as procrastinating on a deeply valued opportunity, picking a fight right after closeness, chronic over-helping with hidden resentment, or laughing while recounting painful news)
- **THEN** the system first shows the relatable everyday situation and the person's "Conscious Story", and lets the user reveal the step-by-step "What's Happening Underneath" dynamic explanation and empirical research basis

#### Scenario: Optional bridge from plain-English scenario to formal theory
- **WHEN** a user expands or clicks the "When You're Ready: Formal Theory Bridge" inside any real-world scenario
- **THEN** the system displays the corresponding psychodynamic concept, lens, and interactive playground preset, and navigates directly to that Lens, Playground, or Concept Atlas entry upon click

### Requirement: Problem-Driven Historical Timeline and Myth-Buster
The system SHALL provide an interactive historical narrative showing how and why psychodynamics evolved from 1890s neurology to modern affective neuroscience and empirical psychotherapy research, accompanied by an interactive "Pop-Culture Myths vs. Modern Empirical Reality" section.

#### Scenario: Stepping through historical turning points
- **WHEN** a user selects an era on the interactive historical timeline
- **THEN** the system displays the human puzzle of that era, what earlier theory could not explain, the breakthrough shift in thinking, and how it connects to modern research

#### Scenario: Inspecting myths versus empirical reality
- **WHEN** a user interacts with a myth card in the "Myths vs. Modern Reality" section
- **THEN** the system contrasts the common stereotype (e.g., "It's all about Victorian taboos" or "There is no scientific evidence for psychodynamics") with modern empirical evidence (e.g., Shedler 2010 meta-analyses, Solms neuropsychoanalysis, Vaillant longitudinal data)

### Requirement: Curated Starter Pathways into the Atlas
The system SHALL provide curated starter tracks at the conclusion of the onboarding experience that guide learners into specific Lenses, Playgrounds, or Concept Atlas entries based on their immediate curiosity or learning goal.

#### Scenario: Launching a curated starter pathway
- **WHEN** a user clicks an action button on one of the Curated Starter Pathways (e.g., "Everyday Self-Defense & Anxiety", "Relationship Loops & Attachment", "The Skeptic's Empirical Track", or "The 5 Lenses Map")
- **THEN** the system navigates directly to the target view with the recommended Lens, Playground preset, or Concept pre-selected
