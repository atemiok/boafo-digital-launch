type Props = {
  className?: string;
  showWordmark?: boolean;
  size?: number;
};

/**
 * Boafo Solutions — refined monogram mark.
 * A dimensional "B" built from interlocking planes. The vertical stroke reads as a
 * backbone/pillar, while the two chambers suggest a bridge, data flow, and the
 * handshake between systems. Tuned for both light and dark themes.
 */
export function BoafoLogo({ className, showWordmark = true, size = 30 }: Props) {
  const uid = Math.random().toString(36).slice(2, 8);
  const gradId = `boafo-grad-${uid}`;
  const glowId = `boafo-glow-${uid}`;
  const shadowId = `boafo-shadow-${uid}`;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Boafo Solutions logo"
      >
        <defs>
          <linearGradient id={gradId} x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.78 0.16 162)" />
            <stop offset="50%" stopColor="oklch(0.66 0.19 200)" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 265)" />
          </linearGradient>
          <linearGradient id={glowId} x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.78 0.16 162 / 0.22)" />
            <stop offset="55%" stopColor="oklch(0.66 0.19 200 / 0.14)" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 265 / 0.24)" />
          </linearGradient>
          <filter id={shadowId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="oklch(0.22 0.04 260 / 0.18)" />
          </filter>
        </defs>

        {/* Rounded container with soft gradient fill */}
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="12"
          fill={`url(#${glowId})`}
          stroke={`url(#${gradId})`}
          strokeWidth="1.5"
          filter={`url(#${shadowId})`}
        />

        {/* Dimensional "B" — backbone + two chambers */}
        <g filter={`url(#${shadowId})`}>
          {/* Vertical backbone */}
          <path
            d="M15 11 V37"
            stroke={`url(#${gradId})`}
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          {/* Top chamber — a forward-swept arc with a subtle break */}
          <path
            d="M15 11 H26 C31 11 34 14.5 34 18 C34 21.5 31 24 26 24 H15"
            stroke={`url(#${gradId})`}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Bottom chamber — a matching lower arc */}
          <path
            d="M15 24 H28 C33 24 36 27.5 36 31 C36 34.5 33 37 28 37 H15"
            stroke={`url(#${gradId})`}
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Bridge/connector node — the handshake point between systems */}
          <circle cx="34" cy="24" r="3.4" fill="oklch(0.98 0 0)" />
          <circle cx="34" cy="24" r="3.4" stroke={`url(#${gradId})`} strokeWidth="1.4" fill="none" />
        </g>
      </svg>
      {showWordmark && (
        <span className="text-base font-semibold tracking-tight text-foreground">
          Boafo<span className="text-primary">.</span>
        </span>
      )}
    </span>
  );
}
