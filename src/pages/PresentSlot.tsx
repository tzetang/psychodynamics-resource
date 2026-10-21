import type { ReactNode } from 'react';
import { X } from 'lucide-react';

interface PresentSlotProps {
  /** Present mode is on. */
  present: boolean;
  /** This slot holds the scene being presented. */
  active: boolean;
  onExit: () => void;
  children: ReactNode;
}

/**
 * Wraps a scene so Present mode only restyles it. The scene stays mounted in the same place,
 * so leaving Present mode returns to the same beat and knob settings.
 */
export function PresentSlot({ present, active, onExit, children }: PresentSlotProps) {
  const overlay = present && active;
  return (
    <div className={overlay ? 'fixed inset-0 z-50 bg-surface' : present ? 'hidden' : undefined}>
      {overlay && (
        <button
          type="button"
          onClick={onExit}
          className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-lg border border-line bg-surface-raised px-3 py-2 text-sm font-medium text-ink-soft hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
        >
          <X size={16} aria-hidden />
          Exit (Esc)
        </button>
      )}
      <div className={overlay ? 'h-full' : undefined}>{children}</div>
    </div>
  );
}
