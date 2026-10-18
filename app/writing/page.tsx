import type { Metadata } from "next";
import { WritingIndex } from "../_components/writing-pages";
import { getWritingPosts } from "../../lib/writing";

export const metadata: Metadata = {
  title: "Writing | Angéline Poitout",
  description: "Essays on building products, learning, and working with AI.",
};

export default function WritingPage() {
  return <WritingIndex posts={getWritingPosts()} />;
}
