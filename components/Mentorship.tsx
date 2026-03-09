"use client";

import { Zap, CheckCircle2 } from "lucide-react";

const highlights = [
  "45-day 1-on-1 intensive — fully tailored to your goals",
  "Build real automations with n8n, AI agents, and Claude Code",
  "Weekly sessions + async support throughout the sprint",
  "Go from zero to deploying production-ready AI workflows",
];

export default function Mentorship() {
  return (
    <section
      id="mentorship"
      className="relative"
      style={{ background: "var(--color-background)" }}
    >
      <div
        className="h-px w-full"
        style={{ background: "var(--color-border)" }}
      />

      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Section label */}
        <div className="mb-4">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-accent)" }}
          >
            Mentorship
          </span>
        </div>

        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left */}
          <div className="flex flex-col gap-7">
            <h2
              className="text-4xl font-bold tracking-tight md:text-5xl"
              style={{ color: "var(--color-foreground)" }}
            >
              AI Automation
              <br />
              <span
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Sprint
              </span>
            </h2>

            <p
              className="max-w-md text-lg leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              A focused 45-day 1-on-1 program. We build and ship real AI
              automations together: n8n workflows, AI agents, and hands-on
              Claude Code training.
            </p>

            <ul className="flex flex-col gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-accent)" }}
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Coming Soon badge */}
            <div className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-muted)",
                background: "var(--color-surface)",
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: "var(--color-accent)" }}
              />
              Coming Soon — spots will be limited
            </div>
          </div>

          {/* Right: card */}
          <div className="flex justify-end">
            <div
              className="w-full max-w-sm rounded-2xl border p-8"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: "var(--color-accent)",
                    color: "#fff",
                  }}
                >
                  <Zap size={24} />
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    AI Automation Sprint
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                    with Itay Hacmon
                  </p>
                </div>
              </div>

              <div className="mb-6 flex flex-col gap-3">
                {[
                  { label: "Duration", value: "45 days" },
                  { label: "Format", value: "1-on-1, video + async" },
                  { label: "Topics", value: "n8n · AI agents · Claude Code" },
                  { label: "Outcome", value: "Live automations in your business" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between border-b pb-2 last:border-0 last:pb-0"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <span
                      className="text-xs"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: "var(--color-foreground)" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold"
                style={{
                  background: "var(--color-surface-elevated)",
                  color: "var(--color-muted)",
                  cursor: "default",
                }}
              >
                Enrollment Opening Soon
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="h-px w-full"
        style={{ background: "var(--color-border)" }}
      />
    </section>
  );
}
