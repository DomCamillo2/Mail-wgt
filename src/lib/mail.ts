import { Resend } from "resend";

type SendAppEmailInput = {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  replyTo?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  throw new Error("Missing RESEND_API_KEY environment variable.");
}

const resend = new Resend(resendApiKey);
const APP_SENDER = "WasGehtTüb <info@wasgehttueb.app>";

export async function sendAppEmail({ to, subject, text, html, replyTo }: SendAppEmailInput) {
  if (!text && !html) {
    throw new Error("Either text or html content must be provided.");
  }

  const basePayload = {
    from: APP_SENDER,
    to,
    subject,
    ...(replyTo ? { replyTo } : {}),
  };

  const response =
    html && text
      ? await resend.emails.send({ ...basePayload, html, text })
      : html
        ? await resend.emails.send({ ...basePayload, html })
        : await resend.emails.send({ ...basePayload, text: text! });

  const { data, error } = response;

  if (error) {
    throw new Error(`Resend send failed: ${error.message}`);
  }

  return data;
}
