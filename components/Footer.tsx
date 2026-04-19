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
            <div style={{ marginTop: 20, display: "flex", gap: 12, alignItems: "center" }}>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ display: "block" }} aria-label="Instagram">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="10" fill="url(#ig-grad)"/>
                  <defs>
                    <radialGradient id="ig-grad" cx="30%" cy="107%" r="130%">
                      <stop offset="0%" stopColor="#fdf497"/>
                      <stop offset="20%" stopColor="#fd5949"/>
                      <stop offset="50%" stopColor="#d6249f"/>
                      <stop offset="100%" stopColor="#285AEB"/>
                    </radialGradient>
                  </defs>
                  <rect x="9" y="9" width="18" height="18" rx="5" stroke="white" strokeWidth="1.6" fill="none"/>
                  <circle cx="18" cy="18" r="4.5" stroke="white" strokeWidth="1.6" fill="none"/>
                  <circle cx="23.2" cy="12.8" r="1.1" fill="white"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ display: "block" }} aria-label="Facebook">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="10" fill="#1877F2"/>
                  <path d="M20 13h-2c-.6 0-1 .4-1 1v2h3l-.5 3H17v8h-3v-8h-2v-3h2v-2c0-2.2 1.8-4 4-4h2v3z" fill="white"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/8801400334043" target="_blank" rel="noopener noreferrer" style={{ display: "block" }} aria-label="WhatsApp">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="10" fill="#25D366"/>
                  <path d="M18 8a10 10 0 00-8.6 15.1L8 28l5.1-1.3A10 10 0 1018 8zm0 18a8 8 0 01-4.1-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8 8 0 1118 26z" fill="white"/>
                  <path d="M14 15.5c-.2 0-.6.1-.9.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 1.9 3 4.7 4.2.7.3 1.2.5 1.6.6.7.1 1.3 0 1.8-.3.5-.4.9-1 1-1.5l.1-.6c0-.2-.1-.4-.3-.5l-2-.9c-.2-.1-.4-.1-.5.1l-.7.8c-.1.2-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.4-1.9-.1-.2 0-.4.1-.5l.5-.6c.1-.2.2-.4.1-.6l-.9-2.1c-.1-.2-.3-.4-.5-.4z" fill="white"/>
                </svg>
              </a>
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
              <li>
                <a href="https://wa.me/8801400334043" target="_blank" rel="noopener noreferrer" style={{ color: "inherit" }}>
                  WhatsApp: +880 1400 334043
                </a>
              </li>
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
