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
  {
    id: 3,
    title: "PDF Chat",
    client: "RAG System",
    description: {
      en: "AI-powered tool that lets property managers query lease contracts instantly — no manual searching required.",
      es: "Herramienta con IA que permite a administradores de propiedades consultar contratos de arrendamiento al instante, sin búsqueda manual.",
    },
    problem: {
      en: "Property managers with dozens of active contracts wasted hours searching for specific clauses, dates, or tenant data across PDF files.",
      es: "Administradores con decenas de contratos activos perdían horas buscando cláusulas, fechas o datos de arrendatarios en archivos PDF.",
    },
    role: {
      en: "Full-Stack Developer — RAG pipeline design, PDF ingestion, vector search, and conversational interface.",
      es: "Desarrollador Full-Stack — Diseño del pipeline RAG, ingesta de PDFs, búsqueda vectorial e interfaz conversacional.",
    },
    stack: [
      "Python",
      "LangChain",
      "OpenAI",
      "FAISS",
      "FastAPI",
      "React",
      "TypeScript",
    ],
    images: [
      "/images/rag/ChatGPT Image Mar 3, 2026, 08_26_59 PM.png",
      "/images/rag/WhatsApp Image 2026-03-03 at 8.21.49 PM.jpeg",
      "/images/rag/WhatsApp Image 2026-03-03 at 8.23.55 PM.jpeg",
    ],
    result: {
      en: "Instant answers from any lease document. Managers query dozens of contracts in seconds instead of opening files manually.",
      es: "Respuestas inmediatas desde cualquier contrato. Los administradores consultan decenas de documentos en segundos sin abrir archivos.",
    },
  },
];
