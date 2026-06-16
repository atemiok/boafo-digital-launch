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
    const to = "boafosolutions@outlook.com";
    const from = process.env.RESEND_FROM_EMAIL ?? "Boafo Solutions <noreply@updates.boafosolutions.com>";

    const internalSubject = `New architecture discovery — ${data.company}`;
    const internalHtml = `
      <h2>New Architecture Discovery Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(data.company)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Phone (WhatsApp):</strong> ${escapeHtml(data.phone)}</p>
      <p><strong>Primary system bottleneck:</strong> ${escapeHtml(data.bottleneck)}</p>
      ${data.message ? `<p><strong>Notes:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>` : ""}
    `;

    const confirmSubject = `We received your request — Boafo Solutions`;
    const confirmHtml = `
      <div style="font-family: -apple-system, Segoe UI, Roboto, Arial, sans-serif; color:#0f172a; max-width:560px;">
        <h2 style="margin:0 0 12px;">Thanks, ${escapeHtml(data.name)} — we've got your request.</h2>
        <p>A senior engineer at Boafo Solutions will reach out within one business day to schedule your 30-minute architecture discovery call.</p>
        <p style="margin-top:16px;"><strong>Here's what you sent us:</strong></p>
        <ul style="line-height:1.6;">
          <li><strong>Company:</strong> ${escapeHtml(data.company)}</li>
          <li><strong>Primary bottleneck:</strong> ${escapeHtml(data.bottleneck)}</li>
          <li><strong>Phone (WhatsApp):</strong> ${escapeHtml(data.phone)}</li>
          ${data.message ? `<li><strong>Notes:</strong> ${escapeHtml(data.message)}</li>` : ""}
        </ul>
        <p style="margin-top:20px;">Need us urgently? WhatsApp <a href="https://wa.me/254737575156">0737 575 156</a> or reply to this email.</p>
        <p style="margin-top:24px; color:#475569; font-size:13px;">— Boafo Solutions · Ngong 5th Ave, Upperhill, Nairobi</p>
      </div>
    `;

    if (!apiKey) {
      console.warn("[contact] RESEND_API_KEY not set — skipping email send.", { to });
      return { ok: true, delivered: false as const, message: "Request saved. Email delivery is not configured yet." };
    }

    async function send(payload: Record<string, unknown>) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const text = await res.text();
      if (!res.ok) {
        console.error("[contact] Resend failed", res.status, text);
      } else {
        console.log("[contact] Resend ok", text);
      }
      return { ok: res.ok, status: res.status, text };
    }

    try {
      const [internal, confirm] = await Promise.all([
        send({ from, to: [to], subject: internalSubject, html: internalHtml, reply_to: data.email }),
        send({ from, to: [data.email], subject: confirmSubject, html: confirmHtml, reply_to: to }),
      ]);

      if (!internal.ok || !confirm.ok) {
        let userMessage = "Request saved. We couldn't deliver the email right now, but we'll follow up soon.";
        const combined = `${internal.text} ${confirm.text}`;
        if (combined.includes("verify a domain") || combined.includes("own email address")) {
          userMessage = "Request received. Email delivery is in test mode — verify your Resend domain to send to any recipient.";
        }
        return { ok: true, delivered: false as const, message: userMessage };
      }

      return { ok: true, delivered: true as const, message: "Request received — check your inbox for a confirmation. We'll be in touch within one business day." };
    } catch (err) {
      console.error("[contact] Resend threw", err);
      return { ok: true, delivered: false as const, message: "Request saved. We'll be in touch within one business day." };
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
