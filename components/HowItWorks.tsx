"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEPS = [
  {
    n: 1,
    icon: "📋",
    title: "Pick your plan",
    body: "Weekly or monthly. 2 or 4 meals a day. Free delivery on every order — no lock-in.",
  },
  {
    n: 2,
    icon: "🍳",
    title: "We cook overnight",
    body: "Our chefs prepare your meals from scratch every night. Portion-weighed, macro-counted, fresh every morning.",
  },
  {
    n: 3,
    icon: "🌅",
    title: "Breakfast is waiting",
    body: "Your full day is at your door before you wake — by 8am. Open the bag and eat.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const st = {
        trigger: sectionRef.current,
        start: "top 72%",
        once: true,
      };

      // Section heading
      gsap.fromTo(
        ".how-head",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: st }
      );

      // Step cards slide up
      gsap.fromTo(
        ".step-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { ...st, start: "top 75%" },
        }
      );

      // Step number circles spin + scale in
      gsap.fromTo(
        ".step-num",
        { scale: 0, rotation: -180, opacity: 0 },
        {
          scale: 1,
          rotation: -4,
          opacity: 1,
          duration: 0.55,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: { ...st, start: "top 70%" },
          delay: 0.2,
        }
      );

      // Icons bounce in
      gsap.fromTo(
        ".step-icon",
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: "back.out(1.9)",
          scrollTrigger: { ...st, start: "top 68%" },
          delay: 0.35,
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="how-section">
      <div className="wrap">
        <div className="section-head how-head" style={{ opacity: 0 }}>
          <p className="eyebrow">How it works</p>
          <h2 className="section-title">
            Three steps.{" "}
            <span className="italic-accent" style={{ fontSize: "0.9em" }}>
              That&apos;s it.
            </span>
          </h2>
          <p className="section-intro">
            No apps to configure, no meal-choosing, no planning. We handle
            everything — you just eat.
          </p>
        </div>

        <div className="steps-grid">
          {STEPS.map((s) => (
            <div key={s.n} className="step-card">
              <div className="step-num">{s.n}</div>
              <div className="step-visual">
                <div className="step-icon">{s.icon}</div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
