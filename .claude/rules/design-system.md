# Design System

## Color Tokens

Always use CSS custom properties. Never hardcode colors except for brand-specific values like WhatsApp green (`#25d366`).

```
--color-background:       #fffcfa   Warm off-white page background
--color-surface:          #f7f5f2   Section backgrounds (Services, Contact)
--color-surface-elevated: #efece8   Hover states, CTA cards
--color-foreground:       #1c1917   Primary text, headings
--color-muted:            #78716c   Subtitles, descriptions, nav links
--color-accent:           #c4653a   Terracotta — buttons, badges, highlights
--color-accent-hover:     #a8532e   Hover state for accent elements
--color-accent-light:     #c4653a14 Tinted background for accent badges
--color-border:           #00000014 Subtle borders everywhere
```

## Typography

**Sans (Inter)**: All UI text — nav, body, descriptions, buttons.
**Serif (Instrument Serif italic)**: Hero/section heading emphasis only.

```tsx
// Normal heading
<h2 className="text-4xl font-bold tracking-tight" style={{ color: "var(--color-foreground)" }}>

// Serif italic emphasis (headings only)
<em style={{ fontFamily: "var(--font-instrument-serif)", fontStyle: "italic" }}>
  Unfair Advantage
</em>
```

Font size scale: xs(12) · sm(14) · base(16) · lg(18) · xl(20) · 2xl(24) · 3xl(30) · 4xl(36) · 5xl(48) · 6xl(60)

## Button Patterns

### Primary (accent filled)
```tsx
<a
  className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150"
  style={{ background: "var(--color-accent)" }}
  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-accent-hover)")}
  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-accent)")}
>
```

### Ghost (outline)
```tsx
<a
  className="inline-flex items-center rounded-lg border px-5 py-2.5 text-sm font-semibold transition-colors duration-150"
  style={{ borderColor: "var(--color-border)", color: "var(--color-foreground)", background: "transparent" }}
  onMouseEnter={(e) => { e.currentTarget.style.background = "var(--color-surface)"; }}
  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
>
```

### WhatsApp
```tsx
<a
  style={{ background: "#25d366" }}
  onMouseEnter={(e) => (e.currentTarget.style.background = "#1ebe5c")}
  onMouseLeave={(e) => (e.currentTarget.style.background = "#25d366")}
>
```

## Eyebrow Badge
```tsx
<span
  className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide"
  style={{ borderColor: "var(--color-accent)", color: "var(--color-accent)", background: "var(--color-accent-light)" }}
>
  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-accent)" }} />
  Label text
</span>
```

## Section Label (uppercase)
```tsx
<span
  className="text-xs font-semibold uppercase tracking-widest"
  style={{ color: "var(--color-accent)" }}
>
  Section name
</span>
```

## Card / Surface
```tsx
<div
  className="rounded-2xl border p-6"
  style={{ background: "var(--color-background)", borderColor: "var(--color-border)" }}
>
```

## Dividers
```tsx
<div className="h-px w-full" style={{ background: "var(--color-border)" }} />
```
