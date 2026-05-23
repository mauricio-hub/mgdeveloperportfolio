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
      title: "BUILDING",
      subtitle: "PRODUCTS.",
      summary:
        "Full-Stack Engineer with 5 years of experience building scalable, AI-powered applications. React, Next.js, TypeScript, Node.js, Python — leveraging AI to ship faster.",
      cta1: "View Projects",
      cta2: "Let's Talk",
    },
    about: {
      marquee: "ABOUT ME",
      title: "ABOUT",
      subtitle: "ME",
      p1: "I'm a Full-Stack Engineer with 5 years of experience building scalable, AI-powered applications. I've worked across industries — energy, logistics, and SaaS — integrating AI capabilities into real products through APIs, automation, and intelligent features.",
      p2: "I work across the full stack: clean, intuitive interfaces with React and Next.js on the front, robust APIs with Python, Django, and Node.js on the back. I leverage AI tools to accelerate development, optimize workflows, and deliver high-quality products faster.",
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
      description: "Open to freelance projects and full-time opportunities. The best way to reach me is through LinkedIn.",
      cta: "Message me on LinkedIn →",
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
      title: "CONSTRUYO",
      subtitle: "PRODUCTOS.",
      summary:
        "Ingeniero Full-Stack con 5 años construyendo aplicaciones escalables potenciadas por IA. React, Next.js, TypeScript, Node.js, Python — usando IA para entregar más rápido.",
      cta1: "Ver Proyectos",
      cta2: "Hablemos",
    },
    about: {
      marquee: "ABOUT ME",
      title: "ABOUT",
      subtitle: "ME",
      p1: "Soy un Ingeniero Full-Stack con 5 años de experiencia construyendo aplicaciones escalables potenciadas por IA. He trabajado en distintas industrias — energía, logística y SaaS — integrando capacidades de IA en productos reales a través de APIs, automatización y funcionalidades inteligentes.",
      p2: "Trabajo en todo el stack: interfaces limpias e intuitivas con React y Next.js en el front, APIs robustas con Python, Django y Node.js en el back. Aprovecho herramientas de IA para acelerar el desarrollo, optimizar flujos de trabajo y entregar productos de calidad más rápido.",
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
      problem: "Problema",
      role: "Mi Rol",
      result: "Resultado",
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
      title: "CONTACT",
      subtitle: "ME",
      description: "Abierto a proyectos freelance y oportunidades de tiempo completo. La mejor forma de contactarme es por LinkedIn.",
      cta: "Escríbeme en LinkedIn →",
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

