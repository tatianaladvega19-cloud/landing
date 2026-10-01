import Reveal from "./Reveal";

type Props = {
  /** Etiqueta en versalitas sobre el titular. */
  label?: string;
  /** Primera línea, en claro u oscuro según el fondo. */
  title: string;
  /** Segunda línea, siempre en dorado. */
  titleAccent?: string;
  subtitle?: string;
  tone?: "dark" | "light";
  align?: "center" | "left";
  className?: string;
};

/**
 * Titular editorial reutilizable: etiqueta + serif a dos líneas + bajada.
 * El dorado cambia de versión según el fondo: el degradado claro se lava
 * sobre beige, así que las secciones claras usan la variante profunda.
 */
export default function SectionHeading({
  label,
  title,
  titleAccent,
  subtitle,
  tone = "dark",
  align = "center",
  className = "",
}: Props) {
  const isDark = tone === "dark";
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  const rule = isDark ? "hairline-gold" : "bg-gold-deep/35";

  return (
    <Reveal className={`flex flex-col ${alignment} ${className}`}>
      {label && (
        <span
          className={`mb-5 flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.42em] uppercase ${
            isDark ? "text-gold" : "text-gold-deep"
          }`}
        >
          <span className={`${rule} h-px w-8 sm:w-12`} />
          {label}
          <span className={`${rule} h-px w-8 sm:w-12`} />
        </span>
      )}

      <h2
        className={`font-display text-[2rem] leading-[1.12] font-medium text-balance sm:text-[2.7rem] lg:text-[3.1rem] ${
          isDark ? "text-beige-light" : "text-ink"
        }`}
      >
        {title}
        {titleAccent && (
          <>
            <br />
            <span className={isDark ? "text-gold-gradient italic" : "text-gold-gradient-deep italic"}>
              {titleAccent}
            </span>
          </>
        )}
      </h2>

      {subtitle && (
        <p
          className={`mt-6 max-w-2xl text-[0.95rem] leading-relaxed text-pretty sm:text-base ${
            isDark ? "text-beige/70" : "text-ink/65"
          }`}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
