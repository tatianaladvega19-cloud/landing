import Image from "next/image";
import { Star } from "lucide-react";
import { courseData, hasValue } from "@/data/course";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TestimonialVideo from "./TestimonialVideo";

/**
 * Testimonios con foto y en video, con el mismo tratamiento:
 * ★★★★★ → nombre → ubicación → frase, en el orden de
 * `courseData.testimonials`. Los marcados con `show: false` no se muestran.
 * Las frases "support" (videos) son texto de apoyo y van sin comillas.
 *
 * Desktop: 4 en una sola fila. Tablet: 2 columnas. Móvil: carrusel táctil
 * horizontal; el desbordamiento queda dentro del carrusel, nunca en la página.
 */
const MEDIA =
  "relative aspect-[2/3] w-full overflow-hidden rounded-[1.25rem] border border-[rgba(212,168,79,0.25)] bg-ink-soft";

export default function Testimonials() {
  const items = courseData.testimonials.filter((t) => t.show !== false);

  return (
    <section id="testimonios" className="relative bg-ink">
      <div aria-hidden className="hairline-gold absolute inset-x-0 top-0 h-px opacity-40" />

      <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          label="Testimonios"
          title="Mujeres que decidieron"
          titleAccent="dar el siguiente paso."
          className="mx-auto"
        />

        <Reveal className="mt-12 lg:mt-14">
          <div
            role="list"
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-4 lg:gap-6 [&::-webkit-scrollbar]:hidden"
          >
            {items.map((t) => (
              <figure
                key={t.id}
                role="listitem"
                className="flex w-[82%] shrink-0 snap-start flex-col sm:w-auto"
              >
                <div className={MEDIA}>
                  {t.kind === "video" ? (
                    <TestimonialVideo src={t.video} label={t.name} />
                  ) : (
                    <Image
                      src={t.image}
                      alt={hasValue(t.name) ? `${t.name} — ${t.alt}` : t.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 82vw"
                      className="object-cover"
                    />
                  )}
                </div>

                <figcaption className="mt-5 flex flex-col items-center px-2 text-center">
                  {t.rating > 0 && (
                    <span className="flex items-center gap-1" role="img" aria-label={`${t.rating} de 5 estrellas`}>
                      {Array.from({ length: t.rating }, (_, s) => (
                        <Star key={s} className="h-4 w-4 fill-gold text-gold" strokeWidth={0} aria-hidden />
                      ))}
                    </span>
                  )}
                  {hasValue(t.name) && (
                    <span className="mt-3 font-display text-[1.35rem] leading-tight text-beige-light">{t.name}</span>
                  )}
                  {hasValue(t.location) && (
                    <span className="mt-1.5 text-[0.7rem] tracking-[0.2em] text-beige/60 uppercase">
                      {t.location}
                    </span>
                  )}
                  {hasValue(t.quote) &&
                    (t.quoteStyle === "quote" ? (
                      <blockquote className="mt-3 font-display text-[1rem] leading-relaxed text-beige/75 italic text-pretty">
                        “{t.quote}”
                      </blockquote>
                    ) : (
                      // Texto de apoyo de la landing, no una cita de la alumna: sin comillas.
                      <p className="mt-3 font-display text-[1rem] leading-relaxed text-beige/75 italic text-pretty">
                        {t.quote}
                      </p>
                    ))}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
