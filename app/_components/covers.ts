import { existsSync, readFileSync, readdirSync } from "node:fs";
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

export type GalleryFile = { src: string; width: number; height: number };

/** Width and height from a PNG, JPEG or WebP header; undefined for anything else. */
function imageSize(file: string): { width: number; height: number } | undefined {
  const b = readFileSync(file);
  if (b.length > 24 && b.readUInt32BE(0) === 0x89504e47) {
    return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  }
  if (b.length > 30 && b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const chunk = b.toString("ascii", 12, 16);
    if (chunk === "VP8X") return { width: 1 + b.readUIntLE(24, 3), height: 1 + b.readUIntLE(27, 3) };
    if (chunk === "VP8 ") return { width: b.readUInt16LE(26) & 0x3fff, height: b.readUInt16LE(28) & 0x3fff };
    if (chunk === "VP8L") {
      const bits = b.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
  }
  if (b.length > 4 && b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) return undefined;
      const marker = b[i + 1];
      const length = b.readUInt16BE(i + 2);
      if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
        return { width: b.readUInt16BE(i + 7), height: b.readUInt16BE(i + 5) };
      }
      i += 2 + length;
    }
  }
  return undefined;
}

/** Gallery images of the portfolio case found in public/portfolio/, keyed by file name. */
export function getPortfolioFiles(): Record<string, GalleryFile> {
  const dir = path.join(process.cwd(), "public", "portfolio");
  if (!existsSync(dir)) return {};
  const files: Record<string, GalleryFile> = {};
  for (const name of readdirSync(dir)) {
    if (!/\.(png|jpe?g|webp)$/i.test(name)) continue;
    const size = imageSize(path.join(dir, name));
    if (size) files[name] = { src: `/portfolio/${name}`, ...size };
  }
  return files;
}
