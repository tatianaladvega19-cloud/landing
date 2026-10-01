import Image from "next/image";
import { Gift } from "lucide-react";
import { courseData, isPending } from "@/data/course";
import CTAButton from "./CTAButton";
import PendingNote from "./PendingNote";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Bonos como productos: el mockup (PNG transparente, 4:5) es protagonista.
 * Desktop: 2×2 con mockup a la izquierda y texto a la derecha.
 * Tablet: 2 columnas apiladas. Móvil: 1 columna. Valor solo si está confirmado.
 */
export default function Bonuses() {
  return (
    <section id="bonos" className="relative bg-[#F5EEE4]">
      <div aria-hidden className="hairline-gold absolute inset-x-0 top-0 h-px opacity-40" />

      <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          label="Bonos exclusivos"
          title="Y además, recibirás"
          titleAccent="estos bonos especiales"
          subtitle="Recursos diseñados para ayudarte a llevar tu negocio de pestañas al siguiente nivel."
          tone="light"
          className="mx-auto [&>span:first-child]:text-[#C99A3D] [&_h2]:text-[#111111] [&_h2_span]:bg-none [&_h2_span]:text-[#C99A3D] [&>p]:text-[#4A4540]"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-20 lg:gap-8">
          {courseData.bonuses.map((bonus, i) => {
            const noName = isPending(bonus.name);
            const noDesc = isPending(bonus.description);

            return (
              <Reveal key={bonus.id} delay={(i % 2) * 110} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-[rgba(201,154,61,0.30)] bg-[#FBF7F1] shadow-[0_18px_40px_-28px_rgba(17,17,17,0.25)] transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[rgba(201,154,61,0.50)] lg:flex-row lg:items-center">
                  {/* Mockup */}
                  <div className="relative mx-auto aspect-[4/5] w-full max-w-[22rem] shrink-0 px-6 pt-8 lg:w-[54%] lg:max-w-none lg:px-0 lg:pt-0 lg:pl-4">
                    {isPending(bonus.mockup) ? (
                      <span aria-hidden className="absolute inset-6 grid place-items-center rounded-xl bg-ink">
                        <Gift className="h-10 w-10 text-gold/45" strokeWidth={1.1} />
                      </span>
                    ) : (
                      <div className="relative h-full w-full">
                        <Image
                          src={bonus.mockup}
                          alt={noName ? `Bono ${bonus.number}` : `Mockup del bono ${bonus.name}`}
                          fill
                          sizes="(min-width: 1024px) 340px, (min-width: 768px) 45vw, 352px"
                          className="object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                        />
                      </div>
                    )}
                  </div>

                  {/* Texto */}
                  <div className="flex flex-1 flex-col px-7 pt-4 pb-8 lg:py-10 lg:pr-9 lg:pl-2">
                    <span className="flex items-center gap-3 text-[0.6rem] font-semibold tracking-[0.36em] text-[#C99A3D] uppercase">
                      Bono {bonus.number}
                      <span aria-hidden className="h-px w-8 bg-[#C99A3D]/45" />
                    </span>

                    {noName ? (
                      <PendingNote token={`BONO_${i + 1}`} className="mt-4 self-start" />
                    ) : (
                      <h3 className="mt-4 font-display text-[1.6rem] leading-[1.15] text-[#111111] text-balance lg:text-[1.75rem]">
                        {bonus.name}
                        {bonus.subtitle && (
                          <span className="mt-1.5 block text-[1.05rem] text-[#C99A3D] italic">
                            {bonus.subtitle}
                          </span>
                        )}
                      </h3>
                    )}

                    <div className="mt-4">
                      {noDesc ? (
                        <PendingNote token={`BONO_${i + 1}_DESCRIPCION`} />
                      ) : (
                        <p className="text-[0.92rem] leading-relaxed text-[#4A4540] text-pretty">
                          {bonus.description}
                        </p>
                      )}
                    </div>

                    {!isPending(bonus.value) && (
                      <span className="mt-6 self-start rounded-full border border-[#C99A3D]/35 px-3.5 py-1.5 text-[0.65rem] font-semibold tracking-[0.14em] text-[#C99A3D] uppercase">
                        Valor {bonus.value}
                      </span>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Cierre + CTA */}
        <Reveal className="mt-16 flex flex-col items-center text-center lg:mt-20">
          <span aria-hidden className="hairline-gold h-px w-24" />
          <p className="mt-8 font-display text-[1.6rem] leading-snug text-[#111111] text-balance sm:text-[2rem]">
            Todo esto está incluido en tu acceso.
          </p>
          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-[#4A4540] text-pretty sm:text-base">
            Accede a {courseData.name} + todos tus bonos por{" "}
            <span className="font-semibold text-[#C99A3D]">{courseData.priceLabel}</span>.
          </p>
          <CTAButton className="mt-8">Quiero mi acceso ahora</CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
