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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #1a1a2e 0%, #0033a0 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: 96,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-2px",
            }}
          >
            YAMAHA
          </span>
          <span
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "6px",
              textTransform: "uppercase",
            }}
          >
            Hi-Fi
          </span>
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.6)",
            letterSpacing: "4px",
            textTransform: "uppercase",
          }}
        >
          Sound Beyond Perfection
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 20,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          yamaha.best
        </div>
      </div>
    ),
    { ...size }
  );
}
