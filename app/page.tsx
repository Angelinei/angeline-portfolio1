import type { Metadata } from "next";
import CasesStage from "./_components/cases-stage";
import { getCovers } from "./_components/covers";

export const metadata: Metadata = {
  title: "Angéline Poitout — Independent digital studio",
  description:
    "A selection of digital products, AI experiments and learning experiences by Angéline Poitout, independent digital studio.",
};

export default function HomePage() {
  return <CasesStage covers={getCovers()} />;
}
