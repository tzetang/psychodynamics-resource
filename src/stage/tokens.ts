import type { FeelingFamily } from './types';

/** `rgb(var(--token) / alpha)`: the only way scene code names a colour. */
export function tone(token: string, alpha?: number): string {
  return alpha === undefined ? `rgb(var(--${token}))` : `rgb(var(--${token}) / ${alpha})`;
}

export const FEELING_LABEL: Record<FeelingFamily, string> = {
  anxiety: 'Anxiety or fear',
  anger: 'Anger',
  shame: 'Shame',
  longing: 'Longing or need',
  calm: 'Relief or calm',
};

export const FEELING_ORDER: FeelingFamily[] = ['anxiety', 'anger', 'shame', 'longing', 'calm'];

export function feelingTone(family: FeelingFamily, alpha?: number): string {
  return tone(`feel-${family}`, alpha);
}
