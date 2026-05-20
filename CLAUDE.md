# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

No test framework is configured.

## Architecture

**Stack:** Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS 4 · Framer Motion 12

**App Router layout:**
- `app/page.tsx` — Single-page entry point; assembles all sections in order
- `app/layout.tsx` — Root layout with SEO metadata and font setup
- `app/components/` — All UI components (all are `"use client"`)
- `app/data/` — Content: `personal.ts`, `experience.ts`, `projects.ts`, `exercises.ts`
- `app/lib/` — `i18n.ts` (translation strings), `LanguageContext.tsx`, `ThemeProvider.tsx`
- `app/globals.css` — CSS custom properties for theming + Tailwind base

**Path alias:** `@/*` maps to the project root.

## Key Patterns

**All components are client components** (`"use client"`) — this is intentional given the animations and interactive state.

**Theming:** Light/dark mode is toggled via `ThemeProvider` which adds/removes the `dark` class on `<html>`. CSS variables (defined in `globals.css`) drive all colors: `--bg-primary`, `--text-primary`, `--accent`, etc. Do not hardcode color values; use these variables.

**i18n:** `app/lib/i18n.ts` exports a nested translations object for `"en"` and `"es"`. Components consume it via `useLang()` from `LanguageContext`. All user-visible strings must go through the translation system — add entries to both languages when adding new UI text.

**Animations:** Use Framer Motion with the shared easing `[0.25, 0.1, 0.25, 1.0]`. Wrap new sections in `<SectionReveal>` for consistent scroll-triggered entry. Check `prefers-reduced-motion` support is preserved when adding animations.

**State persistence:** Both theme and language preferences are persisted to `localStorage` using `useSyncExternalStore` for hydration safety.

## Design System

The visual language is editorial/brutalist: warm beige (`#f5f0e8`) in light mode, dark (`#1a1a1a`) in dark mode, accent muted green. Typography uses `clamp()` for fluid sizing. Keep animations slow and intentional — no rapid transitions or bright neon colors. See `Style.md` and `Context.md` for the full design brief.
