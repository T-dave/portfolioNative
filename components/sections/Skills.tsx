"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-24 py-24 sm:py-28">
      <SectionLabel index="04" label="Skills" />
      <h2 className="max-w-lg text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        What I work with.
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
            className="rounded-card border border-hairline bg-surface p-6"
          >
            <h3 className="text-sm font-medium text-ink">{group.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-hairline px-2.5 py-1.5 text-[13px] text-muted transition-colors hover:border-accent/50 hover:text-ink"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
