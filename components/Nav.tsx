"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
      padding: "0.9rem 2rem",
      display: "flex", alignItems: "center", justifyContent: "space-between",
      transition: "all 0.3s",
      background: scrolled ? "rgba(11,15,14,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(57,255,20,0.08)" : "none",
    }}>
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <div style={{
          width: 28, height: 28, background: "var(--green)",
          clipPath: "polygon(0 0, 80% 0, 100% 20%, 100% 100%, 0 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span style={{ fontFamily: "var(--syne)", fontWeight: 800, fontSize: "0.65rem", color: "var(--bg)" }}>M</span>
        </div>
        <span style={{ fontFamily: "var(--syne)", fontWeight: 800, fontSize: "0.9rem", color: "var(--text)", letterSpacing: "-0.02em" }}>
          MarSales<span style={{ color: "var(--green)" }}>360</span>
        </span>
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
        {links.map(l => (
          <Link key={l.label} href={l.href} style={{
            fontFamily: "var(--outfit)", fontSize: "0.8rem", fontWeight: 400,
            color: pathname === l.href ? "var(--green)" : "var(--text-muted)",
            textDecoration: "none", transition: "color 0.2s",
            borderBottom: pathname === l.href ? "1px solid var(--green)" : "1px solid transparent",
            paddingBottom: "2px",
          }}>
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="btn-primary" style={{ fontSize: "0.72rem", padding: "0.55rem 1.2rem" }}>
          Get Started ↗
        </Link>
      </div>

      <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "4px" }} className="flex md:hidden" aria-label="Menu">
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          {[0,1,2].map(i => <span key={i} style={{ display: "block", width: 22, height: 1.5, background: "var(--green)" }} />)}
        </div>
      </button>

      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, background: "var(--bg)", zIndex: 300,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.8rem",
        }}>
          <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: "1.5rem", right: "2rem", background: "none", border: "none", color: "var(--green)", fontSize: "2rem", cursor: "pointer" }}>×</button>
          {links.map(l => (
            <Link key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: "var(--syne)", fontSize: "1.8rem", fontWeight: 700, color: "var(--text)", textDecoration: "none",
            }}>{l.label}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}
