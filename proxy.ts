import { NextResponse, type NextRequest } from "next/server";
import { projects } from "./app/_data/projects";
import { writing } from "./app/_data/writing";

/**
 * Unknown /studio/<slug> and /writing/<slug> get a real 404. With Partial Prefetching the page
 * shell is sent before the page can call notFound(), so the "not found" page came back as a 200.
 */
const known = {
  studio: new Set<string>(projects.map((project) => project.slug)),
  writing: new Set<string>(writing),
};

export function proxy(request: NextRequest) {
  const [, section, slug, ...rest] = request.nextUrl.pathname.split("/");
  // The page itself, or its share image (/studio/<slug>/opengraph-image).
  const page = rest.length === 0 || (rest.length === 1 && rest[0] === "opengraph-image");
  if (page && known[section as keyof typeof known].has(slug)) return NextResponse.next();
  // No route matches this path, so Next renders the not-found page with a 404 status.
  return NextResponse.rewrite(new URL("/_unknown", request.url));
}

export const config = {
  matcher: ["/studio/:slug+", "/writing/:slug+"],
};
