"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { videos, type SiteVideo, type VideoId } from "../_data/media";

/**
 * A video from app/_data/media.ts. Nothing is requested, not even the poster, until the player
 * comes near the viewport; then it mounts with preload="none", so the file itself only loads on
 * play. Clips with a voice keep their sound; only clips marked `muted` are muted.
 */
export function LazyVideo({
  id,
  label,
  className,
  style,
}: {
  id: VideoId;
  label: string;
  className?: string;
  style?: CSSProperties;
}) {
  const video: SiteVideo = videos[id];
  const box = useRef<HTMLDivElement>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setNear(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const ratio = { aspectRatio: `${video.width} / ${video.height}`, ...style };

  if (!near) {
    return <div ref={box} role="img" aria-label={label} className={className} style={ratio} />;
  }

  if (video.youtube) {
    return (
      <div className={className} style={ratio}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.youtube}`}
          title={label}
          loading="lazy"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
          style={{ display: "block", width: "100%", height: "100%", border: 0 }}
        />
      </div>
    );
  }

  return (
    <video
      poster={video.poster}
      controls
      playsInline
      muted={video.muted}
      preload="none"
      aria-label={label}
      className={className}
      style={ratio}
    >
      {video.sources.map((source) => (
        <source key={source.src} src={source.src} type={source.type} />
      ))}
    </video>
  );
}
