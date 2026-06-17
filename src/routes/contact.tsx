import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Mail, MessageCircle } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

const CALENDLY_URL =
  "https://calendly.com/boafosolutions/30min?hide_gdpr_banner=1&background_color=0b0f14&text_color=e2e8f0&primary_color=22d3ee";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — M-Pesa Integration Developers | Boafo Solutions" },
      {
        name: "description",
        content:
          "Talk to M-Pesa integration developers. Boafo Solutions — Ngong 5th Ave, Upperhill. Book a 30-minute architecture discovery. WhatsApp 0737 575 156.",
      },
      {
        name: "keywords",
        content:
          "Software developers, M-Pesa integration, Custom software company, Boafo Solutions contact, Upperhill software developer",
      },
      { property: "og:title", content: "Contact Boafo Solutions" },
      {
        property: "og:description",
        content:
          "Book a 30-minute architecture discovery with Boafo Solutions, custom software developers.",
      },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const TRUST = [
  "Senior engineer, not a sales rep",
  "Fixed-price scope, no surprises",
  "Full source ownership at delivery",
  "Ongoing support after launch",
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />

      <main className="pt-28 sm:pt-32 pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px]"
          style={{ background: "var(--gradient-hero)" }}
        />

        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16 lg:items-start">
            {/* LEFT — Context */}
            <motion.aside
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 lg:sticky lg:top-28 space-y-8 sm:space-y-10"
            >
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  Architecture Discovery
                </span>
                <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  Tell us where the{" "}
                  <span className="bg-gradient-to-r from-primary to-indigo-400 bg-clip-text text-transparent">
                    friction
                  </span>{" "}
                  lives.
                </h1>
                <p className="max-w-md text-base text-muted-foreground sm:text-lg">
                  One 30-minute call with a senior engineer. We diagnose your
                  primary bottleneck and return a clear, fixed-price
                  architecture plan — no pressure, no jargon.
                </p>
              </div>

              <ul className="grid gap-3">
                {TRUST.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <dl className="space-y-3 border-t border-border/60 pt-6 font-mono text-sm">
                <Row label="Email" href="mailto:info@boafosolutions.com" value="info@boafosolutions.com" />
                <Row label="Phone" href="tel:+254737575156" value="0737 575 156" />
                <Row
                  label="WhatsApp"
                  href="https://wa.me/254737575156"
                  external
                  value="Chat instantly"
                />
                <Row label="NBO" value="Ngong 5th Ave, Upperhill" />
              </dl>
            </motion.aside>

            {/* RIGHT — Two action cards */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 min-w-0">
              {/* Card 1: Book a call */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden rounded-2xl border border-border bg-secondary/30"
              >
                <header className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border/60 p-5 sm:p-6">
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                      Option 1 · Fastest path
                    </p>
                    <h2 className="mt-1 text-lg font-semibold text-foreground sm:text-xl">
                      Book a 30-min discovery
                    </h2>
                  </div>
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                    <Calendar className="h-5 w-5" />
                  </div>
                </header>
                <div className="p-3 sm:p-4">
                  <CalendlyEmbed url={CALENDLY_URL} minHeight={640} />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 px-5 py-3 text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground sm:px-6">
                  <span>30 mins · Google Meet</span>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Open in new tab ↗
                  </a>
                </div>
              </motion.section>

              {/* Divider */}
              <div className="flex items-center gap-4 px-1">
                <div className="h-px flex-1 bg-border/60" />
                <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  or
                </span>
                <div className="h-px flex-1 bg-border/60" />
              </div>

              {/* Card 2: Inquiry form */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-2xl border border-indigo-500/20 bg-indigo-500/[0.04] p-5 sm:p-7"
              >
                <header className="mb-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-indigo-500/15 text-indigo-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                      Option 2 · Send a brief
                    </p>
                    <h2 className="mt-1 text-lg font-semibold text-foreground sm:text-xl">
                      Detailed inquiry
                    </h2>
                  </div>
                </header>
                <ContactForm />
              </motion.section>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile sticky quick-contact rail */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70 lg:hidden">
        <div className="mx-auto grid max-w-md grid-cols-3 divide-x divide-border/60">
          <QuickAction href="https://wa.me/254737575156" label="WhatsApp" icon={<MessageCircle className="h-4 w-4" />} external />
          <QuickAction href="tel:+254737575156" label="Call" icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.8a2 2 0 01-.45 1.84L8.09 10.91a11 11 0 005 5l1.755-1.38a2 2 0 011.84-.45l2.8.7A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>} />
          <QuickAction href="mailto:info@boafosolutions.com" label="Email" icon={<Mail className="h-4 w-4" />} />
        </div>
      </div>

      <div className="pb-16 lg:pb-0" />
      <SiteFooter />
    </div>
  );
}

function Row({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = href ? (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="text-foreground transition-colors hover:text-primary"
    >
      {value}
    </a>
  ) : (
    <span className="text-foreground/90">{value}</span>
  );
  return (
    <div className="grid grid-cols-[80px_minmax(0,1fr)] items-center gap-4">
      <dt className="uppercase tracking-[0.16em] text-muted-foreground">{label}</dt>
      <dd className="truncate">{content}</dd>
    </div>
  );
}

function QuickAction({
  href,
  label,
  icon,
  external,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center justify-center gap-2 py-3 text-xs font-medium text-foreground/90 transition-colors hover:bg-primary/10 hover:text-primary"
    >
      <span className="text-primary">{icon}</span>
      {label}
    </a>
  );
}
