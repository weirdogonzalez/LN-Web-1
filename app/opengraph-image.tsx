import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const alt = "Lean Nation — Stop cooking. Start Living.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  const imgData = await readFile(
    path.join(process.cwd(), "public", "food-poke-bowl.jpg")
  );
  const imgSrc = `data:image/jpeg;base64,${imgData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Food image full bleed */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Dark gradient overlay for text legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(180deg, rgba(27,26,23,0.1) 0%, rgba(27,26,23,0.25) 40%, rgba(27,26,23,0.92) 100%)",
          }}
        />

        {/* Text content */}
        <div
          style={{
            position: "absolute",
            left: 64,
            right: 64,
            bottom: 56,
            display: "flex",
            flexDirection: "column",
            color: "#fff",
          }}
        >
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: "#C9E9CF",
              marginBottom: 14,
            }}
          >
            Dhaka&apos;s Premier Meal Plan
          </div>
          <div
            style={{
              fontSize: 108,
              fontWeight: 900,
              letterSpacing: -4,
              lineHeight: 1,
              color: "#fff",
            }}
          >
            LEAN NATION
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              fontWeight: 700,
              marginTop: 18,
              letterSpacing: -1,
            }}
          >
            <span>Stop cooking.&nbsp;</span>
            <span style={{ fontStyle: "italic", color: "#C9E9CF" }}>Start Living.</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
