import { Plus, BookOpen, Gift, KeyRound, MessagesSquare } from "lucide-react";
import { courseData, isPending } from "@/data/course";
import PendingNote from "./PendingNote";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS = [BookOpen, Gift, KeyRound, MessagesSquare];

/** Transición antes del precio: la suma de todo lo que entra en la oferta. */
export default function Offer() {
  const items = courseData.offerItems;

  return (
    <section id="oferta" className="bg-ink">
      <div className="mx-auto max-w-[80rem] px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeading
          label="La oferta"
          title="Todo lo que necesitas"
          titleAccent="para comenzar."
          className="mx-auto"
        />

        <Reveal className="mt-14 flex flex-col items-stretch gap-3 lg:mt-16 lg:flex-row lg:items-stretch">
          {items.map((item, i) => {
            const Icon = ICONS[i] ?? BookOpen;
            const noDesc = isPending(item.description);

            return (
              <div key={item.id} className="contents">
                <article className="flex-1 rounded-2xl border border-gold/18 bg-[linear-gradient(160deg,rgba(231,200,120,0.07),rgba(5,5,5,0.25))] p-6 text-center transition-colors duration-500 hover:border-gold/40">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-gold/35 bg-gold/8">
                    <Icon className="h-5 w-5 text-gold-light" strokeWidth={1.4} aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-lg leading-snug text-beige-light text-pretty">
                    {item.title}
                  </h3>
                  <div className="mt-2.5 flex justify-center">
                    {noDesc ? (
                      <PendingNote token={item.description.replace(/[{}]/g, "")} />
                    ) : (
                      <p className="text-[0.85rem] leading-relaxed text-beige/65 text-pretty">
                        {item.description}
                      </p>
                    )}
                  </div>
                </article>

                {i < items.length - 1 && (
                  <span
                    aria-hidden
                    className="mx-auto grid h-8 w-8 shrink-0 place-items-center self-center rounded-full border border-gold/30 text-gold"
                  >
                    <Plus className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                )}
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
