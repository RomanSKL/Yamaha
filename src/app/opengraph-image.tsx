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
          background: "linear-gradient(135deg, #1a1a2e 0%, #0033a0 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Product image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://usa.yamaha.com/files/1DF6FEAC9EDF414E8A6B4C0898304E68_12073_4cf4a4eee68d00d5f235d51f02045d25.jpg?impolicy=resize&imwid=800&imhei=800"
          alt=""
          style={{
            position: "absolute",
            right: "20px",
            top: "50%",
            transform: "translateY(-50%)",
            width: "500px",
            height: "500px",
            objectFit: "contain",
            opacity: 0.85,
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
              fontSize: 28,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "5px",
              textTransform: "uppercase",
            }}
          >
            Sound Beyond Perfection
          </div>

          <div
            style={{
              position: "absolute",
              bottom: 40,
              left: 70,
              fontSize: 18,
              color: "rgba(255,255,255,0.35)",
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
