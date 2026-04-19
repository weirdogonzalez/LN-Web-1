"use client";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PLANS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const st = { trigger: sectionRef.current, start: "top 75%", once: true };

      gsap.fromTo(
        ".pricing-head",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: st }
      );

      gsap.fromTo(
        ".plan-card",
        { y: 60, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { ...st, start: "top 78%" },
        }
      );

      gsap.fromTo(
        ".delivery-pill-wrap",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { ...st, start: "top 60%" },
        }
      );

      gsap.to(".plan-highlight-ring", {
        scale: 1.06,
        opacity: 0,
        duration: 1.8,
        ease: "power2.out",
        repeat: -1,
        delay: 1.5,
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} id="pricing" className="pricing">
      <div className="wrap">
        <div className="section-head pricing-head" style={{ opacity: 0 }}>
          <p className="eyebrow">Pricing</p>
          <h2 className="section-title">
            Four plans.{" "}
            <span className="italic-accent" style={{ fontSize: "0.9em" }}>
              One easy choice.
            </span>
          </h2>
          <p className="section-intro">
            Chef-cooked. Delivered daily. For the price of takeout you&apos;d regret.
          </p>
        </div>

        <div className="plans-grid">
          {PLANS.map((p) => (
            <div
              key={p.id}
              className={`plan-card${p.highlight ? " highlight" : ""}`}
              style={{ position: "relative" }}
            >
              {p.highlight && (
                <div
                  className="plan-highlight-ring"
                  style={{
                    position: "absolute",
                    inset: -4,
                    borderRadius: 26,
                    border: "2px solid var(--accent)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />
              )}
              {p.badge && <div className="plan-badge">{p.badge}</div>}
              <div className="plan-eyebrow">{p.eyebrow}</div>
              <div className="plan-name">{p.name}</div>
              <div style={{ fontSize: 12, color: "var(--soft)", marginTop: 2, fontWeight: 600 }}>
                {p.freq}
              </div>
              <div className={`plan-hero-price ${p.highlight ? "bold" : "dim"}`}>
                <div className="plan-hero-label">From</div>
                <div className="plan-hero-num">৳{p.price.toLocaleString()}</div>
                <div className="plan-hero-unit">/{p.period}</div>
              </div>
              <div className="plan-total-row">
                <span className="plan-total-label">{p.totalLabel}</span>
                <div>
                  <span className="plan-total-val">৳{p.perMeal}</span>
                  <span className="plan-total-per">/meal</span>
                </div>
              </div>
              <div className="plan-perks">
                {p.perks.map((perk) => (
                  <div key={perk} className="plan-perk">{perk}</div>
                ))}
              </div>
              <Link href="/subscribe" className="plan-cta" style={{ display: "block", textDecoration: "none" }}>
                Get started →
              </Link>
            </div>
          ))}
        </div>

        <div className="pricing-center delivery-pill-wrap" style={{ opacity: 0 }}>
          <div className="free-delivery-pill">
            <span className="dot" />
            Free delivery on all plans · Cancel anytime
          </div>
          <p style={{ fontSize: 13, color: "var(--soft)", marginTop: 12, textAlign: "center" }}>
            Prices include 5% VAT. Payment via bKash, Nagad, or card.
          </p>
        </div>
      </div>
    </div>
  );
}
