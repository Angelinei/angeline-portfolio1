import type { Metadata } from "next";
import CasesStage from "./_components/cases-stage";
import { getCovers } from "./_components/covers";
import { JsonLd } from "./_components/json-ld";
import { AUTHOR, SITE, pageMetadata, personSchema } from "../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Angéline Poitout — Generative AI & Learning Design Studio",
  description:
    "Independent studio of Angéline Poitout at the crossroads of generative AI, learning design and digital products: SkillxTube, SkillXGames, AI experiments and essays.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            personSchema,
            { "@type": "WebSite", "@id": `${SITE}/#website`, url: SITE, name: AUTHOR, publisher: { "@id": personSchema["@id"] } },
          ],
        }}
      />
      {/* The stage shows each project as a slide; this is the page title for search engines and screen readers. */}
      <h1 className="sr-only">Angéline Poitout — Generative AI, Learning Design and Digital Products</h1>
      <CasesStage covers={getCovers()} />
    </>
  );
}
