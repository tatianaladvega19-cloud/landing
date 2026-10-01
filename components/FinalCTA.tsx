import { Lock } from "lucide-react";
import { courseData } from "@/data/course";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";

/** Cierre: una sola idea, el precio y un botón. */
export default function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_38rem_at_50%_110%,rgba(212,168,79,0.16),transparent_62%)]"
      />
      <div className="grain" aria-hidden />

      <div className="mx-auto flex max-w-[56rem] flex-col items-center px-5 py-24 text-center sm:px-8 lg:py-32">
        <Reveal>
          <h2 className="font-display text-[2.1rem] leading-[1.1] font-medium text-beige-light text-balance sm:text-[3.2rem]">
            Tu próximo nivel comienza{" "}
            <span className="text-gold-gradient italic">con una decisión.</span>
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-7 text-[0.95rem] leading-relaxed tracking-[0.04em] text-beige/70 sm:text-base">
            Aprende la técnica.
            <br />
            Consigue clientas.
            <br />
            Construye tu negocio.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-10 font-display text-[4rem] leading-none font-semibold text-gold-gradient tabular-nums sm:text-[5rem]">
            {courseData.priceLabel}
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-10 w-full sm:w-auto">
          <CTAButton shimmer className="w-full sm:w-auto">
            Quiero mi acceso a Pestañas que Facturan
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
