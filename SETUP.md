# Lean Nation — Next.js + GSAP

## Setup

```bash
cd lean-nation
npm install
npm run dev
```

Open http://localhost:3000

## Stack
- Next.js 14 App Router
- TypeScript
- GSAP + @gsap/react (ScrollTrigger, useGSAP)
- Google Fonts (Inter, Instrument Serif)
- Unsplash for food imagery

## Pages
- `/` — Landing page (Hero, Marquee, Values, How it Works, Menu Teaser, Pricing, Testimonials, CTA)
- `/menu` — 10-day rotating menu with day switcher
- `/subscribe` — Plan selector + sign-up form
- `/faq` — Accordion FAQ

## GSAP Animations
- Hero: cascade word reveal (mask), floating plates, outline text scale
- Values: count-up numbers on scroll
- How It Works: step number spin, card stagger
- Menu: card rotation on entrance
- Pricing: scale-in cards, pulse ring on best value
- Testimonials: fan-in from three directions
- Big CTA: scale reveal + parallax background text
- Nav: logo + links entrance on load
