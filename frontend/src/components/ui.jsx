import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/** Max-width content wrapper used by every section. */
export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

/** Small rounded-pill eyebrow label */
export function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-ink-600 bg-ink-800 px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-2 ${className}`}
    >
      {children}
    </span>
  );
}

/**
 * Pill CTA button.
 * variant: "ring" (dark fill, gradient border) | "fill" (gradient bg) | "light" (white) | "dark" (black pill)
 */
export function Button({
  as = 'a',
  href,
  type = 'button',
  onClick,
  variant = 'fill',
  icon = true,
  disabled = false,
  className = '',
  children,
}) {
  const base =
    'group inline-flex items-center gap-2 rounded-full font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none';

  const styles = {
    ring: 'p-[1.5px] bg-gradient-to-r from-brand-teal to-brand-blue',
    fill: 'bg-gradient-to-r from-brand-teal to-brand-blue text-ink-900 px-5 py-2.5 shadow-[0_8px_24px_-8px_rgba(46,230,197,0.5)]',
    light: 'bg-white text-ink-900 px-5 py-2.5 hover:bg-white/90',
    dark: 'bg-ink-900 text-white px-6 py-3 border border-ink-600 hover:border-ink-500',
  };

  const Comp = as === 'a' ? 'a' : 'button';

  const innerContent =
    variant === 'ring' ? (
      <span className="flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-white">
        <span>{children}</span>
        {icon && (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-brand-teal to-brand-blue text-ink-900">
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </span>
        )}
      </span>
    ) : (
      <>
        <span>{children}</span>
        {icon && variant === 'fill' && (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink-900 text-white">
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </span>
        )}
        {icon && variant === 'light' && (
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-brand-teal to-brand-blue text-ink-900">
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </span>
        )}
      </>
    );

  const cls = `${base} ${styles[variant] ?? styles.fill} ${className}`;

  if (Comp === 'a') {
    return <a href={href} className={cls}>{innerContent}</a>;
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {innerContent}
    </button>
  );
}

/** Fade-up on scroll wrapper */
export function Reveal({ children, delay = 0, y = 20, className = '', as = 'div' }) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      initial={shouldReduceMotion ? undefined : { opacity: 0, y }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

/** Gradient initials avatar */
export function Avatar({ name, size = 40, className = '' }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <span
      style={{ width: size, height: size }}
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-teal to-brand-blue text-xs font-bold text-ink-900 ${className}`}
    >
      {initials}
    </span>
  );
}

/** Corner-bracket callout tag for pain points */
export function CornerTag({ children, className = '' }) {
  return (
    <div className={`relative px-4 py-3 ${className}`}>
      <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-ink-500" />
      <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-ink-500" />
      <p className="text-sm leading-snug text-muted-2">{children}</p>
    </div>
  );
}
