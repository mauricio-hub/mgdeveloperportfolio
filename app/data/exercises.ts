import type { Lang } from "../lib/i18n";

export interface Exercise {
  id: number;
  title: string;
  description: Record<Lang, string>;
  stack: string[];
  images: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const exercises: Exercise[] = [
  {
    id: 1,
    title: "NexoraLabs",
    description: {
      en: "SaaS agency landing page with dark theme, gradient accents, and conversion-focused sections. Built to practice modern layout and animation techniques.",
      es: "Landing page de agencia SaaS con tema oscuro, acentos de gradiente y secciones enfocadas en conversión. Construida para practicar técnicas modernas de layout y animación.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    images: [
      "/images/agency/1.png",
      "/images/agency/2.png",
      "/images/agency/3.png",
      "/images/agency/4.png",
    ],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: 2,
    title: "VentasPlus",
    description: {
      en: "Sales dashboard with charts, KPI cards, product rankings, and recent transactions. Built to practice data visualization, responsive layouts, and dark UI design.",
      es: "Dashboard de ventas con gráficos, tarjetas de KPI, rankings de productos y transacciones recientes. Construido para practicar visualización de datos, layouts responsivos y diseño UI oscuro.",
    },
    stack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    images: [
      "/images/dashboard/1.png",
      "/images/dashboard/2.png",
      "/images/dashboard/3.png",
      "/images/dashboard/4.png",
    ],
    liveUrl: "#",
    repoUrl: "#",
  },
];
