import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Animated gradient mesh background with floating orbs.
 * Renders on a <canvas> for smooth 60fps performance.
 * Falls back to a static gradient if prefers-reduced-motion is set.
 */
export default function AnimatedBackground({ className = '' }) {
  const canvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || shouldReduceMotion) return;

    const ctx = canvas.getContext('2d');
    let animId;
    let width, height;

    const orbs = [
      { x: 0.2, y: 0.3, r: 0.35, color: 'rgba(46, 230, 197, 0.12)', vx: 0.00015, vy: 0.0001 },
      { x: 0.7, y: 0.6, r: 0.4, color: 'rgba(59, 130, 246, 0.10)', vx: -0.0001, vy: 0.00012 },
      { x: 0.5, y: 0.2, r: 0.3, color: 'rgba(46, 230, 197, 0.08)', vx: 0.00008, vy: -0.00015 },
      { x: 0.8, y: 0.15, r: 0.25, color: 'rgba(59, 130, 246, 0.07)', vx: -0.00012, vy: 0.00008 },
      { x: 0.15, y: 0.75, r: 0.28, color: 'rgba(46, 230, 197, 0.06)', vx: 0.0001, vy: -0.0001 },
    ];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const orb of orbs) {
        // Drift
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce
        if (orb.x < -0.1 || orb.x > 1.1) orb.vx *= -1;
        if (orb.y < -0.1 || orb.y > 1.1) orb.vy *= -1;

        const cx = orb.x * width;
        const cy = orb.y * height;
        const cr = orb.r * Math.max(width, height);

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      animId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <div
        className={`absolute inset-0 ${className}`}
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 30% 30%, rgba(46,230,197,0.1), transparent), radial-gradient(ellipse 70% 50% at 70% 60%, rgba(59,130,246,0.08), transparent)',
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 h-full w-full ${className}`}
      style={{ pointerEvents: 'none' }}
    />
  );
}
