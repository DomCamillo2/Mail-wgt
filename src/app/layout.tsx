import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WasGehtTueb Mail",
  description: "Feedback mail form with Resend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
