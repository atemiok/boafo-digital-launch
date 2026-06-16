import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Users,
  LifeBuoy,
  CheckCircle2,
  Leaf,
  Building2,
  BarChart3,
  Headphones,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ReconciliationCanvas } from "@/components/ReconciliationCanvas";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Boafo Solutions | Custom Software & Web Portal Developers" },
      {
        name: "description",
        content:
          "Web portal developers building M-Pesa integration, business automation software, and property management portals for modern enterprises.",
      },
      {
        name: "keywords",
        content:
          "Web portal developers, Custom software developers, Portal development company, Business automation software, M-Pesa integration developers, Property management software, custom web solutions",
      },
      { property: "og:title", content: "Boafo Solutions | Custom Software & Web Portal Developers" },
      {
        property: "og:description",
        content:
          "Custom web portals, M-Pesa integration, and business automation — engineered for the modern enterprise.",
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
            "Custom software, web portal development, and M-Pesa integration agency.",
          serviceType: [
            "Custom software development",
            "Web portal development",
            "M-Pesa API integration",
            "Property management software",
            "Business automation software",
          ],
          email: "info@boafosolutions.com",
          telephone: "+254737575156",
        }),
      },
    ],
  }),
  component: HomePage,
});

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.05, duration: 0.75, ease: EASE },
  }),
};
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />
      <main>
        <Hero />
        <Bento />
        <Promise />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
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
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur"
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-primary"
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
          Engineered for the modern enterprise
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
          className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
        >
          From high-conversion corporate sites to complex, role-based secure
          platforms. We replace manual friction with bulletproof software
          engineered for the modern enterprise landscape.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            to="/contact"
            className="btn-mint inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            Initiate Architecture Discovery
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/services"
            className="btn-outline inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            Explore Core Verticals
          </Link>
        </motion.div>
      </motion.div>

      {/* Interactive cornerstone */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
        className="mx-auto mt-10 max-w-5xl px-5 sm:px-8"
      >
        <ReconciliationCanvas />
      </motion.div>
    </section>
  );
}

const SERVICES = [
  {
    icon: Users,
    title: "Role-Based Access Platforms",
    copy: "Granular control for field agents, accountants, and executives — with full data isolation and bank-grade security.",
    span: "md:col-span-4",
    accent: true,
  },
  {
    icon: CreditCard,
    title: "M-Pesa & API Workflow Choreography",
    copy: "Real-time payment reconciliation, automated SMS receipts, and direct posting to your internal ledger.",
    span: "md:col-span-2",
  },
  {
    icon: Leaf,
    title: "Green Energy & Smart Assets",
    copy: "Custom utility tracking, consumption reporting, and multi-tenant billing for solar and IoT operators.",
    span: "md:col-span-2",
  },
  {
    icon: Building2,
    title: "Property Management Software",
    copy: "Turnkey rent automation, tenant self-service portals, automated invoice reminders, and live portfolio metrics.",
    span: "md:col-span-2",
  },
  {
    icon: Headphones,
    title: "Customer Self-Service Portals",
    copy: "Interactive portals letting your clients manage their own accounts, statements, and requests — 24/7.",
    span: "md:col-span-2",
  },
  {
    icon: BarChart3,
    title: "Management Reporting",
    copy: "Live, automated analytics that surface revenue leakages and operational risk before they hit the bottom line.",
    span: "md:col-span-2",
  },
];

function Bento() {
  return (
    <section id="services" className="relative border-y border-border bg-secondary/40 py-16 sm:py-20">
      <SectionHeader
        eyebrow="What we build"
        title="Six production-grade systems. Tailored to your workflow."
        subtitle="Battle-tested foundations we ship fast — and you own forever."
      />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto mt-10 grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-6"
      >
        {SERVICES.map((it) => (
          <motion.article
            key={it.title}
            variants={fadeUp}
            whileHover={{ y: -5, transition: { duration: 0.35, ease: EASE } }}
            className={`solid-card group relative overflow-hidden p-6 ${it.span}`}
          >
            {it.accent && (
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-25 blur-3xl"
                style={{ background: "var(--gradient-electric)" }}
                animate={{ scale: [1, 1.15, 1], opacity: [0.18, 0.32, 0.18] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
            <motion.div
              whileHover={{ rotate: -6, scale: 1.08 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-primary/10 text-primary"
            >
              <it.icon className="h-5 w-5" />
            </motion.div>
            <h3 className="mt-4 text-base font-semibold tracking-tight text-foreground sm:text-lg">
              {it.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{it.copy}</p>
          </motion.article>
        ))}
      </motion.div>
      <div className="mt-8 text-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          See full service breakdown
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Promise() {
  const pillars = [
    { icon: ShieldCheck, title: "Bulletproof Security", copy: "Row-level isolation, audit trails, and RBAC by default — not as an afterthought." },
    { icon: BarChart3, title: "Reporting You'll Open", copy: "Beautifully structured dashboards that surface leakages and risk in real time." },
    { icon: LifeBuoy, title: "Support After Launch", copy: "Continuous server monitoring, proactive maintenance, and dedicated lifecycle support — for life." },
  ];

  return (
    <section className="relative py-16 sm:py-20">
      <SectionHeader
        eyebrow="Our promise"
        title="Built to last. Supported for life."
        subtitle="Three commitments that separate Boafo from freelancers and off-the-shelf templates."
      />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-10 grid max-w-6xl gap-4 px-5 sm:px-8 md:grid-cols-3"
      >
        {pillars.map((p) => (
          <motion.div
            key={p.title}
            variants={fadeUp}
            whileHover={{ y: -5, transition: { duration: 0.35, ease: EASE } }}
            className="solid-card p-6"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-primary/10 text-primary"
            >
              <p.icon className="h-5 w-5" />
            </motion.div>
            <h3 className="mt-4 text-base font-semibold text-foreground">{p.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="mx-auto mt-10 max-w-4xl px-5 sm:px-8">
        <div className="solid-card flex flex-wrap items-center justify-between gap-4 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-sm text-muted-foreground">
              30-minute architecture discovery with a senior engineer.{" "}
              <span className="text-foreground/90">Fixed-price scope. Full source ownership.</span>
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-mint inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Book it
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-3xl px-5 text-center sm:px-8"
    >
      <p className="text-xs font-mono uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-2.5 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-pretty text-muted-foreground sm:text-base">{subtitle}</p>}
    </motion.div>
  );
}
