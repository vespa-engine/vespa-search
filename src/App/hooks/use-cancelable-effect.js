import { useEffect, useLayoutEffect } from 'react';

function useInnerCancelableEffect(useEffectFn, effect, deps) {
  useEffectFn(() => {
    const state = { active: true };
    const cleanup = effect(state);

    return () => {
      state.active = false;
      cleanup && cleanup();
    };
  }, deps);
}

export const useCancelableEffect = (effect, deps) =>
  useInnerCancelableEffect(useEffect, effect, deps);

export const useCancelableLayoutEffect = (effect, deps) =>
  useInnerCancelableEffect(useLayoutEffect, effect, deps);
