"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ACCESS_PATH, courseData } from "@/data/course";

/**
 * Barra fija inferior en móvil: precio + botón.
 *
 * Aparece al pasar el hero y se oculta al llegar al footer para no tapar los
 * enlaces legales. El <body> lleva un padding inferior equivalente (ver
 * layout) para que la barra no cubra contenido.
 */
export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.85;
      const nearBottom =
        window.innerHeight + window.scrollY > document.body.scrollHeight - 260;
      setVisible(pastHero && !nearBottom);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-ink/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <div className="shrink-0">
          <span className="block text-[0.55rem] tracking-[0.28em] text-beige/50 uppercase">
            Pago único
          </span>
          <span className="font-display text-2xl leading-none font-semibold text-gold-gradient tabular-nums">
            {courseData.priceLabel}
          </span>
        </div>

        <Link
          href={ACCESS_PATH}
          tabIndex={visible ? 0 : -1}
          className="surface-gold inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[0.7rem] font-semibold tracking-[0.14em] text-ink uppercase"
        >
          Quiero mi acceso
          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
