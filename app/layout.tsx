import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap"
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumen.example.com"),
  title: {
    default: "Lumen — Learn the skills that move careers forward",
    template: "%s — Lumen"
  },
  description:
    "Lumen is a modern learning platform built around the courses, instructors, and quiet craft that actually change careers.",
  keywords: [
    "online courses",
    "learning platform",
    "edtech",
    "professional development",
    "data science",
    "design",
    "engineering"
  ],
  authors: [{ name: "Lumen" }],
  openGraph: {
    title: "Lumen — Learn the skills that move careers forward",
    description:
      "A modern learning platform built around the courses, instructors, and quiet craft that actually change careers.",
    type: "website",
    locale: "en_US",
    siteName: "Lumen"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumen — Learn the skills that move careers forward",
    description:
      "A modern learning platform built around the courses, instructors, and quiet craft that actually change careers."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-cream text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-btn focus:bg-indigo focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
