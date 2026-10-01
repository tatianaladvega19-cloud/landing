import { Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ITEMS = [
  "Estás empezando desde cero.",
  "Ya haces pestañas y quieres mejorar tu técnica.",
  "Quieres conseguir más clientas.",
  "Quieres trabajar desde casa.",
  "Quieres convertir tu habilidad en un negocio.",
];

/** Lista de auto-identificación sobre beige. */
export default function Audience() {
  return (
    <section id="para-quien" className="bg-beige">
      <div className="mx-auto max-w-[56rem] px-5 py-20 sm:px-8 lg:py-24">
        <SectionHeading
          tone="light"
          label="Para quién es"
          title="Este curso"
          titleAccent="es para ti si..."
          className="mx-auto"
        />

        <ul className="mx-auto mt-12 grid max-w-2xl gap-3 lg:mt-14">
          {ITEMS.map((item, i) => (
            <Reveal key={item} delay={i * 70} as="li">
              <div className="flex items-center gap-4 rounded-xl border border-ink/8 bg-beige-light px-5 py-4">
                <span className="surface-gold grid h-6 w-6 shrink-0 place-items-center rounded-full">
                  <Check className="h-3.5 w-3.5 text-ink" strokeWidth={3} aria-hidden />
                </span>
                <p className="text-[0.98rem] leading-snug text-ink/80 text-pretty">{item}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
