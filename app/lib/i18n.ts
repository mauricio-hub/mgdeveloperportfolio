export type Lang = "en" | "es";

const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      title: "FULL-STACK",
      subtitle: "DEVELOPER",
      summary:
        "Full-stack developer with 4+ years of experience building enterprise web applications, mainly for the energy sector. Strong focus on React, TypeScript, Python, and Django.",
      cta1: "View Projects",
      cta2: "Contact Me",
    },
    about: {
      marquee: "ABOUT ME",
      title: "ABOUT",
      subtitle: "ME",
      p1: "I'm a full-stack developer who builds enterprise web applications that solve real problems. Over the past 4+ years, I've focused on the energy sector — creating platforms with AI-powered analytics, real-time data processing, and scalable architectures.",
      p2: "I work across the entire stack: from designing clean, intuitive interfaces with React and TypeScript, to building robust APIs with Python and Django. I care about writing maintainable code, thinking about UX from the start, and shipping features that actually matter to users.",
    },
    experience: {
      marquee: "EXPERIENCE",
      title: "EXPERIENCE",
      subtitle: "TIMELINE",
    },
    projects: {
      marquee: "MY WORK",
      title: "PROJECTS",
      subtitle: "CASE STUDIES",
      problem: "Problem",
      role: "My Role",
      result: "Result",
    },
    exercises: {
      marquee: "PLAYGROUND",
      title: "PLAYGROUND",
      subtitle: "SIDE PROJECTS",
    },
    skills: {
      marquee: "WHAT I BUILD",
      title: "WHAT I",
      subtitle: "BUILD",
      blocks: [
        {
          title: "Platforms & Dashboards",
          text: "I build internal tools and web platforms that help teams make faster decisions. From energy analytics dashboards to logistics management systems — interfaces designed for clarity and speed.",
        },
        {
          title: "APIs & Backend Systems",
          text: "I design and build the backend that powers products. REST APIs, data pipelines, async processing, and real-time communication — architected to scale without breaking.",
        },
        {
          title: "Enterprise & Industry Tools",
          text: "I've worked in energy and logistics, building software that replaces manual processes with structured digital workflows. Systems that handle complexity so users don't have to.",
        },
        {
          title: "End-to-End Product Thinking",
          text: "I don't just write code — I think about the user flow, the data model, and the long-term maintainability. Clean UI on the front, solid architecture on the back, and real-time when it matters.",
        },
      ],
    },
    contact: {
      title: "CONTACT",
      subtitle: "ME",
      cta: "Download CV →",
      links: "Links",
      info: "Info",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      title: "FULL-STACK",
      subtitle: "DEVELOPER",
      summary:
        "Desarrollador full-stack con 4+ años de experiencia construyendo aplicaciones web empresariales, principalmente para el sector energético. Enfoque en React, TypeScript, Python y Django.",
      cta1: "Ver Proyectos",
      cta2: "Contáctame",
    },
    about: {
      marquee: "SOBRE MÍ",
      title: "SOBRE",
      subtitle: "MÍ",
      p1: "Soy un desarrollador full-stack que construye aplicaciones web empresariales que resuelven problemas reales. Durante más de 4 años, me he enfocado en el sector energético — creando plataformas con analítica potenciada por IA, procesamiento de datos en tiempo real y arquitecturas escalables.",
      p2: "Trabajo en todo el stack: desde diseñar interfaces limpias e intuitivas con React y TypeScript, hasta construir APIs robustas con Python y Django. Me importa escribir código mantenible, pensar en UX desde el inicio y entregar funcionalidades que realmente importen a los usuarios.",
    },
    experience: {
      marquee: "EXPERIENCIA",
      title: "EXPERIENCIA",
      subtitle: "LÍNEA DE TIEMPO",
    },
    projects: {
      marquee: "MI TRABAJO",
      title: "PROYECTOS",
      subtitle: "CASOS DE ESTUDIO",
      problem: "Problema",
      role: "Mi Rol",
      result: "Resultado",
    },
    exercises: {
      marquee: "PLAYGROUND",
      title: "PLAYGROUND",
      subtitle: "PROYECTOS PROPIOS",
    },
    skills: {
      marquee: "LO QUE CONSTRUYO",
      title: "LO QUE",
      subtitle: "CONSTRUYO",
      blocks: [
        {
          title: "Plataformas & Dashboards",
          text: "Construyo herramientas internas y plataformas web que ayudan a equipos a tomar decisiones más rápido. Desde dashboards de analítica energética hasta sistemas de gestión logística — interfaces diseñadas para claridad y velocidad.",
        },
        {
          title: "APIs & Sistemas Backend",
          text: "Diseño y construyo el backend que impulsa productos. APIs REST, pipelines de datos, procesamiento asíncrono y comunicación en tiempo real — arquitectura pensada para escalar sin romperse.",
        },
        {
          title: "Herramientas Empresariales",
          text: "He trabajado en energía y logística, construyendo software que reemplaza procesos manuales con flujos digitales estructurados. Sistemas que manejan la complejidad para que los usuarios no tengan que hacerlo.",
        },
        {
          title: "Pensamiento de Producto",
          text: "No solo escribo código — pienso en el flujo del usuario, el modelo de datos y la mantenibilidad a largo plazo. UI limpia en el front, arquitectura sólida en el back, y tiempo real cuando importa.",
        },
      ],
    },
    contact: {
      title: "CONTACTO",
      subtitle: "",
      cta: "Descargar CV →",
      links: "Enlaces",
      info: "Información",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
};

export type Translations = (typeof translations)["en"];

export function getTranslations(lang: Lang): Translations {
  return translations[lang] as Translations;
}

