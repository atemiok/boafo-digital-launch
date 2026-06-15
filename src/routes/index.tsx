import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Loader2,
  Workflow,
  CreditCard,
  BarChart3,
  Users,
  Sparkles,
  Bot,
  Lock,
  LifeBuoy,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { sendContactRequest } from "@/lib/contact.functions";
import { BoafoLogo } from "@/components/BoafoLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Boafo Solutions | Custom Software & Web Portal Developers Kenya",
      },
      {
        name: "description",
        content:
          "We build great websites, custom webapps, and business automation software in Kenya. Specialists in M-Pesa API integration, property management software, and role-based portals.",
      },
      {
        name: "keywords",
        content:
          "Web portal developers Kenya, Custom software developers Kenya, Portal development company Nairobi, Business automation software Kenya, M-Pesa integration developers Kenya, Property management software Kenya, custom web solutions",
      },
      {
        property: "og:title",
        content:
          "Boafo Solutions | Custom Software & Web Portal Developers Kenya",
      },
      {
        property: "og:description",
        content:
          "Stunning marketing sites and complex, role-based platforms. M-Pesa integration, business automation, and management reporting — engineered in Kenya.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

/* ---------- Motion presets ---------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ---------- Page ---------- */
function Landing() {
  return (
    <div className="dark min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Capabilities />
        <Guarantee />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Floating Nav ---------- */
function Nav() {
  const links = [
    { href: "#capabilities", label: "Capabilities" },
    { href: "#guarantee", label: "Why Boafo" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-full border border-border bg-background/55 px-3 pl-5 backdrop-blur-xl shadow-[0_10px_40px_-20px_rgba(0,0,0,0.7)]"
      >
        <a href="#top" aria-label="Boafo Solutions home" className="flex items-center">
          <BoafoLogo />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
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
          aria-label="Request a project estimate"
          className="btn-mint inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold"
        >
          Get Estimate
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </motion.div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-bg" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-5xl px-5 text-center sm:px-8"
      >
        <motion.div
          variants={fadeUp}
          className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
          Engineered in Nairobi, Kenya
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-balance text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
        >
          We build great websites and{" "}
          <span className="text-gradient">custom webapps.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
        >
          From stunning marketing sites to complex, role-based secure platforms.
          We engineer business automation software and custom web solutions that
          scale Kenyan enterprises.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            aria-label="Request a project estimate"
            className="btn-mint inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            Request a Project Estimate
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#capabilities"
            className="btn-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            See what we build
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
        >
          {[
            { v: "M-Pesa", l: "Native integration" },
            { v: "Role-Based", l: "Multi-tenant access" },
            { v: "Cloud", l: "99.9% uptime" },
            { v: "Owned", l: "Code is yours" },
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
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------- Capabilities (Bento Grid) ---------- */
function Capabilities() {
  const items = [
    {
      icon: Users,
      title: "Role-Based Access Platforms",
      copy: "Secure, multi-tenant dashboards where admins, staff, and clients see exactly what they need — nothing more.",
      span: "md:col-span-4",
      accent: true,
    },
    {
      icon: CreditCard,
      title: "M-Pesa & API Workflows",
      copy: "Seamless M-Pesa payments and reconciliation, plus third-party API integrations (SMS, CRB, ERPs).",
      span: "md:col-span-2",
    },
    {
      icon: BarChart3,
      title: "Management Reporting",
      copy: "Live, automated analytics and data visualization to track your business health at a glance.",
      span: "md:col-span-2",
    },
    {
      icon: Workflow,
      title: "Customer Self-Service",
      copy: "Interactive portals letting your clients manage their own accounts, requests, and documents.",
      span: "md:col-span-4",
    },
  ];

  return (
    <section
      id="capabilities"
      className="relative border-y border-border bg-surface/40 py-24 sm:py-32"
    >
      <SectionHeader
        eyebrow="Core Capabilities"
        title="The systems behind serious Kenyan businesses."
        subtitle="Four production-grade building blocks we tailor and ship for property managers, fintechs, logistics operators, and SACCOs."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto mt-14 grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-6 md:grid-rows-2"
      >
        {items.map((it) => (
          <motion.article
            key={it.title}
            variants={fadeUp}
            className={`glass-card group relative overflow-hidden p-7 sm:p-8 ${it.span}`}
          >
            {it.accent && (
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
                style={{ background: "var(--gradient-electric)" }}
              />
            )}
            <div className="relative flex h-full flex-col">
              <div className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface text-primary transition-colors group-hover:border-primary/60">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight sm:text-xl">
                {it.title}
              </h3>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {it.copy}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

/* ---------- Guarantee ---------- */
function Guarantee() {
  const pillars = [
    {
      icon: Bot,
      title: "Complete Business Automation",
      copy: "Replace manual data entry, spreadsheet juggling, and copy-paste reporting with intelligent, automated systems that just run.",
    },
    {
      icon: Lock,
      title: "Rock-Solid Security",
      copy: "Bank-grade encryption, hardened authentication, daily off-site backups — your operational data is protected end-to-end.",
    },
    {
      icon: LifeBuoy,
      title: "Support After Launch",
      copy: "We don't just hand over the code. We provide continuous maintenance, server monitoring, and feature upgrades.",
    },
  ];

  return (
    <section id="guarantee" className="relative py-24 sm:py-32">
      <SectionHeader
        eyebrow="The Boafo Guarantee"
        title="Built for Kenya, supported for life."
        subtitle="We ship systems we'd be proud to run ourselves — and we stay on to look after them long after launch day."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-14 grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-3"
      >
        {pillars.map((p) => (
          <motion.div key={p.title} variants={fadeUp} className="glass-card p-7 sm:p-8">
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-surface text-primary">
              <p.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const send = useServerFn(sendContactRequest);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const onChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await send({ data: form });
      toast.success("Request sent — we'll be in touch within one business day.");
      setForm({ name: "", company: "", email: "", phone: "", message: "" });
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Something went wrong. Please try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60%]"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="glass-card overflow-hidden p-8 sm:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            <div className="min-w-0 lg:col-span-2">
              <p className="text-xs font-mono uppercase tracking-widest text-primary">
                Contact
              </p>
              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                Tell us about your project.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Whether it's a polished marketing site or a full role-based platform
                with M-Pesa baked in — share what you have in mind. We'll respond
                within one business day with a clear, no-pressure plan.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
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
              <div className="mt-8 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" /> hello@boafosolutions.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" /> Nairobi, Kenya
                </p>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              aria-label="Project estimate request form"
              className="space-y-4 rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur lg:col-span-3"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="Name"
                  id="name"
                  value={form.name}
                  onChange={onChange("name")}
                  placeholder="Jane Wanjiku"
                />
                <Field
                  label="Company"
                  id="company"
                  value={form.company}
                  onChange={onChange("company")}
                  placeholder="Acacia Logistics Ltd"
                />
                <Field
                  label="Email"
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  placeholder="jane@company.co.ke"
                />
                <Field
                  label="Phone"
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange("phone")}
                  placeholder="+254 7XX XXX XXX"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  aria-label="Project description"
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="e.g. We need a tenant portal with M-Pesa rent collection and an admin dashboard for our property managers…"
                  className="w-full rounded-xl border border-input bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-ring"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                aria-label="Send project request"
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
              <p className="flex items-center justify-center gap-1.5 text-[11px] uppercase tracking-widest text-muted-foreground">
                <ShieldCheck className="h-3 w-3 text-primary" /> Your details are
                kept private
              </p>
            </form>
          </div>
        </motion.div>
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
        aria-label={label}
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
          <BoafoLogo />
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Custom software developers in Kenya. Web portals, M-Pesa workflows,
            and business automation — built to scale and supported for life.
          </p>
          <div className="mt-5 space-y-1.5 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" /> hello@boafosolutions.com
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> +254 (0)7XX XXX XXX
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Nairobi, Kenya
            </p>
          </div>
        </div>
        <FooterCol
          title="Capabilities"
          links={[
            "Role-Based Portals",
            "M-Pesa Integration",
            "Management Reporting",
            "Customer Self-Service",
          ]}
        />
        <FooterCol
          title="Company"
          links={["Why Boafo", "Process", "Case Studies", "Contact"]}
        />
      </div>

      {/* Localized SEO crawler block */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
          <p className="text-xs leading-relaxed text-muted-foreground/80">
            <Sparkles className="mr-1.5 inline h-3 w-3 text-primary" />
            Boafo Solutions is a premier{" "}
            <strong className="text-foreground/90">
              portal development company in Nairobi
            </strong>
            , specializing as{" "}
            <strong className="text-foreground/90">
              custom software developers in Kenya
            </strong>
            ,{" "}
            <strong className="text-foreground/90">
              M-Pesa integration developers
            </strong>
            , and creators of advanced{" "}
            <strong className="text-foreground/90">
              property management software
            </strong>
            . We design role-based web portals, business automation software, and
            custom web solutions trusted by enterprises across Kenya and East
            Africa.
          </p>
        </div>
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
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl px-5 text-center sm:px-8"
    >
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
    </motion.div>
  );
}
