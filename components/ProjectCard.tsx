"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, ArrowRight } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-card border border-hairline bg-surface transition-colors duration-300 hover:border-hairline-strong"
    >
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative block aspect-[4/3] w-full overflow-hidden border-b border-hairline bg-surface-2 text-left"
        aria-label={`View case study for ${project.name}`}
      >
        <Image
          src={project.image}
          alt={`${project.name} mockup`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </button>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-medium text-ink">{project.name}</h3>
        <p className="mt-1.5 text-sm text-muted">{project.tagline}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded border border-hairline px-2 py-1 font-mono text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-5 border-t border-hairline pt-5">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent-bright"
          >
            Case study
            <ArrowRight
              size={14}
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </button>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
          >
            <Github size={14} strokeWidth={1.75} />
            Code
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
            >
              Live
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
