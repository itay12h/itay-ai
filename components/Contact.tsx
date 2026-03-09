"use client";

import { Calendar, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      <div
        className="h-px w-full"
        style={{ background: "var(--color-border)" }}
      />

      {/* Background glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, #c4653a10 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
        {/* Section label */}
        <div className="mb-6 flex justify-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest"
            style={{
              borderColor: "var(--color-accent)",
              color: "var(--color-accent)",
              background: "var(--color-accent-light)",
            }}
          >
            Get Started
          </span>
        </div>

        {/* Heading */}
        <h2
          className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
          style={{ color: "var(--color-foreground)" }}
        >
          Ready to Automate
          <br />
          <em
            style={{
              fontFamily: "var(--font-instrument-serif)",
              fontStyle: "italic",
            }}
          >
            Your Business?
          </em>
        </h2>

        {/* Subtext */}
        <p
          className="mx-auto mb-12 max-w-xl text-lg leading-relaxed"
          style={{ color: "var(--color-muted)" }}
        >
          Book a free 30-minute consultation. We'll map out exactly where AI can
          save you time and money. No commitment, no pressure.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://cal.com/%D7%90%D7%99%D7%AA%D7%99-%D7%97%D7%9B%D7%9E%D7%95%D7%9F-wvqsrq/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors duration-150"
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
            <Calendar size={18} />
            Book a Free Call
          </a>

          <a
            href="https://wa.me/message/GRPQ37RVRM3OG1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 text-base font-semibold transition-colors duration-150"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-foreground)",
              background: "var(--color-background)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--color-surface-elevated)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "var(--color-background)";
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4 text-green-600"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Message on WhatsApp
          </a>
        </div>
      </div>

      <div
        className="h-px w-full"
        style={{ background: "var(--color-border)" }}
      />
    </section>
  );
}
