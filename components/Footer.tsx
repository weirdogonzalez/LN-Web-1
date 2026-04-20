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
                src="/logo.png"
                alt="Lean Nation"
                width={140}
                height={79}
                style={{
                  height: 52,
                  width: "auto",
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
              <a href="https://www.instagram.com/leannationbd/" target="_blank" rel="noopener noreferrer" style={{ display: "block" }} aria-label="Instagram">
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
              <a href="https://www.facebook.com/leannationbd" target="_blank" rel="noopener noreferrer" style={{ display: "block" }} aria-label="Facebook">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="10" fill="#1877F2"/>
                  <path d="M22 13h-2c-.6 0-1 .4-1 1v2h3l-.5 3H19v8h-3v-8h-2v-3h2v-2c0-2.2 1.8-4 4-4h2v3z" fill="white" transform="translate(0 -1)"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/8801400334043" target="_blank" rel="noopener noreferrer" style={{ display: "block" }} aria-label="WhatsApp">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="10" fill="#25D366"/>
                  <svg x="6" y="6" width="24" height="24" viewBox="0 0 32 32" fill="#fff">
                    <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.945 2.722.945.315 0 .602-.085.86-.216.46-.215.99-.874 1.09-1.376.028-.14.028-.286.028-.44 0-.228-.6-.6-.6-.6-.215-.115-.516-.172-.73-.215z"/>
                    <path d="M25.88 6.12C23.22 3.46 19.71 2 15.98 2 8.28 2 2.02 8.26 2.02 15.96c0 2.46.64 4.87 1.86 6.99L2 30l7.24-1.9c2.05 1.11 4.36 1.71 6.73 1.71 7.7 0 13.96-6.26 13.96-13.96 0-3.73-1.45-7.24-4.05-9.73zm-9.9 21.45c-2.11 0-4.18-.57-5.98-1.64l-.43-.26-4.46 1.17 1.19-4.34-.28-.45a11.59 11.59 0 0 1-1.78-6.19c0-6.4 5.21-11.61 11.73-11.61 3.1 0 6.01 1.21 8.21 3.4a11.53 11.53 0 0 1 3.39 8.21c0 6.41-5.21 11.61-11.59 11.61z"/>
                  </svg>
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
              <li><Link href="/#how-it-works">How it works</Link></li>
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
