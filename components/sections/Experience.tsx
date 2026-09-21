"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-shell scroll-mt-24 py-24 sm:py-28"
    >
      <SectionLabel index="02" label="Experience" />
      <h2 className="max-w-lg text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Where I&rsquo;ve worked.
      </h2>

      <div className="relative mt-14">
        <div
          className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-hairline-strong sm:block"
          aria-hidden
        />

        <ol className="space-y-12">
          {experience.map((entry, i) => (
            <motion.li
              key={entry.company + entry.position}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative sm:pl-10"
            >
              <span
                className="absolute left-0 top-1.5 hidden h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg sm:block"
                aria-hidden
              />

              <div className="rounded-card border border-hairline bg-surface p-6 sm:p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-lg font-medium text-ink">
                    {entry.position}
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {entry.period}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-accent">{entry.company}</p>

                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  {entry.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {entry.contributions.map((c) => (
                    <li
                      key={c}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-hairline-strong" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {entry.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-hairline px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
