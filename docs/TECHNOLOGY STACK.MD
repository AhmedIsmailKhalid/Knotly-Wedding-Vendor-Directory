# TECHNOLOGY STACK

## Stack at a Glance

| Layer | Technology | Version | Rationale |
|---|---|---|---|
| Framework | Next.js (App Router) | 14.x | Full-stack React, SSR, RSC, Server Actions |
| Language | TypeScript | 5.x | End-to-end type safety |
| Styling | Tailwind CSS | 3.x | Utility-first, consistent design system |
| ORM | Prisma | 5.x | Type-safe DB queries, migrations, seeding |
| Database | PostgreSQL via Neon | — | Serverless Postgres, free tier, production-ready |
| Auth | NextAuth.js | 4.x | Role-based session management |
| Validation | Zod | 3.x | Runtime schema validation, paired with TypeScript |
| Image Storage | Cloudinary | — | Managed image upload, transformation, CDN delivery |
| Deployment | Vercel | — | Canonical Next.js host, edge functions, CI/CD |

---

## Frontend

### Next.js 14 — App Router
- **Server Components (RSC)** for all data-fetching pages — vendors directory, vendor profiles, dashboards
- **Client Components** only where interactivity is required — search bar, filters, forms, modals
- **Server Actions** for form mutations — inquiry submission, review creation, listing updates
- **File-based routing** with route groups for clean separation of public, couple, vendor, and admin experiences
- **Parallel and intercepting routes** for modal-based vendor profile previews from directory

### TypeScript
- Strict mode enabled
- All API responses, Prisma models, and component props fully typed
- Extended NextAuth `Session` type to carry `role`, `vendorProfileId`
- Zod schemas co-located with validations, inferred types exported for reuse

### Tailwind CSS
- Custom theme extending Knotly's brand palette (blush, gold, slate)
- `clsx` + `tailwind-merge` via `cn()` utility for conditional class composition
- No component library dependency — all UI components built from scratch for full control

---

## Backend

### API Layer
- **Next.js Route Handlers** (`/app/api/`) for REST endpoints consumed by Client Components
- **Server Actions** for form submissions originating from Server or Client Components
- All handlers follow a consistent pattern: parse → validate (Zod) → authorize → execute → respond
- Error responses are typed and consistent across all endpoints

### NextAuth.js
- **Credentials provider** — email/password with bcrypt hashing
- **Role-based access control** — `COUPLE`, `VENDOR`, `ADMIN` roles stored in the DB and attached to the JWT session
- **Middleware-based route protection** — `/couple/*`, `/vendor/*`, `/admin/*` require authenticated session with correct role
- Session strategy: **JWT** (stateless, no session table required)

### Prisma ORM
- Schema-first — `schema.prisma` is the single source of truth
- Migrations committed to version control for reproducibility
- Prisma Client singleton pattern to prevent connection pool exhaustion in serverless
- Seed script populates realistic vendor data across all 7 categories for development

### Validation — Zod
- All incoming request bodies validated with Zod before hitting the DB
- Shared schemas between client-side form validation and server-side handler validation
- Custom error formatting for consistent API error responses

---

## Data Layer

### Neon PostgreSQL
- Serverless PostgreSQL — connection pooling handled automatically
- Free tier supports full development and portfolio-scale production traffic
- Prisma connects via `DATABASE_URL` with connection pooling string for serverless compatibility
- Branching available for staging environments

### Cloudinary (Image Storage)
- Vendor gallery photo uploads — drag-and-drop in listing wizard
- Signed upload presets — client uploads directly to Cloudinary, `publicId` and URL stored in DB
- On-the-fly transformations — thumbnail generation, WebP conversion, responsive sizing
- No binary blobs stored in PostgreSQL

---

## Infrastructure & DevOps

### Vercel
- Zero-config Next.js deployment — push to `main` triggers production deploy
- Environment variables managed in Vercel dashboard
- Edge Middleware for route protection runs at CDN level (sub-millisecond)
- Automatic preview deployments on every PR

### GitHub Actions
- CI pipeline on every push:
  - TypeScript type check (`tsc --noEmit`)
  - ESLint lint check
  - Prisma schema validation (`prisma validate`)
- CD handled by Vercel GitHub integration (not duplicated in Actions)

---

## Development Tooling

| Tool | Purpose |
|---|---|
| ESLint | Code quality, Next.js ruleset |
| Prettier | Consistent formatting |
| Prisma Studio | GUI for local DB inspection |
| ts-node | Run seed scripts directly |

---

## Why This Stack — Portfolio Differentiation

| Project | Stack Pattern |
|---|---|
| Luxe Hair Studio | React SPA + Node/Express + Supabase |
| Stackly | React SPA + Node/Express + WebSockets + PostgreSQL |
| **Knotly** | **Next.js 14 App Router + Server Actions + Prisma + NextAuth** |

Knotly is the only project in the portfolio that demonstrates:
- **React Server Components** — current industry direction for React
- **Server Actions** — Next.js-native form mutations, no separate API layer needed for mutations
- **Role-based multi-portal architecture** — couple portal, vendor portal, admin panel in one codebase
- **Image upload pipeline** — Cloudinary signed uploads, a real-world pattern in almost every product