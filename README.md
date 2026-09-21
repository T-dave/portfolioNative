# David Omotara — Portfolio

A personal developer portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy — replace these placeholders

All personal links live in one file: **`data/config.ts`**.

| Placeholder | Replace with |
|---|---|
| `GITHUB_URL_HERE` | Your GitHub profile URL |
| `LINKEDIN_URL_HERE` | Your LinkedIn profile URL |
| `EMAIL_ADDRESS_HERE` | Your email address |
| `https://davidomotara.dev` (`siteConfig.domain`) | Your real deployed domain, used for SEO metadata and the sitemap |

Project-level GitHub links (`GITHUB_URL_HERE`) also appear per-project in **`data/projects.ts`** — replace each with that project's real repo URL, or remove the project if you'd rather not show it.

**Company names and dates in `data/experience.ts` are placeholders** (marked `PLACEHOLDER — ...`) because the source brief didn't specify them — fill in your real employer names and dates before publishing.

## Add your resume

Drop your resume PDF into `public/resume.pdf`. The "Download resume" buttons already link to `/resume.pdf`.

## Wire up the contact form

The contact form in `components/sections/Contact.tsx` posts to `app/api/contact/route.ts`, which validates the submission but does not send anything yet. Open that file and add a real email provider (Resend, EmailJS, Formspree, etc.) — the request/response shape is already built so the frontend doesn't need to change. You'll typically need to:

1. Install your provider's SDK (e.g. `npm install resend`).
2. Add your API key to `.env.local` (never commit this file).
3. Send the email inside the `POST` handler where the `TODO` comment is.

## Project images

`public/projects/*.svg` are abstract placeholder mockups, not real app screenshots. Swap them for real screenshots of your apps (`.png`/`.jpg`/`.webp` work fine — just update the `image` path per project in `data/projects.ts`).

## Project structure

```
app/                  Routes, layout, metadata, API routes
components/           Shared components (Navbar, Footer, cards, modal)
components/ui/        Small reusable primitives (Button, SectionLabel)
components/sections/  One component per page section
data/                 Structured content (projects, experience, skills, config)
lib/                  Utility functions
types/                Shared TypeScript types
public/                Static assets (resume, project images)
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — lint the project
