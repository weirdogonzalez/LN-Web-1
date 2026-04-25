"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MENU } from "@/lib/data";
import Footer from "@/components/Footer";

gsap.registerPlugin(useGSAP);

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

function getDhakaParts() {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const parts = fmt.formatToParts(new Date());
  const map: Record<string, string> = {};
  parts.forEach((p) => { map[p.type] = p.value; });
  return {
    weekday: map.weekday,
    month: map.month,
    day: parseInt(map.day, 10),
    year: parseInt(map.year, 10),
  };
}

function menuDayFor(dayOfMonth: number): number {
  if (dayOfMonth === 31) return 5;
  return ((dayOfMonth - 1) % 10) + 1;
}

export default function TodaysMenuPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [today, setToday] = useState<{
    weekday: string;
    month: string;
    day: number;
    year: number;
    menuDay: number;
  } | null>(null);

  useEffect(() => {
    const parts = getDhakaParts();
    setToday({ ...parts, menuDay: menuDayFor(parts.day) });
  }, []);

  useGSAP(
    () => {
      if (!today) return;
      gsap.fromTo(
        ".today-hero-text",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" }
      );
      gsap.fromTo(
        ".today-card",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.3 }
      );
    },
    { scope: pageRef, dependencies: [today] }
  );

  if (!today) {
    return (
      <div ref={pageRef} className="faq-page">
        <div className="wrap" style={{ minHeight: "60vh" }} />
        <Footer />
      </div>
    );
  }

  const day = MENU[today.menuDay];
  const macros = DAY_MACROS[today.menuDay];
  const accent = DAY_ACCENTS[today.menuDay];

  return (
    <div ref={pageRef} className="faq-page">
      <div className="wrap">
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <p className="eyebrow today-hero-text" style={{ opacity: 0 }}>
            Today&apos;s menu
          </p>
          <h1
            className="display today-hero-text"
            style={{ fontSize: "clamp(40px,5vw,68px)", opacity: 0, marginTop: 8 }}
          >
            {today.weekday},{" "}
            <span className="italic-accent" style={{ fontSize: "0.85em" }}>
              {today.month} {today.day}
            </span>
          </h1>
          <p
            className="today-hero-text"
            style={{
              fontSize: 17,
              color: "var(--soft)",
              marginTop: 12,
              opacity: 0,
              lineHeight: 1.6,
            }}
          >
            Day {today.menuDay} of our 10-day rotation. Cooked overnight,
            delivered before 9am.
          </p>
        </div>

        <div style={{ maxWidth: 640, margin: "56px auto 0" }}>
          <article
            className="menu-day-card today-card"
            style={{
              ["--day-accent" as string]: accent,
              opacity: 0,
            }}
          >
            <header className="menu-day-header">
              <div className="menu-day-num-wrap">
                <span className="menu-day-eyebrow">Day</span>
                <span className="menu-day-num">
                  {today.menuDay.toString().padStart(2, "0")}
                </span>
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
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>

        <div style={{ textAlign: "center", marginTop: 64 }}>
          <p style={{ fontSize: 15, color: "var(--soft)", marginBottom: 16 }}>
            Want this every morning at your door?
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
