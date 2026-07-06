import { useState } from "react";
import { Briefcase, GraduationCap, Award, CheckCircle2, Cloud, Sparkles, Trophy, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import RevealBox from "./RevealBox";
import { CERTIFICATIONS } from "../constants/data";
import cert3 from "../assets/AWS_AI_Practioner.png";
import cert1 from "../assets/AWS_Cloud_Practioner.png";
import cert2 from "../assets/AWS_Solution_Architect.png";
import cert4 from "../assets/Cognizant_Hackathon.png";
import cert5 from "../assets/Environmental_Hackathon.png";

const CERT_ICONS  = [
  <Cloud size={16}/>,
  <Cloud size={16}/>,
  <Sparkles size={16}/>,
  <Trophy size={16}/>,
  <Trophy size={16}/>
];

const CERT_IMAGES = [cert1, cert2, cert3, cert4, cert5];

function TimelineCard({ children, accentColor = "#00d4ff" }) {
  return (
    <div style={{ position:"relative", paddingLeft:24, borderLeft:`1px solid ${accentColor}30` }}>
      <div style={{
        position:"absolute", left:-5, top:5,
        width:10, height:10, borderRadius:"50%",
        background: accentColor,
        boxShadow:`0 0 15px ${accentColor}88`,
      }}/>
      <div className="card" style={{ padding:"20px 22px" }}>
        {children}
      </div>
    </div>
  );
}

export default function Experience() {
  const [activeCertIndex, setActiveCertIndex] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openCertModal = (index) => {
    setActiveCertIndex(index);
    setZoomLevel(1);
  };

  const closeCertModal = () => {
    setActiveCertIndex(null);
    setZoomLevel(1);
  };

  const nextCert = (e) => {
    e.stopPropagation();
    setActiveCertIndex((prev) => (prev + 1) % CERT_IMAGES.length);
    setZoomLevel(1);
  };

  const prevCert = (e) => {
    e.stopPropagation();
    setActiveCertIndex((prev) => (prev - 1 + CERT_IMAGES.length) % CERT_IMAGES.length);
    setZoomLevel(1);
  };

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoomLevel(prev => Math.max(prev - 0.25, 0.75));
  };

  return (
    <section id="experience" style={{ padding:"100px 5%", background:"rgba(124,58,237,0.03)" }}>
      <div className="section-inner">

        <RevealBox>
          <div className="section-header">
            <span className="section-label">My Journey</span>
            <h2 className="section-title">Experience &amp; <span>Education</span></h2>
          </div>
        </RevealBox>

        <div style={{ display:"flex", flexDirection:"column", gap:50 }}>

          {/* Experience Section */}
          <RevealBox direction="up">
            <h3 style={{ fontSize:18, fontWeight:600, color:"#00d4ff",
              letterSpacing:"0.05em", marginBottom:24,
              display:"flex", alignItems:"center", gap:8 }}>
              <Briefcase size={20}/> Work Experience
            </h3>
            <TimelineCard accentColor="#00d4ff">
              <div style={{ display:"flex", justifyContent:"space-between",
                alignItems:"flex-start", marginBottom:8 }}>
                <div>
                  <h4 style={{ fontSize:17, fontWeight:700, margin:"0 0 4px" }}>Web Development Intern</h4>
                  <p style={{ color:"#00d4ff", fontSize:14, margin:0, fontWeight:600 }}>Orphion Tech · Online</p>
                </div>
                <span style={{ fontSize:13, color:"#64748b", whiteSpace:"nowrap", marginLeft:10 }}>Jan–Mar 2026</span>
              </div>
              <ul style={{ color:"#64748b", fontSize:15, lineHeight:1.7, paddingLeft:16, margin:0 }}>
                <li>Built responsive web apps with HTML, CSS, JS, React &amp; Node.js</li>
                <li>Gained hands-on full-stack experience including DB integration and API work</li>
              </ul>
            </TimelineCard>
          </RevealBox>

          {/* Education Section */}
          <RevealBox direction="up" delay={150}>
            <h3 style={{ fontSize:18, fontWeight:600, color:"#a78bfa",
              letterSpacing:"0.05em", marginBottom:24,
              display:"flex", alignItems:"center", gap:8 }}>
              <GraduationCap size={20}/> Education
            </h3>
            <TimelineCard accentColor="#7c3aed">
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:8 }}>
                <div>
                  <h4 style={{ fontSize:17, fontWeight:700, margin:"0 0 4px" }}>B.Tech Computer Science</h4>
                  <p style={{ color:"#a78bfa", fontSize:14, margin:0, fontWeight:600 }}>Parul University</p>
                </div>
                <span style={{ fontSize:13, color:"#64748b", whiteSpace:"nowrap" }}></span>
              </div>
              <p style={{ color:"#64748b", fontSize:15, margin:0 }}>
                CGPA: <span style={{ color:"#e2e8f0", fontWeight:600 }}>8.4 / 10</span>
              </p>
            </TimelineCard>
          </RevealBox>

          {/* Certifications Section */}
          <div style={{ marginTop: 10 }}>
            <RevealBox direction="up" delay={300}>
              <h3 style={{ fontSize:18, fontWeight:600, color:"#ff9900",
                letterSpacing:"0.05em", marginBottom:24,
                display:"flex", alignItems:"center", gap:8 }}>
                <Award size={20}/> Certifications
              </h3>
            </RevealBox>

            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))", gap:24 }}>
              {CERTIFICATIONS.map((c, i) => (
                <RevealBox key={c.name} delay={400 + i * 120} direction="up">
                  <div style={{
                    border:"1px solid rgba(255,153,0,0.2)",
                    borderRadius:16,
                    overflow:"hidden",
                    width:"100%",
                    height:"100%",
                    display:"flex",
                    flexDirection:"column",
                    background: "linear-gradient(145deg, rgba(10,20,40,0.6) 0%, rgba(5,12,22,0.8) 100%)",
                    transition:"transform 0.3s, border-color 0.3s, box-shadow 0.3s",
                    cursor:"pointer"
                  }}
                    onClick={() => openCertModal(i)}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.borderColor = "rgba(255,153,0,0.5)";
                      e.currentTarget.style.boxShadow = "0 20px 40px rgba(255,153,0,0.1)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "rgba(255,153,0,0.2)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ flex: 1, display:"flex", alignItems:"center", justifyContent:"center", background:"rgba(0,0,0,0.3)", padding:"20px" }}>
                      <img
                        src={CERT_IMAGES[i]}
                        alt={c.name}
                        style={{
                          width:"100%", height:"100%", maxHeight:200,
                          objectFit:"contain", display:"block",
                          transition:"transform 0.3s ease"
                        }}
                      />
                    </div>
                    <div style={{
                      display:"flex", alignItems:"center", gap:10,
                      background:"rgba(255,153,0,0.05)", padding:"14px 16px",
                      borderTop:"1px solid rgba(255,153,0,0.1)",
                    }}>
                      <span style={{ color:"#ff9900", display:"flex", alignItems:"center" }}>{CERT_ICONS[i]}</span>
                      <span style={{ fontSize:14, fontWeight:600, lineHeight:1.3, color:"#e2e8f0" }}>{c.name}</span>
                      <CheckCircle2 size={16} color="#22c55e" style={{ marginLeft:"auto", flexShrink:0 }}/>
                    </div>
                  </div>
                </RevealBox>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Interactive Certification Lightbox Modal */}
      {activeCertIndex !== null && (
        <div 
          onClick={closeCertModal}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(3, 7, 18, 0.85)",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            animation: "fadeSlideUp 0.3s ease-out"
          }}
        >
          {/* Top toolbar */}
          <div 
            onClick={e => e.stopPropagation()}
            style={{
              position: "absolute",
              top: 24,
              left: 24,
              right: 24,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#fff"
            }}
          >
            <h4 style={{ margin: 0, fontSize: 18, fontWeight: 700, fontFamily: "'Syne', sans-serif" }}>
              {CERTIFICATIONS[activeCertIndex].name}
            </h4>
            
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              {/* Zoom Controls */}
              <button 
                onClick={handleZoomOut}
                title="Zoom Out"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
              >
                <ZoomOut size={18} />
              </button>
              <span style={{ fontSize: 13, minWidth: 40, textAlign: "center", fontWeight: 600 }}>{Math.round(zoomLevel * 100)}%</span>
              <button 
                onClick={handleZoomIn}
                title="Zoom In"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#fff",
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.15)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.08)"}
              >
                <ZoomIn size={18} />
              </button>

              {/* Close Button */}
              <button 
                onClick={closeCertModal}
                style={{
                  background: "rgba(239,68,68,0.15)",
                  border: "1px solid rgba(239,68,68,0.3)",
                  color: "#ef4444",
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                  marginLeft: 10
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(239,68,68,0.25)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(239,68,68,0.15)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Navigation Controls & Image Area */}
          <div style={{ display: "flex", width: "100%", height: "70vh", alignItems: "center", justifyContent: "space-between", marginTop: 40 }}>
            {/* Prev Button */}
            <button 
              onClick={prevCert}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                width: 50,
                height: 50,
                borderRadius: 25,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                marginLeft: 10
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
            >
              <ChevronLeft size={24} />
            </button>

            {/* Image Container with Scroll/Zoom */}
            <div 
              onClick={e => e.stopPropagation()}
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                overflow: "auto",
                padding: "20px"
              }}
            >
              <img 
                src={CERT_IMAGES[activeCertIndex]} 
                alt={CERTIFICATIONS[activeCertIndex].name}
                style={{
                  maxHeight: "90%",
                  maxWidth: "90%",
                  objectFit: "contain",
                  borderRadius: 8,
                  boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
                  transform: `scale(${zoomLevel})`,
                  transition: "transform 0.15s ease-out",
                  pointerEvents: zoomLevel > 1 ? "auto" : "none"
                }}
              />
            </div>

            {/* Next Button */}
            <button 
              onClick={nextCert}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                width: 50,
                height: 50,
                borderRadius: 25,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
                marginRight: 10
              }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Caption */}
          <div style={{ marginTop: 20, color: "#64748b", fontSize: 13, fontFamily: "monospace" }}>
            Use the buttons above to Zoom in/out, or click background to close. Certificate {activeCertIndex + 1} of {CERT_IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
}
