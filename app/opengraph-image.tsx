import { ogImage, ogSize } from "../lib/og-image";

export const alt = "Angéline Poitout — Generative AI, Learning Design and Digital Products";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return ogImage({
    eyebrow: "Independent studio",
    title: "Angéline Poitout",
    subtitle: "Generative AI · Learning Design · Digital Products",
  });
}
