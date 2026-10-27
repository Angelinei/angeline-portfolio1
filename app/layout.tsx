import type { Metadata } from "next";
import { Fredoka, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Rounded face of the contact slide.
const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://angelinepoitout.com"),
  alternates: {
    canonical: "./",
  },
  title: "Angéline Poitout — Generative AI & Learning Design Studio",
  description:
    "Independent studio of Angéline Poitout at the crossroads of generative AI, learning design and digital products.",
  authors: [{ name: "Angéline Poitout", url: "https://angelinepoitout.com" }],
  openGraph: {
    siteName: "Angéline Poitout",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
