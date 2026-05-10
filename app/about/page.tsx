"use client";
import Footer from "@/components/Footer";

const team = [
  {
    initials: "SS",
    name: "Senith Samaranayake",
    role: "Founder & Growth Strategist",
    bio: "Growth Strategist & Marketer with expertise in Meta Ads, brand positioning, and digital marketing systems. Speaker on mindset and personal development.",
    skills: ["Growth Strategy", "Meta Ads", "Brand Positioning", "Speaking"],
    linkedin: "https://linkedin.com/in/senithsamaranayake",
  },
  {
    initials: "TM",
    name: "Team Member 2",
    role: "Role — Coming Soon",
    bio: "Bio and expertise details to be added. This placeholder is ready for your team member's information.",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    linkedin: "#",
  },
  {
    initials: "TM",
    name: "Team Member 3",
    role: "Role — Coming Soon",
    bio: "Bio and expertise details to be added. This placeholder is ready for your team member's information.",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    linkedin: "#",
  },
  {
    initials: "TM",
    name: "Team Member 4",
    role: "Role — Coming Soon",
    bio: "Bio and expertise details to be added. This placeholder is ready for your team member's information.",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    linkedin: "#",
  },
];

const values = [
  { title: "Strategic Clarity", desc: "Every decision rooted in market understanding and data." },
  { title: "Creative Intelligence", desc: "Blending creative storytelling with analytical thinking." },
  { title: "Startup Empathy", desc: "We've lived the hustle — we build for real constraints." },
  { title: "Measurable Impact", desc: "Growth you can see, track, and build upon." },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{
        padding: "10rem 2rem 6rem",
        background: "var(--bg)",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "20%", right: "10%",
          width: 300, height: 300,
          background: "radial-gradient(circle, rgba(57,255,20,0.07) 0%, transparent 70%)",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div className="section-tag">About the Agency</div>
          <h1 style={{
            fontFamily: "var(--syne)", fontWeight: 800,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            letterSpacing: "-0.03em", lineHeight: 1.05,
            color: "var(--text)", maxWidth: 700, marginBottom: "1.5rem",
          }}>
            We are<br /><span className="text-green glow-text">MarSales360</span>
          </h1>
          <p style={{
            fontFamily: "var(--outfit)", fontSize: "1.05rem", fontWeight: 300,
            color: "var(--text-muted)", maxWidth: 560, lineHeight: 1.9,
          }}>
            A modern growth-focused marketing agency built to help startups, entrepreneurs, and SMEs grow with strategy-first marketing systems — combining digital marketing, branding, AI, and growth architecture into one scalable ecosystem.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ padding: "6rem 2rem", background: "var(--bg2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <div className="section-tag">Brand Philosophy</div>
              <h2 style={{
                fontFamily: "var(--syne)", fontWeight: 800,
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                letterSpacing: "-0.02em", color: "var(--text)", marginBottom: "1.5rem",
              }}>
                Not a traditional agency.<br /><span className="text-green">A strategic growth partner.</span>
              </h2>
              <p style={{
                fontFamily: "var(--outfit)", fontSize: "0.95rem",
                color: "var(--text-muted)", lineHeight: 1.9, marginBottom: "1rem",
              }}>
                MarSales360 was created with a strong belief that marketing should not only create visibility — it should create measurable business growth.
              </p>
              <p style={{
                fontFamily: "var(--outfit)", fontSize: "0.95rem",
                color: "var(--text-muted)", lineHeight: 1.9,
              }}>
                Instead of operating like a traditional marketing agency, we act as a strategic growth partner for businesses that want to build stronger visibility, better engagement, and long-term market presence.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border-dim)" }}>
              {values.map((v, i) => (
                <div key={i} className="card">
                  <h3 style={{ fontFamily: "var(--syne)", fontWeight: 700, fontSize: "0.9rem", color: "var(--green)", marginBottom: "0.5rem" }}>{v.title}</h3>
                  <p style={{ fontFamily: "var(--outfit)", fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" style={{ padding: "6rem 2rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div className="section-tag">Our Team</div>
            <h2 style={{
              fontFamily: "var(--syne)", fontWeight: 800,
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              letterSpacing: "-0.02em", color: "var(--text)",
            }}>
              The people behind<br /><span className="text-green">your growth</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1px", background: "var(--border-dim)" }}>
            {team.map((m, i) => (
              <div key={i} className="card" style={{ background: "var(--bg2)" }}>
                {/* Avatar placeholder */}
                <div style={{
                  width: 72, height: 72,
                  background: i === 0 ? "var(--green)" : "var(--surface2)",
                  border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: "1.25rem",
                  clipPath: "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)",
                  fontFamily: "var(--syne)", fontWeight: 800,
                  fontSize: "1rem", color: i === 0 ? "var(--bg)" : "var(--text-faint)",
                }}>
                  {/* Replace with <Image> when photo is ready */}
                  {m.initials}
                </div>

                <h3 style={{
                  fontFamily: "var(--syne)", fontWeight: 700,
                  fontSize: "1rem", color: "var(--text)", marginBottom: "0.2rem",
                }}>{m.name}</h3>
                <p style={{
                  fontFamily: "var(--mono)", fontSize: "0.62rem",
                  letterSpacing: "0.08em", color: "var(--green)", marginBottom: "1rem",
                }}>{m.role}</p>
                <p style={{
                  fontFamily: "var(--outfit)", fontSize: "0.82rem",
                  color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1rem",
                }}>{m.bio}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1rem" }}>
                  {m.skills.map((sk, j) => (
                    <span key={j} style={{
                      fontFamily: "var(--mono)", fontSize: "0.58rem",
                      letterSpacing: "0.08em", padding: "0.2rem 0.5rem",
                      border: "1px solid var(--border-dim)", color: "var(--text-faint)",
                    }}>{sk}</span>
                  ))}
                </div>

                {m.linkedin !== "#" && (
                  <a href={m.linkedin} target="_blank" rel="noopener" style={{
                    fontFamily: "var(--mono)", fontSize: "0.62rem",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "var(--green)", textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}>LinkedIn ↗</a>
                )}
              </div>
            ))}
          </div>

          <p style={{
            fontFamily: "var(--outfit)", fontSize: "0.82rem",
            color: "var(--text-faint)", textAlign: "center",
            marginTop: "2rem", fontStyle: "italic",
          }}>
            * Team member placeholders — add names, photos, and bios as your team grows.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
