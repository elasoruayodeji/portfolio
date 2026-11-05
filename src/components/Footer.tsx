import { ArrowUp } from "lucide-react";
import { CONFIG } from "../config";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border py-12 md:py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="font-[family-name:var(--font-display)] font-bold text-2xl text-text-primary">
              {CONFIG.brand.monogram}
            </span>
            <p className="text-text-secondary font-[family-name:var(--font-body)] text-sm mt-3 max-w-xs">
              {CONFIG.brand.tagline}
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-4">
            <p className="text-sm text-text-secondary font-[family-name:var(--font-body)] mb-4 uppercase tracking-wider">
              Navigation
            </p>
            <nav className="flex flex-col gap-2">
              {CONFIG.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-text-primary hover:text-accent transition-colors font-[family-name:var(--font-body)] text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Links */}
          <div className="md:col-span-4">
            <p className="text-sm text-text-secondary font-[family-name:var(--font-body)] mb-4 uppercase tracking-wider">
              Connect
            </p>
            <div className="flex flex-col gap-2">
              {CONFIG.contact.github !== "GITHUB_PLACEHOLDER" && (
                <a
                  href={`https://github.com/${CONFIG.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent transition-colors font-[family-name:var(--font-body)] text-sm"
                >
                  GitHub
                </a>
              )}
              {CONFIG.contact.linkedin !== "LINKEDIN_PLACEHOLDER" && (
                <a
                  href={CONFIG.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent transition-colors font-[family-name:var(--font-body)] text-sm"
                >
                  LinkedIn
                </a>
              )}
              {CONFIG.contact.whatsapp !== "WHATSAPP_PLACEHOLDER" && (
                <a
                  href={`https://wa.me/${CONFIG.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent transition-colors font-[family-name:var(--font-body)] text-sm"
                >
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p className="text-text-secondary text-sm font-[family-name:var(--font-body)]">
              © {new Date().getFullYear()} {CONFIG.brand.name}. All rights reserved.
            </p>
            <p className="text-text-secondary text-sm font-[family-name:var(--font-body)]">
              Powered by {CONFIG.brand.studio}.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors font-[family-name:var(--font-body)] text-sm"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
