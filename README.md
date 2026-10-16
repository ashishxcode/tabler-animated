# Tabler Animated

Every Tabler icon, animated to match what it shows. Hover an icon to watch it move, then install it one at a time with the shadcn CLI. Each install adds a single component that depends only on [`motion`](https://motion.dev).

## Use an icon

```bash
npx shadcn@latest add https://<your-site>/r/bell.json
```

```tsx
import { BellIcon } from "@/components/ui/animated-icons/bell";

export function Example() {
  return <BellIcon size={24} strokeWidth={2} />;
}
```

Icons play on hover and keyboard focus. Every icon also exposes `startAnimation()` and `stopAnimation()` through a ref, for touch screens and for triggering the motion yourself. With `prefers-reduced-motion` the movement is replaced by a short opacity cue.

## How it works

- `src/lib/animated-icon.tsx` is the motion core: a small set of movements (swing, beat, spin, draw, wave and so on) built from the principles of animation, with one shared timing scale.
- `scripts/rigs.ts` derives a rig for each icon from its geometry and name, so the motion matches what the icon depicts. About thirty icons are written by hand in `src/overrides`.
- `scripts/generate.ts` and `scripts/build-registry.ts` turn Tabler's SVGs into components and shadcn registry items.
- `apps/web` is the Next.js gallery: search, categories, a preview with live customization, and the install commands.

## Develop

Requires Node 22 and pnpm.

```bash
pnpm install
pnpm generate      # regenerate src/icons from @tabler/icons
pnpm registry      # rebuild apps/web/public/r
pnpm dev           # gallery at http://localhost:3100
```

Checks, all of which run in CI:

```bash
pnpm typecheck
pnpm lint
pnpm format:check
pnpm build
```

## Configuration

Copy `apps/web/.env.example` to `apps/web/.env.local`:

- `NEXT_PUBLIC_SITE_URL`: the public domain, used for canonical links, the sitemap and share images.
- `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST`: optional [PostHog](https://posthog.com) analytics, cookieless. Without a key, events are only logged to the console in development.
- `NEXT_PUBLIC_FORMSPREE_ID`: the ID of a [Formspree](https://formspree.io) form that receives feedback.

## License

[MIT](LICENSE) © 2026 Ashish Patel.

The icon shapes come from [Tabler Icons](https://github.com/tabler/tabler-icons), also MIT licensed, copyright Paweł Kuna. Its license is reproduced in [THIRD_PARTY_LICENSES.md](THIRD_PARTY_LICENSES.md). This is an independent project and is not affiliated with Tabler.
