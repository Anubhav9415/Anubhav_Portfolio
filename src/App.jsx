import { useState, useEffect } from "react";

import "./styles/globals.css";

import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Skills     from "./components/Skills";
import Projects   from "./components/Projects";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";

import { NAV_SECTIONS } from "./constants/data";

export default function App() {
  const [active, setActive] = useState("home");

  /* Track which section is in view */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 100;
      NAV_SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) setActive(id);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Smooth-scroll to a named section */
  const navigateTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "#050c16", color: "#e2e8f0", overflowX: "hidden" }}>
      <Navbar active={active} onNavigate={navigateTo} />
      <Hero       onNavigate={navigateTo} />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
