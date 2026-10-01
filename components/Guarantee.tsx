import { ShieldCheck } from "lucide-react";
import { courseData, hasValue } from "@/data/course";
import Reveal from "./Reveal";

/**
 * Franja de garantía: sección independiente, negra y a todo el ancho, entre
 * la oferta y la FAQ. Elemento de confianza, no otra oferta. Solo muestra lo
 * confirmado en `courseData.guarantee`; las condiciones de devolución
 * (`guaranteeDetails`) aparecen únicamente cuando se completan.
 */
export default function Guarantee() {
  const g = courseData.guarantee;

  return (
    <section id="garantia" className="bg-ink" aria-label={g.label}>
      <Reveal className="mx-auto flex max-w-[72rem] flex-col items-center gap-5 px-5 py-12 text-center sm:px-8 lg:flex-row lg:gap-8 lg:py-14 lg:text-left">
        <div className="flex shrink-0 items-center gap-4">
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/45">
            <ShieldCheck className="h-6 w-6 text-gold-light" strokeWidth={1.4} aria-hidden />
          </span>
          <span className="text-[0.78rem] font-semibold tracking-[0.3em] whitespace-nowrap text-gold uppercase">
            Garantía de <span className="text-[1.15rem] text-gold-light">{g.days}</span> días
          </span>
        </div>

        <span aria-hidden className="hidden h-12 w-px shrink-0 bg-gold/35 lg:block" />

        <div className="lg:flex lg:items-baseline lg:gap-5">
          <p className="font-display text-[1.7rem] leading-tight text-beige-light lg:shrink-0 lg:text-[1.9rem]">
            {g.title}
          </p>
          <p className="mt-2 max-w-xl text-[0.92rem] leading-relaxed text-beige/65 text-pretty lg:mt-0">
            {g.text}
            {hasValue(g.guaranteeDetails) && <> {g.guaranteeDetails}</>}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
