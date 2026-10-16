# Contributing

Thanks for helping. Small, focused pull requests are easiest to review.

## Setup

```bash
pnpm install
pnpm dev
```

## Before you open a pull request

Run the same checks as CI:

```bash
pnpm typecheck && pnpm lint && pnpm format:check && pnpm build
```

If you change `scripts/` or `src/lib/animated-icon.tsx`, run `pnpm generate` and `pnpm registry` and include the regenerated output.

## Changing how an icon moves

Most icons are driven by a rig derived in `scripts/rigs.ts`. Prefer improving a rule there, so every icon of that kind benefits. Write a hand-tuned icon in `src/overrides` only when a rule cannot express the motion. Motion should follow what the icon depicts, stay quiet, and return to rest cleanly.

## Style

- TypeScript with strict settings. No `any`, no `@ts-ignore`.
- Prettier formats, ESLint lints. Use named exports and kebab-case file names.
- Keep UI changes consistent with the existing neutral look and single blue accent.
- Commit messages are one line: `<type>: <description>`.

By contributing you agree that your work is released under the [MIT license](LICENSE).
