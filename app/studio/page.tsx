import { permanentRedirect } from "next/navigation";

// The studio now lives on the home page.
export default function StudioPage() {
  permanentRedirect("/");
}
