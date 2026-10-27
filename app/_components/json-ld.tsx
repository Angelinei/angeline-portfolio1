import { jsonLd } from "../../lib/seo";

/** Structured data (schema.org) for search engines. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />;
}
