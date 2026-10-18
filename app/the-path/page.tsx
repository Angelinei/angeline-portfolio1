import type { Metadata } from "next";
import ThePathPage from "../_components/the-path-page";
import { getCovers } from "../_components/covers";
import { thePath } from "../_data/the-path";

export const metadata: Metadata = {
  title: `${thePath.title} – ${thePath.subtitle} | Angéline Poitout`,
  description: thePath.tagline,
};

export default function Page() {
  return <ThePathPage cover={getCovers()["the-path"]} />;
}
