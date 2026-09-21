"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ArrowUpRight } from "lucide-react";
import { Project } from "@/types";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-8 backdrop-blur-sm sm:items-center sm:px-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl rounded-card border border-hairline-strong bg-surface shadow-panel"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close case study"
              className="absolute right-4 top-4 z-10 rounded-md border border-hairline-strong bg-bg/80 p-2 text-muted backdrop-blur transition-colors hover:text-ink"
            >
              <X size={18} />
            </button>

            <div className="relative aspect-[16/8] w-full overflow-hidden rounded-t-card border-b border-hairline bg-surface-2">
              <Image
                src={project.image}
                alt={`${project.name} mockup`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
              />
            </div>

            <div className="max-h-[65vh] overflow-y-auto p-6 sm:p-9">
              <h2
                id="project-modal-title"
                className="text-2xl font-semibold text-ink"
              >
                {project.name}
              </h2>
              <p className="mt-2 text-sm text-muted">{project.tagline}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-hairline-strong px-3.5 py-1.5 text-sm text-ink transition-colors hover:border-accent/60 hover:text-accent-bright"
                >
                  <Github size={14} strokeWidth={1.75} />
                  View code
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md border border-hairline-strong px-3.5 py-1.5 text-sm text-ink transition-colors hover:border-accent/60 hover:text-accent-bright"
                  >
                    Live demo
                    <ArrowUpRight size={14} strokeWidth={1.75} />
                  </a>
                )}
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <CaseSection title="Overview" body={project.description} />
                <CaseSection title="My role" body={project.role} />
                <CaseSection title="Problem" body={project.problem} />
                <CaseSection title="Solution" body={project.solution} />
              </div>

              <CaseSection
                title="Technical approach"
                body={project.technicalApproach}
                className="mt-8"
              />

              <div className="mt-8">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
                  Key features
                </h3>
                <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {project.features.map((f) => (
                    <li
                      key={f}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <CaseSection title="Challenges" body={project.challenges} />
                <CaseSection title="What I learned" body={project.learnings} />
              </div>

              <div className="mt-8">
                <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
                  Technology stack
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-hairline px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CaseSection({
  title,
  body,
  className,
}: {
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
        {title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-ink/90">{body}</p>
    </div>
  );
}
