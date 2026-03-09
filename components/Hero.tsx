"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = ["Growth", "Automation", "Efficiency", "Intelligence"];
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function useScramble(words: string[], holdMs = 2800, scrambleMs = 350) {
  const [display, setDisplay] = useState(words[0]);
  const indexRef = useRef(0);

  useEffect(() => {
    const hold = setInterval(() => {
      const nextIndex = (indexRef.current + 1) % words.length;
      const target = words[nextIndex];

      let elapsed = 0;
      const step = 30;
      const scrambleInterval = setInterval(() => {
        elapsed += step;
        if (elapsed >= scrambleMs) {
          clearInterval(scrambleInterval);
          setDisplay(target);
          indexRef.current = nextIndex;
        } else {
          setDisplay(
            target
              .split("")
              .map((_, i) => {
                const progress = elapsed / scrambleMs;
                if (i < Math.floor(target.length * progress)) return target[i];
                return CHARS[Math.floor(Math.random() * CHARS.length)];
              })
              .join("")
          );
        }
      }, step);
    }, holdMs);

    return () => clearInterval(hold);
  }, [words, holdMs, scrambleMs]);

  return display;
}

const fileTree = [
  { type: "folder", name: "client-project", depth: 0 },
  { type: "folder", name: "agents", depth: 1 },
  { type: "file", name: "lead-gen.config.ts", depth: 2, active: true },
  { type: "file", name: "support.config.ts", depth: 2, active: false },
  { type: "folder", name: "workflows", depth: 1 },
  { type: "file", name: "onboarding.json", depth: 2, active: false },
  { type: "file", name: "package.json", depth: 1, active: false },
];

const codeLines = [
  [<span key="c" style={{ color: "#9ca3af" }}>{"// Configure your AI sales agent"}</span>],
  [<span key="k" style={{ color: "#7c3aed" }}>{"import"}</span>, " { Agent, tools } ", <span key="k2" style={{ color: "#7c3aed" }}>{"from"}</span>, " ", <span key="s" style={{ color: "#16a34a" }}>{`'@chase-ai/sdk'`}</span>],
  [],
  [<span key="k" style={{ color: "#7c3aed" }}>{"export const"}</span>, " agent = ", <span key="k2" style={{ color: "#7c3aed" }}>{"new"}</span>, " ", <span key="fn" style={{ color: "#c4653a" }}>{"Agent"}</span>, "({"],
  ["  name: ", <span key="s" style={{ color: "#16a34a" }}>{`'LeadGen Pro'`}</span>, ","],
  ["  model: ", <span key="s" style={{ color: "#16a34a" }}>{`'claude-opus-4-6'`}</span>, ","],
  ["  tools: [", <span key="s" style={{ color: "#16a34a" }}>{"crm, enrichment, slack"}</span>, "],"],
  ["  trigger: ", <span key="s" style={{ color: "#16a34a" }}>{`'new_lead'`}</span>, ","],
  ["  actions: {"],
  ["    enrich: ", <span key="b" style={{ color: "#c4653a" }}>{"true"}</span>, ","],
  ["    scoreLeads: ", <span key="b" style={{ color: "#c4653a" }}>{"true"}</span>, ","],
  ["    notifyTeam: ", <span key="s" style={{ color: "#16a34a" }}>{`'#sales'`}</span>],
  ["  }"],
  ["});"],
  [],
  [<span key="c" style={{ color: "#9ca3af" }}>{"// 🚀 12 leads enriched, 3 meetings booked today"}</span>],
];

export default function Hero() {
  const display = useScramble(WORDS);

  return (
    <section className="relative overflow-hidden">
      {/* Checkered grid */}
      <div className="check-grid absolute inset-0" />

      {/* Glow — top right terracotta */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-[700px] w-[700px] rounded-full"
        style={{ background: "radial-gradient(ellipse at center, #c4653a35 0%, #c4653a10 40%, transparent 70%)" }}
      />
      {/* Glow — bottom left purple */}
      <div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(ellipse at center, #818cf818 0%, transparent 65%)" }}
      />
      {/* Glow — center left pink */}
      <div
        className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full"
        style={{ background: "radial-gradient(ellipse at center, #f472b614 0%, transparent 65%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-12 md:pb-32 md:pt-16">
        <div className="flex flex-col items-center gap-14">

          {/* ── Copy ── */}
          <div className="flex flex-col items-start gap-7">
            <h1
              className="text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem] xl:text-7xl"
            >
              <span
                className="font-light"
                style={{ color: "#a8a29e" }}
              >
                Turn AI Into Your Unfair
              </span>
              <br />
              <span
                className="font-bold"
                style={{
                  color: "var(--color-foreground)",
                  display: "inline-flex",
                  alignItems: "baseline",
                  gap: "4px",
                }}
              >
                <span
                  className="cursor-blink"
                  style={{
                    display: "inline-block",
                    width: "0.55em",
                    height: "0.1em",
                    background: "var(--color-accent)",
                    borderRadius: "2px",
                    marginBottom: "0.15em",
                    alignSelf: "flex-end",
                  }}
                />
                {display}
              </span>
            </h1>

            <p
              className="max-w-xl text-lg leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              We build custom AI agents, automations, and n8n workflows that
              eliminate manual work. Free up your time for what actually moves
              the needle.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="https://cal.com/%D7%90%D7%99%D7%AA%D7%99-%D7%97%D7%9B%D7%9E%D7%95%D7%9F-wvqsrq/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-150"
                style={{ background: "var(--color-accent)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent-hover)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background = "var(--color-accent)")
                }
              >
                Book a Consultation →
              </a>
              <a
                href="#services"
                className="inline-flex items-center rounded-xl border px-5 py-3 text-sm font-semibold transition-colors duration-150"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-foreground)",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-surface)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                See Our Services
              </a>
            </div>
          </div>

          {/* ── Dual overlapping windows ── */}
          <div
            className="w-full max-w-4xl"
            style={{
              transform: "perspective(1100px) rotateX(4deg)",
              transformOrigin: "top center",
            }}
          >
            <div className="relative" style={{ paddingLeft: "120px" }}>

              {/* Back window — Itay AI (file tree only) */}
              <div
                className="absolute left-0 top-4 hidden overflow-hidden rounded-2xl border sm:block"
                style={{
                  width: "240px",
                  zIndex: 1,
                  background: "#ffffff",
                  borderColor: "#e5e7eb",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
                }}
              >
                {/* Chrome */}
                <div
                  className="flex items-center gap-2 border-b px-3 py-2.5"
                  style={{ background: "#f9fafb", borderColor: "#e5e7eb" }}
                >
                  <div className="flex items-center gap-1">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ff5f57" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#28c840" }} />
                  </div>
                  <span className="ml-1 text-xs font-semibold" style={{ color: "#374151" }}>
                    Itay AI
                  </span>
                </div>

                {/* File tree */}
                <div className="py-2" style={{ background: "#f5f5f5" }}>
                  {fileTree.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1 py-0.5 text-xs"
                      style={{
                        paddingLeft: `${item.depth * 12 + 10}px`,
                        paddingRight: "8px",
                        background: item.active ? "#fff3ee" : "transparent",
                        color: item.active ? "#c4653a" : item.type === "folder" ? "#374151" : "#6b7280",
                        fontWeight: item.active ? 500 : 400,
                        fontFamily: "monospace",
                      }}
                    >
                      <span style={{ opacity: 0.5, fontSize: "10px" }}>
                        {item.type === "folder" ? "▾" : "·"}
                      </span>
                      {item.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Front window — code editor */}
              <div
                className="overflow-hidden rounded-2xl border"
                style={{
                  position: "relative",
                  zIndex: 2,
                  background: "#ffffff",
                  borderColor: "#e5e7eb",
                  boxShadow: "0 20px 60px -10px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.04)",
                }}
              >
                {/* Chrome */}
                <div
                  className="flex items-center gap-3 border-b px-4 py-3"
                  style={{ background: "#f9fafb", borderColor: "#e5e7eb" }}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full" style={{ background: "#ff5f57" }} />
                    <span className="h-3 w-3 rounded-full" style={{ background: "#ffbd2e" }} />
                    <span className="h-3 w-3 rounded-full" style={{ background: "#28c840" }} />
                  </div>
                  <div className="ml-2 flex items-center gap-1">
                    {["lead-gen.config.ts", "support.config.ts", "onboarding.json"].map((tab, i) => (
                      <span
                        key={tab}
                        className="rounded-md px-3 py-1 text-xs font-medium"
                        style={
                          i === 0
                            ? { background: "#ffffff", color: "#374151", border: "1px solid #e5e7eb" }
                            : { color: "#9ca3af" }
                        }
                      >
                        {tab}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Code */}
                <div className="overflow-x-auto px-6 py-5">
                  <pre
                    className="text-xs leading-[1.9]"
                    style={{
                      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace',
                      color: "#374151",
                    }}
                  >
                    <code>
                      {codeLines.map((parts, i) => (
                        <div key={i}>
                          <span style={{ color: "#d1d5db", userSelect: "none", marginRight: "16px" }}>
                            {String(i + 1).padStart(2, " ")}
                          </span>
                          {parts}
                        </div>
                      ))}
                    </code>
                  </pre>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
