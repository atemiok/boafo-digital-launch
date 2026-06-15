import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  company: z.string().trim().min(1, "Company required").max(150),
  phone: z.string().trim().min(7, "Phone required").max(30),
  message: z.string().trim().min(5, "Tell us a bit more").max(2000),
});

export const sendContactRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => ContactSchema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL ?? "hello@boafosolutions.com";

    const subject = `New demo request — ${data.company}`;
    const html = `
      <h2>New System Demo Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
      <p><strong>WhatsApp / Phone:</strong> ${escapeHtml(data.phone)}</p>
      <p><strong>Process to automate:</strong></p>
      <p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
    `;

    // If Resend isn't configured yet, accept the lead so the UI works
    // and surface a clear server log for the developer.
    if (!apiKey) {
      console.warn("[contact] RESEND_API_KEY not set — skipping email send.", { to, subject });
      return { ok: true, delivered: false as const };
    }

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
        reply_to: undefined,
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[contact] Resend failed", res.status, text);
      throw new Error("Could not send your request. Please try again or WhatsApp us.");
    }

    return { ok: true, delivered: true as const };
  });

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
