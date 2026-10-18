import { JetBrains_Mono, Nunito } from "next/font/google";

// Typefaces of the SkillxTube brand, used only by the design portfolio blocks.
export const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "600"],
});
