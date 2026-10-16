import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: every Tabler icon, animated`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LAYERS = [
  { y: 72, fill: "#c3d6fd" },
  { y: 36, fill: "#8db0fb" },
  { y: 0, fill: "#4f86f7" },
];

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 56,
        background: "#0a0a0a",
        color: "#fafafa",
      }}
    >
      <svg width="260" height="247" viewBox="0 0 200 190">
        {LAYERS.map(({ y, fill }) => (
          <polygon
            key={y}
            transform={`translate(0 ${y})`}
            points="100,24 164,58 100,92 36,58"
            fill={fill}
            stroke={fill}
            strokeWidth="44"
            strokeLinejoin="round"
          />
        ))}
      </svg>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3 }}>{site.name}</div>
        <div style={{ fontSize: 34, color: "#a3a3a3", maxWidth: 560 }}>Every Tabler icon, animated.</div>
      </div>
    </div>,
    size,
  );
}
