import { PsychodynamicConcept } from '../types/psychodynamics';
import { CONCEPTS_PART_1 } from './conceptsPart1';
import { CONCEPTS_PART_2 } from './conceptsPart2';
import { CONCEPTS_PART_3 } from './conceptsPart3';
import { CONCEPTS_PART_4 } from './conceptsPart4';

export const CONCEPTS: PsychodynamicConcept[] = [
  ...CONCEPTS_PART_1,
  ...CONCEPTS_PART_2,
  ...CONCEPTS_PART_3,
  ...CONCEPTS_PART_4,
];

export const CONCEPTS_BY_ID: Record<string, PsychodynamicConcept> = Object.fromEntries(
  CONCEPTS.map((c) => [c.id, c])
);
