/* =========================================================================
 * PESTAÑAS QUE FACTURAN — Fuente única de contenido editable.
 *
 * Todo lo comercial vive aquí. Los componentes nunca escriben texto de venta
 * a mano: lo leen de este archivo. Para cambiar precio, checkout, video,
 * testimonios, bonos o FAQ, edita SOLO este archivo.
 *
 * Regla: un campo VACÍO ("") no se muestra al visitante. Así la landing
 * nunca publica datos sin confirmar ni textos técnicos. Los comentarios
 * [EN MAYÚSCULAS] indican qué falta completar; al rellenar el campo, la
 * landing lo muestra automáticamente.
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
  /** Una línea visible bajo el título. */
  description: string;
  /** Puntos del módulo (acordeón). Vacío = la fila no se despliega. */
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
  /**
   * Valor individual/referencial del bono en USD (no es un precio anterior).
   * 0 = no se muestra valor.
   */
  value: number;
};

export type Testimonial = {
  id: string;
  /** Ruta de foto en /public. */
  image: string;
  /** Nombre de la alumna. Vacío = no se muestra. */
  name: string;
  /** Frase del testimonio. Vacío = no se muestra. */
  quote: string;
  /** Estrellas (0–5). 0 = no se muestran. */
  rating: number;
  /** Texto alternativo fiel a lo que muestra la foto. */
  alt: string;
};

export type ExpertStat = {
  /** Cifra tal cual se muestra, ej. "+700". */
  value: string;
  /** Ej. "Alumnas formadas". */
  label: string;
  /** true = cifra protagonista del bloque. */
  featured?: boolean;
};

export type Faq = {
  id: string;
  question: string;
  /** Vacío = la pregunta no se muestra hasta tener la respuesta real. */
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

  /**
   * Garantía (tarjeta junto a la oferta). Solo información confirmada:
   * 7 días para revisar el programa. No añadir condiciones de devolución
   * que no estén definidas.
   */
  guarantee: {
    days: 7,
    label: "Garantía de 7 días",
    title: "Compra con tranquilidad.",
    text: "Tienes 7 días para revisar el contenido del programa y comprobar si Pestañas que Facturan es para ti.",
    // [CONDICIONES DE DEVOLUCIÓN CONFIRMADAS — cómo solicitarla, qué cubre]
    // Vacío = no se muestra nada más que lo de arriba.
    guaranteeDetails: "",
  },

  /** Duración de cada acceso, mostrada dentro de la tarjeta de oferta. */
  access: [
    { label: "Curso en plataforma", value: "1 año" },
    { label: "Comunidad VIP", value: "De por vida" },
  ],

  /**
   * Lo que incluye la oferta (tarjeta de precio). Los bonos se añaden solos
   * desde `bonuses` y la duración desde `access`. Un elemento con
   * `description` vacía no se muestra.
   */
  offerItems: [
    {
      id: "curso",
      title: "Curso Pestañas que Facturan",
      description: "7 módulos, paso a paso, de la técnica al negocio.",
    },
    {
      id: "soporte",
      title: "Soporte",
      // [TIPO DE SOPORTE CONFIRMADO]
      description: "",
    },
  ],

  /**
   * Sección "Conoce a la experta". Datos reales proporcionados por la
   * experta; no añadir credenciales que no estén confirmadas.
   */
  expert: {
    label: "Conoce a la experta",
    title: "Aprende de alguien que convirtió su pasión por la belleza",
    titleAccent: "en una profesión.",
    name: "Tatiana Vega",
    role: "Micropigmentadora profesional · Empresaria · Formadora",
    photo: "/perfil2.jpeg",
    photoAlt: "Retrato profesional de Tatiana Vega",
    /** Párrafos de autoridad, en orden. */
    story: [
      "Más de 7 años de experiencia en la industria de la belleza, formación internacional en España, Colombia, Brasil, Costa Rica, Ecuador, Perú y Estados Unidos y más de 700 alumnas formadas.",
      "Fundadora de Vega Studio Beauty & Academy, Tatiana combina experiencia profesional, formación y visión empresarial para ayudar a otras mujeres a convertir sus habilidades en oportunidades reales de crecimiento.",
    ],
    /** `featured` = cifra protagonista (prueba de experiencia docente). */
    stats: [
      { value: "+7", label: "Años de experiencia" },
      { value: "+700", label: "Alumnas formadas", featured: true },
      { value: "7", label: "Países de formación internacional" },
    ] satisfies ExpertStat[],
    recognition: {
      label: "Reconocimiento profesional",
      text: "Ganadora de una copa de Volumen Ruso en Perú Lash 2024, Perú.",
    },
    /** Frase de cierre destacada. */
    authorityHeadline:
      "No solo enseña una técnica. Enseña desde la experiencia de haber construido una profesión, una empresa y una comunidad de profesionales.",
    /*
     * Otros datos confirmados (no se muestran para no alargar la sección):
     * Tecnóloga en Finanzas y Banca · Micropigmentadora · Estilista ·
     * Empresaria · Formadora.
     */
  },

  /** Fotos reales de formación presencial (sección de autoridad). */
  workshopPhotos: [
    {
      src: "/foto usar 1.jpeg",
      alt: "Grupo de participantes de un workshop presencial mostrando sus certificados",
    },
    {
      src: "/foto usar 3.jpeg",
      alt: "Demostración práctica durante un workshop mientras varias participantes observan",
    },
    {
      src: "/foto usar 4.jpeg",
      alt: "Participantes practicando en mesas de trabajo durante un workshop",
    },
    {
      src: "/foto usar 2.jpeg",
      alt: "Certificados de un workshop presencial",
    },
  ],

  modules: [
    {
      id: "m1",
      number: "01",
      title: "Fundamentos de las pestañas",
      description: "Las bases para empezar con seguridad, aunque partas de cero.",
      lessons: [],
    },
    {
      id: "m2",
      number: "02",
      title: "Técnicas profesionales",
      description: "Las técnicas profesionales para trabajar con pestañas.",
      lessons: [],
    },
    {
      id: "m3",
      number: "03",
      title: "Diseño y estilos",
      description: "Cómo elegir el diseño adecuado para cada tipo de ojo.",
      lessons: [],
    },
    {
      id: "m4",
      number: "04",
      title: "Captación de clientas",
      description: "Estrategias para atraer nuevas clientas.",
      lessons: [],
    },
    {
      id: "m5",
      number: "05",
      title: "Marketing para Lashistas",
      description: "Instagram, Facebook y contenido para mostrar tu trabajo.",
      lessons: [],
    },
    {
      id: "m6",
      number: "06",
      title: "Ventas y precios",
      description: "Cómo estructurar tus precios y presentar y vender tus servicios.",
      lessons: [],
    },
    {
      id: "m7",
      number: "07",
      title: "Construye tu negocio",
      description: "Cómo convertir tu servicio en un negocio.",
      lessons: [],
    },
  ] satisfies Module[],

  bonuses: [
    {
      id: "b1",
      number: "01",
      name: "Comunidad VIP",
      description:
        "No avanzas sola: un espacio exclusivo para seguir aprendiendo, compartir tus avances y mantenerte conectada.",
      mockup: "/bono 1.png",
      value: 97,
    },
    {
      id: "b2",
      number: "02",
      name: "Finanzas para Lashistas",
      description:
        "Ordena las finanzas de tu negocio para saber en qué se va tu dinero y tomar decisiones con claridad.",
      mockup: "/bono 2.png",
      value: 47,
    },
    {
      id: "b3",
      number: "03",
      name: "Catálogo Maestro para Lashistas",
      description:
        "Presenta tus servicios de forma profesional y transmite confianza desde el primer contacto.",
      mockup: "/bono 3.png",
      value: 37,
    },
    {
      id: "b4",
      number: "04",
      name: "Content Pro",
      subtitle: "Fotografía que Vende",
      description:
        "Fotografía tu trabajo de forma profesional para que tus resultados luzcan en redes.",
      mockup: "/bono 4.png",
      value: 67,
    },
  ] satisfies Bonus[],

  /*
   * Testimonios. Las frases son copy redactado para la landing a partir del
   * agradecimiento de cada alumna (no transcripciones literales): no añadir
   * etiquetas de "verificado" ni resultados económicos.
   */
  testimonials: [
    {
      id: "t1",
      image: "/testimonio.jpeg",
      name: "Clarisse Rojas",
      quote:
        "Me encantó el curso porque aprendí mucho más que la técnica. Ahora tengo más claridad para ofrecer mi servicio y empezar a verlo como un verdadero negocio.",
      rating: 5,
      alt: "Participante recibiendo su certificado de workshop",
    },
    {
      id: "t2",
      image: "/testimonio 2.jpeg",
      name: "Vicky Ordoñez",
      quote:
        "Estoy muy agradecida por todo lo aprendido. El curso me ayudó a mejorar mi técnica y, sobre todo, a tener más confianza para trabajar y ofrecer mis servicios.",
      rating: 5,
      alt: "Participante posando con su certificado de workshop",
    },
    {
      id: "t3",
      image: "/testimonio 3.jpeg",
      name: "Belen Jaramillo",
      quote:
        "Fue una experiencia increíble. Me llevo nuevos conocimientos, más seguridad y muchas herramientas para seguir creciendo en el mundo de las pestañas.",
      rating: 5,
      alt: "Participante recibiendo su certificado al terminar un workshop",
    },
  ] satisfies Testimonial[],

  /** Las preguntas sin respuesta confirmada no se muestran. */
  faqs: [
    {
      id: "f1",
      question: "¿Necesito experiencia previa?",
      answer:
        "No. El curso está diseñado para que puedas empezar desde cero, y también para que perfecciones tu técnica si ya trabajas con pestañas.",
    },
    {
      id: "f2",
      question: "¿El curso es online?",
      answer:
        "Sí. Es un curso 100% online: avanzas desde donde estés, a tu propio ritmo y desde cualquier dispositivo.",
    },
    {
      id: "f3",
      question: "¿Cuánto tiempo tengo acceso al curso?",
      answer:
        "Tendrás acceso a la plataforma de Pestañas que Facturan durante 1 año, para que puedas avanzar a tu propio ritmo y volver al contenido cuando lo necesites.",
    },
    {
      id: "f3b",
      question: "¿El acceso a la Comunidad VIP es de por vida?",
      answer:
        "Sí. Tu acceso a la Comunidad VIP es de por vida, para que puedas seguir formando parte de este espacio después de completar el curso.",
    },
    // [RESPUESTA REAL: materiales/kit necesarios para empezar]
    { id: "f4", question: "¿Qué necesito para comenzar?", answer: "" },
    // [RESPUESTA REAL: ¿incluye certificado? ¿de quién?]
    { id: "f5", question: "¿Obtengo certificado?", answer: "" },
    // [RESPUESTA REAL: cómo y cuándo llega el acceso tras pagar]
    { id: "f6", question: "¿Cómo recibo mi acceso?", answer: "" },
    // [RESPUESTA REAL: métodos de pago disponibles]
    { id: "f7", question: "¿Cómo puedo pagar?", answer: "" },
  ] satisfies Faq[],

  footer: {
    links: [
      { label: "Términos y condiciones", href: "#" },
      { label: "Política de privacidad", href: "#" },
      { label: "Contacto", href: "#" },
    ],
  },
};

/** Suma de los valores individuales de los bonos (se recalcula sola). */
export const totalBonusValue = courseData.bonuses.reduce((sum, b) => sum + b.value, 0);

/** Precio real del programa (no cambia: es lo que paga la clienta). */
export const coursePrice = courseData.price;

/**
 * Suma matemática de lo que recibe la clienta: curso + bonos.
 * Es un valor de referencia, NO un precio anterior: no presentarlo como
 * "antes" ni como descuento.
 */
export const totalReceivedValue = coursePrice + totalBonusValue;

/** Formato de importe en pantalla, ej. 97 → "US$97". */
export function formatUSD(amount: number): string {
  return `US$${amount.toLocaleString("en-US")}`;
}

/** true si el campo tiene contenido real que se puede publicar. */
export function hasValue(value: string | undefined | null): value is string {
  return Boolean(value && value.trim());
}
