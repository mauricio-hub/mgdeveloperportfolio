import type { Lang } from "../lib/i18n";

export interface Experience {
  id: number;
  company: string;
  url?: string;
  role: Record<Lang, string>;
  period: string;
  status: Record<Lang, string>;
  stack: string[];
  achievements: Record<Lang, string[]>;
  highlight?: Record<Lang, string>;
}

export const experience: Experience[] = [
  {
    id: 5,
    company: "Dropanalizer",
    url: "https://dropanalizer.com/",
    highlight: {
      en: "My own SaaS — built solo from idea to production.",
      es: "Mi propio SaaS — construido solo desde la idea hasta producción.",
    },
    role: {
      en: "Founder & Full-Stack Developer",
      es: "Fundador y Desarrollador Full-Stack",
    },
    period: "2026 – Present",
    status: {
      en: "Side Project",
      es: "Proyecto Propio",
    },
    stack: [
      "Next.js 14",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Anthropic Claude API",
      "Cloudinary",
      "Recharts",
      "Lemon Squeezy",
      "Vercel",
      "Supabase",
    ],
    achievements: {
      en: [
        "Designed and built a full SaaS product solo — from architecture and database schema to UI and payment integration.",
        "Dropshippers generate AI-powered landing pages in minutes, with built-in visitor tracking and automatic optimization suggestions via Claude API.",
        "Implemented append-only versioning so every iteration of a landing page is preserved — full history, zero data loss.",
        "Built lightweight fire-and-forget behavioral tracking that never blocks page load on the public-facing landing.",
        "Chose Lemon Squeezy as Merchant of Record over Stripe to handle global tax compliance and LATAM payment restrictions.",
      ],
      es: [
        "Diseñé y construí un producto SaaS completo solo — desde la arquitectura y el esquema de base de datos hasta la UI e integración de pagos.",
        "Los dropshippers generan landing pages potenciadas por IA en minutos, con tracking de visitantes integrado y sugerencias de optimización automáticas via Claude API.",
        "Implementé versionado append-only para que cada iteración de una landing page quede preservada — historial completo, cero pérdida de datos.",
        "Construí un sistema de tracking de comportamiento ligero fire-and-forget que nunca bloquea la carga de la página pública.",
        "Elegí Lemon Squeezy como Merchant of Record sobre Stripe para manejar compliance fiscal global y restricciones de pago en LATAM.",
      ],
    },
  },
  {
    id: 1,
    company: "Growtek AI Solutions",
    url: "https://growtek.co/",
    highlight: {
      en: "Building AI-native products — from system design to production.",
      es: "Construyendo productos nativos de IA — desde el diseño del sistema hasta producción.",
    },
    role: {
      en: "Freelance Full-Stack Developer",
      es: "Desarrollador Full-Stack Freelance",
    },
    period: "2026 – Present",
    status: {
      en: "Freelance",
      es: "Freelance",
    },
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
    ],
    achievements: {
      en: [
        "Build and maintain scalable end-to-end systems using React, Next.js, and Node.js.",
        "Integrate AI capabilities into real-world products through APIs, automation, and intelligent features.",
        "Contribute to system design and architecture decisions for client projects.",
        "Improve development workflows by leveraging AI tools across the full stack.",
      ],
      es: [
        "Construcción y mantenimiento de sistemas escalables de extremo a extremo con React, Next.js y Node.js.",
        "Integración de capacidades de IA en productos reales mediante APIs, automatización y funcionalidades inteligentes.",
        "Contribución al diseño de sistemas y decisiones de arquitectura en proyectos de clientes.",
        "Mejora de flujos de desarrollo aprovechando herramientas de IA en todo el stack.",
      ],
    },
  },
  {
    id: 3,
    company: "Enersinc SAS",
    url: "https://enersinc.com/",
    highlight: {
      en: "4 years shipping AI-powered features for enterprise energy platforms.",
      es: "4 años entregando funcionalidades de IA en plataformas energéticas empresariales.",
    },
    role: {
      en: "Software Developer",
      es: "Desarrollador de Software",
    },
    period: "2021 – 2025",
    status: {
      en: "",
      es: "",
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
      "Celery",
    ],
    achievements: {
      en: [
        "Integrated AI-powered features into enterprise energy platforms using React, Redux, and TypeScript, enhancing data analysis and user decision-making.",
        "Developed Django-based APIs to orchestrate AI workflows, integrating external AI services and managing data pipelines with PostgreSQL.",
        "Implemented asynchronous processing with Celery to handle AI-driven simulations, predictions, and long-running analytical tasks.",
        "Enabled real-time feedback and progress tracking for AI processes using WebSockets, improving transparency and user experience.",
      ],
      es: [
        "Integré funcionalidades potenciadas por IA en plataformas empresariales del sector energético usando React, Redux y TypeScript, mejorando el análisis de datos y la toma de decisiones.",
        "Desarrollé APIs en Django para orquestar flujos de trabajo de IA, integrando servicios externos y gestionando pipelines de datos con PostgreSQL.",
        "Implementé procesamiento asíncrono con Celery para manejar simulaciones, predicciones y tareas analíticas de larga duración impulsadas por IA.",
        "Habilité retroalimentación en tiempo real y seguimiento del progreso de procesos de IA usando WebSockets, mejorando la transparencia y la experiencia de usuario.",
      ],
    },
  },
  {
    id: 4,
    company: "Guepardos",
    url: "https://guepardos.co/",
    highlight: {
      en: "End-to-end logistics platform — from Figma to production in one engagement.",
      es: "Plataforma logística de extremo a extremo — de Figma a producción en un solo proyecto.",
    },
    role: {
      en: "Full-Stack Developer",
      es: "Desarrollador Full-Stack",
    },
    period: "2021",
    status: {
      en: "Freelance",
      es: "Freelance",
    },
    stack: ["Vue", "JavaScript", "Python", "CSS/SCSS", "Figma", "REST API"],
    achievements: {
      en: [
        "Built a web platform for a logistics company, from UI design in Figma to frontend-backend integration.",
        "Implemented an authentication system in Python for secure user access and session management.",
        "Developed responsive layouts, animations, and clean UI components with Vue.js.",
        "Integrated frontend with backend REST APIs for delivery configuration, payment, and order tracking.",
      ],
      es: [
        "Desarrollé una plataforma web para una empresa de logística, desde el diseño UI en Figma hasta la integración frontend-backend.",
        "Implementé un sistema de autenticación en Python para acceso seguro de usuarios y gestión de sesiones.",
        "Desarrollé layouts responsivos, animaciones y componentes UI limpios con Vue.js.",
        "Integré el frontend con APIs REST del backend para configuración de entregas, pagos y seguimiento de pedidos.",
      ],
    },
  },
];
