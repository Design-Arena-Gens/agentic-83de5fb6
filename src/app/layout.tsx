import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snap Web Studio Outreach Playbook",
  description:
    "Conversation assistant designed for Snap Web Studio's outreach executives to run warm, human conversations with business owners."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
