import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Use the native setInterval does not really match the react model as
 * https://overreacted.io/making-setinterval-declarative-with-react-hooks/ explains rather well.
 */
export function useInterval(callback, delay) {
  const savedCallback = useRef(callback);
  const [count, setCount] = useState(0);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    if (delay == null) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay, count]);

  return useCallback(() => setCount((c) => c + 1), []);
}
