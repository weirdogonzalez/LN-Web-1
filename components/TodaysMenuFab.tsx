"use client";
import { useState } from "react";
import Link from "next/link";

export default function TodaysMenuFab() {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href="/todaysmenu"
      aria-label="See today's menu"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      style={{
        position: "fixed",
        bottom: 24,
        right: 100,
        zIndex: 9999,
        height: 60,
        padding: "0 22px",
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: "var(--accent)",
        color: "#fff",
        textDecoration: "none",
        fontWeight: 800,
        fontSize: 15,
        letterSpacing: 0.2,
        borderRadius: 999,
        boxShadow: hover
          ? "0 10px 28px rgba(10,111,40,0.45)"
          : "0 6px 20px rgba(0,0,0,0.25)",
        transform: hover ? "scale(1.05)" : "scale(1)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <span aria-hidden="true" style={{ fontSize: 18, lineHeight: 1 }}>🍽️</span>
      <span>Today&apos;s Menu</span>
    </Link>
  );
}
