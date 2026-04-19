"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MENU } from "@/lib/data";
import Footer from "@/components/Footer";

gsap.registerPlugin(useGSAP);

const MEAL_LABELS = [
  { key: "breakfast" as const, label: "Breakfast", time: "7:30am" },
  { key: "lunch" as const, label: "Lunch", time: "12:30pm" },
  { key: "snack" as const, label: "Snack", time: "4:00pm" },
  { key: "dinner" as const, label: "Dinner", time: "8:00pm" },
];

export default function MenuPage() {
  const [activeDay, setActiveDay] = useState(1);
  const pageRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const day = MENU[activeDay];

  useGSAP(
    () => {
      gsap.fromTo(
        ".menu-page-hero-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1 }
      );
      gsap.fromTo(
        ".day-tab",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.04, ease: "power2.out", delay: 0.3 }
      );
    },
    { scope: pageRef }
  );

  const switchDay = (d: number) => {
    if (!gridRef.current) return;
    gsap.to(gridRef.current, {
      opacity: 0,
      y: 16,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => {
        setActiveDay(d);
        gsap.fromTo(
          gridRef.current,
          { opacity: 0, y: -16 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
        );
      },
    });
  };

  return (
    <div ref={pageRef}>
      {/* Page hero */}
      <div className="page-hero">
        <div className="wrap">
          <p className="eyebrow menu-page-hero-text" style={{ opacity: 0 }}>
            The Menu
          </p>
          <h1
            className="display menu-page-hero-text"
            style={{ fontSize: "clamp(48px,6vw,88px)", opacity: 0, marginTop: 8 }}
          >
            10-day{" "}
            <span className="italic-accent" style={{ fontSize: "0.92em" }}>
              rotating cycle.
            </span>
          </h1>
          <p
            className="menu-page-hero-text"
            style={{ fontSize: 17, color: "var(--soft)", maxWidth: 520, marginTop: 12, opacity: 0 }}
          >
            Our chefs cook a different menu every day. After 10 days, the cycle
            repeats — keeping things fresh and your macros balanced.
          </p>

          {/* Day tabs */}
          <div className="menu-days-tabs">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((d) => (
              <button
                key={d}
                className={`day-tab${d === activeDay ? " active" : ""}`}
                onClick={() => switchDay(d)}
              >
                Day {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Day detail */}
      <div style={{ background: "var(--cream)", padding: "40px 0 80px" }}>
        <div className="wrap">
          <div ref={gridRef}>
            {/* Summary bar */}
            <div className="day-summary-bar">
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: 1.5,
                    textTransform: "uppercase",
                    color: "var(--soft)",
                  }}
                >
                  Day {activeDay} overview
                </div>
                <div
                  style={{
                    fontSize: 26,
                    fontWeight: 900,
                    letterSpacing: "-0.02em",
                    marginTop: 2,
                  }}
                >
                  {day.cal} kcal total
                </div>
              </div>
              <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                {[
                  { label: "Protein", val: `${day.protein}g` },
                  { label: "Meals", val: "4" },
                  { label: "Delivery", val: "8am" },
                ].map((m) => (
                  <div key={m.label} className="macro-item">
                    <span className="macro-val">{m.val}</span>
                    <span className="macro-label">{m.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/subscribe" className="btn btn-primary">
                Order this day →
              </Link>
            </div>

            {/* Meal cards grid */}
            <div className="day-detail">
              {MEAL_LABELS.map(({ key, label, time }) => {
                const meal = day[key];
                return (
                  <div key={key} className="meal-card" style={{ opacity: 1 }}>
                    <div className="meal-img">
                      <Image
                        src={`https://images.unsplash.com/${meal.img}?auto=format&fit=crop&w=480&q=80`}
                        alt={meal.name}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="25vw"
                      />
                      <span className="meal-tag">{label}</span>
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
                      <div className="meal-time">Ready by {time}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cycle graphic */}
          <div style={{ marginTop: 60 }}>
            <div className="section-head" style={{ textAlign: "left", maxWidth: "none", marginBottom: 24 }}>
              <p className="eyebrow">Cycle structure</p>
              <h2
                className="section-title"
                style={{ fontSize: "clamp(32px,3.5vw,52px)" }}
              >
                3 cycles · 30 days
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: 16,
                alignItems: "center",
              }}
            >
              {[1, 2, 3].map((cycle) => (
                <div
                  key={cycle}
                  style={{
                    display: "contents",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 900,
                      fontSize: 13,
                      color: "var(--accent)",
                      background: "var(--accent-soft)",
                      padding: "6px 12px",
                      borderRadius: 8,
                      border: "1.5px solid var(--accent)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Cycle {cycle}
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(10, 1fr)",
                      gap: 6,
                    }}
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((d) => (
                      <div
                        key={d}
                        onClick={() => switchDay(d)}
                        style={{
                          aspectRatio: "1",
                          borderRadius: 10,
                          background:
                            d === activeDay
                              ? "var(--ink)"
                              : "var(--accent)",
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontWeight: 800,
                          fontSize: 13,
                          border: "1.5px solid var(--ink)",
                          cursor: "pointer",
                          transition: "transform 0.15s ease",
                        }}
                        onMouseEnter={(e) =>
                          ((e.target as HTMLElement).style.transform = "scale(1.1)")
                        }
                        onMouseLeave={(e) =>
                          ((e.target as HTMLElement).style.transform = "scale(1)")
                        }
                      >
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
