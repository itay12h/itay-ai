"use client";

const services = [
  { label: "N8N Automation", href: "#services" },
  { label: "AI Agents", href: "#services" },
  { label: "AI Strategy", href: "#services" },
  { label: "Mentorship", href: "#mentorship" },
  { label: "Custom Solutions", href: "#services" },
];

const company = [
  { label: "Services", href: "#services" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-background)" }}>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <a
              href="/"
              className="text-lg font-bold"
              style={{ color: "var(--color-foreground)" }}
            >
              Itay AI
            </a>
            <p
              className="max-w-xs text-sm leading-relaxed"
              style={{ color: "var(--color-muted)" }}
            >
              AI automation agency helping businesses eliminate manual work and
              scale with intelligent systems.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/itay-hacmon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-lg border transition-colors duration-150"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-muted)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "var(--color-surface)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-foreground)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-muted)";
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* WhatsApp direct */}
              <a
                href="https://wa.me/message/GRPQ37RVRM3OG1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-8 w-8 items-center justify-center rounded-lg border transition-colors duration-150"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-muted)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "var(--color-surface)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#25d366";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-muted)";
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* WhatsApp community */}
              <a
                href="https://chat.whatsapp.com/LOcwgPBJTzI2LNt0rQ64cv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Community"
                className="flex h-8 items-center justify-center gap-1.5 rounded-lg border px-2 text-xs transition-colors duration-150"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-muted)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "var(--color-surface)";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-foreground)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "transparent";
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--color-muted)";
                }}
              >
                Community
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="mb-4 text-sm font-semibold"
              style={{ color: "var(--color-foreground)" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors duration-150"
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
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="mb-4 text-sm font-semibold"
              style={{ color: "var(--color-foreground)" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm transition-colors duration-150"
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
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-4 text-sm font-semibold"
              style={{ color: "var(--color-foreground)" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="https://cal.com/%D7%90%D7%99%D7%AA%D7%99-%D7%97%D7%9B%D7%9E%D7%95%D7%9F-wvqsrq/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-150"
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
                  Book a Call
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/message/GRPQ37RVRM3OG1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-150"
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
                  WhatsApp Message
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/itay-hacmon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-150"
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
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            © 2026 Itay Hacmon. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            Built by Itay Hacmon · Itay AI
          </p>
        </div>
      </div>
    </footer>
  );
}
