/* =========================================================================
 * PESTAÑAS QUE FACTURAN — Fuente única de contenido editable.
 *
 * Todo lo comercial vive aquí. Los componentes nunca escriben texto de venta
 * a mano: lo leen de este archivo. Para cambiar precio, checkout, video,
 * testimonios, bonos o FAQ, edita SOLO este archivo.
 *
 * Los valores entre {{LLAVES}} son placeholders pendientes de confirmar.
 * Mientras contengan {{...}} la landing los muestra como "pendiente" en vez
 * de publicar información inventada.
 * ========================================================================= */

/** URL del checkout/pasarela de pago. La usan TODOS los botones principales. */
export const CHECKOUT_URL = "";

/** URL del video de ventas (MP4/HLS directo, o embed de YouTube/Vimeo). */
export const VSL_VIDEO_URL = "";

/** Imagen de portada del VSL (ruta en /public o URL absoluta). */
export const VSL_POSTER = "";

/** true = reproducir automáticamente SIN sonido al cargar. Nunca con audio. */
export const VSL_AUTOPLAY_MUTED = false;

export type Module = {
  id: string;
  number: string;
  title: string;
  /** Puntos del módulo. Vacío = la landing no muestra contenido inventado. */
  lessons: string[];
};

export type Bonus = {
  id: string;
  number: string;
  name: string;
  /** Línea secundaria opcional bajo el nombre. */
  subtitle?: string;
  description: string;
  /** Ruta de imagen en /public. Vacío = mockup placeholder elegante. */
  mockup: string;
  /** Ej. "US$97". Vacío = no se muestra valor. */
  value: string;
};

export type Testimonial = {
  id: string;
  name: string;
  city: string;
  rating: number;
  quote: string;
  /** Ruta de foto en /public. Vacío = avatar con inicial. */
  photo: string;
};

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const courseData = {
  name: "Pestañas que Facturan",
  tagline: "Convierte tu talento en un negocio rentable y crea la libertad que estás buscando.",
  price: 197,
  currency: "USD",
  /** Etiqueta ya formateada que se pinta en pantalla. */
  priceLabel: "US$197",
  checkoutUrl: CHECKOUT_URL,
  vslUrl: VSL_VIDEO_URL,
  vslPoster: VSL_POSTER,
  vslAutoplayMuted: VSL_AUTOPLAY_MUTED,

  /** Nº de alumnas. Dejar vacío o con {{...}} oculta la cifra automáticamente. */
  students: "{{NUMERO_ALUMNAS}}",

  /** Condiciones de garantía. Pendiente de confirmar: no inventar días. */
  guarantee: "{{GARANTIA}}",

  /** Lo que incluye la oferta. Solo elementos confirmados. */
  offerItems: [
    {
      id: "curso",
      title: "Curso Pestañas que Facturan",
      description: "El programa completo, paso a paso, de la técnica al negocio.",
    },
    {
      id: "bonos",
      title: "Bonos",
      description: "{{BONOS_RESUMEN}}",
    },
    {
      id: "acceso",
      title: "Acceso",
      description: "{{ACCESO_RESUMEN}}",
    },
    {
      id: "comunidad",
      title: "Comunidad y soporte",
      description: "{{COMUNIDAD_RESUMEN}}",
    },
  ],

  modules: [
    { id: "m1", number: "01", title: "Fundamentos de las pestañas", lessons: [] },
    { id: "m2", number: "02", title: "Técnicas profesionales", lessons: [] },
    { id: "m3", number: "03", title: "Diseño y estilos", lessons: [] },
    { id: "m4", number: "04", title: "Captación de clientas", lessons: [] },
    { id: "m5", number: "05", title: "Marketing para Lashistas", lessons: [] },
    { id: "m6", number: "06", title: "Ventas y precios", lessons: [] },
    { id: "m7", number: "07", title: "Construye tu negocio", lessons: [] },
  ] satisfies Module[],

  bonuses: [
    {
      id: "b1",
      number: "01",
      name: "Comunidad VIP",
      description: "Un espacio exclusivo para seguir aprendiendo, compartir avances y mantenerte conectada.",
      mockup: "/bono 1.png",
      value: "",
    },
    {
      id: "b2",
      number: "02",
      name: "Finanzas para Lashistas",
      description: "Una guía para organizar mejor las finanzas de tu negocio y tomar decisiones con mayor claridad.",
      mockup: "/bono 2.png",
      value: "",
    },
    {
      id: "b3",
      number: "03",
      name: "Catálogo Maestro para Lashistas",
      description: "Un recurso de referencia para presentar tus servicios de forma profesional.",
      mockup: "/bono 3.png",
      value: "",
    },
    {
      id: "b4",
      number: "04",
      name: "Content Pro",
      subtitle: "Fotografía que Vende",
      description: "Aprende a presentar visualmente tu trabajo para crear contenido más profesional.",
      mockup: "/bono 4.png",
      value: "",
    },
  ] satisfies Bonus[],

  testimonials: [
    { id: "t1", name: "{{NOMBRE_1}}", city: "{{CIUDAD_1}}", rating: 5, quote: "{{TESTIMONIO_1}}", photo: "/testimonio.jpeg" },
    { id: "t2", name: "{{NOMBRE_2}}", city: "{{CIUDAD_2}}", rating: 5, quote: "{{TESTIMONIO_2}}", photo: "/testimonio 2.jpeg" },
    { id: "t3", name: "{{NOMBRE_3}}", city: "{{CIUDAD_3}}", rating: 5, quote: "{{TESTIMONIO_3}}", photo: "/testimonio 3.jpeg" },
  ] satisfies Testimonial[],

  faqs: [
    {
      id: "f1",
      question: "¿Necesito experiencia previa?",
      answer:
        "No. El curso está diseñado para que puedas empezar desde cero, y también para que perfecciones tu técnica si ya trabajas con pestañas.",
    },
    {
      id: "f2",
      question: "¿El curso es completamente online?",
      answer:
        "Sí. Es un curso 100% online: avanzas desde donde estés, a tu propio ritmo y desde cualquier dispositivo.",
    },
    { id: "f3", question: "¿Cuánto tiempo tengo acceso?", answer: "{{RESPUESTA_ACCESO}}" },
    { id: "f4", question: "¿Qué materiales necesito?", answer: "{{RESPUESTA_MATERIALES}}" },
    { id: "f5", question: "¿Cómo recibiré mi acceso?", answer: "{{RESPUESTA_ENTREGA_ACCESO}}" },
    { id: "f6", question: "¿Obtendré certificado?", answer: "{{RESPUESTA_CERTIFICADO}}" },
    {
      id: "f7",
      question: "¿Puedo hacerlo si estoy comenzando desde cero?",
      answer:
        "Sí. El programa avanza paso a paso desde los fundamentos, para que aprendas la técnica y después aprendas a convertirla en un negocio.",
    },
    { id: "f8", question: "¿Qué métodos de pago están disponibles?", answer: "{{RESPUESTA_METODOS_PAGO}}" },
  ] satisfies Faq[],

  footer: {
    links: [
      { label: "Términos y condiciones", href: "#" },
      { label: "Política de privacidad", href: "#" },
      { label: "Contacto", href: "#" },
    ],
  },
};

/** Navegación del header. El href apunta a los id de cada <section>. */
export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "¿Qué aprenderás?", href: "#que-aprenderas" },
  { label: "Resultados", href: "#resultados" },
  { label: "Bonos", href: "#bonos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
];

/**
 * Un valor es "pendiente" si está vacío o si todavía lleva {{PLACEHOLDER}}.
 * Los componentes lo usan para no publicar datos sin confirmar.
 */
export function isPending(value: string | undefined | null): boolean {
  if (!value) return true;
  return /\{\{.*\}\}/.test(value.trim());
}
