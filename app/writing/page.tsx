import type { Metadata } from "next";
import { WritingIndex } from "../_components/writing-pages";
import { getWritingPosts } from "../../lib/writing";
import { pageMetadata, pageTitle } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: pageTitle("Writing"),
  description:
    "Essays by Angéline Poitout on building digital products, EdTech, learning and working with AI, from indie hacking to AI agents.",
  path: "/writing",
});

export default function WritingPage() {
  return <WritingIndex posts={getWritingPosts()} />;
}
