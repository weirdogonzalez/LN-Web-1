"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TESTIMONIALS } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const st = { trigger: sectionRef.current, start: "top 75%", once: true };

      gsap.fromTo(
        ".testi-head",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: st }
      );

      // Fan-in from different directions
      const cards = sectionRef.current?.querySelectorAll(".testi-card");
      if (cards) {
        const origins = [{ x: -60, y: 0 }, { x: 0, y: 60 }, { x: 60, y: 0 }];
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { x: origins[i].x, y: origins[i].y, opacity: 0 },
            {
              x: 0,
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: i * 0.12,
              ease: "power3.out",
              scrollTrigger: { ...st, start: "top 78%" },
            }
          );
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="testi">
      <div className="wrap">
        <div className="section-head testi-head" style={{ opacity: 0 }}>
          <p className="eyebrow">Loved by professionals &amp; students across Dhaka</p>
          <h2 className="section-title">
            Dhaka&apos;s quietest{" "}
            <span className="italic-accent" style={{ fontSize: "0.9em" }}>
              life upgrade.
            </span>
          </h2>
        </div>

        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => {
            const parts = t.quote.split(t.hi);
            return (
              <div key={i} className="testi-card" style={{ opacity: 0 }}>
                <div className="testi-stars">{"★".repeat(t.stars)}</div>
                <p className="testi-quote">
                  &ldquo;{parts[0]}
                  <span className="hi">{t.hi}</span>
                  {parts[1]}&rdquo;
                </p>
                <div className="testi-person">
                  <div className="testi-av">{t.initials}</div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
