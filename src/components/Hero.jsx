import { Github, Linkedin, Mail, Phone, ArrowUpRight, ChevronDown } from "lucide-react";
import Particles from "./Particles";
import TypeWriter from "./TypeWriter";
import { TYPEWRITER_WORDS } from "../constants/data";

const socials = [
  { icon: <Github size={18} />,   href: "https://github.com/Anubhav9415" },
  { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/anubhav9415/" },
  { icon: <Mail size={18} />,     href: "mailto:anubhavmishra981@gmail.com" },
  { icon: <Phone size={18} />,    href: "tel:+919696089688" },
];

export default function Hero({ onNavigate }) {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "80px 5% 0",
      }}
    >
      {/* Background effects */}
      <Particles />
      <div style={{ position:"absolute", top:"20%", right:"10%", width:400, height:400,
        background:"radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", bottom:"20%", left:"5%", width:300, height:300,
        background:"radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)", pointerEvents:"none" }}/>

      <div style={{ maxWidth:1100, margin:"0 auto", width:"100%", position:"relative", zIndex:1 }}>

        {/* Badge */}
        <div style={{ animation:"float 6s ease-in-out infinite", marginBottom:28 }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8,
            background:"rgba(0,212,255,0.08)", border:"1px solid rgba(0,212,255,0.2)",
            borderRadius:99, padding:"6px 16px" }}>
            <span style={{ width:8, height:8, borderRadius:"50%", background:"#22c55e",
              animation:"pulse-glow 2s infinite" }}/>
            <span style={{ fontSize:13, color:"#64748b" }}>Open to opportunities</span>
          </div>
        </div>

        {/* Heading */}
        <h1 style={{ fontSize:"clamp(2.4rem,6vw,4.2rem)", fontWeight:800, lineHeight:1.1,
          margin:"0 0 12px", letterSpacing:"-0.02em" }}>
          Hi, I'm{" "}
          <span className="gradient-text">Anubhav</span>
        </h1>

        <h2 style={{ fontSize:"clamp(1.4rem,4vw,2.6rem)", fontWeight:700, margin:"0 0 24px",
          color:"#94a3b8", letterSpacing:"-0.02em", minHeight:"1.4em" }}>
          <TypeWriter words={TYPEWRITER_WORDS} />
        </h2>

        <p style={{ fontSize:17, color:"#64748b", maxWidth:560, lineHeight:1.75, marginBottom:36 }}>
          Motivated CS undergrad at Parul University, passionate about building scalable
          web &amp; mobile applications. Skilled in React, Node.js, Firebase, and AWS cloud.
        </p>

        {/* CTAs */}
        <div style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:40 }}>
          <button className="btn-primary" onClick={() => onNavigate("projects")}>
            View Projects <ArrowUpRight size={16} style={{ display:"inline", marginLeft:4 }} />
          </button>
          <button className="btn-outline" onClick={() => onNavigate("contact")}>
            Get In Touch
          </button>
        </div>

        {/* Social icons */}
        <div style={{ display:"flex", gap:10 }}>
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer" className="social-btn">
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)",
        animation:"float 2s ease-in-out infinite" }}>
        <ChevronDown size={22} color="#64748b" />
      </div>
    </section>
  );
}
