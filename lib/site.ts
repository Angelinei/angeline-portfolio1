import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit) return explicit;
  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production}`;
  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

type PageMetaInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string | null;
  absoluteTitle?: boolean;
  type?: "website" | "article";
};

export function pageMetadata({
  locale,
  path,
  title,
  description,
  image,
  absoluteTitle = false,
  type = "website",
}: PageMetaInput): Metadata {
  const base = getSiteUrl();
  const canonical = `${base}/${locale}${path}`;
  const languages = {
    en: `${base}/en${path}`,
    fr: `${base}/fr${path}`,
    "x-default": `${base}/en${path}`,
  };
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${base}${image}`
    : undefined;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Angéline Poitout",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type,
      images: imageUrl ? [{ url: imageUrl }] : undefined,
    },
  };
}
