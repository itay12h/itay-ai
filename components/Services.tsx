"use client";

import { Zap, Bot, Brain, GraduationCap, Wrench } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "N8N Workflow Automation",
    description:
      "Wire up automations that run while you sleep — lead capture, CRM updates, reports, and notifications. Clients reclaim 20–40 hrs/week.",
    tags: ["n8n", "Make", "Zapier"],
    hero: true,
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Autonomous agents that handle email, research, and customer support 24/7. No downtime, no sick days.",
    hero: false,
  },
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description:
      "One focused session to map your stack and pinpoint exactly where AI generates real ROI.",
    hero: false,
  },
  {
    icon: GraduationCap,
    title: "Mentorship & Training",
    description:
      "Hands-on sessions where you build real things. Zero fluff — only skills you can use tomorrow.",
    hero: false,
  },
  {
    icon: Wrench,
    title: "Custom AI Solutions",
    description:
      "If you can describe the problem, I can automate it. Purpose-built for workflows nothing off-the-shelf covers.",
    hero: false,
  },
];

export default function Services() {
  const hero = services[0];
  const HeroIcon = hero.icon;
  const rest = services.slice(1);

  return (
    <section
      id="services"
      className="relative"
      style={{ background: "var(--color-surface)" }}
    >
      <div className="h-px w-full" style={{ background: "var(--color-border)" }} />

      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Section label */}
        <div className="mb-4">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-accent)" }}
          >
            What I do
          </span>
        </div>

        {/* Heading */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2
            className="text-4xl font-bold tracking-tight md:text-5xl"
            style={{ color: "var(--color-foreground)" }}
          >
            How I help
          </h2>
          <p className="max-w-sm text-base" style={{ color: "var(--color-muted)" }}>
            End-to-end AI automation — from finding the right problems to shipping the solution.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 lg:grid-cols-3">

          {/* Hero card — spans 2 cols on lg */}
          <div
            className="group relative flex flex-col justify-between gap-8 overflow-hidden rounded-2xl border p-8 lg:col-span-2"
            style={{
              background: "var(--color-accent-light)",
              borderColor: "var(--color-accent)",
            }}
          >
            {/* Glow blob */}
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(ellipse at center, #c4653a55 0%, transparent 70%)",
              }}
            />

            <div
              className="flex h-11 w-11 items-center justify-center rounded-xl"
              style={{ background: "var(--color-accent)", color: "#fff" }}
            >
              <HeroIcon size={22} />
            </div>

            <div className="flex flex-col gap-3">
              <h3
                className="text-2xl font-bold tracking-tight"
                style={{ color: "var(--color-foreground)" }}
              >
                {hero.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {hero.description}
              </p>
              {hero.tags && (
                <div className="mt-1 flex flex-wrap gap-2">
                  {hero.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border px-2.5 py-0.5 text-xs font-medium"
                      style={{
                        borderColor: "var(--color-accent)",
                        color: "var(--color-accent)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Top-right card */}
          {rest.slice(0, 1).map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="flex flex-col justify-between gap-8 rounded-2xl border p-8"
                style={{
                  background: "var(--color-background)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    background: "var(--color-surface-elevated)",
                    color: "var(--color-accent)",
                  }}
                >
                  <Icon size={22} />
                </div>
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Bottom row — 3 equal cards */}
          {rest.slice(1).map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="flex flex-col gap-6 rounded-2xl border p-8"
                style={{
                  background: "var(--color-background)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{
                    background: "var(--color-surface-elevated)",
                    color: "var(--color-accent)",
                  }}
                >
                  <Icon size={22} />
                </div>
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}

          {/* CTA card */}
          <div
            className="flex flex-col items-start justify-between gap-6 rounded-2xl border p-8"
            style={{
              background: "var(--color-surface-elevated)",
              borderColor: "var(--color-border)",
            }}
          >
            <p
              className="text-sm font-medium leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              Not sure where to start? We&apos;ll figure out the right fit together — no sales pitch.
            </p>
            <a
              href="https://cal.com/%D7%90%D7%99%D7%AA%D7%99-%D7%97%D7%9B%D7%9E%D7%95%D7%9F-wvqsrq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150"
              style={{ background: "var(--color-accent)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "var(--color-accent-hover)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "var(--color-accent)")
              }
            >
              Book a free call →
            </a>
          </div>
        </div>
      </div>

      <div className="h-px w-full" style={{ background: "var(--color-border)" }} />
    </section>
  );
}
