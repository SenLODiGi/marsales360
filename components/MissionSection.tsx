"use client";
import Link from "next/link";

export default function MissionSection() {
  return (
    <section id="mission" style={{
      padding: "8rem 2rem",
      background: "var(--bg)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Large bg text */}
      <div aria-hidden style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "var(--syne)", fontWeight: 800,
        fontSize: "clamp(80px, 15vw, 200px)",
        color: "rgba(57,255,20,0.03)",
        letterSpacing: "-0.05em",
        whiteSpace: "nowrap", userSelect: "none",
        pointerEvents: "none",
      }}>
        GROW360
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          {/* Left: Mission & Vision */}
          <div>
            <div className="section-tag">Our Purpose</div>
            <h2 style={{
              fontFamily: "var(--syne)", fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em", lineHeight: 1.1,
              color: "var(--text)", marginBottom: "2.5rem",
            }}>
              Mission &<br /><span className="text-green">Vision</span>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{
                padding: "1.5rem",
                border: "1px solid var(--border-dim)",
                background: "var(--surface)",
                borderLeft: "3px solid var(--green)",
                paddingLeft: "1.5rem",
              }}>
                <p style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--green)", marginBottom: "0.6rem" }}>Mission</p>
                <p style={{ fontFamily: "var(--outfit)", fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.9 }}>
                  To empower startups, entrepreneurs, and SMEs with strategic marketing systems that combine creativity, technology, and growth intelligence.
                </p>
              </div>

              <div style={{
                padding: "1.5rem",
                border: "1px solid var(--border-dim)",
                background: "var(--surface)",
                borderLeft: "3px solid var(--mint)",
                paddingLeft: "1.5rem",
              }}>
                <p style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--mint)", marginBottom: "0.6rem" }}>Vision</p>
                <p style={{ fontFamily: "var(--outfit)", fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.9 }}>
                  To become a leading growth-focused digital marketing consultancy in Sri Lanka and beyond — helping modern businesses scale through innovative branding, AI-driven strategies, and customer-focused digital experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Founder message */}
          <div>
            <div style={{
              border: "1px solid var(--border)",
              background: "var(--surface)",
              padding: "2.5rem",
              position: "relative",
              clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)",
            }}>
              {/* Corner accent */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: 24, height: 24,
                background: "var(--green)",
                clipPath: "polygon(100% 0, 0 0, 100% 100%)",
              }} />

              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{
                  width: 64, height: 64,
                  background: "var(--surface2)",
                  border: "1px solid var(--border)",
                  marginBottom: "1rem",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--syne)", fontWeight: 800,
                  fontSize: "1.2rem", color: "var(--green)",
                  clipPath: "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)",
                }}>
                  SS
                </div>
                <p style={{ fontFamily: "var(--syne)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)" }}>Senith Samaranayake</p>
                <p style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--green)" }}>Founder, MarSales360</p>
              </div>

              <blockquote style={{
                fontFamily: "var(--outfit)", fontSize: "1rem",
                fontStyle: "italic", color: "var(--text-muted)",
                lineHeight: 1.9, borderTop: "1px solid var(--border-dim)", paddingTop: "1.25rem",
              }}>
                "I started with one simple question — why do some brands grow while others stay invisible? MarSales360 was built to answer that question. Growth isn't luck. It's alignment."
              </blockquote>

              <div style={{ marginTop: "1.5rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <Link href="/about" className="btn-outline" style={{ fontSize: "0.72rem", padding: "0.5rem 1.2rem" }}>Meet the Team</Link>
                <a href="https://linkedin.com/in/senithsamaranayake" target="_blank" rel="noopener" style={{
                  fontFamily: "var(--mono)", fontSize: "0.68rem", letterSpacing: "0.08em",
                  color: "var(--text-faint)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.3rem",
                  transition: "color 0.2s", padding: "0.5rem 0",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--green)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-faint)")}
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
