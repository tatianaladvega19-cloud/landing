import { ArrowRight } from "lucide-react";
import { courseData } from "@/data/course";

type Props = {
  children: React.ReactNode;
  /** "gold" = botón principal. "outline" = secundario sobre fondo oscuro. */
  variant?: "gold" | "outline";
  size?: "md" | "lg";
  className?: string;
  withArrow?: boolean;
  /** Micro-brillo. Solo en el CTA del hero, para no saturar la página. */
  shimmer?: boolean;
};

/**
 * Único punto de salida hacia el checkout. Si `checkoutUrl` todavía está
 * vacío, el enlace cae en la sección de precio en vez de romperse.
 */
export default function CTAButton({
  children,
  variant = "gold",
  size = "lg",
  className = "",
  withArrow = true,
  shimmer = false,
}: Props) {
  const href = courseData.checkoutUrl || "#precio";
  const isExternal = Boolean(courseData.checkoutUrl);

  const sizing =
    size === "lg"
      ? "px-7 py-4 text-[0.82rem] sm:px-10 sm:py-5 sm:text-sm"
      : "px-5 py-3 text-[0.72rem]";

  const skin =
    variant === "gold"
      ? "surface-gold text-ink shadow-[0_18px_45px_-18px_rgba(212,168,79,0.75)] hover:shadow-[0_22px_60px_-18px_rgba(231,200,120,0.9)]"
      : "border border-gold/45 text-beige-light hover:border-gold hover:bg-gold/10";

  return (
    <a
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center justify-center gap-3 rounded-full font-semibold tracking-[0.16em] uppercase transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:scale-[1.015] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light ${sizing} ${skin} ${shimmer ? "shimmer" : ""} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      {withArrow && (
        <span
          className={`relative z-10 grid h-6 w-6 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-1 ${
            variant === "gold" ? "bg-ink/90 text-gold-light" : "border border-gold/40 text-gold"
          }`}
        >
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden />
        </span>
      )}
    </a>
  );
}
