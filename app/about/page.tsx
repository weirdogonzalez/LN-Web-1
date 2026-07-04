"use client";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Footer from "@/components/Footer";

gsap.registerPlugin(useGSAP);

const TEAM = [
  {
    initials: "FQ",
    accent: "#0A6F28",
    name: "Fuad Quader",
    role: "Co-founder & Investor",
    bio: "During his years in the US, Fuad grew used to how easy it was to eat healthy — convenient, reliable options on every corner. When he moved back to Bangladesh, that simply didn't exist, and he decided to build it. That's how Lean Nation began. An entrepreneur turned investor, Fuad brings experience across real estate, finance, tech, IT, and transportation to the table, all in service of one goal: making healthy eating effortless in Bangladesh.",
  },
  {
    initials: "NA",
    accent: "#E48A1D",
    name: "Nadvie Ahmed",
    role: "Co-founder",
    bio: "Nadvie is a Dhaka-based restaurateur whose kitchens shaped how Lean Nation thinks about food — fresh, balanced, and worth looking forward to.",
  },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".about-hero-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".team-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          delay: 0.4,
        }
      );
    },
    { scope: pageRef }
  );

  return (
    <div ref={pageRef} className="faq-page">
      <div className="wrap">
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p className="eyebrow about-hero-text" style={{ opacity: 0 }}>
            About us
          </p>
          <h1
            className="display about-hero-text"
            style={{ fontSize: "clamp(48px,5.5vw,80px)", opacity: 0, marginTop: 8 }}
          >
            Inspired abroad.{" "}
            <span className="italic-accent" style={{ fontSize: "0.9em" }}>
              Brought home.
            </span>
          </h1>
          <p
            className="about-hero-text"
            style={{
              fontSize: 17,
              color: "var(--soft)",
              marginTop: 12,
              opacity: 0,
              lineHeight: 1.6,
            }}
          >
            Lean Nation was born from a simple idea: take the discipline of a
            professional kitchen and make it work for everyday life in Dhaka.
            Real food. Real consistency. No compromise.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            maxWidth: 880,
            margin: "64px auto 0",
          }}
        >
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="team-card"
              style={{
                background: "#fff",
                border: "1.5px solid var(--ink)",
                borderRadius: 20,
                padding: 28,
                boxShadow: "4px 4px 0 var(--ink)",
                opacity: 0,
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: m.accent,
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  fontWeight: 900,
                  letterSpacing: 1,
                  marginBottom: 18,
                  border: "3px solid var(--ink)",
                }}
              >
                {m.initials}
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  marginBottom: 4,
                  color: "var(--ink)",
                }}
              >
                {m.name}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 0.5,
                  color: "var(--accent)",
                  marginBottom: 14,
                }}
              >
                {m.role}
              </p>
              <p style={{ fontSize: 15, color: "var(--soft)", lineHeight: 1.65 }}>
                {m.bio}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 80 }}>
          <p style={{ fontSize: 15, color: "var(--soft)", marginBottom: 16 }}>
            Want to join the family? Get a week of meals on us.
          </p>
          <Link href="/subscribe" className="btn btn-primary btn-lg">
            Start my plan →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
