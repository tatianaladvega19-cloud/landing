"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

type Props = {
  /** Ruta del archivo en /public, tal cual (se codifica aquí). */
  src: string;
  /** Nombre para el texto accesible del botón. */
  label: string;
};

/**
 * Video de testimonio dentro de la propia tarjeta: sin modal ni autoplay.
 *
 * Antes de reproducir se ve el primer fotograma (fragmento `#t=0.1` con
 * `preload="metadata"`, sin imágenes extra) y un botón de play dorado. Al
 * pulsarlo se activan los controles nativos y se reproduce con sonido,
 * porque lo ha iniciado la visitante.
 */
export default function TestimonialVideo({ src, label }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const play = () => {
    setStarted(true);
    ref.current?.play().catch(() => {});
  };

  return (
    <div className="relative h-full w-full">
      <video
        ref={ref}
        src={`${encodeURI(src)}#t=0.1`}
        preload="metadata"
        playsInline
        controls={started}
        className="absolute inset-0 h-full w-full bg-black object-cover"
      />

      {!started && (
        <button
          type="button"
          onClick={play}
          aria-label={`Reproducir el testimonio de ${label}`}
          className="group absolute inset-0 grid h-full w-full cursor-pointer place-items-center"
        >
          <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.05),rgba(5,5,5,0.35))]" />
          <span className="relative grid h-16 w-16 place-items-center rounded-full border border-gold-light/60 bg-ink/55 backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
            <span className="surface-gold grid h-11 w-11 place-items-center rounded-full">
              <Play className="ml-0.5 h-4 w-4 fill-ink text-ink" strokeWidth={1.5} aria-hidden />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
