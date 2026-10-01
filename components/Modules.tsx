"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { courseData } from "@/data/course";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Temario en acordeón. Los títulos viven en `courseData.modules`; si un
 * módulo todavía no tiene lecciones cargadas, la fila no se despliega en vez
 * de mostrar contenido inventado.
 */
export default function Modules() {
  const [openId, setOpenId] = useState<string | null>(courseData.modules[0]?.id ?? null);

  return (
    <section id="modulos" className="bg-ink">
      <div className="mx-auto max-w-[62rem] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          label="Temario"
          title="Un método paso a paso,"
          titleAccent="módulo a módulo."
          className="mx-auto"
        />

        <ul className="mt-14 divide-y divide-gold/12 border-y border-gold/12 lg:mt-16">
          {courseData.modules.map((mod, i) => {
            const isOpen = openId === mod.id;
            const hasDetail = mod.lessons.length > 0;

            return (
              <Reveal key={mod.id} delay={i * 60} as="li">
                <div className="group">
                  <button
                    type="button"
                    onClick={() => hasDetail && setOpenId(isOpen ? null : mod.id)}
                    aria-expanded={hasDetail ? isOpen : undefined}
                    aria-controls={hasDetail ? `modulo-${mod.id}` : undefined}
                    disabled={!hasDetail}
                    className="flex w-full items-center gap-5 py-6 text-left transition-colors duration-300 disabled:cursor-default sm:gap-8"
                  >
                    <span className="font-display text-2xl text-gold/45 tabular-nums transition-colors duration-300 group-hover:text-gold sm:text-3xl">
                      {mod.number}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-[0.58rem] font-semibold tracking-[0.34em] text-gold/70 uppercase">
                        Módulo {mod.number}
                      </span>
                      <span className="mt-1.5 block font-display text-lg leading-snug text-beige-light text-pretty sm:text-2xl">
                        {mod.title}
                      </span>
                    </span>

                    {hasDetail && (
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold/30 text-gold-light transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-gold group-hover:bg-gold/10">
                        <Plus
                          className={`h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                            isOpen ? "rotate-45" : ""
                          }`}
                          strokeWidth={1.8}
                          aria-hidden
                        />
                      </span>
                    )}
                  </button>

                  {hasDetail && (
                    <div
                      id={`modulo-${mod.id}`}
                      className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? "max-h-[40rem] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <ul className="space-y-2.5 pb-7 pl-[3.2rem] sm:pl-[4.6rem]">
                        {mod.lessons.map((lesson) => (
                          <li
                            key={lesson}
                            className="flex items-start gap-3 text-[0.88rem] leading-relaxed text-beige/70"
                          >
                            <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-gold" />
                            {lesson}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
