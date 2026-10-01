import { Fragment } from "react";
import { Brush, UserPlus, ShoppingBag, Briefcase, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  { icon: Brush, label: "Técnica" },
  { icon: UserPlus, label: "Clientas" },
  { icon: ShoppingBag, label: "Ventas" },
  { icon: Briefcase, label: "Negocio" },
];

/** Franja beige compacta tras el hero: el recorrido del curso en una línea. */
export default function BenefitsBar() {
  return (
    <section className="border-b border-ink/10 bg-beige-light" aria-label="Qué cubre el curso">
      <Reveal className="mx-auto flex max-w-[60rem] flex-wrap items-center justify-center gap-x-3 gap-y-4 px-5 py-7 sm:gap-x-6 sm:px-8 lg:py-8">
        {ITEMS.map(({ icon: Icon, label }, i) => (
          <Fragment key={label}>
            {i > 0 && (
              <ChevronRight className="h-4 w-4 shrink-0 text-gold-deep/60" strokeWidth={1.6} aria-hidden />
            )}
            <span className="flex items-center gap-2.5">
              <Icon className="h-5 w-5 text-gold-deep" strokeWidth={1.4} aria-hidden />
              <span className="text-[0.68rem] font-semibold tracking-[0.26em] text-ink uppercase sm:text-[0.72rem] sm:tracking-[0.3em]">
                {label}
              </span>
            </span>
          </Fragment>
        ))}
      </Reveal>
    </section>
  );
}
