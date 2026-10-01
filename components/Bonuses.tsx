import Image from "next/image";
import { Gift } from "lucide-react";
import { courseData, formatUSD, hasValue, totalBonusValue } from "@/data/course";
import Pricing from "./Pricing";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Bonos + oferta en una sola sección compacta.
 *
 * Desktop: bonos 2×2 a la izquierda (~60%) y la tarjeta de oferta a la
 * derecha (~40%), ambas empezando a la misma altura.
 * Móvil: título → bonos → valor de los bonos → oferta.
 * La garantía va justo después, en su propia franja (components/Guarantee).
 *
 * El valor individual de cada bono es referencial (no un precio anterior) y
 * solo se muestra si es > 0. El total se calcula en `data/course.ts`.
 */
export default function Bonuses() {
  const count = courseData.bonuses.length;

  return (
    <section id="bonos" className="relative bg-[#F5EEE4]">
      <div aria-hidden className="hairline-gold absolute inset-x-0 top-0 h-px opacity-40" />

      <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          label="Bonos exclusivos"
          title="Y además, recibirás"
          titleAccent="estos bonos especiales"
          subtitle="Recursos para organizar, presentar y mostrar tu negocio de pestañas."
          tone="light"
          className="mx-auto [&>span:first-child]:text-[#C99A3D] [&_h2]:text-[#111111] [&_h2_span]:bg-none [&_h2_span]:text-[#C99A3D] [&>p]:text-[#4A4540]"
        />

        <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-start lg:gap-8">
          {/* ---------- Izquierda: bonos ---------- */}
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {courseData.bonuses.map((bonus, i) => {
                const noName = !hasValue(bonus.name);
                const noDesc = !hasValue(bonus.description);

                return (
                  <Reveal key={bonus.id} delay={(i % 2) * 110} className="h-full">
                    <article className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-[rgba(201,154,61,0.30)] bg-[#FBF7F1] shadow-[0_18px_40px_-28px_rgba(17,17,17,0.25)] transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(201,154,61,0.50)]">
                      {/* Mockup */}
                      <div className="relative mx-auto aspect-square w-full max-w-[20rem] shrink-0">
                        {!hasValue(bonus.mockup) ? (
                          <span aria-hidden className="absolute inset-6 grid place-items-center rounded-xl bg-ink">
                            <Gift className="h-10 w-10 text-gold/45" strokeWidth={1.1} />
                          </span>
                        ) : (
                          <Image
                            src={bonus.mockup}
                            alt={noName ? `Bono ${bonus.number}` : `Mockup del bono ${bonus.name}`}
                            fill
                            sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 20rem"
                            className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                          />
                        )}
                      </div>

                      {/* Texto */}
                      <div className="flex flex-1 flex-col px-6 pt-1 pb-6">
                        <span className="flex items-center gap-3 text-[0.6rem] font-semibold tracking-[0.36em] text-[#C99A3D] uppercase">
                          Bono {bonus.number}
                          <span aria-hidden className="h-px w-8 bg-[#C99A3D]/45" />
                        </span>

                        {!noName && (
                          <h3 className="mt-3 font-display text-[1.4rem] leading-[1.15] text-[#111111] text-balance">
                            {bonus.name}
                            {bonus.subtitle && (
                              <span className="mt-1 block text-[0.98rem] text-[#C99A3D] italic">
                                {bonus.subtitle}
                              </span>
                            )}
                          </h3>
                        )}

                        {!noDesc && (
                          <p className="mt-3 text-[0.88rem] leading-relaxed text-[#4A4540] text-pretty">
                            {bonus.description}
                          </p>
                        )}

                        {bonus.value > 0 && (
                          <div className="mt-auto pt-5">
                            <p className="border-t border-[#C99A3D]/20 pt-4">
                              <span className="block text-[0.6rem] font-semibold tracking-[0.24em] text-[#4A4540]/70 uppercase">
                                Valor individual
                              </span>
                              <span className="mt-1.5 block font-display text-[1.3rem] leading-none text-[#C99A3D] tabular-nums">
                                {formatUSD(bonus.value)}
                              </span>
                            </p>
                          </div>
                        )}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>

            {/* Valor de los bonos: se tacha porque NO se cobra aparte, no por descuento */}
            {totalBonusValue > 0 && (
              <Reveal className="mt-8 flex flex-col items-center text-center">
                <p className="text-[0.62rem] font-semibold tracking-[0.42em] text-[#C99A3D] uppercase">
                  Valor de los {count} bonos
                </p>
                <p className="mt-2 font-display text-[1.5rem] leading-none text-[#4A4540]/70 tabular-nums line-through decoration-[#C99A3D]/70 decoration-1">
                  {formatUSD(totalBonusValue)}
                </p>
                <p className="mt-1 font-display text-[3.4rem] leading-none font-semibold tracking-[0.06em] text-gold-gradient-deep uppercase sm:text-[4rem]">
                  Gratis
                </p>
                <p className="mt-2 text-[0.7rem] font-semibold tracking-[0.3em] text-[#111111] uppercase">
                  Incluidos con tu inscripción
                </p>
              </Reveal>
            )}
          </div>

          {/* ---------- Derecha: oferta ---------- */}
          <Reveal delay={100} className="mx-auto w-full max-w-xl lg:sticky lg:top-28 lg:max-w-none">
            <Pricing />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
