import type { Metadata } from "next";
import AboutPage from "../_components/about-page";

export const metadata: Metadata = {
  title: "About | Angéline Poitout",
  description:
    "Angéline Poitout works at the intersection of generative AI, learning design and digital products.",
};

export default function Page() {
  return <AboutPage />;
}
