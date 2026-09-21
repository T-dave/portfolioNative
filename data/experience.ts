import { ExperienceEntry } from "@/types";

/**
 * NOTE: Company names, exact dates, and durations are placeholders where the
 * source information did not specify them. Replace PLACEHOLDER values with
 * your real company names and dates before publishing.
 */
export const experience: ExperienceEntry[] = [
  {
    company: "PLACEHOLDER — Current Company",
    position: "Full-Stack Developer",
    period: "PLACEHOLDER — Start Date – Present",
    description:
      "Working across the stack to build and maintain product features, from mobile interfaces down to the APIs and data layer that power them.",
    contributions: [
      "Built and maintained backend services and REST APIs consumed by mobile and web clients.",
      "Implemented database schemas and queries across MongoDB and SQL.",
      "Collaborated with product and design to translate requirements into working features.",
      "Debugged production issues across the stack, from client state to server responses.",
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs", "TypeScript", "Git"],
  },
  {
    company: "PLACEHOLDER — Previous Company",
    position: "Mobile Developer",
    period: "PLACEHOLDER — Start Date – End Date",
    description:
      "Focused on building production-quality cross-platform mobile applications, from UI implementation to state management and API integration.",
    contributions: [
      "Built and maintained cross-platform mobile applications using React Native and Expo.",
      "Integrated REST APIs and implemented centralized state management with Redux Toolkit.",
      "Designed reusable UI components used across multiple app screens.",
      "Collaborated with backend developers and designers to deliver production features.",
    ],
    technologies: ["React Native", "Expo", "Redux Toolkit", "JavaScript", "TypeScript", "AsyncStorage"],
  },
];
