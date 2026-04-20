"use client";
import { useState } from "react";

const PHONE = "8801400334043";
const MESSAGE = "Hi Lean Nation! I'd like to know more about your meal plans.";
const HREF = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

export default function WhatsAppFab() {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Lean Nation on WhatsApp"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: 12,
        textDecoration: "none",
      }}
    >
      <span
        style={{
          background: "#fff",
          color: "#111",
          fontSize: 14,
          fontWeight: 700,
          padding: "10px 14px",
          borderRadius: 24,
          boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
          whiteSpace: "nowrap",
          opacity: hover ? 1 : 0,
          transform: hover ? "translateX(0)" : "translateX(10px)",
          pointerEvents: "none",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      >
        Chat with us on WhatsApp
      </span>
      <span
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: hover
            ? "0 10px 28px rgba(37,211,102,0.55)"
            : "0 6px 20px rgba(0,0,0,0.25)",
          transform: hover ? "scale(1.08)" : "scale(1)",
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36 36"
          width="38"
          height="38"
          fill="#fff"
          aria-hidden="true"
        >
          <path d="M18 8a10 10 0 00-8.6 15.1L8 28l5.1-1.3A10 10 0 1018 8zm0 18a8 8 0 01-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1118 26z" />
          <path d="M14 15.5c-.2 0-.6.1-.9.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.1 1.3 0 1.8-.3.5-.4.9-1 1-1.5l.1-.6c0-.2-.1-.4-.3-.5l-2-.9c-.2-.1-.4-.1-.5.1l-.7.8c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.4-1.9-.1-.2 0-.4.1-.5l.5-.6c.1-.2.2-.4.1-.6l-.9-2.1c-.1-.2-.3-.4-.5-.4z" />
        </svg>
      </span>
    </a>
  );
}
