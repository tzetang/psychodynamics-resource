import { useCallback, useEffect, useState } from 'react';
import { applyKnobs, defaultKnobValues, settleBeat } from './settle';
import type { Frame, KnobValues, SceneDef } from './types';

const KNOB_DEBOUNCE_MS = 50;
const MAX_CACHED = 600;

/** Settled frames per scene, beat and knob setting; settling is deterministic so this is safe to share. */
const cache = new Map<string, Frame>();

function knobSignature(scene: SceneDef, values: KnobValues): string {
  return scene.knobs.map((k) => `${k.id}=${(values[k.id] ?? k.default).toFixed(2)}`).join(',');
}

export function frameAt(scene: SceneDef, index: number, values: KnobValues): Frame {
  const beatIndex = Math.min(Math.max(index, 0), scene.beats.length - 1);
  const key = `${scene.id}|${beatIndex}|${knobSignature(scene, values)}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const beat = applyKnobs(scene, scene.beats[beatIndex], values);
  const frame: Frame = { beat, snapshot: settleBeat(scene, beat) };
  if (cache.size >= MAX_CACHED) cache.clear();
  cache.set(key, frame);
  return frame;
}

/**
 * Returns a lookup for settled frames. A knob change only invalidates the lookup,
 * so beats are re-settled lazily, starting with the one on screen.
 */
export function useSceneSnapshots(scene: SceneDef, knobValues: KnobValues = defaultKnobValues(scene)) {
  const signature = knobSignature(scene, knobValues);
  const [settled, setSettled] = useState(knobValues);

  useEffect(() => {
    const id = window.setTimeout(() => setSettled(knobValues), KNOB_DEBOUNCE_MS);
    return () => window.clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signature]);

  const settledSignature = knobSignature(scene, settled);
  const getFrame = useCallback(
    (index: number) => frameAt(scene, index, settled),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [scene, settledSignature],
  );
  return { getFrame, count: scene.beats.length };
}
