import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "public", "projects");
const MEDIA = /\.(avif|webp|png|jpe?g|gif|mp4|webm)$/i;
const COVER = /^cover\.[a-z0-9]+$/i;

function listMedia(dir: string) {
  const full = path.join(ROOT, dir);
  if (!existsSync(full)) return [];
  return readdirSync(full)
    .filter((f) => MEDIA.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

/** Finds public/projects/<slide id>/cover.* files, resolved at build time. */
export function getCovers(): Record<string, string> {
  if (!existsSync(ROOT)) return {};

  const covers: Record<string, string> = {};
  for (const dir of readdirSync(ROOT, { withFileTypes: true })) {
    if (!dir.isDirectory()) continue;
    const file = listMedia(dir.name).find((f) => COVER.test(f));
    if (file) covers[dir.name] = `/projects/${dir.name}/${file}`;
  }
  return covers;
}

/** Every non-cover image/video of public/projects/<slug>/, sorted by file name. */
export function getProjectImages(slug: string): string[] {
  return listMedia(slug)
    .filter((f) => !COVER.test(f))
    .map((f) => `/projects/${slug}/${f}`);
}
