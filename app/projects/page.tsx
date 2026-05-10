"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const projects = [
  {
    id: "01",
    client: "Nutribiocare.lk",
    tags: ["Meta Ads", "Brand Strategy"],
    period: "Mar 2026 – Present",
    accent: "#39FF14",
    status: "Active",
    headline: "Repositioning a skincare brand as a digital education authority",
    desc: "Built a structured Meta advertising funnel and content system to position Nutribiocare as a skincare education brand. Reduced reliance on random promotional boosting and created a scalable framework for long-term digital growth.",
    outcomes: [
      { label: "Meta Ad Funnel", detail: "Full-funnel architecture from awareness to conversion" },
      { label: "Brand Repositioning", detail: "Shifted from promo-first to education-first messaging" },
      { label: "Organic Strategy", detail: "Organic awareness system reducing ad dependency" },
      { label: "Performance Tracking", detail: "Dashboard & KPI system for long-term scaling" },
    ],
    metrics: [
      { value: "↑ Organic", label: "Brand Awareness" },
      { value: "Funnel", label: "Ad Architecture" },
      { value: "Education", label: "Content Position" },
    ],
  },
  {
    id: "02",
    client: "Ceylonry Life Care",
    tags: ["Growth Marketing", "Healthcare"],
    period: "May 2026 – Present",
    accent: "#A8FFB0",
    status: "Active",
    headline: "End-to-end growth marketing for a healthcare brand entering digital",
    desc: "Supporting brand digital growth in the healthcare sector with end-to-end growth marketing strategy, brand positioning, and lead generation system design for the Sri Lankan market.",
    outcomes: [
      { label: "Lead Generation", detail: "Structured lead gen systems for healthcare audience" },
      { label: "Brand Positioning", detail: "Differentiated positioning in the LK health market" },
      { label: "Social Direction", detail: "Content & social media direction framework" },
      { label: "Campaign Planning", detail: "Multi-channel campaign architecture" },
    ],
    metrics: [
      { value: "Healthcare", label: "Sector" },
      { value: "LKR", label: "Market" },
      { value: "360°", label: "Coverage" },
    ],
  },
];

const testimonials = [
  {
    quote: "The Meta funnel Senith built changed how we approach digital completely. We went from random boosts to a structured system that actually works.",
    author: "Chanaka Indrajith",
    role: "Manager, Nutribiocare.lk",
    initials: "CI",
    accent: "#39FF14",
  },
  {
    quote: "MarSales360 understood our healthcare audience and built a growth system that felt right for our brand — not just copy-paste marketing.",
    author: "Ceylonry Life Care",
    role: "Brand Team",
    initials: "CL",
    accent: "#A8FFB0",
  },
  {
    quote: "Strategy first, always. That's the difference. Every action had a reason and a measurable goal behind it.",
    author: "Client",
    role: "SME Owner, Sri Lanka",
    initials: "CL",
    accent: "#60a5fa",
  },
];

// Creative gallery placeholder cards
const galleryItems = [
  { label: "Brand Identity", sub: "Nutribiocare", color: "#39FF14", shape: "◈", rot: -3 },
  { label: "Ad Creative", sub: "Meta Campaign", color: "#A8FFB0", shape: "◇", rot: 2 },
  { label: "Content System", sub: "Social Strategy", color: "#60a5fa", shape: "△", rot: -2 },
  { label: "Growth Report", sub: "KPI Dashboard", color: "#f0a830", shape: "○", rot: 3 },
  { label: "Funnel Map", sub: "Ceylonry LC", color: "#A8FFB0", shape: "⬡", rot: -1 },
  { label: "Brand Deck", sub: "Positioning", color: "#818cf8", shape: "✦", rot: 2 },
  { label: "Ad Copy", sub: "Awareness Phase", color: "#39FF14", shape: "◈", rot: -3 },
  { label: "Audience Map", sub: "Market Research", color: "#34d399", shape: "◎", rot: 1 },
];

/* ─────────────────────────────────────────
   CURSOR GLOW
───────────────────────────────────────── */
function CursorGlow() {
  useEffect(() => {
    const el = document.getElementById("cursor-glow");
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div id="cursor-glow" />;
}

/* ─────────────────────────────────────────
   TILT CARD HOOK
───────────────────────────────────────── */
function useTilt(ref: React.RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateY(${x * 12}deg) rotateX(${-y * 10}deg) scale3d(1.02,1.02,1.02)`;
    };
    const onLeave = () => { el.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)"; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, [ref]);
}

/* ─────────────────────────────────────────
   GSAP SCROLL REVEAL
───────────────────────────────────────── */
function useGSAP() {
  useEffect(() => {
    let gsap: any, ScrollTrigger: any;
    import("gsap").then(({ gsap: g }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger: ST }) => {
        gsap = g;
        ScrollTrigger = ST;
        gsap.registerPlugin(ScrollTrigger);

        // Reveal all .gsap-reveal elements
        gsap.utils.toArray(".gsap-reveal").forEach((el: any, i: number) => {
          gsap.fromTo(el,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
              scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" },
              delay: (i % 4) * 0.08,
            }
          );
        });

        // Reveal left/right
        ["gsap-reveal-left", "gsap-reveal-right"].forEach((cls, dir) => {
          gsap.utils.toArray(`.${cls}`).forEach((el: any) => {
            gsap.fromTo(el,
              { opacity: 0, x: dir === 0 ? -50 : 50 },
              { opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
                scrollTrigger: { trigger: el, start: "top 85%" }
              }
            );
          });
        });

        // Scale reveals
        gsap.utils.toArray(".gsap-reveal-scale").forEach((el: any, i: number) => {
          gsap.fromTo(el,
            { opacity: 0, scale: 0.85 },
            { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.5)",
              scrollTrigger: { trigger: el, start: "top 88%" },
              delay: (i % 3) * 0.1,
            }
          );
        });

        // Counter animate metrics
        gsap.utils.toArray(".count-up").forEach((el: any) => {
          const target = parseFloat(el.dataset.target);
          if (isNaN(target)) return;
          gsap.fromTo({ val: 0 }, { val: target, duration: 2, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
            onUpdate: function() { el.textContent = Math.round(this.targets()[0].val) + (el.dataset.suffix || ""); }
          });
        });
      });
    });
    return () => {};
  }, []);
}

/* ─────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────── */
function ProjectCard({ p, flip }: { p: typeof projects[0]; flip: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null);
  useTilt(cardRef);

  return (
    <div
      ref={cardRef}
      className="gsap-reveal"
      style={{
        border: `1px solid ${p.accent}22`,
        background: "var(--surface)",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 0.3s, border-color 0.3s",
        willChange: "transform",
        cursor: "default",
        clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 0 100%)",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 60px ${p.accent}18`;
        (e.currentTarget as HTMLElement).style.borderColor = `${p.accent}55`;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
        (e.currentTarget as HTMLElement).style.borderColor = `${p.accent}22`;
      }}
    >
      {/* Corner accent */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 18, height: 18, background: p.accent, clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />

      {/* Top row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
        <div>
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "0.6rem" }}>
            {p.tags.map(t => (
              <span key={t} style={{
                fontFamily: "var(--mono)", fontSize: "0.58rem", letterSpacing: "0.1em",
                textTransform: "uppercase", padding: "0.2rem 0.6rem",
                border: `1px solid ${p.accent}55`, color: p.accent,
              }}>{t}</span>
            ))}
          </div>
          <h3 style={{ fontFamily: "var(--syne)", fontWeight: 800, fontSize: "1.4rem", color: "var(--text)", letterSpacing: "-0.02em", lineHeight: 1.15 }}>
            {p.client}
          </h3>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0, paddingLeft: "1rem" }}>
          <span style={{
            display: "inline-block", fontFamily: "var(--mono)", fontSize: "0.58rem",
            letterSpacing: "0.1em", padding: "0.25rem 0.65rem",
            background: `${p.accent}18`, color: p.accent, marginBottom: "0.4rem",
          }}>● {p.status}</span>
          <p style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", color: "var(--text-faint)" }}>{p.period}</p>
        </div>
      </div>

      {/* Headline */}
      <p style={{
        fontFamily: "var(--outfit)", fontSize: "0.95rem", fontStyle: "italic",
        color: p.accent, marginBottom: "0.75rem", lineHeight: 1.5,
      }}>"{p.headline}"</p>

      {/* Desc */}
      <p style={{ fontFamily: "var(--outfit)", fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
        {p.desc}
      </p>

      {/* Outcomes */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1.5rem" }}>
        {p.outcomes.map((o, i) => (
          <div key={i} style={{
            padding: "0.75rem",
            background: "var(--bg)",
            border: `1px solid ${p.accent}18`,
            transition: "border-color 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = `${p.accent}55`)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = `${p.accent}18`)}
          >
            <p style={{ fontFamily: "var(--syne)", fontWeight: 700, fontSize: "0.75rem", color: p.accent, marginBottom: "0.2rem" }}>{o.label}</p>
            <p style={{ fontFamily: "var(--outfit)", fontSize: "0.72rem", color: "var(--text-faint)", lineHeight: 1.5 }}>{o.detail}</p>
          </div>
        ))}
      </div>

      {/* Metrics strip */}
      <div style={{ display: "flex", gap: "1px", background: `${p.accent}18` }}>
        {p.metrics.map((m, i) => (
          <div key={i} style={{ flex: 1, padding: "0.7rem", background: "var(--surface)", textAlign: "center" }}>
            <p style={{ fontFamily: "var(--syne)", fontWeight: 800, fontSize: "0.85rem", color: p.accent }}>{m.value}</p>
            <p style={{ fontFamily: "var(--mono)", fontSize: "0.55rem", color: "var(--text-faint)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   GALLERY CARD with random float animation
───────────────────────────────────────── */
function GalleryCard({ item, idx }: { item: typeof galleryItems[0]; idx: number }) {
  const floatAnim = ["float-a", "float-b", "float-c"][idx % 3];
  const delay = `${(idx * 0.4) % 2}s`;

  return (
    <div
      className="gsap-reveal-scale"
      style={{
        animation: `${floatAnim} ${3.5 + (idx % 3) * 0.7}s ease-in-out ${delay} infinite`,
        willChange: "transform",
      }}
    >
      <div
        style={{
          background: "var(--surface)",
          border: `1px solid ${item.color}22`,
          padding: "1.5rem",
          cursor: "pointer",
          transition: "all 0.3s",
          transform: `rotate(${item.rot}deg)`,
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={e => {
          const el = e.currentTarget;
          el.style.transform = "rotate(0deg) scale(1.06) translateY(-6px)";
          el.style.boxShadow = `0 20px 50px ${item.color}25`;
          el.style.borderColor = `${item.color}88`;
          el.style.zIndex = "10";
        }}
        onMouseLeave={e => {
          const el = e.currentTarget;
          el.style.transform = `rotate(${item.rot}deg)`;
          el.style.boxShadow = "none";
          el.style.borderColor = `${item.color}22`;
          el.style.zIndex = "1";
        }}
      >
        {/* Placeholder image area */}
        <div style={{
          width: "100%", paddingBottom: "66%",
          background: `linear-gradient(135deg, ${item.color}10, ${item.color}05)`,
          marginBottom: "0.75rem", position: "relative",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "2rem", color: item.color, opacity: 0.4 }}>{item.shape}</span>
          </div>
          <div style={{
            position: "absolute", bottom: "0.5rem", right: "0.5rem",
            fontFamily: "var(--mono)", fontSize: "0.55rem",
            color: `${item.color}88`, letterSpacing: "0.1em",
          }}>
            [ image ]
          </div>
        </div>
        <p style={{ fontFamily: "var(--syne)", fontWeight: 700, fontSize: "0.78rem", color: "var(--text)", marginBottom: "0.15rem" }}>{item.label}</p>
        <p style={{ fontFamily: "var(--mono)", fontSize: "0.58rem", color: item.color, letterSpacing: "0.08em" }}>{item.sub}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   GROWTH PROCESS TIMELINE
───────────────────────────────────────── */
const processSteps = [
  { num: "01", title: "Discovery", icon: "◎", desc: "We audit the brand, market, audience, and existing digital presence. No assumptions — only data." },
  { num: "02", title: "Strategy", icon: "◈", desc: "Custom growth architecture is built: positioning, messaging, channel mix, and 90-day roadmap." },
  { num: "03", title: "Build", icon: "▶", desc: "Funnels, content systems, ad campaigns, and brand assets are created and launched with precision." },
  { num: "04", title: "Optimize", icon: "⬡", desc: "We track, learn, and refine. Every iteration compounds — turning good results into great ones." },
  { num: "05", title: "Scale", icon: "△", desc: "Once the system is proven, we scale what works — increasing reach, leads, and revenue systematically." },
];

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
export default function ProjectsPage() {
  useGSAP();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <main style={{ background: "var(--bg)" }}>
      <CursorGlow />

      {/* ── HERO ── */}
      <section style={{
        padding: "9rem 2rem 6rem",
        position: "relative", overflow: "hidden",
      }} className="grid-bg">
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(57,255,20,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div className="section-tag gsap-reveal">Projects & Clients</div>
          <h1 className="hero-h1 gsap-reveal" style={{
            fontFamily: "var(--syne)", fontWeight: 800,
            letterSpacing: "-0.03em", lineHeight: 1.0,
            color: "var(--text)", maxWidth: 700, marginBottom: "1.25rem",
          }}>
            Real brands.<br />
            <span className="text-green glow-text">Real growth.</span>
          </h1>
          <p className="gsap-reveal" style={{
            fontFamily: "var(--outfit)", fontWeight: 300,
            color: "var(--text-muted)", maxWidth: 480, lineHeight: 1.85,
          }}>
            Every project is built around strategy, not guesswork. Here's a look at the brands we've partnered with and the systems we've built together.
          </p>

          {/* Stats */}
          <div className="gsap-reveal" style={{ display: "flex", gap: "2.5rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
            {[
              { v: "2", l: "Active clients" },
              { v: "2026", l: "Year started" },
              { v: "100%", l: "Strategy-led" },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: "var(--syne)", fontWeight: 800, fontSize: "1.6rem", color: "var(--green)" }}>{s.v}</div>
                <div style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-faint)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 1: FEATURED PROJECTS ── */}
      <section id="featured-projects" style={{ padding: "5rem 2rem", background: "var(--bg2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="section-tag gsap-reveal">01 — Featured Projects</div>
          <h2 className="gsap-reveal" style={{
            fontFamily: "var(--syne)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "var(--text)", marginBottom: "3rem",
          }}>
            Brands we've<br /><span className="text-green">partnered with</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: "1.5rem" }}>
            {projects.map((p, i) => <ProjectCard key={i} p={p} flip={i % 2 === 1} />)}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CLIENT RESULTS ── */}
      <section id="client-results" style={{ padding: "5rem 2rem", background: "var(--bg)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <div className="section-tag gsap-reveal-left">02 — Client Results</div>
              <h2 className="gsap-reveal-left" style={{
                fontFamily: "var(--syne)", fontWeight: 800,
                letterSpacing: "-0.03em", color: "var(--text)", marginBottom: "1.25rem",
              }}>
                What we've<br /><span className="text-green">delivered</span>
              </h2>
              <p className="gsap-reveal-left" style={{
                fontFamily: "var(--outfit)", fontWeight: 300,
                color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "2rem",
              }}>
                Every result below is the product of strategy-first thinking — not guesswork or random content. These are the systems and outcomes built for real Sri Lankan brands in 2026.
              </p>

              {/* Result blocks */}
              {[
                { client: "Nutribiocare.lk", results: ["Structured Meta ad funnel architecture", "Repositioned as skincare education brand", "Reduced reliance on random ad boosting", "Long-term performance tracking system"], accent: "#39FF14" },
                { client: "Ceylonry Life Care", results: ["End-to-end growth strategy for healthcare", "Lead generation system designed for LK market", "Defined brand positioning in health sector", "Content and social media direction"], accent: "#A8FFB0" },
              ].map((c, i) => (
                <div key={i} className="gsap-reveal-left card" style={{ marginBottom: "1rem", background: "var(--surface)" }}>
                  <p style={{ fontFamily: "var(--syne)", fontWeight: 700, fontSize: "0.9rem", color: c.accent, marginBottom: "0.75rem" }}>{c.client}</p>
                  {c.results.map((r, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", marginBottom: "0.4rem" }}>
                      <span style={{ color: c.accent, fontSize: "0.6rem", marginTop: "0.35rem", flexShrink: 0 }}>◆</span>
                      <span style={{ fontFamily: "var(--outfit)", fontSize: "0.78rem", color: "var(--text-muted)", lineHeight: 1.6 }}>{r}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Right: 3D rotating metrics panel */}
            <div className="gsap-reveal-right" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { title: "Industries Served", value: "Healthcare · Skincare", accent: "#39FF14" },
                { title: "Channels Managed", value: "Meta · Instagram · Facebook", accent: "#A8FFB0" },
                { title: "Deliverables", value: "Funnels · Strategy · Content · Positioning", accent: "#60a5fa" },
                { title: "Approach", value: "Strategy-First · Data-Driven · Human-Centered", accent: "#f0a830" },
                { title: "Market Focus", value: "Sri Lanka — with global thinking", accent: "#818cf8" },
              ].map((m, i) => (
                <div key={i}
                  className="gsap-reveal-scale"
                  style={{
                    padding: "1rem 1.25rem",
                    background: "var(--surface)",
                    border: `1px solid ${m.accent}18`,
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    transition: "all 0.25s",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.transform = "translateX(6px) scale(1.01)";
                    el.style.borderColor = `${m.accent}55`;
                    el.style.boxShadow = `0 4px 24px ${m.accent}12`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.transform = "";
                    el.style.borderColor = `${m.accent}18`;
                    el.style.boxShadow = "";
                  }}
                >
                  <span style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-faint)" }}>{m.title}</span>
                  <span style={{ fontFamily: "var(--outfit)", fontSize: "0.78rem", color: m.accent, textAlign: "right", maxWidth: "55%" }}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: GROWTH PROCESS ── */}
      <section id="growth-process" style={{ padding: "5rem 2rem", background: "var(--bg2)", position: "relative", overflow: "hidden" }}>
        <div style={{
          position: "absolute", bottom: 0, right: 0,
          width: 400, height: 400,
          background: "radial-gradient(circle at bottom right, rgba(57,255,20,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
          <div className="section-tag gsap-reveal">03 — Growth Process</div>
          <h2 className="gsap-reveal" style={{
            fontFamily: "var(--syne)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "var(--text)", marginBottom: "3rem",
          }}>
            How we build<br /><span className="text-green">sustainable growth</span>
          </h2>

          {/* Interactive steps */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3rem", alignItems: "start" }}>
            {/* Step list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {processSteps.map((s, i) => (
                <button key={i}
                  onClick={() => setActiveStep(i)}
                  style={{
                    all: "unset",
                    padding: "1.1rem 1.25rem",
                    borderLeft: `2px solid ${i === activeStep ? "var(--green)" : "var(--border-dim)"}`,
                    background: i === activeStep ? "var(--surface)" : "transparent",
                    cursor: "pointer",
                    display: "flex", alignItems: "center", gap: "1rem",
                    transition: "all 0.25s",
                    marginBottom: "0.25rem",
                  }}
                  onMouseEnter={e => { if (i !== activeStep) { (e.currentTarget as HTMLElement).style.background = "var(--surface)"; } }}
                  onMouseLeave={e => { if (i !== activeStep) { (e.currentTarget as HTMLElement).style.background = "transparent"; } }}
                >
                  <span style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", color: i === activeStep ? "var(--green)" : "var(--text-faint)", letterSpacing: "0.1em", minWidth: "2rem" }}>{s.num}</span>
                  <span style={{ fontFamily: "var(--syne)", fontWeight: 700, fontSize: "0.9rem", color: i === activeStep ? "var(--green)" : "var(--text-muted)" }}>{s.title}</span>
                  <span style={{ marginLeft: "auto", fontSize: "1rem", color: i === activeStep ? "var(--green)" : "var(--text-faint)", opacity: 0.7 }}>{s.icon}</span>
                </button>
              ))}
            </div>

            {/* Active step detail - 3D card */}
            <div key={activeStep} style={{
              padding: "2rem",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
              position: "relative",
              animation: "fadeUp 0.4s ease forwards",
            }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 20, height: 20, background: "var(--green)", clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
              <div style={{ fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--green)", marginBottom: "0.75rem" }}>Step {processSteps[activeStep].num}</div>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem", color: "var(--green)" }}>{processSteps[activeStep].icon}</div>
              <h3 style={{ fontFamily: "var(--syne)", fontWeight: 800, fontSize: "1.4rem", color: "var(--text)", marginBottom: "1rem", letterSpacing: "-0.02em" }}>{processSteps[activeStep].title}</h3>
              <p style={{ fontFamily: "var(--outfit)", fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.9 }}>{processSteps[activeStep].desc}</p>

              {/* Progress bar */}
              <div style={{ marginTop: "2rem", display: "flex", gap: "4px" }}>
                {processSteps.map((_, i) => (
                  <div key={i} style={{ flex: 1, height: 3, background: i <= activeStep ? "var(--green)" : "var(--border-dim)", transition: "background 0.3s" }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CREATIVE GALLERY ── */}
      <section id="creative-gallery" style={{ padding: "5rem 2rem", background: "var(--bg)", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div className="section-tag gsap-reveal">04 — Creative Gallery</div>
              <h2 className="gsap-reveal" style={{ fontFamily: "var(--syne)", fontWeight: 800, letterSpacing: "-0.03em", color: "var(--text)" }}>
                Work samples &<br /><span className="text-green">creative assets</span>
              </h2>
            </div>
            <p className="gsap-reveal" style={{ fontFamily: "var(--outfit)", fontSize: "0.8rem", color: "var(--text-faint)", maxWidth: 280, lineHeight: 1.7, textAlign: "right" }}>
              Image placeholders — replace with real campaign screenshots, brand decks, and creative work.
            </p>
          </div>

          {/* Floating grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "1.5rem",
            padding: "1rem 0 2rem",
          }}>
            {galleryItems.map((item, i) => (
              <GalleryCard key={i} item={item} idx={i} />
            ))}
          </div>

          <p style={{
            fontFamily: "var(--mono)", fontSize: "0.6rem", letterSpacing: "0.1em",
            color: "var(--text-faint)", textAlign: "center", marginTop: "1rem",
          }}>
            [ Add your campaign screenshots, brand assets, and creative work to replace the placeholders above ]
          </p>
        </div>
      </section>

      {/* ── SECTION 5: TESTIMONIALS ── */}
      <section id="testimonials" style={{ padding: "5rem 2rem 7rem", background: "var(--bg2)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="section-tag gsap-reveal">05 — Testimonials</div>
          <h2 className="gsap-reveal" style={{
            fontFamily: "var(--syne)", fontWeight: 800,
            letterSpacing: "-0.03em", color: "var(--text)", marginBottom: "3rem",
          }}>
            What clients<br /><span className="text-green">are saying</span>
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {testimonials.map((t, i) => {
              const ref = useRef<HTMLDivElement>(null);
              return (
                <TestimonialCard key={i} t={t} idx={i} />
              );
            })}
          </div>

          {/* CTA */}
          <div className="gsap-reveal" style={{
            marginTop: "4rem",
            padding: "2.5rem",
            border: "1px solid var(--border)",
            background: "var(--green-glow)",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            flexWrap: "wrap", gap: "1.5rem",
            clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)",
          }}>
            <div>
              <h3 style={{ fontFamily: "var(--syne)", fontWeight: 800, fontSize: "1.2rem", color: "var(--text)", marginBottom: "0.4rem" }}>
                Ready to be our next <span className="text-green">success story?</span>
              </h3>
              <p style={{ fontFamily: "var(--outfit)", fontSize: "0.82rem", color: "var(--text-muted)" }}>Let's build your growth system — starting with a discovery call.</p>
            </div>
            <Link href="/contact" className="btn-primary" style={{ flexShrink: 0 }}>Start Your Project ↗</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* Testimonial Card extracted to avoid hook in map */
function TestimonialCard({ t, idx }: { t: typeof testimonials[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useTilt(ref);

  return (
    <div
      ref={ref}
      className="gsap-reveal-scale"
      style={{
        padding: "1.75rem",
        background: "var(--surface)",
        border: `1px solid ${t.accent}18`,
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 0.3s, border-color 0.3s",
        willChange: "transform",
        clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget;
        el.style.boxShadow = `0 12px 40px ${t.accent}15`;
        el.style.borderColor = `${t.accent}44`;
      }}
      onMouseLeave={e => {
        const el = e.currentTarget;
        el.style.boxShadow = "none";
        el.style.borderColor = `${t.accent}18`;
      }}
    >
      <div style={{ position: "absolute", top: 0, right: 0, width: 16, height: 16, background: t.accent, clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />

      {/* Quote mark */}
      <div style={{ fontFamily: "var(--serif, Georgia)", fontSize: "3rem", color: t.accent, opacity: 0.3, lineHeight: 1, marginBottom: "0.5rem" }}>"</div>

      <blockquote style={{
        fontFamily: "var(--outfit)", fontSize: "0.85rem", fontStyle: "italic",
        color: "var(--text-muted)", lineHeight: 1.85, marginBottom: "1.25rem",
      }}>
        {t.quote}
      </blockquote>

      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", borderTop: "1px solid var(--border-dim)", paddingTop: "1rem" }}>
        <div style={{
          width: 36, height: 36, flexShrink: 0,
          background: `${t.accent}18`,
          border: `1px solid ${t.accent}44`,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--syne)", fontWeight: 800, fontSize: "0.65rem", color: t.accent,
          clipPath: "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)",
        }}>{t.initials}</div>
        <div>
          <p style={{ fontFamily: "var(--syne)", fontWeight: 700, fontSize: "0.78rem", color: "var(--text)" }}>{t.author}</p>
          <p style={{ fontFamily: "var(--mono)", fontSize: "0.58rem", color: t.accent, letterSpacing: "0.08em" }}>{t.role}</p>
        </div>
      </div>
    </div>
  );
}
