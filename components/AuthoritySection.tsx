import Image from "next/image";
import { Hand, Users, Workflow } from "lucide-react";
import Reveal from "./Reveal";

const INDICATORS = [
  { icon: Hand, label: "Formación práctica" },
  { icon: Users, label: "Experiencia real" },
  { icon: Workflow, label: "Metodología aplicada" },
];

/** Marco común de foto: proporción nativa 3:2, sin filtros ni overlays. */
const FRAME =
  "relative overflow-hidden rounded-2xl border border-[rgba(212,168,79,0.22)] bg-ink-soft shadow-[0_18px_40px_-24px_rgba(0,0,0,0.9)]";

/**
 * Autoridad con fotos reales de workshop. Solo evidencia visual: no afirma
 * que las personas sean alumnas del curso ni que este incluya certificado.
 *
 * Orden del DOM = orden móvil (texto → foto principal → indicadores →
 * secundarias). En desktop la rejilla coloca el texto a la izquierda y las
 * fotos a la derecha.
 */
export default function AuthoritySection() {
  return (
    <section id="formacion-real" className="relative bg-ink">
      <div aria-hidden className="hairline-gold absolute inset-x-0 top-0 h-px opacity-40" />

      <div className="mx-auto grid max-w-[80rem] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:gap-x-14 lg:gap-y-8 lg:py-28">
        {/* Texto */}
        <Reveal className="lg:col-span-5 lg:row-start-1 lg:self-end">
          <span className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.42em] text-gold uppercase">
            <span className="h-px w-10 bg-gold/50" />
            Formación real
          </span>

          <h2 className="mt-5 font-display text-[2rem] leading-[1.12] font-medium text-balance text-beige-light sm:text-[2.6rem] lg:text-[2.9rem]">
            Experiencia que se demuestra{" "}
            <span className="text-gold italic">en la práctica.</span>
          </h2>

          <p className="mt-6 font-display text-lg leading-snug text-beige/85 text-pretty sm:text-xl">
            Detrás de una formación profesional existe algo más que teoría: práctica,
            acompañamiento y experiencia trabajando con personas reales.
          </p>

          <p className="mt-5 text-[0.95rem] leading-relaxed text-beige/65 text-pretty sm:text-base">
            Una formación profesional va más allá de la teoría. La práctica, el
            acompañamiento y la experiencia en escenarios reales hacen parte del proceso
            de aprendizaje.
          </p>
        </Reveal>

        {/* Foto principal */}
        <Reveal
          delay={120}
          className="lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1"
        >
          <div className={`${FRAME} aspect-[3/2]`}>
            <Image
              src="/foto usar 1.jpeg"
              alt="Grupo de participantes de un workshop de formación mostrando sus certificados"
              fill
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Indicadores */}
        <Reveal delay={80} className="lg:col-span-5 lg:row-span-2 lg:row-start-2">
          <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {INDICATORS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-4 rounded-xl border border-[rgba(212,168,79,0.18)] bg-ink-soft px-5 py-4"
              >
                <Icon className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.3} aria-hidden />
                <span className="text-[0.92rem] font-medium text-beige-light">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Fotos secundarias */}
        <Reveal
          delay={160}
          className="grid gap-5 sm:grid-cols-2 lg:col-span-7 lg:col-start-6 lg:row-start-3"
        >
          <div className={`${FRAME} aspect-[3/2]`}>
            <Image
              src="/foto usar 4.jpeg"
              alt="Ambiente de un workshop de formación con varias participantes trabajando"
              fill
              sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <figure>
            <div className={`${FRAME} aspect-[3/2]`}>
              <Image
                src="/foto usar 2.jpeg"
                alt="Detalle de certificados de un workshop"
                fill
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[0.78rem] tracking-wide text-beige/55 italic">
              Una experiencia de formación cuidada en cada detalle.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
