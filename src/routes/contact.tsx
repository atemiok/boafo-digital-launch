import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
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

const easeOut = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

function ContactPage() {
  return (
    <div className="h-[100dvh] overflow-hidden bg-background text-foreground antialiased flex flex-col">
      <SiteNav />
      <main className="flex-1 min-h-0 pt-24 sm:pt-28 pb-4 sm:pb-6">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

        <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid h-full gap-4 lg:gap-6 lg:grid-cols-5 lg:items-stretch"
          >
            {/* LEFT — info */}
            <motion.aside
              variants={item}
              className="solid-card flex min-w-0 flex-col p-5 sm:p-6 lg:col-span-2 lg:overflow-y-auto"
            >
              <motion.p variants={item} className="text-[11px] font-mono uppercase tracking-widest text-primary">
                Architecture Discovery
              </motion.p>
              <motion.h1 variants={item} className="mt-2 text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
                Tell us where the friction lives.
              </motion.h1>
              <motion.p variants={item} className="mt-2 text-sm text-muted-foreground">
                One 30-minute call with a senior engineer. We diagnose your primary bottleneck and return a fixed-price plan.
              </motion.p>

              <motion.ul variants={container} className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                {[
                  "Senior engineer, not a sales rep",
                  "Fixed-price scope, no surprises",
                  "Full source ownership at delivery",
                  "Ongoing support after launch",
                ].map((t) => (
                  <motion.li key={t} variants={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                    <span className="truncate">{t}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={container} className="mt-auto pt-5 space-y-1.5 text-sm text-muted-foreground">
                <motion.a variants={item} href="mailto:info@boafosolutions.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span className="truncate">info@boafosolutions.com</span>
                </motion.a>
                <motion.a variants={item} href="tel:+254737575156" className="flex items-center gap-2 hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  0737 575 156
                </motion.a>
                <motion.a
                  variants={item}
                  href="https://wa.me/254737575156"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-primary" />
                  WhatsApp us instantly
                </motion.a>
                <motion.p variants={item} className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Ngong 5th Ave, Upperhill, Nairobi</span>
                </motion.p>
              </motion.div>
            </motion.aside>

            {/* RIGHT — calendar */}
            <motion.section
              variants={item}
              className="solid-card flex min-h-0 flex-col p-4 sm:p-5 lg:col-span-3"
            >
              <div className="mb-3 flex items-end justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-primary">Book a Meeting</p>
                  <h2 className="mt-1 truncate text-lg font-extrabold tracking-tight sm:text-xl">
                    Pick a time that works for you.
                  </h2>
                </div>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs text-primary hover:underline"
                >
                  Open in new tab ↗
                </a>
              </div>
              <div className="min-h-0 flex-1">
                <CalendlyEmbed url={CALENDLY_URL} />
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
