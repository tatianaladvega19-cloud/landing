import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Lock, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import { CHECKOUT_URL, courseData, whatsappUrl } from "@/data/course";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Tu acceso | Pestañas que Facturan",
  description: "Elige cómo quieres realizar tu inscripción a Pestañas que Facturan.",
};

/** Solo en desarrollo: avisa de la configuración pendiente, nunca al visitante. */
const IS_DEV = process.env.NODE_ENV !== "production";

const BUTTON_BASE =
  "group inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-4 text-[0.78rem] font-semibold tracking-[0.16em] uppercase transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light sm:py-[1.1rem] sm:text-[0.8rem]";

const BUTTON_SKIN = {
  gold: "surface-gold text-ink shadow-[0_18px_45px_-18px_rgba(212,168,79,0.75)] hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-18px_rgba(231,200,120,0.9)]",
  outline: "border border-gold/45 text-beige-light hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10",
};

/**
 * Botón hacia un destino externo (Hotmart o WhatsApp). Si la URL todavía no
 * está configurada en `data/course.ts`, se muestra desactivado: nunca se
 * inventa un enlace.
 */
function ExternalButton({
  href,
  variant,
  children,
  missing,
}: {
  href: string;
  variant: "gold" | "outline";
  children: React.ReactNode;
  /** Nombre de la constante a completar (solo se muestra en desarrollo). */
  missing: string;
}) {
  if (!href) {
    return (
      <div className="w-full">
        <span
          aria-disabled="true"
          className={`${BUTTON_BASE} ${BUTTON_SKIN[variant]} pointer-events-none cursor-not-allowed opacity-45`}
        >
          {children}
        </span>
        {IS_DEV && (
          <p className="mt-2 text-center text-[0.7rem] text-gold/70">
            [Falta {missing} en data/course.ts]
          </p>
        )}
      </div>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${BUTTON_BASE} ${BUTTON_SKIN[variant]}`}>
      {children}
      <ArrowRight
        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        strokeWidth={2.2}
        aria-hidden
      />
    </a>
  );
}

/**
 * /acceso — elección del método de inscripción: Hotmart (pago inmediato) o
 * transferencia coordinada por WhatsApp. Precio, checkout y WhatsApp salen de
 * `data/course.ts`; esta página no duplica ningún valor.
 */
export default function AccesoPage() {
  const transferUrl = whatsappUrl();
  const questionsUrl = whatsappUrl("");

  return (
    <>
      {/* Header: misma identidad que la landing, sin navegación. */}
      <header className="border-b border-gold/15 bg-ink">
        <div className="mx-auto flex h-20 max-w-[88rem] items-center justify-center px-5 sm:px-8 lg:h-24">
          <Link href="/" className="shrink-0" aria-label={`Volver a ${courseData.name}`}>
            <Logo />
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-ink">
          <div className="grain" aria-hidden />
          {/* Luz dorada muy tenue, solo para dar profundidad. */}
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(212,168,79,0.09),transparent_70%)]"
          />

          <div className="relative mx-auto max-w-[64rem] px-5 pt-14 pb-16 sm:px-8 lg:pt-20 lg:pb-20">
            {/* ---------- Encabezado ---------- */}
            <Reveal className="text-center">
              <span className="flex items-center justify-center gap-3 text-[0.62rem] font-semibold tracking-[0.42em] text-gold uppercase">
                <span className="hairline-gold h-px w-8 sm:w-12" />
                Inscripción
                <span className="hairline-gold h-px w-8 sm:w-12" />
              </span>

              <h1 className="mt-5 font-display text-[2.3rem] leading-[1.05] font-medium text-balance text-beige-light sm:text-[3.2rem] lg:text-[3.6rem]">
                Tu acceso está <span className="text-gold-gradient italic">a un paso</span>
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-[0.98rem] leading-relaxed text-beige/70 text-pretty sm:text-[1.05rem]">
                Elige cómo quieres realizar tu inscripción a {courseData.name}.
              </p>

              <div className="mx-auto mt-8 inline-flex flex-col items-center rounded-2xl border border-gold/20 bg-ink-soft px-8 py-5">
                <span className="font-display text-[1.15rem] text-beige-light italic">{courseData.name}</span>
                <span className="mt-1 font-display text-[2.6rem] leading-none font-semibold text-gold-gradient tabular-nums">
                  {courseData.priceLabel}
                </span>
                <span className="mt-2 text-[0.64rem] tracking-[0.32em] text-beige/55 uppercase">Pago único</span>
              </div>
            </Reveal>

            {/* ---------- Dos métodos de pago, mismo peso visual ---------- */}
            <div className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
              {/* Hotmart */}
              <Reveal delay={80} className="h-full">
                <article className="frame-gold relative h-full overflow-hidden rounded-[1.6rem] p-px">
                  <div className="flex h-full flex-col rounded-[1.55rem] bg-ink-soft px-6 py-8 text-center sm:px-9 sm:py-10">
                    <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-gold/45 bg-gold/10">
                      <Zap className="h-5 w-5 text-gold-light" strokeWidth={1.5} aria-hidden />
                    </span>
                    <h2 className="mt-5 text-[0.74rem] font-semibold tracking-[0.32em] text-gold uppercase">
                      Pago inmediato
                    </h2>
                    <p className="mx-auto mt-4 max-w-xs text-[0.95rem] leading-relaxed text-beige/75 text-pretty">
                      Realiza tu inscripción de forma rápida y segura mediante Hotmart.
                    </p>

                    <p className="mt-6 font-display text-[2.4rem] leading-none font-semibold text-gold-gradient tabular-nums">
                      {courseData.priceLabel}
                    </p>
                    <p className="mt-2 text-[0.64rem] tracking-[0.32em] text-beige/55 uppercase">Pago único</p>

                    <div className="mt-auto pt-8">
                      <ExternalButton href={CHECKOUT_URL} variant="gold" missing="CHECKOUT_URL">
                        Pagar ahora
                      </ExternalButton>
                    </div>
                  </div>
                </article>
              </Reveal>

              {/* Transferencia por WhatsApp */}
              <Reveal delay={160} className="h-full">
                <article className="relative h-full overflow-hidden rounded-[1.6rem] border border-gold/30">
                  <div className="flex h-full flex-col rounded-[1.55rem] bg-ink-soft px-6 py-8 text-center sm:px-9 sm:py-10">
                    <span className="relative mx-auto grid h-12 w-12 place-items-center rounded-full border border-gold/45 bg-gold/10">
                      <MessageCircle className="h-5 w-5 text-gold-light" strokeWidth={1.5} aria-hidden />
                      {/* Indicador discreto de WhatsApp */}
                      <span
                        aria-hidden
                        className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-ink-soft bg-[#25D366]"
                      />
                    </span>
                    <h2 className="mt-5 text-[0.74rem] font-semibold tracking-[0.32em] text-gold uppercase">
                      Pago por transferencia
                    </h2>
                    <p className="mx-auto mt-4 max-w-xs text-[0.95rem] leading-relaxed text-beige/75 text-pretty">
                      ¿Prefieres realizar el pago mediante transferencia bancaria? Habla directamente con
                      nuestro equipo y recibe los datos para completar tu inscripción.
                    </p>

                    <p className="mt-6 flex items-center justify-center gap-2 text-[0.7rem] tracking-[0.2em] text-beige/55 uppercase">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                      Atención por WhatsApp
                    </p>

                    <div className="mt-auto pt-8">
                      <ExternalButton href={transferUrl} variant="outline" missing="WHATSAPP_NUMBER">
                        Hablar por WhatsApp
                      </ExternalButton>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>

            {/* ---------- Confianza ---------- */}
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 text-[0.7rem] tracking-[0.1em] text-beige/55 uppercase">
                <span className="flex items-center gap-2">
                  <Lock className="h-3.5 w-3.5 text-gold" strokeWidth={2} aria-hidden />
                  Acceso seguro
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" strokeWidth={2} aria-hidden />
                  Pago protegido
                </span>
              </div>
            </Reveal>

            {/* ---------- Cierre ---------- */}
            <Reveal delay={240}>
              <div className="mx-auto mt-14 max-w-md border-t border-gold/12 pt-10 text-center">
                <p className="font-display text-[1.35rem] leading-snug text-beige-light text-balance sm:text-[1.5rem]">
                  ¿Tienes alguna duda antes de inscribirte?
                </p>
                <div className="mx-auto mt-6 max-w-xs">
                  <ExternalButton href={questionsUrl} variant="outline" missing="WHATSAPP_NUMBER">
                    Escribir al equipo
                  </ExternalButton>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
