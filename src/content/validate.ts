import { ZOOM_LEVELS, type Concept, type Situation } from './types';
import type { SceneDef } from '../stage/types';

function sceneProblems(scene: SceneDef, where: string): string[] {
  const problems: string[] = [];
  const actors = new Set(scene.actors.map((a) => a.id));
  const overlays = new Set((scene.overlays ?? []).map((o) => o.id));
  const boundaries = new Set((scene.boundaries ?? []).map((b) => b.id));
  const seen = new Set<string>();

  if (scene.actors.filter((a) => a.role === 'leader').length !== 1) problems.push(`${where}: needs exactly one leader actor`);
  if (scene.beats.length === 0) problems.push(`${where}: has no beats`);
  for (const b of scene.boundaries ?? []) {
    for (const m of b.members) if (!actors.has(m)) problems.push(`${where}: boundary "${b.id}" has unknown member "${m}"`);
  }
  for (const beat of scene.beats) {
    const at = `${where} beat "${beat.id}"`;
    if (seen.has(beat.id)) problems.push(`${at}: duplicate beat id`);
    seen.add(beat.id);
    if (!beat.caption.trim()) problems.push(`${at}: empty caption`);
    for (const p of beat.particles ?? []) {
      if (!actors.has(p.from) || !actors.has(p.to)) problems.push(`${at}: particle ${p.from}→${p.to} uses an unknown actor`);
    }
    for (const id of beat.highlight ?? []) if (!actors.has(id)) problems.push(`${at}: highlights unknown actor "${id}"`);
    for (const id of beat.hide ?? []) if (!actors.has(id)) problems.push(`${at}: hides unknown actor "${id}"`);
    for (const id of beat.show ?? []) if (!overlays.has(id)) problems.push(`${at}: shows unknown overlay "${id}"`);
    if (beat.hazeScope && beat.hazeScope !== 'stage' && !actors.has(beat.hazeScope) && !boundaries.has(beat.hazeScope)) {
      problems.push(`${at}: hazeScope "${beat.hazeScope}" is not stage, an actor or a boundary`);
    }
  }
  return problems;
}

function duplicates(ids: string[]): string[] {
  return ids.filter((id, i) => ids.indexOf(id) !== i);
}

/** Returns every content problem found; empty when the registries are consistent. */
export function contentProblems(situations: Situation[], concepts: Concept[]): string[] {
  const problems: string[] = [];
  const conceptIds = new Set(concepts.map((c) => c.id));
  const levels = new Set(ZOOM_LEVELS.map((l) => l.id));

  for (const id of duplicates(situations.map((s) => s.id))) problems.push(`duplicate situation id "${id}"`);
  for (const id of duplicates(concepts.map((c) => c.id))) problems.push(`duplicate concept id "${id}"`);

  for (const s of situations) {
    const at = `situation "${s.id}"`;
    if (!levels.has(s.level)) problems.push(`${at}: unknown level "${s.level}"`);
    if (!s.watch.beats.some((b) => b.isYourPart)) problems.push(`${at}: needs a "your part" beat`);
    if (s.watch.knobs.length < 1 || s.watch.knobs.length > 2) problems.push(`${at}: needs 1-2 knobs, has ${s.watch.knobs.length}`);
    if (!s.escalation.trim()) problems.push(`${at}: missing escalation note`);
    if (s.tries.length < 1 || s.tries.length > 3) problems.push(`${at}: needs 1-3 tries, has ${s.tries.length}`);
    if (s.name.length === 0) problems.push(`${at}: Name step has no concepts`);
    for (const id of s.name) if (!conceptIds.has(id)) problems.push(`${at}: Name step references missing concept "${id}"`);
    problems.push(...sceneProblems(s.watch, at));
    for (const t of s.tries) {
      if (t.afterBeats.length === 0) problems.push(`${at} try "${t.id}": no afterBeats`);
      problems.push(...sceneProblems({ ...s.watch, id: `${s.watch.id}:${t.id}`, beats: t.afterBeats }, `${at} try "${t.id}"`));
    }
  }

  const referenced = new Set(situations.flatMap((s) => s.name));
  for (const c of concepts) {
    const at = `concept "${c.id}"`;
    if (!referenced.has(c.id)) problems.push(`${at}: no situation links to it`);
    if (c.atWork.length < 2 || c.atWork.length > 3) problems.push(`${at}: needs 2-3 at-work examples, has ${c.atWork.length}`);
    if (!c.definition.trim() || !c.yourPart.trim() || !c.leavesOut.trim()) problems.push(`${at}: definition, yourPart and leavesOut are required`);
    if (c.sources.theorists.length === 0) problems.push(`${at}: sources need at least one theorist`);
    problems.push(...sceneProblems(c.clip, `${at} clip`));
  }
  return problems;
}
