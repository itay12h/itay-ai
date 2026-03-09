"use client";

import { Users, ArrowRight } from "lucide-react";

const stats = [
  { label: "Community members", value: "1,150+" },
  { label: "Shared automations", value: "200+" },
  { label: "Use cases covered", value: "80+" },
];

export default function Community() {
  return (
    <section id="community" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Section label */}
        <div className="mb-4">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-accent)" }}
          >
            Community
          </span>
        </div>

        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <h2
              className="text-4xl font-bold tracking-tight md:text-5xl"
              style={{ color: "var(--color-foreground)" }}
            >
              Join the
              <br />
              <span
                style={{
                  fontFamily: "var(--font-instrument-serif)",
                  fontStyle: "italic",
                  fontWeight: 400,
                }}
              >
                Community
              </span>
            </h2>

            <p
              className="max-w-md text-lg leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              Connect with builders and founders who are serious about AI
              automation. Share workflows, ask questions, get feedback, and stay
              ahead of the curve. Together.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span
                    className="text-2xl font-bold"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://chat.whatsapp.com/LOcwgPBJTzI2LNt0rQ64cv"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150"
              style={{ background: "#25d366" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "#1ebe5c")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.background =
                  "#25d366")
              }
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Join on WhatsApp
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right: community card */}
          <div className="flex justify-end">
            <div
              className="w-full max-w-sm rounded-2xl border p-8"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-border)",
              }}
            >
              {/* WhatsApp icon */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500">
                  <svg
                    viewBox="0 0 24 24"
                    fill="white"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-foreground)" }}
                  >
                    Itay AI Community
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-muted)" }}>
                    WhatsApp Group
                  </p>
                </div>
              </div>

              <p
                className="mb-6 text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                A free community of AI builders, entrepreneurs, and automation
                enthusiasts. Get early access to workflows, templates, and
                exclusive Q&A sessions.
              </p>

              {/* Avatars */}
              <div className="mb-6 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["#c4653a", "#86b87a", "#6b9fd4", "#c4a882", "#9b87c4"].map(
                    (color, i) => (
                      <div
                        key={i}
                        className="flex h-7 w-7 items-center justify-center rounded-full border-2 text-xs font-bold text-white"
                        style={{
                          background: color,
                          borderColor: "var(--color-surface)",
                        }}
                      >
                        {["I", "A", "M", "R", "S"][i]}
                      </div>
                    )
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs" style={{ color: "var(--color-muted)" }}>
                    +1,150 members
                  </span>
                  <span className="text-xs font-medium" style={{ color: "var(--color-accent)" }}>
                    ↑ 180+ joining each week
                  </span>
                </div>
              </div>

              <a
                href="https://chat.whatsapp.com/LOcwgPBJTzI2LNt0rQ64cv"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-white transition-colors duration-150"
                style={{ background: "#25d366" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    "#1ebe5c")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.background =
                    "#25d366")
                }
              >
                <Users size={15} />
                Join the Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
