"use client";
import Link from "next/link";

const stats = [
  { value: "9+", label: "Services" },
  { value: "100%", label: "Strategy-First" },
  { value: "AI", label: "Powered" },
  { value: "360°", label: "Coverage" },
];

export default function HeroSection() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "8rem 2rem 5rem",
      position: "relative",
      overflow: "hidden",
    }}
      className="grid-bg"
    >
      {/* Radial glow */}
      <div style={{
        position: "absolute",
        top: "30%", left: "50%",
        transform: "translate(-50%, -50%)",
        width: 600, height: 600,
        background: "radial-gradient(circle, rgba(57,255,20,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Corner decorations */}
      <div style={{
        position: "absolute", top: 80, right: 80,
        width: 120, height: 120,
        border: "1px solid var(--border)",
        clipPath: "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)",
        opacity: 0.5,
      }} className="animate-float" />
      <div style={{
        position: "absolute", bottom: 120, left: 60,
        width: 60, height: 60,
        background: "var(--green-glow)",
        border: "1px solid var(--border)",
        borderRadius: 2,
        opacity: 0.6,
      }} className="animate-float" />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative" }}>
        {/* Eyebrow */}
        <div className="section-tag" style={{
          opacity: 0, animation: "fadeUp 0.6s 0.1s ease forwards",
        }}>
          Growth-Focused Marketing Agency
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "var(--syne)",
          fontSize: "clamp(2.8rem, 7vw, 6.5rem)",
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: "-0.03em",
          color: "var(--text)",
          maxWidth: 820,
          marginBottom: "1.5rem",
          opacity: 0,
          animation: "fadeUp 0.7s 0.25s ease forwards",
        }}>
          Marketing that
          <br />
          <span className="text-green glow-text">creates growth.</span>
          <br />
          Not just noise.
        </h1>

        {/* Sub */}
        <p style={{
          fontFamily: "var(--outfit)", fontSize: "1.05rem", fontWeight: 300,
          color: "var(--text-muted)", maxWidth: 540, lineHeight: 1.9,
          marginBottom: "2.5rem",
          opacity: 0, animation: "fadeUp 0.7s 0.4s ease forwards",
        }}>
          We help startups, entrepreneurs, and SMEs grow with strategy-first digital marketing, AI-powered systems, and structured growth architecture.
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex", gap: "1rem", flexWrap: "wrap",
          opacity: 0, animation: "fadeUp 0.7s 0.55s ease forwards",
        }}>
          <Link href="/services" className="btn-primary">Explore Services ↗</Link>
          <Link href="/about" className="btn-outline">Meet the Team</Link>
        </div>

        {/* Stats row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          maxWidth: 600,
          marginTop: "5rem",
          background: "var(--border-dim)",
          opacity: 0, animation: "fadeUp 0.7s 0.7s ease forwards",
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: "var(--bg)",
              padding: "1.25rem",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "var(--syne)", fontWeight: 800,
                fontSize: "1.6rem", color: "var(--green)",
                letterSpacing: "-0.02em",
              }}>{s.value}</div>
              <div style={{
                fontFamily: "var(--mono)", fontSize: "0.6rem",
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--text-faint)", marginTop: "0.25rem",
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: "2rem", right: "2rem",
        display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        opacity: 0, animation: "fadeIn 1s 1.2s ease forwards",
      }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--text-faint)", writingMode: "vertical-rl", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, var(--green), transparent)" }} />
      </div>
    </section>
  );
}
