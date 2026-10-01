"use client";

import { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import { courseData } from "@/data/course";
import Logo from "./Logo";

/**
 * Header de conversión: logo a la izquierda y un único CTA a la derecha.
 * Sin navegación. Transparente sobre el hero y con fondo sólido + filete
 * dorado en cuanto el usuario hace scroll.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const checkoutHref = courseData.checkoutUrl || "#precio";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? "border-b border-gold/15 bg-ink/92 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[88rem] items-center justify-between gap-4 px-5 sm:px-8 lg:h-24">
        <a href="#inicio" className="shrink-0" aria-label={courseData.name}>
          <Logo />
        </a>

        <a
          href={checkoutHref}
          {...(courseData.checkoutUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="surface-gold inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.62rem] font-semibold tracking-[0.14em] text-ink uppercase shadow-[0_14px_35px_-16px_rgba(212,168,79,0.9)] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light sm:px-6 sm:py-3 sm:text-[0.7rem] sm:tracking-[0.16em]"
        >
          <Lock className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden />
          Quiero mi acceso
        </a>
      </div>
    </header>
  );
}
