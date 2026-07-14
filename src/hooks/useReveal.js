import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to a ref.
 * When the element enters the viewport, adds 'revealed' class.
 * @param {number} threshold - 0 to 1, how much of the element must be visible
 * @param {string} delay - optional CSS transition-delay e.g. '0.2s'
 */
export function useReveal(threshold = 0.1, delay = '0s') {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.transitionDelay = delay;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return ref;
}
