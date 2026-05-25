# Mauricio González — Developer Portfolio

Personal portfolio with an embedded AI agent built on the Anthropic Claude API.

**Live:** [bymauriciog.com](https://bymauriciog.com)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 12 |
| AI | Anthropic Claude API (Tool Use) |
| Deployment | Vercel |

---

## AI Agent

The portfolio includes a real AI agent — not a chatbot. It uses **Anthropic Tool Use** to call functions and respond based on live data from the codebase.

### How it works

```
User message
    ↓
Claude reasons → decides which tool to call
    ↓
API route executes the tool (real code)
    ↓
Result is injected back into the conversation
    ↓
Claude formulates a grounded response
```

### Available tools

| Tool | Triggered when | Returns |
|---|---|---|
| `get_experience` | Asked about work history or a specific technology | Filtered data from `experience.ts` |
| `get_projects` | Asked about projects or tech used | Filtered data from `projects.ts` |
| `get_availability` | Asked about hiring or contact | Availability status + LinkedIn URL |
| `get_stack` | Asked about skills or tech stack | Full deduplicated stack list |

### Agentic loop

The route runs a `while` loop that continues until Claude returns `stop_reason: end_turn`. If Claude calls multiple tools in sequence, each result is fed back before the next step.

```ts
while (true) {
  const response = await claude.messages.create({ tools, messages })

  if (response.stop_reason === "end_turn") return text

  if (response.stop_reason === "tool_use") {
    execute tools → append results → continue loop
  }
}
```

**Key files:**
- [`app/api/chat/route.ts`](app/api/chat/route.ts) — agentic loop, tool definitions, tool execution
- [`app/components/AgentChat/`](app/components/AgentChat/) — chat UI widget
- [`app/components/AgentDocs.tsx`](app/components/AgentDocs.tsx) — in-page documentation section

---

## Project structure

```
app/
├── api/chat/route.ts          # AI agent — agentic loop + tools
├── components/
│   ├── AgentChat/             # Floating chat widget
│   │   ├── index.tsx          # State and logic
│   │   ├── FABButton.tsx
│   │   ├── ChatHeader.tsx
│   │   ├── ChatInput.tsx
│   │   ├── MessageBubble.tsx
│   │   ├── ProactiveBubble.tsx
│   │   ├── TypingIndicator.tsx
│   │   ├── WelcomeScreen.tsx
│   │   ├── constants.ts       # Copy (EN/ES) and animation easing
│   │   └── types.ts
│   ├── AgentDocs.tsx          # Agent documentation section
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Contact.tsx
├── data/
│   ├── personal.ts            # Contact info
│   ├── experience.ts          # Work history (used by agent tools)
│   ├── projects.ts            # Portfolio projects (used by agent tools)
│   └── exercises.ts
└── lib/
    ├── i18n.ts                # EN/ES translations
    ├── LanguageContext.tsx
    └── ThemeProvider.tsx
```

---

## Local development

```bash
# Install dependencies
npm install

# Create environment file
echo "ANTHROPIC_API_KEY=your-key-here" > .env.local

# Start dev server
npm run dev        # localhost:3000

# Other commands
npm run build      # Production build
npm run lint       # ESLint
```

---

## Environment variables

| Variable | Required | Description |
|---|---|---|
| `ANTHROPIC_API_KEY` | Yes | From [console.anthropic.com](https://console.anthropic.com) |

In production, set this in **Vercel → Project Settings → Environment Variables**.

---

## Design system

- **Light mode:** warm beige `#f5f0e8`
- **Dark mode:** dark `#1a1a1a`
- **Accent:** muted green `#4a7c6f`
- All colors via CSS custom properties — no hardcoded values
- Typography uses `clamp()` for fluid sizing
- Animations: Framer Motion, shared easing `[0.25, 0.1, 0.25, 1.0]`
- New sections wrap in `<SectionReveal>` for scroll-triggered entry

---

## Content updates

All content lives in `app/data/` — no code changes needed for most updates:

- **Experience** → `app/data/experience.ts`
- **Projects** → `app/data/projects.ts`
- **Personal info** → `app/data/personal.ts`
- **UI text / translations** → `app/lib/i18n.ts`

The AI agent reads directly from these files via the tool execution functions.

---

## Contact

**Mauricio González** — Full-Stack Developer | AI Integration

- LinkedIn: [mauricio-gonzalez-frontend-developer](https://www.linkedin.com/in/mauricio-gonzalez-frontend-developer/)
- GitHub: [mauricio-hub](https://github.com/mauricio-hub)
- Email: mauriciogonzalezdeveloper@gmail.com
