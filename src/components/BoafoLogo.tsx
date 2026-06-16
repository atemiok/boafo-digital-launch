type Props = {
  className?: string;
  showWordmark?: boolean;
  size?: number;
};

/**
 * Boafo Solutions — modern monogram mark.
 * A precision-cut "B" formed by two stacked arcs with a connector node,
 * suggesting infrastructure, flow, and reliability. Tuned for both themes.
 */
export function BoafoLogo({ className, showWordmark = true, size = 30 }: Props) {
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
          <linearGradient id="boafo-stroke" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.78 0.16 162)" />
            <stop offset="55%" stopColor="oklch(0.66 0.19 200)" />
            <stop offset="100%" stopColor="oklch(0.58 0.22 265)" />
          </linearGradient>
          <linearGradient id="boafo-fill" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.7 0.16 162 / 0.18)" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 265 / 0.22)" />
          </linearGradient>
        </defs>

        {/* Rounded squircle container */}
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="12"
          fill="url(#boafo-fill)"
          stroke="url(#boafo-stroke)"
          strokeWidth="1.5"
        />

        {/* Monogram "B" — two stacked arcs sharing a vertical spine */}
        <path
          d="M16 12 L16 36"
          stroke="url(#boafo-stroke)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M16 12 H26 a6 6 0 0 1 0 12 H16"
          stroke="url(#boafo-stroke)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M16 24 H28 a6 6 0 0 1 0 12 H16"
          stroke="url(#boafo-stroke)"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Connector node — signals integration / API */}
        <circle cx="34" cy="30" r="2.4" fill="oklch(0.78 0.16 162)" />
        <circle cx="34" cy="30" r="4.6" stroke="oklch(0.78 0.16 162 / 0.4)" strokeWidth="1" fill="none" />
      </svg>
      {showWordmark && (
        <span className="text-base font-semibold tracking-tight text-foreground">
          Boafo<span className="text-primary">.</span>
        </span>
      )}
    </span>
  );
}
