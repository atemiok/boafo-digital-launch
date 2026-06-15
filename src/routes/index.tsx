import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowRight,
  LayoutDashboard,
  Smartphone,
  Leaf,
  CloudLightning,
  Sparkles,
  Loader2,
  Receipt,
  MessageSquareWarning,
  FileSpreadsheet,
  ShieldCheck,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { sendContactRequest } from "@/lib/contact.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Custom Business Portals & Automation Systems Kenya | Boafo Solutions" },
      {
        name: "description",
        content:
          "We build custom web portals, automated business workflows, and green energy software for Kenyan enterprises. Replace spreadsheets with secure, reliable systems.",
      },
      { property: "og:title", content: "Boafo Solutions — Systems that run your business on autopilot" },
      {
        property: "og:description",
        content:
          "Custom dashboards, M-Pesa & SMS automation, and green energy tracking — built for Kenyan businesses.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <PainPoints />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  const links = [
    { href: "#problem", label: "The Problem" },
    { href: "#services", label: "What We Build" },
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
          Free System Demo
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
            Proudly built in Nairobi for Kenyan businesses
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            We build systems that run your business{" "}
            <span className="text-gradient">on autopilot.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            Stop relying on messy spreadsheets and manual follow-ups. We build
            custom portals, automated workflows, and green energy tracking tools
            that save time and stop money leakages.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="btn-mint inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              Request a Free System Demo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="btn-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              See what we build
            </a>
          </div>

          <div className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {[
              { v: "0", l: "Lost payments" },
              { v: "24/7", l: "Cloud uptime" },
              { v: "M-Pesa", l: "Auto-matched" },
              { v: "100%", l: "Yours forever" },
            ].map((s) => (
              <div key={s.l} className="bg-surface px-4 py-5 text-center">
                <div className="text-xl font-bold text-foreground sm:text-2xl">{s.v}</div>
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

/* ---------- Pain Points ---------- */
function PainPoints() {
  const items = [
    {
      icon: Receipt,
      title: "Losing track of payments and manual receipts?",
      copy: "Money comes in on M-Pesa, but no one knows which invoice it matched. Receipts get lost. Customers get billed twice.",
    },
    {
      icon: MessageSquareWarning,
      title: "Staff relying on WhatsApp groups for official work?",
      copy: "Important updates get buried under memes. There's no record, no accountability, and new staff have no idea what's going on.",
    },
    {
      icon: FileSpreadsheet,
      title: "Important data stuck in offline Excel sheets?",
      copy: "One laptop crashes and a year of work disappears. Different people keep different versions. Nothing matches at month-end.",
    },
  ];

  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <SectionHeader
        eyebrow="The Problem"
        title="Are manual workflows holding your business back?"
        subtitle="If any of these sound familiar, you're losing money every single week — and you probably don't even know how much."
      />
      <div className="mx-auto mt-14 grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-3">
        {items.map((s) => (
          <article key={s.title} className="glass-card p-7">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-primary">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Services (Bento Grid) ---------- */
function Services() {
  return (
    <section id="services" className="relative border-y border-border bg-surface/40 py-24 sm:py-32">
      <SectionHeader
        eyebrow="What We Build"
        title="Real tools for real Kenyan businesses."
        subtitle="Four core systems we build and customize for your business — one screen, one source of truth."
      />

      <div className="mx-auto mt-14 grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-6 md:grid-rows-2">
        <BentoCard
          className="md:col-span-4"
          icon={LayoutDashboard}
          title="Custom Staff & Client Dashboards"
          copy="Different staff see different things. Your accountant sees finances, the field agent sees tasks, and you see everything on one live screen."
          accent
        />
        <BentoCard
          className="md:col-span-2"
          icon={Smartphone}
          title="M-Pesa & SMS Automation"
          copy="Match payments received via M-Pesa to your invoices instantly. Send SMS alerts to your clients — automatically."
        />
        <BentoCard
          className="md:col-span-2"
          icon={Leaf}
          title="Green Energy & Smart Asset Tracking"
          copy="Live dashboards to track your green energy distribution, solar assets, and automated utility reporting."
        />
        <BentoCard
          className="md:col-span-4"
          icon={CloudLightning}
          title="Secure, Cloud-Based Operations"
          copy="Never lose your business data to a broken laptop or a power outage again. Everything is backed up and accessible from anywhere — phone, tablet, or laptop."
        />
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 text-xs font-mono uppercase tracking-widest text-muted-foreground sm:px-8">
        <span className="inline-flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-primary" /> Bank-grade security</span>
        <span>·</span>
        <span>Daily backups</span>
        <span>·</span>
        <span>Built in Kenya</span>
        <span>·</span>
        <span>You own the code</span>
      </div>
    </section>
  );
}

function BentoCard({
  icon: Icon,
  title,
  copy,
  className = "",
  accent = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  copy: string;
  className?: string;
  accent?: boolean;
}) {
  return (
    <article
      className={`glass-card group relative overflow-hidden p-7 sm:p-8 ${className}`}
    >
      {accent && (
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--gradient-mint)" }}
        />
      )}
      <div className="relative flex h-full flex-col">
        <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface text-primary transition-colors group-hover:border-primary/60">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-5 text-lg font-semibold tracking-tight sm:text-xl">{title}</h3>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
          {copy}
        </p>
      </div>
    </article>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const send = useServerFn(sendContactRequest);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", phone: "", message: "" });

  const onChange =
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await send({ data: form });
      toast.success("Request sent — we'll be in touch within one business day.");
      setForm({ name: "", company: "", phone: "", message: "" });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }

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
              <p className="text-xs font-mono uppercase tracking-widest text-primary">Contact</p>
              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                Let's build a system that fits your exact needs.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Tell us what's slowing your business down. We'll reply on WhatsApp
                or email within one business day with a clear, no-pressure plan.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                {[
                  "Free 30-minute discovery call",
                  "Clear, fixed pricing — no surprises",
                  "You own everything we build",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Mail className="h-3 w-3" /> hello@boafosolutions.com
              </p>
            </div>

            <form
              onSubmit={onSubmit}
              className="space-y-4 rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur"
            >
              <Field
                label="Name"
                id="name"
                value={form.name}
                onChange={onChange("name")}
                placeholder="Jane Wanjiku"
              />
              <Field
                label="Company Name"
                id="company"
                value={form.company}
                onChange={onChange("company")}
                placeholder="Acacia Logistics Ltd"
              />
              <Field
                label="Phone Number (WhatsApp)"
                id="phone"
                type="tel"
                value={form.phone}
                onChange={onChange("phone")}
                placeholder="+254 7XX XXX XXX"
              />
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  What manual process do you want to automate?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="e.g. We track all our deliveries on a WhatsApp group and an Excel sheet…"
                  className="w-full rounded-xl border border-input bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="btn-mint inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Request
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
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
  value,
  onChange,
}: {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        value={value}
        onChange={onChange}
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
            Custom business systems built in Kenya — portals, M-Pesa automation,
            and green energy tracking that just works.
          </p>
        </div>
        <FooterCol title="Company" links={["The Problem", "What We Build", "Contact"]} />
        <FooterCol
          title="We Build"
          links={[
            "Staff & Client Dashboards",
            "M-Pesa & SMS Automation",
            "Green Energy Tracking",
            "Cloud Operations",
          ]}
        />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-5 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-8">
          <p>© {new Date().getFullYear()} Boafo Solutions. Nairobi, Kenya.</p>
          <p className="font-mono uppercase tracking-widest">boafosolutions.com</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">{title}</h4>
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
      <p className="text-xs font-mono uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
