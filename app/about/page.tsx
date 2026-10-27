import type { Metadata } from "next";
import AboutPage from "../_components/about-page";
import { JsonLd } from "../_components/json-ld";
import { SITE, pageMetadata, pageTitle, personSchema } from "../../lib/seo";

export const metadata: Metadata = pageMetadata({
  title: pageTitle("About"),
  description:
    "Angéline Poitout works at the intersection of generative AI, learning design and digital products: background, approach and what the studio builds.",
  path: "/about",
});

export default function Page() {
  return (
    <>
      <JsonLd
        data={{ "@context": "https://schema.org", "@type": "ProfilePage", url: `${SITE}/about`, mainEntity: personSchema }}
      />
      <AboutPage />
    </>
  );
}
