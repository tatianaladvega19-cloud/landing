"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Play, Volume2 } from "lucide-react";

type Props = {
  /** MP4/HLS directo, o URL de YouTube/Vimeo (se detecta y se incrusta). */
  videoUrl?: string;
  /** Portada. Si está vacía se dibuja un placeholder elegante. */
  poster?: string;
  /** Autoplay SIEMPRE silenciado. Nunca se reproduce con audio sin clic. */
  autoplayMuted?: boolean;
  className?: string;
};

/**
 * Reproductor del VSL en ratio 16:9, marco dorado y glow sutil.
 *
 * Nada de video se descarga hasta que la usuaria pulsa Play: hasta entonces
 * solo hay una portada. Así el VSL no entra en la carga inicial ni compite
 * con el LCP, y no hay salto de layout (el contenedor ya reserva el 16:9).
 */
export default function VSLPlayer({
  videoUrl = "",
  poster = "",
  autoplayMuted = false,
  className = "",
}: Props) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const embedUrl = toEmbedUrl(videoUrl);
  const isEmbed = Boolean(embedUrl);
  const hasVideo = Boolean(videoUrl);

  const start = () => {
    setPlaying(true);
    // El <video> se monta en este mismo render; play() va tras el paint.
    requestAnimationFrame(() => videoRef.current?.play().catch(() => {}));
  };

  return (
    <div className={`relative ${className}`}>
      {/* Halo dorado difuso detrás del marco. */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(60%_60%_at_50%_50%,rgba(212,168,79,0.22),transparent_70%)] blur-2xl"
      />

      <div className="frame-gold glow-gold overflow-hidden rounded-[1.6rem] p-1.5 sm:rounded-[2rem] sm:p-2">
        <div className="relative aspect-video w-full overflow-hidden rounded-[1.1rem] bg-ink-soft sm:rounded-[1.5rem]">
          {playing && isEmbed && (
            <iframe
              src={`${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
              title="Video de presentación del curso"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          )}

          {playing && !isEmbed && hasVideo && (
            <video
              ref={videoRef}
              src={videoUrl}
              poster={poster || undefined}
              controls
              playsInline
              preload="metadata"
              autoPlay={autoplayMuted}
              muted={autoplayMuted}
              className="absolute inset-0 h-full w-full bg-black object-cover"
            />
          )}

          {!playing && (
            <button
              type="button"
              onClick={hasVideo ? start : undefined}
              aria-label={hasVideo ? "Reproducir el video" : "Video de presentación"}
              className="group absolute inset-0 h-full w-full cursor-pointer"
            >
              {poster ? (
                <Image
                  src={poster}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                  className="object-cover"
                />
              ) : (
                <PosterPlaceholder />
              )}

              {/* Velo para que el botón Play siempre tenga contraste. */}
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.25),rgba(5,5,5,0.55))] transition-opacity duration-500 group-hover:opacity-80" />

              <span className="absolute inset-0 grid place-items-center">
                <span className="pulse-ring grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full border border-gold-light/60 bg-ink/55 backdrop-blur-sm transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 sm:h-24 sm:w-24">
                  <span className="surface-gold grid h-[3.1rem] w-[3.1rem] place-items-center rounded-full sm:h-[4.2rem] sm:w-[4.2rem]">
                    <Play
                      className="ml-0.5 h-5 w-5 fill-ink text-ink sm:h-7 sm:w-7"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </span>
                </span>
              </span>

              {/* Barra inferior falsa: comunica "esto es un video" de un vistazo. */}
              <span className="absolute inset-x-0 bottom-0 flex items-center gap-3 px-4 pb-3 sm:px-6 sm:pb-5">
                <span className="h-[2px] flex-1 rounded-full bg-beige-light/25">
                  <span className="surface-gold block h-full w-[8%] rounded-full" />
                </span>
                <Volume2 className="h-4 w-4 shrink-0 text-beige-light/70" strokeWidth={1.6} aria-hidden />
              </span>

              {/* Aviso interno: solo en desarrollo, nunca al visitante. */}
              {!hasVideo && process.env.NODE_ENV !== "production" && (
                <span className="absolute top-3 left-3 rounded-full border border-gold/35 bg-ink/75 px-3 py-1.5 text-[0.58rem] font-semibold tracking-[0.22em] text-gold uppercase backdrop-blur-sm sm:top-5 sm:left-5">
                  [Falta URL del VSL]
                </span>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/** Portada por defecto mientras no haya imagen real: puro CSS, 0 KB. */
function PosterPlaceholder() {
  return (
    <span
      aria-hidden
      className="absolute inset-0 block bg-[radial-gradient(75%_75%_at_30%_25%,#241c12_0%,#120f0b_45%,#070605_100%)]"
    >
      <span className="absolute inset-0 bg-[conic-gradient(from_200deg_at_70%_30%,rgba(231,200,120,0.14),transparent_35%,rgba(212,168,79,0.1),transparent_72%)]" />
      <span className="grain" />
    </span>
  );
}

/** Convierte una URL de YouTube o Vimeo en su URL de incrustación. */
function toEmbedUrl(url: string): string {
  if (!url) return "";
  const youtube = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/,
  );
  if (youtube) return `https://www.youtube.com/embed/${youtube[1]}?rel=0`;

  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}`;

  return "";
}
