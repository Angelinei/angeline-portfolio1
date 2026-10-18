import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: "Angéline Poitout",
      template: "%s — Angéline Poitout",
    },
    description:
      locale === "fr"
        ? "Studio créatif indépendant à la croisée de l'IA générative, de l'ingénierie pédagogique et des produits numériques."
        : "Independent studio at the intersection of generative AI, learning design and digital products.",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  const lang: Locale = isLocale(locale) ? locale : "en";

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
