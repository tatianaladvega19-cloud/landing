import Image from "next/image";
import { Brush, Check, Crosshair, Repeat } from "lucide-react";
import Reveal from "./Reveal";

const POINTS = [
  { icon: Brush, label: "Técnica" },
  { icon: Crosshair, label: "Precisión" },
  { icon: Repeat, label: "Práctica" },
  { icon: Check, label: "Aplicación" },
];

/** Foto real de práctica + bloque breve. Sin características inventadas. */
export default function PracticeSection() {
  return (
    <section id="aprende-viendo" className="relative bg-ink">
      <div aria-hidden className="hairline-gold absolute inset-x-0 top-0 h-px opacity-40" />

      <div className="mx-auto grid max-w-[80rem] items-center gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 md:gap-12 lg:gap-16 lg:py-28">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[rgba(212,168,79,0.22)] bg-ink-soft shadow-[0_18px_40px_-24px_rgba(0,0,0,0.9)]">
            <Image
              src="/foto usar 3.jpeg"
              alt="Instructora aplicando una técnica mientras varias participantes observan"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[50%_25%]"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.42em] text-gold uppercase">
            <span className="h-px w-10 bg-gold/50" />
            Práctica
          </span>

          <h2 className="mt-5 font-display text-[2rem] leading-[1.12] font-medium text-balance text-beige-light sm:text-[2.5rem] lg:text-[2.8rem]">
            Aprende viendo <span className="text-gold italic">cómo se hace.</span>
          </h2>

          <p className="mt-6 max-w-lg text-[0.95rem] leading-relaxed text-beige/65 text-pretty sm:text-base">
            La formación práctica permite entender no solo qué hacer, sino también cómo
            aplicar correctamente cada técnica.
          </p>

          <ul className="mt-8 grid max-w-md grid-cols-2 gap-3">
            {POINTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-xl border border-[rgba(212,168,79,0.18)] bg-ink-soft px-4 py-3.5"
              >
                <Icon className="h-4.5 w-4.5 shrink-0 text-gold" strokeWidth={1.3} aria-hidden />
                <span className="text-[0.9rem] font-medium text-beige-light">{label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
