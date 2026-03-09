# Component Patterns

## Section Structure

Every section follows this wrapper pattern:

```tsx
<section id="section-id" className="relative" style={{ background: "var(--color-surface)" }}>
  {/* optional top divider */}
  <div className="h-px w-full" style={{ background: "var(--color-border)" }} />

  <div className="mx-auto max-w-7xl px-6 py-24">
    {/* Section label */}
    <div className="mb-4">
      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-accent)" }}>
        Section name
      </span>
    </div>

    {/* Section heading */}
    <h2 className="text-4xl font-bold tracking-tight md:text-5xl" style={{ color: "var(--color-foreground)" }}>
      Heading
    </h2>

    {/* Content */}
  </div>

  {/* optional bottom divider */}
  <div className="h-px w-full" style={{ background: "var(--color-border)" }} />
</section>
```

## Adding a Service Card

Edit `services` array in `components/Services.tsx`:

```ts
{
  icon: IconName,        // from lucide-react
  title: "Service Title",
  description: "One to two sentence description of what the service does.",
  accent: false,         // set true for the highlighted/featured card
}
```

Available icons (lucide-react): `Zap`, `Bot`, `Brain`, `GraduationCap`, `Wrench`, `Code`, `BarChart`, `MessageCircle`, `Workflow`

## Client vs Server Components

- `Navbar.tsx` — `"use client"` (mobile menu state)
- All other components — server components (no directive needed)

## Icon Pattern

Always import named icons from `lucide-react`:

```tsx
import { Zap, Bot, Brain } from "lucide-react";

// Usage
<Icon size={20} />
```

## Background Patterns

```tsx
// Dot grid (used in Hero)
<div className="dot-grid absolute inset-0 opacity-50" />

// Accent glow blob
<div
  className="absolute ..."
  style={{ background: "radial-gradient(ellipse at center, #c4653a22 0%, transparent 70%)" }}
/>
```

## Mobile Responsiveness

- Use `md:grid-cols-2` for two-column layouts that collapse to single column on mobile
- Nav collapses to hamburger at `md` breakpoint
- Use `flex-wrap` on button rows
- Service cards: `sm:grid-cols-2 lg:grid-cols-3`
