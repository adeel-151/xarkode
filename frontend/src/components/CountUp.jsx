import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Animated number counter that counts up when it enters the viewport.
 * Props:
 *   end     — target number (e.g. 312)
 *   prefix  — text before the number (e.g. "+")
 *   suffix  — text after the number (e.g. "%")
 *   duration — animation duration in ms (default 2000)
 */
export default function CountUp({ end, prefix = '', suffix = '', duration = 2000 }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    if (shouldReduceMotion) {
      setValue(end);
      return;
    }

    const startTime = performance.now();
    let animId;

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * end));

      if (progress < 1) {
        animId = requestAnimationFrame(animate);
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [started, end, duration, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  );
}
