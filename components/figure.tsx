import Image from "next/image";

type FigureProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
  caption?: string;
};

export function Figure({ src, alt = "", width, height, caption }: FigureProps) {
  return (
    <figure className="my-10">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="h-auto w-full"
        sizes="(min-width: 768px) 40rem, 100vw"
      />
      {caption ? (
        <figcaption className="mt-3 text-xs tracking-wide text-black/45">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
