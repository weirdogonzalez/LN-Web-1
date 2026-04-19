import { ImageResponse } from "next/og";

export const alt = "Lean Nation — Stop cooking. Start Living.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "#FBF2DF",
          fontFamily: "sans-serif",
          padding: 60,
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#6b6558",
            marginBottom: 16,
          }}
        >
          Dhaka&apos;s Premier Meal Plan
        </div>
        <div
          style={{
            fontSize: 150,
            fontWeight: 900,
            color: "#0A6F28",
            letterSpacing: -6,
            lineHeight: 1,
          }}
        >
          LEAN NATION
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            color: "#1B1A17",
            marginTop: 40,
            fontWeight: 700,
            letterSpacing: -2,
          }}
        >
          <span>Stop cooking.&nbsp;</span>
          <span style={{ fontStyle: "italic", color: "#0A6F28" }}>Start Living.</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
