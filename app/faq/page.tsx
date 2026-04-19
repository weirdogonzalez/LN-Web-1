"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FAQ_ITEMS } from "@/lib/data";
import Footer from "@/components/Footer";

gsap.registerPlugin(useGSAP);

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".faq-hero-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".faq-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06, ease: "power2.out", delay: 0.4 }
      );
    },
    { scope: pageRef }
  );

  const toggle = (i: number) => setOpenIdx(openIdx === i ? null : i);

  return (
    <div ref={pageRef} className="faq-page">
      <div className="wrap">
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p className="eyebrow faq-hero-text" style={{ opacity: 0 }}>FAQ</p>
          <h1
            className="display faq-hero-text"
            style={{ fontSize: "clamp(48px,5.5vw,80px)", opacity: 0, marginTop: 8 }}
          >
            Got{" "}
            <span className="italic-accent" style={{ fontSize: "0.9em" }}>
              questions?
            </span>
          </h1>
          <p
            className="faq-hero-text"
            style={{ fontSize: 17, color: "var(--soft)", marginTop: 12, opacity: 0 }}
          >
            Everything you need to know about Lean Nation.
          </p>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`faq-item${openIdx === i ? " open" : ""}`}
              onClick={() => toggle(i)}
            >
              <div className="faq-q">
                <span>{item.q}</span>
                <div className="faq-icon">+</div>
              </div>
              <div className={`faq-a${openIdx === i ? " open" : ""}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 56 }}>
          <p style={{ fontSize: 15, color: "var(--soft)", marginBottom: 16 }}>
            Still have questions? We&apos;re on WhatsApp.
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
