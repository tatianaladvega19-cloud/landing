import { Check, Lock, ShieldCheck } from "lucide-react";
import {
  courseData,
  coursePrice,
  formatUSD,
  totalBonusValue,
  totalReceivedValue,
} from "@/data/course";
import CTAButton from "./CTAButton";

/**
 * Tarjeta de oferta (columna derecha de la sección de bonos):
 * qué recibes → valor total → tu inversión → duración del acceso → CTA.
 *
 * El valor total es la suma de componentes (curso + bonos), NO un precio
 * anterior: por eso se desglosa y nunca se usa "antes/ahora", "precio
 * normal" ni "ahorras". Lleva id="precio": es el destino de todos los CTA.
 */
export default function Pricing() {
  const count = courseData.bonuses.length;

  return (
    <div
      id="precio"
      className="frame-gold relative overflow-hidden rounded-[1.8rem] p-px shadow-[0_30px_70px_-40px_rgba(5,5,5,0.7)] sm:rounded-[2.2rem]"
    >
      <div className="relative rounded-[1.75rem] bg-ink px-6 py-10 text-center sm:rounded-[2.15rem] sm:px-10">
        {/* Encabezado */}
        <span className="flex items-center justify-center gap-3 text-[0.62rem] font-semibold tracking-[0.42em] text-gold uppercase">
          <span className="hairline-gold h-px w-8 sm:w-12" />
          Tu oferta
          <span className="hairline-gold h-px w-8 sm:w-12" />
        </span>
        <h2 className="mt-5 font-display text-[1.9rem] leading-snug font-medium text-balance sm:text-[2.1rem]">
          <span className="text-gold-gradient italic">{courseData.name}</span>
        </h2>
        <p className="mt-1 text-[0.7rem] font-semibold tracking-[0.3em] text-beige/60 uppercase">
          Curso + {count} bonos
        </p>

        {/* Valor total (suma, no precio anterior) */}
        <div className="mt-7 border-t border-gold/15 pt-6">
          <p className="text-[0.6rem] font-semibold tracking-[0.32em] text-gold uppercase">
            Valor de todo lo que recibes
          </p>
          <p className="mt-2 font-display text-[1.5rem] leading-none text-beige/45 tabular-nums line-through decoration-gold/60 decoration-1">
            {formatUSD(totalReceivedValue)}
          </p>
          <p className="mt-2 text-[0.68rem] tracking-[0.08em] text-beige/45 tabular-nums">
            Curso {formatUSD(coursePrice)} · Bonos {formatUSD(totalBonusValue)}
          </p>
        </div>

        {/* Inversión: el foco */}
        <div className="mt-6">
          <p className="text-[0.62rem] font-semibold tracking-[0.38em] text-beige-light uppercase">
            Tu inversión
          </p>
          <p className="mt-3 flex items-start justify-center gap-2">
            <span className="mt-2 font-display text-2xl text-gold-light sm:mt-3 sm:text-3xl">US$</span>
            <span className="font-display text-[5.2rem] leading-[0.85] font-semibold text-gold-gradient tabular-nums sm:text-[6rem]">
              {coursePrice}
            </span>
          </p>
          <p className="mt-3 text-[0.68rem] font-semibold tracking-[0.3em] text-beige/70 uppercase">
            Curso + {count} bonos
          </p>
          <p className="mt-1 text-[0.66rem] tracking-[0.32em] text-beige/50 uppercase">Pago único</p>
        </div>

        {/* Duración de cada acceso: dos condiciones distintas */}
        <ul className="mx-auto mt-7 grid max-w-sm gap-2 rounded-xl border border-gold/20 bg-gold/[0.05] px-4 py-3.5 text-left">
          {courseData.access.map((a) => (
            <li key={a.label} className="flex items-center gap-3 text-[0.88rem]">
              <Check className="h-4 w-4 shrink-0 text-gold-light" strokeWidth={2.4} aria-hidden />
              <span className="text-beige/85">{a.label}</span>
              <span aria-hidden className="h-px flex-1 border-t border-dashed border-gold/20" />
              <span className="font-semibold text-gold-light">{a.value}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <CTAButton shimmer className="w-full">
            Quiero mi acceso
          </CTAButton>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.68rem] tracking-[0.1em] text-beige/55 uppercase">
          <span className="flex items-center gap-2">
            <Lock className="h-3.5 w-3.5 text-gold" strokeWidth={2} aria-hidden />
            Acceso seguro
          </span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" strokeWidth={2} aria-hidden />
            Pago protegido
          </span>
        </div>
      </div>
    </div>
  );
}
