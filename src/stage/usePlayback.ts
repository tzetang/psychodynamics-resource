import { useCallback, useEffect, useReducer } from 'react';

/** How long a beat stays up before auto-pausing (or advancing, with autoplay on). */
export const BEAT_DWELL_MS = 4800;
const REPLAY_DWELL_MS = 1600;

interface State {
  index: number;
  playing: boolean;
  autoplay: boolean;
  /** Bumps whenever the current beat should replay its particles. */
  run: number;
  /** True once the guided beats have been played through to the end. */
  finished: boolean;
}

type Action =
  | { type: 'play' }
  | { type: 'pause' }
  | { type: 'next' }
  | { type: 'prev' }
  | { type: 'restart' }
  | { type: 'goTo'; index: number }
  | { type: 'autoplay'; value: boolean }
  | { type: 'dwellElapsed' };

function reducer(count: number) {
  const lastIndex = count - 1;
  return (state: State, action: Action): State => {
    switch (action.type) {
      case 'play':
        if (state.index >= lastIndex) return { ...state, index: 0, run: state.run + 1, playing: true };
        return advance(state, true);
      case 'pause':
        return { ...state, playing: false };
      case 'next':
        return state.index >= lastIndex ? state : advance(state, false);
      case 'prev':
        return state.index === 0 ? state : { ...state, index: state.index - 1, run: state.run + 1, playing: false };
      case 'restart':
        return { ...state, index: 0, run: state.run + 1, playing: false };
      case 'goTo':
        return { ...state, index: Math.min(Math.max(action.index, 0), lastIndex), run: state.run + 1, playing: false };
      case 'autoplay':
        return { ...state, autoplay: action.value };
      case 'dwellElapsed':
        if (state.autoplay && state.index < lastIndex) return advance(state, true);
        return { ...state, playing: false };
    }
  };

  function advance(state: State, playing: boolean): State {
    const index = state.index + 1;
    return { ...state, index, run: state.run + 1, playing, finished: state.finished || index >= lastIndex };
  }
}

/** Beat-by-beat playback: auto-pauses after each beat unless autoplay is on. */
export function usePlayback(count: number, options?: { finished?: boolean; autoStart?: boolean }) {
  const [state, dispatch] = useReducer(reducer(count), {
    index: 0,
    playing: options?.autoStart ?? false,
    autoplay: options?.autoStart ?? false,
    run: 0,
    finished: options?.finished ?? false,
  });

  useEffect(() => {
    if (!state.playing) return;
    const id = window.setTimeout(() => dispatch({ type: 'dwellElapsed' }), state.index === 0 ? REPLAY_DWELL_MS : BEAT_DWELL_MS);
    return () => window.clearTimeout(id);
  }, [state.playing, state.index, state.run]);

  return {
    ...state,
    count,
    isFirst: state.index === 0,
    isLast: state.index >= count - 1,
    play: useCallback(() => dispatch({ type: 'play' }), []),
    pause: useCallback(() => dispatch({ type: 'pause' }), []),
    next: useCallback(() => dispatch({ type: 'next' }), []),
    prev: useCallback(() => dispatch({ type: 'prev' }), []),
    restart: useCallback(() => dispatch({ type: 'restart' }), []),
    goTo: useCallback((index: number) => dispatch({ type: 'goTo', index }), []),
    setAutoplay: useCallback((value: boolean) => dispatch({ type: 'autoplay', value }), []),
  };
}

export type Playback = ReturnType<typeof usePlayback>;
