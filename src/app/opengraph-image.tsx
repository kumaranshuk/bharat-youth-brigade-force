import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(120% 100% at 20% 0%, rgba(255,106,26,0.28), transparent 55%), #0A0A0D",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9,
              background: "#FF6A1A",
            }}
          />
          <div
            style={{
              color: "#FF8A45",
              fontSize: 26,
              letterSpacing: 6,
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Bhartiya Yuva Shakti Sangathan
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#F7F4EE", fontSize: 82, fontWeight: 800, lineHeight: 1.05 }}>
            The youth of India.
          </div>
          <div style={{ color: "#FF7A2E", fontSize: 82, fontWeight: 800, lineHeight: 1.05 }}>
            One network. One purpose.
          </div>
        </div>

        <div style={{ color: "#9a958c", fontSize: 30 }}>
          Connect · Participate · Lead · Build
        </div>
      </div>
    ),
    { ...size },
  );
}
