"use client";

import { useEffect, useState } from "react";
import { Lock, Menu, X } from "lucide-react";
import { courseData, navLinks } from "@/data/course";
import Logo from "./Logo";

/**
 * Header sticky. Transparente sobre el hero y con fondo sólido + filete
 * dorado en cuanto el usuario hace scroll. En móvil, menú hamburguesa.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const checkoutHref = courseData.checkoutUrl || "#precio";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Con el menú abierto el fondo no debe poder desplazarse.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled || open
          ? "border-b border-gold/15 bg-ink/92 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[88rem] items-center justify-between gap-6 px-5 sm:px-8 lg:h-24">
        <a href="#inicio" className="shrink-0" aria-label={courseData.name}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex xl:gap-9" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[0.82rem] text-beige/75 transition-colors duration-300 hover:text-beige-light"
            >
              {link.label}
              <span className="surface-gold absolute -bottom-1.5 left-0 h-px w-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={checkoutHref}
            {...(courseData.checkoutUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="surface-gold hidden items-center gap-2 rounded-full px-6 py-3 text-[0.7rem] font-semibold tracking-[0.16em] text-ink uppercase shadow-[0_14px_35px_-16px_rgba(212,168,79,0.9)] transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light sm:inline-flex"
          >
            <Lock className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden />
            Quiero mi acceso
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold-light transition-colors duration-300 hover:border-gold hover:bg-gold/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" strokeWidth={1.6} /> : <Menu className="h-5 w-5" strokeWidth={1.6} />}
          </button>
        </div>
      </div>

      {/* Panel móvil */}
      <div
        id="menu-movil"
        className={`overflow-hidden border-t border-gold/10 bg-ink/97 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-6 sm:px-8" aria-label="Principal móvil">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-gold/8 py-3.5 text-[0.95rem] text-beige/80 transition-colors duration-200 hover:text-gold-light"
            >
              {link.label}
            </a>
          ))}
          <a
            href={checkoutHref}
            {...(courseData.checkoutUrl ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            onClick={() => setOpen(false)}
            className="surface-gold mt-5 inline-flex items-center justify-center gap-2 rounded-full px-6 py-4 text-[0.75rem] font-semibold tracking-[0.16em] text-ink uppercase"
          >
            <Lock className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden />
            Quiero mi acceso
          </a>
        </nav>
      </div>
    </header>
  );
}
