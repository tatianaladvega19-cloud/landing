import { Brush, Sparkles, Users, BadgeDollarSign, Building2, ArrowDown } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** El mecanismo del programa: cada etapa se apoya en la anterior. */
const STAGES = [
  { icon: Brush, label: "Técnica", text: "Dominas las bases y la técnica profesional." },
  { icon: Sparkles, label: "Servicio", text: "La conviertes en una experiencia profesional." },
  { icon: Users, label: "Clientas", text: "Atraes clientas con estrategia y contenido." },
  { icon: BadgeDollarSign, label: "Ventas", text: "Estructuras tus precios y vendes tus servicios." },
  { icon: Building2, label: "Negocio", text: "Construyes un negocio alrededor de tu habilidad." },
];

/**
 * De habilidad a negocio. Horizontal en desktop (filete dorado que une las
 * etapas), vertical con flechas en móvil.
 */
export default function Transformation() {
  return (
    <section id="transformacion" className="bg-ink">
      <div className="mx-auto max-w-[76rem] px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          label="La transformación"
          title="De saber hacer pestañas"
          titleAccent="a construir un negocio."
          className="mx-auto"
        />

        {/* --- Desktop: línea horizontal --- */}
        <div className="relative mt-16 hidden lg:block">
          <span aria-hidden className="hairline-gold absolute top-8 right-[10%] left-[10%] h-px" />
          <ol className="relative grid grid-cols-5 gap-6">
            {STAGES.map(({ icon: Icon, label, text }, i) => (
              <Reveal key={label} delay={i * 110} as="li" className="flex flex-col items-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full border border-gold/40 bg-ink shadow-[0_0_0_8px_rgba(5,5,5,1)]">
                  <Icon className="h-6 w-6 text-gold-light" strokeWidth={1.3} aria-hidden />
                </span>
                <span className="mt-5 text-[0.68rem] font-semibold tracking-[0.3em] text-gold uppercase">
                  {label}
                </span>
                <span className="mt-2.5 max-w-[12rem] text-[0.85rem] leading-snug text-beige/65 text-pretty">
                  {text}
                </span>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* --- Móvil: lista vertical --- */}
        <ol className="mx-auto mt-12 flex max-w-md flex-col lg:hidden">
          {STAGES.map(({ icon: Icon, label, text }, i) => (
            <Reveal key={label} delay={i * 80} as="li" className="flex flex-col items-center text-center">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-ink-soft">
                <Icon className="h-5 w-5 text-gold-light" strokeWidth={1.3} aria-hidden />
              </span>
              <span className="mt-3 text-[0.7rem] font-semibold tracking-[0.3em] text-gold uppercase">
                {label}
              </span>
              <span className="mt-1.5 text-[0.88rem] leading-snug text-beige/65 text-pretty">{text}</span>
              {i < STAGES.length - 1 && (
                <ArrowDown className="my-4 h-4 w-4 text-gold/50" strokeWidth={1.6} aria-hidden />
              )}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
