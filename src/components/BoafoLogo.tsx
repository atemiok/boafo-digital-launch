type Props = {
  className?: string;
  showWordmark?: boolean;
  size?: number;
};

/**
 * Boafo Solutions — bold solid mark.
 * A confident filled tile with a custom negative-space "B" carved into it.
 * Reads instantly at small sizes, holds up next to Linear / Vercel-tier marks.
 */
export function BoafoLogo({ className, showWordmark = true, size = 30 }: Props) {
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
          <linearGradient id="boafo-tile" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="oklch(0.78 0.16 162)" />
            <stop offset="100%" stopColor="oklch(0.55 0.22 265)" />
          </linearGradient>
        </defs>

        {/* Bold filled tile */}
        <rect x="0" y="0" width="40" height="40" rx="10" fill="url(#boafo-tile)" />

        {/* Negative-space "B" — solid, geometric, decisive.
            Outer path goes clockwise; inner counters go counter-clockwise (even-odd) to punch through. */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="
            M11 8
            H22
            C26.5 8, 29.5 10.7, 29.5 14.5
            C29.5 16.8, 28.3 18.6, 26.4 19.6
            C29 20.5, 30.5 22.6, 30.5 25.5
            C30.5 29.4, 27.4 32, 22.6 32
            H11
            Z

            M16 12.5
            V18
            H21.5
            C23.5 18, 24.8 16.9, 24.8 15.2
            C24.8 13.5, 23.5 12.5, 21.5 12.5
            Z

            M16 22
            V27.5
            H22.2
            C24.5 27.5, 25.8 26.4, 25.8 24.7
            C25.8 23, 24.5 22, 22.2 22
            Z
          "
          fill="oklch(0.99 0 0)"
        />
      </svg>
      {showWordmark && (
        <span className="text-base font-semibold tracking-tight text-foreground">
          Boafo<span className="text-primary">.</span>
        </span>
      )}
    </span>
  );
}
