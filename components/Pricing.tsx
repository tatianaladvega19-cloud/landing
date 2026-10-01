import { Check, Lock, ShieldCheck } from "lucide-react";
import { courseData } from "@/data/course";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";

const INCLUDED = [
  "Acceso al curso Pestañas que Facturan",
  "Los 7 módulos, de la técnica al negocio",
  "Estrategias para atraer y fidelizar clientas",
  "Cómo estructurar tus precios y vender tus servicios",
];

/** Sección de precio: beige de fondo, tarjeta negra central. Alto impacto. */
export default function Pricing() {
  return (
    <section id="precio" className="relative isolate overflow-hidden bg-beige">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(55rem_34rem_at_50%_0%,rgba(212,168,79,0.22),transparent_62%)]"
      />

      <div className="mx-auto max-w-[52rem] px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <div className="frame-gold glow-gold relative overflow-hidden rounded-[1.8rem] p-px sm:rounded-[2.2rem]">
            <div className="relative rounded-[1.75rem] bg-ink px-6 py-12 text-center sm:rounded-[2.15rem] sm:px-14 sm:py-16">
              <div className="grain" aria-hidden />

              <span className="relative flex items-center justify-center gap-3 text-[0.62rem] font-semibold tracking-[0.42em] text-gold uppercase">
                <span className="hairline-gold h-px w-8 sm:w-14" />
                Hoy puedes comenzar
                <span className="hairline-gold h-px w-8 sm:w-14" />
              </span>

              <h2 className="relative mt-7 font-display text-[1.6rem] leading-snug font-medium text-beige-light text-balance sm:text-[2.1rem]">
                Accede a{" "}
                <span className="text-gold-gradient italic">{courseData.name}</span>
              </h2>

              <p className="relative mt-9 flex items-start justify-center gap-2">
                <span className="mt-3 font-display text-2xl text-gold-light sm:mt-5 sm:text-3xl">
                  US$
                </span>
                <span className="font-display text-[5.5rem] leading-[0.85] font-semibold text-gold-gradient tabular-nums sm:text-[8rem]">
                  {courseData.price}
                </span>
              </p>
              <p className="relative mt-3 text-[0.68rem] tracking-[0.32em] text-beige/55 uppercase">
                Pago único · {courseData.currency}
              </p>

              <ul className="relative mx-auto mt-10 grid max-w-md gap-3 text-left">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-gold/50 bg-gold/10">
                      <Check className="h-3 w-3 text-gold-light" strokeWidth={3} aria-hidden />
                    </span>
                    <span className="text-[0.88rem] leading-snug text-beige/80">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="relative mt-11">
                <CTAButton shimmer className="w-full">
                  Quiero mi acceso ahora
                </CTAButton>
              </div>

              <div className="relative mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 text-[0.7rem] tracking-[0.1em] text-beige/55 uppercase">
                <span className="flex items-center gap-2">
                  <Lock className="h-3.5 w-3.5 text-gold" strokeWidth={2} aria-hidden />
                  Acceso seguro
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" strokeWidth={2} aria-hidden />
                  Pago protegido
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
