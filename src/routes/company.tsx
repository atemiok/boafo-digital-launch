import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  Compass,
  PencilRuler,
  Code2,
  Rocket,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — Built to Last. Supported for Life. | Boafo Solutions" },
      {
        name: "description",
        content:
          "Boafo Solutions is a boutique enterprise software agency. Architecture-first engineering, transparent process, and lifetime support — not freelancer roulette.",
      },
      { property: "og:title", content: "Company — Boafo Solutions" },
      {
        property: "og:description",
        content:
          "Architecture-first engineering and lifetime support for the modern enterprise. Meet the operating model behind Boafo.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/company" },
    ],
    links: [{ rel: "canonical", href: "/company" }],
  }),
  component: CompanyPage,
});

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.06, duration: 0.7, ease: EASE },
  }),
};

const TIMELINE = [
  {
    code: "01 · Discovery",
    title: "Architecture Call",
    body: "A 30-minute working session. We map your bottleneck, integrations, and the cost of doing nothing — then send a one-page technical brief.",
    icon: Compass,
  },
  {
    code: "02 · Design",
    title: "Systems Blueprint",
    body: "Data model, role matrix, API contracts, and UI flows. You see exactly what we'll ship before a single line of production code is written.",
    icon: PencilRuler,
  },
  {
    code: "03 · Build",
    title: "Iterative Engineering",
    body: "Two-week increments, demoed live. Postgres, Node, React, Daraja, IoT — composed into a single coherent platform under version control from day one.",
    icon: Code2,
  },
  {
    code: "04 · Deploy",
    title: "Production Launch",
    body: "Blue-green deploy onto hardened infrastructure. Logs, alerts, backups, and a runbook handed to your team — not a zip file and a goodbye.",
    icon: Rocket,
  },
  {
    code: "05 · Operate",
    title: "Lifetime Support",
    body: "We watch the dashboards so you don't. SLA monitoring, monthly reviews, and continuous improvement — for as long as the system runs.",
    icon: ShieldCheck,
  },
];

const PRINCIPLES = [
  {
    title: "Architecture over heroics",
    body: "Boring infrastructure, bulletproof outcomes. We optimise for the next three years, not the next sprint.",
  },
  {
    title: "Transparent by default",
    body: "Live boards, real demos, weekly written updates. No black box, no surprise invoices, no 'we'll loop back'.",
  },
  {
    title: "One team, one throat to choke",
    body: "Senior engineers from discovery to operation — never handed off to a junior pool once the contract is signed.",
  },
  {
    title: "Owned, not rented",
    body: "Your repos, your cloud accounts, your data. Boafo is your engineering partner, never your hostage-taker.",
  },
];

function CompanyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />
      <main className="pt-32 sm:pt-36">
        {/* ───────────── HERO ───────────── */}
        <section className="relative overflow-hidden pb-16 sm:pb-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{ background: "var(--gradient-hero)" }}
          />
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-60" />

          <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-xs font-mono uppercase tracking-[0.22em] text-primary-glow"
            >
              Company · Operating model
            </motion.p>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="mt-3 text-balance text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
            >
              Built to last. <span className="text-gradient">Supported for life.</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg"
            >
              Boafo Solutions exists because enterprises are tired of freelancer roulette and
              consultancy theatre. We are the small, senior team that engineers your operating
              backbone — then stays to run it.
            </motion.p>
          </div>
        </section>

        {/* ───────────── NARRATIVE ───────────── */}
        <section className="relative border-y border-border bg-surface/40 py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="text-xs font-mono uppercase tracking-[0.22em] text-primary-glow">
                From freelancer roulette · to agency-grade partnership
              </p>
              <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                The shift most operators discover too late.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              custom={1}
              className="space-y-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              <p>
                Most enterprise software starts the same way: a freelancer is cheaper, a generic
                SaaS is faster. Then the integration breaks, the freelancer ghosts, and the SaaS
                refuses to bend to your actual workflow. The bottleneck returns — bigger.
              </p>
              <p>
                <span className="font-semibold text-foreground">Boafo is the third option.</span>{" "}
                A senior, accountable team that designs the system around your operation, not
                around a template. We ship in production-grade increments, we own the runbook,
                and we stay on call long after launch day.
              </p>
              <p>
                The result: software you can bet quarterly targets on — with a phone number that
                gets answered.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ───────────── ANIMATED TIMELINE ───────────── */}
        <section className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="text-xs font-mono uppercase tracking-[0.22em] text-primary-glow"
              >
                Discovery · to · Production
              </motion.p>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                custom={1}
                className="mt-3 text-balance text-4xl font-bold tracking-tight sm:text-5xl"
              >
                How a single call becomes a running platform.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                custom={2}
                className="mt-4 text-pretty text-muted-foreground"
              >
                The same five-stage process, every engagement. No surprises, no scope drama.
              </motion.p>
            </div>

            <div className="relative">
              {/* Vertical animated rail */}
              <motion.div
                aria-hidden
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.4, ease: EASE }}
                style={{ transformOrigin: "top" }}
                className="absolute left-5 top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/80 via-primary/40 to-transparent md:block"
              />

              <ol className="space-y-6 md:space-y-8">
                {TIMELINE.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <motion.li
                      key={step.code}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.4 }}
                      custom={i}
                      className="relative md:pl-16"
                    >
                      {/* Node */}
                      <div className="absolute left-0 top-0 hidden h-10 w-10 -translate-x-[18px] place-items-center rounded-full border border-primary/40 bg-card shadow-md md:grid">
                        <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_5px_color-mix(in_oklab,var(--color-primary)_25%,transparent)]" />
                      </div>

                      <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-xl sm:p-7">
                        <div
                          aria-hidden
                          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                        />
                        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/10">
                            <Icon className="h-5 w-5 text-primary-glow" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary-glow">
                              {step.code}
                            </p>
                            <h3 className="mt-1 text-xl font-bold tracking-tight sm:text-2xl">
                              {step.title}
                            </h3>
                            <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                              {step.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* ───────────── PRINCIPLES ───────────── */}
        <section className="relative border-t border-border bg-surface/40 py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="mb-12 max-w-2xl">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="text-xs font-mono uppercase tracking-[0.22em] text-primary-glow"
              >
                Operating principles
              </motion.p>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                custom={1}
                className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Four non-negotiables. Every engagement.
              </motion.h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {PRINCIPLES.map((p, i) => (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={i}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-xl"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <h3 className="relative text-lg font-bold tracking-tight sm:text-xl">
                    {p.title}
                  </h3>
                  <p className="relative mt-2 text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── CTA ───────────── */}
        <section className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-glow"
            >
              <HeartHandshake className="h-3.5 w-3.5" />
              Partnership — not a project
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={1}
              className="mt-5 text-balance text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Let's map your bottleneck — together.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={2}
              className="mx-auto mt-4 max-w-xl text-pretty text-muted-foreground"
            >
              30 minutes. Working session. You leave with a one-page technical brief, whether we
              build together or not.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              custom={3}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              <Link
                to="/contact"
                className="btn-mint inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"
              >
                Initiate Architecture Discovery
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/work"
                className="btn-outline inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"
              >
                See systems in production
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
