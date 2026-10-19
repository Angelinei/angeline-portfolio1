import fs from "node:fs";
import path from "node:path";
import type { ComponentPropsWithoutRef } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import type { WritingSlug } from "../_data/writing";
import { ImageTodo } from "./image-todo";
import { VideoTodo } from "./video-todo";

const heading =
  "mt-14 mb-4 text-[1.65rem] leading-[1.2] font-medium tracking-[-0.04em] text-[#20201E]";

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

function Img({ alt = "", ...props }: ComponentPropsWithoutRef<"img">) {
  // eslint-disable-next-line @next/next/no-img-element -- MDX images come with no known size
  return <img alt={alt} loading="lazy" className="mx-auto my-8 block h-auto max-w-full rounded-[18px] border border-black/10" {...props} />;
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
  img: Img,
  blockquote: Blockquote,
  VideoTodo,
  ImageTodo,
};

export function WritingBody({ slug }: { slug: WritingSlug }) {
  const file = path.join(process.cwd(), "content", "blog", `${slug}.en.mdx`);
  const { content } = matter(fs.readFileSync(file, "utf8"));

  return (
    <MDXRemote
      source={content}
      components={components}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  );
}
