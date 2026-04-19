"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".footer-col",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            once: true,
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer ref={footerRef} className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col">
            <Link href="/" style={{ display: "inline-flex", alignItems: "center" }}>
              <Image
                src="/logo-light.png"
                alt="Lean Nation"
                width={140}
                height={79}
                style={{
                  height: 52,
                  width: "auto",
                  mixBlendMode: "multiply",
                  display: "block",
                }}
              />
            </Link>
            <p className="footer-brand-desc">
              Dhaka&apos;s chef-cooked morning meal plan. Fresh every day,
              at your door by 8am.
            </p>
            <div style={{ marginTop: 20, display: "flex", gap: 10 }}>
              {["bKash", "Nagad", "Card"].map((m) => (
                <span key={m} className="pay-icon">{m}</span>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Meal Plans</h4>
            <ul>
              <li><Link href="/#pricing">2 Meals/day — Weekly</Link></li>
              <li><Link href="/#pricing">2 Meals/day — Monthly</Link></li>
              <li><Link href="/#pricing">4 Meals/day — Weekly</Link></li>
              <li><Link href="/#pricing">4 Meals/day — Monthly</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/menu">Our Menu</Link></li>
              <li><Link href="/faq">How it works</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li>About us</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li>WhatsApp: +880 1711 000000</li>
              <li>Delivery zones</li>
              <li>Manage subscription</li>
              <li>Allergies & preferences</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Lean Nation Ltd. · Dhaka, Bangladesh</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
