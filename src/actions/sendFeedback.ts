"use server";

import { sendAppEmail } from "@/lib/mail";

export async function sendFeedback(formData: FormData): Promise<void> {
  const userEmail = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!userEmail || !message) {
    throw new Error("Please provide both email and message.");
  }

  await sendAppEmail({
    to: "info@wasgehttueb.app",
    subject: "New Feedback via Website",
    text: `From: ${userEmail}\n\nMessage:\n${message}`,
    html: `<p><strong>From:</strong> ${escapeHtml(userEmail)}</p><p><strong>Message:</strong></p><p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>`,
    replyTo: userEmail,
  });

}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
