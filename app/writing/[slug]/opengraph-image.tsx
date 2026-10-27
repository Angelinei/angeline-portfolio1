import { ogImage, ogSize } from "../../../lib/og-image";
import { writing } from "../../_data/writing";
import { getWritingPost } from "../../../lib/writing";

export const alt = "Essay by Angéline Poitout";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return writing.map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const post = getWritingPost((await params).slug)!;
  const date = new Date(post.date).toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });
  return ogImage({ eyebrow: `Writing · ${date}`, title: post.seoTitle ?? post.title });
}
