import { NextRequest, NextResponse } from "next/server";

/**
 * Contact form endpoint.
 *
 * This is intentionally unconnected to a real email provider — plug in
 * Resend, EmailJS, Formspree, or your provider of choice below. The
 * validation and response shape are already wired up so the frontend
 * (components/sections/Contact.tsx) doesn't need to change.
 *
 * Example with Resend:
 *
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({
 *     from: "portfolio@yourdomain.com",
 *     to: "EMAIL_ADDRESS_HERE",
 *     subject: `Portfolio message from ${name}`,
 *     replyTo: email,
 *     text: message,
 *   });
 */

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

function isValidPayload(data: unknown): data is ContactPayload {
  if (!data || typeof data !== "object") return false;
  const { name, email, message } = data as Record<string, unknown>;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    typeof name === "string" &&
    name.trim().length >= 2 &&
    typeof email === "string" &&
    emailPattern.test(email) &&
    typeof message === "string" &&
    message.trim().length >= 10
  );
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Please provide a valid name, email, and message." },
      { status: 422 }
    );
  }

  // TODO: connect an email provider here (Resend, EmailJS, Formspree, etc.)
  // For now this endpoint accepts and validates the submission but does not
  // deliver it anywhere.

  return NextResponse.json({ ok: true });
}
