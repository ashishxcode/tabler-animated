import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";

type Entry = { name: string; component: string; effect: string; override: boolean };
const manifest: Entry[] = JSON.parse(await readFile("src/icons/manifest.json", "utf8"));
const OUT = "apps/web/public/r";
await mkdir(OUT, { recursive: true });

const base = await readFile("src/lib/animated-icon.tsx", "utf8");

for (const { name, override } of manifest) {
  const path = override ? `src/overrides/${name}.tsx` : `src/icons/${name}.tsx`;
  if (!existsSync(path)) continue;
  const content = (await readFile(path, "utf8")).replaceAll("@/lib/animated-icon", "@/components/ui/animated-icon");
  const item = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name,
    type: "registry:ui",
    dependencies: ["motion"],
    registryDependencies: override ? [] : [],
    files: [
      { path: `components/ui/animated-icons/${name}.tsx`, type: "registry:ui", content },
      { path: "components/ui/animated-icon.tsx", type: "registry:ui", content: base },
    ],
  };
  await writeFile(`${OUT}/${name}.json`, JSON.stringify(item));
}
console.log(`registry: ${manifest.length} items -> ${OUT}`);
