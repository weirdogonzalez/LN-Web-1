import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter: max 5 requests per IP per 10 minutes
const rateMap = new Map<string, { count: number; reset: number }>();
const LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= LIMIT) return true;
  entry.count++;
  return false;
}

function isValidEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isValidPhone(v: string) {
  return /^[+\d\s\-()]{7,20}$/.test(v);
}

function isValidDate(v: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(v) && !isNaN(Date.parse(v));
}

function cap(v: unknown, max: number): string {
  return typeof v === "string" ? v.slice(0, max).trim() : "";
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  // Body size guard (reject anything over 16KB)
  const contentLength = Number(req.headers.get("content-length") ?? 0);
  if (contentLength > 16_000) {
    return NextResponse.json({ error: "Request too large." }, { status: 413 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  // Required field validation
  const fullName  = cap(body.fullName,  120);
  const phone     = cap(body.phone,      30);
  const email     = cap(body.email,     150);
  const dob       = cap(body.dob,        10);
  const startDate = cap(body.startDate,  10);

  const errors: string[] = [];
  if (!fullName)               errors.push("Full name is required.");
  if (!phone)                  errors.push("Phone is required.");
  else if (!isValidPhone(phone)) errors.push("Phone format is invalid.");
  if (!email)                  errors.push("Email is required.");
  else if (!isValidEmail(email)) errors.push("Email format is invalid.");
  if (!dob)                    errors.push("Date of birth is required.");
  else if (!isValidDate(dob))  errors.push("Date of birth is invalid.");
  if (!startDate)              errors.push("Start date is required.");
  else if (!isValidDate(startDate)) errors.push("Start date is invalid.");

  if (errors.length) {
    return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
  }

  // Safe payload — only known fields, capped lengths
  const safe = {
    plan:          cap(body.plan,          60),
    deliveryLoc:   cap(body.deliveryLoc,   20),
    fullName,
    phone,
    email,
    dob,
    homeAddress:   cap(body.homeAddress,  300),
    officeAddress: cap(body.officeAddress,300),
    startDate,
    height:        cap(body.height,        10),
    weight:        cap(body.weight,        10),
    allergies:     cap(body.allergies,    500),
  };

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
  }

  try {
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ ...safe, _secret: process.env.GOOGLE_SCRIPT_SECRET }),
      redirect: "follow",
    });
    console.log("Apps Script response status:", res.status);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Apps Script fetch error:", err);
    return NextResponse.json({ error: "Failed to submit. Please try again." }, { status: 500 });
  }
}
