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

        {/* SEO content — expanded to resolve thin content */}
        <section className="mx-auto max-w-7xl px-5 pb-10 sm:px-8 sm:pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              Working with Boafo
            </span>
            <h2 className="mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl">
              What to expect when you contact us.
            </h2>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Every inquiry is reviewed by a senior engineer. Below you will find the most common reasons to reach out, our response commitments, and answers to frequently asked questions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ContentCard title="Contact Overview">
              <p>
                Boafo Solutions is a custom software company and digital transformation consultancy helping enterprises across Kenya, Africa, and global markets. Whether you need web development services, mobile app development, M-Pesa integration, enterprise software solutions, or IT consulting, our senior team is ready to advise. This page is the fastest way to{" "}
                <strong>contact Boafo Solutions</strong> — book a discovery call, send a detailed inquiry, or reach us on WhatsApp.
              </p>
            </ContentCard>

            <ContentCard title="How We Can Help" className="md:col-span-2 lg:col-span-1">
              <p>
                Our team supports the full software lifecycle, from architecture to long-term operations. When you contact us, you can discuss:
              </p>
              <ul>
                <li>Custom software and web application development</li>
                <li>Native and cross-platform mobile app development</li>
                <li>M-Pesa, Daraja API, and payment workflow integration</li>
                <li>Enterprise solutions, ERP connectors, and cloud infrastructure</li>
                <li>IT consulting and digital transformation strategy</li>
                <li>Ongoing support, monitoring, and feature improvements</li>
              </ul>
              <p>
                Every conversation starts with understanding your business outcome, not selling a pre-packaged product.
              </p>
            </ContentCard>

            <ContentCard title="Business Inquiries">
              <p>
                For new project requests, software procurement, and strategic architecture reviews, email our enterprise solutions team or book a 30-minute architecture discovery. We prepare a one-page technical brief, a fixed-price scope, and a realistic delivery plan.
              </p>
              <p>
                Typical business inquiries include portal development, automation systems, payment integrations, and legacy modernisation for regulated industries.
              </p>
            </ContentCard>

            <ContentCard title="Support &amp; Customer Service">
              <p>
                Existing clients can contact our <strong>software company support</strong> team for bug reports, feature requests, infrastructure monitoring, and SLA questions. Support requests are routed directly to the engineer who knows your platform.
              </p>
              <p>
                For urgent production issues, WhatsApp or phone is the fastest channel. Non-urgent requests can be logged by email at{" "}
                <a href="mailto:info@boafosolutions.com" className="text-primary hover:underline">info@boafosolutions.com</a>.
              </p>
            </ContentCard>

            <ContentCard title="Partnership Opportunities">
              <p>
                We actively collaborate with technology partners, agencies, and independent consultants across East Africa, Europe, and North America. If you have a referral partnership, technology integration opportunity, or joint go-to-market idea, we would love to explore it.
              </p>
              <p>
                Partners gain direct access to our engineering leadership and transparent commercial terms.
              </p>
            </ContentCard>

            <ContentCard title="Response Time Expectations">
              <p>We respect your time. Our response commitments are:</p>
              <ul>
                <li>New business inquiries: same business day</li>
                <li>Support tickets: within 4 hours during business hours (EAT)</li>
                <li>Critical production issues: immediate escalation</li>
                <li>Partnership requests: within two business days</li>
              </ul>
              <p>
                Messages received outside business hours are queued and answered at the start of the next working day.
              </p>
            </ContentCard>

            <ContentCard title="Office &amp; Remote Availability" className="md:col-span-2 lg:col-span-1">
              <p>
                Our headquarters are on Ngong 5th Avenue in Upperhill, Nairobi, and we operate a remote-first delivery model across Kenya and international time zones. We combine the responsiveness of a local software company with the scale of a distributed engineering team.
              </p>
              <p>
                In-person architecture workshops and executive briefings are available in Nairobi by appointment.
              </p>
            </ContentCard>

            <ContentCard title="Frequently Asked Questions" className="md:col-span-2">
              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold text-foreground">What happens after I submit the contact form?</dt>
                  <dd className="mt-1 text-muted-foreground">
                    A senior engineer reviews your request, follows up within one business day, and schedules a free 30-minute architecture discovery if relevant.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Do you work with international clients?</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Yes. We serve clients in Kenya, Uganda, Tanzania, Rwanda, the United Kingdom, the United States, and the Middle East.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Can I receive a fixed-price quote?</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Yes. After the discovery call we deliver a fixed-price architecture plan and a milestone-based delivery schedule.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Do you sign NDAs before discussing sensitive systems?</dt>
                  <dd className="mt-1 text-muted-foreground">
                    Absolutely. We routinely sign non-disclosure agreements before reviewing proprietary data or systems.
                  </dd>
                </div>
              </dl>
            </ContentCard>
          </div>
        </section>
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

function ContentCard({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border border-border/60 bg-secondary/20 p-5 sm:p-6 ${className}`}
    >
      <h3 className="mb-3 text-lg font-semibold text-foreground sm:text-xl">{title}</h3>
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground [&_a]:text-primary [&_a]:hover:underline [&_li]:relative [&_li]:pl-4 [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.35em] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-primary/70">
        {children}
      </div>
    </article>
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
