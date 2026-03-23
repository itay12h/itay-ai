"use client";

/* ─── Visual mockups ──────────────────────────────────────────────── */

function AgentMockup() {
  return (
    <div
      className="w-full rounded-xl border p-4 flex flex-col gap-3"
      style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
    >
      <div className="flex items-start gap-3">
        <span
          className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ background: "var(--color-accent)" }}
        />
        <span className="text-xs" style={{ color: "var(--color-foreground)" }}>
          Found 14 new leads matching your ICP
        </span>
      </div>
      <div className="self-end">
        <span
          className="rounded-lg px-3 py-1.5 text-xs font-semibold text-white"
          style={{ background: "var(--color-accent)" }}
        >
          Enrich and add to CRM sequence
        </span>
      </div>
      <div className="flex items-start gap-3">
        <span
          className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
          style={{ background: "var(--color-accent)" }}
        />
        <span className="text-xs" style={{ color: "var(--color-foreground)" }}>
          Done. 14 contacts enriched, emails drafted.
        </span>
      </div>
      <div className="flex gap-1 pl-5">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-muted)", opacity: 0.4 }} />
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-muted)", opacity: 0.4 }} />
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-muted)", opacity: 0.4 }} />
      </div>
    </div>
  );
}

function WorkflowMockup() {
  const nodes = [
    { label: "Webhook", color: "#4ade80" },
    { label: "Filter", color: "#a78bfa" },
    { label: "Slack", color: "#38bdf8" },
    { label: "Sheets", color: "#fb923c" },
  ];
  return (
    <div
      className="w-full rounded-xl border p-4"
      style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
    >
      <div className="flex items-center gap-2 flex-wrap">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="flex h-9 w-9 items-center justify-center rounded-xl border"
                style={{ background: "var(--color-background)", borderColor: "var(--color-border)" }}
              >
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ background: node.color }}
                />
              </div>
              <span className="text-xs" style={{ color: "var(--color-muted)" }}>
                {node.label}
              </span>
            </div>
            {i < nodes.length - 1 && (
              <span className="mb-4 text-xs" style={{ color: "var(--color-border)" }}>
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function RoadmapMockup() {
  const phases = [
    { label: "Phase 1: Audit", week: "Week 1-2", pct: 100 },
    { label: "Phase 2: Quick Wins", week: "Week 3-4", pct: 72 },
    { label: "Phase 3: Core Build", week: "Week 5-10", pct: 40 },
    { label: "Phase 4: Scale", week: "Week 11-12", pct: 12 },
  ];
  return (
    <div
      className="w-full rounded-xl border p-4 flex flex-col gap-3"
      style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
    >
      <span
        className="text-xs font-semibold uppercase tracking-widest"
        style={{ color: "var(--color-accent)" }}
      >
        Implementation Roadmap
      </span>
      {phases.map((p) => (
        <div key={p.label} className="flex flex-col gap-1">
          <div className="flex justify-between">
            <span className="text-xs" style={{ color: "var(--color-foreground)" }}>
              {p.label}
            </span>
            <span className="text-xs" style={{ color: "var(--color-muted)" }}>
              {p.week}
            </span>
          </div>
          <div
            className="h-1.5 w-full overflow-hidden rounded-full"
            style={{ background: "var(--color-border)" }}
          >
            <div
              className="h-full rounded-full"
              style={{ width: `${p.pct}%`, background: "var(--color-accent)" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function SearchMockup() {
  return (
    <div
      className="w-full rounded-xl border p-4 flex flex-col gap-3"
      style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
    >
      <div
        className="flex items-center gap-2 rounded-lg border px-3 py-2"
        style={{ background: "var(--color-background)", borderColor: "var(--color-border)" }}
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: "var(--color-muted)" }}>
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
        </svg>
        <span className="text-xs" style={{ color: "var(--color-muted)" }}>
          What&apos;s the refund policy for enterprise?
        </span>
      </div>
      <div className="flex gap-2">
        {["terms.pdf", "faq.md", "policy.pdf"].map((f) => (
          <div
            key={f}
            className="flex flex-col items-center gap-1 rounded-lg border px-2 py-1.5"
            style={{ background: "var(--color-background)", borderColor: "var(--color-border)" }}
          >
            <div
              className="h-5 w-4 rounded-sm"
              style={{ background: f === "policy.pdf" ? "var(--color-accent)" : "var(--color-surface-elevated)" }}
            />
            <span className="text-xs" style={{ color: "var(--color-muted)" }}>{f}</span>
          </div>
        ))}
      </div>
      <p className="text-xs leading-relaxed" style={{ color: "var(--color-foreground)" }}>
        Enterprise refunds are processed within 30 days. Full details in{" "}
        <span style={{ color: "var(--color-accent)" }}>policy.pdf</span> section 4.2…
      </p>
    </div>
  );
}

/* ─── Section ─────────────────────────────────────────────────────── */

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
        <div className="mb-16">
          <h2
            className="text-4xl font-bold tracking-tight md:text-5xl"
            style={{ color: "var(--color-foreground)" }}
          >
            How I help
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 lg:grid-cols-3">

          {/* Hero — AI Agents, spans 2 cols */}
          <div
            className="flex flex-col gap-6 overflow-hidden rounded-2xl border p-8 lg:col-span-2"
            style={{
              background: "var(--color-background)",
              borderColor: "var(--color-border)",
            }}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
              <div className="flex flex-col gap-4 lg:max-w-xs">
                <h3
                  className="text-2xl font-bold tracking-tight"
                  style={{ color: "var(--color-foreground)" }}
                >
                  AI Agents
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  Custom autonomous agents that handle your busywork: lead gen, customer support, research. You focus on growth.
                </p>
              </div>
              <div className="w-full lg:flex-1">
                <AgentMockup />
              </div>
            </div>
          </div>

          {/* N8N Workflows */}
          <div
            className="flex flex-col justify-between gap-6 rounded-2xl border p-8"
            style={{
              background: "var(--color-background)",
              borderColor: "var(--color-border)",
            }}
          >
            <WorkflowMockup />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold" style={{ color: "var(--color-foreground)" }}>
                n8n Workflows
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                Automations connecting 400+ apps that save 10+ hours a week. No more manual data entry.
              </p>
            </div>
          </div>

          {/* Custom AI / RAG */}
          <div
            className="flex flex-col justify-between gap-6 rounded-2xl border p-8"
            style={{
              background: "var(--color-background)",
              borderColor: "var(--color-border)",
            }}
          >
            <SearchMockup />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold" style={{ color: "var(--color-foreground)" }}>
                Custom AI Solutions
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                AI that knows your business data. Custom knowledge bases and document Q&amp;A that give real answers.
              </p>
            </div>
          </div>

          {/* AI Strategy */}
          <div
            className="flex flex-col justify-between gap-6 rounded-2xl border p-8"
            style={{
              background: "var(--color-background)",
              borderColor: "var(--color-border)",
            }}
          >
            <RoadmapMockup />
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold" style={{ color: "var(--color-foreground)" }}>
                AI Strategy
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                Clear roadmaps for AI adoption. I audit your stack, find high-impact opportunities, and build an implementation plan.
              </p>
            </div>
          </div>

          {/* Mentorship */}
          <div
            className="flex flex-col justify-between gap-6 rounded-2xl border p-8"
            style={{
              background: "var(--color-background)",
              borderColor: "var(--color-border)",
            }}
          >
            <div
              className="flex-1 w-full rounded-xl border p-5 flex flex-col gap-4"
              style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
            >
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-accent)" }}>
                Session recap
              </span>
              {[
                "Build your first AI agent",
                "Connect it to your CRM",
                "Deploy and monitor",
                "Iterate and scale",
              ].map((step, i) => (
                <div key={step} className="flex items-center gap-3">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{
                      background: i < 2 ? "var(--color-accent)" : "var(--color-surface-elevated)",
                      color: i < 2 ? "#fff" : "var(--color-muted)",
                    }}
                  >
                    {i < 2 ? "✓" : String(i + 1)}
                  </span>
                  <span className="text-xs" style={{ color: i < 2 ? "var(--color-foreground)" : "var(--color-muted)" }}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold" style={{ color: "var(--color-foreground)" }}>
                Mentorship &amp; Training
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                Hands-on sessions where you build real things. Zero fluff, only skills you can use tomorrow.
              </p>
            </div>
          </div>

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
            Not sure where to start? We&apos;ll figure out the right fit together, no sales pitch.
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
            Book a free call
          </a>
        </div>
      </div>

      <div className="h-px w-full" style={{ background: "var(--color-border)" }} />
    </section>
  );
}
