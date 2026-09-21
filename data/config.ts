/**
 * Central place for personal links and identity.
 * Replace the placeholder values below once — every component reads from here.
 */
export const siteConfig = {
  name: "Omotara Ayotomiwa David",
  displayName: "David Omotara",
  title: "Software Engineer | Mobile & Full-Stack Developer",
  location: "Lagos, Nigeria",
  shortBio:
    "React Native developer with 2+ years of experience building cross-platform applications and backend services with JavaScript, TypeScript, and Node.js.",
  domain: "https://davidomotara.dev", // Replace with your real domain once deployed

  links: {
    github: "https://github.com/t-dave",
    linkedin: "www.linkedin.com/in/david-omotara-8b9095191",
    email: "tomyomo@gmail.com",
    resume: "/resume.pdf", // Place your resume PDF in /public/resume.pdf
  },
} as const;

export const seoConfig = {
  title: "David Omotara | Software Engineer & React Native Developer",
  description:
    "Portfolio of David Omotara, a Lagos-based Software Engineer specializing in React Native, Node.js, TypeScript, and full-stack application development.",
  keywords: [
    "David Omotara",
    "React Native Developer",
    "Mobile Developer",
    "Full-Stack Developer",
    "Software Engineer Lagos",
    "Node.js Developer",
    "TypeScript",
  ],
} as const;
