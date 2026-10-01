import Image from "next/image";
import { Award } from "lucide-react";
import { courseData, hasValue } from "@/data/course";
import Reveal from "./Reveal";

/**
 * Autoridad: perfil de la experta + fotos reales de formación presencial.
 *
 * Orden de lectura: quién es → experiencia → alumnas → formación
 * internacional → reconocimiento → por qué puede enseñar. Todo el contenido
 * vive en `courseData.expert`.
 *
 * Las fotos de la galería son evidencia visual de formación: el copy no
 * afirma que las personas sean alumnas de este curso.
 */
const FRAME =
  "relative overflow-hidden rounded-2xl border border-[rgba(212,168,79,0.22)] bg-ink-soft";

export default function AuthoritySection() {
  const { expert, workshopPhotos } = courseData;
  const [main, second, third, fourth] = workshopPhotos;

  return (
    <section id="experta" className="relative bg-ink">
      <div aria-hidden className="hairline-gold absolute inset-x-0 top-0 h-px opacity-40" />

      <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-14">
          {/* Foto de la experta: el elemento visual principal */}
          <Reveal className="lg:col-span-5">
            <div
              className={`${FRAME} mx-auto aspect-[4/5] w-full max-w-md lg:aspect-auto lg:h-full lg:min-h-[34rem] lg:max-w-none`}
            >
              <Image
                src={expert.photo}
                alt={expert.photoAlt}
                fill
                sizes="(min-width: 1024px) 34vw, 28rem"
                className="object-cover object-[50%_28%]"
              />
            </div>
          </Reveal>

          {/* Texto */}
          <Reveal delay={100} className="flex flex-col justify-center lg:col-span-7">
            <span className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.42em] text-gold uppercase">
              <span className="h-px w-10 bg-gold/50" />
              {expert.label}
            </span>

            <h2 className="mt-5 font-display text-[1.9rem] leading-[1.12] font-medium text-balance text-beige-light sm:text-[2.3rem] lg:text-[2.5rem]">
              {expert.title}{" "}
              <span className="text-gold-gradient italic">{expert.titleAccent}</span>
            </h2>

            <div className="mt-6">
              <p className="font-display text-2xl text-beige-light">{expert.name}</p>
              <p className="mt-1.5 text-[0.68rem] font-semibold tracking-[0.22em] text-gold uppercase">
                {expert.role}
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {expert.story.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-2xl text-[0.95rem] leading-relaxed text-beige/70 text-pretty"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Cifras: +700 es la protagonista */}
            <dl className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {expert.stats.map((s) => (
                <div
                  key={s.label}
                  className={`flex flex-col-reverse rounded-xl px-4 py-4 ${
                    s.featured
                      ? "order-first col-span-2 border border-gold/60 bg-gold/[0.07] sm:order-none sm:col-span-1"
                      : "border border-gold/18 bg-ink-soft"
                  }`}
                >
                  <dt
                    className={`mt-1 text-[0.62rem] leading-snug tracking-[0.16em] uppercase ${
                      s.featured ? "text-gold-light" : "text-beige/60"
                    }`}
                  >
                    {s.label}
                  </dt>
                  <dd
                    className={`font-display leading-none tabular-nums ${
                      s.featured ? "text-gold-gradient text-[3rem]" : "text-[1.9rem] text-beige-light"
                    }`}
                  >
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Reconocimiento: credencial secundaria */}
            {hasValue(expert.recognition.text) && (
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-gold/18 px-4 py-3.5">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} aria-hidden />
                <p className="text-[0.88rem] leading-snug text-beige/75">
                  <span className="block text-[0.6rem] font-semibold tracking-[0.24em] text-gold uppercase">
                    {expert.recognition.label}
                  </span>
                  <span className="mt-1 block">{expert.recognition.text}</span>
                </p>
              </div>
            )}

            {/* Por qué puede enseñar */}
            {hasValue(expert.authorityHeadline) && (
              <p className="mt-7 max-w-2xl border-l-2 border-gold/60 pl-5 font-display text-lg leading-snug text-beige-light/90 italic text-pretty sm:text-xl">
                {expert.authorityHeadline}
              </p>
            )}
          </Reveal>
        </div>

        {/* Evidencia visual: formación presencial */}
        <Reveal delay={80} className="mt-16 lg:mt-20">
          <span className="flex items-center justify-center gap-3 text-[0.62rem] font-semibold tracking-[0.42em] text-gold uppercase">
            <span className="h-px w-10 bg-gold/50" />
            Formación real
            <span className="h-px w-10 bg-gold/50" />
          </span>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:h-[36rem] lg:grid-cols-4 lg:grid-rows-2">
            <div className={`${FRAME} col-span-2 aspect-[3/2] lg:row-span-2 lg:aspect-auto`}>
              <Image
                src={main.src}
                alt={main.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className={`${FRAME} col-span-2 aspect-[3/2] lg:aspect-auto`}>
              <Image
                src={second.src}
                alt={second.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-[50%_30%]"
              />
            </div>
            <div className={`${FRAME} aspect-[4/3] lg:aspect-auto`}>
              <Image
                src={third.src}
                alt={third.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className={`${FRAME} aspect-[4/3] lg:aspect-auto`}>
              <Image
                src={fourth.src}
                alt={fourth.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <p className="mt-4 text-center text-[0.78rem] tracking-wide text-beige/50 italic">
            Fotografías reales de formaciones presenciales.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
