import { CircleHelp, UserX, Repeat2, Megaphone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PROBLEMS = [
  { icon: CircleHelp, text: "No sabes cuánto cobrar." },
  { icon: UserX, text: "No consigues suficientes clientas." },
  { icon: Repeat2, text: "Dependes demasiado de recomendaciones." },
  { icon: Megaphone, text: "No sabes cómo vender tu trabajo en redes." },
];

/** El dolor, sobre beige claro: rápido de leer, cuatro puntos. */
export default function ProblemSection() {
  return (
    <section className="bg-beige-light">
      <div className="mx-auto max-w-[72rem] px-5 pt-14 pb-20 sm:px-8 lg:pt-16 lg:pb-24">
        <SectionHeading
          tone="light"
          label="El punto de partida"
          title="Hacer pestañas no garantiza"
          titleAccent="tener un negocio."
          className="mx-auto"
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {PROBLEMS.map(({ icon: Icon, text }, i) => (
            <Reveal key={text} delay={i * 90}>
              <article className="flex h-full items-center gap-4 rounded-2xl border border-ink/10 bg-white p-5 lg:flex-col lg:items-start lg:p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold/35 bg-beige-light">
                  <Icon className="h-5 w-5 text-gold-deep" strokeWidth={1.4} aria-hidden />
                </span>
                <p className="font-display text-lg leading-snug text-ink text-pretty lg:mt-1">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
