import { Sparkles, Hand, Users, BadgeDollarSign, Building2 } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STAGES = [
  { icon: Sparkles, label: "Habilidad" },
  { icon: Hand, label: "Técnica" },
  { icon: Users, label: "Clientas" },
  { icon: BadgeDollarSign, label: "Ventas" },
  { icon: Building2, label: "Negocio" },
];

/**
 * El camino de habilidad a negocio. Horizontal en desktop (línea dorada que
 * une las etapas), vertical en móvil.
 */
export default function Transformation() {
  return (
    <section id="resultados" className="relative isolate overflow-hidden bg-ink">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(70rem_40rem_at_50%_-10%,rgba(212,168,79,0.12),transparent_60%)]"
      />

      <div className="mx-auto max-w-[72rem] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          label="La transformación"
          title="De saber hacer pestañas"
          titleAccent="a tener un negocio."
          className="mx-auto"
        />

        {/* --- Desktop: línea horizontal --- */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            <span
              aria-hidden
              className="hairline-gold absolute top-9 right-[10%] left-[10%] h-px"
            />
            <ol className="relative grid grid-cols-5">
              {STAGES.map(({ icon: Icon, label }, i) => (
                <Reveal key={label} delay={i * 120} as="li" className="flex flex-col items-center">
                  <span className="grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full border border-gold/40 bg-ink shadow-[0_0_0_8px_rgba(5,5,5,1)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105 hover:border-gold">
                    <Icon className="h-6 w-6 text-gold-light" strokeWidth={1.3} aria-hidden />
                  </span>
                  <span className="mt-5 text-[0.68rem] font-semibold tracking-[0.3em] text-beige/80 uppercase">
                    {label}
                  </span>
                  <span className="mt-2 font-display text-sm text-gold/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {/* --- Móvil: lista vertical --- */}
        <ol className="mt-12 flex flex-col lg:hidden">
          {STAGES.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} delay={i * 90} as="li" className="flex items-start gap-5">
              <div className="flex flex-col items-center">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/40 bg-ink-soft">
                  <Icon className="h-5 w-5 text-gold-light" strokeWidth={1.3} aria-hidden />
                </span>
                {i < STAGES.length - 1 && (
                  <span aria-hidden className="my-1 h-8 w-px bg-gradient-to-b from-gold/60 to-gold/10" />
                )}
              </div>
              <span className="pt-5 text-[0.72rem] font-semibold tracking-[0.3em] text-beige/80 uppercase">
                {label}
              </span>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200}>
          <p className="mx-auto mt-14 max-w-2xl text-center font-display text-xl leading-snug text-beige-light/90 text-pretty sm:text-2xl">
            No solo aprenderás una técnica.{" "}
            <span className="text-gold-gradient italic">
              Aprenderás a convertirla en una oportunidad de negocio.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
