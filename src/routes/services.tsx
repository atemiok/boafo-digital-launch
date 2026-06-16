import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import {
  Users,
  CreditCard,
  Leaf,
  Building2,
  Headphones,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Custom Software Developers | Boafo Solutions" },
      {
        name: "description",
        content:
          "Custom software developers — role-based portals, M-Pesa & Daraja integration, property management software, IoT telemetry, and management reporting.",
      },
      {
        name: "keywords",
        content:
          "Custom software developers, Web portal developers, M-Pesa integration, Daraja API developers, Property management software, SACCO software, IoT developers, Business automation, Boafo Solutions",
      },
      { property: "og:title", content: "Services — Boafo Solutions" },
      {
        property: "og:description",
        content:
          "Role-based portals, M-Pesa integration, property management software, IoT telemetry, and reporting.",
      },
      { property: "og:locale", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.05, duration: 0.65, ease: EASE },
  }),
};

const SERVICES = [
  {
    icon: Users,
    title: "Role-Based Access Platforms",
    summary:
      "Granular RBAC portals where field agents, accountants, and executives each see exactly what they need — and nothing else.",
    points: [
      "Row-level isolation by tenant, branch, or role",
      "Full audit trail on every action",
      "Single sign-on (Google Workspace, Microsoft 365)",
      "Mobile-first PWA for field teams",
    ],
  },
  {
    icon: CreditCard,
    title: "M-Pesa & API Workflow Choreography",
    summary:
      "We plug Safaricom Daraja straight into your ledger. Payments match invoices, customers get branded receipts, and your books close in real time.",
    points: [
      "Daraja C2B, STK Push, B2C disbursements",
      "Automatic invoice matching (>99% accuracy)",
      "SMS + WhatsApp receipts",
      "ERP / Xero / QuickBooks sync",
    ],
  },
  {
    icon: Leaf,
    title: "Green Energy & Smart Asset Infrastructure",
    summary:
      "Unified telemetry pipeline for solar inverters, smart meters, and IoT sensors — with prepaid token vending built in.",
    points: [
      "MQTT / HTTP ingestion from any brand",
      "Prepaid token vending via M-Pesa",
      "Live consumption map for CFOs",
      "Anomaly alerts to engineers' phones",
    ],
  },
  {
    icon: Building2,
    title: "Advanced Property Management Software",
    summary:
      "Turnkey real estate platform: prorated rent, STK payments, tenant self-service, and a board-ready dashboard.",
    points: [
      "Tenant statements & receipts on autopilot",
      "Caretaker console for maintenance tickets",
      "Occupancy, arrears, and yield in one view",
      "Multi-block, multi-landlord ready",
    ],
  },
  {
    icon: Headphones,
    title: "Customer Self-Service Portals",
    summary:
      "Give your clients a clean, branded portal to manage accounts, raise tickets, and download documents — 24/7.",
    points: [
      "Branded login with your domain",
      "Document vault & secure messaging",
      "Self-service updates reduce support load",
      "API-ready for downstream systems",
    ],
  },
  {
    icon: BarChart3,
    title: "Management Reporting & Analytics",
    summary:
      "Live, structured dashboards that turn raw operational data into decisions your CFO will actually open on Monday.",
    points: [
      "Daily auto-emailed exec briefs",
      "Drill-down from KPI to transaction",
      "Custom export to Excel / Google Sheets",
      "Anomaly detection on revenue lines",
    ],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />
      <main className="pt-32 sm:pt-36">
        <section className="relative overflow-hidden pb-12">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
          <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
            <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-xs font-mono uppercase tracking-widest text-primary">
              Services
            </motion.p>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mt-3 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            >
              The full <span className="text-gradient">Boafo capability stack.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
            >
              Full-stack portal development company — we build, integrate,
              and support every layer of your operational software, from M-Pesa
              callbacks to executive dashboards.
            </motion.p>
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:px-8 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <motion.article
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                custom={i}
                whileHover={{ y: -5, transition: { duration: 0.35, ease: EASE } }}
                className="solid-card group relative overflow-hidden p-7"
              >
                <motion.div
                  whileHover={{ rotate: -6, scale: 1.08 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-primary/10 text-primary"
                >
                  <s.icon className="h-5 w-5" />
                </motion.div>
                <h2 className="mt-4 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                <ul className="mt-4 space-y-2">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-foreground/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-4xl px-5 text-center sm:px-8">
            <Link
              to="/contact"
              className="btn-mint inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              Scope your system
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
