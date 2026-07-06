import { Code2, Cloud } from "lucide-react";
import RevealBox from "./RevealBox";

const INFO_CARDS = [
  { label: "University", value: "Parul University" },
  { label: "Degree",     value: "B.Tech CSE" },
  { label: "CGPA",       value: "8.4 / 10" },
];

export default function About() {
  return (
    <section id="about" style={{ padding:"100px 5%", position:"relative" }}>
      <div className="section-inner">

        {/* Header */}
        <RevealBox>
          <div className="section-header">
            <span className="section-label">Who I Am</span>
            <h2 className="section-title">About <span>Me</span></h2>
          </div>
        </RevealBox>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:40, alignItems:"center" }}>

          {/* Avatar */}
          <RevealBox direction="left">
            <div style={{ position:"relative", display:"flex", justifyContent:"center" }}>
              {/* Outer ring */}
              <div style={{ width:200, height:200, borderRadius:"50%",
                border:"2px solid rgba(0,212,255,0.2)",
                background:"linear-gradient(135deg,rgba(0,212,255,0.1),rgba(124,58,237,0.1))",
                display:"flex", alignItems:"center", justifyContent:"center",
                animation:"float 5s ease-in-out infinite" }}>
                <img
                src="./Profile.jpg"
                alt="Anubhav Kumar Mishra"
                style={{
                width: 170,
                height: 170,
                borderRadius: "50%",
                objectFit: "cover",
               objectPosition: "top",}}
/>
              </div>

              {/* Orbiting icons */}
              <div style={{ position:"absolute", top:10, right:"15%",
                animation:"spin-slow 12s linear infinite" }}>
                <div style={{ width:48, height:48, borderRadius:"50%",
                  background:"rgba(0,212,255,0.1)", border:"1px solid rgba(0,212,255,0.3)",
                  display:"flex", alignItems:"center", justifyContent:"center", color:"#00d4ff" }}>
                  <Cloud size={20}/>
                </div>
              </div>

              <div style={{ position:"absolute", bottom:10, left:"10%",
                animation:"spin-slow 10s linear infinite reverse" }}>
                <div style={{ width:44, height:44, borderRadius:"50%",
                  background:"rgba(124,58,237,0.1)", border:"1px solid rgba(124,58,237,0.3)",
                  display:"flex", alignItems:"center", justifyContent:"center", color:"#a78bfa" }}>
                  <Code2 size={18}/>
                </div>
              </div>
            </div>
          </RevealBox>

          {/* Text + info grid */}
          <RevealBox direction="right">
            <h3 style={{ fontSize:22, fontWeight:700, marginBottom:16 }}>
              Computer Science Undergraduate
            </h3>
            <p style={{ color:"#64748b", lineHeight:1.8, marginBottom:20, fontSize:15 }}>
              I'm a passionate full-stack developer pursuing B.Tech in Computer Science at
              Parul University. I thrive on turning complex problems into
              elegant, scalable solutions.
            </p>
            <p style={{ color:"#64748b", lineHeight:1.8, marginBottom:28, fontSize:15 }}>
              With hands-on experience in React, Node.js, React Native, and Firebase, plus
              AWS certifications, I bridge the gap between frontend aesthetics and backend
              performance.
            </p>

            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
              {INFO_CARDS.map(item => (
                <div key={item.label} style={{
                  background:"rgba(0,212,255,0.04)",
                  border:"1px solid rgba(0,212,255,0.1)",
                  borderRadius:10, padding:"12px 16px",
                }}>
                  <p style={{ color:"#64748b", fontSize:12, margin:"0 0 4px",
                    textTransform:"uppercase", letterSpacing:"0.08em" }}>
                    {item.label}
                  </p>
                  <p style={{ color:"#e2e8f0", fontSize:14, fontWeight:600, margin:0 }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </RevealBox>

        </div>
      </div>
    </section>
  );
}
