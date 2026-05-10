"use client";

const pillars = [
  {
    num: "01",
    title: "Strategy Before Execution",
    desc: "We understand your business deeply before launching any campaign. Every action is grounded in market intelligence and audience insight.",
    icon: "◈",
  },
  {
    num: "02",
    title: "AI-Powered Thinking",
    desc: "Modern AI tools and digital insights are woven into every growth system — from content planning to campaign optimization.",
    icon: "⬡",
  },
  {
    num: "03",
    title: "Startup-Friendly Approach",
    desc: "We understand the real challenges of startups and SMEs. Our systems are built to deliver results within real-world constraints.",
    icon: "◇",
  },
  {
    num: "04",
    title: "Human-Centered Branding",
    desc: "Data-driven marketing balanced with authentic storytelling. We create brands that connect, not just convert.",
    icon: "○",
  },
  {
    num: "05",
    title: "Measurable Growth Systems",
    desc: "No random posting. We focus on systems, consistency, scalability, and growth you can actually measure and track.",
    icon: "△",
  },
  {
    num: "06",
    title: "360° Coverage",
    desc: "From brand identity to lead generation, Meta ads to LinkedIn authority — we cover every dimension of your digital presence.",
    icon: "✦",
  },
];

export default function WhySection() {
  return (
    <section id="why" style={{ padding: "8rem 2rem", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "5rem", alignItems: "start" }}>
          {/* Left sticky */}
          <div style={{ position: "sticky", top: "8rem" }}>
            <div className="section-tag">Why MarSales360</div>
            <h2 style={{
              fontFamily: "var(--syne)", fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.03em", lineHeight: 1.1,
              color: "var(--text)", marginBottom: "1.5rem",
            }}>
              Built different.<br />
              <span className="text-green">Built to grow.</span>
            </h2>
            <p style={{ fontFamily: "var(--outfit)", fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "2rem" }}>
              We don't just run campaigns. We build growth ecosystems — combining strategy, technology, and creative intelligence into one scalable system.
            </p>
            <div style={{
              padding: "1rem 1.25rem",
              border: "1px solid var(--border)",
              background: "var(--green-glow)",
              fontFamily: "var(--mono)", fontSize: "0.7rem",
              color: "var(--green)", letterSpacing: "0.05em",
              lineHeight: 1.8,
            }}>
              marketing should not only<br />
              create visibility — it should<br />
              create measurable business growth.
            </div>
          </div>

          {/* Right grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border-dim)" }}>
            {pillars.map((p, i) => (
              <div key={i} className="card" style={{ background: "var(--bg2)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--text-faint)", letterSpacing: "0.1em" }}>{p.num}</span>
                  <span style={{ fontSize: "1.2rem", color: "var(--green)", opacity: 0.7 }}>{p.icon}</span>
                </div>
                <h3 style={{
                  fontFamily: "var(--syne)", fontWeight: 700,
                  fontSize: "0.95rem", color: "var(--text)",
                  marginBottom: "0.6rem", letterSpacing: "-0.01em",
                }}>{p.title}</h3>
                <p style={{ fontFamily: "var(--outfit)", fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
