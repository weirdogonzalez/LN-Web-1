"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const BENEFITS = [
  {
    title: "Expert-backed planning",
    body: "Meals and macros built by our team — safe, effective, and aligned with your goals.",
  },
  {
    title: "Goal-oriented support",
    body: "Whether you're losing, gaining, or maintaining, the plan bends to your lifestyle.",
  },
  {
    title: "No guesswork on intake",
    body: "Calorie-counted, macro-balanced meals so you never wonder if you ate right.",
  },
  {
    title: "Disciplined habits, built in",
    body: "A fixed daily rhythm that turns eating well into the easiest part of your day.",
  },
  {
    title: "Ongoing support",
    body: "We're a WhatsApp or phone call away for the full length of your subscription.",
  },
  {
    title: "A system you can trust",
    body: "A repeatable, predictable cycle — you always know what's coming and when.",
  },
];

export default function WhyLeanNation() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const st = { trigger: sectionRef.current, start: "top 78%", once: true };

      gsap.fromTo(
        ".why-head",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: st }
      );

      gsap.fromTo(
        ".why-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: { ...st, start: "top 80%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <div
      ref={sectionRef}
      style={{ background: "var(--cream-2)", padding: "56px 0 72px" }}
    >
      <div className="wrap">
        <div
          className="section-head why-head"
          style={{ opacity: 0 }}
        >
          <p className="eyebrow">Why Lean Nation</p>
          <h2 className="section-title">
            Built to make eating well{" "}
            <span className="italic-accent" style={{ fontSize: "0.9em" }}>
              effortless.
            </span>
          </h2>
        </div>

        <div className="why-grid">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="why-card"
              style={{
                background: "#fff",
                border: "1.5px solid rgba(27,26,23,0.08)",
                borderRadius: 18,
                padding: "28px 24px",
                opacity: 0,
              }}
            >
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  marginBottom: 16,
                }}
              />
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: "-0.01em",
                  marginBottom: 8,
                  color: "var(--ink)",
                }}
              >
                {b.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: "var(--soft)",
                }}
              >
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
