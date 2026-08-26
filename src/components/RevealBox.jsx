import useReveal from "../hooks/useReveal";

const TRANSFORMS = {
  up:    "translateY(40px)",
  down:  "translateY(-40px)",
  left:  "translateX(-40px)",
  right: "translateX(40px)",
  scale: "scale(0.9)",
};

/**
 * Wraps children in a div that fades + slides in when scrolled into view.
 *
 * Props:
 *   delay     – ms offset before the transition starts (default 0)
 *   direction – "up" | "down" | "left" | "right" | "scale" (default "up")
 *   duration  – transition duration in ms (default 700)
 */
export default function RevealBox({
  children,
  delay = 0,
  direction = "up",
  duration = 700,
}) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "none" : TRANSFORMS[direction],
        transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
