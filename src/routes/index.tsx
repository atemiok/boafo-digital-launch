import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { toast } from "sonner";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Loader2,
  CreditCard,
  Users,
  LifeBuoy,
  Mail,
  Phone,
  CheckCircle2,
  Leaf,
  Building2,
  PlugZap,
  BarChart3,
} from "lucide-react";
import { sendContactRequest } from "@/lib/contact.functions";
import { BoafoLogo } from "@/components/BoafoLogo";
import { ReconciliationCanvas } from "@/components/ReconciliationCanvas";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Boafo Solutions",
          url: "https://boafosolutions.com",
          description:
            "Premium custom software and web portal development agency in Nairobi, Kenya. Specialists in M-Pesa integration, role-based platforms, property management software, and business automation.",
          areaServed: [
            { "@type": "Country", name: "Kenya" },
            { "@type": "Place", name: "East Africa" },
          ],
          serviceType: [
            "Custom software development",
            "Web portal development",
            "M-Pesa API integration",
            "Property management software",
            "Business automation software",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Nairobi",
            addressCountry: "KE",
          },
          email: "info@boafosolutions.com",
          telephone: "+254737575156",
          knowsAbout: [
            "Role-based access control",
            "M-Pesa Daraja API",
            "Property management portals",
            "Green energy asset tracking",
            "Enterprise reporting dashboards",
          ],
        }),
      },
    ],
  }),
  component: Landing,
});

/* ---------- Motion presets ---------- */
const EASE = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.06, duration: 0.85, ease: EASE },
  }),
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const cardHover = {
  rest: { y: 0 },
  hover: { y: -6, transition: { duration: 0.4, ease: EASE } },
};


/* ---------- Page ---------- */
function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <Verticals />
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
    { href: "#verticals", label: "Verticals" },
    { href: "#guarantee", label: "Guarantee" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 rounded-full border border-border bg-background/70 px-3 pl-5 shadow-lg backdrop-blur-xl"

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
          aria-label="Initiate architecture discovery"
          className="btn-mint inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold"
        >
          Discovery
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </motion.div>
    </header>
  );
}

/* ---------- Hero + Reconciliation Canvas ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-bg" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-5xl px-5 text-center sm:px-8"
      >
        <motion.div
          variants={fadeUp}
          className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur"
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_oklch(0.7_0.16_162/0.7)]"
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          Built to make hard things effortless
        </motion.div>


        <motion.h1
          variants={fadeUp}
          className="text-balance text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
        >
          We build great websites, custom webapps, and{" "}
          <span className="text-gradient">autonomous business engines.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
        >
          From high-conversion corporate sites to complex, role-based secure
          platforms. We turn the messy, manual parts of your business into
          quiet, dependable software that just works.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            aria-label="Initiate architecture discovery"
            className="btn-mint inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            Initiate Architecture Discovery
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#verticals"
            className="btn-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            Explore Core Verticals
          </a>
        </motion.div>
      </motion.div>

      {/* Interactive cornerstone */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
        className="mx-auto mt-14 max-w-6xl px-5 sm:px-8"
      >
        <ReconciliationCanvas />
      </motion.div>
    </section>
  );
}

/* ---------- Core Engineering Verticals (Bento) ---------- */
function Verticals() {
  const items = [
    {
      icon: Users,
      title: "Role-Based Secure Platforms & Portals",
      copy: "Granular role-based access control (RBAC). Your field agents log operational updates, your accountants reconcile numbers, and you monitor everything from an executive command center. Complete data isolation with bank-grade security.",
      span: "md:col-span-4",
      accent: true,
    },
    {
      icon: CreditCard,
      title: "M-Pesa & API Workflow Choreography",
      copy: "Real-time payment reconciliation. Our engines plug directly into local payment switches to automatically capture, validate, and post transactions straight to your internal ledgers — ending manual tracking forever.",
      span: "md:col-span-2",
    },
    {
      icon: Leaf,
      title: "Green Energy & Smart Asset Infrastructure",
      copy: "Custom web solutions for utility tracking and green energy distribution. Monitor smart assets, automate consumption reporting, and manage complex multi-tenant billing models effortlessly.",
      span: "md:col-span-2",
    },
    {
      icon: Building2,
      title: "Advanced Property Management Software",
      copy: "Turnkey digital systems for large-scale real estate. Automate utility billing, run tenant self-service portals, generate automated invoice reminders, and view instant portfolio performance metrics.",
      span: "md:col-span-4",
    },
  ];

  return (
    <section id="verticals" className="relative border-y border-border bg-secondary/40 py-24 sm:py-32">
      <SectionHeader
        eyebrow="What we build"
        title="Four production-grade systems. Engineered to make your day easier."
        subtitle="Each one is a battle-tested foundation we tailor to your workflow — shipped fast, owned forever."
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
            initial="rest"
            whileHover="hover"
            animate="rest"
            className={`solid-card group relative overflow-hidden p-7 sm:p-8 ${it.span}`}
          >
            <motion.div variants={cardHover} className="relative flex h-full flex-col">
              {it.accent && (
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
                  style={{ background: "var(--gradient-electric)" }}
                  animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
              <motion.div
                whileHover={{ rotate: -6, scale: 1.08 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-primary/8 text-primary transition-colors group-hover:border-primary/50"
              >
                <it.icon className="h-5 w-5" />
              </motion.div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                {it.title}
              </h3>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                {it.copy}
              </p>
            </motion.div>
          </motion.article>

        ))}
      </motion.div>
    </section>
  );
}

/* ---------- Enterprise Guarantee ---------- */
function Guarantee() {
  const pillars = [
    {
      icon: PlugZap,
      title: "Deep API Integrations",
      copy: "Seamless connection to CRB bureaus, local SMS aggregators, payment gateways, and existing ERPs — so your stack finally speaks one language.",
    },
    {
      icon: BarChart3,
      title: "Management Reporting & Analytics",
      copy: "Beautifully structured visual data feeds that surface revenue leakages and operational risk before they hit your bottom line.",
    },
    {
      icon: LifeBuoy,
      title: "Uncompromising Support After Launch",
      copy: "We don't ship and disappear. Continuous server architecture optimization, proactive maintenance, and dedicated lifecycle support.",
    },
  ];

  return (
    <section id="guarantee" className="relative py-24 sm:py-32">
      <SectionHeader
        eyebrow="Our promise"
        title="Built to last. Built to ease the everyday grind."
        subtitle="Three commitments that separate Boafo from freelancers, agencies, and off-the-shelf templates."
      />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-14 grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-3"
      >
        {pillars.map((p) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            whileHover={{ y: -6, transition: { duration: 0.4, ease: EASE } }}
            className="solid-card p-7 sm:p-8"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-primary/8 text-primary"
            >
              <p.icon className="h-5 w-5" />
            </motion.div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>

          </motion.div>
        ))}
      </motion.div>

      <div className="mx-auto mt-12 max-w-5xl px-5 sm:px-8">
        <div className="rounded-2xl border border-border bg-background/50 p-5 text-center text-xs text-muted-foreground shadow-sm sm:text-sm backdrop-blur">
          Quiet software for loud businesses — <strong className="text-foreground/90">automation that pays for itself</strong>, integrations that hold, and reporting you'll actually open on a Monday.
        </div>
      </div>

    </section>
  );
}

/* ---------- Contact ---------- */
const BOTTLENECKS = [
  "Manual M-Pesa reconciliation",
  "Spreadsheet-driven operations",
  "WhatsApp-based workflows",
  "Disconnected property management",
  "Smart asset / IoT reporting",
  "Custom corporate website",
  "Other",
];

function Contact() {
  const send = useServerFn(sendContactRequest);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    bottleneck: BOTTLENECKS[0],
    message: "",
  });

  const onChange =
    (k: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    try {
      await send({ data: form });
      toast.success("Request received — we'll be in touch within one business day.");
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        bottleneck: BOTTLENECKS[0],
        message: "",
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
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
          className="solid-card overflow-hidden p-8 sm:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
            <div className="min-w-0 lg:col-span-2">
              <p className="text-xs font-mono uppercase tracking-widest text-primary">
                Architecture Discovery
              </p>
              <h2 className="mt-3 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                Tell us where the friction lives.
              </h2>
              <p className="mt-4 text-muted-foreground">
                One 30-minute call with a senior engineer. We'll diagnose your
                primary bottleneck and return a clear, fixed-price architecture
                plan — no pressure, no jargon.
              </p>
              <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
                {[
                  "Senior engineer, not a sales rep",
                  "Fixed-price scope, no surprises",
                  "Full source ownership at delivery",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:info@boafosolutions.com" className="hover:text-foreground transition-colors">
                    info@boafosolutions.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+254737575156" className="hover:text-foreground transition-colors">
                    0737 575 156
                  </a>
                </p>
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              aria-label="Architecture discovery request form"
              className="space-y-4 rounded-2xl border border-border bg-secondary/40 p-6 lg:col-span-3"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" id="name" value={form.name} onChange={onChange("name")} placeholder="Jane Wanjiku" />
                <Field label="Company" id="company" value={form.company} onChange={onChange("company")} placeholder="Acacia Holdings Ltd" />
                <Field label="Corporate Email" id="email" type="email" value={form.email} onChange={onChange("email")} placeholder="jane@company.co.ke" />
                <Field label="Phone (WhatsApp)" id="phone" type="tel" value={form.phone} onChange={onChange("phone")} placeholder="+254 7XX XXX XXX" />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="bottleneck"
                  className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Primary System Bottleneck
                </label>
                <select
                  id="bottleneck"
                  aria-label="Primary system bottleneck"
                  required
                  value={form.bottleneck}
                  onChange={onChange("bottleneck")}
                  className="w-full rounded-xl border border-input bg-background/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-ring"
                >
                  {BOTTLENECKS.map((b) => (
                    <option key={b} value={b} className="bg-background text-foreground">
                      {b}

                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                >
                  Anything else? <span className="normal-case text-muted-foreground/70">(optional)</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  aria-label="Additional notes"
                  value={form.message}
                  onChange={onChange("message")}
                  placeholder="Optional context — current tools, team size, timeline…"
                  className="w-full rounded-xl border border-input bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/60 focus:ring-2 focus:ring-ring"

                />
              </div>

              <button
                type="submit"
                disabled={loading}
                aria-label="Send architecture discovery request"
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
                <ShieldCheck className="h-3 w-3 text-primary" /> Your details are kept private
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
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <BoafoLogo />
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Web portals, payment workflows, and business automation — built to
            ease the everyday grind and supported for life.
          </p>
          <div className="mt-5 space-y-1.5 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href="mailto:info@boafosolutions.com" className="hover:text-foreground transition-colors">
                info@boafosolutions.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+254737575156" className="hover:text-foreground transition-colors">
                0737 575 156
              </a>
            </p>
          </div>
        </div>
        <FooterCol
          title="Verticals"
          links={[
            { label: "Role-Based Portals", href: "#verticals" },
            { label: "M-Pesa Integration", href: "#verticals" },
            { label: "Green Energy Infrastructure", href: "#verticals" },
            { label: "Property Management", href: "#verticals" },
          ]}
        />
        <FooterCol
          title="Company"
          links={[
            { label: "Why Boafo", href: "#guarantee" },
            { label: "Live Simulator", href: "#top" },
            { label: "Book Discovery", href: "#contact" },
            { label: "WhatsApp Us", href: "https://wa.me/254737575156" },
            { label: "Email", href: "mailto:info@boafosolutions.com" },
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

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="transition-colors hover:text-foreground"
              {...(l.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {l.label}
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
