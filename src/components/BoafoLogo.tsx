import { useTheme } from "@/lib/theme";

type Props = {
  className?: string;
};

export function BoafoLogo({ className }: Props) {
  const { theme } = useTheme();
  const src = theme === "dark" ? "/boafo-logo-light.svg" : "/boafo-logo-dark.svg";

  return (
    <img
      src={src}
      alt="Boafo Solutions"
      className={`h-7 w-auto select-none ${className ?? ""}`}
      draggable={false}
    />
  );
}
