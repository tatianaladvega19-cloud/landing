import { ShieldCheck } from "lucide-react";
import { courseData, isPending } from "@/data/course";
import PendingNote from "./PendingNote";
import Reveal from "./Reveal";

/**
 * Garantía. El texto de condiciones vive en `courseData.guarantee`; mientras
 * sea un placeholder no se publican días ni condiciones inventadas.
 */
export default function Guarantee() {
  const pending = isPending(courseData.guarantee);

  return (
    <section id="garantia" className="bg-ink">
      <div className="mx-auto max-w-[52rem] px-5 py-20 sm:px-8 lg:py-24">
        <Reveal>
          <div className="flex flex-col items-center gap-7 rounded-[1.6rem] border border-gold/20 bg-[linear-gradient(160deg,rgba(231,200,120,0.08),rgba(5,5,5,0.3))] px-7 py-12 text-center sm:px-12">
            <span className="grid h-20 w-20 place-items-center rounded-full border border-gold/40 bg-gold/8">
              <ShieldCheck className="h-9 w-9 text-gold-light" strokeWidth={1.2} aria-hidden />
            </span>

            <h2 className="font-display text-[1.8rem] leading-snug font-medium text-beige-light text-balance sm:text-[2.4rem]">
              Tu inversión <span className="text-gold-gradient italic">está protegida.</span>
            </h2>

            {pending ? (
              <PendingNote token="GARANTIA" />
            ) : (
              <p className="max-w-xl text-[0.95rem] leading-relaxed text-beige/70 text-pretty">
                {courseData.guarantee}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
