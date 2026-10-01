import { Brush, UserPlus, ShoppingBag, Briefcase } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/** Los 4 pilares del curso, resumidos del temario real. */
const PILLARS = [
  { icon: Brush, number: "01", title: "Técnica", text: "Bases y técnicas profesionales." },
  { icon: UserPlus, number: "02", title: "Clientas", text: "Estrategias para atraer y fidelizar clientas." },
  { icon: ShoppingBag, number: "03", title: "Ventas", text: "Cómo estructurar precios y vender servicios." },
  { icon: Briefcase, number: "04", title: "Negocio", text: "Cómo convertir el servicio en un negocio." },
];

/** Pausa visual clara: mismo crema que la sección de bonos (#F5EEE4). */
export default function WhatYouLearn() {
  return (
    <section id="que-aprenderas" className="bg-[#F5EEE4]">
      <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          tone="light"
          label="Qué aprenderás"
          title="Cuatro pilares,"
          titleAccent="un solo objetivo: tu negocio."
          className="mx-auto [&>span:first-child]:text-[#C99A3D] [&_h2]:text-[#111111] [&_h2_span]:bg-none [&_h2_span]:text-[#C99A3D]"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {PILLARS.map(({ icon: Icon, number, title, text }, i) => (
            <Reveal key={title} delay={i * 90}>
              <article className="h-full rounded-2xl border border-[rgba(201,154,61,0.30)] bg-[#FBF7F1] p-6 transition-colors duration-500 hover:border-[rgba(201,154,61,0.55)]">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#C99A3D]/40 bg-[#C99A3D]/10">
                    <Icon className="h-5 w-5 text-gold-deep" strokeWidth={1.4} aria-hidden />
                  </span>
                  <span className="font-display text-2xl text-[#C99A3D]/60 tabular-nums">{number}</span>
                </div>
                <h3 className="mt-5 text-[0.72rem] font-semibold tracking-[0.3em] text-[#111111] uppercase">
                  {title}
                </h3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-[#4A4540] text-pretty">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
