import { Crown } from "lucide-react";

type Props = {
  /** "sm" para el header, "md" para el footer. */
  size?: "sm" | "md";
  className?: string;
};

/**
 * Marca denominativa: corona dorada, "PESTAÑAS" en serif y "QUE FACTURAN"
 * en versalitas con filetes a los lados.
 */
export default function Logo({ size = "sm", className = "" }: Props) {
  const title = size === "sm" ? "text-xl sm:text-2xl" : "text-3xl";
  const sub = size === "sm" ? "text-[0.5rem] sm:text-[0.55rem]" : "text-[0.65rem]";

  return (
    <span className={`flex flex-col items-center leading-none ${className}`}>
      <Crown
        className={`${size === "sm" ? "h-3.5 w-3.5" : "h-5 w-5"} text-gold-light`}
        strokeWidth={1.5}
        aria-hidden
      />
      <span
        className={`font-display ${title} mt-1 tracking-[0.12em] text-gold-gradient font-semibold`}
      >
        PESTAÑAS
      </span>
      <span className="mt-1 flex w-full items-center gap-1.5">
        <span className="hairline-gold h-px flex-1" />
        <span className={`${sub} font-sans tracking-[0.35em] text-beige/80`}>QUE FACTURAN</span>
        <span className="hairline-gold h-px flex-1" />
      </span>
    </span>
  );
}
