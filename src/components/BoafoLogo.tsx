type Props = {
  className?: string;
  showWordmark?: boolean;
  size?: number;
};

/**
 * Boafo Solutions — connected flow mark.
 * A single continuous ribbon that loops through two chambers and converges on a
 * connector node, evoking data flow, integration, and the handshake between
 * systems. Soft geometry tuned for both light and dark themes.
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
          <linearGradient id="boafo-ribbon" x1="4" y1="24" x2="44" y2="24" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.78 0.16 162)" />
            <stop offset="55%" stopColor="oklch(0.66 0.19 200)" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 265)" />
          </linearGradient>
          <linearGradient id="boafo-surface" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.78 0.16 162 / 0.22)" />
            <stop offset="55%" stopColor="oklch(0.66 0.19 200 / 0.14)" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 265 / 0.24)" />
          </linearGradient>
          <filter id="boafo-glow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Soft rounded container */}
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="14"
          fill="url(#boafo-surface)"
          stroke="url(#boafo-ribbon)"
          strokeWidth="1.5"
          opacity="0.9"
        />

        {/* Connected flow ribbon */}
        <path
          d="M14 24
             C14 16, 22 14, 24 18
             C26 22, 18 26, 24 30
             C28 33, 34 30, 34 24
             C34 20, 30 18, 28 20
             C25 23, 30 26, 28 28
             C26 30, 22 30, 20 27
             C18 24, 22 21, 20 19
             C18 17, 14 19, 14 24
             Z"
          stroke="url(#boafo-ribbon)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#boafo-glow)"
        />

        {/* Connector node at the convergence point */}
        <circle cx="24" cy="24" r="3.2" fill="oklch(0.98 0 0)" stroke="url(#boafo-ribbon)" strokeWidth="1.4" />
      </svg>
      {showWordmark && (
        <span className="text-base font-semibold tracking-tight text-foreground">
          Boafo<span className="text-primary">.</span>
        </span>
      )}
    </span>
  );
}
