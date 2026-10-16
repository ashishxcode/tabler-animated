import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const LAYERS = [
  { y: 72, fill: "#8fbaff" },
  { y: 36, fill: "#c4dbff" },
  { y: 0, fill: "#ffffff" },
];

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #63c0ff, #2f78ff 45%, #0536e6)",
      }}
    >
      <svg width="112" height="106" viewBox="0 0 200 190">
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
    </div>,
    size,
  );
}
