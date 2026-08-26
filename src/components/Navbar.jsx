import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_SECTIONS } from "../constants/data";

export default function Navbar({ active, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (section) => {
    onNavigate(section);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(5,12,22,0.92)"
          : "rgba(5,12,22,0.6)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,212,255,0.08)",
        padding: "0 5%",
        transition: "background 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: 20,
            background: "linear-gradient(90deg,#00d4ff,#7c3aed)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
          }}
          onClick={() => handleNav("home")}
        >
          AKM<span style={{ color: "#00d4ff" }}>.</span>
        </div>

        {/* Desktop links */}
        <div className="desktop-nav">
          {NAV_SECTIONS.map((s) => (
            <a
              key={s}
              className={`nav-link${active === s ? " active" : ""}`}
              onClick={() => handleNav(s)}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
          <a
            href="https://github.com/Anubhav9415"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            GitHub
          </a>
        </div>

        {/* Hamburger (visible on mobile/tablet via CSS) */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(5,12,22,0.97)",
            borderTop: "1px solid rgba(0,212,255,0.08)",
            padding: "16px 5%",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {NAV_SECTIONS.map((s) => (
            <a
              key={s}
              className={`nav-link${active === s ? " active" : ""}`}
              onClick={() => handleNav(s)}
              style={{ fontSize: 16 }}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </a>
          ))}
          <a
            href="https://github.com/Anubhav9415"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            style={{ fontSize: 16 }}
            onClick={() => setMenuOpen(false)}
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
}
