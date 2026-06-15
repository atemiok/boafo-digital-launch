import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  LayoutDashboard,
  Workflow,
  Leaf,
  Plug,
  Compass,
  Database,
  CloudUpload,
  TrendingUp,
  Code2,
  Server,
  Cloud,
  ShieldCheck,
  Sparkles,
  Mail,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boafo Solutions — Engineering the Digital Backbone for Modern Enterprises" },
      {
        name: "description",
        content:
          "Boafo Solutions builds custom web portals, automated B2B workflows, and smart energy integrations for modern enterprises.",
      },
      { property: "og:title", content: "Boafo Solutions — Digital Backbone for Modern Enterprises" },
      {
        property: "og:description",
        content:
          "Custom web portals, automated B2B workflows, and smart energy integrations engineered for scale.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <Workflow_ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#stack", label: "Stack" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-mint)] text-primary-foreground shadow-[var(--shadow-glow)]">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="text-base font-bold tracking-tight">
            Boafo<span className="text-primary">.</span>
          </span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="btn-mint hidden rounded-full px-4 py-2 text-sm font-semibold sm:inline-flex"
        >
          Book Consultation
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg" />

      <div className="mx-auto max-w-7xl px-5 pb-24 pt-20 sm:px-8 sm:pt-28 lg:pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
            Enterprise engineering · Available Q3 2026
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Engineering the{" "}
            <span className="text-gradient">Digital Backbone</span>
            <br className="hidden sm:block" /> for Modern Enterprises.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            We build custom web portals, automated business workflows, and smart
            energy integrations that replace manual friction with scalable
            code.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="btn-mint inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              Schedule an Architecture Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="btn-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              Explore Core Services
            </a>
          </div>

          {/* Mini stats */}
          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {[
              { v: "99.99%", l: "Uptime SLA" },
              { v: "40+", l: "Systems shipped" },
              { v: "12 wk", l: "Avg. time-to-launch" },
              { v: "SOC-2", l: "Engineering posture" },
            ].map((s) => (
              <div key={s.l} className="bg-surface px-4 py-5 text-center">
                <div className="text-xl font-bold text-foreground sm:text-2xl">
                  {s.v}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */
function Services() {
  const items = [
    {
      icon: LayoutDashboard,
      title: "Custom Enterprise Portals",
      copy: "Role-based multi-tenant web applications, vendor management systems, and client dashboards built for secure data segregation and high-volume performance.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation & SaaS Infrastructure",
      copy: "Eliminate manual spreadsheets. We map your internal operations into centralized, cloud-native automated engines with robust validation logic.",
    },
    {
      icon: Leaf,
      title: "Green Energy & Smart Utility Tech",
      copy: "Custom dashboards and digital infrastructure for green energy platforms. Track data distribution, manage smart utility reporting, and optimize operational asset metrics seamlessly.",
    },
    {
      icon: Plug,
      title: "Local API & Infrastructure Integrations",
      copy: "Deep integrations with regional payment rails, automated reconciliation gateways, SMS notification pipes, and enterprise database systems.",
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <SectionHeader
        eyebrow="Core Services"
        title="Systems built for operational scale."
        subtitle="Four engineering practices that replace fragile manual processes with software you can grow into."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2">
        {items.map((s) => (
          <article key={s.title} className="glass-card group p-7 sm:p-8">
            <div className="flex items-start gap-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-surface text-primary transition-colors group-hover:border-primary/50">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  {s.copy}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Tech Stack ---------- */
function TechStack() {
  const layers = [
    {
      icon: Code2,
      tag: "Frontend",
      title: "React & Next.js",
      copy: "Type-safe, server-rendered interfaces with edge-cached performance.",
    },
    {
      icon: Server,
      tag: "Backend",
      title: "Node.js & Express",
      copy: "Robust API services, event pipelines, and validation-first business logic.",
    },
    {
      icon: Database,
      tag: "Data",
      title: "Supabase & PostgreSQL",
      copy: "Secure relational schemas, row-level policies, and audit-ready data flow.",
    },
    {
      icon: Cloud,
      tag: "Infra",
      title: "AWS & DigitalOcean",
      copy: "Scalable container deployments with CI/CD and observability baked in.",
    },
  ];
  return (
    <section id="stack" className="relative border-y border-border bg-surface/40 py-24 sm:py-32">
      <SectionHeader
        eyebrow="Core Architecture"
        title="A modern, developer-first stack."
        subtitle="The same primitives powering high-scale SaaS — tuned for enterprise workloads, regional integrations, and long-term maintainability."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {layers.map((l) => (
          <div key={l.title} className="glass-card p-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
              <l.icon className="h-4 w-4" />
              {l.tag}
            </div>
            <h4 className="mt-4 text-lg font-semibold">{l.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{l.copy}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 text-xs font-mono uppercase tracking-widest text-muted-foreground sm:px-8">
        <span className="inline-flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> Type-safe</span>
        <span>·</span>
        <span>Observability-first</span>
        <span>·</span>
        <span>RLS by default</span>
        <span>·</span>
        <span>CI/CD</span>
        <span>·</span>
        <span>Zero-downtime deploys</span>
      </div>
    </section>
  );
}

/* ---------- Workflow ---------- */
function Workflow_() {
  const steps = [
    {
      icon: Compass,
      title: "Process Mapping & Architecture Discovery",
      copy: "Stakeholder interviews, system audits, and an actionable architecture blueprint.",
    },
    {
      icon: Database,
      title: "Custom Multi-Tenant & Schema Engineering",
      copy: "Data models, role policies, and core services engineered for isolation and growth.",
    },
    {
      icon: CloudUpload,
      title: "Seamless Cloud Integration & Live Deployment",
      copy: "Containerized rollouts, integrations with your existing systems, and observability from day one.",
    },
    {
      icon: TrendingUp,
      title: "Iterative Optimization & Scale Maintenance",
      copy: "Continuous performance tuning, security review, and roadmap engineering as you grow.",
    },
  ];
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <SectionHeader
        eyebrow="Partnership Workflow"
        title="A clean pipeline from discovery to scale."
        subtitle="Four predictable phases that turn ambiguity into a production-grade system."
      />
      <div className="mx-auto mt-14 max-w-5xl px-5 sm:px-8">
        <ol className="relative space-y-5 border-l border-border pl-6 sm:space-y-6 sm:pl-10">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="absolute -left-[34px] grid h-7 w-7 place-items-center rounded-full border border-border bg-surface text-xs font-mono font-semibold text-primary sm:-left-[50px] sm:h-9 sm:w-9 sm:text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-border bg-background text-primary">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold sm:text-lg">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{s.copy}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- CTA / Contact ---------- */
function CTA() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60%]"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="glass-card overflow-hidden p-8 sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="min-w-0">
              <p className="text-xs font-mono uppercase tracking-widest text-primary">
                Contact
              </p>
              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                Ready to automate your operations?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Let's co-engineer a system that scales with your operational
                ambitions. Tell us the shape of the problem — we'll respond
                within one business day with an architectural perspective.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {["NDA-friendly intake", "Architectural response, not a sales pitch", "Fixed-scope or retained engagements"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-4 rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur"
            >
              <Field label="Name" id="name" placeholder="Ada Lovelace" />
              <Field
                label="Corporate Email"
                id="email"
                type="email"
                placeholder="ada@company.com"
              />
              <div className="space-y-1.5">
                <label htmlFor="scope" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Project Scope
                </label>
                <textarea
                  id="scope"
                  rows={4}
                  required
                  placeholder="A short description of the system, integrations, and outcomes you're targeting."
                  className="w-full rounded-xl border border-input bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                className="btn-mint inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
              >
                {submitted ? "Received — we'll be in touch" : "Send to Engineering"}
                {!submitted && <ArrowRight className="h-4 w-4" />}
              </button>
              <p className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <Mail className="h-3 w-3" />
                Or email hello@boafosolutions.com
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-mint)] text-primary-foreground">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-base font-bold tracking-tight">Boafo Solutions</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Engineering the digital backbone for modern enterprises — portals,
            automation, and smart energy systems built to scale.
          </p>
        </div>
        <FooterCol
          title="Company"
          links={["Services", "Process", "Stack", "Contact"]}
        />
        <FooterCol
          title="Practice"
          links={[
            "Enterprise Portals",
            "Workflow Automation",
            "Green Energy Tech",
            "API Integrations",
          ]}
        />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-8">
          <p>© {new Date().getFullYear()} Boafo Solutions. All rights reserved.</p>
          <p className="font-mono uppercase tracking-widest">boafosolutions.com</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="transition-colors hover:text-foreground">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Section header ---------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
      <p className="text-xs font-mono uppercase tracking-widest text-primary">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
