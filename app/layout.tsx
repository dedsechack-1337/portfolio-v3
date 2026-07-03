import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amit Roy — Cybersecurity Engineer",
  description:
    "Amit Roy — CEH-certified Cybersecurity Engineer, Ethical Hacker & Penetration Tester specialising in Web & Network Pentesting, SOC Operations, Malware Analysis, and AI-driven threat defence.",
  keywords: [
    "Amit Roy",
    "Cybersecurity Engineer",
    "Ethical Hacker",
    "Penetration Tester",
    "SOC Analyst",
    "CEH",
    "CCNA",
  ],
  authors: [{ name: "Amit Roy" }],
  openGraph: {
    title: "Amit Roy — Cybersecurity Engineer",
    description:
      "CEH-certified security engineer who breaks systems before real attackers do.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
