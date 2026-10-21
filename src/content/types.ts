import type { Beat, SceneDef } from '../stage/types';

export type ZoomLevel = 'self' | 'pair' | 'team' | 'org';

export const ZOOM_LEVELS: { id: ZoomLevel; label: string; description: string }[] = [
  { id: 'self', label: 'Self', description: 'What is going on inside me at work.' },
  { id: 'pair', label: 'Pair', description: 'One working relationship, you and one other person.' },
  { id: 'team', label: 'Team', description: 'How a group behaves together.' },
  { id: 'org', label: 'Org', description: 'Patterns across teams and the whole organization.' },
];

/** Where an idea comes from; shown only in the collapsed "Where this comes from" expander. */
export interface Sources {
  theorists: string[];
  works: { title: string; year: number }[];
}

/** A leader stance. It replays the scene with its own beats (same cast and knobs). */
export interface Try {
  id: string;
  /** Short name of the stance, e.g. "Hand the decision back". */
  label: string;
  /** What you do, written as your own stance and never as something done to someone. */
  stance: string;
  afterBeats: Beat[];
}

export interface Situation {
  id: string;
  level: ZoomLevel;
  /** Everyday workplace language, as the leader would say it. */
  title: string;
  /** Watch: the scripted scene. */
  watch: SceneDef;
  /** Name: concept ids, each shown as its one-sentence definition. */
  name: string[];
  /** Try: one to three stances. */
  tries: Try[];
  /** "When this is more than a team dynamic": signals for HR, a coach or a clinician. */
  escalation: string;
}

export interface Concept {
  id: string;
  name: string;
  /** One everyday sentence about a pattern, not a type of person. */
  definition: string;
  /** "What it looks like at work": two or three short examples. */
  atWork: string[];
  /** How a leader gets caught up in it. */
  yourPart: string;
  /** Fixed line on what the picture simplifies. */
  leavesOut: string;
  clip: SceneDef;
  sources: Sources;
}
