import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { BoafoLogo } from "@/components/BoafoLogo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <BoafoLogo />
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Custom web portals, M-Pesa integration, and business automation for
            modern enterprises — built to ease the everyday grind and supported
            for life.
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
          <p className="mt-5 max-w-md text-xs text-muted-foreground/80">
            Web portal developers Kenya · Custom software developers Kenya ·
            M-Pesa integration developers Kenya · Property management software
            Kenya · Nairobi.
          </p>
        </div>

        <FooterCol
          title="Explore"
          links={[
            { label: "Home", to: "/" },
            { label: "Services", to: "/services" },
            { label: "Projects", to: "/projects" },
            { label: "Contact", to: "/contact" },
          ]}
        />
        <FooterCol
          title="Reach Us"
          external={[
            { label: "WhatsApp", href: "https://wa.me/254737575156" },
            { label: "Email", href: "mailto:info@boafosolutions.com" },
            { label: "Call", href: "tel:+254737575156" },
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

type InternalLink = { label: string; to: "/" | "/services" | "/projects" | "/contact" };
type ExternalLink = { label: string; href: string };

function FooterCol({
  title,
  links,
  external,
}: {
  title: string;
  links?: InternalLink[];
  external?: ExternalLink[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
        {links?.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="transition-colors hover:text-foreground">
              {l.label}
            </Link>
          </li>
        ))}
        {external?.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
