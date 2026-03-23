"use client";

const featured = {
  number: "01",
  title: "N8N Workflow Automation",
  tags: ["n8n", "Make", "Zapier"],
  description:
    "Most businesses are haemorrhaging hours on tasks a machine could handle in seconds. I map your operations, find the bottlenecks, and wire up automations that run while you sleep — lead capture, CRM updates, reports, notifications, and everything in between.",
  outcome: "Clients typically reclaim 20–40 hrs/week within the first month.",
};

const services = [
  {
    number: "02",
    title: "AI Agents",
    description:
      "Autonomous agents that handle emails, research, customer support, and complex multi-step workflows 24/7. No downtime, no sick days.",
  },
  {
    number: "03",
    title: "AI Strategy & Consulting",
    description:
      "One focused session to map your business to the right AI stack and pinpoint exactly where automation generates real ROI — no buzzwords.",
  },
  {
    number: "04",
    title: "Mentorship & Training",
    description:
      "Hands-on sessions where you actually build things. Zero fluff, zero theory you'll never use. Only skills you can apply the next morning.",
  },
  {
    number: "05",
    title: "Custom AI Solutions",
    description:
      "If you can describe the problem clearly, I can automate it. Purpose-built tools for workflows that off-the-shelf software doesn't cover.",
  },
];

export default function Services() {
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

        {/* Featured card */}
        <div
          className="mb-2 rounded-2xl border p-8 md:p-10"
          style={{
            background: "var(--color-background)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:gap-16">
            {/* Number + tags */}
            <div className="flex flex-row items-start gap-6 md:flex-col md:gap-4 md:w-48 md:shrink-0">
              <span
                className="text-6xl font-bold leading-none select-none"
                style={{ color: "var(--color-accent)", opacity: 0.18 }}
              >
                {featured.number}
              </span>
              <div className="flex flex-wrap gap-2 pt-1 md:pt-0">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2.5 py-0.5 text-xs font-medium"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-muted)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4">
              <h3
                className="text-2xl font-bold tracking-tight"
                style={{ color: "var(--color-foreground)" }}
              >
                {featured.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {featured.description}
              </p>
              <p
                className="text-sm font-medium"
                style={{ color: "var(--color-accent)" }}
              >
                → {featured.outcome}
              </p>
            </div>
          </div>
        </div>

        {/* Numbered list */}
        <div className="rounded-2xl border overflow-hidden" style={{ borderColor: "var(--color-border)" }}>
          {services.map((service, i) => (
            <div
              key={service.number}
              className="group flex flex-col gap-3 px-8 py-7 transition-colors duration-150 md:flex-row md:items-start md:gap-16"
              style={{
                borderTop: i === 0 ? "none" : "1px solid var(--color-border)",
                background: "var(--color-background)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  "var(--color-surface-elevated)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.background =
                  "var(--color-background)")
              }
            >
              <span
                className="text-4xl font-bold leading-none select-none shrink-0 md:w-48"
                style={{ color: "var(--color-accent)", opacity: 0.18 }}
              >
                {service.number}
              </span>
              <div className="flex flex-col gap-2">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div
          className="mt-4 flex flex-col items-start justify-between gap-4 rounded-2xl border px-8 py-6 sm:flex-row sm:items-center"
          style={{
            background: "var(--color-surface-elevated)",
            borderColor: "var(--color-border)",
          }}
        >
          <p className="text-sm font-medium" style={{ color: "var(--color-muted)" }}>
            Not sure where to start? We'll figure out the right fit together.
          </p>
          <a
            href="https://cal.com/%D7%90%D7%99%D7%AA%D7%99-%D7%97%D7%9B%D7%9E%D7%95%D7%9F-wvqsrq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150"
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

      <div className="h-px w-full" style={{ background: "var(--color-border)" }} />
    </section>
  );
}
