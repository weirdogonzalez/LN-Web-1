"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const VALUES = [
  {
    num: 120,
    suffix: "",
    label: "meals a month",
    desc: "Breakfast, lunch, snack, dinner — seven days a week.",
    color: "var(--cream)",
    numColor: "var(--accent)",
  },
  {
    num: 8,
    suffix: "am",
    label: "at your door",
    desc: "Fresh-cooked overnight and delivered before you wake.",
    color: "var(--sun)",
    numColor: "var(--ink)",
  },
  {
    num: 0,
    suffix: "",
    label: "decisions",
    desc: "Menu by our chefs. Macros by our nutritionist. You just eat.",
    color: "var(--poppy)",
    numColor: "#fff",
    textColor: "#fff",
    descColor: "rgba(255,255,255,0.88)",
  },
];

export default function ValueStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const countRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      // Cards stagger in
      gsap.fromTo(
        ".value-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      );

      // Count-up animations
      VALUES.forEach((v, i) => {
        const el = countRefs.current[i];
        if (!el || v.num === 0) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: v.num,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            once: true,
          },
          onUpdate() {
            el.textContent = Math.round(obj.val).toString();
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="value-strip">
      <div className="wrap">
        <div className="value-grid">
          {VALUES.map((v, i) => (
            <div
              key={i}
              className="value-card"
              style={{
                background: v.color,
                color: v.textColor ?? "var(--ink)",
              }}
            >
              <div
                className="value-num"
                style={{ color: v.numColor }}
              >
                <span
                  ref={(el) => { countRefs.current[i] = el; }}
                >
                  {v.num}
                </span>
                {v.suffix && (
                  <span style={{ fontSize: "0.55em", letterSpacing: "-0.01em" }}>
                    {v.suffix}
                  </span>
                )}
              </div>
              <div className="value-label">{v.label}</div>
              <p
                className="value-desc"
                style={{ color: v.descColor ?? "var(--soft)" }}
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
