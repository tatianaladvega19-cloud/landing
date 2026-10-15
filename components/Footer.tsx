import { courseData, SUPPORT_PHONE_DISPLAY, whatsappUrl } from "@/data/course";
import Logo from "./Logo";

export default function Footer() {
  const year = new Date().getFullYear();
  const supportUrl = whatsappUrl("");

  return (
    <footer className="border-t border-gold/12 bg-ink">
      <div className="mx-auto flex max-w-[88rem] flex-col items-center gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <Logo size="md" />

        {supportUrl && (
          <div className="flex flex-col items-center gap-1.5 lg:items-start lg:pt-4">
            <span className="text-[0.68rem] uppercase tracking-[0.18em] text-beige/40">Soporte</span>
            <a
              href={supportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.9rem] text-beige/75 transition-colors duration-300 hover:text-gold-light"
            >
              WhatsApp {SUPPORT_PHONE_DISPLAY}
            </a>
          </div>
        )}

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
