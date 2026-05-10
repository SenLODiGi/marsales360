"use client";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Market Direction Blueprint",
    tag: "Strategy",
    tagColor: "#39FF14",
    desc: "A strategic market positioning service designed to help startups and SMEs identify their ideal direction, target audience, and digital growth opportunities.",
    includes: ["Market analysis", "Audience research", "Competitor mapping", "Positioning strategy", "Marketing roadmap", "Brand direction planning"],
    idealFor: ["New startups", "Businesses entering digital markets", "Rebranding businesses"],
  },
  {
    id: "02",
    title: "Startup Growth Engine",
    tag: "Growth",
    tagColor: "#A8FFB0",
    desc: "A scalable growth system created specifically for startups aiming to build traction, awareness, and customer acquisition in competitive markets.",
    includes: ["Startup marketing planning", "Growth campaign strategies", "Awareness campaigns", "Funnel building", "Early-stage lead generation", "Performance optimization"],
    idealFor: ["Early-stage startups", "New digital businesses", "Product launches"],
  },
  {
    id: "03",
    title: "Founder's Marketing Partner",
    tag: "Consulting",
    tagColor: "#6ee7b7",
    desc: "A collaborative consulting service for founders who need strategic marketing guidance while building their business — 1-on-1 and focused.",
    includes: ["One-on-one growth consulting", "Business marketing strategy", "Campaign planning", "Digital growth support", "Brand communication guidance"],
    idealFor: ["Startup founders", "Entrepreneurs", "Freelancers", "Personal brands"],
  },
  {
    id: "04",
    title: "LinkedIn Authority Builder",
    tag: "Personal Brand",
    tagColor: "#60a5fa",
    desc: "A personal branding solution focused on building professional visibility and thought leadership on LinkedIn — for professionals who want to be seen.",
    includes: ["LinkedIn profile optimization", "Content strategy", "Personal brand positioning", "Authority-building content", "Storytelling frameworks", "Audience engagement planning"],
    idealFor: ["Professionals", "Founders", "Consultants", "Students building professional brands"],
  },
  {
    id: "05",
    title: "Social Media Growth System",
    tag: "Social",
    tagColor: "#34d399",
    desc: "A structured social media marketing framework focused on engagement, audience growth, and digital visibility across all major platforms.",
    includes: ["Content strategy", "Social media planning", "Campaign management", "Audience engagement", "Organic growth systems", "Analytics tracking"],
    idealFor: ["All business types", "Facebook · Instagram · LinkedIn · TikTok"],
  },
  {
    id: "06",
    title: "Personal Brand Identity Lab",
    tag: "Branding",
    tagColor: "#059669",
    desc: "A personal brand development service helping individuals define and communicate their identity confidently online and offline.",
    includes: ["Brand identity development", "Visual direction", "Communication tone", "Content identity", "Audience perception strategy"],
    idealFor: ["Entrepreneurs", "Public speakers", "Freelancers", "Creators"],
  },
  {
    id: "07",
    title: "Home Business Ad Booster",
    tag: "Ads",
    tagColor: "#f0a830",
    desc: "A practical digital advertising solution designed for home-based businesses and small sellers who need real results with limited budgets.",
    includes: ["Product promotion strategy", "Social media ads", "Mobile-first campaigns", "Simple content systems", "Awareness & conversion campaigns"],
    idealFor: ["Home businesses", "Online sellers", "Small product-based brands"],
  },
  {
    id: "08",
    title: "Strategic Growth Architecture",
    tag: "Enterprise",
    tagColor: "#818cf8",
    desc: "A high-level business growth planning service focused on long-term scaling and structured digital expansion for serious growth.",
    includes: ["Growth architecture planning", "Customer journey mapping", "Sales funnel strategy", "Multi-platform campaign planning", "KPI and analytics systems"],
    idealFor: ["Scaling businesses", "SMEs", "Growth-stage startups"],
  },
  {
    id: "09",
    title: "Market Intelligence Report",
    tag: "Analytics",
    tagColor: "#38bdf8",
    desc: "A research and insights service designed to support smarter marketing decisions using data, audience behavior analysis, and competitor intelligence.",
    includes: ["Audience insights", "Campaign analysis", "Competitor tracking", "Trend analysis", "Marketing reports", "Performance reviews"],
    idealFor: ["All business types", "Data-driven teams", "Strategy planning"],
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section style={{ padding: "10rem 2rem 5rem", background: "var(--bg)" }} className="grid-bg">
        <div style={{
          position: "absolute", top: "40%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(57,255,20,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div className="section-tag">Service Ecosystem</div>
          <h1 style={{
            fontFamily: "var(--syne)", fontWeight: 800,
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            letterSpacing: "-0.03em", lineHeight: 1.05,
            color: "var(--text)", maxWidth: 700, marginBottom: "1.5rem",
          }}>
            9 services.<br />
            <span className="text-green glow-text">One growth ecosystem.</span>
          </h1>
          <p style={{
            fontFamily: "var(--outfit)", fontSize: "1rem", fontWeight: 300,
            color: "var(--text-muted)", maxWidth: 500, lineHeight: 1.9,
          }}>
            Every service is designed around audience understanding, market positioning, customer psychology, conversion behavior, and long-term brand growth.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: "5rem 2rem 8rem", background: "var(--bg2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1px", background: "var(--border-dim)" }}>
            {services.map((s, i) => (
              <div key={i} className="card" style={{ background: "var(--bg2)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                  <span style={{ fontFamily: "var(--mono)", fontSize: "0.65rem", color: "var(--text-faint)", letterSpacing: "0.1em" }}>{s.id}</span>
                  <span style={{
                    fontFamily: "var(--mono)", fontSize: "0.58rem", letterSpacing: "0.1em",
                    textTransform: "uppercase", padding: "0.2rem 0.6rem",
                    border: `1px solid ${s.tagColor}44`, color: s.tagColor,
                  }}>{s.tag}</span>
                </div>

                <h3 style={{
                  fontFamily: "var(--syne)", fontWeight: 700, fontSize: "1.05rem",
                  color: "var(--text)", marginBottom: "0.75rem", letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}>{s.title}</h3>

                <p style={{
                  fontFamily: "var(--outfit)", fontSize: "0.82rem",
                  color: "var(--text-muted)", lineHeight: 1.75, marginBottom: "1.25rem",
                }}>{s.desc}</p>

                {/* Includes */}
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{ fontFamily: "var(--mono)", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", color: s.tagColor, marginBottom: "0.5rem" }}>Includes</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}>
                    {s.includes.map((inc, j) => (
                      <div key={j} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <span style={{ width: 4, height: 4, background: s.tagColor, borderRadius: "50%", flexShrink: 0 }} />
                        <span style={{ fontFamily: "var(--outfit)", fontSize: "0.78rem", color: "var(--text-muted)" }}>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal for */}
                <div style={{ borderTop: "1px solid var(--border-dim)", paddingTop: "1rem" }}>
                  <p style={{ fontFamily: "var(--mono)", fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-faint)", marginBottom: "0.4rem" }}>Ideal For</p>
                  <p style={{ fontFamily: "var(--outfit)", fontSize: "0.78rem", color: "var(--text-faint)" }}>{s.idealFor.join(" · ")}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{
            marginTop: "4rem", textAlign: "center",
            padding: "3rem",
            border: "1px solid var(--border)",
            background: "var(--green-glow)",
          }}>
            <h3 style={{ fontFamily: "var(--syne)", fontWeight: 800, fontSize: "1.5rem", color: "var(--text)", marginBottom: "0.75rem" }}>
              Not sure which service fits you?
            </h3>
            <p style={{ fontFamily: "var(--outfit)", fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
              Let's have a discovery call. We'll figure out the right approach for your business.
            </p>
            <Link href="/contact" className="btn-primary">Book a Discovery Call ↗</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
