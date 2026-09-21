"use client";

import { useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import { projects } from "@/data/projects";
import { Project } from "@/types";

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="section-shell scroll-mt-24 py-24 sm:py-28"
    >
      <SectionLabel index="03" label="Projects" />
      <h2 className="max-w-lg text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
        Things I&rsquo;ve built.
      </h2>
      <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">
        A mix of mobile and full-stack work — click into any project for the
        technical detail.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i}
            onOpen={setActiveProject}
          />
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
