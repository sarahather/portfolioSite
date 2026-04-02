# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Personal portfolio website for Sarah Ather — a software engineer with a rich career, travels, speaking engagements, handmade crafts, and writing. The portfolio is fully static (no database or API server required) and deployable to Vercel for free.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite (portfolio site)
- **Frontend Routing**: Wouter
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Contact Form**: Formspree (free third-party service, no backend needed)
- **Deployment**: Vercel (free tier), custom domain: sarahather.com

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   └── portfolio/          # React + Vite portfolio frontend (served at /)
├── lib/                    # Shared libraries
│   ├── content/            # Static TypeScript data files (work experience, travels, speaking, crafts, writing)
│   ├── api-spec/           # OpenAPI spec + Orval codegen config (legacy, unused)
│   ├── api-client-react/   # Generated React Query hooks (legacy, unused)
│   └── api-zod/            # Generated Zod schemas from OpenAPI (legacy, unused)
├── scripts/                # Utility scripts
├── DEPLOYMENT.md           # Step-by-step Vercel + GoDaddy DNS instructions
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── package.json
```

## Content Management

All portfolio content is stored as TypeScript arrays in `lib/content/src/`:

| File | Content |
|------|---------|
| `work-experience.ts` | Career timeline entries with highlights, technologies |
| `travels.ts` | Travel destinations with itineraries, highlights, practical info |
| `speaking.ts` | Speaking engagements with event details |
| `crafts.ts` | Handmade craft products with categories and tags |
| `writing.ts` | Blog posts/essays (currently empty — coming soon) |

To update content, edit the TypeScript file directly and redeploy.

## Contact Form

The contact form uses [Formspree](https://formspree.io) — a free third-party service that emails the site owner when someone submits the form. The form ID is configured via the `VITE_FORMSPREE_FORM_ID` environment variable. See `DEPLOYMENT.md` for setup instructions.

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`).
- **`emitDeclarationOnly`** — only emit `.d.ts` files during typecheck.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array.
- **Build declarations first** — run `tsc --build lib/content/tsconfig.json` before running portfolio typecheck if declarations are missing.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/portfolio` (`@workspace/portfolio`)

React + Vite portfolio frontend served at `/`. Fully static — no API calls for data. Content imported directly from `@workspace/content`.

- Entry: `src/main.tsx` → `src/App.tsx` 
- Pages: `src/pages/`
- Components: `src/components/`
- `vercel.json` at artifact root — configures Vercel SPA deployment (root directory = `artifacts/portfolio`)
- `VITE_FORMSPREE_FORM_ID` env var required for contact form
- `pnpm --filter @workspace/portfolio run dev` — run dev server
- `pnpm --filter @workspace/portfolio run build` — production build

### `lib/content` (`@workspace/content`)

Static TypeScript data files for all portfolio content types. No external dependencies — just pure TypeScript. Run `tsc --build lib/content/tsconfig.json` to emit `.d.ts` declaration files to `lib/content/dist/`.

### `lib/api-spec`, `lib/api-zod`, `lib/api-client-react` (legacy, unused)

Legacy packages left in the repo. Not referenced by the portfolio or any active package.

### `scripts` (`@workspace/scripts`)

Utility scripts package.
