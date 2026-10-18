"use client";

/*
 * SkillxTube design portfolio, rebuilt from the "Design portfolio" pages
 * (EN and FR exports). Blocks keep their own SkillxTube look (Nunito,
 * JetBrains Mono, red #FF4D4D) as project visuals; every link and in-page
 * anchor of the source is kept. Texts live in app/_data/design-portfolio.ts.
 */
import Image from "next/image";
import type { Lang } from "../_data/projects";
import { designPortfolioText, edtechUseCases } from "../_data/design-portfolio";
import { jetbrainsMono, nunito } from "./design-fonts";
import img1 from "../../public/portfolio/design/skillxtube-logo.png";
import img2 from "../../public/portfolio/design/zip.png";
import img3 from "../../public/portfolio/design/cc-happy.png";
import img4 from "../../public/portfolio/design/ding.png";
import img5 from "../../public/portfolio/design/landing-dark.png";
import img6 from "../../public/portfolio/design/pricing-for-makers.png";
import img7 from "../../public/portfolio/design/maker-projects.png";
import img8 from "../../public/portfolio/design/affiliate-chat-start.png";
import img9 from "../../public/portfolio/design/affiliate-chat-end.png";
import img10 from "../../public/portfolio/design/affiliate-space.png";
import img11 from "../../public/portfolio/design/advertise-page.png";
import img12 from "../../public/portfolio/design/advertise-step-1-cells.png";
import img13 from "../../public/portfolio/design/advertise-step-2-duration.png";
import img14 from "../../public/portfolio/design/advertise-step-3-logo.png";
import img15 from "../../public/portfolio/design/advertise-brand-space.png";
import img16 from "../../public/portfolio/design/advertise-stripe.png";
import img17 from "../../public/portfolio/design/demo-google-ads.png";
import img18 from "../../public/portfolio/design/game-community-card.png";
import img19 from "../../public/portfolio/design/game-page.png";
import img20 from "../../public/portfolio/design/thumby-hunt.png";
import img21 from "../../public/portfolio/design/buffer.png";
import img22 from "../../public/portfolio/design/skip.png";
import img23 from "../../public/portfolio/design/later.png";
import img24 from "../../public/portfolio/design/thumby.png";
import img25 from "../../public/portfolio/design/cc-blushing.png";
import img26 from "../../public/portfolio/design/tiktok-ep5-later.png";
import img27 from "../../public/portfolio/design/tiktok-ep7-teaser.png";
import img28 from "../../public/portfolio/design/tiktok-ep7-gang.png";

export function DesignPortfolio({ lang }: { lang: Lang }) {
  const t = (key: keyof typeof designPortfolioText) => designPortfolioText[key][lang];
  return (
    <div
      className={`${nunito.variable} ${jetbrainsMono.variable}`}
      style={{ fontFamily: "var(--font-nunito), system-ui, sans-serif", color: "#1A1A1A", background: "#FFFFFF", minHeight: "100vh" }}
    >
      {/* NAV */}
      <header style={{ borderBottom: "0.5px solid #D8D6D0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "18px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
          <nav style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "24px", fontSize: "14px", fontWeight: "700" }}>
            <a href="#evolution" style={{ textDecoration: "none" }}>
              {t("nav.2")}
            </a>
            <a href="#marque" style={{ textDecoration: "none" }}>
              {t("nav.3")}
            </a>
            <a href="#produit" style={{ textDecoration: "none" }}>
              {t("nav.4")}
            </a>
            <a href="#demos" style={{ textDecoration: "none" }}>
              {t("nav.5")}
            </a>
            <a href="#bande" style={{ textDecoration: "none" }}>
              {t("nav.6")}
            </a>
            <a href="#reseaux" style={{ textDecoration: "none" }}>
              {t("nav.7")}
            </a>
            <a href="#jeu" style={{ textDecoration: "none" }}>
              {t("nav.8")}
            </a>
            <a href="#marques" style={{ textDecoration: "none" }}>
              {t("nav.9")}
            </a>
            <a href="#side" style={{ textDecoration: "none" }}>
              {t("nav.10")}
            </a>
            <a href="https://skillxtube.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              {t("nav.11")}
            </a>
            <a href="https://www.behance.net/angelinepoitout" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              {t("nav.12")}
            </a>
            <a href="https://angelinepoitout.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", background: "#1A1A1A", color: "#FFFFFF", padding: "12px 20px", borderRadius: "999px", minHeight: "44px", boxSizing: "border-box", display: "inline-flex", alignItems: "center" }}>
              {t("nav.13")}
            </a>
          </nav>
        </div>
      </header>
      {/* HERO */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 32px 72px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#FF4D4D", color: "#FFFFFF", padding: "6px 14px", borderRadius: "999px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", fontWeight: "600", letterSpacing: "0.04em", textTransform: "uppercase" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "999px", background: "#FFFFFF" }} />
          {t("hero.0")}
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginLeft: "8px", border: "0.5px solid #1A1A1A", padding: "6px 14px", borderRadius: "999px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", fontWeight: "600", letterSpacing: "0.04em", textTransform: "uppercase" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
          </svg>
          {t("hero.1")}
        </div>
        <h2 style={{ margin: "24px 0 0", fontSize: "clamp(40px, 6vw, 76px)", lineHeight: "1.02", fontWeight: "900", letterSpacing: "-0.02em", maxWidth: "980px" }}>
          {t("hero.2")}
        </h2>
        <p style={{ margin: "28px 0 0", fontSize: "20px", lineHeight: "1.55", color: "#4A4943", maxWidth: "720px" }}>
          {t("hero.3")}
        </p>
        <div style={{ marginTop: "28px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <a href="https://skillxtube.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "48px", padding: "0 22px", borderRadius: "999px", background: "#1A1A1A", color: "#FFFFFF", fontWeight: "800", fontSize: "15px", textDecoration: "none" }}>
            <Image src={img1} alt="" aria-hidden="true" loading="lazy" style={{ width: "22px", height: "22px" }} />
            {t("hero.4")}
          </a>
          <a href="https://www.astrocade.com/games/zip-vs-the-brainrot/01M4BBVE5HTMCFA8DZXY4F21A4" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", minHeight: "48px", padding: "0 22px", borderRadius: "999px", border: "0.5px solid #1A1A1A", fontWeight: "800", fontSize: "15px", textDecoration: "none" }}>
            {t("hero.5")}
          </a>
        </div>
        <div style={{ marginTop: "56px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0", borderTop: "0.5px solid #D8D6D0", borderBottom: "0.5px solid #D8D6D0" }}>
          <div style={{ padding: "24px 24px 24px 0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "36px", fontWeight: "600" }}>
              {t("hero.6")}
            </div>
            <div style={{ marginTop: "6px", fontSize: "14px", color: "#5F5E58" }}>
              {t("hero.7")}
            </div>
          </div>
          <div style={{ padding: "24px", borderLeft: "0.5px solid #D8D6D0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "36px", fontWeight: "600" }}>
              {t("hero.8")}
            </div>
            <div style={{ marginTop: "6px", fontSize: "14px", color: "#5F5E58" }}>
              {t("hero.9")}
            </div>
          </div>
          <div style={{ padding: "24px", borderLeft: "0.5px solid #D8D6D0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "36px", fontWeight: "600" }}>
              {t("hero.10")}
            </div>
            <div style={{ marginTop: "6px", fontSize: "14px", color: "#5F5E58" }}>
              {t("hero.11")}
            </div>
          </div>
          <div style={{ padding: "24px", borderLeft: "0.5px solid #D8D6D0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "36px", fontWeight: "600" }}>
              {t("hero.12")}
            </div>
            <div style={{ marginTop: "6px", fontSize: "14px", color: "#5F5E58" }}>
              {t("hero.13")}
            </div>
          </div>
        </div>
      </section>
      {/* EVOLUTION GRAPHIQUE */}
      <section id="evolution" style={{ scrollMarginTop: "96px", maxWidth: "1200px", margin: "0 auto", padding: "24px 32px 64px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
          <div style={{ flex: "1 1 460px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("evolution.0")}
              </span>
              {t("evolution.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("evolution.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943", maxWidth: "680px" }}>
              {t("evolution.3")}
            </p>
          </div>
          <a href="https://skillxtube.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "10px", minHeight: "44px", padding: "0 20px", borderRadius: "999px", background: "#1A1A1A", color: "#FFFFFF", fontWeight: "800", fontSize: "14px", textDecoration: "none" }}>
            <Image src={img1} alt="" aria-hidden="true" loading="lazy" style={{ width: "20px", height: "20px" }} />
            {t("evolution.4")}
          </a>
        </div>
        <ol style={{ listStyle: "none", margin: "36px 0 0", padding: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "12px" }}>
          <li style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "150px", background: "#FFF6E5", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", boxSizing: "border-box" }}>
              <div style={{ background: "#FFFFFF", border: "3px solid #1A1A1A", boxShadow: "6px 6px 0 #1A1A1A", borderRadius: "10px", padding: "12px 16px", display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "18px", fontWeight: "900", lineHeight: "1" }}>
                  {t("evolution.5")}
                  <span style={{ color: "#FF4D4D" }}>
                    {t("evolution.6")}
                  </span>
                </span>
                <span style={{ background: "#75AFF3", border: "3px solid #1A1A1A", borderRadius: "8px", padding: "4px 10px", fontSize: "12px", fontWeight: "900" }}>
                  {t("evolution.7")}
                </span>
              </div>
            </div>
            <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: "6px", flex: "1" }}>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("evolution.8")}
              </span>
              <span style={{ fontWeight: "900", fontSize: "17px" }}>
                {t("evolution.9")}
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A4943" }}>
                {t("evolution.10")}
              </span>
            </div>
          </li>
          <li style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "150px", background: "#F1F0EC", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px", boxSizing: "border-box" }}>
              <div style={{ background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "14px 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "10px", fontWeight: "800" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "999px", background: "#FF4D4D" }} />
                  {t("evolution.11")}
                </span>
                <span style={{ fontSize: "17px", fontWeight: "900", lineHeight: "1.1" }}>
                  {t("evolution.12")}
                  <br />
                  <span style={{ color: "#C62828" }}>
                    {t("evolution.13")}
                  </span>
                  {t("evolution.14")}
                </span>
              </div>
            </div>
            <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: "6px", flex: "1" }}>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("evolution.15")}
              </span>
              <span style={{ fontWeight: "900", fontSize: "17px" }}>
                {t("evolution.16")}
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A4943" }}>
                {t("evolution.17")}
              </span>
            </div>
          </li>
          <li style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "150px", background: "#F7F7F5", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", padding: "20px", boxSizing: "border-box" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", opacity: "0.55" }}>
                <span style={{ width: "44px", height: "54px", borderRadius: "8px", background: "#E3B450" }} />
                <span style={{ fontSize: "10px", textDecoration: "line-through" }}>
                  {t("evolution.18")}
                </span>
              </div>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                <span style={{ width: "44px", height: "54px", borderRadius: "8px", background: "#FFFFFF", border: "1px solid #FF4D4D", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#C62828" }}>
                  {t("evolution.19")}
                </span>
                <span style={{ fontSize: "10px" }}>
                  {t("evolution.20")}
                </span>
              </div>
            </div>
            <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: "6px", flex: "1" }}>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("evolution.21")}
              </span>
              <span style={{ fontWeight: "900", fontSize: "17px" }}>
                {t("evolution.22")}
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A4943" }}>
                {t("evolution.23")}
              </span>
            </div>
          </li>
          <li style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "150px", background: "#1A1A1A", display: "flex", flexWrap: "wrap", alignContent: "center", justifyContent: "center", gap: "6px", padding: "18px", boxSizing: "border-box" }}>
              <span style={{ fontSize: "11px", color: "#FFFFFF", padding: "4px 10px", border: "0.5px solid #5F5E58", borderRadius: "999px" }}>
                {t("evolution.24")}
              </span>
              <span style={{ fontSize: "11px", color: "#FFFFFF", padding: "4px 10px", border: "0.5px solid #5F5E58", borderRadius: "999px" }}>
                {t("evolution.25")}
              </span>
              <span style={{ fontSize: "11px", color: "#FFFFFF", padding: "4px 10px", border: "0.5px solid #5F5E58", borderRadius: "999px" }}>
                {t("evolution.26")}
              </span>
              <span style={{ fontSize: "11px", color: "#FFFFFF", padding: "4px 10px", border: "0.5px solid #5F5E58", borderRadius: "999px" }}>
                {t("evolution.27")}
              </span>
              <span style={{ fontSize: "11px", color: "#1A1A1A", background: "#FFFFFF", fontWeight: "800", padding: "4px 10px", borderRadius: "999px" }}>
                {t("evolution.28")}
              </span>
            </div>
            <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: "6px", flex: "1" }}>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("evolution.29")}
              </span>
              <span style={{ fontWeight: "900", fontSize: "17px" }}>
                {t("evolution.30")}
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A4943" }}>
                {t("evolution.31")}
              </span>
            </div>
          </li>
          <li style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "150px", background: "#FFE8EA", display: "flex", alignItems: "flex-end", justifyContent: "center", gap: "4px", padding: "16px 12px 10px", boxSizing: "border-box" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", opacity: "0.6" }}>
                <svg width="44" height="47" viewBox="0 0 150 160" aria-hidden="true">
                  <path d="M80 8 L62 40 h14 l-6 22 24-32 h-14 z" fill="#2F4858" />
                  <ellipse cx="75" cy="100" rx="58" ry="54" fill="#FF4D4D" />
                  <circle cx="56" cy="90" r="8" fill="#1A1A1A" />
                  <circle cx="94" cy="90" r="8" fill="#1A1A1A" />
                </svg>
                <span style={{ fontSize: "9px" }}>
                  {t("evolution.32")}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px", opacity: "0.6" }}>
                <span style={{ width: "44px", height: "47px", borderRadius: "999px", background: "#C24040", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFFFFF", fontSize: "10px", fontWeight: "900" }}>
                  {t("evolution.33")}
                </span>
                <span style={{ fontSize: "9px", textDecoration: "line-through" }}>
                  {t("evolution.34")}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                <Image src={img2} alt={t("evolution.img1")} loading="lazy" style={{ width: "56px", height: "60px", objectFit: "contain" }} />
                <span style={{ fontSize: "9px", fontWeight: "800" }}>
                  {t("evolution.35")}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <Image src={img3} alt={t("evolution.img2")} loading="lazy" style={{ width: "36px", height: "38px", objectFit: "contain" }} />
                <Image src={img4} alt={t("evolution.img3")} loading="lazy" style={{ width: "36px", height: "38px", objectFit: "contain" }} />
              </div>
            </div>
            <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: "6px", flex: "1" }}>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("evolution.36")}
              </span>
              <span style={{ fontWeight: "900", fontSize: "17px" }}>
                {t("evolution.37")}
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A4943" }}>
                {t("evolution.38")}
              </span>
            </div>
          </li>
          <li style={{ border: "1px solid #FF4D4D", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ height: "150px", background: "#FFFFFF", display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px", padding: "18px", boxSizing: "border-box", borderBottom: "0.5px solid #D8D6D0" }}>
              <span style={{ fontSize: "17px", fontWeight: "900", lineHeight: "1.15" }}>
                {t("evolution.39")}
                <span style={{ color: "#C62828" }}>
                  {t("evolution.40")}
                </span>
              </span>
              <span style={{ fontSize: "11px", color: "#4A4943" }}>
                {t("evolution.41")}
              </span>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "10px", fontWeight: "800", padding: "3px 8px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                  {t("evolution.42")}
                </span>
                <span style={{ fontSize: "10px", fontWeight: "800", padding: "3px 8px", background: "#1A1A1A", color: "#FFFFFF", borderRadius: "999px" }}>
                  {t("evolution.43")}
                </span>
                <span style={{ fontSize: "10px", fontWeight: "800", padding: "3px 8px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                  {t("evolution.44")}
                </span>
                <span style={{ fontSize: "10px", fontWeight: "800", padding: "3px 8px", background: "#FF4D4D", color: "#FFFFFF", borderRadius: "999px" }}>
                  {t("evolution.45")}
                </span>
              </div>
            </div>
            <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: "6px", flex: "1" }}>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#C62828" }}>
                {t("evolution.46")}
              </span>
              <span style={{ fontWeight: "900", fontSize: "17px" }}>
                {t("evolution.47")}
              </span>
              <span style={{ fontSize: "14px", lineHeight: "1.5", color: "#4A4943" }}>
                {t("evolution.48")}
              </span>
            </div>
          </li>
        </ol>
        <div style={{ marginTop: "12px", border: "0.5px dashed #9A9992", borderRadius: "12px", padding: "18px 20px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
          <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            {t("evolution.49")}
          </span>
          <span style={{ flex: "1 1 320px", fontSize: "15px", lineHeight: "1.5" }}>
            <b>
              {t("evolution.50")}
            </b>
            {t("evolution.51")}
          </span>
        </div>
      </section>
      {/* 01 IDENTITE */}
      <section id="marque" style={{ scrollMarginTop: "96px", maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("identity.0")}
              </span>
              {t("identity.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("identity.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("identity.3")}
            </p>
            <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("identity.4")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("identity.5")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("identity.6")}
              </span>
            </div>
          </div>
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
            <div style={{ background: "#F7F7F5", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "32px", minHeight: "240px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Image src={img1} alt={t("identity.img0")} loading="lazy" style={{ width: "52px", height: "52px" }} />
                <span style={{ fontSize: "30px", fontWeight: "900", letterSpacing: "-0.01em" }}>
                  {t("identity.7")}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "14px" }}>
                <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "#FF4D4D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="32" height="32" viewBox="0 0 24 24">
                    <path d="M13 2 L4 14h7l-1 8 9-12h-7z" fill="#FFFFFF" />
                  </svg>
                </div>
                <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#FF4D4D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path d="M13 2 L4 14h7l-1 8 9-12h-7z" fill="#FFFFFF" />
                  </svg>
                </div>
                <div style={{ width: "24px", height: "24px", borderRadius: "999px", background: "#FF4D4D", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24">
                    <path d="M13 2 L4 14h7l-1 8 9-12h-7z" fill="#FFFFFF" />
                  </svg>
                </div>
                <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                  {t("identity.8")}
                </span>
              </div>
            </div>
            <div style={{ background: "#F7F7F5", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#FF4D4D" }} />
                <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "13px" }}>
                  {t("identity.9")}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#75AFF3" }} />
                <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "13px" }}>
                  {t("identity.10")}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#FBB1A9" }} />
                <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "13px" }}>
                  {t("identity.11")}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#FFE8EA", border: "0.5px solid #D8D6D0", boxSizing: "border-box" }} />
                <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "13px" }}>
                  {t("identity.12")}
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#2F4858" }} />
                <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "13px" }}>
                  {t("identity.13")}
                </span>
              </div>
            </div>
            <div style={{ gridColumn: "1 / -1", background: "#1A1A1A", color: "#FFFFFF", borderRadius: "12px", padding: "28px 32px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
              <div>
                <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#BDBCB6", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {t("identity.14")}
                </div>
                <div style={{ marginTop: "6px", fontSize: "24px", fontWeight: "900" }}>
                  {t("identity.15")}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#BDBCB6", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {t("identity.16")}
                </div>
                <div style={{ marginTop: "6px", fontSize: "22px", fontFamily: "var(--font-jbmono), ui-monospace, monospace" }}>
                  {t("identity.17")}
                </div>
              </div>
              <div style={{ gridColumn: "1 / -1", display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <span style={{ fontSize: "13px", padding: "6px 12px", border: "0.5px solid #5F5E58", borderRadius: "999px" }}>
                  {t("identity.18")}
                </span>
                <span style={{ fontSize: "13px", padding: "6px 12px", border: "0.5px solid #5F5E58", borderRadius: "999px" }}>
                  {t("identity.19")}
                </span>
                <span style={{ fontSize: "13px", padding: "6px 12px", border: "0.5px solid #5F5E58", borderRadius: "999px" }}>
                  {t("identity.20")}
                </span>
                <span style={{ fontSize: "13px", padding: "6px 12px", border: "0.5px solid #5F5E58", borderRadius: "999px" }}>
                  {t("identity.21")}
                </span>
                <span style={{ fontSize: "13px", padding: "6px 12px", border: "0.5px solid #5F5E58", borderRadius: "999px" }}>
                  {t("identity.22")}
                </span>
                <span style={{ fontSize: "13px", padding: "6px 12px", border: "0.5px solid #5F5E58", borderRadius: "999px" }}>
                  {t("identity.23")}
                </span>
                <span style={{ fontSize: "13px", padding: "6px 12px", background: "#FFFFFF", color: "#1A1A1A", borderRadius: "999px", fontWeight: "700" }}>
                  {t("identity.24")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* LOGOS */}
      <section id="logos" style={{ scrollMarginTop: "96px", maxWidth: "1200px", margin: "0 auto", padding: "32px 32px 56px" }}>
        <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          <span style={{ color: "#C62828" }}>
            {t("logos.0")}
          </span>
          {t("logos.1")}
        </div>
        <h2 style={{ margin: "12px 0 24px", fontSize: "32px", lineHeight: "1.1", fontWeight: "900" }}>
          {t("logos.2")}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          <div style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ height: "200px", background: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}>
              <Image src={img1} alt={t("logos.img0")} loading="lazy" style={{ width: "64px", height: "64px" }} />
              <span style={{ fontSize: "34px", fontWeight: "900", letterSpacing: "-0.01em", color: "#1A1A1A" }}>
                {t("logos.3")}
              </span>
            </div>
            <div style={{ padding: "12px 16px", borderTop: "0.5px solid #D8D6D0", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
              {t("logos.4")}
            </div>
          </div>
          <div style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ height: "200px", background: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center", gap: "14px" }}>
              <Image src={img1} alt={t("logos.img1")} loading="lazy" style={{ width: "64px", height: "64px" }} />
              <span style={{ fontSize: "34px", fontWeight: "900", letterSpacing: "-0.01em", color: "#FFFFFF" }}>
                {t("logos.5")}
              </span>
            </div>
            <div style={{ padding: "12px 16px", borderTop: "0.5px solid #D8D6D0", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
              {t("logos.6")}
            </div>
          </div>
          <div style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ height: "200px", background: "#FFE8EA", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Image src={img1} alt={t("logos.img2")} loading="lazy" style={{ width: "120px", height: "120px" }} />
            </div>
            <div style={{ padding: "12px 16px", borderTop: "0.5px solid #D8D6D0", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
              {t("logos.7")}
            </div>
          </div>
          <div style={{ gridColumn: "1 / -1", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "24px", display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <Image src={img1} alt={t("logos.img3")} loading="lazy" style={{ width: "128px", height: "128px" }} />
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("logos.8")}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <Image src={img1} alt={t("logos.img4")} loading="lazy" style={{ width: "64px", height: "64px" }} />
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("logos.9")}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <Image src={img1} alt={t("logos.img5")} loading="lazy" style={{ width: "32px", height: "32px" }} />
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("logos.10")}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <Image src={img1} alt={t("logos.img6")} loading="lazy" style={{ width: "16px", height: "16px" }} />
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("logos.11")}
              </span>
            </div>
            <div style={{ flex: "1 1 260px", fontSize: "14px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("logos.12")}
            </div>
          </div>
        </div>
      </section>
      {/* CHARTE */}
      <section id="charte" style={{ scrollMarginTop: "96px", maxWidth: "1200px", margin: "0 auto", padding: "32px 32px 56px" }}>
        <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          <span style={{ color: "#C62828" }}>
            {t("guidelines.0")}
          </span>
          {t("guidelines.1")}
        </div>
        <h2 style={{ margin: "12px 0 24px", fontSize: "32px", lineHeight: "1.1", fontWeight: "900" }}>
          {t("guidelines.2")}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px" }}>
          <div style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ height: "120px", background: "#FF4D4D" }} />
            <div style={{ padding: "12px 14px" }}>
              <div style={{ fontWeight: "900" }}>
                {t("guidelines.3")}
              </div>
              <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58" }}>
                {t("guidelines.4")}
              </div>
              <div style={{ marginTop: "6px", fontSize: "12px", color: "#4A4943" }}>
                {t("guidelines.5")}
              </div>
            </div>
          </div>
          <div style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ height: "120px", background: "#75AFF3" }} />
            <div style={{ padding: "12px 14px" }}>
              <div style={{ fontWeight: "900" }}>
                {t("guidelines.6")}
              </div>
              <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58" }}>
                {t("guidelines.7")}
              </div>
              <div style={{ marginTop: "6px", fontSize: "12px", color: "#4A4943" }}>
                {t("guidelines.8")}
              </div>
            </div>
          </div>
          <div style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ height: "120px", background: "#FBB1A9" }} />
            <div style={{ padding: "12px 14px" }}>
              <div style={{ fontWeight: "900" }}>
                {t("guidelines.9")}
              </div>
              <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58" }}>
                {t("guidelines.10")}
              </div>
              <div style={{ marginTop: "6px", fontSize: "12px", color: "#4A4943" }}>
                {t("guidelines.11")}
              </div>
            </div>
          </div>
          <div style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ height: "120px", background: "#FFE8EA", borderBottom: "0.5px solid #D8D6D0" }} />
            <div style={{ padding: "12px 14px" }}>
              <div style={{ fontWeight: "900" }}>
                {t("guidelines.12")}
              </div>
              <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58" }}>
                {t("guidelines.13")}
              </div>
              <div style={{ marginTop: "6px", fontSize: "12px", color: "#4A4943" }}>
                {t("guidelines.14")}
              </div>
            </div>
          </div>
          <div style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ height: "120px", background: "#2F4858" }} />
            <div style={{ padding: "12px 14px" }}>
              <div style={{ fontWeight: "900" }}>
                {t("guidelines.15")}
              </div>
              <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58" }}>
                {t("guidelines.16")}
              </div>
              <div style={{ marginTop: "6px", fontSize: "12px", color: "#4A4943" }}>
                {t("guidelines.17")}
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "16px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          <div style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {t("guidelines.18")}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", borderBottom: "0.5px solid #D8D6D0", paddingBottom: "10px" }}>
              <span style={{ fontSize: "44px", fontWeight: "900", lineHeight: "1" }}>
                {t("guidelines.19")}
              </span>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58" }}>
                {t("guidelines.20")}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px", borderBottom: "0.5px solid #D8D6D0", paddingBottom: "10px" }}>
              <span style={{ fontSize: "20px", fontWeight: "700" }}>
                {t("guidelines.21")}
              </span>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58" }}>
                {t("guidelines.22")}
              </span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px" }}>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "24px", fontWeight: "600" }}>
                {t("guidelines.23")}
              </span>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58" }}>
                {t("guidelines.24")}
              </span>
            </div>
          </div>
          <div style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", gap: "14px" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {t("guidelines.25")}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
              <span style={{ minHeight: "44px", display: "inline-flex", alignItems: "center", padding: "0 20px", borderRadius: "999px", background: "#1A1A1A", color: "#FFFFFF", fontWeight: "800", fontSize: "14px" }}>
                {t("guidelines.26")}
              </span>
              <span style={{ minHeight: "44px", display: "inline-flex", alignItems: "center", padding: "0 20px", borderRadius: "999px", border: "0.5px solid #1A1A1A", fontWeight: "800", fontSize: "14px" }}>
                {t("guidelines.27")}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#FF4D4D", color: "#FFFFFF", padding: "5px 12px", borderRadius: "999px", fontSize: "11px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "999px", background: "#FFFFFF" }} />
                {t("guidelines.28")}
              </span>
            </div>
            <div style={{ background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ width: "32px", height: "32px", borderRadius: "8px", background: "#FFE8EA", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#FF4D4D">
                  <path d="M13 2 L4 14h7l-1 8 9-12h-7z" />
                </svg>
              </span>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58", textTransform: "uppercase" }}>
                {t("guidelines.29")}
              </span>
              <span style={{ marginLeft: "auto", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "20px", fontWeight: "600" }}>
                {t("guidelines.30")}
              </span>
            </div>
            <div style={{ fontSize: "13px", color: "#4A4943", lineHeight: "1.6" }}>
              {t("guidelines.31")}
            </div>
          </div>
        </div>
      </section>
      {/* IA */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 32px 56px" }}>
        <div style={{ border: "1px solid #1A1A1A", borderRadius: "12px", padding: "32px", display: "flex", flexWrap: "wrap", gap: "32px" }}>
          <div style={{ flex: "1 1 300px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {t("ai.0")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "32px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("ai.1")}
            </h2>
            <p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("ai.2")}
            </p>
          </div>
          <div style={{ flex: "999 1 460px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
            <div style={{ background: "#F7F7F5", borderRadius: "12px", padding: "16px" }}>
              <div style={{ fontWeight: "900" }}>
                {t("ai.3")}
              </div>
              <div style={{ marginTop: "4px", fontSize: "13px", color: "#4A4943" }}>
                {t("ai.4")}
              </div>
            </div>
            <div style={{ background: "#F7F7F5", borderRadius: "12px", padding: "16px" }}>
              <div style={{ fontWeight: "900" }}>
                {t("ai.5")}
              </div>
              <div style={{ marginTop: "4px", fontSize: "13px", color: "#4A4943" }}>
                {t("ai.6")}
              </div>
            </div>
            <div style={{ background: "#F7F7F5", borderRadius: "12px", padding: "16px" }}>
              <div style={{ fontWeight: "900" }}>
                {t("ai.7")}
              </div>
              <div style={{ marginTop: "4px", fontSize: "13px", color: "#4A4943" }}>
                {t("ai.8")}
              </div>
            </div>
            <div style={{ background: "#F7F7F5", borderRadius: "12px", padding: "16px" }}>
              <div style={{ fontWeight: "900" }}>
                {t("ai.9")}
              </div>
              <div style={{ marginTop: "4px", fontSize: "13px", color: "#4A4943" }}>
                {t("ai.10")}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 02 LANDING */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("landing.0")}
              </span>
              {t("landing.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("landing.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("landing.3")}
            </p>
            <p style={{ margin: "12px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("landing.4")}
            </p>
            <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("landing.5")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("landing.6")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("landing.7")}
              </span>
            </div>
          </div>
          <div style={{ flex: "999 1 560px", minWidth: "0", background: "#F7F7F5", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "12px 16px", borderBottom: "0.5px solid #D8D6D0", background: "#FFFFFF" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#D8D6D0" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#D8D6D0" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#D8D6D0" }} />
              <span style={{ marginLeft: "12px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("landing.8")}
              </span>
            </div>
            <div style={{ padding: "40px 32px", display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#FF4D4D", color: "#FFFFFF", padding: "5px 12px", borderRadius: "999px", fontSize: "11px", fontWeight: "800", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "999px", background: "#FFFFFF" }} />
                  {t("landing.9")}
                </div>
                <div style={{ marginTop: "14px", fontSize: "40px", lineHeight: "1.05", fontWeight: "900", textTransform: "uppercase", letterSpacing: "-0.01em" }}>
                  {t("landing.10")}
                  <span style={{ background: "#FF4D4D", color: "#FFFFFF", padding: "0 10px", borderRadius: "8px" }}>
                    {t("landing.11")}
                  </span>
                  {t("landing.12")}
                  <br />
                  {t("landing.13")}
                </div>
                <div style={{ marginTop: "12px", fontSize: "16px", color: "#2F4858" }}>
                  {t("landing.14")}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
                <div style={{ background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "18px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "800", background: "#1A1A1A", color: "#FFFFFF", padding: "4px 10px", borderRadius: "999px" }}>
                    {t("landing.15")}
                  </span>
                  <div style={{ marginTop: "12px", fontSize: "14px", color: "#4A4943", lineHeight: "1.9", borderTop: "0.5px dashed #D8D6D0", paddingTop: "8px" }}>
                    {t("landing.16")}
                    <br />
                    {t("landing.17")}
                    <br />
                    {t("landing.18")}
                  </div>
                </div>
                <div style={{ background: "#FFFFFF", border: "0.5px solid #FF4D4D", borderRadius: "12px", padding: "18px" }}>
                  <span style={{ fontSize: "11px", fontWeight: "800", background: "#FF4D4D", color: "#FFFFFF", padding: "4px 10px", borderRadius: "999px" }}>
                    {t("landing.19")}
                  </span>
                  <div style={{ marginTop: "12px", fontSize: "14px", color: "#1A1A1A", lineHeight: "1.9", borderTop: "0.5px dashed #D8D6D0", paddingTop: "8px" }}>
                    {t("landing.20")}
                    <br />
                    {t("landing.21")}
                    <br />
                    {t("landing.22")}
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", border: "0.5px solid #D8D6D0", borderRadius: "12px", background: "#FFFFFF" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 18px", borderBottom: "0.5px solid #D8D6D0" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#FFE8EA", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C62828" strokeWidth="2.2">
                      <path d="M5 4l14 8-14 8z" />
                    </svg>
                  </span>
                  <span style={{ fontWeight: "800" }}>
                    {t("landing.23")}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 18px", borderBottom: "0.5px solid #D8D6D0", color: "#5F5E58" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#F1F0EC" }} />
                  <span style={{ fontWeight: "700" }}>
                    {t("landing.24")}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 18px", color: "#5F5E58" }}>
                  <span style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#F1F0EC" }} />
                  <span style={{ fontWeight: "700" }}>
                    {t("landing.25")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", background: "#0E0E10", borderRadius: "12px", padding: "24px" }}>
          <div style={{ flex: "1 1 260px", minWidth: "0", color: "#FFFFFF" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#BDBCB6", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {t("landing.26")}
            </div>
            <div style={{ marginTop: "8px", fontSize: "22px", fontWeight: "900", lineHeight: "1.2" }}>
              {t("landing.27")}
            </div>
            <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#D8D6D0" }}>
              {t("landing.28")}
            </p>
          </div>
          <Image src={img5} alt={t("landing.img0")} loading="lazy" style={{ flex: "999 1 460px", minWidth: "0", width: "100%", height: "auto", display: "block", borderRadius: "8px" }} />
        </div>
      </section>
      {/* 03 DASHBOARD */}
      <section id="produit" style={{ scrollMarginTop: "96px", maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("dashboard.0")}
              </span>
              {t("dashboard.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("dashboard.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("dashboard.3")}
            </p>
            <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("dashboard.4")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("dashboard.5")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("dashboard.6")}
              </span>
            </div>
          </div>
          <div style={{ flex: "999 1 560px", minWidth: "0", background: "#F7F7F5", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "24px", display: "flex", flexWrap: "wrap", gap: "16px" }}>
            <div style={{ flex: "999 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "8px" }}>
                <span style={{ fontSize: "20px", fontWeight: "900" }}>
                  {t("dashboard.7")}
                </span>
                <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#4A4943" }}>
                  {t("dashboard.8")}
                </span>
              </div>
              <div style={{ background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "22px" }}>
                <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {t("dashboard.9")}
                </div>
                <div style={{ marginTop: "8px", fontSize: "22px", fontWeight: "900" }}>
                  {t("dashboard.10")}
                </div>
                <div style={{ marginTop: "4px", fontSize: "13px", color: "#5F5E58" }}>
                  {t("dashboard.11")}
                </div>
                <div style={{ marginTop: "16px", height: "6px", borderRadius: "999px", background: "#EDECE7" }}>
                  <div style={{ width: "57%", height: "6px", borderRadius: "999px", background: "#1A1A1A" }} />
                </div>
                <div style={{ marginTop: "18px", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "48px", borderRadius: "999px", background: "#1A1A1A", color: "#FFFFFF", fontWeight: "800" }}>
                  {t("dashboard.12")}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: "6px", textAlign: "center" }}>
                <div>
                  <div style={{ height: "28px", borderRadius: "999px", background: "#1A1A1A" }} />
                  <div style={{ marginTop: "4px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "10px", color: "#5F5E58" }}>
                    {t("dashboard.13")}
                  </div>
                </div>
                <div>
                  <div style={{ height: "28px", borderRadius: "999px", background: "#1A1A1A" }} />
                  <div style={{ marginTop: "4px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "10px", color: "#5F5E58" }}>
                    {t("dashboard.14")}
                  </div>
                </div>
                <div>
                  <div style={{ height: "28px", borderRadius: "999px", background: "#1A1A1A" }} />
                  <div style={{ marginTop: "4px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "10px", color: "#5F5E58" }}>
                    {t("dashboard.15")}
                  </div>
                </div>
                <div>
                  <div style={{ height: "28px", borderRadius: "999px", background: "#FF4D4D" }} />
                  <div style={{ marginTop: "4px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "10px", color: "#C62828", fontWeight: "600" }}>
                    {t("dashboard.16")}
                  </div>
                </div>
                <div>
                  <div style={{ height: "28px", borderRadius: "999px", border: "0.5px solid #BDBCB6", boxSizing: "border-box" }} />
                  <div style={{ marginTop: "4px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "10px", color: "#5F5E58" }}>
                    {t("dashboard.17")}
                  </div>
                </div>
                <div>
                  <div style={{ height: "28px", borderRadius: "999px", border: "0.5px solid #BDBCB6", boxSizing: "border-box" }} />
                  <div style={{ marginTop: "4px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "10px", color: "#5F5E58" }}>
                    {t("dashboard.18")}
                  </div>
                </div>
                <div>
                  <div style={{ height: "28px", borderRadius: "999px", border: "0.5px solid #BDBCB6", boxSizing: "border-box" }} />
                  <div style={{ marginTop: "4px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "10px", color: "#5F5E58" }}>
                    {t("dashboard.19")}
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flex: "1 1 200px", minWidth: "0", background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "18px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px", borderBottom: "0.5px solid #D8D6D0", paddingBottom: "14px" }}>
                <div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#FF4D4D">
                    <path d="M13 2 L4 14h7l-1 8 9-12h-7z" />
                  </svg>
                  <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "22px", fontWeight: "600" }}>
                    {t("dashboard.20")}
                  </div>
                  <div style={{ fontSize: "12px", color: "#5F5E58" }}>
                    {t("dashboard.21")}
                  </div>
                </div>
                <div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3B7DD8" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3.5 2" />
                  </svg>
                  <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "22px", fontWeight: "600" }}>
                    {t("dashboard.22")}
                  </div>
                  <div style={{ fontSize: "12px", color: "#5F5E58" }}>
                    {t("dashboard.23")}
                  </div>
                </div>
              </div>
              <div style={{ fontSize: "12px", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.05em", color: "#5F5E58" }}>
                {t("dashboard.24")}
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span style={{ fontWeight: "700" }}>
                    {t("dashboard.25")}
                  </span>
                  <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace" }}>
                    {t("dashboard.26")}
                  </span>
                </div>
                <div style={{ marginTop: "6px", height: "4px", background: "#EDECE7", borderRadius: "999px" }}>
                  <div style={{ width: "57%", height: "4px", background: "#1A1A1A", borderRadius: "999px" }} />
                </div>
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px" }}>
                  <span style={{ fontWeight: "700" }}>
                    {t("dashboard.27")}
                  </span>
                  <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", color: "#1E7A3C" }}>
                    {t("dashboard.28")}
                  </span>
                </div>
                <div style={{ marginTop: "6px", height: "4px", background: "#2FA84F", borderRadius: "999px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 04 WALL OF FAME */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("wallOfFame.0")}
              </span>
              {t("wallOfFame.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("wallOfFame.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("wallOfFame.3")}
            </p>
            <p style={{ margin: "12px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("wallOfFame.4")}
            </p>
          </div>
          <div style={{ flex: "999 1 560px", minWidth: "0", background: "#F7F7F5", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "32px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "12px", alignItems: "end" }}>
              <div style={{ background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "18px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "13px", color: "#5F5E58" }}>
                  {t("wallOfFame.5")}
                </div>
                <div style={{ margin: "10px auto 0", width: "44px", height: "44px", borderRadius: "999px", background: "#75AFF3" }} />
                <div style={{ marginTop: "10px", fontWeight: "800" }}>
                  {t("wallOfFame.6")}
                </div>
                <span style={{ display: "inline-block", marginTop: "10px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#1E7A3C", background: "#EAF7EE", padding: "4px 10px", borderRadius: "999px" }}>
                  {t("wallOfFame.7")}
                </span>
              </div>
              <div style={{ background: "#FFFFFF", border: "1px solid #FF4D4D", borderRadius: "12px", padding: "26px 18px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "13px", color: "#C62828", fontWeight: "600" }}>
                  {t("wallOfFame.8")}
                </div>
                <div style={{ margin: "10px auto 0", width: "56px", height: "56px", borderRadius: "999px", background: "#FBB1A9" }} />
                <div style={{ marginTop: "10px", fontWeight: "900", fontSize: "17px" }}>
                  {t("wallOfFame.9")}
                </div>
                <span style={{ display: "inline-block", marginTop: "10px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#1E7A3C", background: "#EAF7EE", padding: "4px 10px", borderRadius: "999px" }}>
                  {t("wallOfFame.10")}
                </span>
              </div>
              <div style={{ background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "18px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "13px", color: "#5F5E58" }}>
                  {t("wallOfFame.11")}
                </div>
                <div style={{ margin: "10px auto 0", width: "44px", height: "44px", borderRadius: "999px", background: "#2F4858" }} />
                <div style={{ marginTop: "10px", fontWeight: "800" }}>
                  {t("wallOfFame.12")}
                </div>
                <span style={{ display: "inline-block", marginTop: "10px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#1E7A3C", background: "#EAF7EE", padding: "4px 10px", borderRadius: "999px" }}>
                  {t("wallOfFame.13")}
                </span>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "14px", color: "#4A4943" }}>
                {t("wallOfFame.14")}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", background: "#1A1A1A", color: "#FFFFFF", fontWeight: "800", fontSize: "14px" }}>
                {t("wallOfFame.15")}
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* 05 COMMUNAUTE */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("community.0")}
              </span>
              {t("community.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("community.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("community.3")}
            </p>
            <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("community.4")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("community.5")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("community.6")}
              </span>
            </div>
          </div>
          <div style={{ flex: "999 1 560px", minWidth: "0", background: "#F7F7F5", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "24px", display: "flex", flexWrap: "wrap", gap: "16px", position: "relative" }}>
            <div style={{ flex: "1 1 180px", minWidth: "0", background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "14px" }}>
              <div style={{ fontWeight: "900", paddingBottom: "8px", borderBottom: "0.5px solid #D8D6D0" }}>
                {t("community.7")}
              </div>
              <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "10px", color: "#5F5E58", textTransform: "uppercase", marginTop: "6px" }}>
                {t("community.8")}
              </div>
              <div style={{ padding: "6px 10px", borderRadius: "8px", background: "#FFE8EA", color: "#C62828", fontWeight: "800" }}>
                {t("community.9")}
              </div>
              <div style={{ padding: "6px 10px" }}>
                {t("community.10")}
              </div>
              <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "10px", color: "#5F5E58", textTransform: "uppercase", marginTop: "6px" }}>
                {t("community.11")}
              </div>
              <div style={{ padding: "6px 10px" }}>
                {t("community.12")}
              </div>
              <div style={{ padding: "6px 10px", color: "#5F5E58", display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                {t("community.13")}
              </div>
            </div>
            <div style={{ flex: "999 1 280px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "16px" }}>
                <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "10px", color: "#5F5E58", textTransform: "uppercase" }}>
                  {t("community.14")}
                </div>
                <div style={{ marginTop: "6px", fontWeight: "800" }}>
                  {t("community.15")}
                </div>
                <div style={{ marginTop: "4px", fontSize: "13px", color: "#4A4943" }}>
                  {t("community.16")}
                </div>
              </div>
              <div style={{ background: "#FFFFFF", border: "1px solid #1A1A1A", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#FFF4DA", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8A6414" strokeWidth="2">
                    <rect x="5" y="11" width="14" height="10" rx="2" />
                    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                  </svg>
                </div>
                <div style={{ fontWeight: "900", fontSize: "17px" }}>
                  {t("community.17")}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "13px" }}>
                  <span>
                    {t("community.18")}
                  </span>
                  <span>
                    {t("community.19")}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "13px", color: "#5F5E58" }}>
                  <span>
                    {t("community.20")}
                  </span>
                  <span>
                    {t("community.21")}
                  </span>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "44px", borderRadius: "999px", background: "#E3B450", color: "#1A1A1A", fontWeight: "800" }}>
                  {t("community.22")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 06 PRICING */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("pricing.0")}
              </span>
              {t("pricing.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("pricing.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("pricing.3")}
            </p>
            <p style={{ margin: "12px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("pricing.4")}
            </p>
            <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("pricing.5")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("pricing.6")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", background: "#1A1A1A", color: "#FFFFFF", borderRadius: "999px" }}>
                {t("pricing.7")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("pricing.8")}
              </span>
            </div>
          </div>
          <figure style={{ flex: "999 1 560px", minWidth: "0", margin: "0", background: "#0E0E10", borderRadius: "12px", overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <Image src={img6} alt={t("pricing.img0")} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
            <figcaption style={{ padding: "12px 16px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#BDBCB6" }}>
              {t("pricing.9")}
            </figcaption>
          </figure>
        </div>
      </section>
      {/* 07 MAKER PROJECTS */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("maker.0")}
              </span>
              {t("maker.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("maker.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("maker.3")}
            </p>
            <p style={{ margin: "12px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("maker.4")}
            </p>
          </div>
          <figure style={{ flex: "999 1 560px", minWidth: "0", margin: "0", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", background: "#FFFFFF", display: "flex", flexDirection: "column" }}>
            <Image src={img7} alt={t("maker.img0")} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
            <figcaption style={{ padding: "12px 16px", borderTop: "0.5px solid #D8D6D0", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
              {t("maker.5")}
            </figcaption>
          </figure>
        </div>
      </section>
      {/* 08 AFFILIATION */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("affiliates.0")}
              </span>
              {t("affiliates.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("affiliates.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("affiliates.3")}
            </p>
            <p style={{ margin: "12px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("affiliates.4")}
            </p>
          </div>
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
            <figure style={{ margin: "0", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", background: "#F7F7F5", display: "flex", flexDirection: "column" }}>
              <Image src={img8} alt={t("affiliates.img0")} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
              <figcaption style={{ padding: "10px 14px", borderTop: "0.5px solid #D8D6D0", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("affiliates.5")}
              </figcaption>
            </figure>
            <figure style={{ margin: "0", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", background: "#F7F7F5", display: "flex", flexDirection: "column" }}>
              <Image src={img9} alt={t("affiliates.img1")} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
              <figcaption style={{ padding: "10px 14px", borderTop: "0.5px solid #D8D6D0", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("affiliates.6")}
              </figcaption>
            </figure>
            <figure style={{ margin: "0", gridColumn: "1 / -1", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", background: "#FFFFFF", display: "flex", flexDirection: "column" }}>
              <Image src={img10} alt={t("affiliates.img2")} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
              <figcaption style={{ padding: "10px 14px", borderTop: "0.5px solid #D8D6D0", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("affiliates.7")}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* 08.1 MONETISATION */}
      <section id="marques" style={{ scrollMarginTop: "96px", maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("monetization.0")}
              </span>
              {t("monetization.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("monetization.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("monetization.3")}
            </p>
            <p style={{ margin: "12px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("monetization.4")}
            </p>
            <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("monetization.5")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("monetization.6")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("monetization.7")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("monetization.8")}
              </span>
            </div>
          </div>
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
            <figure style={{ margin: "0", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", background: "#FFFFFF", display: "flex", flexDirection: "column" }}>
              <Image src={img11} alt={t("monetization.img0")} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
              <figcaption style={{ padding: "10px 14px", borderTop: "0.5px solid #D8D6D0", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("monetization.9")}
              </figcaption>
            </figure>
            <figure style={{ margin: "0", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", background: "#FFFFFF", display: "flex", flexDirection: "column" }}>
              <Image src={img12} alt={t("monetization.img1")} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
              <figcaption style={{ padding: "10px 14px", borderTop: "0.5px solid #D8D6D0", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("monetization.10")}
              </figcaption>
            </figure>
            <figure style={{ margin: "0", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", background: "#FFFFFF", display: "flex", flexDirection: "column" }}>
              <Image src={img13} alt={t("monetization.img2")} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
              <figcaption style={{ padding: "10px 14px", borderTop: "0.5px solid #D8D6D0", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("monetization.11")}
              </figcaption>
            </figure>
            <figure style={{ margin: "0", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", background: "#FFFFFF", display: "flex", flexDirection: "column" }}>
              <Image src={img14} alt={t("monetization.img3")} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
              <figcaption style={{ padding: "10px 14px", borderTop: "0.5px solid #D8D6D0", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("monetization.12")}
              </figcaption>
            </figure>
            <figure style={{ margin: "0", gridColumn: "1 / -1", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", background: "#FFFFFF", display: "flex", flexDirection: "column" }}>
              <Image src={img15} alt={t("monetization.img4")} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
              <figcaption style={{ padding: "10px 14px", borderTop: "0.5px solid #D8D6D0", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("monetization.13")}
              </figcaption>
            </figure>
            <figure style={{ margin: "0", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", background: "#FFFFFF", display: "flex", flexDirection: "column" }}>
              <Image src={img16} alt={t("monetization.img5")} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
              <figcaption style={{ padding: "10px 14px", borderTop: "0.5px solid #D8D6D0", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("monetization.14")}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* 09 DEMOS */}
      <section id="demos" style={{ scrollMarginTop: "96px", maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("demos.0")}
              </span>
              {t("demos.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("demos.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("demos.3")}
            </p>
          </div>
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
            <a href="https://claude.ai/artifact/EYaqodm7oEi9GrbzsxMBHx" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1A1A1A", background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ height: "110px", borderRadius: "8px", background: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M7 4l13 8-13 8z" />
                </svg>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontWeight: "900", fontSize: "17px" }}>
                  {t("demos.4")}
                </span>
                <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                  {t("demos.5")}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "4px" }}>
                <span style={{ height: "6px", borderRadius: "999px", background: "#1A1A1A" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
              </div>
            </a>
            <a href="https://claude.ai/artifact/C4g395SaGktYSaiDvEMJsc" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1A1A1A", background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ height: "110px", borderRadius: "8px", background: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M7 4l13 8-13 8z" />
                </svg>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontWeight: "900", fontSize: "17px" }}>
                  {t("demos.6")}
                </span>
                <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                  {t("demos.7")}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: "4px" }}>
                <span style={{ height: "6px", borderRadius: "999px", background: "#1A1A1A" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
              </div>
            </a>
            <a href="https://claude.ai/artifact/9icEjcs38k2vJUs59rBSiW" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1A1A1A", background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ height: "110px", borderRadius: "8px", background: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M7 4l13 8-13 8z" />
                </svg>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontWeight: "900", fontSize: "17px" }}>
                  {t("demos.8")}
                </span>
                <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                  {t("demos.9")}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: "4px" }}>
                <span style={{ height: "6px", borderRadius: "999px", background: "#1A1A1A" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
              </div>
            </a>
            <a href="https://claude.ai/artifact/RNyeJshNNRMLRjJ4mcjWHj" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1A1A1A", background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div style={{ height: "110px", borderRadius: "8px", background: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF">
                  <path d="M7 4l13 8-13 8z" />
                </svg>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontWeight: "900", fontSize: "17px" }}>
                  {t("demos.10")}
                </span>
                <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                  {t("demos.11")}
                </span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "4px" }}>
                <span style={{ height: "6px", borderRadius: "999px", background: "#1A1A1A" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
                <span style={{ height: "6px", borderRadius: "999px", background: "#D8D6D0" }} />
              </div>
            </a>
          </div>
        </div>
        <figure style={{ margin: "32px 0 0", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden", background: "#FFFFFF" }}>
          <Image src={img17} alt={t("demos.img0")} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
          <figcaption style={{ padding: "12px 16px", borderTop: "0.5px solid #D8D6D0", fontSize: "14px", lineHeight: "1.5", color: "#4A4943" }}>
            <b style={{ color: "#1A1A1A" }}>
              {t("demos.12")}
            </b>
            {t("demos.13")}
          </figcaption>
        </figure>
      </section>
      {/* 10 ZIP */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("zip.0")}
              </span>
              {t("zip.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("zip.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("zip.3")}
            </p>
            <a href="https://claude.ai/artifact/MvU9zrUFb8DW88ejrXCsiA" target="_blank" rel="noopener noreferrer" style={{ marginTop: "20px", display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "0.5px solid #1A1A1A", fontWeight: "800", fontSize: "14px", textDecoration: "none" }}>
              {t("zip.4")}
            </a>
          </div>
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "28px", display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-around", gap: "24px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <svg width="180" height="192" viewBox="0 0 300 320" role="img" aria-label="Zip qui salue">
                  <ellipse cx="150" cy="304" rx="92" ry="10" fill="#000000" opacity="0.08" />
                  <path d="M162 18 L118 92 L146 92 L130 138 L188 66 L158 66 L176 18 Z" fill="#FF4D4D" stroke="#FF4D4D" strokeWidth="12" strokeLinejoin="round" />
                  <ellipse cx="116" cy="290" rx="30" ry="15" fill="#FF4D4D" />
                  <ellipse cx="184" cy="290" rx="30" ry="15" fill="#FF4D4D" />
                  <ellipse cx="150" cy="192" rx="108" ry="102" fill="#FF4D4D" />
                  <ellipse cx="150" cy="252" rx="62" ry="36" fill="#FFE8EA" opacity="0.6" />
                  <ellipse cx="108" cy="132" rx="42" ry="24" fill="#FFFFFF" opacity="0.28" transform="rotate(-25 108 132)" />
                  <ellipse cx="88" cy="214" rx="17" ry="10" fill="#FBB1A9" />
                  <ellipse cx="212" cy="214" rx="17" ry="10" fill="#FBB1A9" />
                  <ellipse cx="116" cy="180" rx="21" ry="27" fill="#16232B" />
                  <ellipse cx="184" cy="180" rx="21" ry="27" fill="#16232B" />
                  <ellipse cx="116" cy="191" rx="13" ry="11" fill="#75AFF3" opacity="0.6" />
                  <ellipse cx="184" cy="191" rx="13" ry="11" fill="#75AFF3" opacity="0.6" />
                  <circle cx="124" cy="169" r="7" fill="#FFFFFF" />
                  <circle cx="192" cy="169" r="7" fill="#FFFFFF" />
                  <circle cx="110" cy="192" r="3" fill="#FFFFFF" />
                  <circle cx="178" cy="192" r="3" fill="#FFFFFF" />
                  <path d="M137 220 Q150 233 163 220" fill="none" stroke="#16232B" strokeWidth="5" strokeLinecap="round" />
                  <ellipse cx="44" cy="228" rx="18" ry="28" fill="#FF4D4D" transform="rotate(25 44 228)" />
                  <ellipse cx="262" cy="150" rx="18" ry="30" fill="#FF4D4D" transform="rotate(-30 262 150)" />
                </svg>
                <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                  {t("zip.5")}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <svg width="180" height="192" viewBox="0 0 300 320" role="img" aria-label="Zip qui fête un jour terminé">
                  <ellipse cx="150" cy="304" rx="92" ry="10" fill="#000000" opacity="0.08" />
                  <circle cx="154" cy="58" r="54" fill="#75AFF3" opacity="0.22" />
                  <path d="M162 18 L118 92 L146 92 L130 138 L188 66 L158 66 L176 18 Z" fill="#FFFFFF" stroke="#FFFFFF" strokeWidth="12" strokeLinejoin="round" />
                  <path d="M162 18 L118 92 L146 92 L130 138 L188 66 L158 66 L176 18 Z" fill="none" stroke="#75AFF3" strokeWidth="3" strokeLinejoin="round" />
                  <ellipse cx="116" cy="290" rx="30" ry="15" fill="#FF4D4D" />
                  <ellipse cx="184" cy="290" rx="30" ry="15" fill="#FF4D4D" />
                  <ellipse cx="150" cy="192" rx="108" ry="102" fill="#FF4D4D" />
                  <ellipse cx="150" cy="252" rx="62" ry="36" fill="#FFE8EA" opacity="0.6" />
                  <ellipse cx="108" cy="132" rx="42" ry="24" fill="#FFFFFF" opacity="0.28" transform="rotate(-25 108 132)" />
                  <ellipse cx="86" cy="208" rx="18" ry="11" fill="#FBB1A9" />
                  <ellipse cx="214" cy="208" rx="18" ry="11" fill="#FBB1A9" />
                  <path d="M97 184 Q116 162 135 184" fill="none" stroke="#16232B" strokeWidth="6" strokeLinecap="round" />
                  <path d="M165 184 Q184 162 203 184" fill="none" stroke="#16232B" strokeWidth="6" strokeLinecap="round" />
                  <path d="M128 210 Q150 248 172 210 Z" fill="#16232B" />
                  <ellipse cx="150" cy="224" rx="10" ry="5" fill="#FF8A8A" />
                  <ellipse cx="60" cy="120" rx="17" ry="30" fill="#FF4D4D" transform="rotate(-35 60 120)" />
                  <ellipse cx="240" cy="120" rx="17" ry="30" fill="#FF4D4D" transform="rotate(35 240 120)" />
                </svg>
                <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                  {t("zip.6")}
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" }}>
                <svg width="90" height="96" viewBox="0 0 300 320" role="img" aria-label="Silhouette de Zip">
                  <path d="M162 18 L118 92 L146 92 L130 138 L188 66 L158 66 L176 18 Z" fill="#1A1A1A" stroke="#1A1A1A" strokeWidth="12" strokeLinejoin="round" />
                  <ellipse cx="116" cy="290" rx="30" ry="15" fill="#1A1A1A" />
                  <ellipse cx="184" cy="290" rx="30" ry="15" fill="#1A1A1A" />
                  <ellipse cx="150" cy="192" rx="108" ry="102" fill="#1A1A1A" />
                  <ellipse cx="44" cy="228" rx="18" ry="28" fill="#1A1A1A" transform="rotate(25 44 228)" />
                  <ellipse cx="262" cy="150" rx="18" ry="30" fill="#1A1A1A" transform="rotate(-30 262 150)" />
                </svg>
                <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                  {t("zip.7")}
                </span>
              </div>
            </div>
            <div style={{ background: "#F7F7F5", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "20px 24px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px" }}>
              <div style={{ flex: "1 1 200px", minWidth: "0" }}>
                <div style={{ fontWeight: "900", fontSize: "17px" }}>
                  {t("zip.8")}
                </div>
                <div style={{ marginTop: "4px", fontSize: "14px", color: "#4A4943", lineHeight: "1.5" }}>
                  {t("zip.9")}
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                  <svg width="64" height="68" viewBox="0 0 300 320" role="img" aria-label="Avatar Nova">
                    <path d="M40 190 Q40 70 150 66 Q260 70 260 190" fill="none" stroke="#16232B" strokeWidth="12" strokeLinecap="round" />
                    <path d="M162 18 L118 92 L146 92 L130 138 L188 66 L158 66 L176 18 Z" fill="#75AFF3" stroke="#75AFF3" strokeWidth="12" strokeLinejoin="round" />
                    <ellipse cx="116" cy="290" rx="30" ry="15" fill="#75AFF3" />
                    <ellipse cx="184" cy="290" rx="30" ry="15" fill="#75AFF3" />
                    <ellipse cx="150" cy="192" rx="108" ry="102" fill="#75AFF3" />
                    <ellipse cx="88" cy="214" rx="17" ry="10" fill="#FBB1A9" />
                    <ellipse cx="212" cy="214" rx="17" ry="10" fill="#FBB1A9" />
                    <ellipse cx="116" cy="180" rx="21" ry="27" fill="#16232B" />
                    <ellipse cx="184" cy="180" rx="21" ry="27" fill="#16232B" />
                    <circle cx="124" cy="169" r="7" fill="#FFFFFF" />
                    <circle cx="192" cy="169" r="7" fill="#FFFFFF" />
                    <path d="M137 220 Q150 233 163 220" fill="none" stroke="#16232B" strokeWidth="5" strokeLinecap="round" />
                    <rect x="22" y="160" width="34" height="56" rx="14" fill="#16232B" />
                    <rect x="244" y="160" width="34" height="56" rx="14" fill="#16232B" />
                  </svg>
                  <span style={{ fontSize: "12px", fontWeight: "800" }}>
                    {t("zip.10")}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                  <svg width="64" height="68" viewBox="0 0 300 320" role="img" aria-label="Avatar Pixel">
                    <path d="M162 18 L118 92 L146 92 L130 138 L188 66 L158 66 L176 18 Z" fill="#6FD3B0" stroke="#6FD3B0" strokeWidth="12" strokeLinejoin="round" />
                    <ellipse cx="116" cy="290" rx="30" ry="15" fill="#6FD3B0" />
                    <ellipse cx="184" cy="290" rx="30" ry="15" fill="#6FD3B0" />
                    <ellipse cx="150" cy="192" rx="108" ry="102" fill="#6FD3B0" />
                    <ellipse cx="88" cy="214" rx="17" ry="10" fill="#FBB1A9" />
                    <ellipse cx="212" cy="214" rx="17" ry="10" fill="#FBB1A9" />
                    <ellipse cx="116" cy="180" rx="21" ry="27" fill="#16232B" />
                    <circle cx="124" cy="169" r="7" fill="#FFFFFF" />
                    <path d="M165 184 Q184 166 203 184" fill="none" stroke="#16232B" strokeWidth="6" strokeLinecap="round" />
                    <path d="M137 218 Q150 232 163 218" fill="none" stroke="#16232B" strokeWidth="5" strokeLinecap="round" />
                    <circle cx="116" cy="180" r="33" fill="none" stroke="#16232B" strokeWidth="6" />
                    <circle cx="184" cy="180" r="33" fill="none" stroke="#16232B" strokeWidth="6" />
                  </svg>
                  <span style={{ fontSize: "12px", fontWeight: "800" }}>
                    {t("zip.11")}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                  <svg width="64" height="68" viewBox="0 0 300 320" role="img" aria-label="Avatar Mochi">
                    <path d="M162 18 L118 92 L146 92 L130 138 L188 66 L158 66 L176 18 Z" fill="#B8A3F2" stroke="#B8A3F2" strokeWidth="12" strokeLinejoin="round" />
                    <ellipse cx="116" cy="290" rx="30" ry="15" fill="#B8A3F2" />
                    <ellipse cx="184" cy="290" rx="30" ry="15" fill="#B8A3F2" />
                    <ellipse cx="150" cy="192" rx="108" ry="102" fill="#B8A3F2" />
                    <ellipse cx="88" cy="214" rx="17" ry="10" fill="#FBB1A9" />
                    <ellipse cx="212" cy="214" rx="17" ry="10" fill="#FBB1A9" />
                    <path d="M97 184 Q116 162 135 184" fill="none" stroke="#16232B" strokeWidth="6" strokeLinecap="round" />
                    <path d="M165 184 Q184 162 203 184" fill="none" stroke="#16232B" strokeWidth="6" strokeLinecap="round" />
                    <path d="M128 210 Q150 248 172 210 Z" fill="#16232B" />
                    <path d="M60 96 L96 112 L60 130 Z" fill="#FF7AA2" />
                    <path d="M132 96 L96 112 L132 130 Z" fill="#FF7AA2" />
                    <circle cx="96" cy="113" r="9" fill="#E85D8A" />
                  </svg>
                  <span style={{ fontSize: "12px", fontWeight: "800" }}>
                    {t("zip.12")}
                  </span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                  <svg width="64" height="68" viewBox="0 0 300 320" role="img" aria-label="Avatar Bao">
                    <path d="M162 18 L118 92 L146 92 L130 138 L188 66 L158 66 L176 18 Z" fill="#FBB1A9" stroke="#FBB1A9" strokeWidth="12" strokeLinejoin="round" />
                    <ellipse cx="116" cy="290" rx="30" ry="15" fill="#FBB1A9" />
                    <ellipse cx="184" cy="290" rx="30" ry="15" fill="#FBB1A9" />
                    <ellipse cx="150" cy="192" rx="108" ry="102" fill="#FBB1A9" />
                    <path d="M58 140 Q66 62 150 58 Q234 62 242 140 Z" fill="#2F4858" />
                    <rect x="52" y="126" width="196" height="26" rx="13" fill="#3E6A80" />
                    <ellipse cx="116" cy="180" rx="21" ry="27" fill="#16232B" />
                    <ellipse cx="184" cy="180" rx="21" ry="27" fill="#16232B" />
                    <circle cx="124" cy="169" r="7" fill="#FFFFFF" />
                    <circle cx="192" cy="169" r="7" fill="#FFFFFF" />
                    <path d="M136 218 q7 9 14 0 q7 9 14 0" fill="none" stroke="#16232B" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                  <span style={{ fontSize: "12px", fontWeight: "800" }}>
                    {t("zip.13")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 10.1 ZIP VS THE BRAINROT */}
      <section id="jeu" style={{ scrollMarginTop: "96px", maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("game.0")}
              </span>
              {t("game.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("game.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("game.3")}
            </p>
            <p style={{ margin: "12px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("game.4")}
            </p>
            <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <a href="https://www.astrocade.com/games/zip-vs-the-brainrot/01M4BBVE5HTMCFA8DZXY4F21A4" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", background: "#1A1A1A", color: "#FFFFFF", fontWeight: "800", fontSize: "14px", textDecoration: "none" }}>
                {t("game.5")}
              </a>
              <span style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 16px", borderRadius: "999px", border: "0.5px solid #D8D6D0", fontSize: "13px", fontWeight: "700" }}>
                {t("game.6")}
              </span>
            </div>
          </div>
          <div style={{ flex: "999 1 560px", minWidth: "0", background: "#F7F7F5", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "12px 16px", borderBottom: "0.5px solid #D8D6D0", background: "#FFFFFF" }}>
              <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#D8D6D0" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#D8D6D0" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "999px", background: "#D8D6D0" }} />
              <span style={{ marginLeft: "12px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("game.7")}
              </span>
            </div>
            <div style={{ padding: "28px", display: "flex", justifyContent: "center" }}>
              <Image src={img18} alt={t("game.img0")} loading="lazy" style={{ width: "100%", maxWidth: "560px", height: "auto", display: "block", borderRadius: "12px" }} />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", background: "#F7F7F5", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "24px" }}>
          <div style={{ flex: "1 1 260px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {t("game.8")}
            </div>
            <div style={{ marginTop: "8px", fontSize: "22px", fontWeight: "900", lineHeight: "1.2" }}>
              {t("game.9")}
            </div>
            <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("game.10")}
            </p>
          </div>
          <Image src={img19} alt={t("game.img1")} loading="lazy" style={{ flex: "999 1 460px", minWidth: "0", width: "100%", height: "auto", display: "block", borderRadius: "8px", border: "0.5px solid #D8D6D0" }} />
        </div>
        <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "center", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "24px" }}>
          <div style={{ flex: "1 1 260px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              {t("game.11")}
            </div>
            <div style={{ marginTop: "8px", fontSize: "22px", fontWeight: "900", lineHeight: "1.2" }}>
              {t("game.12")}
            </div>
            <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("game.13")}
            </p>
          </div>
          <Image src={img20} alt={t("game.img2")} loading="lazy" style={{ flex: "999 1 460px", minWidth: "0", width: "100%", height: "auto", display: "block", borderRadius: "8px", border: "0.5px solid #D8D6D0" }} />
        </div>
      </section>
      {/* 10.2 LA BANDE DE ZIP */}
      <section id="bande" style={{ scrollMarginTop: "96px", maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px" }}>
          <div style={{ flex: "1 1 420px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("gang.0")}
              </span>
              {t("gang.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("gang.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943", maxWidth: "660px" }}>
              {t("gang.3")}
            </p>
          </div>
          <a href="https://claude.ai/artifact/QhsF8t8eozWDkjNtMs3v9s" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", border: "0.5px solid #1A1A1A", fontWeight: "800", fontSize: "14px", textDecoration: "none" }}>
            {t("gang.4")}
          </a>
        </div>
        <div style={{ marginTop: "28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          <div style={{ background: "#FFE8EA", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Image src={img2} alt={t("gang.img0")} loading="lazy" style={{ width: "120px", height: "128px", objectFit: "contain" }} />
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "22px", fontWeight: "900" }}>
                {t("gang.5")}
              </span>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("gang.6")}
              </span>
            </div>
            <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#2F2E2A" }}>
              {t("gang.7")}
            </div>
          </div>
          <div style={{ background: "#F7F7F5", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Image src={img21} alt={t("gang.img1")} loading="lazy" style={{ width: "120px", height: "128px", objectFit: "contain" }} />
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "22px", fontWeight: "900" }}>
                {t("gang.8")}
              </span>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("gang.9")}
              </span>
            </div>
            <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#2F2E2A" }}>
              {t("gang.10")}
            </div>
          </div>
          <div style={{ background: "#F7F7F5", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Image src={img4} alt={t("gang.img2")} loading="lazy" style={{ width: "120px", height: "128px", objectFit: "contain" }} />
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "22px", fontWeight: "900" }}>
                {t("gang.11")}
              </span>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("gang.12")}
              </span>
            </div>
            <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#2F2E2A" }}>
              {t("gang.13")}
            </div>
          </div>
          <div style={{ background: "#F7F7F5", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Image src={img22} alt={t("gang.img3")} loading="lazy" style={{ width: "120px", height: "128px", objectFit: "contain" }} />
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "22px", fontWeight: "900" }}>
                {t("gang.14")}
              </span>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("gang.15")}
              </span>
            </div>
            <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#2F2E2A" }}>
              {t("gang.16")}
            </div>
          </div>
          <div style={{ background: "#F7F7F5", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Image src={img23} alt={t("gang.img4")} loading="lazy" style={{ width: "120px", height: "128px", objectFit: "contain" }} />
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "22px", fontWeight: "900" }}>
                {t("gang.17")}
              </span>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("gang.18")}
              </span>
            </div>
            <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#2F2E2A" }}>
              {t("gang.19")}
            </div>
          </div>
          <div style={{ background: "#F7F7F5", borderRadius: "12px", padding: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <Image src={img24} alt={t("gang.img5")} loading="lazy" style={{ width: "120px", height: "128px", objectFit: "contain" }} />
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "22px", fontWeight: "900" }}>
                {t("gang.20")}
              </span>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58" }}>
                {t("gang.21")}
              </span>
            </div>
            <div style={{ fontSize: "14px", lineHeight: "1.5", color: "#2F2E2A" }}>
              {t("gang.22")}
            </div>
          </div>
        </div>
        <div style={{ marginTop: "12px", background: "#F1ECFC", borderRadius: "12px", padding: "24px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "28px" }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-end" }}>
            <Image src={img3} alt={t("gang.img6")} loading="lazy" style={{ width: "130px", height: "139px", objectFit: "contain" }} />
            <Image src={img25} alt={t("gang.img7")} loading="lazy" style={{ width: "130px", height: "139px", objectFit: "contain" }} />
          </div>
          <div style={{ flex: "1 1 280px", minWidth: "0" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "26px", fontWeight: "900" }}>
                {t("gang.23")}
              </span>
              <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#4A3F6B" }}>
                {t("gang.24")}
              </span>
            </div>
            <p style={{ margin: "10px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#2F2E2A" }}>
              {t("gang.25")}
            </p>
            <p style={{ margin: "8px 0 0", fontSize: "15px", lineHeight: "1.6", color: "#2F2E2A" }}>
              {t("gang.26")}
            </p>
          </div>
        </div>
        <div style={{ marginTop: "12px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "12px" }}>
          <div style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "18px" }}>
            <div style={{ fontWeight: "900" }}>
              {t("gang.27")}
            </div>
            <div style={{ marginTop: "4px", fontSize: "14px", color: "#4A4943", lineHeight: "1.5" }}>
              {t("gang.28")}
            </div>
          </div>
          <div style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "18px" }}>
            <div style={{ fontWeight: "900" }}>
              {t("gang.29")}
            </div>
            <div style={{ marginTop: "4px", fontSize: "14px", color: "#4A4943", lineHeight: "1.5" }}>
              {t("gang.30")}
            </div>
          </div>
          <div style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "18px" }}>
            <div style={{ fontWeight: "900" }}>
              {t("gang.31")}
            </div>
            <div style={{ marginTop: "4px", fontSize: "14px", color: "#4A4943", lineHeight: "1.5" }}>
              {t("gang.32")}
            </div>
          </div>
          <div style={{ border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "18px" }}>
            <div style={{ fontWeight: "900" }}>
              {t("gang.33")}
            </div>
            <div style={{ marginTop: "4px", fontSize: "14px", color: "#4A4943", lineHeight: "1.5" }}>
              {t("gang.34")}
            </div>
          </div>
        </div>
      </section>
      {/* 10.3 ZIP SUR LES RESEAUX */}
      <section id="reseaux" style={{ scrollMarginTop: "96px", maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 340px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("tiktok.0")}
              </span>
              {t("tiktok.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("tiktok.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("tiktok.3")}
            </p>
            <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", borderTop: "0.5px solid #D8D6D0" }}>
              <div style={{ padding: "14px 0", borderBottom: "0.5px solid #D8D6D0" }}>
                <div style={{ fontWeight: "900" }}>
                  {t("tiktok.4")}
                </div>
                <div style={{ marginTop: "4px", fontSize: "14px", color: "#4A4943", lineHeight: "1.5" }}>
                  {t("tiktok.5")}
                </div>
              </div>
              <div style={{ padding: "14px 0", borderBottom: "0.5px solid #D8D6D0" }}>
                <div style={{ fontWeight: "900" }}>
                  {t("tiktok.6")}
                </div>
                <div style={{ marginTop: "4px", fontSize: "14px", color: "#4A4943", lineHeight: "1.5" }}>
                  {t("tiktok.7")}
                </div>
              </div>
              <div style={{ padding: "14px 0", borderBottom: "0.5px solid #D8D6D0" }}>
                <div style={{ fontWeight: "900" }}>
                  {t("tiktok.8")}
                </div>
                <div style={{ marginTop: "4px", fontSize: "14px", color: "#4A4943", lineHeight: "1.5" }}>
                  {t("tiktok.9")}
                </div>
              </div>
            </div>
            <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("tiktok.10")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("tiktok.11")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("tiktok.12")}
              </span>
              <span style={{ fontSize: "13px", fontWeight: "700", padding: "6px 12px", border: "0.5px solid #D8D6D0", borderRadius: "999px" }}>
                {t("tiktok.13")}
              </span>
            </div>
            <div style={{ marginTop: "24px", fontSize: "22px", fontWeight: "900", lineHeight: "1.2" }}>
              {t("tiktok.14")}
              <br />
              {t("tiktok.15")}
              <span style={{ color: "#C62828" }}>
                {t("tiktok.16")}
              </span>
            </div>
            <div style={{ marginTop: "6px", fontSize: "13px", color: "#5F5E58" }}>
              {t("tiktok.17")}
            </div>
          </div>
          <div style={{ flex: "999 1 560px", minWidth: "0", background: "#F7F7F5", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "28px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "20px", alignItems: "start" }}>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
              <Image src={img26} alt={t("tiktok.img0")} loading="lazy" style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px" }} />
              <figcaption style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("tiktok.18")}
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
              <Image src={img27} alt={t("tiktok.img1")} loading="lazy" style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px" }} />
              <figcaption style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("tiktok.19")}
              </figcaption>
            </figure>
            <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
              <Image src={img28} alt={t("tiktok.img2")} loading="lazy" style={{ width: "100%", height: "auto", display: "block", borderRadius: "12px" }} />
              <figcaption style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("tiktok.20")}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* 11 RESSOURCES */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "56px 32px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("resources.0")}
              </span>
              {t("resources.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("resources.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("resources.3")}
            </p>
          </div>
          <div style={{ flex: "999 1 560px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "12px" }}>
            <div style={{ background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ height: "120px", background: "#F7F7F5", padding: "16px", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ height: "8px", width: "70%", background: "#2F4858", borderRadius: "2px" }} />
                <span style={{ height: "5px", width: "90%", background: "#D8D6D0", borderRadius: "2px" }} />
                <span style={{ height: "5px", width: "80%", background: "#D8D6D0", borderRadius: "2px" }} />
                <span style={{ height: "5px", width: "85%", background: "#D8D6D0", borderRadius: "2px" }} />
                <span style={{ marginTop: "auto", height: "4px", width: "100%", background: "#FF4D4D" }} />
              </div>
              <div style={{ padding: "12px 14px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("resources.4")}
              </div>
            </div>
            <div style={{ background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ height: "120px", background: "#F7F7F5", padding: "16px", boxSizing: "border-box", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px" }}>
                <span style={{ width: "34px", height: "24px", border: "1px solid #3B7DD8", borderRadius: "6px" }} />
                <span style={{ flex: "1", height: "1px", background: "#3B7DD8" }} />
                <span style={{ width: "34px", height: "24px", border: "1px solid #3B7DD8", borderRadius: "6px" }} />
                <span style={{ flex: "1", height: "1px", background: "#3B7DD8" }} />
                <span style={{ width: "34px", height: "24px", background: "#3B7DD8", borderRadius: "6px" }} />
              </div>
              <div style={{ padding: "12px 14px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("resources.5")}
              </div>
            </div>
            <div style={{ background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ height: "120px", background: "#F7F7F5", padding: "16px", boxSizing: "border-box", display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "3px" }}>
                <span style={{ background: "#FFF3B0" }} />
                <span style={{ background: "#FFFFFF" }} />
                <span style={{ background: "#FFFFFF" }} />
                <span style={{ background: "#FFF3B0" }} />
                <span style={{ background: "#FFFFFF" }} />
                <span style={{ background: "#FFFFFF" }} />
                <span style={{ background: "#FFF3B0" }} />
                <span style={{ background: "#FFFFFF" }} />
                <span style={{ background: "#FFFFFF" }} />
              </div>
              <div style={{ padding: "12px 14px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("resources.6")}
              </div>
            </div>
            <div style={{ background: "#FFFFFF", border: "0.5px solid #D8D6D0", borderRadius: "12px", overflow: "hidden" }}>
              <div style={{ height: "120px", background: "#1A1A1A", padding: "16px", boxSizing: "border-box", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", lineHeight: "1.7", color: "#BDBCB6" }}>
                {t("resources.7")}
                <br />
                <span style={{ color: "#75AFF3" }}>
                  {t("resources.8")}
                </span>
                {t("resources.9")}
                <br />
                {t("resources.10")}
              </div>
              <div style={{ padding: "12px 14px", fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px" }}>
                {t("resources.11")}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 12 RANKBID */}
      <section id="side" style={{ scrollMarginTop: "96px", maxWidth: "1200px", margin: "0 auto", padding: "56px 32px 96px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px" }}>
          <div style={{ flex: "1 1 320px", minWidth: "0" }}>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("rankbid.0")}
              </span>
              {t("rankbid.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("rankbid.2")}
            </h2>
            <p style={{ margin: "16px 0 0", fontSize: "17px", lineHeight: "1.6", color: "#4A4943" }}>
              {t("rankbid.3")}
            </p>
          </div>
          <div style={{ flex: "999 1 560px", minWidth: "0", background: "#14161A", borderRadius: "12px", padding: "28px", display: "flex", flexWrap: "wrap", gap: "20px", color: "#FFFFFF" }}>
            <div style={{ flex: "1 1 220px", minWidth: "0", minHeight: "280px", borderRadius: "12px", background: "#1F2329", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <svg width="140" height="250" viewBox="0 0 140 250">
                <circle cx="70" cy="28" r="20" fill="#2C323A" />
                <rect x="38" y="54" width="64" height="96" rx="24" fill="#2C323A" />
                <rect x="12" y="60" width="20" height="84" rx="10" fill="#2C323A" />
                <rect x="108" y="60" width="20" height="84" rx="10" fill="#2C323A" />
                <rect x="42" y="148" width="24" height="96" rx="12" fill="#2C323A" />
                <rect x="74" y="148" width="24" height="96" rx="12" fill="#2C323A" />
                <circle cx="70" cy="80" r="11" fill="#FF4D4D" />
                <text x="70" y="84" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" fill="#FFFFFF">
                  {t("rankbid.4")}
                </text>
                <circle cx="22" cy="100" r="11" fill="#FFFFFF" />
                <text x="22" y="104" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" fill="#14161A">
                  {t("rankbid.5")}
                </text>
                <circle cx="86" cy="196" r="11" fill="#FFFFFF" />
                <text x="86" y="200" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" fill="#14161A">
                  {t("rankbid.6")}
                </text>
              </svg>
              <div style={{ position: "absolute", top: "12px", left: "12px", display: "inline-flex", border: "0.5px solid #4A4F57", borderRadius: "999px", fontSize: "12px", fontWeight: "800" }}>
                <span style={{ padding: "6px 12px", background: "#FFFFFF", color: "#14161A", borderRadius: "999px" }}>
                  {t("rankbid.7")}
                </span>
                <span style={{ padding: "6px 12px" }}>
                  {t("rankbid.8")}
                </span>
              </div>
            </div>
            <div style={{ flex: "1 1 200px", minWidth: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#A9AEB6", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {t("rankbid.9")}
              </div>
              <div style={{ fontSize: "13px", color: "#A9AEB6" }}>
                {t("rankbid.10")}
              </div>
              <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "34px", fontWeight: "600" }}>
                {t("rankbid.11")}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "44px", height: "44px", borderRadius: "999px", border: "0.5px solid #4A4F57", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>
                  {t("rankbid.12")}
                </span>
                <span style={{ flex: "1", textAlign: "center", fontFamily: "var(--font-jbmono), ui-monospace, monospace" }}>
                  {t("rankbid.13")}
                </span>
                <span style={{ width: "44px", height: "44px", borderRadius: "999px", border: "0.5px solid #4A4F57", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>
                  {t("rankbid.14")}
                </span>
              </div>
              <div style={{ minHeight: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "999px", background: "#FF4D4D", color: "#FFFFFF", fontWeight: "800" }}>
                {t("rankbid.15")}
              </div>
              <div style={{ fontSize: "12px", color: "#A9AEB6" }}>
                {t("rankbid.16")}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* BEHANCE */}
      <section id="behance" style={{ scrollMarginTop: "96px", maxWidth: "1200px", margin: "0 auto", padding: "0 32px 96px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
          <div>
            <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              <span style={{ color: "#C62828" }}>
                {t("behance.0")}
              </span>
              {t("behance.1")}
            </div>
            <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>
              {t("behance.2")}
            </h2>
          </div>
          <a href="https://www.behance.net/angelinepoitout" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", minHeight: "44px", padding: "0 20px", borderRadius: "999px", background: "#1A1A1A", color: "#FFFFFF", fontWeight: "800", fontSize: "14px", textDecoration: "none" }}>
            {t("behance.3")}
          </a>
        </div>
        <div style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
          <a href="https://www.behance.net/angelinepoitout" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1A1A1A", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58", textTransform: "uppercase" }}>
              {t("behance.4")}
            </span>
            <span style={{ fontSize: "20px", fontWeight: "900" }}>
              {t("behance.5")}
            </span>
            <span style={{ fontSize: "14px", color: "#4A4943" }}>
              {t("behance.6")}
            </span>
          </a>
          <a href="https://www.behance.net/angelinepoitout" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1A1A1A", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58", textTransform: "uppercase" }}>
              {t("behance.7")}
            </span>
            <span style={{ fontSize: "20px", fontWeight: "900" }}>
              {t("behance.8")}
            </span>
            <span style={{ fontSize: "14px", color: "#4A4943" }}>
              {t("behance.9")}
            </span>
          </a>
          <a href="https://www.behance.net/angelinepoitout" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#1A1A1A", border: "0.5px solid #D8D6D0", borderRadius: "12px", padding: "24px", display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58", textTransform: "uppercase" }}>
              {t("behance.10")}
            </span>
            <span style={{ fontSize: "20px", fontWeight: "900" }}>
              {t("behance.11")}
            </span>
            <span style={{ fontSize: "14px", color: "#4A4943" }}>
              {t("behance.12")}
            </span>
          </a>
        </div>
      </section>
      {/* 14 USE CASES */}
      <section id="usecases" style={{ scrollMarginTop: "96px", maxWidth: "1200px", margin: "0 auto", padding: "0 32px 96px" }}>
        <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#5F5E58", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          <span style={{ color: "#C62828" }}>14</span> {edtechUseCases.label[lang]}
        </div>
        <h2 style={{ margin: "12px 0 0", fontSize: "36px", lineHeight: "1.1", fontWeight: "900" }}>{edtechUseCases.title[lang]}</h2>
        <p style={{ margin: "16px 0 0", fontSize: "16px", lineHeight: "1.6", color: "#4A4943", maxWidth: "720px" }}>
          {edtechUseCases.intro[lang]}
        </p>
        <div style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: "16px" }}>
          {edtechUseCases.cases.map((useCase) => {
            const content = (
              <>
                <span style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "11px", color: "#5F5E58", textTransform: "uppercase" }}>
                  {useCase.tag[lang]}
                </span>
                <span style={{ fontSize: "20px", fontWeight: "900" }}>{useCase.title}</span>
                <span style={{ fontSize: "14px", color: "#4A4943" }}>{useCase.text[lang]}</span>
                <span
                  style={{
                    marginTop: "auto",
                    paddingTop: "8px",
                    fontFamily: "var(--font-jbmono), ui-monospace, monospace",
                    fontSize: "11px",
                    textTransform: "uppercase",
                    color: useCase.pdf ? "#C62828" : "#8A8983",
                  }}
                >
                  {useCase.pdf ? `${edtechUseCases.open[lang]} ↗` : edtechUseCases.soon[lang]}
                </span>
              </>
            );
            const card = {
              textDecoration: "none",
              color: "#1A1A1A",
              border: useCase.pdf ? "0.5px solid #D8D6D0" : "0.5px dashed #D8D6D0",
              borderRadius: "12px",
              padding: "24px",
              display: "flex",
              flexDirection: "column" as const,
              gap: "8px",
              opacity: useCase.pdf ? 1 : 0.6,
            };
            return useCase.pdf ? (
              <a key={useCase.title} href={useCase.pdf} target="_blank" rel="noopener noreferrer" style={card}>
                {content}
                <span className="sr-only"> {edtechUseCases.newTab[lang]}</span>
              </a>
            ) : (
              <div key={useCase.title} style={card}>
                {content}
              </div>
            );
          })}
        </div>
      </section>
      {/* METHODE + FOOTER */}
      <section style={{ background: "#1A1A1A", color: "#FFFFFF" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "72px 32px" }}>
          <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", fontSize: "12px", color: "#BDBCB6", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            {t("method.0")}
          </div>
          <h2 style={{ margin: "12px 0 0", fontSize: "40px", lineHeight: "1.1", fontWeight: "900", maxWidth: "760px" }}>
            {t("method.1")}
          </h2>
          <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0", borderTop: "0.5px solid #4A4943" }}>
            <div style={{ padding: "24px 24px 24px 0" }}>
              <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", color: "#FF6B6B" }}>
                {t("method.2")}
              </div>
              <div style={{ marginTop: "10px", fontWeight: "800", fontSize: "18px" }}>
                {t("method.3")}
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#BDBCB6", lineHeight: "1.5" }}>
                {t("method.4")}
              </div>
            </div>
            <div style={{ padding: "24px", borderLeft: "0.5px solid #4A4943" }}>
              <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", color: "#FF6B6B" }}>
                {t("method.5")}
              </div>
              <div style={{ marginTop: "10px", fontWeight: "800", fontSize: "18px" }}>
                {t("method.6")}
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#BDBCB6", lineHeight: "1.5" }}>
                {t("method.7")}
              </div>
            </div>
            <div style={{ padding: "24px", borderLeft: "0.5px solid #4A4943" }}>
              <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", color: "#FF6B6B" }}>
                {t("method.8")}
              </div>
              <div style={{ marginTop: "10px", fontWeight: "800", fontSize: "18px" }}>
                {t("method.9")}
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#BDBCB6", lineHeight: "1.5" }}>
                {t("method.10")}
              </div>
            </div>
            <div style={{ padding: "24px", borderLeft: "0.5px solid #4A4943" }}>
              <div style={{ fontFamily: "var(--font-jbmono), ui-monospace, monospace", color: "#FF6B6B" }}>
                {t("method.11")}
              </div>
              <div style={{ marginTop: "10px", fontWeight: "800", fontSize: "18px" }}>
                {t("method.12")}
              </div>
              <div style={{ marginTop: "6px", fontSize: "14px", color: "#BDBCB6", lineHeight: "1.5" }}>
                {t("method.13")}
              </div>
            </div>
          </div>
          <div style={{ marginTop: "64px", paddingTop: "24px", borderTop: "0.5px solid #4A4943", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "16px", fontSize: "14px" }}>
            <span style={{ fontWeight: "800" }}>
              {t("method.14")}
            </span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
              <a href="https://skillxtube.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF" }}>
                {t("method.15")}
              </a>
              <a href="https://angelinepoitout.com" target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF" }}>
                {t("method.16")}
              </a>
              <a href="https://github.com/Angelinei" target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF" }}>
                {t("method.17")}
              </a>
              <a href="https://www.behance.net/angelinepoitout" target="_blank" rel="noopener noreferrer" style={{ color: "#FFFFFF" }}>
                {t("method.18")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
