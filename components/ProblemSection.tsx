import { CircleHelp, UserX, Megaphone } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PROBLEMS = [
  { icon: CircleHelp, text: "No sabes cuánto cobrar" },
  { icon: UserX, text: "No consigues suficientes clientas" },
  { icon: Megaphone, text: "No sabes cómo venderte en redes sociales" },
];

/** El dolor, sobre beige claro: contraste con el negro de alrededor. */
export default function ProblemSection() {
  return (
    <section className="bg-beige-light">
      <div className="mx-auto max-w-[72rem] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          tone="light"
          label="El punto de partida"
          title="Tener talento no es suficiente."
          titleAccent="Necesitas saber cómo convertirlo en dinero."
          subtitle="Muchas mujeres saben hacer trabajos increíbles, pero no saben cuánto cobrar, cómo conseguir clientas o cómo construir un negocio alrededor de su talento."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-3 lg:mt-16">
          {PROBLEMS.map(({ icon: Icon, text }, i) => (
            <Reveal key={text} delay={i * 110}>
              <article className="group h-full rounded-2xl border border-ink/10 bg-white p-7 shadow-[0_18px_50px_-40px_rgba(5,5,5,0.6)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_26px_60px_-38px_rgba(212,168,79,0.8)]">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/35 bg-beige-light transition-colors duration-500 group-hover:bg-gold/12">
                  <Icon className="h-5 w-5 text-gold-deep" strokeWidth={1.4} aria-hidden />
                </span>
                <p className="mt-6 font-display text-xl leading-snug text-ink text-pretty">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
