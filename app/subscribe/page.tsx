"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PLANS } from "@/lib/data";
import Footer from "@/components/Footer";

gsap.registerPlugin(useGSAP);

export default function SubscribePage() {
  const [selectedPlan, setSelectedPlan] = useState("m4");
  const [deliveryLoc, setDeliveryLoc] = useState("home");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const pageRef = useRef<HTMLDivElement>(null);

  // Controlled form state
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [allergies, setAllergies] = useState("");

  const plan = PLANS.find((p) => p.id === selectedPlan) ?? PLANS[3];

  useGSAP(
    () => {
      gsap.fromTo(
        ".sub-hero-text",
        { y: 36, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );
      gsap.fromTo(
        ".form-grid",
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.3 }
      );
    },
    { scope: pageRef }
  );

  async function handleSubmit() {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          plan: `${plan.name}/day · ${plan.freq}`,
          deliveryLoc,
          fullName,
          phone,
          email,
          dob,
          homeAddress,
          officeAddress,
          startDate,
          height,
          weight,
          allergies,
        }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or message us on WhatsApp.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "var(--cream)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <div style={{ maxWidth: 520 }}>
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "var(--accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              margin: "0 auto 24px",
              border: "4px solid var(--ink)",
              boxShadow: "4px 4px 0 var(--ink)",
            }}
          >
            ✓
          </div>
          <h1
            className="display"
            style={{ fontSize: "clamp(40px,5vw,72px)", color: "var(--ink)", marginBottom: 16 }}
          >
            You&apos;re in.
          </h1>
          <p style={{ fontSize: 18, color: "var(--soft)", lineHeight: 1.6, marginBottom: 32 }}>
            Your first delivery will arrive <strong>tomorrow morning by 8am</strong>.
            Expect a WhatsApp confirmation from our driver tonight.
          </p>
          <div
            style={{
              background: "#fff",
              border: "1.5px solid var(--ink)",
              borderRadius: 20,
              padding: 24,
              marginBottom: 28,
              boxShadow: "4px 4px 0 var(--accent)",
              textAlign: "left",
            }}
          >
            <h3 style={{ fontWeight: 900, fontSize: 16, textTransform: "uppercase", marginBottom: 16 }}>
              What&apos;s next
            </h3>
            {[
              "Check WhatsApp for your driver confirmation tonight",
              "Your meals will be at your door before 8am",
              "Manage skips & swaps over WhatsApp anytime",
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  alignItems: "flex-start",
                  marginBottom: 12,
                  fontSize: 14,
                  color: "var(--soft)",
                }}
              >
                <span
                  style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "var(--accent)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                    fontWeight: 900,
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </span>
                {step}
              </div>
            ))}
          </div>
          <Link href="/menu" className="btn btn-primary btn-lg">
            See your first week&apos;s menu →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={pageRef} className="sub-page">
      {/* Header */}
      <div className="sub-header">
        <div className="wrap">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <p className="eyebrow sub-hero-text" style={{ opacity: 0 }}>
                Sign up
              </p>
              <h1
                className="display sub-hero-text"
                style={{ fontSize: "clamp(32px,4vw,56px)", opacity: 0, marginTop: 4 }}
              >
                Start your plan
              </h1>
            </div>
            <div className="stepper sub-hero-text" style={{ opacity: 0 }}>
              <div className="step-dot active" />
              <span className="lbl active">Your plan</span>
              <div className="step-rule" />
              <div className="step-dot" />
              <span className="lbl">Details</span>
              <div className="step-rule" />
              <div className="step-dot" />
              <span className="lbl">Confirm</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="wrap form-grid" style={{ opacity: 0 }}>
        {/* Left — form */}
        <div>
          {/* Plan selector */}
          <div style={{ marginBottom: 36 }}>
            <h2 className="section-h">Choose your plan</h2>
            <p className="section-sub">Pick the frequency and meals per day that suits you.</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {PLANS.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setSelectedPlan(p.id)}
                  style={{
                    padding: "16px 18px",
                    border: `2px solid ${selectedPlan === p.id ? "var(--accent)" : "var(--line-2)"}`,
                    borderRadius: 16,
                    cursor: "pointer",
                    background: selectedPlan === p.id ? "var(--cream-2)" : "#fff",
                    boxShadow: selectedPlan === p.id ? "4px 4px 0 var(--accent)" : "none",
                    transition: "all 0.15s ease",
                    position: "relative",
                  }}
                >
                  {p.badge && (
                    <span
                      style={{
                        position: "absolute",
                        top: -10,
                        right: 12,
                        background: "var(--accent)",
                        color: "#fff",
                        fontSize: 9,
                        fontWeight: 800,
                        letterSpacing: 1,
                        textTransform: "uppercase",
                        padding: "3px 10px",
                        borderRadius: 20,
                      }}
                    >
                      {p.badge}
                    </span>
                  )}
                  <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--soft)" }}>
                    {p.eyebrow} · {p.freq}
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-0.02em", marginTop: 2 }}>
                    {p.name}/day
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 900, color: "var(--accent)", marginTop: 6 }}>
                    ৳{p.price.toLocaleString()}/{p.period}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--soft)", marginTop: 2 }}>
                    ৳{p.perMeal}/meal · {p.totalLabel}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery location */}
          <div style={{ marginBottom: 28 }}>
            <h2 className="section-h">Delivery details</h2>
            <p className="section-sub">Where should we deliver?</p>
            <div className="field">
              <label>Delivery location <span className="req">Required</span></label>
              <div className="choice-row">
                {["home", "office", "both"].map((loc) => (
                  <button
                    key={loc}
                    className={`choice-pill${deliveryLoc === loc ? " active" : ""}`}
                    onClick={() => setDeliveryLoc(loc)}
                  >
                    {loc.charAt(0).toUpperCase() + loc.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Personal details */}
          <div style={{ marginBottom: 28 }}>
            <h2 className="section-h">Personal details</h2>
            <p className="section-sub">Used for delivery and WhatsApp confirmations.</p>

            <div className="fields-grid">
              <div className="field">
                <label>Full name <span className="req">Required</span></label>
                <input type="text" placeholder="Rumana Khan" value={fullName} onChange={e => setFullName(e.target.value)} />
              </div>
              <div className="field">
                <label>Phone / WhatsApp <span className="req">Required</span></label>
                <input type="tel" placeholder="+880 1400 334043" value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
            </div>

            <div className="fields-grid">
              <div className="field">
                <label>Email <span className="req">Required</span></label>
                <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="field">
                <label>Date of birth <span className="req">Required</span></label>
                <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
              </div>
            </div>

            {(deliveryLoc === "home" || deliveryLoc === "both") && (
              <div className="field">
                <label>Home address <span className="req">Required</span></label>
                <textarea placeholder="Flat 4B, Road 12, Gulshan 2..." value={homeAddress} onChange={e => setHomeAddress(e.target.value)} />
              </div>
            )}
            {(deliveryLoc === "office" || deliveryLoc === "both") && (
              <div className="field">
                <label>Office address <span className="req">Required</span></label>
                <textarea placeholder="Level 5, Banani Business Tower..." value={officeAddress} onChange={e => setOfficeAddress(e.target.value)} />
              </div>
            )}

            <div className="field">
              <label>Preferred start date <span className="req">Required</span></label>
              <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
            </div>
          </div>

          {/* Optional health */}
          <div style={{ marginBottom: 36 }}>
            <h2 className="section-h" style={{ fontSize: 18 }}>Health info <span style={{ fontWeight: 400, textTransform: "none", fontSize: 14, color: "var(--soft)" }}>(optional)</span></h2>
            <div className="fields-grid">
              <div className="field">
                <label>Height (cm) <span className="opt">Optional</span></label>
                <input type="number" placeholder="170" value={height} onChange={e => setHeight(e.target.value)} />
              </div>
              <div className="field">
                <label>Weight (kg) <span className="opt">Optional</span></label>
                <input type="number" placeholder="65" value={weight} onChange={e => setWeight(e.target.value)} />
              </div>
            </div>
            <div className="field">
              <label>Allergies / dietary restrictions <span className="opt">Optional</span></label>
              <textarea placeholder="e.g. nut allergy, no pork..." value={allergies} onChange={e => setAllergies(e.target.value)} />
            </div>
          </div>

          {error && (
            <p style={{ color: "var(--poppy)", fontSize: 14, marginBottom: 12, fontWeight: 600 }}>
              {error}
            </p>
          )}

          <button
            className="btn btn-primary btn-lg"
            style={{ width: "100%", justifyContent: "center", opacity: loading ? 0.7 : 1 }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Submitting…" : "Confirm subscription →"}
          </button>
          <p style={{ fontSize: 12, color: "var(--soft)", textAlign: "center", marginTop: 12 }}>
            Orders placed before 6pm start the next morning. Free delivery included.
          </p>
        </div>

        {/* Right — sticky summary */}
        <div>
          <div className="order-summary">
            <h3>Order summary</h3>

            <div className="order-line">
              <span style={{ color: "var(--soft)", fontSize: 13 }}>Plan</span>
              <span style={{ fontWeight: 700 }}>{plan.name}/day · {plan.freq}</span>
            </div>
            <div className="order-line">
              <span style={{ color: "var(--soft)", fontSize: 13 }}>Meals included</span>
              <span style={{ fontWeight: 700 }}>{plan.totalLabel}</span>
            </div>
            <div className="order-line">
              <span style={{ color: "var(--soft)", fontSize: 13 }}>Per meal</span>
              <span style={{ fontWeight: 700 }}>৳{plan.perMeal}</span>
            </div>
            <div className="order-line">
              <span style={{ color: "var(--soft)", fontSize: 13 }}>Delivery</span>
              <span style={{ fontWeight: 700, color: "var(--accent)" }}>Free</span>
            </div>
            <div className="order-line">
              <span style={{ color: "var(--soft)", fontSize: 13 }}>VAT (5%)</span>
              <span style={{ fontWeight: 700 }}>৳{Math.round(plan.price * 0.05).toLocaleString()}</span>
            </div>

            <div className="order-total">
              <span>Total</span>
              <span>৳{Math.round(plan.price * 1.05).toLocaleString()}</span>
            </div>

            <div className="order-badge">
              <span>✓</span> Free delivery included
            </div>
            <div className="order-badge" style={{ marginTop: 6 }}>
              <span>✓</span> Fresh-cooked every morning
            </div>

            <div
              style={{
                marginTop: 20,
                padding: "14px 16px",
                background: "var(--cream)",
                borderRadius: 12,
                fontSize: 13,
                color: "var(--soft)",
                lineHeight: 1.6,
              }}
            >
              <strong style={{ color: "var(--ink)", display: "block", marginBottom: 4 }}>
                📦 First delivery
              </strong>
              Place your order before 6pm today and breakfast will be
              waiting at your door tomorrow at 8am.
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
