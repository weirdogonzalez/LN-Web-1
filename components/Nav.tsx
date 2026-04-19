"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".nav-logo",
        { x: -24, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
      ).fromTo(
        ".nav-link-item",
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: "power2.out" },
        "-=0.4"
      ).fromTo(
        ".nav-cta",
        { scale: 0.85, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.6)" },
        "-=0.3"
      );
    },
    { scope: navRef }
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/menu", label: "Menu" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav ref={navRef} className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo" style={{ display: "inline-flex", alignItems: "center" }}>
          <Image
            src="/logo-light.png"
            alt="Lean Nation"
            width={120}
            height={68}
            priority
            style={{
              height: 44,
              width: "auto",
              mixBlendMode: "multiply",
              display: "block",
            }}
          />
        </Link>

        <div className="nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link nav-link-item${pathname === l.href ? " active" : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Link href="/subscribe" className="btn btn-primary btn-sm nav-cta">
          Start my plan <span>→</span>
        </Link>
      </div>
    </nav>
  );
}
