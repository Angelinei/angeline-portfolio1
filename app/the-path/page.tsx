import type { Metadata } from "next";
import ThePathPage from "../_components/the-path-page";
import { getCovers } from "../_components/covers";
import { thePath } from "../_data/the-path";
import { pageMetadata, pageTitle } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: pageTitle(`${thePath.title} – ${thePath.subtitle}`),
  description: thePath.tagline,
  path: "/the-path",
});

export default function Page() {
  return <ThePathPage cover={getCovers()["the-path"]} />;
}
