import path from "node:path";
import type { NextConfig } from "next";

// the app imports the shared icon source from the workspace root, so tracing and turbopack must see it
const root = path.resolve(import.meta.dirname, "../..");

const config: NextConfig = {
  outputFileTracingRoot: root,
  turbopack: { root },
};

export default config;
