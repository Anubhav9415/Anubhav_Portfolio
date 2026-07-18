import { Bot, LayoutGrid, Smartphone, Globe, Cpu, Code } from "lucide-react";
import RevealBox from "./RevealBox";
import { SERVICES, SERVICES_TECH } from "../constants/data";

const ICONS = {
  Bot: Bot,
  LayoutGrid: LayoutGrid,
  Smartphone: Smartphone,
  Globe: Globe,
  Cpu: Cpu,
  Code: Code,
};

export default function Services() {
  return (
    <section id="services" style={{ padding: "100px 5%", position: "relative" }}>
      <div className="section-inner">
        {/* Header */}
        <RevealBox>
          <div className="section-header" style={{ textAlign: "left", marginBottom: 30 }}>
            <span className="section-label">What I Offer</span>
            <h2 className="section-title" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", textTransform: "uppercase", fontWeight: 800 }}>
              Services
            </h2>
          </div>
        </RevealBox>

        {/* Subtitle Box with Left Cyan Border */}
        <RevealBox delay={100}>
          <div className="services-subtitle-box">
            <p className="services-subtitle-text">
              High-performance engineering for the modern web, mobile, and AI landscape.
            </p>
          </div>
        </RevealBox>

        {/* Staggered Flex Grid */}
        <div className="services-flex-grid">
          {SERVICES.map((s, idx) => {
            const IconComponent = ICONS[s.icon] || Code;
            return (
              <div
                key={s.id}
                style={{ width: s.desktopWidth }}
                className="service-card-wrapper"
              >
                <RevealBox delay={150 + idx * 50}>
                  <div
                    className="service-card"
                    style={{
                      width: "100%",
                      border: `1px solid rgba(255, 255, 255, 0.05)`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = s.color;
                      e.currentTarget.style.boxShadow = s.glow;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div
                      className="service-icon-box"
                      style={{
                        border: `1px solid ${s.color}`,
                        color: s.color,
                        boxShadow: `0 0 10px rgba(${hexToRgb(s.color)}, 0.15)`,
                      }}
                    >
                      <IconComponent size={24} />
                    </div>
                    <h3 className="service-card-title">{s.title}</h3>
                    <p className="service-card-desc">{s.desc}</p>
                  </div>
                </RevealBox>
              </div>
            );
          })}
        </div>

        {/* Engineered With Footer Pills */}
        <RevealBox delay={400}>
          <div className="engineered-label">Engineered With</div>
          <div className="engineered-pills">
            {SERVICES_TECH.map((t, idx) => (
              <span key={idx} className="engineered-pill">
                {t}
              </span>
            ))}
          </div>
        </RevealBox>
      </div>
    </section>
  );
}

// Convert Hex to RGB for inline shadow styling
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : "0, 212, 255";
}
