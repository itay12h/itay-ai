# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Itay AI** — AI Automation Agency website for Itay Hacmon.
Stack: Next.js 14 (App Router) · Tailwind CSS v3 · TypeScript · Inter + Instrument Serif fonts

## Commands

```bash
npm install        # Install dependencies
npm run dev        # Dev server at http://localhost:3000
npm run build      # Production build
npx tsc --noEmit   # Type check only
```

## Architecture

Single-page site — all sections assembled in `app/page.tsx`:

```
Navbar → Hero → Services → Mentorship → Community → Contact → Footer
```

Each section is a standalone component in `components/`. All components are Client Components (`"use client"`) due to hover event handlers. The pattern is consistent across all components.

## Design System

All design tokens live as CSS custom properties in `app/globals.css`. Reference them via `style={{ ... }}` inline or Tailwind's extended config (`tailwind.config.ts`).

Key tokens:
- `--color-background` `#fffcfa` — page background
- `--color-surface` `#f7f5f2` — card/section backgrounds
- `--color-foreground` `#1c1917` — primary text
- `--color-muted` `#78716c` — secondary text
- `--color-accent` `#c4653a` — terracotta CTA color
- `--color-accent-hover` `#a8532e` — hover state
- `--color-border` `#00000014` — borders

Tailwind color aliases: `bg-background`, `bg-surface`, `text-foreground`, `text-muted`, `text-accent`, `bg-accent`.

Fonts:
- `var(--font-inter)` — body and UI (Inter via `next/font/google`)
- `var(--font-instrument-serif)` — italic heading accents (Instrument Serif)

## Links

| Purpose | URL |
|---|---|
| Book a call | `https://cal.com/%D7%90%D7%99%D7%AA%D7%99-%D7%97%D7%9B%D7%9E%D7%95%D7%9F-wvqsrq/30min` |
| WhatsApp Community | `https://chat.whatsapp.com/LOcwgPBJTzI2LNt0rQ64cv` |
| WhatsApp Direct | `https://wa.me/message/GRPQ37RVRM3OG1` |
| LinkedIn | `https://linkedin.com/in/itay-hacmon` *(update with real URL)* |

## Adding / Editing Content

- **New service card** → edit the `services` array in `components/Services.tsx`
- **Nav links** → edit the `navLinks` array in `components/Navbar.tsx`
- **Footer links** → edit `services` / `company` arrays in `components/Footer.tsx`
- **Community stats** → edit the `stats` array in `components/Community.tsx`
- **Mentorship highlights** → edit the `highlights` array in `components/Mentorship.tsx`

## Rules

See `.claude/rules/` for detailed guides:
- `design-system.md` — color tokens, typography, button patterns
- `component-patterns.md` — section structure, card patterns, icon usage
