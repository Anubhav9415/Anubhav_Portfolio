import { useRef } from "react";
import {
  Code2, Layers, Server, Cpu, Globe,
  MonitorSmartphone, Database, Zap, Cloud,
} from "lucide-react";
import useReveal from "../hooks/useReveal";
import RevealBox from "./RevealBox";
import { SKILLS } from "../constants/data";

const ICONS = [
  <Code2 size={18}/>, <Layers size={18}/>, <Server size={18}/>,
  <Cpu size={18}/>,   <Globe size={18}/>,  <MonitorSmartphone size={18}/>,
  <Database size={18}/>, <Database size={18}/>, <Zap size={18}/>, <Cloud size={18}/>,
];

const EXTRA_TAGS = ["VS Code", "Git", "REST APIs", "Expo", "Problem Solving", "MS Office"];

function SkillBar({ skill, icon, index }) {
  const [ref, visible] = useReveal();

  return (
    <div ref={ref} style={{ marginBottom: 14 }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
        <div style={{ display:"flex", alignItems:"center", gap:6, fontSize:14 }}>
          <span style={{ color: skill.color }}>{icon}</span>
          {skill.name}
        </div>
        <span style={{ color:"#64748b", fontSize:13 }}>{skill.level}%</span>
      </div>

      <div style={{ background:"rgba(255,255,255,0.06)", borderRadius:99, height:6, overflow:"hidden" }}>
        <div style={{
          height:"100%",
          borderRadius:99,
          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
          width: visible ? `${skill.level}%` : "0%",
          transition: `width 1.2s ease ${index * 80}ms`,
          boxShadow: `0 0 8px ${skill.color}88`,
        }}/>
      </div>
    </div>
  );
}

export default function Skills() {
  const half = Math.ceil(SKILLS.length / 2);
  const left  = SKILLS.slice(0, half);
  const right = SKILLS.slice(half);

  return (
    <section id="skills" style={{ padding:"100px 5%", background:"rgba(0,212,255,0.02)" }}>
      <div className="section-inner">

        <RevealBox>
          <div className="section-header">
            <span className="section-label">What I Know</span>
            <h2 className="section-title">Technical <span>Skills</span></h2>
          </div>
        </RevealBox>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:40 }}>
          <div>
            {left.map((s, i) => (
              <SkillBar key={s.name} skill={s} icon={ICONS[i]} index={i} />
            ))}
          </div>
          <div>
            {right.map((s, i) => (
              <SkillBar key={s.name} skill={s} icon={ICONS[half + i]} index={i} />
            ))}
          </div>
        </div>

        <RevealBox delay={200}>
          <div style={{ marginTop:48, display:"flex", gap:12, flexWrap:"wrap", justifyContent:"center" }}>
            {EXTRA_TAGS.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </RevealBox>

      </div>
    </section>
  );
}
