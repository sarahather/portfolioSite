# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Personal portfolio website for a software engineer with a rich career, travels, speaking engagements, handmade crafts, and writing.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5 (Node.js backend)
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite (portfolio site)
- **Frontend Routing**: Wouter
- **Frontend State**: TanStack React Query
- **Styling**: Tailwind CSS v4 + shadcn/ui

## Structure

```text
artifacts-monorepo/
├── artifacts/
│   ├── api-server/         # Express API server (backend for portfolio)
│   └── portfolio/          # React + Vite portfolio frontend (served at /)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── package.json
```

## Portfolio API Endpoints

All endpoints are served at `/api`:

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/healthz | Health check |
| GET | /api/stats | Portfolio summary stats (experience, travel, talks, crafts, writing, mentees) |
| GET | /api/work-experience | All work experiences (reverse chronological) |
| GET | /api/work-experience/:id | Single work experience |
| GET | /api/travels | All travel destinations (preview info) |
| GET | /api/travels/:id | Single travel destination with full itinerary |
| GET | /api/speaking | All speaking engagements |
| GET | /api/crafts | All craft products |
| GET | /api/writing | All published writing posts |
| GET | /api/writing/:id | Single writing post |
| POST | /api/contact | Submit a contact form (categories: speaking, recruiting, crafts, general) |

## Database Schema

Tables:
- `work_experience` — Career timeline entries with highlights, technologies
- `travels` — Travel destinations with JSONB itinerary field
- `speaking` — Speaking engagements with event details and URLs
- `crafts` — Handmade craft products with categories and tags
- `writing` — Blog posts/articles with drafts support
- `contact_submissions` — Contact form submissions

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references. This means:

- **Always typecheck from the root** — run `pnpm run typecheck` (which runs `tsc --build --emitDeclarationOnly`).
- **`emitDeclarationOnly`** — only emit `.d.ts` files during typecheck.
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array.

## Root Scripts

- `pnpm run build` — runs `typecheck` first, then recursively runs `build` in all packages
- `pnpm run typecheck` — runs `tsc --build --emitDeclarationOnly` using project references

## Packages

### `artifacts/portfolio` (`@workspace/portfolio`)

React + Vite portfolio frontend served at `/`. Single-page scrollable site with sections: Hero, Work Experience, Travels, Speaking, Crafts, Writing, Contact.

- Entry: `src/main.tsx` → `src/App.tsx` 
- Pages: `src/pages/` (single main `index.tsx` / `Portfolio.tsx`)
- Components: `src/components/` (section components + modals)
- `pnpm --filter @workspace/portfolio run dev` — run dev server

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. Routes live in `src/routes/`.

- Entry: `src/index.ts` — reads `PORT`, starts Express
- App setup: `src/app.ts` — mounts CORS, JSON parsing, routes at `/api`
- Routes: `src/routes/index.ts` mounts all sub-routers
- Depends on: `@workspace/db`, `@workspace/api-zod`
- `pnpm --filter @workspace/api-server run dev` — run the dev server

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL.

- `src/schema/index.ts` — barrel re-export of all models
- `pnpm --filter @workspace/db run push` — push schema changes to database

### `lib/api-spec` (`@workspace/api-spec`)

Owns the OpenAPI 3.1 spec (`openapi.yaml`) and the Orval config. Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec.

### `scripts` (`@workspace/scripts`)

Utility scripts package.
