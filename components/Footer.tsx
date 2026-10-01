import { courseData } from "@/data/course";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gold/12 bg-ink">
      <div className="mx-auto flex max-w-[88rem] flex-col items-center gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <Logo size="md" />

        <nav aria-label="Legal">
          <ul className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8 lg:pt-4">
            {courseData.footer.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[0.82rem] text-beige/60 transition-colors duration-300 hover:text-gold-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-gold/8">
        <p className="mx-auto max-w-[88rem] px-5 py-6 text-center text-[0.72rem] tracking-[0.08em] text-beige/40 sm:px-8">
          © {year} {courseData.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
