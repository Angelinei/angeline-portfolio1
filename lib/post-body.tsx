import fs from "node:fs";
import path from "node:path";
import type { ComponentPropsWithoutRef } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";
import { Figure } from "@/components/figure";
import { ImageTodo } from "@/components/image-todo";
import { VideoTodo } from "@/components/video-todo";

function Table(props: ComponentPropsWithoutRef<"table">) {
  return (
    <div className="my-8 overflow-x-auto">
      <table {...props} />
    </div>
  );
}

const components = {
  Figure,
  VideoTodo,
  ImageTodo,
  table: Table,
};

export function PostBody({ slug }: { slug: string }) {
  const file = path.join(process.cwd(), "content", "blog", `${slug}.en.mdx`);
  const raw = fs.readFileSync(file, "utf8");
  const { content } = matter(raw);

  return (
    <MDXRemote
      source={content}
      components={components}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
}
