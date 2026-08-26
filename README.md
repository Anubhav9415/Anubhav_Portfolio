# Anubhav Kumar Mishra — Portfolio

A fully animated, multi-file React portfolio built with Vite + Lucide icons.

## 📁 Project Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                  ← React entry point
    ├── App.jsx                   ← Root component (wires all sections)
    ├── styles/
    │   └── globals.css           ← Global styles, keyframes, utility classes
    ├── constants/
    │   └── data.js               ← All resume data (skills, projects, links …)
    ├── hooks/
    │   └── useReveal.js          ← IntersectionObserver scroll-reveal hook
    └── components/
        ├── Navbar.jsx            ← Sticky navigation bar
        ├── Hero.jsx              ← Hero section with typewriter + particles
        ├── About.jsx             ← About section with floating avatar
        ├── Skills.jsx            ← Animated skill progress bars
        ├── Projects.jsx          ← Project cards
        ├── Experience.jsx        ← Timeline: internship + education + certs
        ├── Contact.jsx           ← Contact grid + CTA
        ├── Footer.jsx            ← Footer
        ├── Particles.jsx         ← Canvas particle-network background
        ├── TypeWriter.jsx        ← Typewriter text animation
        └── RevealBox.jsx         ← Scroll-reveal wrapper component
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
# Output is in /dist — deploy to Netlify, Vercel, or GitHub Pages
```

## ✨ Features

- Animated particle-network hero background
- Typewriter effect cycling through roles
- Scroll-reveal animations on every section
- Animated skill progress bars
- Glassmorphism project cards with hover lift
- AWS certification badges
- Fully responsive layout
- Custom scrollbar styling
