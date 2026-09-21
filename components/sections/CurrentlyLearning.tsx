"use client";

import { motion } from "framer-motion";
import { currentlyLearning } from "@/data/skills";

export function CurrentlyLearning() {
  return (
    <section className="section-shell py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="flex flex-col items-start gap-5 rounded-card border border-hairline bg-surface/60 px-6 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-8"
      >
        <div>
          <h3 className="text-sm font-medium text-ink">Currently learning</h3>
          <p className="mt-1.5 text-sm text-muted">
            Areas I&rsquo;m actively expanding into — not yet claiming
            professional depth here.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {currentlyLearning.map((item) => (
            <span
              key={item}
              className="rounded-full border border-hairline px-3.5 py-1.5 text-[13px] text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
