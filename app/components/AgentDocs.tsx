"use client";

import { useLang } from "../lib/LanguageContext";
import SectionReveal, { RevealItem } from "./SectionReveal";

const FLOW_STEPS = {
  en: [
    { step: "01", label: "User sends a message", detail: "A recruiter or visitor types a question in the chat." },
    { step: "02", label: "Claude reasons", detail: "The model reads the message and decides which tool — if any — it needs to call." },
    { step: "03", label: "Tool executes", detail: "The API route runs real code: filters experience.ts, projects.ts, or returns availability data." },
    { step: "04", label: "Result returns to Claude", detail: "The tool output is injected back into the conversation as context." },
    { step: "05", label: "Claude responds", detail: "Claude formulates a final answer grounded in real data — not hallucinated." },
  ],
  es: [
    { step: "01", label: "El usuario envía un mensaje", detail: "Un reclutador o visitante escribe una pregunta en el chat." },
    { step: "02", label: "Claude razona", detail: "El modelo lee el mensaje y decide qué tool —si alguna— necesita llamar." },
    { step: "03", label: "La tool ejecuta", detail: "La API route corre código real: filtra experience.ts, projects.ts, o retorna datos de disponibilidad." },
    { step: "04", label: "El resultado vuelve a Claude", detail: "El output de la tool se inyecta de vuelta en la conversación como contexto." },
    { step: "05", label: "Claude responde", detail: "Claude formula una respuesta final basada en datos reales — no inventados." },
  ],
};

const TOOLS = {
  en: [
    { name: "get_experience", when: "\"Have you worked with Django?\" / \"What did you do at Enersinc?\"", returns: "Filtered work history from experience.ts" },
    { name: "get_projects", when: "\"Show me your AI projects\" / \"Do you have SaaS experience?\"", returns: "Matching projects from projects.ts" },
    { name: "get_availability", when: "\"Are you available?\" / \"How do I hire you?\"", returns: "Availability status + LinkedIn URL" },
    { name: "get_stack", when: "\"What's your stack?\" / \"Do you know Next.js?\"", returns: "Full deduplicated tech stack" },
  ],
  es: [
    { name: "get_experience", when: "\"¿Has trabajado con Django?\" / \"¿Qué hiciste en Enersinc?\"", returns: "Historial filtrado desde experience.ts" },
    { name: "get_projects", when: "\"Muéstrame tus proyectos de IA\" / \"¿Tienes experiencia en SaaS?\"", returns: "Proyectos coincidentes desde projects.ts" },
    { name: "get_availability", when: "\"¿Estás disponible?\" / \"¿Cómo te contrato?\"", returns: "Estado de disponibilidad + URL de LinkedIn" },
    { name: "get_stack", when: "\"¿Cuál es tu stack?\" / \"¿Sabes Next.js?\"", returns: "Stack técnico completo deduplicado" },
  ],
};

const COPY = {
  en: {
    title: "AI AGENT",
    subtitle: "DOCS",
    intro: "This portfolio includes a real AI agent built with the Anthropic Claude API and Next.js Tool Use. It is not a chatbot — it reasons, calls functions, and responds based on live data.",
    whatTitle: "What makes it an agent?",
    whatText: "A regular chatbot answers from its training data alone. An agent has tools — functions it can call to fetch real information. Claude decides autonomously which tool to use, executes it, reads the result, and then responds. This is the agentic loop.",
    flowTitle: "Agentic loop — step by step",
    toolsTitle: "Available tools",
    toolWhen: "Triggered when",
    toolReturns: "Returns",
    stackTitle: "Technical stack",
    stackItems: [
      { label: "LLM", value: "Claude Haiku (Anthropic)" },
      { label: "Tool Use", value: "Anthropic Tool Use API" },
      { label: "Backend", value: "Next.js App Router API Route" },
      { label: "Data source", value: "experience.ts · projects.ts · personal.ts" },
      { label: "Loop", value: "while(stop_reason !== end_turn)" },
    ],
    tryTitle: "Try it",
    tryText: "Open the agent (bottom right ↘) and ask one of these:",
    trySuggestions: [
      "Have you worked with AI agents?",
      "What projects involve the Claude API?",
      "Are you available for freelance?",
      "What's your full stack?",
    ],
  },
  es: {
    title: "AI AGENT",
    subtitle: "DOCS",
    intro: "Este portfolio incluye un agente de IA real construido con la API de Anthropic Claude y Next.js Tool Use. No es un chatbot — razona, llama funciones y responde basado en datos reales.",
    whatTitle: "¿Qué lo hace un agente?",
    whatText: "Un chatbot común responde solo desde sus datos de entrenamiento. Un agente tiene tools — funciones que puede llamar para obtener información real. Claude decide autónomamente qué tool usar, la ejecuta, lee el resultado y luego responde. Eso es el agentic loop.",
    flowTitle: "Agentic loop — paso a paso",
    toolsTitle: "Tools disponibles",
    toolWhen: "Se activa cuando",
    toolReturns: "Retorna",
    stackTitle: "Stack técnico",
    stackItems: [
      { label: "LLM", value: "Claude Haiku (Anthropic)" },
      { label: "Tool Use", value: "Anthropic Tool Use API" },
      { label: "Backend", value: "Next.js App Router API Route" },
      { label: "Fuente de datos", value: "experience.ts · projects.ts · personal.ts" },
      { label: "Loop", value: "while(stop_reason !== end_turn)" },
    ],
    tryTitle: "Pruébalo",
    tryText: "Abre el agente (esquina inferior derecha ↘) y pregunta algo de esto:",
    trySuggestions: [
      "¿Has trabajado con agentes de IA?",
      "¿Qué proyectos usan la API de Claude?",
      "¿Estás disponible para freelance?",
      "¿Cuál es tu stack completo?",
    ],
  },
};

export default function AgentDocs() {
  const { lang } = useLang();
  const c = COPY[lang];
  const flow = FLOW_STEPS[lang];
  const tools = TOOLS[lang];

  return (
    <SectionReveal id="agent" className="border-b border-border px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Title */}
        <div className="mb-14">
          <RevealItem delay={0.1}>
            <h2 className="font-heading text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.9] tracking-tighter text-text-primary">
              {c.title}
            </h2>
          </RevealItem>
          <RevealItem delay={0.2}>
            <span className="text-outline block font-heading text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.9] tracking-tighter">
              {c.subtitle}
            </span>
          </RevealItem>
          <RevealItem delay={0.3}>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-text-secondary">
              {c.intro}
            </p>
          </RevealItem>
        </div>

        {/* What makes it an agent */}
        <RevealItem delay={0.35} className="mb-10 border border-border p-6 md:p-8">
          <span className="mb-4 block font-mono text-xs text-text-secondary">01</span>
          <h3 className="mb-3 font-heading text-lg font-bold uppercase tracking-wider text-text-primary">
            {c.whatTitle}
          </h3>
          <p className="text-sm leading-relaxed text-text-secondary">{c.whatText}</p>
        </RevealItem>

        {/* Agentic loop diagram */}
        <RevealItem delay={0.4} className="mb-10">
          <span className="mb-6 block font-mono text-xs text-text-secondary">02 — {c.flowTitle}</span>
          <div className="flex flex-col gap-0">
            {flow.map((item, i) => (
              <div key={i} className="flex gap-4 group">
                {/* Left: step + connector */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-8 h-8 rounded-full border border-border flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--bg-secondary)" }}
                  >
                    <span className="font-mono text-[10px] text-text-secondary">{item.step}</span>
                  </div>
                  {i < flow.length - 1 && (
                    <div className="w-px flex-1 my-1" style={{ background: "var(--border)" }} />
                  )}
                </div>
                {/* Right: content */}
                <div className="pb-6">
                  <p className="text-sm font-semibold text-text-primary">{item.label}</p>
                  <p className="text-xs leading-relaxed text-text-secondary mt-0.5">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </RevealItem>

        {/* Tools table */}
        <RevealItem delay={0.45} className="mb-10">
          <span className="mb-6 block font-mono text-xs text-text-secondary">03 — {c.toolsTitle}</span>
          <div className="flex flex-col gap-3">
            {tools.map((tool) => (
              <div key={tool.name} className="border border-border p-4 md:p-5">
                <div className="flex flex-col md:flex-row md:items-start md:gap-8">
                  <code
                    className="font-mono text-xs px-2 py-1 rounded mb-3 md:mb-0 md:w-44 flex-shrink-0 self-start"
                    style={{ background: "var(--bg-secondary)", color: "var(--accent)" }}
                  >
                    {tool.name}
                  </code>
                  <div className="flex flex-col gap-1 text-xs text-text-secondary">
                    <span><span className="text-text-primary font-medium">{c.toolWhen}:</span> {tool.when}</span>
                    <span><span className="text-text-primary font-medium">{c.toolReturns}:</span> {tool.returns}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealItem>

        {/* Tech stack + Try it — 2 col */}
        <div className="grid gap-6 md:grid-cols-2">
          <RevealItem delay={0.5} className="border border-border p-6 md:p-8">
            <span className="mb-4 block font-mono text-xs text-text-secondary">04 — {c.stackTitle}</span>
            <div className="flex flex-col gap-3">
              {c.stackItems.map((item) => (
                <div key={item.label} className="flex justify-between items-start gap-4 text-xs border-b border-border pb-2 last:border-0 last:pb-0">
                  <span className="text-text-secondary">{item.label}</span>
                  <code className="font-mono text-text-primary text-right">{item.value}</code>
                </div>
              ))}
            </div>
          </RevealItem>

          <RevealItem delay={0.55} className="border border-border p-6 md:p-8">
            <span className="mb-4 block font-mono text-xs text-text-secondary">05 — {c.tryTitle}</span>
            <p className="text-xs text-text-secondary mb-4">{c.tryText}</p>
            <div className="flex flex-col gap-2">
              {c.trySuggestions.map((s) => (
                <div
                  key={s}
                  className="text-xs px-3 py-2 border border-border text-text-secondary font-mono"
                  style={{ background: "var(--bg-secondary)" }}
                >
                  → {s}
                </div>
              ))}
            </div>
          </RevealItem>
        </div>

      </div>
    </SectionReveal>
  );
}
