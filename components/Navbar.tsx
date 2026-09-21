"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, FileText, Menu, X } from "lucide-react";
import { siteConfig } from "@/data/config";
import { NavLink } from "@/types";
import { cn } from "@/lib/utils";

const navLinks: NavLink[] = [
  { label: "About", href: "about" },
  { label: "Experience", href: "experience" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-hairline bg-bg/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav
        aria-label="Primary"
        className="section-shell flex h-[72px] items-center justify-between"
      >
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="font-mono text-sm font-medium text-ink"
        >
          david<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(e, link.href)}
                className={cn(
                  "relative py-1 text-sm transition-colors duration-200",
                  activeSection === link.href
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                )}
              >
                {link.label}
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-[13px] left-0 right-0 h-px bg-accent"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 md:flex">
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
            href={siteConfig.links.resume}
            download
            className="inline-flex items-center gap-1.5 rounded-md border border-hairline-strong px-3.5 py-1.5 text-sm text-ink transition-colors hover:border-accent/60 hover:text-accent-bright"
          >
            <FileText size={14} strokeWidth={1.75} />
            Resume
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-hairline bg-bg md:hidden"
          >
            <ul className="section-shell flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={`#${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "block rounded-md px-3 py-3 text-base",
                      activeSection === link.href
                        ? "text-ink"
                        : "text-muted"
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2 flex items-center gap-5 px-3 pt-3">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="text-muted hover:text-ink"
                >
                  <Github size={20} strokeWidth={1.75} />
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="text-muted hover:text-ink"
                >
                  <Linkedin size={20} strokeWidth={1.75} />
                </a>
                <a
                  href={siteConfig.links.resume}
                  download
                  className="inline-flex items-center gap-1.5 rounded-md border border-hairline-strong px-3.5 py-1.5 text-sm text-ink"
                >
                  <FileText size={14} strokeWidth={1.75} />
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
