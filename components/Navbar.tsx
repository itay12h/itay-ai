"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full backdrop-blur-sm"
      style={{
        background: "rgba(255, 252, 250, 0.92)",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight"
          style={{ color: "var(--color-foreground)" }}
        >
          Itay AI
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-sm font-medium"
              style={{ color: "var(--color-muted)" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color =
                  "var(--color-foreground)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color =
                  "var(--color-muted)")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="https://cal.com/%D7%90%D7%99%D7%AA%D7%99-%D7%97%D7%9B%D7%9E%D7%95%D7%9F-wvqsrq/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors duration-150 md:flex"
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
          Book a Call
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "var(--color-foreground)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="border-t px-6 pb-4 md:hidden"
          style={{
            background: "var(--color-background)",
            borderColor: "var(--color-border)",
          }}
        >
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium"
                style={{ color: "var(--color-muted)" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://cal.com/%D7%90%D7%99%D7%AA%D7%99-%D7%97%D7%9B%D7%9E%D7%95%D7%9F-wvqsrq/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full rounded-lg px-4 py-2.5 text-center text-sm font-semibold text-white"
              style={{ background: "var(--color-accent)" }}
              onClick={() => setOpen(false)}
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
