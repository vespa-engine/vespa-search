import { isEqual } from 'lodash';
import { useCallback, useRef } from 'react';

export function useCustomCompareMemoize(deps, depsEqual = isEqual) {
  const ref = useRef();
  if (!ref.current || !depsEqual(ref.current, deps)) ref.current = deps;
  return ref.current;
}

export function useCustomCompareCallback(callback, deps, depsEqual) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(callback, useCustomCompareMemoize(deps, depsEqual));
}
