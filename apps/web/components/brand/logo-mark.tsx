"use client";

import { motion } from "motion/react";

const LAYERS = [
  { offset: 72, fill: "color-mix(in oklab, var(--brand) 32%, var(--background))" },
  { offset: 36, fill: "color-mix(in oklab, var(--brand) 62%, var(--background))" },
  { offset: 0, fill: "var(--brand)" },
] as const;

/** The logo mark: three stacked layers that hop one after another, bottom to top, on a loop. */
export function LogoMark() {
  return (
    <svg viewBox="0 0 200 190" className="h-6 w-auto overflow-visible" aria-hidden>
      {LAYERS.map(({ offset, fill }, i) => (
        <g key={offset} transform={`translate(0 ${offset})`}>
          <motion.polygon
            points="100,24 164,58 100,92 36,58"
            style={{ fill, stroke: fill }}
            strokeWidth={44}
            strokeLinejoin="round"
            animate={{ y: [0, -16, 0] }}
            transition={{
              duration: 0.55,
              delay: i * 0.12,
              repeat: Infinity,
              repeatDelay: 2.2,
              ease: [0.34, 1.4, 0.64, 1],
            }}
          />
        </g>
      ))}
    </svg>
  );
}
