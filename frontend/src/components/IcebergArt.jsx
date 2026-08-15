import { motion, useReducedMotion } from 'framer-motion';

export default function IcebergArt({ className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  const floatProps = shouldReduceMotion
    ? {}
    : {
        initial: { y: -6 },
        animate: { y: 6 },
        transition: { duration: 5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' },
      };

  return (
    <svg
      viewBox="0 0 1200 640"
      className={className}
      role="img"
      aria-label="Iceberg illustration — visible tip above water with glowing teal-blue mass beneath the surface"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Sky — cool grey-white like the reference photo */}
        <linearGradient id="sky-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8ecee" />
          <stop offset="100%" stopColor="#c9d4d8" />
        </linearGradient>

        {/* Water column */}
        <linearGradient id="water-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a8cdd6" />
          <stop offset="30%" stopColor="#4a8fad" />
          <stop offset="100%" stopColor="#0c2d47" />
        </linearGradient>

        {/* Submerged iceberg — brand teal → blue */}
        <linearGradient id="berg-deep" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2ee6c5" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
        </linearGradient>

        {/* Water depth tint overlay */}
        <linearGradient id="depth-tint" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6ecfdb" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#08213a" stopOpacity="0.65" />
        </linearGradient>

        {/* Glow behind submerged part */}
        <radialGradient id="berg-glow" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stopColor="#2ee6c5" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>

        <filter id="blur-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
        <filter id="blur-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="1200" height="420" fill="url(#sky-grad)" />

      {/* Horizon haze */}
      <ellipse cx="600" cy="415" rx="700" ry="40" fill="#b8cfd5" opacity="0.4" />

      {/* Water */}
      <rect x="0" y="408" width="1200" height="232" fill="url(#water-grad)" />

      {/* Iceberg group — floats as one body */}
      <motion.g {...floatProps}>
        {/* Submerged glow blob */}
        <ellipse cx="600" cy="530" rx="260" ry="110" fill="url(#berg-glow)" filter="url(#blur-glow)" />

        {/* Submerged iceberg body */}
        <polygon
          points="420,410 780,410 850,490 780,580 660,624 520,600 360,510"
          fill="url(#berg-deep)"
          opacity="0.88"
          filter="url(#blur-soft)"
        />

        {/* Above-water left peak */}
        <polygon points="460,410 550,210 640,410" fill="#f0f5f7" />
        <polygon points="550,210 640,410 570,410" fill="#d8e6ea" />

        {/* Above-water right peak */}
        <polygon points="630,410 720,255 805,410" fill="#ffffff" />
        <polygon points="720,255 805,410 730,410" fill="#dce8ec" />

        {/* Connecting base between peaks */}
        <polygon points="460,410 640,410 630,410 460,410" fill="#e8eff2" />
      </motion.g>

      {/* Water tint over the deep (simulates depth) */}
      <rect x="0" y="410" width="1200" height="230" fill="url(#depth-tint)" />

      {/* Subtle surface reflections */}
      <g opacity="0.14" filter="url(#blur-soft)">
        <polygon points="475,410 545,445 605,410" fill="#f5f8f9" />
        <polygon points="650,410 715,440 775,410" fill="#f5f8f9" />
      </g>

      {/* Waterline ripple */}
      <path
        d="M0,409 Q200,404 400,409 T800,409 T1200,409"
        stroke="#d0e8ec"
        strokeOpacity="0.6"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}
