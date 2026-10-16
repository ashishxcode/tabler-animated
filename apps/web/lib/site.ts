/** The public URL: set explicitly, else Vercel's production domain when deployed there, else local development. */
function siteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  return vercel ? `https://${vercel}` : "http://localhost:3100";
}

/** Single source of truth for site-wide metadata. Set NEXT_PUBLIC_SITE_URL once a domain is chosen. */
export const site = {
  name: "Tabler Animated",
  description:
    "Every Tabler icon, animated to match what it shows. Hover to watch it move, then install it one at a time with the shadcn CLI.",
  url: siteUrl(),
  author: { name: "Ashish Patel", twitter: "@ashishxcode", github: "https://github.com/ashishxcode" },
  keywords: [
    "tabler icons",
    "animated icons",
    "react icons",
    "motion",
    "shadcn",
    "svg icons",
    "icon library",
  ],
  repo: "https://github.com/ashishxcode/tabler-animated",
  license: "https://opensource.org/license/mit",
} as const;
