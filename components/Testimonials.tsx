import Image from "next/image";
import { Star } from "lucide-react";
import { courseData, isPending } from "@/data/course";
import PendingNote from "./PendingNote";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Testimonios con fotografía real. Cada campo de texto sin confirmar se
 * muestra como "pendiente": la sección queda lista, pero no inventa reseñas.
 */
export default function Testimonials() {
  return (
    <section id="testimonios" className="relative bg-ink">
      <div aria-hidden className="hairline-gold absolute inset-x-0 top-0 h-px opacity-40" />

      <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          label="Testimonios"
          title="Ellas ya están convirtiendo su talento"
          titleAccent="en una oportunidad."
          subtitle="Conoce las historias de mujeres que decidieron dar el siguiente paso."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-7">
          {courseData.testimonials.map((t, i) => {
            const noQuote = isPending(t.quote);
            const noName = isPending(t.name);
            const noCity = isPending(t.city);

            return (
              <Reveal key={t.id} delay={(i % 3) * 110} className="h-full">
                <figure className="group flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[rgba(212,168,79,0.25)] bg-ink-soft shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[rgba(212,168,79,0.45)]">
                  {!isPending(t.photo) && (
                    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[1.25rem] sm:aspect-[5/6]">
                      <Image
                        src={t.photo}
                        alt={noName ? `Alumna del curso ${i + 1}` : t.name}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover object-[50%_22%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      />
                      <div
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink-soft to-transparent"
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col px-7 pt-5 pb-7">
                    <div className="flex items-center gap-1" aria-label={`Valoración de ${t.rating} sobre 5`}>
                      {Array.from({ length: t.rating }).map((_, s) => (
                        <Star
                          key={s}
                          className="h-4 w-4 fill-gold text-gold"
                          strokeWidth={0}
                          aria-hidden
                        />
                      ))}
                    </div>

                    <figcaption className="mt-4">
                      {noName ? (
                        <PendingNote token={`NOMBRE_${i + 1}`} />
                      ) : (
                        <span className="block font-display text-xl text-white">{t.name}</span>
                      )}
                      {!noCity && (
                        <span className="mt-1.5 block text-[0.7rem] tracking-[0.2em] text-[#CFC7BB] uppercase">
                          {t.city}
                        </span>
                      )}
                    </figcaption>

                    <span aria-hidden className="mt-5 block h-px w-10 bg-gold/40" />

                    <blockquote className="mt-5 flex-1">
                      {noQuote ? (
                        <PendingNote token={`TESTIMONIO_${i + 1}`} />
                      ) : (
                        <p className="text-[0.95rem] leading-relaxed text-[#CFC7BB] text-pretty">
                          “{t.quote}”
                        </p>
                      )}
                    </blockquote>
                  </div>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
