import { useState, useEffect } from "react";

/**
 * Cycles through `words` with a typewriter effect.
 *
 * Props:
 *   words  – string[]  list of phrases to cycle through
 *   color  – CSS color for the text (default #00d4ff)
 */
export default function TypeWriter({ words = [], color = "#00d4ff" }) {
  const [index,   setIndex]   = useState(0);
  const [text,    setText]    = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = words[index];

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setDeleting(false);
          setIndex((index + 1) % words.length);
        }
      }
    }, deleting ? 55 : 90);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return (
    <span style={{ color }}>
      {text}
      <span
        style={{
          borderRight: `2px solid ${color}`,
          animation: "blink 1s step-end infinite",
          marginLeft: 2,
        }}
      />
    </span>
  );
}
