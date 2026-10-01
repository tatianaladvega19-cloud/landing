import { Star } from "lucide-react";
import { courseData, isPending } from "@/data/course";

const AVATARS = ["A", "M", "L", "V", "S"];

/**
 * Avatares + estrellas + frase de respaldo. La cifra de alumnas solo aparece
 * cuando `courseData.students` tiene un valor real (ver `isPending`).
 */
export default function SocialProof({ className = "" }: { className?: string }) {
  const showCount = !isPending(courseData.students);

  return (
    <div className={`flex flex-wrap items-center gap-x-5 gap-y-4 ${className}`}>
      <div className="flex -space-x-3">
        {AVATARS.map((initial, i) => (
          <span
            key={initial}
            style={{ zIndex: AVATARS.length - i }}
            className="grid h-11 w-11 place-items-center rounded-full border-2 border-gold/60 bg-[linear-gradient(145deg,#2a2017,#120e09)] font-display text-sm text-gold-light"
          >
            {initial}
          </span>
        ))}
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-1" aria-label="Valoración de 5 sobre 5 estrellas">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-4 w-4 fill-gold-light text-gold-light" strokeWidth={0} aria-hidden />
          ))}
        </div>
        <p className="mt-1.5 max-w-xs text-[0.82rem] leading-snug text-beige/75 text-pretty">
          {showCount && (
            <span className="font-semibold text-beige-light">+{courseData.students} mujeres. </span>
          )}
          Miles de mujeres están aprendiendo a convertir sus conocimientos en ingresos.
        </p>
      </div>
    </div>
  );
}
