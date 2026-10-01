"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { courseData, isPending } from "@/data/course";
import PendingNote from "./PendingNote";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

/**
 * Acordeón de preguntas frecuentes. Las respuestas que todavía dependen de
 * una decisión comercial se muestran como pendientes, no inventadas.
 */
export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-beige-light">
      <div className="mx-auto max-w-[56rem] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          tone="light"
          label="Preguntas frecuentes"
          title="Resolvemos"
          titleAccent="tus dudas."
          className="mx-auto"
        />

        <ul className="mt-14 divide-y divide-ink/10 border-y border-ink/10 lg:mt-16">
          {courseData.faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            const pending = isPending(faq.answer);

            return (
              <Reveal key={faq.id} delay={i * 45} as="li">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${faq.id}`}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg leading-snug text-ink text-pretty transition-colors duration-300 group-hover:text-gold-deep sm:text-xl">
                      {faq.question}
                    </span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15 text-ink/70 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-gold group-hover:bg-gold/10 group-hover:text-gold-deep">
                      <Plus
                        className={`h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        strokeWidth={1.8}
                        aria-hidden
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-${faq.id}`}
                  role="region"
                  className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pr-14 pb-7">
                    {pending ? (
                      <PendingNote tone="light" token={faq.answer.replace(/[{}]/g, "")} />
                    ) : (
                      <p className="text-[0.92rem] leading-relaxed text-ink/65 text-pretty">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
