"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MENU } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const DAY = 3;
const day = MENU[DAY];
const MEALS = [
  { tag: "Breakfast", meal: day.breakfast, time: "7:30 – 9:00am" },
  { tag: "Lunch", meal: day.lunch, time: "12:30 – 2:00pm" },
  { tag: "Snack", meal: day.snack, time: "4:00 – 5:00pm" },
  { tag: "Dinner", meal: day.dinner, time: "8:00 – 9:00pm" },
];

export default function MenuTeaser() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const st = { trigger: sectionRef.current, start: "top 75%", once: true };

      gsap.fromTo(
        ".menu-head",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", scrollTrigger: st }
      );

      gsap.fromTo(
        ".meal-card",
        { y: 70, opacity: 0, rotation: 2 },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { ...st, start: "top 78%" },
        }
      );

      gsap.fromTo(
        ".menu-teaser-cta",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { ...st, start: "top 65%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef} className="menu-teaser">
      <div className="wrap">
        <div
          className="section-head menu-head"
          style={{ textAlign: "left", maxWidth: "none", marginBottom: 0, opacity: 0 }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <p className="eyebrow">Today&apos;s menu · Day {DAY}</p>
              <h2 className="section-title" style={{ maxWidth: 500 }}>
                What&apos;s on the{" "}
                <span className="italic-accent" style={{ fontSize: "0.9em" }}>
                  table today.
                </span>
              </h2>
            </div>
            <div
              style={{
                background: "#fff",
                border: "1.5px solid var(--ink)",
                borderRadius: 16,
                padding: "14px 20px",
                textAlign: "center",
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: "var(--soft)",
                }}
              >
                Day total
              </div>
              <div
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                  color: "var(--accent)",
                }}
              >
                {day.cal}
              </div>
              <div
                style={{ fontSize: 11, color: "var(--soft)", fontWeight: 600 }}
              >
                kcal · {day.protein}g protein
              </div>
            </div>
          </div>
        </div>

        <div className="menu-grid">
          {MEALS.map(({ tag, meal, time }) => (
            <div key={tag} className="meal-card">
              <div className="meal-img">
                <Image
                  src={`https://images.unsplash.com/${meal.img}?auto=format&fit=crop&w=480&q=80`}
                  alt={meal.name}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <span className="meal-tag">{tag}</span>
              </div>
              <div className="meal-body">
                <div className="meal-title">{meal.name}</div>
                <div className="meal-macros">
                  <span className="pill">
                    <b>{meal.cal}</b> kcal
                  </span>
                  <span className="pill">
                    <b>{meal.protein}g</b> protein
                  </span>
                </div>
                <div className="meal-time">{time}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-teaser-cta" style={{ opacity: 0 }}>
          <Link
            href="/menu"
            className="btn btn-ghost"
            style={{ margin: "0 auto" }}
          >
            See the full 10-day menu <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
