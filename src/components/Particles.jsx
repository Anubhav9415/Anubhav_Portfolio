import { useRef, useEffect } from "react";

/**
 * Hyperspace / Warp-Speed Starfield Animation Background.
 * Renders glowing cyan, teal, green, white, and accent light streaks
 * radiating outward from the center in 3D perspective, matching the
 * futuristic cyberpunk warp aesthetic.
 */
export default function Particles({
  count = 380,
  speed = 3.5,
  fixed = true,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let cx = width / 2;
    let cy = height / 2;
    let targetCx = cx;
    let targetCy = cy;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      targetCx = width / 2;
      targetCy = height / 2;
    };

    window.addEventListener("resize", resize);

    // Color palette carefully matching the user reference screenshot:
    // Electric cyan, neon teal, mint, pure white, with subtle neon red/coral accent
    const PALETTE = [
      { r: 0,   g: 212, b: 255 }, // Electric Cyan (#00d4ff)
      { r: 0,   g: 245, b: 212 }, // Neon Mint (#00f5d4)
      { r: 16,  g: 185, b: 129 }, // Emerald Green (#10b981)
      { r: 56,  g: 189, b: 248 }, // Sky Blue (#38bdf8)
      { r: 255, g: 255, b: 255 }, // Ice White (#ffffff)
      { r: 244, g: 63,  b: 94  }, // Neon Coral/Red accent spark
    ];

    const MAX_DEPTH = 1100;
    const FOV = 320;

    // Initialize 3D particle field
    const particles = Array.from({ length: count }, () => {
      const isAccent = Math.random() < 0.04;
      const color = isAccent
        ? PALETTE[5]
        : PALETTE[Math.floor(Math.random() * 5)];

      return {
        x: (Math.random() - 0.5) * width * 2.5,
        y: (Math.random() - 0.5) * height * 2.5,
        z: Math.random() * MAX_DEPTH + 1,
        prevZ: 0,
        size: Math.random() * 1.5 + 0.8,
        color,
        isAccent,
        speedMult: Math.random() * 0.45 + 0.8,
      };
    });

    // Interactive mouse parallax to shift vanishing point smoothly
    const onMouseMove = (e) => {
      const mx = e.clientX;
      const my = e.clientY;
      targetCx = width / 2 + (mx - width / 2) * 0.06;
      targetCy = height / 2 + (my - height / 2) * 0.06;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Dynamic acceleration when the user scrolls
    let scrollBoost = 0;
    let scrollTimer = null;
    const onScroll = () => {
      scrollBoost = 4.5;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        scrollBoost = 0;
      }, 140);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf;
    let currentSpeed = speed;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation towards mouse target
      cx += (targetCx - cx) * 0.05;
      cy += (targetCy - cy) * 0.05;

      // Ease speed smoothly with scroll boost
      const targetSpeed = speed + scrollBoost;
      currentSpeed += (targetSpeed - currentSpeed) * 0.1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.prevZ = p.z;
        p.z -= currentSpeed * p.speedMult;

        // Reset particle when passing the camera view plane
        if (p.z <= 20) {
          p.z = MAX_DEPTH;
          p.prevZ = MAX_DEPTH;
          p.x = (Math.random() - 0.5) * width * 2.5;
          p.y = (Math.random() - 0.5) * height * 2.5;
        }

        // Project current leading position
        const k = FOV / p.z;
        const sx = cx + p.x * k;
        const sy = cy + p.y * k;

        // Project trailing position for the elongated light beam
        const trailSpeed = currentSpeed * 2.2 * p.speedMult;
        const pk = FOV / (p.prevZ + trailSpeed);
        const px = cx + p.x * pk;
        const py = cy + p.y * pk;

        // Reset if drifted beyond canvas bounds
        if (sx < -100 || sx > width + 100 || sy < -100 || sy > height + 100) {
          p.z = MAX_DEPTH;
          p.prevZ = MAX_DEPTH;
          p.x = (Math.random() - 0.5) * width * 2.5;
          p.y = (Math.random() - 0.5) * height * 2.5;
          continue;
        }

        // Compute depth-based opacity and radius
        const depthRatio = 1 - p.z / MAX_DEPTH;
        const alpha = Math.min(Math.max(depthRatio * 1.4, 0.12), 0.95);
        const radius = Math.max(p.size * (0.8 + depthRatio * 1.4), 0.7);

        // Draw light beam streak (radial from tail to head)
        const dx = sx - px;
        const dy = sy - py;
        const streakDist = Math.hypot(dx, dy);

        if (streakDist > 1) {
          const grad = ctx.createLinearGradient(px, py, sx, sy);
          grad.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`);
          grad.addColorStop(0.35, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.35})`);
          grad.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`);

          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(sx, sy);
          ctx.strokeStyle = grad;
          ctx.lineWidth = Math.min(radius * 1.25, 3.2);
          ctx.lineCap = "round";
          ctx.stroke();
        }

        // Leading head particle
        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isAccent
          ? `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha})`
          : `rgba(255, 255, 255, ${Math.min(alpha * 1.2, 1)})`;
        ctx.fill();

        // Soft ambient glow halo around nearest/fastest particles
        if (depthRatio > 0.55) {
          ctx.beginPath();
          ctx.arc(sx, sy, radius * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.22})`;
          ctx.fill();
        }
      }

      raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(scrollTimer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, [count, speed]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: fixed ? "fixed" : "absolute",
        top: 0,
        left: 0,
        width: fixed ? "100vw" : "100%",
        height: fixed ? "100vh" : "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
