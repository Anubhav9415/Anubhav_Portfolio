export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,212,255,0.08)",
        padding: "28px 5%",
        textAlign: "center",
      }}
    >
      <p style={{ color: "#64748b", fontSize: 14, margin: 0 }}>
        Designed &amp; Built by{" "}
        <span style={{ color: "#00d4ff", fontWeight: 600 }}>
          Anubhav Kumar Mishra
        </span>{" "}
        · {year}
      </p>
    </footer>
  );
}
