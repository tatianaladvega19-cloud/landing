/**
 * Marca visible, discreta y editorial para contenido aún sin confirmar.
 * Deja a la vista el token exacto de `data/course.ts` que hay que rellenar,
 * en vez de publicar un dato inventado.
 */
export default function PendingNote({
  token,
  tone = "dark",
  className = "",
}: {
  token: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-dashed px-3 py-1.5 text-[0.6rem] tracking-[0.18em] uppercase ${
        tone === "dark"
          ? "border-gold/40 text-gold/70"
          : "border-ink/25 text-ink/45"
      } ${className}`}
    >
      <span className="h-1 w-1 rounded-full bg-current" />
      Pendiente · {token}
    </span>
  );
}
