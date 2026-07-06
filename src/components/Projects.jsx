import { MonitorSmartphone, FileText, Smartphone, Receipt, Leaf, Play, Brain, BarChart3, ExternalLink, Github } from "lucide-react";
import RevealBox from "./RevealBox";
import { PROJECTS } from "../constants/data";
import imgSensai from "../assets/Sensai.png";
import imgInsta from "../assets/Insta_Analyzer.png";
import imgFindit from "../assets/project-findit.png";
import imgInvoice from "../assets/project-invoice.jpg";
import imgAgribot from "../assets/Agribot.png";
import imgNetflix from "../assets/Netflix_Clone.png";

const ICONS = [
  <Brain size={22}/>,
  <BarChart3 size={22}/>,
  <MonitorSmartphone size={22}/>,
  <FileText size={22}/>,
  <Leaf size={22}/>,
  <Play size={22}/>,
];

const PROJECT_IMAGES = [imgSensai, imgInsta, imgFindit, imgInvoice, imgAgribot, imgNetflix];

// Fallback CSS banners for each project
const BANNERS = [
  {
    bg: "linear-gradient(135deg, #1a0033 0%, #581c87 50%, #1e1b4b 100%)",
    gridColor: "rgba(168,85,247,0.12)",
    glowColor: "#a855f7",
    previewIcon: <Brain size={48} strokeWidth={1}/>,
    previewColor: "#a855f7",
    label: "AI Platform",
  },
  {
    bg: "linear-gradient(135deg, #2d0a1e 0%, #831843 50%, #1a0a2e 100%)",
    gridColor: "rgba(225,48,108,0.12)",
    glowColor: "#e1306c",
    previewIcon: <BarChart3 size={48} strokeWidth={1}/>,
    previewColor: "#e1306c",
    label: "Analytics",
  },
  {
    bg: "linear-gradient(135deg, #12002e 0%, #3b0764 50%, #1a0040 100%)",
    gridColor: "rgba(167,139,250,0.12)",
    glowColor: "#7c3aed",
    previewIcon: <Smartphone size={48} strokeWidth={1}/>,
    previewColor: "#a78bfa",
    label: "Mobile App",
  },
  {
    bg: "linear-gradient(135deg, #001824 0%, #003d5c 50%, #001020 100%)",
    gridColor: "rgba(0,212,255,0.1)",
    glowColor: "#00d4ff",
    previewIcon: <Receipt size={48} strokeWidth={1}/>,
    previewColor: "#00d4ff",
    label: "Web App",
  },
  {
    bg: "linear-gradient(135deg, #022c22 0%, #065f46 50%, #020617 100%)",
    gridColor: "rgba(16,185,129,0.1)",
    glowColor: "#10b981",
    previewIcon: <Leaf size={48} strokeWidth={1}/>,
    previewColor: "#10b981",
    label: "Web App",
  },
  {
    bg: "linear-gradient(135deg, #450a0a 0%, #7f1d1d 50%, #000000 100%)",
    gridColor: "rgba(239,68,68,0.1)",
    glowColor: "#ef4444",
    previewIcon: <Play size={48} strokeWidth={1}/>,
    previewColor: "#ef4444",
    label: "Clone",
  },
];

// Per-project image display settings — controls how each banner image fits
const BANNER_IMAGE_STYLES = [
  { objectFit: "cover",   objectPosition: "center", padding: 0,  bg: "#050c16" },  // Sensai
  { objectFit: "cover",   objectPosition: "center", padding: 0,  bg: "#050c16" },  // Instagram
  { objectFit: "contain", objectPosition: "center", padding: 16, bg: "#12002e" },  // FindIT — square logo, needs contain + purple bg
  { objectFit: "contain", objectPosition: "center", padding: 16, bg: "#0f1538" },  // Invoice — tall logo, needs contain + dark blue bg
  { objectFit: "cover",   objectPosition: "center", padding: 0,  bg: "#050c16" },  // Agribot
  { objectFit: "cover",   objectPosition: "center", padding: 0,  bg: "#050c16" },  // Netflix
];

function ProjectBanner({ banner, period, color, image, index }) {
  const imgStyle = BANNER_IMAGE_STYLES[index] || BANNER_IMAGE_STYLES[0];

  return (
    <div style={{
      position: "relative",
      height: 220,
      background: image ? imgStyle.bg : banner.bg,
      overflow: "hidden",
    }}>
      {/* Actual image element for precise object-fit control */}
      {image && (
        <img
          src={image}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: imgStyle.objectFit,
            objectPosition: imgStyle.objectPosition,
            padding: imgStyle.padding,
            display: "block",
          }}
        />
      )}
      {/* Grid pattern */}
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.4 }}>
        <defs>
          <pattern id={`grid-${index}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={banner.gridColor} strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${index})`}/>
      </svg>

      {/* Glow orbs */}
      <div style={{
        position:"absolute", top:"30%", left:"30%",
        width:120, height:120, borderRadius:"50%",
        background:`radial-gradient(circle, ${banner.glowColor}44 0%, transparent 70%)`,
        filter:"blur(20px)",
      }}/>
      <div style={{
        position:"absolute", bottom:"-10%", right:"20%",
        width:80, height:80, borderRadius:"50%",
        background:`radial-gradient(circle, ${banner.glowColor}22 0%, transparent 70%)`,
        filter:"blur(15px)",
      }}/>

      {/* Centered preview */}
      {!image && (
        <div style={{
          position:"absolute", inset:0,
          display:"flex", flexDirection:"column",
          alignItems:"center", justifyContent:"center", gap:10,
        }}>
          <div style={{
            width:72, height:72, borderRadius:18,
            background:`${banner.glowColor}18`,
            border:`1px solid ${banner.glowColor}44`,
            display:"flex", alignItems:"center", justifyContent:"center",
            color: banner.previewColor,
            boxShadow:`0 0 30px ${banner.glowColor}33`,
          }}>
            {banner.previewIcon}
          </div>
          <span style={{
            fontSize:11, fontWeight:600, letterSpacing:"0.18em",
            color:`${banner.previewColor}99`,
            textTransform:"uppercase",
          }}>
            {banner.label}
          </span>
        </div>
      )}

      {/* Bottom gradient fade */}
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(to bottom, transparent 50%, rgba(5,12,22,0.95) 100%)",
      }}/>

      {/* Period badge */}
      <span style={{
        position:"absolute", top:12, right:12,
        fontSize:12, color:"#e2e8f0",
        background:"rgba(0,0,0,0.5)",
        backdropFilter:"blur(6px)",
        border:"1px solid rgba(255,255,255,0.1)",
        borderRadius:99, padding:"4px 12px",
      }}>
        {period}
      </span>

      {/* Colored bottom border line */}
      <div style={{
        position:"absolute", bottom:0, left:0, right:0,
        height:2,
        background:`linear-gradient(90deg, transparent, ${banner.glowColor}, transparent)`,
      }}/>
    </div>
  );
}

function ProjectCard({ project, icon, index, image }) {
  const hasLinks = project.liveDemo || project.github;

  return (
    <RevealBox delay={index * 120}>
      <div className="card project-card-hover" style={{ padding:0, overflow:"hidden", height:"100%", display:"flex", flexDirection:"column" }}>

        <ProjectBanner
          banner={BANNERS[index]}
          period={project.period}
          color={project.color}
          image={image}
          index={index}
        />

        <div style={{ padding:"22px 24px", flex:1, display:"flex", flexDirection:"column" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10 }}>
            <div style={{
              width:38, height:38, borderRadius:10, flexShrink:0,
              background:`${project.color}18`,
              border:`1px solid ${project.color}30`,
              display:"flex", alignItems:"center", justifyContent:"center",
              color: project.color,
            }}>
              {icon}
            </div>
            <h3 style={{ fontSize:17, fontWeight:700, margin:0 }}>{project.title}</h3>
          </div>

          <p style={{ color:"#64748b", fontSize:14, lineHeight:1.75, marginBottom:16, flex:1 }}>
            {project.desc}
          </p>

          <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom: hasLinks ? 16 : 0 }}>
            {project.tags.map(t => (
              <span key={t} className="tag" style={{
                borderColor:`${project.color}30`,
                color: project.color,
                background:`${project.color}08`,
              }}>
                {t}
              </span>
            ))}
          </div>

          {/* Live Demo & GitHub Buttons */}
          {hasLinks && (
            <div style={{ display:"flex", gap:10, marginTop:"auto", paddingTop:4 }}>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn"
                  style={{
                    display:"inline-flex",
                    alignItems:"center",
                    gap:7,
                    padding:"8px 18px",
                    borderRadius:8,
                    fontSize:13,
                    fontWeight:600,
                    fontFamily:"'Syne', sans-serif",
                    letterSpacing:"0.02em",
                    textDecoration:"none",
                    color:"#fff",
                    background:`linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                    border:"none",
                    cursor:"pointer",
                    transition:"all 0.3s ease",
                    boxShadow:`0 4px 20px ${project.color}40`,
                  }}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn-outline"
                  style={{
                    display:"inline-flex",
                    alignItems:"center",
                    gap:7,
                    padding:"8px 18px",
                    borderRadius:8,
                    fontSize:13,
                    fontWeight:600,
                    fontFamily:"'Syne', sans-serif",
                    letterSpacing:"0.02em",
                    textDecoration:"none",
                    color: project.color,
                    background:"transparent",
                    border:`1px solid ${project.color}50`,
                    cursor:"pointer",
                    transition:"all 0.3s ease",
                  }}
                >
                  <Github size={14} />
                  Source Code
                </a>
              )}
            </div>
          )}
        </div>

      </div>
    </RevealBox>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding:"100px 5%" }}>
      <div className="section-inner" style={{ maxWidth:1200 }}>

        <RevealBox>
          <div className="section-header">
            <span className="section-label">What I've Built</span>
            <h2 className="section-title">Featured <span>Projects</span></h2>
            <p style={{ color:"#64748b", fontSize:15, marginTop:12, maxWidth:600, margin:"12px auto 0" }}>
              A curated selection of projects showcasing full-stack development, AI integration, and modern web technologies.
            </p>
          </div>
        </RevealBox>

        {/* Featured Row — 2 new projects, larger cards */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"1fr 1fr",
          gap:28,
          marginBottom:28,
        }}>
          {PROJECTS.slice(0, 2).map((p, i) => (
            <ProjectCard key={p.title} project={p} icon={ICONS[i]} index={i} image={PROJECT_IMAGES[i]} />
          ))}
        </div>

        {/* Remaining projects — 2x2 grid */}
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:28 }}>
          {PROJECTS.slice(2).map((p, i) => (
            <ProjectCard key={p.title} project={p} icon={ICONS[i+2]} index={i+2} image={PROJECT_IMAGES[i+2]} />
          ))}
        </div>

      </div>
    </section>
  );
}
