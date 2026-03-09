"use client";

import { Zap, Bot, Brain, GraduationCap, Wrench } from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "N8N Workflow Automation",
    description:
      "Eliminate repetitive manual tasks with smart n8n automations: from lead capture and CRM updates to reports, notifications, and everything in between.",
    accent: false,
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Deploy autonomous AI agents that think, decide, and act on your behalf 24/7. Emails, research, customer support, and complex workflows handled on autopilot.",
    accent: false,
  },
  {
    icon: Brain,
    title: "AI Strategy & Consulting",
    description:
      "Map your business to the right AI stack and build a clear roadmap. We cut through the noise and show you exactly where AI generates real ROI.",
    accent: false,
  },
  {
    icon: GraduationCap,
    title: "Mentorship & Training",
    description:
      "Learn to build and run AI tools yourself. Hands-on, practical sessions with zero fluff. Only skills you can apply immediately.",
    accent: false,
  },
  {
    icon: Wrench,
    title: "Custom AI Solutions",
    description:
      "Need something that doesn't exist yet? We design bespoke AI solutions tailored to your exact workflow. If you can describe the problem, we can automate it.",
    accent: true,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative"
      style={{ background: "var(--color-surface)" }}
    >
      {/* Top edge */}
      <div
        className="h-px w-full"
        style={{ background: "var(--color-border)" }}
      />

      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Section label */}
        <div className="mb-4 flex items-center gap-2">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-accent)" }}
          >
            What we build
          </span>
        </div>

        {/* Heading */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2
            className="text-4xl font-bold tracking-tight md:text-5xl"
            style={{ color: "var(--color-foreground)" }}
          >
            Our Services
          </h2>
          <p
            className="max-w-sm text-base"
            style={{ color: "var(--color-muted)" }}
          >
            End-to-end AI automation — from strategy to deployment.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card group flex flex-col gap-4 rounded-2xl border p-6"
                style={{
                  background: service.accent
                    ? "var(--color-accent-light)"
                    : "var(--color-background)",
                  borderColor: service.accent
                    ? "var(--color-accent)"
                    : "var(--color-border)",
                }}
              >
                {/* Icon */}
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: service.accent
                      ? "var(--color-accent)"
                      : "var(--color-surface-elevated)",
                    color: service.accent ? "#fff" : "var(--color-accent)",
                  }}
                >
                  <Icon size={20} />
                </div>

                {/* Title */}
                <h3
                  className="text-base font-semibold"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-muted)" }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}

          {/* CTA card */}
          <div
            className="flex flex-col items-start justify-between gap-6 rounded-2xl border p-6"
            style={{
              background: "var(--color-surface-elevated)",
              borderColor: "var(--color-border)",
            }}
          >
            <p
              className="text-sm font-medium leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              Not sure which service fits your needs? Book a free call and we'll
              figure it out together.
            </p>
            <a
              href="https://cal.com/%D7%90%D7%99%D7%AA%D7%99-%D7%97%D7%9B%D7%9E%D7%95%D7%9F-wvqsrq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors duration-150"
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

        {/* Footer note */}
        <p className="mt-6 text-sm" style={{ color: "var(--color-muted)" }}>
          We also offer team workshops and AI training sessions.{" "}
          <a
            href="https://cal.com/%D7%90%D7%99%D7%AA%D7%99-%D7%97%D7%9B%D7%9E%D7%95%D7%9F-wvqsrq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium transition-colors duration-150"
            style={{ color: "var(--color-accent)" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLAnchorElement).style.color = "var(--color-accent-hover)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLAnchorElement).style.color = "var(--color-accent)")
            }
          >
            Book a call to learn more →
          </a>
        </p>
      </div>

      <div
        className="h-px w-full"
        style={{ background: "var(--color-border)" }}
      />
    </section>
  );
}
