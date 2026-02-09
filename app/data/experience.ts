import type { Lang } from "../lib/i18n";

export interface Experience {
  id: number;
  company: string;
  role: Record<Lang, string>;
  period: string;
  status: Record<Lang, string>;
  stack: string[];
  achievements: Record<Lang, string[]>;
}

export const experience: Experience[] = [
  {
    id: 1,
    company: "Enersinc SAS",
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
    id: 2,
    company: "Guepardos",
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
