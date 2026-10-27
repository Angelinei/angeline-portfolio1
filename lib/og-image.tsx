import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/**
 * The share card (Open Graph / X) of a page: eyebrow, title, optional subtitle, and the site
 * name, on the site's paper background with the page's accent colour.
 */
export function ogImage({
  eyebrow,
  title,
  subtitle,
  accent = "#7660D8",
  tint = "#EDE9FB",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Text accent (a project's `ink`). */
  accent?: string;
  /** Side panel colour (a project's `tint`). */
  tint?: string;
}) {
  const size = title.length > 70 ? 54 : title.length > 40 ? 66 : 84;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#F8F7F2", color: "#20201E" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "72px 64px 64px 80px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "rgba(0,0,0,0.5)" }}>
              {eyebrow}
            </div>
            <div style={{ marginTop: 28, fontSize: size, lineHeight: 1.05, fontWeight: 600, letterSpacing: -2 }}>
              {title}
            </div>
            {subtitle && <div style={{ marginTop: 24, fontSize: 34, lineHeight: 1.25, color: accent }}>{subtitle}</div>}
          </div>
          <div style={{ display: "flex", alignItems: "center", fontSize: 26 }}>
            <div style={{ fontWeight: 600 }}>Angéline Poitout</div>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: "#7660D8", margin: "0 16px" }} />
            <div style={{ color: "rgba(0,0,0,0.5)" }}>angelinepoitout.com</div>
          </div>
        </div>
        <div style={{ width: 260, display: "flex", background: tint, borderLeft: `12px solid ${accent}` }} />
      </div>
    ),
    ogSize,
  );
}
