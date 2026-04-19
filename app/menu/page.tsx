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

const DAY_COLORS: Record<number, string> = {
  1:  "#0A6F28",
  2:  "#E48A1D",
  3:  "#B83324",
  4:  "#D4A017",
  5:  "#2E6FB5",
  6:  "#7A5230",
  7:  "#5A8B2B",
  8:  "#7A4B8C",
  9:  "#39B54A",
  10: "#DF2A00",
};

const DAY_MACROS: Record<number, { c: number; f: number }> = {
  1:  { c: 103, f: 32 },
  2:  { c:  98, f: 32 },
  3:  { c: 129, f: 40 },
  4:  { c:  98, f: 54 },
  5:  { c: 108, f: 48 },
  6:  { c: 137, f: 47 },
  7:  { c: 101, f: 43 },
  8:  { c: 131, f: 37 },
  9:  { c: 131, f: 37 },
  10: { c: 141, f: 53 },
};

export default function MenuPage() {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".menu-page-hero-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1 }
      );
      gsap.fromTo(
        ".menu-table-row",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.04, ease: "power2.out", delay: 0.25 }
      );
    },
    { scope: pageRef }
  );

  const toggleDay = (d: number) => {
    setExpandedDay(expandedDay === d ? null : d);
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
            10 days.{" "}
            <span className="italic-accent" style={{ fontSize: "0.92em" }}>
              40 meals.
            </span>{" "}
            Zero repeats.
          </h1>
          <p
            className="menu-page-hero-text"
            style={{ fontSize: 17, color: "var(--soft)", maxWidth: 560, marginTop: 12, opacity: 0 }}
          >
            Our chefs cook a different menu every day. After 10 days, the cycle
            repeats — keeping meals fresh and your macros perfectly balanced.
          </p>
        </div>
      </div>

      {/* Menu table */}
      <div style={{ background: "var(--cream)", padding: "48px 0 80px" }}>
        <div className="wrap">
          <div className="menu-table">
            {/* Header */}
            <div className="menu-table-head">
              <div>Day</div>
              <div>Breakfast</div>
              <div>Lunch</div>
              <div>Snack</div>
              <div>Dinner</div>
              <div style={{ textAlign: "right" }}>Daily nutrition</div>
            </div>

            {/* Rows */}
            {Array.from({ length: 10 }, (_, i) => i + 1).map((d) => {
              const day = MENU[d];
              const color = DAY_COLORS[d];
              const macros = DAY_MACROS[d];
              const isOpen = expandedDay === d;
              return (
                <div key={d} className="menu-table-row">
                  <button
                    className={`menu-row${isOpen ? " is-open" : ""}`}
                    onClick={() => toggleDay(d)}
                    aria-expanded={isOpen}
                  >
                    <div className="menu-row-day">
                      <span
                        className="day-chip"
                        style={{ background: color, boxShadow: `3px 3px 0 var(--ink)` }}
                      >
                        <span className="day-chip-label">Day</span>
                        <span className="day-chip-num">{d}</span>
                      </span>
                    </div>
                    <div className="menu-row-meal" data-label="Breakfast">{day.breakfast.name}</div>
                    <div className="menu-row-meal" data-label="Lunch">{day.lunch.name}</div>
                    <div className="menu-row-meal" data-label="Snack">{day.snack.name}</div>
                    <div className="menu-row-meal" data-label="Dinner">{day.dinner.name}</div>
                    <div className="menu-row-nutri">
                      <div className="menu-row-kcal" style={{ color }}>
                        {day.cal} kcal
                      </div>
                      <div className="menu-row-sub">
                        C: <b>{macros.c}g</b> · F: <b>{macros.f}g</b>
                      </div>
                      <div className="menu-row-sub">
                        P: <b>{day.protein}g</b>
                      </div>
                    </div>
                  </button>

                  {/* Expanded: meal photos */}
                  {isOpen && (
                    <div className="menu-row-expanded">
                      {MEAL_LABELS.map(({ key, label, time }) => {
                        const meal = day[key];
                        return (
                          <div key={key} className="meal-card">
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
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: 48,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
              padding: "28px 32px",
              background: "#fff",
              border: "1.5px solid var(--ink)",
              borderRadius: 20,
              boxShadow: "6px 6px 0 var(--accent)",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  color: "var(--soft)",
                  marginBottom: 4,
                }}
              >
                Ready to eat?
              </p>
              <h3
                style={{
                  fontSize: "clamp(22px,2.4vw,32px)",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                }}
              >
                Start your plan today — first delivery tomorrow.
              </h3>
            </div>
            <Link href="/subscribe" className="btn btn-primary btn-lg">
              Start your plan →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
