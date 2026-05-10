"use client";

const steps = [
  { num: "01", title: "Discover", desc: "Deep-dive into your business, market, audience, and competitors. We map your current position and identify growth gaps.", icon: "◎" },
  { num: "02", title: "Strategize", desc: "Build a custom growth architecture — roadmap, positioning, messaging framework, and channel strategy tailored to your goals.", icon: "◈" },
  { num: "03", title: "Execute", desc: "Launch campaigns, content systems, and funnels with precision. Every action aligned to the strategy we built together.", icon: "▶" },
  { num: "04", title: "Optimize", desc: "Track KPIs, analyze performance, identify what's working. Continuously refine for compounding growth over time.", icon: "⬡" },
];

export default function ProcessSection() {
  return (
    <section id="process" style={{
      padding: "8rem 2rem",
      background: "var(--bg2)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* bg glow */}
      <div style={{
        position: "absolute", bottom: 0, right: 0,
        width: 400, height: 400,
        background: "radial-gradient(circle at bottom right, rgba(57,255,20,0.06) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
          <div className="section-tag" style={{ justifyContent: "center" }}>Growth Process</div>
          <h2 style={{
            fontFamily: "var(--syne)", fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            letterSpacing: "-0.03em", color: "var(--text)",
          }}>
            How we build <span className="text-green">sustainable growth</span>
          </h2>
        </div>

        {/* Steps with connector line */}
        <div style={{ position: "relative" }}>
          {/* Connector */}
          <div style={{
            position: "absolute", top: "2.5rem", left: "calc(12.5% - 0.5px)",
            right: "calc(12.5% - 0.5px)", height: 1,
            background: "linear-gradient(90deg, transparent, var(--green), var(--green), var(--green), transparent)",
            opacity: 0.2,
          }} className="hidden md:block" />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {steps.map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "0 1rem" }}>
                {/* Icon circle */}
                <div style={{
                  width: 56, height: 56,
                  border: "1px solid var(--border)",
                  background: "var(--bg)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1.5rem",
                  position: "relative",
                  clipPath: "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)",
                }}>
                  <span style={{ fontSize: "1.2rem", color: "var(--green)" }}>{s.icon}</span>
                  {/* Step number */}
                  <span style={{
                    position: "absolute", top: -8, right: -8,
                    fontFamily: "var(--mono)", fontSize: "0.55rem",
                    color: "var(--green)", letterSpacing: "0.1em",
                    background: "var(--bg2)", padding: "1px 4px",
                  }}>{s.num}</span>
                </div>
                <h3 style={{ fontFamily: "var(--syne)", fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", marginBottom: "0.75rem" }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--outfit)", fontSize: "0.83rem", color: "var(--text-muted)", lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA box */}
        <div style={{
          marginTop: "5rem",
          padding: "3rem",
          border: "1px solid var(--border)",
          background: "var(--green-glow)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
          clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
        }}>
          <div>
            <h3 style={{ fontFamily: "var(--syne)", fontWeight: 800, fontSize: "1.4rem", color: "var(--text)", marginBottom: "0.5rem" }}>
              Ready to build your <span className="text-green">growth system?</span>
            </h3>
            <p style={{ fontFamily: "var(--outfit)", fontSize: "0.88rem", color: "var(--text-muted)" }}>Let's start with a discovery conversation — no pressure, just strategy.</p>
          </div>
          <a href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>Start Growing ↗</a>
        </div>
      </div>
    </section>
  );
}
