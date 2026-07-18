import { useState, useEffect, useRef } from "react";
import { MessageSquare, Send, X, Settings, Sparkles, User, ShieldAlert, Bot } from "lucide-react";
import { SKILLS, PROJECTS, CERTIFICATIONS, SOCIAL_LINKS } from "../constants/data";

export default function AiResponder() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "assistant",
      text: "Hi there! I am Anubhav's AI assistant. 🤖\n\nFeel free to ask me questions about his **skills**, **projects**, **certifications**, or **experience**. What can I help you discover today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [showNotification, setShowNotification] = useState(true);

  const messagesEndRef = useRef(null);

  // Load API Key from localStorage on mount
  useEffect(() => {
    const savedKey = localStorage.getItem("vite_gemini_api_key");
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isTyping]);

  // Alert user of incoming messages when widget is closed
  useEffect(() => {
    if (!isOpen && messages.length > 1) {
      setShowNotification(true);
    }
  }, [messages, isOpen]);

  // Construct context prompt for Gemini API
  const getSystemPrompt = () => {
    const skillsList = SKILLS.map(s => `• ${s.name}: ${s.level}% (Color: ${s.color})`).join("\n");
    const projectsList = PROJECTS.map(p => `• ${p.title} (${p.period}): ${p.desc}. Tags: ${p.tags.join(", ")}. ${p.liveDemo ? `Live: ${p.liveDemo}` : ""}. ${p.github ? `GitHub: ${p.github}` : ""}`).join("\n");
    const certsList = CERTIFICATIONS.map(c => `• ${c.name}`).join("\n");
    const socialsList = SOCIAL_LINKS.map(s => `• ${s.label}: ${s.value} (Link: ${s.href})`).join("\n");

    return `You are the interactive AI Portfolio Assistant for Anubhav Kumar Mishra (AKM).
Your goal is to answer questions about Anubhav in a professional, polite, and helpful manner.
Keep your answers brief and concise (typically 2-4 sentences or bullets), as you reside in a small floating chat window.
Always maintain a positive, encouraging tone. Focus on Anubhav's engineering talents.

Here is the exact information about Anubhav:
- Name: Anubhav Kumar Mishra (B.Tech CSE student at Parul University)
- CGPA: 8.4/10
- About: A passionate full-stack developer who bridges the gap between frontend aesthetics and backend performance. Experienced in React, React Native, Node.js, and Firebase.
- Skills:
${skillsList}
- Projects:
${projectsList}
- Certifications & Hackathons:
${certsList}
- Social Profiles & Contact Info:
${socialsList}

General Guidelines:
1. Use bullet points or bold text where appropriate to make information easy to scan.
2. If visitors ask about unrelated topics, politely guide them back to asking about Anubhav's professional background.
3. If they ask about his resume, guide them to the 'Download CV' button in the Hero section or tell them they can contact him.
4. Keep the styling clean and web-friendly. Use standard formatting.`;
  };

  // Local rule-based simulated intelligence
  const getLocalResponse = (query) => {
    const q = query.toLowerCase();
    
    // Scoring logic for keyword categories
    const categories = {
      greeting: {
        keywords: ["hi", "hello", "hey", "greetings", "yo", "who are you", "who is", "about", "bio", "intro"],
        score: 0,
        reply: "Hello! I am Anubhav's AI Assistant. 🤖\n\nI can tell you all about his projects, skills, education, certifications, and how to contact him. What would you like to know?"
      },
      projects: {
        keywords: ["project", "projects", "work", "apps", "sensai", "instagram", "insta", "reach analyzer", "findit", "lost", "found", "invoice", "netflix", "agribot", "portfolio"],
        score: 0,
        reply: "Here are some of Anubhav's key projects:\n\n• **Sensai – AI Career Coach (2026)**: Smart resume builder, mock interviews, and cover letter generator using Gemini API. [Live Demo](https://sensai-main-phi.vercel.app/) | [GitHub](https://github.com/Anubhav9415/SENSAI-MAIN)\n• **Instagram Reach Analyzer (2026)**: Data-driven engagement analytics dashboard. [Live Demo](https://insta-audience-analyser.vercel.app/) | [GitHub](https://github.com/Anubhav9415/INSTA_AUDIENCE_ANALYSER)\n• **FINDIT – Lost & Found App**: Cross-platform React Native (Expo) app connected to Firebase Firestore.\n• **Invoice Generator**: React & Node.js dynamic billing dashboard with email automation.\n• **Agribot**: Web application tailored for crop assistance and farming solutions.\n\nScroll to the **Projects** section of the portfolio to see live links and full specifications!"
      },
      skills: {
        keywords: ["skills", "skill", "technologies", "tech", "stack", "languages", "javascript", "react", "node", "cpp", "c++", "firebase", "mongodb", "mysql", "html", "css", "native"],
        score: 0,
        reply: "Anubhav is a full-stack engineer with expertise in multiple layers:\n\n• **Frontend**: HTML & CSS (90%), JavaScript (85%), React (82%), React Native (70%)\n• **Backend & DB**: Node.js (75%), MongoDB (72%), MySQL (70%), Firebase (75%)\n• **Cloud & Languages**: AWS Cloud (68%), C++ / C (80%)\n\nHe has a knack for creating gorgeous, responsive UIs and robust backend structures. You can check the details in the **Skills** section!"
      },
      certifications: {
        keywords: ["certifications", "certification", "certs", "cert", "aws", "solutions architect", "practitioner", "technoverse", "hackathon", "achievements", "credentials", "winner", "hackathons"],
        score: 0,
        reply: "Anubhav holds certifications in cloud and AI technologies, and has participated in key hackathons:\n\n• **AWS Certified Solutions Architect – Associate**\n• **AWS Certified Cloud Practitioner**\n• **AWS Certified AI Practitioner**\n• **Cognizant Technoverse Hackathon 2026** (Winner/Participant)\n• **Parul University Environmental Hackathon 2026** (Winner/Participant)\n\nScroll to the **Experience** section on this page to view his certification badges!"
      },
      contact: {
        keywords: ["contact", "email", "phone", "hire", "social", "github", "linkedin", "reach", "number", "mail", "connect"],
        score: 0,
        reply: "You can reach out to Anubhav directly through these methods:\n\n• **Email**: [anubhavmishra981@gmail.com](mailto:anubhavmishra981@gmail.com)\n• **Phone**: [+91 9696089688](tel:+919696089688)\n• **LinkedIn**: [linkedin.com/in/anubhav9415](https://linkedin.com/in/anubhav9415/)\n• **GitHub**: [github.com/Anubhav9415](https://github.com/Anubhav9415)\n\nHe is open to internships, collaboration, and developer roles!"
      },
      education: {
        keywords: ["education", "college", "university", "parul", "cgpa", "gpa", "degree", "btech", "b.tech", "study", "cse"],
        score: 0,
        reply: "Anubhav is pursuing his undergraduate studies:\n\n• **Degree**: Bachelor of Technology (B.Tech) in Computer Science & Engineering\n• **Institution**: Parul University\n• **CGPA**: 8.4 / 10\n\nHis curriculum covers Software Engineering, Algorithms, Database Systems, and Cloud Architectures."
      },
      resume: {
        keywords: ["resume", "cv", "download", "pdf", "cv.pdf"],
        score: 0,
        reply: "You can download Anubhav's resume directly! Go to the top of this page (the **Hero** section) and click the **Download CV** button. Alternatively, feel free to email him at [anubhavmishra981@gmail.com](mailto:anubhavmishra981@gmail.com) to request it!"
      }
    };

    // Calculate score based on keyword occurrences
    let bestMatch = null;
    let highestScore = 0;

    Object.keys(categories).forEach(cat => {
      let score = 0;
      categories[cat].keywords.forEach(kw => {
        if (q.includes(kw)) {
          score += 1;
        }
      });
      categories[cat].score = score;
      if (score > highestScore) {
        highestScore = score;
        bestMatch = cat;
      }
    });

    if (highestScore > 0 && bestMatch) {
      return categories[bestMatch].reply;
    }

    return "I am currently running in **Local Simulation Mode**. I can answer questions about Anubhav's:\n• **Projects** (Sensai, Insta Reach Analyzer, FINDIT)\n• **Skills** (React, React Native, Node.js, C++)\n• **Certifications** (AWS Solutions Architect, AI Practitioner)\n• **Contact info** (Email, LinkedIn, Phone)\n• **Education** (Parul University B.Tech CSE)\n\n*Tip: Click the gear icon (⚙️) at the top right to paste a **Gemini API Key** and unlock full conversational AI chat!*";
  };

  // Process and send message
  const handleSend = async (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Look for configured API key
    const envApiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const finalApiKey = apiKey || envApiKey;

    if (finalApiKey) {
      try {
        // Map messages into Gemini api history structure
        const apiHistory = messages.map(msg => ({
          role: msg.sender === "user" ? "user" : "model",
          parts: [{ text: msg.text }]
        }));

        // Add current prompt
        apiHistory.push({
          role: "user",
          parts: [{ text: text }]
        });

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${finalApiKey}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: apiHistory,
              systemInstruction: {
                parts: [{ text: getSystemPrompt() }]
              }
            }),
          }
        );

        if (!response.ok) {
          throw new Error("API call failed");
        }

        const data = await response.json();
        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I was unable to formulate a response. Please try again.";

        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: "assistant",
            text: replyText,
            timestamp: new Date(),
          },
        ]);
      } catch (err) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: "assistant",
            text: "⚠️ **Gemini API Error**: Could not generate content. Please make sure your API Key is correct and has access permission, or clear it in the settings (⚙️) to use Local Simulation Mode.",
            timestamp: new Date(),
          },
        ]);
      } finally {
        setIsTyping(false);
      }
    } else {
      // Local responder simulation (delayed for realistic feel)
      setTimeout(() => {
        const replyText = getLocalResponse(text);
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            sender: "assistant",
            text: replyText,
            timestamp: new Date(),
          },
        ]);
        setIsTyping(false);
      }, 1000);
    }
  };

  // Save key locally
  const handleSaveSettings = (newKey) => {
    localStorage.setItem("vite_gemini_api_key", newKey);
    setApiKey(newKey);
    setIsSettingsOpen(false);
    
    // Add confirmation message
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "assistant",
        text: newKey 
          ? "✅ **Gemini Live Mode Activated**! I will now answer your questions using the Gemini AI model." 
          : "ℹ️ **API Key Cleared**. Switched back to Local Simulation Mode.",
        timestamp: new Date(),
      }
    ]);
  };

  // Custom markdown renderer
  const parseMarkdown = (text) => {
    if (!text) return "";
    const lines = text.split("\n");
    const tokenRegex = /(\*\*.*?\*\*|\[.*?\]\(.*?\))/g;

    return lines.map((line, lineIdx) => {
      // Split tokens
      const tokens = line.split(tokenRegex);
      const parsedTokens = tokens.map((token, tokenIdx) => {
        if (token.startsWith("**") && token.endsWith("**")) {
          return <strong key={tokenIdx} style={{ color: "#fff", fontWeight: "600" }}>{token.slice(2, -2)}</strong>;
        }
        if (token.startsWith("[") && token.includes("](")) {
          const textMatch = token.match(/\[(.*?)\]/);
          const urlMatch = token.match(/\((.*?)\)/);
          if (textMatch && urlMatch) {
            return (
              <a
                key={tokenIdx}
                href={urlMatch[1]}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#00d4ff",
                  textDecoration: "underline",
                  fontWeight: "500",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {textMatch[1]}
              </a>
            );
          }
        }
        return token;
      });

      // Bullets check
      const isBullet = line.trim().startsWith("•") || line.trim().startsWith("*");
      if (isBullet) {
        const trimmedLine = line.trim();
        const remainingText = trimmedLine.substring(1).trim();
        const subTokens = remainingText.split(tokenRegex);
        const bulletContent = subTokens.map((token, tokenIdx) => {
          if (token.startsWith("**") && token.endsWith("**")) {
            return <strong key={tokenIdx} style={{ color: "#fff", fontWeight: "600" }}>{token.slice(2, -2)}</strong>;
          }
          if (token.startsWith("[") && token.includes("](")) {
            const textMatch = token.match(/\[(.*?)\]/);
            const urlMatch = token.match(/\((.*?)\)/);
            if (textMatch && urlMatch) {
              return (
                <a
                  key={tokenIdx}
                  href={urlMatch[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#00d4ff",
                    textDecoration: "underline",
                    fontWeight: "500",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {textMatch[1]}
                </a>
              );
            }
          }
          return token;
        });

        return (
          <li key={lineIdx} style={{ marginBottom: "6px", color: "#e2e8f0", fontSize: "13.5px" }}>
            {bulletContent}
          </li>
        );
      }

      return (
        <p key={lineIdx} style={{ margin: "0 0 8px 0", fontSize: "13.5px" }}>
          {parsedTokens}
        </p>
      );
    });
  };

  const formattedTime = (dateObj) => {
    return dateObj.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const suggestionChips = [
    "Tell me about your projects",
    "What are your core skills?",
    "Show AWS certifications",
    "How can I contact you?",
  ];

  return (
    <div className="ai-chat-bubble-container">
      {/* Floating Action Button */}
      {!isOpen && (
        <div className="ai-bubble-wrapper">
          {/* Hover Preview Card */}
          <div className="ai-hover-card">
            <div className="ai-hover-card-inner">
              <img
                src="./Profile.jpg"
                alt="Anubhav"
                className="ai-hover-card-avatar"
              />
              <div className="ai-hover-card-content">
                <h5 className="ai-hover-card-title">Chat with my AI</h5>
                <p className="ai-hover-card-text">
                  Ask me about my projects, skills, or certifications!
                </p>
              </div>
            </div>
            <div className="ai-hover-card-arrow"></div>
          </div>

          <button
            className="ai-chat-bubble"
            onClick={() => {
              setIsOpen(true);
              setShowNotification(false);
            }}
            aria-label="Open AI Assistant"
          >
            <div className="ai-chat-bubble-pulse pulse-1"></div>
            <div className="ai-chat-bubble-pulse pulse-2"></div>
            <div className="ai-chat-bubble-pulse pulse-3"></div>
            <img
              src="./Profile.jpg"
              alt="Anubhav"
              className="ai-chat-bubble-img"
            />
            {showNotification && (
              <span className="ai-chat-bubble-badge">1</span>
            )}
          </button>
        </div>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="ai-chat-window">
          {/* Header */}
          <div className="ai-chat-header">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="ai-chat-avatar-container">
                <img
                  src="./Profile.jpg"
                  alt="Anubhav"
                  className="ai-chat-avatar"
                />
                <span className="ai-chat-status-dot"></span>
              </div>
              <div className="ai-chat-header-info">
                <h4 className="ai-chat-header-title">AKM Assistant</h4>
                <p className="ai-chat-header-subtitle">
                  <Sparkles size={10} style={{ color: "#00d4ff" }} />
                  {apiKey || import.meta.env.VITE_GEMINI_API_KEY ? "Gemini 1.5 Active" : "Online Responder"}
                </p>
              </div>
            </div>
            
            <div className="ai-chat-header-actions">
              <button
                className="ai-chat-header-btn"
                onClick={() => setIsSettingsOpen(true)}
                title="Configure Gemini API Key"
              >
                <Settings size={18} />
              </button>
              <button
                className="ai-chat-header-btn"
                onClick={() => setIsOpen(false)}
                title="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Settings Screen Overlay */}
          {isSettingsOpen && (
            <SettingsPanel
              currentKey={apiKey}
              onClose={() => setIsSettingsOpen(false)}
              onSave={handleSaveSettings}
            />
          )}

          {/* Messages Panel */}
          <div className="ai-chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`ai-message ${msg.sender}`}>
                <div className="ai-message-content">
                  {parseMarkdown(msg.text)}
                </div>
                <span className="ai-message-time">{formattedTime(msg.timestamp)}</span>
              </div>
            ))}

            {isTyping && (
              <div className="ai-typing-container">
                <div className="ai-typing-indicator">
                  <span className="ai-typing-dot"></span>
                  <span className="ai-typing-dot"></span>
                  <span className="ai-typing-dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div className="ai-suggestions-container">
            {suggestionChips.map((chip, idx) => (
              <button
                key={idx}
                className="ai-suggestion-chip"
                onClick={() => handleSend(chip)}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            className="ai-chat-input-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input
              type="text"
              className="ai-chat-input"
              placeholder="Ask anything about Anubhav..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isTyping}
            />
            <button
              type="submit"
              className="ai-chat-send-btn"
              disabled={!inputValue.trim() || isTyping}
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

// Subcomponent: Settings overlay to add Gemini API key
function SettingsPanel({ currentKey, onClose, onSave }) {
  const [tempKey, setTempKey] = useState(currentKey);

  return (
    <div className="ai-settings-panel">
      <h3 className="ai-settings-title">Configure Gemini AI</h3>
      <p className="ai-settings-description">
        By default, the assistant runs in **Local Responder Mode**. Paste a Gemini API Key to enable dynamic, unrestricted conversational AI.
      </p>

      <div className="ai-settings-input-group">
        <label className="ai-settings-label">Gemini API Key</label>
        <input
          type="password"
          className="ai-settings-input"
          placeholder="AIzaSy..."
          value={tempKey}
          onChange={(e) => setTempKey(e.target.value)}
        />
        <p style={{ fontSize: "11px", color: "#64748b", margin: 0, display: "flex", gap: "4px", alignItems: "center" }}>
          <ShieldAlert size={12} /> Key is saved locally in your browser's localStorage.
        </p>
      </div>

      <div className="ai-settings-actions">
        <button
          className="btn-outline"
          style={{ flex: 1, padding: "8px 16px", fontSize: "13px" }}
          onClick={() => {
            setTempKey("");
            onSave("");
          }}
        >
          Clear Key
        </button>
        <button
          className="btn-primary"
          style={{ flex: 1, padding: "8px 16px", fontSize: "13px" }}
          onClick={() => onSave(tempKey)}
        >
          Save Key
        </button>
      </div>
      
      <button
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          background: "none",
          border: "none",
          color: "#64748b",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        <X size={18} />
      </button>
    </div>
  );
}
