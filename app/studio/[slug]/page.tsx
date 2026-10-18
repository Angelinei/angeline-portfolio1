import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetail from "../../_components/project-detail";
import { getCovers, getPortfolioFiles, getProjectImages } from "../../_components/covers";
import { getProject, projects } from "../../_data/projects";

// Every project page is prerendered from generateStaticParams; reading params
// at the top keeps a real 404 status for unknown slugs instead of a streamed one.
export const instant = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/studio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Angéline Poitout`,
    description: project.summary.EN,
  };
}

export default async function ProjectPage({ params }: PageProps<"/studio/[slug]">) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();

  return (
    <ProjectDetail
      slug={slug}
      covers={getCovers()}
      images={getProjectImages(slug)}
      portfolioFiles={slug === "portfolio" ? getPortfolioFiles() : undefined}
    />
  );
}
