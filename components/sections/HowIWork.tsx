"use client";

import { motion } from "framer-motion";

const stages = [
  {
    number: "01",
    title: "Understand",
    body: "Understand the business problem, the users, and the constraints before writing any code.",
  },
  {
    number: "02",
    title: "Build",
    body: "Design a clean architecture and implement reusable, well-typed components.",
  },
  {
    number: "03",
    title: "Test",
    body: "Debug, test, and optimize the application against real usage, not just the happy path.",
  },
  {
    number: "04",
    title: "Ship",
    body: "Deploy, monitor, and continue improving the product based on what actually happens in production.",
  },
];

export function HowIWork() {
  return (
    <section className="section-shell py-24 sm:py-28">
      <h2 className="max-w-lg text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        How I build.
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-card border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {stages.map((stage, i) => (
          <motion.div
            key={stage.number}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="bg-surface p-6"
          >
            <span className="font-mono text-xs text-accent">
              {stage.number}
            </span>
            <h3 className="mt-4 text-base font-medium text-ink">
              {stage.title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">
              {stage.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
