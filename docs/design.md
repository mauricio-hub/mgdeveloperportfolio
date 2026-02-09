# Portfolio – Mauricio González | Full-Stack Developer

## 1. Overview

Portfolio profesional con estilo **editorial/brutalist** tipo revista técnica.  
Single-page application con scroll vertical, animaciones de reveal y estructura tipo magazine.

**Stack:** Next.js 16 + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion

---

## 2. Secciones y Layout

```
┌─────────────────────────────────────────────┐
│  NAVBAR                                     │
│  Logo (MG)  ·  Nav links  ·  Lang · Theme   │
├─────────────────────────────────────────────┤
│                                             │
│  HERO                                       │
│  ┌─────────────────────────────────────┐    │
│  │  FULL-STACK  ← bold, gigante        │    │
│  │  DEVELOPER   ← outline text         │    │
│  │                                     │    │
│  │  [foto placeholder]                 │    │
│  │  Resumen profesional (4 líneas)     │    │
│  │                                     │    │
│  │  [Ver proyectos]  [Contacto]        │    │
│  └─────────────────────────────────────┘    │
│                                             │
├─────────────────────────────────────────────┤
│  ═══ MARQUEE: ABOUT ME × ABOUT ME × ═══    │
├─────────────────────────────────────────────┤
│                                             │
│  ABOUT                                      │
│  ┌──────────────────┬──────────────────┐    │
│  │  Texto "quién    │  Texto "cómo     │    │
│  │  soy" y qué      │  trabajo" y qué  │    │
│  │  problemas        │  me diferencia   │    │
│  │  resuelvo         │                  │    │
│  └──────────────────┴──────────────────┘    │
│                                             │
├─────────────────────────────────────────────┤
│  ═══ MARQUEE: EXPERIENCE × EXPERIENCE ═══  │
├─────────────────────────────────────────────┤
│                                             │
│  EXPERIENCE (Timeline/Accordion)            │
│  ┌─────────────────────────────────────┐    │
│  │  01  │  ENERSINC SAS        │  +/-  │    │
│  │      │  Developer 2021-2025  │       │    │
│  │      │  (expandible)         │       │    │
│  ├──────┼───────────────────────┼───────┤    │
│  │  02  │  GUEPARDOS            │  +/-  │    │
│  │      │  Frontend Dev 2021    │       │    │
│  └─────────────────────────────────────┘    │
│                                             │
├─────────────────────────────────────────────┤
│  ═══ MARQUEE: MY WORK × MY WORK × ═══      │
├─────────────────────────────────────────────┤
│                                             │
│  PROJECTS (Grid 2 cols)                     │
│  ┌────────────────┬────────────────┐        │
│  │  PROJECT 1     │  PROJECT 2     │        │
│  │  ┌──────────┐  │  ┌──────────┐  │        │
│  │  │screenshot│  │  │screenshot│  │        │
│  │  │placeholder│ │  │placeholder│ │        │
│  │  └──────────┘  │  └──────────┘  │        │
│  │  Nombre        │  Nombre        │        │
│  │  Descripción   │  Descripción   │        │
│  │  Stack badges  │  Stack badges  │        │
│  └────────────────┴────────────────┘        │
│                                             │
├─────────────────────────────────────────────┤
│  ═══ MARQUEE: SKILLS × SKILLS × ═══        │
├─────────────────────────────────────────────┤
│                                             │
│  SKILLS                                     │
│  ┌──────────────────┬──────────────────┐    │
│  │  FRONTEND         │  BACKEND        │    │
│  │  · React.js       │  · Python       │    │
│  │  · TypeScript     │  · Django       │    │
│  │  · Next.js        │  · Node.js      │    │
│  │  · Vue.js         │  · PostgreSQL   │    │
│  │  · Redux          │  · Celery       │    │
│  │  · CSS/SCSS       │  · WebSockets   │    │
│  ├──────────────────┼──────────────────┤    │
│  │  DEVOPS           │  TOOLS          │    │
│  │  · Docker         │  · Figma        │    │
│  │  · CI/CD          │  · Git          │    │
│  │  · Linux          │  · VS Code      │    │
│  ├──────────────────┴──────────────────┤    │
│  │  SOFT SKILLS                        │    │
│  │  · English (proficient)             │    │
│  │  · Communication · Teamwork         │    │
│  │  · AI-assisted development          │    │
│  └─────────────────────────────────────┘    │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  CONTACT                                    │
│  ┌─────────────────────────────────────┐    │
│  │     CONTACT   ← bold gigante       │    │
│  │     ME        ← outline text        │    │
│  │                                     │    │
│  │  ┌──────────────┬─────────────────┐ │    │
│  │  │ Links:       │  Info:          │ │    │
│  │  │ · LinkedIn   │  · Colombia     │ │    │
│  │  │ · GitHub     │  · Email        │ │    │
│  │  │ · Portfolio  │  · Phone        │ │    │
│  │  └──────────────┴─────────────────┘ │    │
│  │                                     │    │
│  │  [Let's build something →]          │    │
│  └─────────────────────────────────────┘    │
│                                             │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  © 2026 Mauricio González                   │
└─────────────────────────────────────────────┘
```

---

## 3. Estilo Visual

### Paleta de colores

| Token              | Light Mode     | Dark Mode      |
|--------------------|----------------|----------------|
| `--bg-primary`     | `#f5f0e8`      | `#1a1a1a`      |
| `--bg-secondary`   | `#ece6da`      | `#242424`      |
| `--text-primary`   | `#1a1a1a`      | `#f5f0e8`      |
| `--text-secondary` | `#6b6b6b`      | `#a0a0a0`      |
| `--accent`         | `#4a7c6f`      | `#6ba393`      |
| `--border`         | `#1a1a1a`      | `#3a3a3a`      |

### Tipografía

- **Headings:** `Space Grotesk` (bold, condensed) — para títulos grandes y texto outline
- **Body:** `Inter` — limpio, legible, neutro
- **Monospace:** `Geist Mono` (ya incluido) — para badges de tech stack

### Efectos tipográficos

- **Títulos principales:** `font-size: clamp(3rem, 8vw, 8rem)`, `font-weight: 900`
- **Texto outline:** `-webkit-text-stroke: 2px currentColor; color: transparent;`
- **Labels:** `text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.75rem;`

### Bordes y Cards

- Bordes negros definidos (`1px solid var(--border)`)
- Cards con padding generoso y estructura tipo bloque impreso
- Separadores horizontales entre secciones

---

## 4. Componentes

### Jerarquía de componentes

```
app/
├── layout.tsx                    # Root layout + fonts + metadata
├── globals.css                   # Tailwind + CSS variables + custom styles
├── page.tsx                      # Composición principal
│
├── components/
│   ├── Navbar.tsx                # Logo + nav links + lang toggle + theme toggle
│   ├── Hero.tsx                  # Título grande + outline + resumen + CTAs
│   ├── Marquee.tsx               # Ticker horizontal reutilizable
│   ├── About.tsx                 # Grid 2 cols con texto profesional
│   ├── Experience.tsx            # Lista tipo accordion
│   ├── ExperienceItem.tsx        # Item expandible individual
│   ├── Projects.tsx              # Grid de project cards
│   ├── ProjectCard.tsx           # Card individual (imagen + info)
│   ├── Skills.tsx                # Grid de categorías de skills
│   ├── Contact.tsx               # Título grande + links + info
│   ├── Footer.tsx                # Copyright
│   ├── SectionReveal.tsx         # Wrapper de animación scroll-reveal
│   └── ThemeProvider.tsx         # Context para dark/light mode
│
├── data/
│   ├── experience.ts             # Array de experiencia laboral
│   ├── projects.ts               # Array de proyectos (case studies)
│   ├── skills.ts                 # Skills agrupados por categoría
│   └── personal.ts               # Info personal y de contacto
│
└── lib/
    └── i18n.ts                   # Multi-idioma EN/ES (simple dict)
```

---

## 5. Modelo de Datos

### `data/personal.ts`

```typescript
export const personal = {
  name: "Mauricio González",
  role: "Full-Stack Developer",
  summary: "Full-stack developer with 4+ years of experience building enterprise web applications, mainly for the energy sector. Strong focus on React, TypeScript, Python, and Django.",
  location: "Colombia",
  email: "mauriciogonzalezdeveloper@gmail.com",
  phone: "+57 302 844 6004",
  linkedin: "https://www.linkedin.com/in/mauricio-gonzalez-frontend-developer/",
  github: "#", // actualizar luego
}
```

### `data/experience.ts`

```typescript
export const experience = [
  {
    id: 1,
    company: "Enersinc SAS",
    role: "Full-Stack Developer",
    period: "2021 – 2025",
    status: "Finalized Contract",
    stack: ["React", "Redux", "TypeScript", "Python", "Django", "WebSockets", "Docker", "PostgreSQL", "Celery"],
    achievements: [
      "Integrated AI-powered features into enterprise energy platforms using React, Redux, and TypeScript",
      "Developed Django-based APIs to orchestrate AI workflows and manage data pipelines with PostgreSQL",
      "Implemented asynchronous processing with Celery for AI-driven simulations and predictions",
      "Enabled real-time feedback and progress tracking using WebSockets",
    ],
  },
  {
    id: 2,
    company: "Guepardos",
    role: "Frontend Developer",
    period: "2021",
    status: "Freelance",
    stack: ["Vue", "JavaScript", "CSS/SCSS", "Figma", "UI/UX"],
    achievements: [
      "Designed and built a modern landing page from scratch using Figma + React",
      "Implemented responsive layouts, animations, and clean UI components",
      "Optimized structure and visuals to improve brand presentation and conversions",
    ],
  },
]
```

### `data/projects.ts`

```typescript
export interface Project {
  id: number
  title: string
  client: string
  description: string
  problem: string
  role: string
  stack: string[]
  images: string[]       // placeholder por ahora, se reemplaza después
  result: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Energy Platform",
    client: "Enersinc SAS",
    description: "Enterprise web application for the energy sector with AI-powered analytics and real-time data processing.",
    problem: "Complex energy data analysis required manual processing, slow turnaround, and lacked predictive capabilities.",
    role: "Full-Stack Developer — Frontend architecture, API design, AI integration, real-time features.",
    stack: ["React", "Redux", "TypeScript", "Python", "Django", "WebSockets", "Docker", "PostgreSQL"],
    images: [],           // se agregan después
    result: "Enhanced data analysis and user decision-making through AI-powered features with real-time feedback.",
  },
  {
    id: 2,
    title: "Guepardos.co",
    client: "Guepardos – Freelance",
    description: "Modern landing page for a logistics company, connecting frontend with backend services and improving brand presence.",
    problem: "The company needed a professional web presence to attract clients and communicate their logistics services clearly.",
    role: "Frontend Developer — Design in Figma, full implementation, responsive and animated UI.",
    stack: ["Vue", "JavaScript", "CSS/SCSS", "Figma"],
    images: [],           // se agregan después
    result: "Delivered a fast, polished landing page with significantly improved user engagement.",
  },
]
```

### `data/skills.ts`

```typescript
export const skills = {
  frontend: ["React.js", "TypeScript", "Next.js", "Vue.js", "Redux", "CSS/SCSS", "Tailwind CSS"],
  backend: ["Python", "Django", "Node.js", "PostgreSQL", "Celery", "WebSockets", "REST APIs"],
  devops: ["Docker", "CI/CD", "Linux", "Git"],
  tools: ["Figma", "VS Code", "AI Tools", "Cursor"],
  soft: ["Proficient English", "Communication", "Teamwork", "AI-assisted Development"],
}
```

---

## 6. Estrategia de Animaciones (Framer Motion)

| Elemento              | Animación                          | Trigger         |
|-----------------------|------------------------------------|-----------------|
| Secciones             | Fade up (y: 40 → 0, opacity 0→1)  | Scroll into view|
| Títulos grandes       | Slide in desde la izquierda        | Scroll into view|
| Texto outline         | Fade in con delay                  | Scroll into view|
| Cards de proyectos    | Stagger fade up (una tras otra)    | Scroll into view|
| Marquee               | CSS infinite scroll horizontal     | Siempre activo  |
| Accordion (exp.)      | Height auto animate                | Click            |
| Navbar                | Fade in al cargar                  | Page load       |
| Skill items           | Stagger fade in                    | Scroll into view|

### Componente `SectionReveal`

Wrapper reutilizable con `whileInView` de Framer Motion:

```typescript
// Patrón base para todas las secciones
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, margin: "-100px" }}
>
  {children}
</motion.div>
```

---

## 6.5 Section-to-Section Transitions

La página debe sentirse como **páginas de una revista deslizándose**, no como bloques independientes apareciendo (nada de efecto PowerPoint).

### Concepto de flujo

```
Hero se desvanece suavemente hacia arriba
       ↓
Marquee aparece deslizándose horizontalmente
       ↓
About entra mientras Hero termina de irse
       ↓
Experience se "superpone" visualmente al About
       ↓
...cada sección se solapa con la anterior
```

### Técnica: Overlapping Motion

Cada sección usa **motion overlap** — la sección anterior empieza a desvanecerse mientras la siguiente ya está entrando:

- **Sección saliente:** `opacity 1 → 0.3` + leve `scale(0.98)` conforme sale del viewport
- **Sección entrante:** `opacity 0 → 1` + `y: 60 → 0` con `margin-top negativo` visual
- **Resultado:** las secciones se solapan en la transición, no hay "gap muerto"

### Técnica: Parallax en Marquees

Los marquee separadores tienen un **leve parallax** — se mueven más lento que el scroll, creando profundidad:

- `transform: translateY(calc(var(--scroll-progress) * -20px))`
- El marquee se siente como una capa intermedia entre secciones

### Técnica: Staggered Content Reveal

El contenido dentro de cada sección NO aparece todo de golpe:

1. **Primero:** el borde/contenedor de la sección se hace visible (border animate in)
2. **Después (100ms):** el título entra (slide from left)
3. **Después (200ms):** el subtítulo outline aparece (fade in)
4. **Después (300ms):** el contenido/body se revela (fade up)

### Implementación técnica

```
Cada sección se envuelve en:

motion.section
  ├── viewport: { once: true, margin: "-15%" }    ← trigger antes de entrar
  ├── initial: { opacity: 0, y: 60 }
  ├── whileInView: { opacity: 1, y: 0 }
  ├── transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  │
  └── children con stagger:
      ├── border    → delay: 0
      ├── título    → delay: 0.1
      ├── subtítulo → delay: 0.2
      └── contenido → delay: 0.3

Marquee separadores:
  ├── CSS animation: infinite scroll horizontal
  ├── Parallax: useScroll() + useTransform() de Framer Motion
  └── opacity fade-in cuando el marquee entra al viewport

Scroll behavior:
  ├── scroll-behavior: smooth (CSS)
  ├── scroll-margin-top en cada section para anchor links
  └── NO snap scroll (libre, orgánico)
```

### Curva de easing global

Se usa una curva **custom cubic-bezier** para todo: `[0.25, 0.1, 0.25, 1.0]`  
— elegante, lenta al inicio, suave al final. Nada de bounce ni elastic.

### Restricciones de rendimiento

- **Parallax SOLO en marquee separadores.** El contenido principal (títulos, cards, texto) NO usa parallax — solo `opacity` y `transform` (translate/scale).
- **Todas las animaciones usan exclusivamente `transform` y `opacity`** para mantenerse en el compositor del GPU. Nada de animar `width`, `height`, `margin`, `top/left`, ni `box-shadow`.
- **Mobile (`< 768px`):**
  - Distancias de motion reducidas: `y: 60 → 30`, stagger delays a la mitad.
  - Parallax en marquees **desactivado** (scroll normal).
  - `prefers-reduced-motion: reduce` → todas las animaciones desactivadas.

---

## 7. Multi-idioma (i18n)

Implementación simple con un diccionario estático y un context de React:

```typescript
// lib/i18n.ts
const translations = {
  en: {
    hero: { title: "FULL-STACK", subtitle: "DEVELOPER", cta1: "View Projects", cta2: "Contact" },
    about: { title: "ABOUT", subtitle: "ME", ... },
    // ...
  },
  es: {
    hero: { title: "FULL-STACK", subtitle: "DEVELOPER", cta1: "Ver Proyectos", cta2: "Contacto" },
    about: { title: "SOBRE", subtitle: "MÍ", ... },
    // ...
  },
}
```

Se maneja con un `LanguageContext` que almacena el idioma actual y se persiste en `localStorage`.

---

## 8. Dark Mode

- Se usa `class` strategy de Tailwind (`dark:` prefix)
- Toggle en el Navbar (sol/luna icon)
- Se persiste en `localStorage`
- Default: seguir preferencia del sistema (`prefers-color-scheme`)
- `ThemeProvider` envuelve toda la app

---

## 9. SEO

- Metadata dinámica en `layout.tsx` con Open Graph tags
- Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Accesibilidad: alt text, aria labels, focus states
- Structured data (JSON-LD) para Person schema

---

## 10. Responsive

| Breakpoint | Layout                                       |
|------------|----------------------------------------------|
| Mobile     | 1 columna, títulos más pequeños, menú hamburguesa |
| Tablet     | 2 columnas para projects y skills            |
| Desktop    | Layout completo como el diseño               |

---

## 11. Flujo de desarrollo

1. ✅ Design document (este archivo)
2. Setup: fonts, colores, CSS variables, ThemeProvider
3. Layout + Navbar
4. Hero section
5. Marquee component
6. About section
7. Experience section (accordion)
8. Projects section (grid + cards con placeholder de imágenes)
9. Skills section
10. Contact section
11. Footer
12. Animaciones con Framer Motion
13. Multi-idioma (i18n)
14. Responsive ajustes finales
15. SEO y metadata

