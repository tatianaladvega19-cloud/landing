import { Check, Lock } from "lucide-react";
import { courseData, coursePrice, formatUSD } from "@/data/course";
import CTAButton from "./CTAButton";
import Reveal from "./Reveal";
import VSLPlayer from "./VSLPlayer";

const BENEFITS = [
  "Aprende técnicas profesionales",
  "Atrae y fideliza clientas",
  "Aprende a cobrar y vender tus servicios",
  "Construye tu propio negocio",
];

/**
 * Hero: ~40% texto / ~60% video en desktop, con el VSL visible sin scroll.
 *
 * El VSL se renderiza UNA sola vez. En móvil/tablet sigue el orden natural
 * del documento (titular → VSL → bloque de conversión → beneficios → CTA);
 * en desktop el grid lo manda a la columna derecha ocupando ambas filas.
 *
 * El espaciado está ajustado para que el CTA entre en la
 * primera pantalla: es lo que decide la conversión.
 */
export default function Hero() {
  return (
    <section id="inicio" className="hero-ambient relative isolate overflow-hidden">
      <div className="grain" aria-hidden />

      <div className="relative mx-auto grid max-w-[88rem] gap-y-10 px-5 pt-28 pb-20 sm:px-8 lg:min-h-screen lg:grid-cols-[minmax(0,40fr)_minmax(0,60fr)] lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-10 lg:gap-y-0 lg:pt-28 lg:pb-16">
        {/* ---------- Titular (fila 1, columna izquierda) ---------- */}
        <div className="lg:col-start-1 lg:row-start-1 lg:self-end">
          <Reveal>
            <span className="flex items-center gap-3 text-[0.62rem] font-semibold tracking-[0.42em] text-beige/70 uppercase">
              Curso online
              <span className="hairline-gold h-px w-14 sm:w-20" />
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-5 font-display text-[2.9rem] leading-[0.95] font-medium text-beige-light sm:text-[4rem] lg:text-[3.9rem] xl:text-[4.6rem]">
              Pestañas que
              <br />
              <span className="text-gold-gradient italic">Facturan</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-5 max-w-xl font-display text-xl leading-snug text-beige-light/95 text-pretty sm:text-2xl lg:text-[1.4rem]">
              Convierte tu talento en un negocio rentable y crea la libertad que estás buscando.
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-4 max-w-xl text-[0.92rem] leading-relaxed text-beige/65 text-pretty">
              Aprende paso a paso las técnicas profesionales para trabajar con pestañas, atraer
              clientas y convertir tu habilidad en una fuente de ingresos.
            </p>
          </Reveal>
        </div>

        {/* ---------- VSL + bloque de conversión (móvil: tras la descripción. Desktop: columna derecha) ---------- */}
        <Reveal delay={100} className="lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
          <VSLPlayer
            videoUrl={courseData.vslUrl}
            poster={courseData.vslPoster}
            autoplayMuted={courseData.vslAutoplayMuted}
          />

          <div className="mx-auto mt-7 max-w-2xl text-center">
            <p className="flex items-center justify-center gap-3 text-[0.64rem] font-semibold tracking-[0.24em] whitespace-nowrap text-gold uppercase sm:tracking-[0.36em]">
              <span aria-hidden className="hidden h-px w-12 bg-gold/40 sm:block" />
              Mira el video hasta el final
              <span aria-hidden className="hidden h-px w-12 bg-gold/40 sm:block" />
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-beige-light/85 text-pretty">
              En pocos minutos descubrirás cómo convertir tu habilidad en pestañas en un servicio
              profesional y empezar a construir un negocio alrededor de ella.
            </p>
            <p className="mt-4 text-[0.66rem] font-semibold tracking-[0.16em] text-beige/55 uppercase sm:tracking-[0.24em]">
              <span className="whitespace-nowrap">Curso + {courseData.bonuses.length} bonos</span>
              <span className="mx-2 text-gold/60">·</span>
              <span className="whitespace-nowrap">{formatUSD(coursePrice)}</span>
              <span className="mx-2 text-gold/60">·</span>
              <span className="whitespace-nowrap">Acceso inmediato</span>
            </p>
          </div>
        </Reveal>

        {/* ---------- Beneficios + CTA (fila 2, columna izquierda) ---------- */}
        <div className="lg:col-start-1 lg:row-start-2 lg:self-start lg:pt-7">
          <Reveal delay={220}>
            <ul className="grid gap-x-6 gap-y-3 border-t border-gold/12 pt-7 sm:grid-cols-2">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-gold/50 bg-gold/10">
                    <Check className="h-3 w-3 text-gold-light" strokeWidth={3} aria-hidden />
                  </span>
                  <span className="text-[0.88rem] leading-snug text-beige/85">{benefit}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-8">
              <CTAButton shimmer className="w-full sm:w-auto">
                Quiero mi acceso ahora
              </CTAButton>
              <p className="mt-4 flex items-center gap-2 text-[0.72rem] tracking-[0.1em] text-beige/55 uppercase">
                <Lock className="h-3.5 w-3.5 text-gold" strokeWidth={2} aria-hidden />
                Acceso seguro · Pago protegido
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
