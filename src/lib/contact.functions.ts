import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  company: z.string().trim().min(1, "Company required").max(150),
  email: z.string().trim().email("Valid email required").max(200),
  phone: z.string().trim().min(7, "Phone required").max(30),
  bottleneck: z.string().trim().min(1, "Pick a bottleneck").max(80),
  message: z.string().trim().max(2000).optional().default(""),
});

export const sendContactRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL ?? "hello@boafosolutions.com";

    const subject = `New architecture discovery — ${data.company}`;
    const html = `
      <h2>New Architecture Discovery Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Phone (WhatsApp):</strong> ${escapeHtml(data.phone)}</p>
      <p><strong>Primary system bottleneck:</strong> ${escapeHtml(data.bottleneck)}</p>
      ${data.message ? `<p><strong>Notes:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>` : ""}
    `;

    // If Resend isn't configured yet, accept the lead so the UI works
    // and surface a clear server log for the developer.
    if (!apiKey) {
      console.warn("[contact] RESEND_API_KEY not set — skipping email send.", { to, subject });
      return { ok: true, delivered: false as const };
    }

    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Boafo Solutions <onboarding@resend.dev>",
          to: [to],
          subject,
          html,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("[contact] Resend failed", res.status, text);
        // Do not block the user — accept the lead, surface server log for ops.
        return { ok: true, delivered: false as const };
      }

      return { ok: true, delivered: true as const };
    } catch (err) {
      console.error("[contact] Resend threw", err);
      return { ok: true, delivered: false as const };
    }
  });


function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
