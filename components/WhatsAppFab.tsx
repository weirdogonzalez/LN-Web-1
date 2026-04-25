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
        width: 60,
        height: 60,
        borderRadius: "50%",
        background: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textDecoration: "none",
        boxShadow: hover
          ? "0 10px 28px rgba(37,211,102,0.55)"
          : "0 6px 20px rgba(0,0,0,0.25)",
        transform: hover ? "scale(1.08)" : "scale(1)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="#fff"
        aria-hidden="true"
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.945 2.722.945.315 0 .602-.085.86-.216.46-.215.99-.874 1.09-1.376.028-.14.028-.286.028-.44 0-.228-.6-.6-.6-.6-.215-.115-.516-.172-.73-.215z"/>
        <path d="M25.88 6.12C23.22 3.46 19.71 2 15.98 2 8.28 2 2.02 8.26 2.02 15.96c0 2.46.64 4.87 1.86 6.99L2 30l7.24-1.9c2.05 1.11 4.36 1.71 6.73 1.71 7.7 0 13.96-6.26 13.96-13.96 0-3.73-1.45-7.24-4.05-9.73zm-9.9 21.45c-2.11 0-4.18-.57-5.98-1.64l-.43-.26-4.46 1.17 1.19-4.34-.28-.45a11.59 11.59 0 0 1-1.78-6.19c0-6.4 5.21-11.61 11.73-11.61 3.1 0 6.01 1.21 8.21 3.4a11.53 11.53 0 0 1 3.39 8.21c0 6.41-5.21 11.61-11.59 11.61z"/>
      </svg>
      <span
        style={{
          position: "absolute",
          right: "calc(100% + 12px)",
          top: "50%",
          transform: hover ? "translateY(-50%) translateX(0)" : "translateY(-50%) translateX(10px)",
          background: "#fff",
          color: "#111",
          fontSize: 14,
          fontWeight: 700,
          padding: "10px 14px",
          borderRadius: 24,
          boxShadow: "0 6px 20px rgba(0,0,0,0.18)",
          whiteSpace: "nowrap",
          opacity: hover ? 1 : 0,
          pointerEvents: "none",
          transition: "opacity 0.2s ease, transform 0.2s ease",
        }}
      >
        Chat with us on WhatsApp
      </span>
    </a>
  );
}
