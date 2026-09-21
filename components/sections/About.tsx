"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { currentlyFocused } from "@/data/skills";

export function About() {
  return (
    <section id="about" className="section-shell scroll-mt-24 py-24 sm:py-28">
      <SectionLabel index="01" label="About" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="max-w-lg text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            I build products, not just screens.
          </h2>

          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
            <p>
              I&rsquo;m a software engineer based in Lagos, working mainly in
              React Native and Node.js. Most of my time is spent building
              mobile applications end to end — from the interface a user
              taps through, to the APIs and data behind it — which means I
              spend as much time thinking about state management and network
              requests as I do about layout.
            </p>
            <p>
              My background is in Geophysics, not computer science. Studying
              it trained me to break unfamiliar, messy problems into testable
              pieces and reason carefully from incomplete information —
              habits that turned out to transfer directly into debugging and
              system design. Everything else — React Native, backend
              architecture, working with APIs — I picked up by building
              production applications and learning from the people around
              me.
            </p>
            <p>
              I&rsquo;ve worked across startup and product environments,
              collaborating with designers and backend engineers to ship
              features rather than just prototypes. I care about writing
              code that&rsquo;s still readable six months later, and about
              understanding why a product decision was made, not just what
              to build.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="h-fit rounded-card border border-hairline bg-surface p-6"
        >
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
            Currently focused on
          </h3>
          <ul className="mt-5 space-y-3">
            {currentlyFocused.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-ink"
              >
                <span className="h-1 w-1 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
