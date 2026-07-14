import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #050814 0%, #070b18 45%, #03050d 100%)",
          color: "#f8fbff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#67e8f9",
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          yuva@portfolio :~$ ship reliable systems
        </div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, marginTop: 28 }}>
          Yuva Bhatta
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#cbd5e1", marginTop: 18, maxWidth: 900 }}>
          Software Developer building backend, automation, cloud, and data systems.
        </div>
      </div>
    ),
    { ...size },
  );
}
