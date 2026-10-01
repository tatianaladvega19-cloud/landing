import {
  Brush,
  Eye,
  Sparkles,
  UserPlus,
  Share2,
  ShoppingBag,
  Tags,
  Briefcase,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const TOPICS = [
  { icon: Brush, title: "Técnica", text: "Aprende las bases y técnicas profesionales." },
  { icon: Eye, title: "Diseño", text: "Aprende a elegir diseños según cada tipo de ojo." },
  { icon: Sparkles, title: "Servicio", text: "Aprende a ofrecer una experiencia profesional." },
  { icon: UserPlus, title: "Clientas", text: "Aprende estrategias para atraer nuevas clientas." },
  { icon: Share2, title: "Redes", text: "Aprende a utilizar Instagram, Facebook y contenido." },
  { icon: ShoppingBag, title: "Ventas", text: "Aprende a presentar y vender tus servicios." },
  { icon: Tags, title: "Precios", text: "Aprende a estructurar tus precios." },
  { icon: Briefcase, title: "Negocio", text: "Aprende a convertir tu servicio en un negocio." },
];

/** Rejilla de 8 cards premium sobre negro. */
export default function WhatYouLearn() {
  return (
    <section id="que-aprenderas" className="relative isolate overflow-hidden bg-ink-soft">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_38rem_at_80%_0%,rgba(212,168,79,0.1),transparent_62%)]"
      />

      <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          label="Qué aprenderás"
          title="Todo lo que necesitas para empezar"
          titleAccent="y crecer."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {TOPICS.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 4) * 90}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-gold/15 bg-[linear-gradient(160deg,rgba(231,200,120,0.06),rgba(5,5,5,0.2))] p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-gold/45">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(22rem 14rem at 50% 0%, rgba(212,168,79,0.14), transparent 70%)",
                  }}
                />
                <span className="relative grid h-11 w-11 place-items-center rounded-xl border border-gold/35 bg-gold/8">
                  <Icon className="h-5 w-5 text-gold-light" strokeWidth={1.4} aria-hidden />
                </span>
                <h3 className="relative mt-5 text-[0.7rem] font-semibold tracking-[0.3em] text-gold uppercase">
                  {title}
                </h3>
                <p className="relative mt-2.5 text-[0.88rem] leading-relaxed text-beige/70 text-pretty">
                  {text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
