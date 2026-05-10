"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border-dim)",
      padding: "3rem 2rem 2rem",
      background: "var(--bg2)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }} className="grid-cols-2 md:grid-cols-4">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{ width: 28, height: 28, background: "var(--green)", clipPath: "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--syne)", fontWeight: 800, fontSize: "0.65rem", color: "var(--bg)" }}>M</span>
              </div>
              <span style={{ fontFamily: "var(--syne)", fontWeight: 800, fontSize: "0.95rem", color: "var(--text)" }}>MarSales<span style={{ color: "var(--green)" }}>360</span></span>
            </div>
            <p style={{ fontFamily: "var(--outfit)", fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 240 }}>
              Strategy-first digital marketing agency. Helping startups and SMEs scale with AI-powered growth systems.
            </p>
          </div>
          {[
            { title: "Agency", links: [{ l: "About", h: "/about" }, { l: "Team", h: "/about#team" }, { l: "Services", h: "/services" }] },
            { title: "Services", links: [{ l: "Growth Strategy", h: "/services" }, { l: "Meta Ads", h: "/services" }, { l: "Personal Brand", h: "/services" }] },
            { title: "Connect", links: [{ l: "Contact", h: "/contact" }, { l: "LinkedIn", h: "https://linkedin.com/in/senithsamaranayake" }, { l: "Linktree", h: "https://linktr.ee/senith_samaranayake" }] },
          ].map((col, i) => (
            <div key={i}>
              <p style={{ fontFamily: "var(--syne)", fontWeight: 700, fontSize: "0.8rem", color: "var(--text)", marginBottom: "1rem", letterSpacing: "0.05em" }}>{col.title}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {col.links.map(lk => (
                  <Link key={lk.l} href={lk.h} target={lk.h.startsWith("http") ? "_blank" : undefined} style={{ fontFamily: "var(--outfit)", fontSize: "0.83rem", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--green)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
                  >{lk.l}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid var(--border-dim)", paddingTop: "1.5rem", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--text-faint)" }}>© {new Date().getFullYear()} MarSales360. All rights reserved.</span>
          <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--text-faint)" }}>🇱🇰 Sri Lanka — Serving globally</span>
        </div>
      </div>
    </footer>
  );
}
