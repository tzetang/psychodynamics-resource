import { contentProblems } from './validate';
import { ZOOM_LEVELS, type Concept, type Situation, type ZoomLevel } from './types';

/** Authors add a file under situations/ or concepts/ with a default export; nothing else to register. */
const situationModules = import.meta.glob<{ default: Situation }>('./situations/*.ts', { eager: true });
const conceptModules = import.meta.glob<{ default: Concept }>('./concepts/*.ts', { eager: true });

const levelOrder = new Map(ZOOM_LEVELS.map((l, i) => [l.id, i]));

export const situations: Situation[] = Object.entries(situationModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, m]) => m.default)
  .sort((a, b) => (levelOrder.get(a.level) ?? 0) - (levelOrder.get(b.level) ?? 0));

export const concepts: Concept[] = Object.entries(conceptModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, m]) => m.default);

export const situationById = new Map(situations.map((s) => [s.id, s]));
export const conceptById = new Map(concepts.map((c) => [c.id, c]));

export const situationsByLevel = (level: ZoomLevel) => situations.filter((s) => s.level === level);

/** Situations whose Name step mentions a concept, for the concept page's "where this appears" links. */
export const situationsForConcept = (conceptId: string) => situations.filter((s) => s.name.includes(conceptId));

if (import.meta.env.DEV) {
  const problems = contentProblems(situations, concepts);
  if (problems.length > 0) {
    throw new Error(`Content is inconsistent:\n- ${problems.join('\n- ')}`);
  }
}
