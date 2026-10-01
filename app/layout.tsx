import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

/* Titulares editoriales + cuerpo neutro. Ambas variables, self-hosted por
   next/font: cero peticiones a Google y cero layout shift. */
const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://pestanasquefacturan.com";
const TITLE = "Pestañas que Facturan | Aprende, consigue clientas y construye tu negocio";
const DESCRIPTION =
  "Aprende técnicas profesionales de pestañas y descubre cómo convertir tu habilidad en un negocio.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Pestañas que Facturan",
  keywords: [
    "curso de pestañas",
    "extensiones de pestañas",
    "lashista",
    "negocio de belleza",
    "emprender desde casa",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: "Pestañas que Facturan",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/curso-pestanas-que-facturan.png",
        width: 1536,
        height: 1024,
        alt: "Curso Pestañas que Facturan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/curso-pestanas-que-facturan.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} h-full antialiased`}>
      {/* pb-24 en móvil: hueco para la barra CTA fija. */}
      <body className="flex min-h-full flex-col pb-24 lg:pb-0">
        {/*
          Sin JavaScript el revelado por scroll nunca llega a ejecutarse, así
          que se neutraliza con CSS. <noscript> solo se aplica con JS
          desactivado, por lo que no provoca desajuste de hidratación.
        */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
