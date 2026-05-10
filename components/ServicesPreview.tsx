"use client";
import { useState } from "react";
import Link from "next/link";

const services = [
  { id: "01", title: "Market Direction Blueprint", short: "Strategic positioning & market roadmap", tag: "Strategy" },
  { id: "02", title: "Startup Growth Engine", short: "Traction, awareness & customer acquisition systems", tag: "Growth" },
  { id: "03", title: "Founder's Marketing Partner", short: "1-on-1 strategic marketing consulting", tag: "Consulting" },
  { id: "04", title: "LinkedIn Authority Builder", short: "Personal branding & thought leadership", tag: "Personal Brand" },
  { id: "05", title: "Social Media Growth System", short: "Structured framework for engagement & visibility", tag: "Social" },
  { id: "06", title: "Personal Brand Identity Lab", short: "Define and communicate your identity online", tag: "Branding" },
  { id: "07", title: "Home Business Ad Booster", short: "Practical digital ads for small sellers", tag: "Ads" },
  { id: "08", title: "Strategic Growth Architecture", short: "High-level long-term scaling blueprint", tag: "Enterprise" },
  { id: "09", title: "Market Intelligence Report", short: "Research, insights & competitor analysis", tag: "Analytics" },
];

const tagColors: Record<string, string> = {
  Strategy: "#39FF14", Growth: "#A8FFB0", Consulting: "#6ee7b7",
  "Personal Brand": "#34d399", Social: "#10b981", Branding: "#059669",
  Ads: "#f0a830", Enterprise: "#818cf8", Analytics: "#60a5fa",
};

export default function ServicesPreview() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services-preview" style={{ padding: "8rem 2rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <div className="section-tag">Service Ecosystem</div>
            <h2 style={{
              fontFamily: "var(--syne)", fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em", lineHeight: 1.1, color: "var(--text)",
            }}>
              9 growth services.<br />
              <span className="text-green">One ecosystem.</span>
            </h2>
          </div>
          <Link href="/services" className="btn-outline" style={{ flexShrink: 0 }}>View All Services ↗</Link>
        </div>

        {/* Service list */}
        <div>
          {services.map((s, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderTop: "1px solid var(--border-dim)",
                padding: "1.5rem 1rem",
                display: "grid",
                gridTemplateColumns: "60px 1fr auto",
                gap: "1.5rem",
                alignItems: "center",
                transition: "all 0.25s",
                cursor: "default",
                background: hovered === i ? "var(--surface)" : "transparent",
                marginLeft: hovered === i ? "-1rem" : "0",
                marginRight: hovered === i ? "-1rem" : "0",
                paddingLeft: hovered === i ? "1.5rem" : "1rem",
              }}
            >
              <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--text-faint)", letterSpacing: "0.1em" }}>{s.id}</span>
              <div>
                <div style={{ fontFamily: "var(--syne)", fontWeight: 700, fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: hovered === i ? "var(--green)" : "var(--text)", transition: "color 0.25s", letterSpacing: "-0.01em" }}>{s.title}</div>
                {hovered === i && (
                  <div style={{ fontFamily: "var(--outfit)", fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.3rem" }}>{s.short}</div>
                )}
              </div>
              <span style={{
                fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.1em",
                textTransform: "uppercase", padding: "0.2rem 0.7rem",
                border: `1px solid ${tagColors[s.tag]}44`,
                color: tagColors[s.tag],
                whiteSpace: "nowrap",
                transition: "all 0.25s",
                background: hovered === i ? `${tagColors[s.tag]}11` : "transparent",
              }}>{s.tag}</span>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--border-dim)" }} />
        </div>
      </div>
    </section>
  );
}
