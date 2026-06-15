type Props = {
  className?: string;
  showWordmark?: boolean;
  size?: number;
};

/**
 * Boafo Solutions logo — geometric digital node entwined with a leaf,
 * rendered as an SVG so it scales crisply at any size.
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
            <stop offset="0%" stopColor="oklch(0.85 0.18 165)" />
            <stop offset="100%" stopColor="oklch(0.7 0.18 215)" />
          </linearGradient>
          <linearGradient id="boafo-leaf" x1="10" y1="6" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.9 0.18 165)" />
            <stop offset="100%" stopColor="oklch(0.62 0.16 170)" />
          </linearGradient>
        </defs>
        {/* Outer node ring */}
        <rect
          x="2.5"
          y="2.5"
          width="35"
          height="35"
          rx="10"
          stroke="url(#boafo-grad)"
          strokeWidth="1.6"
          fill="oklch(0.21 0.028 240)"
        />
        {/* Leaf body */}
        <path
          d="M11 27c0-9 7-16 16-16 1.2 0 2.3.1 3.4.3.2 1.1.3 2.2.3 3.4 0 9-7 16-16 16-1.2 0-2.3-.1-3.4-.3-.2-1.1-.3-2.2-.3-3.4Z"
          fill="url(#boafo-leaf)"
        />
        {/* Leaf vein */}
        <path
          d="M11 27c5-5 10-10 19-15"
          stroke="oklch(0.18 0.04 200)"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Digital node dots */}
        <circle cx="11" cy="27" r="2.2" fill="oklch(0.7 0.18 215)" />
        <circle cx="30" cy="11" r="2.2" fill="oklch(0.88 0.18 165)" />
      </svg>
      {showWordmark && (
        <span className="text-base font-bold tracking-tight text-foreground">
          Boafo<span className="text-primary">.</span>
        </span>
      )}
    </span>
  );
}
