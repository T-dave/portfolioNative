export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  problem: string;
  solution: string;
  technicalApproach: string;
  challenges: string;
  learnings: string;
  features: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
}

export interface ExperienceEntry {
  company: string;
  position: string;
  period: string;
  description: string;
  contributions: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export type FormStatus = "idle" | "loading" | "success" | "error";
