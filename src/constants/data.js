export const COLORS = {
  bg: "#050c16",
  bgCard: "rgba(10,20,40,0.7)",
  accent: "#00d4ff",
  accent2: "#7c3aed",
  text: "#e2e8f0",
  muted: "#64748b",
  border: "rgba(0,212,255,0.15)",
  glow: "0 0 20px rgba(0,212,255,0.3)",
};

export const NAV_SECTIONS = ["home", "about", "skills", "services", "projects", "experience", "contact"];

export const SKILLS = [
  { name: "JavaScript",    level: 85, color: "#f7df1e" },
  { name: "React",         level: 82, color: "#61dafb" },
  { name: "Node.js",       level: 75, color: "#6da55f" },
  { name: "C++ / C",       level: 80, color: "#00d4ff" },
  { name: "HTML & CSS",    level: 90, color: "#e34f26" },
  { name: "React Native",  level: 70, color: "#7c3aed" },
  { name: "MongoDB",       level: 72, color: "#4db33d" },
  { name: "MySQL",         level: 70, color: "#00758f" },
  { name: "Firebase",      level: 75, color: "#ffcb2b" },
  { name: "AWS Cloud",     level: 68, color: "#ff9900" },
];

export const PROJECTS = [
  {
    title: "Sensai – AI Career Coach",
    period: "2026",
    desc: "An AI-powered career coaching platform featuring smart resume building, AI mock interviews with real-time feedback, personalized cover letter generation, and live industry insights — all tailored to accelerate your career growth.",
    tags: ["Next.js", "AI/ML", "Gemini API", "Prisma", "Tailwind CSS"],
    color: "#a855f7",
    liveDemo: "https://sensai-main-phi.vercel.app/",
    github: "https://github.com/Anubhav9415/SENSAI-MAIN",
  },
  {
    title: "Instagram Reach Analyzer",
    period: "2026",
    desc: "A data-driven analytics dashboard that visualizes Instagram engagement metrics, audience demographics, reach trends, and content performance — helping creators optimize their social media strategy.",
    tags: ["React", "Data Viz", "Analytics", "Vercel"],
    color: "#e1306c",
    liveDemo: "https://insta-audience-analyser.vercel.app/",
    github: "https://github.com/Anubhav9415/INSTA_AUDIENCE_ANALYSER",
  },
  {
    title: "FINDIT – Lost & Found App",
    period: "Nov 2025 – Jan 2026",
    desc: "Cross-platform mobile app using React Native (Expo) with Firebase Authentication, real-time item posting, search & claim system powered by Firebase Firestore.",
    tags: ["React Native", "Expo", "Firebase", "Firestore"],
    color: "#7c3aed",
  },
  {
    title: "Invoice Generator",
    period: "Jan 2025 – Mar 2025",
    desc: "Dynamic web-based invoice system with billing, tax calculation, email automation, and secure backend APIs for invoice delivery and storage.",
    tags: ["React", "Node.js", "APIs", "Email"],
    color: "#00d4ff",
  },
  {
    title: "Agribot",
    period: "2026",
    desc: "A web application designed for agricultural use-cases, providing solutions and assistance for farming.",
    tags: ["JavaScript", "Web App"],
    color: "#10b981",
  },
  {
    title: "Netflix Clone",
    period: "2025",
    desc: "A streaming platform UI clone made for learning purposes, replicating the core viewing experience.",
    tags: ["Java", "UI/UX", "Clone"],
    color: "#ef4444",
  },
];

export const CERTIFICATIONS = [
  { name: "AWS Cloud Practitioner" ,image: "AWS_Cloud_Practioner.png"},
  { name: "AWS Solutions Architect – Associate", image: "AWS_Solution_Architect.png" },
  { name: "AWS AI Practitioner", image: "AWS_AI_Practioner.png" },
  { name: "Cognizant Technoverse Hackathon 2026", image: "Cognizant_Hackathon.png" },
  { name: "Parul University Environmental Hackathon 2026", image: "Environmental_Hackathon.png" },
];

export const SOCIAL_LINKS = [
  { label: "GitHub",   value: "Anubhav9415",               href: "https://github.com/Anubhav9415",        color: "#94a3b8" },
  { label: "LinkedIn", value: "anubhav9415",                href: "https://linkedin.com/in/anubhav9415/",  color: "#0a66c2" },
  { label: "Email",    value: "anubhavmishra981@gmail.com", href: "mailto:anubhavmishra981@gmail.com",     color: "#00d4ff" },
  { label: "Phone",    value: "+91 9696089688",             href: "tel:+919696089688",                     color: "#7c3aed" },
];

export const TYPEWRITER_WORDS = [
  "Full-Stack Developer",
  "React Native Dev",
  "AWS Certified",
  "Problem Solver",
  "CS Undergrad",
];

export const SERVICES = [
  {
    id: "ai",
    title: "AI & LLM Integration",
    desc: "Building RAG systems and AI agents using Groq, OpenAI, and Vector databases to automate complex business logic.",
    icon: "Bot",
    color: "#00d4ff",
    glow: "0 0 15px rgba(0, 212, 255, 0.25)",
    desktopWidth: "58%",
  },
  {
    id: "browser",
    title: "Browser Extensions",
    desc: "Specialized in WhatsApp automation and productivity tools using the Plasmo framework and Chrome APIs.",
    icon: "LayoutGrid",
    color: "#a855f7",
    glow: "0 0 15px rgba(168, 85, 247, 0.25)",
    desktopWidth: "38%",
  },
  {
    id: "mobile",
    title: "Mobile Development",
    desc: "Developing cross-platform mobile experiences using React Native and Expo for high-performance iOS and Android apps.",
    icon: "Smartphone",
    color: "#3b82f6",
    glow: "0 0 15px rgba(59, 130, 246, 0.25)",
    desktopWidth: "38%",
  },
  {
    id: "web",
    title: "Full-Stack Web",
    desc: "Crafting scalable SEO-optimized platforms with Next.js 16, focusing on speed and modern architecture.",
    icon: "Globe",
    color: "#10b981",
    glow: "0 0 15px rgba(16, 185, 129, 0.25)",
    desktopWidth: "58%",
  },
  {
    id: "desktop",
    title: "Desktop & Automation",
    desc: "Custom Python-based desktop tools and automation scripts to streamline repetitive professional tasks.",
    icon: "Cpu",
    color: "#f59e0b",
    glow: "0 0 15px rgba(245, 158, 11, 0.25)",
    desktopWidth: "58%",
  },
  {
    id: "devops",
    title: "IT Support & DevOps",
    desc: "Infrastructure setup, SEO optimization, and professional IT support for software deployments.",
    icon: "Code",
    color: "#ec4899",
    glow: "0 0 15px rgba(236, 72, 153, 0.25)",
    desktopWidth: "38%",
  },
];

export const SERVICES_TECH = [
  "Next.js", "React Native", "Expo", "FastAPI", "Python", "Groq", "PostgreSQL", "Firebase", "Plasmo"
];
