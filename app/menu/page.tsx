"use client";
import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MENU } from "@/lib/data";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MEAL_LABELS = [
  { key: "breakfast" as const, label: "Breakfast", time: "8AM" },
  { key: "lunch" as const, label: "Lunch", time: "12:30PM" },
  { key: "snack" as const, label: "Snack", time: "5PM" },
  { key: "dinner" as const, label: "Dinner", time: "8PM" },
];

const DAY_ACCENTS: Record<number, string> = {
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
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".menu-page-hero-text",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.1 }
      );
      gsap.fromTo(
        ".menu-day-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: ".menu-days-grid", start: "top 80%", once: true },
        }
      );
    },
    { scope: pageRef }
  );

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
            </span>
          </h1>
          <p
            className="menu-page-hero-text"
            style={{ fontSize: 17, color: "var(--soft)", maxWidth: 560, marginTop: 12, opacity: 0 }}
          >
            Our chefs cook a different menu every day. After 10 days the cycle
            repeats — keeping meals fresh and your macros perfectly balanced.
          </p>
        </div>
      </div>

      {/* Menu days grid */}
      <div style={{ background: "var(--cream)", padding: "64px 0 96px" }}>
        <div className="wrap">
          <div className="menu-days-grid">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((d) => {
              const day = MENU[d];
              const macros = DAY_MACROS[d];
              const color = DAY_ACCENTS[d];
              return (
                <article
                  key={d}
                  className="menu-day-card"
                  style={{ ["--day-accent" as string]: color }}
                >
                  <header className="menu-day-header">
                    <div className="menu-day-num-wrap">
                      <span className="menu-day-eyebrow">Day</span>
                      <span className="menu-day-num">{d.toString().padStart(2, "0")}</span>
                    </div>
                    <div className="menu-day-macros">
                      <div className="menu-day-kcal">
                        <span className="kcal-num">{day.cal}</span>
                        <span className="kcal-unit">kcal</span>
                      </div>
                      <div className="menu-day-macro-row">
                        <span><b>{macros.c}</b>g C</span>
                        <span><b>{macros.f}</b>g F</span>
                        <span><b>{day.protein}</b>g P</span>
                      </div>
                    </div>
                  </header>

                  <ul className="menu-day-meals">
                    {MEAL_LABELS.map(({ key, label, time }) => {
                      const meal = day[key];
                      return (
                        <li key={key} className="menu-meal-row">
                          <div className="menu-meal-left">
                            <span className="menu-meal-label">{label}</span>
                            <span className="menu-meal-time">{time}</span>
                          </div>
                          <div className="menu-meal-right">
                            <span className="menu-meal-name">{meal.name}</span>
                            <span className="menu-meal-macros">
                              {meal.cal} kcal · {meal.protein}g protein
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              );
            })}
          </div>

          {/* CTA */}
          <div className="menu-cta">
            <div>
              <p className="menu-cta-eyebrow">Ready to eat?</p>
              <h3 className="menu-cta-title">
                Start your plan — first delivery{" "}
                <span className="italic-accent">tomorrow morning.</span>
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
