import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import RevealBox from "./RevealBox";
import { SOCIAL_LINKS } from "../constants/data";

const ICONS = {
  GitHub:   <Github size={20}/>,
  LinkedIn: <Linkedin size={20}/>,
  Email:    <Mail size={20}/>,
  Phone:    <Phone size={20}/>,
};

export default function Contact() {
  return (
    <section id="contact" style={{ padding:"100px 5%" }}>
      <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>

        <RevealBox>
          <h2 className="section-title" style={{ marginBottom:16, textTransform: "uppercase" }}>
            Establish <span>Connection</span>
          </h2>
          <p style={{ color:"#64748b", fontSize:16, lineHeight:1.8,
            maxWidth:500, margin:"0 auto 48px" }}>
            I'm currently looking for internship and collaboration opportunities.
            Whether you have a project in mind or just want to say hello — my inbox is open!
          </p>
        </RevealBox>

        {/* Contact cards */}
        <RevealBox delay={150}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:24, marginBottom:40 }}>
            {SOCIAL_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="cyber-card"
              >
                <div className="cyber-card-corner-tr"></div>
                <div className="cyber-card-corner-bl"></div>

                <div className="cyber-icon">
                  {ICONS[link.label]}
                </div>

                <p className="cyber-label">{link.label}</p>
                <p className="cyber-value">{link.value}</p>
              </a>
            ))}
          </div>
        </RevealBox>

        <RevealBox delay={250}>
          <a href="mailto:anubhavmishra981@gmail.com" style={{ textDecoration: "none" }}>
            <button className="cyber-btn">
              <Send size={20} className="waving-icon" /> SAY HELLO
            </button>
          </a>
        </RevealBox>

      </div>
    </section>
  );
}
