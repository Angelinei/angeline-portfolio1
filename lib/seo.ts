import type { Metadata } from "next";

export const SITE = "https://angelinepoitout.com";
export const AUTHOR = "Angéline Poitout";

/** Profiles that belong to the author, for the Person schema (`sameAs`). */
export const PROFILES = [
  "https://www.linkedin.com/in/angelinepoitoutpro/",
  "https://github.com/Angelinei",
  "https://www.behance.net/angelinepoitout",
  "https://www.instagram.com/angeline.poitout.music/",
  "https://easywebie.substack.com/",
  "https://indiepa.ge/madship",
];

const SUFFIX = ` | ${AUTHOR}`;

/** "Title | Angéline Poitout" while it fits in 60 characters, else the title alone. */
export function pageTitle(title: string) {
  return title.length + SUFFIX.length <= 60 ? `${title}${SUFFIX}` : title;
}

/** Cuts a text at a word boundary so it fits search results (≈155 characters). */
export function clip(text: string, max = 155) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1).replace(/[\s,.;:–—-]+\S*$/, "");
  return `${cut}…`;
}

/** Title, description, canonical and share tags of a page. */
export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  image = "/opengraph-image",
}: {
  /** Full <title>, already built with pageTitle() when it needs the author. */
  title: string;
  description: string;
  /** Path of the page, e.g. "/writing/retention". */
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  /** Share card URL: the site card by default, or the route's own opengraph-image. */
  image?: string;
}): Metadata {
  const desc = clip(description);
  return {
    title,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title,
      description: desc,
      url: path,
      siteName: AUTHOR,
      locale: "en_US",
      type,
      ...(type === "article" ? { publishedTime, authors: [SITE] } : {}),
      images: [{ url: image, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description: desc },
  };
}

/** Serialises a schema.org object for a <script type="application/ld+json">. */
export function jsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export const personSchema = {
  "@type": "Person",
  "@id": `${SITE}/#person`,
  name: AUTHOR,
  url: SITE,
  sameAs: PROFILES,
  knowsAbout: ["Generative AI", "Learning design", "Digital products", "EdTech"],
};
