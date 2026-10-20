import fs from "node:fs";
import path from "node:path";
import type { ComponentPropsWithoutRef } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import type { WritingSlug } from "../_data/writing";
import type { VideoId } from "../_data/media";
import Image from "next/image";
import { publicImageSize } from "../../lib/image-size";
import { ImageTodo } from "./image-todo";
import { LazyVideo } from "./lazy-video";
import { VideoTodo } from "./video-todo";

const heading = "mt-14 mb-4 text-[1.65rem] leading-[1.2] font-medium tracking-[-0.04em] text-[#20201E]";

function H2(props: ComponentPropsWithoutRef<"h2">) {
  return <h2 className={heading} {...props} />;
}

function H3(props: ComponentPropsWithoutRef<"h3">) {
  return <h3 className={`${heading} text-[1.35rem]`} {...props} />;
}

function P(props: ComponentPropsWithoutRef<"p">) {
  return <p className="mb-4 text-base leading-8 text-black/75" {...props} />;
}

function A({ href = "", children, ...props }: ComponentPropsWithoutRef<"a">) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      {...props}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="underline decoration-black/25 underline-offset-4 transition-colors hover:text-[#7660D8] hover:decoration-[#7660D8]"
    >
      {children}
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </a>
  );
}

function Strong(props: ComponentPropsWithoutRef<"strong">) {
  return <strong className="font-semibold text-[#20201E]" {...props} />;
}

function Em(props: ComponentPropsWithoutRef<"em">) {
  return <em className="font-serif italic" {...props} />;
}

function Ul(props: ComponentPropsWithoutRef<"ul">) {
  return <ul className="my-6 list-disc space-y-2 pl-5 marker:text-[#7660D8]" {...props} />;
}

function Ol(props: ComponentPropsWithoutRef<"ol">) {
  return <ol className="my-6 list-decimal space-y-2 pl-5 marker:text-[#7660D8]" {...props} />;
}

function Li(props: ComponentPropsWithoutRef<"li">) {
  return <li className="text-base leading-8 text-black/75" {...props} />;
}

const imgClass = "mx-auto my-8 block h-auto max-w-full rounded-[18px] border border-black/10";

/**
 * Article images. Files of public/ go through next/image at their own size (never upscaled):
 * lazy, AVIF/WebP, at most 2x the 680px column. Remote images (Drive, Medium) stay plain.
 */
function Img({ alt = "", src }: ComponentPropsWithoutRef<"img">) {
  const url = typeof src === "string" ? src : "";
  const size = url.startsWith("/") ? publicImageSize(url) : null;
  if (size) {
    return (
      <Image
        src={url}
        alt={alt}
        width={size.width}
        height={size.height}
        sizes={`(min-width: 760px) ${Math.min(size.width, 680)}px, calc(100vw - 40px)`}
        className={imgClass}
      />
    );
  }
  // eslint-disable-next-line @next/next/no-img-element -- remote image of unknown size
  return <img alt={alt} src={url} loading="lazy" className={imgClass} />;
}

/** A clip from app/_data/media.ts, loaded only when it comes near the viewport. */
function Video({ id, label }: { id: VideoId; label: string }) {
  return (
    <LazyVideo
      id={id}
      label={label}
      className="my-8 block h-auto w-full rounded-[18px] border border-black/10 bg-black"
    />
  );
}

/** A clip kept on Google Drive, played in Drive's own player. */
function DriveVideo({ id, label }: { id: string; label: string }) {
  return (
    <div className="my-8 aspect-video overflow-hidden rounded-[18px] border border-black/10 bg-black">
      <iframe
        src={`https://drive.google.com/file/d/${id}/preview`}
        title={label}
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
        className="size-full"
      />
    </div>
  );
}

/** GFM tables: scroll sideways on narrow screens instead of squeezing the columns. */
function Table(props: ComponentPropsWithoutRef<"table">) {
  return (
    <div className="my-8 overflow-x-auto rounded-[18px] border border-black/10 bg-white">
      <table className="w-full min-w-[520px] border-collapse text-left text-sm leading-6" {...props} />
    </div>
  );
}

function Th(props: ComponentPropsWithoutRef<"th">) {
  return (
    <th
      className="border-b border-black/10 bg-[#F3F1EA] px-4 py-3 text-xs font-medium tracking-[0.04em] text-[#20201E]"
      {...props}
    />
  );
}

function Td(props: ComponentPropsWithoutRef<"td">) {
  return (
    <td
      className="border-b border-black/5 px-4 py-3 align-top text-black/75 first:font-medium first:min-w-[8.5rem] first:text-[#20201E]"
      {...props}
    />
  );
}

function Hr() {
  return <hr className="my-10 border-0 border-t border-black/10" />;
}

function Blockquote(props: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote
      className="my-8 border-l-2 border-[#7660D8] pl-4 font-serif text-lg italic leading-8 text-black/70"
      {...props}
    />
  );
}

const components = {
  h2: H2,
  h3: H3,
  p: P,
  a: A,
  strong: Strong,
  em: Em,
  ul: Ul,
  ol: Ol,
  li: Li,
  hr: Hr,
  table: Table,
  th: Th,
  td: Td,
  img: Img,
  blockquote: Blockquote,
  Video,
  DriveVideo,
  VideoTodo,
  ImageTodo,
};

export function WritingBody({ slug }: { slug: WritingSlug }) {
  const file = path.join(process.cwd(), "content", "blog", `${slug}.en.mdx`);
  const { content } = matter(fs.readFileSync(file, "utf8"));

  return (
    <MDXRemote source={content} components={components} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
  );
}
