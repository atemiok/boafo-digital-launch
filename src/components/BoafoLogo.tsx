type Props = {
  className?: string;
};

export function BoafoLogo({ className }: Props) {
  return (
    <span className={`text-lg font-bold tracking-tight text-foreground ${className ?? ""}`}>
      Boafo<span className="text-primary">.</span>
    </span>
  );
}
