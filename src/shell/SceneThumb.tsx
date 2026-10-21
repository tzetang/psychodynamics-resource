import { Stage } from '../stage/Stage';
import { frameAt } from '../stage/useSceneSnapshots';
import type { SceneDef } from '../stage/types';

/** Static glyph thumbnail: the scene's first beat. */
export function SceneThumb({ scene }: { scene: SceneDef }) {
  return (
    <div aria-hidden className="pointer-events-none overflow-hidden bg-stage">
      <Stage scene={scene} frame={frameAt(scene, 0, {})} runKey={`thumb-${scene.id}`} still />
    </div>
  );
}
