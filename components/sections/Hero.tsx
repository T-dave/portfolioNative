"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Download } from "lucide-react";
import { siteConfig } from "@/data/config";

const codeLines = [
  { indent: 0, text: "const product = {" },
  { indent: 1, text: 'mobile: "React Native",' },
  { indent: 1, text: 'backend: "Node.js",' },
  { indent: 1, text: 'database: "MongoDB",' },
  { indent: 1, text: 'deployment: "EAS",' },
  { indent: 0, text: "};" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-[72px]"
    >
      <div className="section-shell grid w-full grid-cols-1 items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs tracking-wide text-accent">
            SOFTWARE ENGINEER — MOBILE — FULL STACK
          </p>

          <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Software engineer building mobile &amp; full-stack products.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {siteConfig.shortBio}
          </p>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {siteConfig.location} • Available for remote opportunities
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-bright"
            >
              View my work
            </a>
            <a
              href={siteConfig.links.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-md border border-hairline-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/60 hover:text-accent-bright"
            >
              <Download size={14} strokeWidth={1.75} />
              Download resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              Let&rsquo;s talk →
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="text-muted transition-colors hover:text-ink"
            >
              <Github size={19} strokeWidth={1.75} />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted transition-colors hover:text-ink"
            >
              <Linkedin size={19} strokeWidth={1.75} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-card border border-hairline bg-surface shadow-panel">
            <div className="flex items-center gap-1.5 border-b border-hairline px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#3a3c42]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3a3c42]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#3a3c42]" />
              <span className="ml-2 font-mono text-xs text-muted">
                stack.ts
              </span>
            </div>
            <pre className="overflow-x-auto px-5 py-6 font-mono text-[13px] leading-7 text-muted sm:text-sm">
              <code>
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + i * 0.09, duration: 0.3 }}
                    style={{ paddingLeft: `${line.indent * 1.25}rem` }}
                  >
                    {renderLine(line.text)}
                  </motion.div>
                ))}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="mt-1 inline-block h-4 w-2 animate-blink bg-accent align-middle"
                  aria-hidden
                />
              </code>
            </pre>
          </div>

          <div className="pointer-events-none absolute -inset-x-6 -bottom-6 -z-10 h-40 bg-accent/[0.06] blur-3xl" />
        </motion.div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-muted transition-colors hover:text-ink lg:flex"
      >
        <ArrowDown size={18} strokeWidth={1.5} />
      </a>
    </section>
  );
}

function renderLine(text: string) {
  const stringMatch = text.match(/"([^"]*)"/);
  if (!stringMatch) {
    return <span className="text-ink">{text}</span>;
  }
  const [full, inner] = stringMatch;
  const [before, after] = text.split(full);
  return (
    <span className="text-ink">
      {before}
      <span className="text-accent">&quot;{inner}&quot;</span>
      {after}
    </span>
  );
}
