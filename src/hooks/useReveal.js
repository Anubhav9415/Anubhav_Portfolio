import { useRef, useState, useEffect } from "react";

/**
 * Returns [ref, isVisible].
 * Attach `ref` to any DOM element; `isVisible` flips to true
 * once the element enters the viewport (threshold = 12 %).
 */
export default function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // fire only once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
