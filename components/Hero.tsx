"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Background outline word
      tl.fromTo(
        ".outline-word",
        { opacity: 0, scale: 0.93 },
        { opacity: 0.92, scale: 1, duration: 1.4, ease: "power2.out" },
        0
      );

      // Eyebrow badge
      tl.fromTo(
        ".hero-eyebrow-wrap",
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 },
        0.25
      );

      // Headline lines — mask reveal (translateY from below overflow:hidden parent)
      tl.fromTo(
        ".hero-word",
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.1, ease: "power4.out" },
        0.35
      );

      // Sub-headline
      tl.fromTo(
        ".hero-sub",
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        0.85
      );

      // CTA row
      tl.fromTo(
        ".hero-cta-row",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        1.0
      );

      // Fine print + trust pill
      tl.fromTo(
        [".hero-fineprint", ".trust-pill"],
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.1 },
        1.1
      );

      // Plates stagger in
      tl.fromTo(
        ".plate",
        { y: 80, opacity: 0, scale: 0.92 },
        { y: 0, opacity: 1, scale: 1, duration: 1.1, stagger: 0.18, ease: "power3.out" },
        0.4
      );

      // Badges
      tl.fromTo(
        ".plate-badge",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.45, stagger: 0.12, ease: "back.out(1.7)" },
        1.2
      );

      // Floating animations (infinite)
      gsap.to(".plate-1", {
        y: -14,
        duration: 3.8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1.6,
      });
      gsap.to(".plate-2", {
        y: 10,
        duration: 4.6,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 2.0,
      });
      gsap.to(".plate-3", {
        y: -9,
        duration: 3.3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1.8,
      });

      // Subtle rotation on outline word
      gsap.to(".outline-word", {
        rotation: 1.5,
        duration: 8,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 2,
      });

      // Per-element cursor interaction: each plate / badge reacts on its own
      // only while the cursor is directly on it. Others keep their idle float.
      const targets = [
        { sel: ".plate-1", innerSel: ".plate-inner", strength: 18, tilt: 10 },
        { sel: ".plate-2", innerSel: ".plate-inner", strength: 14, tilt: 12 },
        { sel: ".plate-3", innerSel: ".plate-inner", strength: 12, tilt: 14 },
      ];
      const cleanups: Array<() => void> = [];
      targets.forEach((t) => {
        const el = heroRef.current?.querySelector<HTMLElement>(t.sel);
        const inner = el?.querySelector<HTMLElement>(t.innerSel);
        if (!el || !inner) return;
        const setX = gsap.quickTo(inner, "x", { duration: 0.45, ease: "power3.out" });
        const setY = gsap.quickTo(inner, "y", { duration: 0.45, ease: "power3.out" });
        const setRx = gsap.quickTo(inner, "rotationX", { duration: 0.45, ease: "power3.out" });
        const setRy = gsap.quickTo(inner, "rotationY", { duration: 0.45, ease: "power3.out" });

        const onMove = (e: MouseEvent) => {
          const r = el.getBoundingClientRect();
          const nx = ((e.clientX - r.left) / r.width - 0.5) * 2; // -1..1
          const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
          setX(nx * t.strength);
          setY(ny * t.strength);
          setRy(nx * t.tilt);
          setRx(-ny * t.tilt);
        };
        const onLeave = () => {
          setX(0);
          setY(0);
          setRx(0);
          setRy(0);
        };
        el.addEventListener("mousemove", onMove);
        el.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          el.removeEventListener("mousemove", onMove);
          el.removeEventListener("mouseleave", onLeave);
        });
      });

      // Badges — same pattern, but the listener attaches to the pill itself
      // (the inner), since the outer .plate-badge has no visible area beyond
      // the pill bounds. Use lighter movement so they feel like UI chips.
      const badges = heroRef.current?.querySelectorAll<HTMLElement>(".plate-badge-inner");
      badges?.forEach((inner) => {
        const setX = gsap.quickTo(inner, "x", { duration: 0.4, ease: "power3.out" });
        const setY = gsap.quickTo(inner, "y", { duration: 0.4, ease: "power3.out" });
        const setRx = gsap.quickTo(inner, "rotationX", { duration: 0.4, ease: "power3.out" });
        const setRy = gsap.quickTo(inner, "rotationY", { duration: 0.4, ease: "power3.out" });
        const setScale = gsap.quickTo(inner, "scale", { duration: 0.4, ease: "power3.out" });

        const STRENGTH = 10;
        const TILT = 14;

        const onMove = (e: MouseEvent) => {
          const r = inner.getBoundingClientRect();
          const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
          const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;
          setX(nx * STRENGTH);
          setY(ny * STRENGTH);
          setRy(nx * TILT);
          setRx(-ny * TILT);
          setScale(1.06);
        };
        const onLeave = () => {
          setX(0);
          setY(0);
          setRx(0);
          setRy(0);
          setScale(1);
        };
        inner.addEventListener("mousemove", onMove);
        inner.addEventListener("mouseleave", onLeave);
        cleanups.push(() => {
          inner.removeEventListener("mousemove", onMove);
          inner.removeEventListener("mouseleave", onLeave);
        });
      });

      return () => cleanups.forEach((fn) => fn());
    },
    { scope: heroRef }
  );

  return (
    <section ref={heroRef} className="hero">
      <div className="wrap">
        <div className="hero-grid">
          {/* Left — copy */}
          <div>
            <div className="hero-eyebrow-wrap" style={{ opacity: 0 }}>
              <span
                className="eyebrow"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "var(--accent-soft)",
                  padding: "6px 14px",
                  borderRadius: 999,
                  border: "1.5px solid var(--accent)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--accent-bright)",
                    display: "inline-block",
                  }}
                />
                Dhaka&apos;s Premier Meal Plan
              </span>
            </div>

            <div
              className="display hero-headline"
              style={{ marginTop: 20, marginBottom: 0 }}
            >
              <div className="hero-line-wrap">
                <span className="hero-word line-ink" style={{ display: "block" }}>
                  Stop
                </span>
              </div>
              <div className="hero-line-wrap">
                <span
                  className="hero-word"
                  style={{ display: "block", color: "var(--accent)" }}
                >
                  Cooking.
                </span>
              </div>
              <div className="hero-line-wrap" style={{ marginTop: "0.08em" }}>
                <span className="hero-word line-ink" style={{ display: "block" }}>
                  Start
                </span>
              </div>
              <div className="hero-line-wrap" style={{ paddingBottom: "0.18em" }}>
                <span
                  className="hero-word"
                  style={{
                    display: "block",
                    fontFamily: "Instrument Serif",
                    fontStyle: "italic",
                    fontWeight: 700,
                    color: "var(--accent-bright)",
                    textTransform: "none",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Living.
                </span>
              </div>
            </div>

            <p className="hero-sub" style={{ opacity: 0 }}>
              <b>4 meals a day,</b> cooked overnight, at your door by 9am —
              no cooking, no planning, no clean-up.
            </p>

            <div className="hero-cta-row" style={{ opacity: 0 }}>
              <Link href="/#pricing" className="btn btn-primary btn-lg">
                See pricing &amp; plans <span>→</span>
              </Link>
            </div>

            <p className="hero-fineprint" style={{ opacity: 0 }}>
              10-day rotating menu · Macro-balanced meals · Delivered fresh every morning
            </p>

            <div style={{ marginTop: 20 }}>
              <div className="trust-pill">
                <div className="trust-avatars">
                  {["R", "F", "S", "T"].map((l) => (
                    <div key={l} className="av">
                      {l}
                    </div>
                  ))}
                </div>
                <span>
                  <span className="trust-stars">★★★★★</span>
                  &nbsp;4.9 · 2,000+ Dhaka subscribers
                </span>
              </div>
            </div>
          </div>

          {/* Right — visual */}
          <div className="hero-visual">
            <div className="outline-word">
              LEAN<br />EAT<br />LIVE
            </div>

            {/* Main plate */}
            <div className="plate plate-1">
              <div className="plate-inner">
                <Image
                  src="/food-poke-bowl.jpg"
                  alt="Chicken teriyaki poke bowl"
                  width={320}
                  height={320}
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>

            {/* Secondary plate */}
            <div className="plate plate-2">
              <div className="plate-inner">
                <Image
                  src="/food-wrap.jpg"
                  alt="Creamy chicken wrap"
                  width={200}
                  height={200}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Accent plate */}
            <div className="plate plate-3">
              <div className="plate-inner">
                <Image
                  src="/food-sandwich.jpg"
                  alt="Club sandwich"
                  width={160}
                  height={160}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Badges */}
            <div
              className="plate-badge badge-top"
              style={{ top: 16, left: "50%", transform: "translateX(-50%)" }}
            >
              <div className="plate-badge-inner">
                <span className="dot" />
                Fresh Daily · 9am Delivery
              </div>
            </div>
            <div
              className="plate-badge"
              style={{ bottom: 220, right: -8 }}
            >
              <div className="plate-badge-inner" style={{ fontSize: 10 }}>
                <span className="dot" style={{ background: "var(--sun)" }} />
                Calorie + macro tracked
              </div>
            </div>
            <div
              className="plate-badge"
              style={{ bottom: 40, left: 10 }}
            >
              <div className="plate-badge-inner" style={{ fontSize: 10 }}>
                <span className="dot" />
                Free Phone Consultation
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
