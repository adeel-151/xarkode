export default function XarKodeLogo({ className = 'w-8 h-8', showText = false, textClassName = 'text-xl' }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className={`relative ${className} flex items-center justify-center shrink-0`}>
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(139,92,246,0.35)] transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="xk-diag-primary" x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="45%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#3b0764" />
            </linearGradient>
            <linearGradient id="xk-diag-top" x1="54" y1="8" x2="30" y2="34" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#e9d5ff" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="xk-diag-bot" x1="34" y1="30" x2="10" y2="56" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
          </defs>

          {/* Primary Diagonal Band (Top-Left to Bottom-Right) */}
          <polygon
            points="10,8 24,8 54,56 40,56"
            fill="url(#xk-diag-primary)"
            className="transition-all duration-300 group-hover:opacity-95"
          />

          {/* Crossing Top-Right Segment */}
          <polygon
            points="54,8 40,8 29,26 38,32"
            fill="url(#xk-diag-top)"
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />

          {/* Crossing Bottom-Left Segment */}
          <polygon
            points="26,32 35,38 24,56 10,56"
            fill="url(#xk-diag-bot)"
            className="transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5"
          />
        </svg>
      </div>

      {showText && (
        <span className={`font-display font-extrabold ${textClassName} tracking-tight text-white uppercase`}>
          XARKODE
        </span>
      )}
    </div>
  );
}
