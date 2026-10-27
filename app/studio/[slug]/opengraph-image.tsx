import { ogImage, ogSize } from "../../../lib/og-image";
import { getProject, projects } from "../../_data/projects";

export const alt = "Project by Angéline Poitout";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug)!;
  return ogImage({
    eyebrow: `${project.number} · ${project.eyebrow.EN}`,
    title: project.title,
    subtitle: project.subtitle?.EN ?? project.summary.EN,
    accent: project.ink,
    tint: project.tint,
  });
}
