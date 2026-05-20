import type { Lang } from "../lib/i18n";

export interface Project {
  id: number;
  title: string;
  client: string;
  description: Record<Lang, string>;
  problem: Record<Lang, string>;
  role: Record<Lang, string>;
  stack: string[];
  images: string[];
  result: Record<Lang, string>;
}

export const projects: Project[] = [
  {
    id: 4,
    title: "Dropanalizer",
    client: "SaaS — AI Product",
    description: {
      en: "Dropshippers lose money on ads without knowing why. Dropanalizer generates the landing page, tracks visitor behavior, and automatically suggests AI-powered improvements.",
      es: "Los dropshippers pierden dinero en publicidad sin saber por qué. Dropanalizer genera la landing, trackea el comportamiento del visitante y sugiere mejoras con IA automáticamente.",
    },
    problem: {
      en: "Dropshippers ran paid ads to generic product pages with no visibility into what was failing — no analytics, no iteration loop, no way to optimize without technical knowledge.",
      es: "Los dropshippers lanzaban anuncios a páginas de producto genéricas sin visibilidad sobre qué fallaba — sin analítica, sin ciclo de iteración, sin forma de optimizar sin conocimiento técnico.",
    },
    role: {
      en: "Full-Stack Developer — system architecture, AI pipeline (Claude API), landing page generation, behavioral tracking, analytics dashboard, and billing integration (Lemon Squeezy).",
      es: "Desarrollador Full-Stack — arquitectura del sistema, pipeline de IA (Claude API), generación de landing pages, tracking de comportamiento, dashboard de analíticas e integración de pagos (Lemon Squeezy).",
    },
    stack: [
      "Next.js 14",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Anthropic Claude API",
      "Cloudinary",
      "Tailwind CSS",
      "Framer Motion",
      "Recharts",
      "Lemon Squeezy",
      "Vercel",
      "Supabase",
    ],
    images: [
      "/images/dropanalizer/{3C56E09B-85F0-47B3-8F5B-B393B888D026} 1.png",
      "/images/dropanalizer/{95B9FA9B-DC5C-4BC8-B42C-8E1919DED675} 1.png",
      "/images/dropanalizer/{A706FA34-03BE-4389-80F0-768EE67E3B3F} 1.png",
      "/images/dropanalizer/{12DCB307-5230-4AC7-BC72-D2775571C234} 1.png",
      "/images/dropanalizer/{68F77257-3980-49D0-AFAD-AA4789D300BB} 1.png",
      "/images/dropanalizer/{49EE3520-A5D7-40BE-A6BC-7126369DAF12} 1.png",
    ],
    result: {
      en: "End-to-end SaaS that turns a product idea into a tracked, AI-optimized landing page in minutes. Append-only versioning preserves all iteration history. Lightweight fire-and-forget tracking keeps the public page fast.",
      es: "SaaS de extremo a extremo que convierte una idea de producto en una landing trackeada y optimizada con IA en minutos. El versionado append-only preserva todo el historial de iteraciones. El tracking ligero fire-and-forget mantiene la página pública rápida.",
    },
  },
  {
    id: 1,
    title: "Enersinc SAS",
    client: "Software Developer",
    description: {
      en: "Enterprise web application for the energy sector with AI-powered analytics and real-time data processing.",
      es: "Aplicación web empresarial para el sector energético con analítica potenciada por IA y procesamiento de datos en tiempo real.",
    },
    problem: {
      en: "Complex energy data analysis required manual processing, slow turnaround, and lacked predictive capabilities.",
      es: "El análisis complejo de datos energéticos requería procesamiento manual, tiempos lentos y carecía de capacidades predictivas.",
    },
    role: {
      en: "Full-Stack Developer — Frontend architecture, API design, AI integration, real-time features.",
      es: "Desarrollador Full-Stack — Arquitectura frontend, diseño de APIs, integración de IA, funcionalidades en tiempo real.",
    },
    stack: [
      "React",
      "Redux",
      "TypeScript",
      "Python",
      "Django",
      "WebSockets",
      "Docker",
      "PostgreSQL",
    ],
    images: [
      "/images/enersinc/1.png",
      "/images/enersinc/2.png",
      "/images/enersinc/3.png",
    ],
    result: {
      en: "Enhanced data analysis and user decision-making through AI-powered features with real-time feedback.",
      es: "Mejora en el análisis de datos y la toma de decisiones mediante funcionalidades de IA con retroalimentación en tiempo real.",
    },
  },
  {
    id: 5,
    title: "Growtek AI Solutions",
    client: "Freelance Full-Stack",
    description: {
      en: "Built and maintained scalable end-to-end systems integrating AI capabilities into real-world products through APIs, automation, and intelligent features.",
      es: "Construcción y mantenimiento de sistemas escalables de extremo a extremo integrando capacidades de IA en productos reales a través de APIs, automatización y funcionalidades inteligentes.",
    },
    problem: {
      en: "Clients needed AI capabilities embedded into their existing products without disrupting current workflows or requiring full rewrites.",
      es: "Los clientes necesitaban capacidades de IA integradas en sus productos existentes sin interrumpir los flujos actuales ni requerir reescrituras completas.",
    },
    role: {
      en: "Freelance Full-Stack Developer — system design, AI integration, frontend and backend development, architecture decisions.",
      es: "Desarrollador Full-Stack Freelance — diseño de sistemas, integración de IA, desarrollo frontend y backend, decisiones de arquitectura.",
    },
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
    ],
    images: ["/images/growtek/growtek.png"],
    result: {
      en: "Scalable AI-powered features delivered across multiple client products, improving development workflows and time-to-market.",
      es: "Funcionalidades escalables potenciadas por IA entregadas en múltiples productos de clientes, mejorando los flujos de desarrollo y el tiempo de lanzamiento.",
    },
  },
  {
    id: 2,
    title: "Guepardos",
    client: "Freelance Developer",
    description: {
      en: "Built a web platform for a logistics company, working from UI design in Figma to frontend-backend integration and implementing an authentication system in Python.",
      es: "Desarrollé una plataforma web para una empresa de logística, participando desde el diseño en Figma hasta la integración frontend-backend y la implementación de un sistema de autenticación en Python.",
    },
    problem: {
      en: "Manual WhatsApp-based order handling was slow, error-prone, and impossible to scale for a growing logistics operation.",
      es: "El manejo manual de pedidos por WhatsApp era lento, propenso a errores e imposible de escalar para una operación logística en crecimiento.",
    },
    role: {
      en: "Full-Stack Developer — UI/UX design in Figma, frontend implementation, backend integration, and authentication system in Python.",
      es: "Desarrollador Full-Stack — Diseño UI/UX en Figma, implementación frontend, integración backend y sistema de autenticación en Python.",
    },
    stack: [
      "Vue.js",
      "JavaScript",
      "Python",
      "CSS/SCSS",
      "Figma",
      "REST API",
    ],
    images: [
      "/images/guepardo/1.png",
      "/images/guepardo/2.png",
      "/images/guepardo/3.png",
      "/images/guepardo/4.png",
      "/images/guepardo/5.png",
      "/images/guepardo/6.png",
      "/images/guepardo/7.png",
    ],
    result: {
      en: "Replaced manual operations with a professional platform, improving client onboarding and delivery management.",
      es: "Reemplazó operaciones manuales con una plataforma profesional, mejorando la incorporación de clientes y la gestión de entregas.",
    },
  },
];
