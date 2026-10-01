import { GraduationCap, Repeat, HeartHandshake, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  { icon: GraduationCap, title: "Aprende", text: "Desde cero." },
  { icon: Repeat, title: "Practica", text: "Con metodología paso a paso." },
  { icon: HeartHandshake, title: "Atrae", text: "Más clientas." },
  { icon: TrendingUp, title: "Factura", text: "Convierte tu habilidad en negocio." },
];

/** Franja beige de cuatro columnas que corta el negro justo tras el hero. */
export default function BenefitsBar() {
  return (
    <section className="bg-beige-light">
      <div className="mx-auto grid max-w-[88rem] grid-cols-2 gap-x-6 gap-y-10 px-5 py-14 sm:px-8 lg:grid-cols-4 lg:gap-x-0 lg:py-16">
        {ITEMS.map(({ icon: Icon, title, text }, i) => (
          <Reveal
            key={title}
            delay={i * 90}
            className={`flex flex-col items-center px-2 text-center lg:px-8 ${
              i > 0 ? "lg:border-l lg:border-ink/10" : ""
            }`}
          >
            <Icon className="h-7 w-7 text-gold-deep" strokeWidth={1.3} aria-hidden />
            <h3 className="mt-4 text-[0.72rem] font-semibold tracking-[0.3em] text-ink uppercase">
              {title}
            </h3>
            <p className="mt-2 max-w-[14rem] text-[0.85rem] leading-snug text-ink/60 text-pretty">
              {text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
