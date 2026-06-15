type Props = {
  className?: string;
  showWordmark?: boolean;
  size?: number;
};

/**
 * Boafo Solutions logo — geometric digital node entwined with a leaf.
 * Tuned for the pristine light theme.
 */
export function BoafoLogo({ className, showWordmark = true, size = 28 }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Boafo Solutions logo"
      >
        <defs>
          <linearGradient id="boafo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.7 0.16 162)" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 265)" />
          </linearGradient>
          <linearGradient id="boafo-leaf" x1="10" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.78 0.16 162)" />
            <stop offset="100%" stopColor="oklch(0.6 0.18 175)" />
          </linearGradient>
        </defs>
        <rect
          x="2.5"
          y="2.5"
          width="35"
          height="35"
          rx="10"
          stroke="url(#boafo-grad)"
          strokeWidth="1.6"
          fill="oklch(1 0 0)"
        />
        <path
          d="M11 27c0-9 7-16 16-16 1.2 0 2.3.1 3.4.3.2 1.1.3 2.2.3 3.4 0 9-7 16-16 16-1.2 0-2.3-.1-3.4-.3-.2-1.1-.3-2.2-.3-3.4Z"
          fill="url(#boafo-leaf)"
        />
        <path
          d="M11 27c5-5 10-10 19-15"
          stroke="oklch(1 0 0)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.85"
        />
        <circle cx="11" cy="27" r="2.2" fill="oklch(0.55 0.22 265)" />
        <circle cx="30" cy="11" r="2.2" fill="oklch(0.7 0.16 162)" />
      </svg>
      {showWordmark && (
        <span className="text-base font-bold tracking-tight text-foreground">
          Boafo<span className="text-primary">.</span>
        </span>
      )}
    </span>
  );
}
