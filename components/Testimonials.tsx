import Image from "next/image";
import { Star } from "lucide-react";
import { courseData, hasValue } from "@/data/course";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Testimonios: FOTO → ★★★★★ → NOMBRE → "FRASE".
 *
 * Todo vive en `courseData.testimonials`; un campo vacío no se muestra.
 * Desktop: 3 en fila. Tablet: 2 columnas (la tercera centrada). Móvil: 1.
 */
export default function Testimonials() {
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

        <div className="mx-auto mt-12 grid max-w-md gap-12 sm:max-w-none sm:grid-cols-2 sm:gap-x-6 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {courseData.testimonials.map((t, i) => (
            <Reveal
              key={t.id}
              delay={i * 110}
              as="figure"
              className="flex flex-col sm:last:odd:col-span-2 sm:last:odd:mx-auto sm:last:odd:w-[calc(50%-0.75rem)] lg:last:odd:col-span-1 lg:last:odd:w-auto"
            >
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[1.25rem] border border-[rgba(212,168,79,0.25)] bg-ink-soft">
                <Image
                  src={t.image}
                  alt={hasValue(t.name) ? `${t.name} — ${t.alt}` : t.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 28rem"
                  className="object-cover"
                />
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
                  <span className="mt-3 font-display text-[1.35rem] leading-tight text-beige-light">
                    {t.name}
                  </span>
                )}
                {hasValue(t.quote) && (
                  <blockquote className="mt-3 font-display text-[1rem] leading-relaxed text-beige/75 italic text-pretty">
                    “{t.quote}”
                  </blockquote>
                )}
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
