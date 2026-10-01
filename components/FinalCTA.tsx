import { Lock } from "lucide-react";
import { courseData } from "@/data/course";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";

/** Cierre: una sola idea, el precio y un botón. */
export default function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div aria-hidden className="hairline-gold absolute inset-x-0 top-0 h-px opacity-40" />
      <div className="grain" aria-hidden />

      <div className="mx-auto flex max-w-[56rem] flex-col items-center px-5 py-24 text-center sm:px-8 lg:py-28">
        <Reveal>
          <h2 className="font-display text-[2.1rem] leading-[1.1] font-medium text-beige-light text-balance sm:text-[3.2rem]">
            Tu habilidad puede ser más que un talento.
            <br />
            <span className="text-gold-gradient italic">Puede convertirse en un negocio.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-10 font-display text-[4rem] leading-none font-semibold text-gold-gradient tabular-nums sm:text-[5rem]">
            {courseData.priceLabel}
          </p>
          <p className="mt-3 text-[0.68rem] tracking-[0.32em] text-beige/55 uppercase">
            Curso + bonos · Pago único
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-10 w-full sm:w-auto">
          <CTAButton shimmer className="w-full sm:w-auto">
            Quiero empezar
          </CTAButton>
        </Reveal>

        <Reveal delay={240}>
          <p className="mt-5 flex items-center gap-2 text-[0.7rem] tracking-[0.1em] text-beige/55 uppercase">
            <Lock className="h-3.5 w-3.5 text-gold" strokeWidth={2} aria-hidden />
            Acceso seguro · Pago protegido
          </p>
        </Reveal>
      </div>
    </section>
  );
}
