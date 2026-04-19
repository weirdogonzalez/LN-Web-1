"use client";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function BigCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const st = { trigger: sectionRef.current, start: "top 80%", once: true };

      gsap.fromTo(
        ".big-cta-eyebrow",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", scrollTrigger: st }
      );

      gsap.fromTo(
        ".big-cta-headline",
        { scale: 0.82, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { ...st, start: "top 82%" },
          delay: 0.1,
        }
      );

      gsap.fromTo(
        ".big-cta-sub",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: st,
          delay: 0.35,
        }
      );

      gsap.fromTo(
        ".big-cta-btn",
        { scale: 0.88, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.6)",
          scrollTrigger: st,
          delay: 0.5,
        }
      );

      // Parallax bg text on scroll
      gsap.to(".big-cta-bg-text", {
        x: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="big-cta">
      <div className="big-cta-bg-text" aria-hidden>
        EAT WELL LIVE LEAN
      </div>
      <div className="wrap big-cta-content">
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: 28, letterSpacing: "0.18em", color: "var(--accent-bright)", textTransform: "uppercase" }}>
            LEAN NATION
          </span>
        </div>
        <p className="eyebrow big-cta-eyebrow">Ready to start?</p>
        <h2 className="big-cta-headline">
          Wake up.{" "}
          <span className="italic-white" style={{ color: "var(--accent-bright)" }}>
            Breakfast
          </span>
          <br />
          is served.
        </h2>
        <p className="big-cta-sub">
          Chef-cooked every morning. At your door before 8am.
          <br />
          First delivery as early as tomorrow.
        </p>
        <div className="big-cta-row">
          <Link href="/subscribe" className="btn btn-white btn-lg big-cta-btn">
            Start my plan <span>→</span>
          </Link>
          <Link
            href="/menu"
            className="btn big-cta-btn"
            style={{ color: "rgba(255,255,255,0.7)", border: "1.5px solid rgba(255,255,255,0.25)" }}
          >
            See the menu
          </Link>
        </div>
        <p
          style={{
            marginTop: 20,
            fontSize: 12,
            color: "rgba(255,255,255,0.45)",
            letterSpacing: 0.3,
          }}
        >
          No commitment. Skip or cancel anytime.
        </p>
      </div>
    </div>
  );
}
