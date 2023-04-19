import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollToFragment(options = {}) {
  const { hash } = useLocation();
  useEffect(() => {
    const fragment = options.fragment ?? hash.substring(1);
    if (hash.length === 0 || hash.substring(1) !== fragment) return;

    const boundingRect = document
      .getElementById(fragment)
      ?.getBoundingClientRect();
    if (boundingRect == null) return; // Element doesn't exist

    const opts = { ...options };
    opts.top = boundingRect.top + (opts.top ?? 0);
    window.scrollTo(opts);
  }, [hash, options]);
}
