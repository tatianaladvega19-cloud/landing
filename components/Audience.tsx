import { Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ITEMS = [
  "Estás comenzando desde cero.",
  "Ya haces pestañas pero quieres perfeccionar tu técnica.",
  "Quieres conseguir más clientas.",
  "Quieres comenzar un negocio desde casa.",
  "Quieres aprender a vender tus servicios.",
  "Quieres convertir una habilidad en una fuente de ingresos.",
];

/** Lista de auto-identificación sobre beige. */
export default function Audience() {
  return (
    <section id="para-quien" className="bg-beige">
      <div className="mx-auto max-w-[72rem] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          tone="light"
          label="Para quién es"
          title="Este curso"
          titleAccent="es para ti si..."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item} delay={(i % 3) * 100}>
              <article className="flex h-full items-start gap-4 rounded-2xl border border-ink/8 bg-beige-light p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_55px_-40px_rgba(5,5,5,0.7)]">
                <span className="surface-gold mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full">
                  <Check className="h-3.5 w-3.5 text-ink" strokeWidth={3} aria-hidden />
                </span>
                <p className="text-[0.95rem] leading-snug text-ink/80 text-pretty">{item}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
