import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yamaha Hi-Fi — Premium High-End Audio Equipment";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        {/* Background product image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://usa.yamaha.com/files/A-S3200_ff387f7a00964c55e2840b223fa1a7e3.jpg?impolicy=resize&imwid=800&imhei=800"
          alt=""
          style={{
            position: "absolute",
            right: "-40px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "620px",
            height: "620px",
            objectFit: "contain",
          }}
        />

        {/* Dark overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(to right, #1a1a2e 0%, #1a1a2eee 45%, #1a1a2e99 65%, #1a1a2e44 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 70px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "14px",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                fontSize: 88,
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-2px",
              }}
            >
              YAMAHA
            </span>
            <span
              style={{
                fontSize: 26,
                fontWeight: 600,
                color: "#4a90d9",
                letterSpacing: "6px",
                textTransform: "uppercase",
              }}
            >
              Hi-Fi
            </span>
          </div>

          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "5px",
              textTransform: "uppercase",
              marginBottom: "32px",
            }}
          >
            Sound Beyond Perfection
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              fontSize: 18,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            <span>Amplifiers</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
            <span>Speakers</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
            <span>Turntables</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
            <span>Headphones</span>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: 70,
              fontSize: 18,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            yamaha.best
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
