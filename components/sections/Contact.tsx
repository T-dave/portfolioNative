"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { siteConfig } from "@/data/config";
import { FormStatus } from "@/types";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function validate(): boolean {
    const next: FormErrors = {};
    if (values.name.trim().length < 2) {
      next.name = "Enter your name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Enter a valid email address.";
    }
    if (values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-shell scroll-mt-24 py-24 sm:py-28">
      <SectionLabel index="05" label="Contact" />

      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="max-w-sm text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            Have a product in mind?
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
            I&rsquo;m always interested in building useful products, solving
            interesting technical problems, and collaborating with ambitious
            teams.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-bright"
            >
              <Mail size={15} strokeWidth={1.75} />
              Email me
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-hairline-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/60 hover:text-accent-bright"
            >
              <Linkedin size={15} strokeWidth={1.75} />
              LinkedIn
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-hairline-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent/60 hover:text-accent-bright"
            >
              <Github size={15} strokeWidth={1.75} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={handleSubmit}
          noValidate
          className="rounded-card border border-hairline bg-surface p-6 sm:p-8"
        >
          <div>
            <label htmlFor="name" className="text-sm text-muted">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="mt-2 w-full rounded-md border border-hairline-strong bg-bg px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
            />
            {errors.name && (
              <p id="name-error" className="mt-1.5 text-xs text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div className="mt-5">
            <label htmlFor="email" className="text-sm text-muted">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={(e) =>
                setValues({ ...values, email: e.target.value })
              }
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="mt-2 w-full rounded-md border border-hairline-strong bg-bg px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
            />
            {errors.email && (
              <p id="email-error" className="mt-1.5 text-xs text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="text-sm text-muted">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={values.message}
              onChange={(e) =>
                setValues({ ...values, message: e.target.value })
              }
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="mt-2 w-full resize-none rounded-md border border-hairline-strong bg-bg px-3.5 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
            />
            {errors.message && (
              <p id="message-error" className="mt-1.5 text-xs text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-accent-bright disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" && (
              <Loader2 size={16} className="animate-spin" />
            )}
            {status === "loading" ? "Sending..." : "Send message"}
          </button>

          <div aria-live="polite" className="mt-4">
            {status === "success" && (
              <p className="flex items-center gap-2 text-sm text-emerald-400">
                <CheckCircle2 size={16} />
                Message sent — I&rsquo;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={16} />
                Something went wrong. Try emailing me directly instead.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
