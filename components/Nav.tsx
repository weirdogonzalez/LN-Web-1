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
  const [open, setOpen] = useState(false);
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "/menu", label: "Menu" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <nav ref={navRef} className={`nav${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo" style={{ display: "inline-flex", alignItems: "center" }}>
          <span className="nav-logo-crop">
            <Image
              src="/logo.png"
              alt="Lean Nation"
              width={120}
              height={68}
              priority
              style={{
                height: 54,
                width: "auto",
                display: "block",
                marginTop: -3,
              }}
            />
          </span>
          <span className="nav-wordmark">Lean Nation</span>
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

        <Link href="/subscribe" className="btn btn-primary btn-sm nav-cta nav-cta-desktop">
          Start my plan <span>→</span>
        </Link>

        <button
          type="button"
          className="nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`nav-burger-bar${open ? " a" : ""}`} />
          <span className={`nav-burger-bar${open ? " b" : ""}`} />
          <span className={`nav-burger-bar${open ? " c" : ""}`} />
        </button>
      </div>

      <div className={`nav-mobile-panel${open ? " open" : ""}`}>
        <div className="nav-mobile-inner">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-mobile-link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/subscribe"
            className="btn btn-primary btn-lg nav-mobile-cta"
            onClick={() => setOpen(false)}
          >
            Start my plan <span>→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
