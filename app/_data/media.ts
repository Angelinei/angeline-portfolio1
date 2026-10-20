/**
 * Every video of the site, in one place. The URLs point to files in public/media/video/ (H.264 MP4
 * + VP9 WebM, max 1280px, poster in WebP); swap them for Vercel Blob URLs or set `youtube` later
 * without touching the pages.
 *
 * - `sources`: tried in order by the browser, lightest first. A WebM is kept only when it is
 *   lighter than the MP4 (here: 100 Days, flow8, video-1-1).
 * - `youtube`: a YouTube video id; when set, the player becomes a lazy YouTube embed and links
 *   point to YouTube.
 * - `muted`: only for clips with no voice or sound.
 */

export type VideoSource = { src: string; type: "video/mp4" | "video/webm" };

export type SiteVideo = {
  sources: VideoSource[];
  poster?: string;
  width: number;
  height: number;
  muted?: boolean;
  youtube?: string;
};

export const videos = {
  /** The Portfolio, 11.1 demo video, and "Building faster". */
  skillxtubeDemo: {
    sources: [{ src: "/media/video/skillxtube-demo.c710f90e42.mp4", type: "video/mp4" }],
    poster: "/media/video/skillxtube-demo-poster.3ab3f5281c.webp",
    width: 1280,
    height: 720,
  },
  /** Archives: 100 Days of Webmarketing (opened from its link). */
  hundredDaysOfWebmarketing: {
    sources: [
      { src: "/media/video/100-days-of-webmarketing.629c86fb01.webm", type: "video/webm" },
      { src: "/media/video/100-days-of-webmarketing.da43cd8b76.mp4", type: "video/mp4" },
    ],
    width: 1280,
    height: 720,
  },
  /** Cemetery: Drive Freelance (opened from its link). */
  driveFreelance: {
    sources: [{ src: "/media/video/drive-freelance.16fba9e5fc.mp4", type: "video/mp4" }],
    width: 720,
    height: 1280,
  },
  /** "Two AIs, one week" and "Building faster": silent screen recording. */
  canon3: {
    sources: [{ src: "/media/video/canon3.58ee800b0d.mp4", type: "video/mp4" }],
    poster: "/media/video/canon3-poster.e8e10f3275.webp",
    width: 1280,
    height: 596,
    muted: true,
  },
  /** "Two AIs, one week". */
  flow8: {
    sources: [
      { src: "/media/video/flow8.700c36d006.webm", type: "video/webm" },
      { src: "/media/video/flow8.cddc25da0d.mp4", type: "video/mp4" },
    ],
    poster: "/media/video/flow8-poster.fec92811eb.webp",
    width: 1280,
    height: 606,
  },
  /** "Building faster". */
  video11: {
    sources: [
      { src: "/media/video/video-1-1.28b2620659.webm", type: "video/webm" },
      { src: "/media/video/video-1-1.2182b088f9.mp4", type: "video/mp4" },
    ],
    poster: "/media/video/video-1-1-poster.3b1f022249.webp",
    width: 618,
    height: 476,
  },
} satisfies Record<string, SiteVideo>;

export type VideoId = keyof typeof videos;

/** Where a link to the video should go: YouTube when set, else the first MP4. */
export function videoHref(id: VideoId): string {
  const video: SiteVideo = videos[id];
  if (video.youtube) return `https://www.youtube.com/watch?v=${video.youtube}`;
  return (video.sources.find((s) => s.type === "video/mp4") ?? video.sources[0]).src;
}
