import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, Phone, MessageCircle, MapPin } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — M-Pesa Integration Developers in Nairobi, Kenya | Boafo Solutions" },
      {
        name: "description",
        content:
          "Talk to M-Pesa integration developers in Nairobi, Kenya. Boafo Solutions — Ngong 5th Ave, Upperhill. Book a 30-minute architecture discovery. WhatsApp 0737 575 156.",
      },
      {
        name: "keywords",
        content:
          "Software developers Nairobi, M-Pesa integration Kenya, Custom software company Nairobi, Boafo Solutions contact, Upperhill software developer",
      },
      { name: "geo.region", content: "KE-30" },
      { name: "geo.placename", content: "Nairobi" },
      { name: "geo.position", content: "-1.2921;36.8219" },
      { name: "ICBM", content: "-1.2921, 36.8219" },
      { property: "og:title", content: "Contact Boafo Solutions — Nairobi, Kenya" },
      {
        property: "og:description",
        content:
          "Book a 30-minute architecture discovery with Boafo Solutions, custom software developers in Nairobi, Kenya.",
      },
      { property: "og:locale", content: "en_KE" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />
      <main className="pt-32 sm:pt-36">
        <section className="relative overflow-hidden pb-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />

          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="solid-card overflow-hidden p-7 sm:p-10"
            >
              <div className="grid gap-10 lg:grid-cols-5 lg:items-start">
                <div className="min-w-0 lg:col-span-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-primary">
                    Architecture Discovery
                  </p>
                  <h1 className="mt-2.5 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Tell us where the friction lives.
                  </h1>
                  <p className="mt-3 text-muted-foreground">
                    One 30-minute call with a senior engineer. We diagnose your
                    primary bottleneck and return a clear, fixed-price
                    architecture plan — no pressure, no jargon.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {[
                      "Senior engineer, not a sales rep",
                      "Fixed-price scope, no surprises",
                      "Full source ownership at delivery",
                      "Ongoing support after launch",
                    ].map((t) => (
                      <li key={t} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {t}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 space-y-2 text-sm text-muted-foreground">
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
                    <p className="flex items-center gap-2">
                      <MessageCircle className="h-4 w-4 text-primary" />
                      <a
                        href="https://wa.me/254737575156"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-foreground transition-colors"
                      >
                        WhatsApp us instantly
                      </a>
                    </p>
                    <p className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                      <span>Ngong 5th Ave, Upperhill, Nairobi, Kenya</span>
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
