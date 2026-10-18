import type { Metadata } from "next";
import AboutPage from "../_components/about-page";

export const metadata: Metadata = {
  title: "About | Angéline Poitout",
  description:
    "Angéline Poitout builds learning products that turn curiosity into capability. Founder of SkillxTube.",
};

export default function Page() {
  return <AboutPage />;
}
