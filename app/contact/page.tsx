"use client";
import Footer from "@/components/Footer";

const contactLinks = [
  { label: "Email", value: "senithlokitha53@gmail.com", href: "mailto:senithlokitha53@gmail.com", icon: "✉" },
  { label: "Phone / WhatsApp", value: "+94 71 012 0130", href: "tel:+94710120130", icon: "☎" },
  { label: "LinkedIn", value: "linkedin.com/in/senithsamaranayake", href: "https://linkedin.com/in/senithsamaranayake", icon: "in" },
  { label: "Linktree", value: "linktr.ee/senith_samaranayake", href: "https://linktr.ee/senith_samaranayake", icon: "↗" },
  { label: "Portfolio", value: "senith.live", href: "https://senith.live", icon: "◎" },
];

const services = [
  "Market Direction Blueprint",
  "Startup Growth Engine",
  "Founder's Marketing Partner",
  "LinkedIn Authority Builder",
  "Social Media Growth System",
  "Strategic Growth Architecture",
  "Other / Custom",
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: "10rem 2rem 5rem", background: "var(--bg)", position: "relative", overflow: "hidden" }} className="grid-bg">
        <div style={{
          position: "absolute", bottom: 0, left: "30%",
          width: 400, height: 300,
          background: "radial-gradient(circle, rgba(57,255,20,0.07) 0%, transparent 70%)",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div className="section-tag">Get In Touch</div>
          <h1 style={{
            fontFamily: "var(--syne)", fontWeight: 800,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            letterSpacing: "-0.03em", lineHeight: 1.05,
            color: "var(--text)", maxWidth: 700, marginBottom: "1.5rem",
          }}>
            Let's build your<br /><span className="text-green glow-text">growth system.</span>
          </h1>
          <p style={{
            fontFamily: "var(--outfit)", fontSize: "1rem", fontWeight: 300,
            color: "var(--text-muted)", maxWidth: 500, lineHeight: 1.9,
          }}>
            Open for growth strategy projects, Meta Ads management, digital marketing consulting, speaking engagements, and strategic partnerships across Sri Lanka and beyond.
          </p>
        </div>
      </section>

      <section style={{ padding: "5rem 2rem 8rem", background: "var(--bg2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>

            {/* Left — Contact links */}
            <div>
              <h2 style={{
                fontFamily: "var(--syne)", fontWeight: 700,
                fontSize: "1.3rem", color: "var(--text)", marginBottom: "2rem",
                letterSpacing: "-0.01em",
              }}>Direct Contact</h2>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {contactLinks.map((c, i) => (
                  <a key={i} href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", alignItems: "center", gap: "1.25rem",
                      padding: "1.25rem 0",
                      borderTop: "1px solid var(--border-dim)",
                      textDecoration: "none", color: "var(--text)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.paddingLeft = "0.75rem"; e.currentTarget.style.borderTopColor = "var(--green)"; }}
                    onMouseLeave={e => { e.currentTarget.style.paddingLeft = "0"; e.currentTarget.style.borderTopColor = "var(--border-dim)"; }}
                  >
                    <div style={{
                      width: 36, height: 36, flexShrink: 0,
                      border: "1px solid var(--border)",
                      background: "var(--surface)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: "var(--mono)", fontSize: "0.7rem", color: "var(--green)",
                      clipPath: "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)",
                    }}>{c.icon}</div>
                    <div>
                      <p style={{ fontFamily: "var(--mono)", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: "0.1rem" }}>{c.label}</p>
                      <p style={{ fontFamily: "var(--outfit)", fontSize: "0.88rem", color: "var(--text)" }}>{c.value}</p>
                    </div>
                  </a>
                ))}
                <div style={{ borderTop: "1px solid var(--border-dim)" }} />
              </div>

              <div style={{
                marginTop: "2.5rem",
                padding: "1.25rem",
                border: "1px solid var(--border)",
                background: "var(--green-glow)",
                display: "flex", alignItems: "center", gap: "0.75rem",
              }}>
                <span style={{ fontSize: "1.2rem" }}>🇱🇰</span>
                <div>
                  <p style={{ fontFamily: "var(--syne)", fontWeight: 600, fontSize: "0.85rem", color: "var(--text)" }}>Based in Sri Lanka</p>
                  <p style={{ fontFamily: "var(--mono)", fontSize: "0.62rem", color: "var(--text-muted)", letterSpacing: "0.05em" }}>Available globally — remote-first</p>
                </div>
              </div>
            </div>

            {/* Right — Inquiry form (static - no backend) */}
            <div style={{
              border: "1px solid var(--border-dim)",
              background: "var(--surface)",
              padding: "2rem",
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
              position: "relative",
            }}>
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: 20, height: 20,
                background: "var(--green)",
                clipPath: "polygon(100% 0, 0 0, 100% 100%)",
              }} />

              <h2 style={{
                fontFamily: "var(--syne)", fontWeight: 700,
                fontSize: "1.1rem", color: "var(--text)", marginBottom: "0.5rem",
              }}>Send an Enquiry</h2>
              <p style={{ fontFamily: "var(--outfit)", fontSize: "0.8rem", color: "var(--text-muted)", marginBottom: "1.75rem" }}>
                Fill this in and send it directly via email — or reach out on any channel above.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { label: "Your Name", type: "text", placeholder: "Full name" },
                  { label: "Email Address", type: "email", placeholder: "you@email.com" },
                  { label: "Business / Brand", type: "text", placeholder: "Business name (optional)" },
                ].map((f, i) => (
                  <div key={i}>
                    <label style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-faint)", display: "block", marginBottom: "0.4rem" }}>{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} style={{
                      width: "100%", padding: "0.75rem 1rem",
                      background: "var(--bg)", border: "1px solid var(--border-dim)",
                      color: "var(--text)", fontFamily: "var(--outfit)", fontSize: "0.85rem",
                      outline: "none", transition: "border-color 0.2s",
                    }}
                      onFocus={e => (e.currentTarget.style.borderColor = "var(--green)")}
                      onBlur={e => (e.currentTarget.style.borderColor = "var(--border-dim)")}
                    />
                  </div>
                ))}

                <div>
                  <label style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-faint)", display: "block", marginBottom: "0.4rem" }}>Service Interest</label>
                  <select style={{
                    width: "100%", padding: "0.75rem 1rem",
                    background: "var(--bg)", border: "1px solid var(--border-dim)",
                    color: "var(--text-muted)", fontFamily: "var(--outfit)", fontSize: "0.85rem", outline: "none",
                  }}>
                    <option value="">Select a service...</option>
                    {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-faint)", display: "block", marginBottom: "0.4rem" }}>Message</label>
                  <textarea placeholder="Tell us about your business and goals..." rows={4} style={{
                    width: "100%", padding: "0.75rem 1rem",
                    background: "var(--bg)", border: "1px solid var(--border-dim)",
                    color: "var(--text)", fontFamily: "var(--outfit)", fontSize: "0.85rem",
                    outline: "none", resize: "vertical", transition: "border-color 0.2s",
                  }}
                    onFocus={e => (e.currentTarget.style.borderColor = "var(--green)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "var(--border-dim)")}
                  />
                </div>

                {/* mailto fallback — opens email client */}
                <a
                  href="mailto:senithlokitha53@gmail.com?subject=MarSales360 Enquiry"
                  className="btn-primary"
                  style={{ textAlign: "center", justifyContent: "center", marginTop: "0.5rem" }}
                >
                  Send via Email ↗
                </a>
                <p style={{ fontFamily: "var(--mono)", fontSize: "0.58rem", color: "var(--text-faint)", textAlign: "center", letterSpacing: "0.05em" }}>
                  Opens your email client — or contact directly above
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
