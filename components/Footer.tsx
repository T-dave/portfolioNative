import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-hairline">
      <div className="section-shell flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-sm text-ink">{siteConfig.displayName}</p>
          <p className="mt-1.5 text-sm text-muted">{siteConfig.title}</p>
          <p className="mt-1 text-sm text-muted">{siteConfig.location}</p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="text-muted transition-colors hover:text-ink"
          >
            <Github size={18} strokeWidth={1.75} />
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="text-muted transition-colors hover:text-ink"
          >
            <Linkedin size={18} strokeWidth={1.75} />
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            aria-label="Send an email"
            className="text-muted transition-colors hover:text-ink"
          >
            <Mail size={18} strokeWidth={1.75} />
          </a>
        </div>
      </div>

      <div className="border-t border-hairline">
        <p className="section-shell py-5 text-xs text-muted">
          © {year} {siteConfig.displayName}
        </p>
      </div>
    </footer>
  );
}
