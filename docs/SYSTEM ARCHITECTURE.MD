# SYSTEM ARCHITECTURE

## Architecture Overview

Knotly is a full-stack Next.js 14 application using the App Router architecture. It serves three distinct user roles — **Couples**, **Vendors**, and **Admins** — from a single codebase. Data fetching, rendering, and mutations are split intentionally between Server Components, Client Components, and Server Actions to maximize performance and minimize client-side JavaScript.

---

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         VERCEL EDGE                             │
│  ┌──────────────────┐                                           │
│  │    Middleware     │ ← Route protection (JWT role check)      │
│  └────────┬─────────┘                                           │
│           │                                                     │
│  ┌────────▼─────────────────────────────────────────────────┐  │
│  │              Next.js 14 App Router                        │  │
│  │                                                           │  │
│  │  ┌─────────────┐  ┌──────────────┐  ┌─────────────────┐ │  │
│  │  │   (public)  │  │  (couple)    │  │    (vendor)     │ │  │
│  │  │  /vendors   │  │  /dashboard  │  │  /dashboard     │ │  │
│  │  │  /search    │  │  /saved      │  │  /listing       │ │  │
│  │  │  /categories│  │  /inquiries  │  │  /inquiries     │ │  │
│  │  └─────────────┘  └──────────────┘  └─────────────────┘ │  │
│  │                                                           │  │
│  │  ┌─────────────────────────────────────────────────────┐ │  │
│  │  │                  /api (Route Handlers)              │ │  │
│  │  │  /auth  /vendors  /reviews  /saved  /inquiries      │ │  │
│  │  └─────────────────────────────────────────────────────┘ │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
           │                    │                    │
           ▼                    ▼                    ▼
   ┌───────────────┐   ┌────────────────┐   ┌──────────────┐
   │  Neon Postgres │   │  NextAuth JWT  │   │  Cloudinary  │
   │  via Prisma    │   │  Session Store │   │  Image CDN   │
   └───────────────┘   └────────────────┘   └──────────────┘
```

---

## Rendering Strategy

Knotly uses a deliberate mix of rendering strategies — not one-size-fits-all.

```
Page                          Rendering          Reason
─────────────────────────────────────────────────────────────────
Homepage                      SSG + ISR          Static, revalidated hourly
/vendors (directory)          SSR                Filter params from URL, personalization
/vendors/[slug]               SSR + ISR          Profile data, reviews — revalidate on update
/search                       SSR                Query-param driven, cannot be cached
/couple/dashboard             Dynamic SSR        Auth-gated, user-specific data
/vendor/dashboard             Dynamic SSR        Auth-gated, vendor-specific data
/vendor/listing/create        Client Component   Multi-step wizard, local state heavy
/admin/dashboard              Dynamic SSR        Auth-gated, aggregate stats
```

**Rule:** If a page needs a session, it renders server-side dynamically. If it's public and query-driven, it's SSR. If it's fully static, it's SSG with ISR.

---

## Data Flow Patterns

### Pattern 1 — Server Component Data Fetch (Read)

Used for: vendor directory, vendor profiles, dashboards

```
Browser Request
      │
      ▼
Next.js Server Component
      │
      ├─ Reads session via getServerSession()
      ├─ Calls Prisma directly (no HTTP round-trip)
      │
      ▼
Prisma Client → Neon PostgreSQL
      │
      ▼
Data rendered into HTML on server → sent to browser
(zero client-side data fetching for initial load)
```

### Pattern 2 — Server Action (Mutation)

Used for: inquiry submission, review creation, listing updates, save/unsave

```
Client Component (form submit)
      │
      ▼
Server Action (runs on server)
      │
      ├─ Validate input with Zod
      ├─ Authorize via session
      ├─ Execute Prisma mutation
      ├─ revalidatePath() to bust Next.js cache
      │
      ▼
Updated data reflected on next render
(no manual fetch invalidation, no client state sync needed)
```

### Pattern 3 — Route Handler (API, Client-Driven)

Used for: search (debounced), vendor filtering, saved toggle (optimistic UI)

```
Client Component
      │
      ├─ useDebounce() on search input
      │
      ▼
fetch('/api/search?q=...')
      │
      ▼
Route Handler
      ├─ Parse query params
      ├─ Validate with Zod
      ├─ Prisma full-text search query
      │
      ▼
JSON response → update UI
```

---

## Authentication & Authorization Architecture

### Session Model

```
NextAuth JWT Payload:
{
  sub: "user-id",
  email: "user@example.com",
  name: "...",
  role: "COUPLE" | "VENDOR" | "ADMIN",
  vendorProfileId: "..." | null   // populated for VENDOR role only
}
```

### Route Protection — Three Layers

**Layer 1 — Middleware (Edge)**
- Runs before the page renders
- Reads JWT from cookie
- Redirects unauthenticated users to `/login`
- Redirects wrong-role users (e.g. couple hitting `/vendor/*`) to their dashboard

```
middleware.ts covers:
  /couple/*   → requires role: COUPLE
  /vendor/*   → requires role: VENDOR
  /admin/*    → requires role: ADMIN
```

**Layer 2 — Server Component**
- `getServerSession()` in layout or page
- Double-checks role even if middleware passed
- Used for fine-grained authorization (e.g. vendor can only edit their own listing)

**Layer 3 — Server Action / Route Handler**
- Every mutation re-validates session server-side
- Ownership check before any write (e.g. `inquiry.vendorId === session.vendorProfileId`)
- No client-supplied `userId` trusted — always derived from session

---

## Database Architecture

### Entity Relationships

```
User ──────────────────────────────────────────────────┐
  │ (role: COUPLE)                                      │ (role: VENDOR)
  │                                                     │
  ├──< SavedVendor >── VendorProfile <──────────────────┘
  │                        │
  ├──< Inquiry >───────────┤
  │       │                ├──< GalleryPhoto
  │       └──< InquiryResponse          │
  │                        ├──< Review <──── User (COUPLE)
  └──────────────────────────────────────────────────────
```

### Key Schema Decisions

- **Slug on VendorProfile** — URL-safe unique identifier generated from business name. Used in `/vendors/[slug]` route. Never exposes internal UUIDs in URLs.
- **isApproved on VendorProfile** — Vendors start unapproved. Admin must approve before listing is publicly visible. Prevents spam listings.
- **status on Inquiry** — Enum: `PENDING | ACCEPTED | DECLINED | CANCELLED`. Drives inquiry lifecycle on both portals.
- **publicId on GalleryPhoto** — Cloudinary public ID stored alongside URL. Required for deletion via Cloudinary API.
- **Soft relationship SavedVendor** — Junction table between User (couple) and VendorProfile. No cascade delete — saved record persists even if vendor edits their listing.

---

## Image Upload Architecture

```
Vendor Browser
      │
      ├─ 1. Request signed upload preset from /api/upload
      │       (server generates short-lived Cloudinary signature)
      │
      ▼
Cloudinary (direct upload — bypasses our server)
      │
      ├─ 2. Returns { url, publicId }
      │
      ▼
      ├─ 3. Client sends { url, publicId } to Server Action
      │
      ▼
Prisma → GalleryPhoto record created in DB
```

**Why direct upload to Cloudinary?**
- Images never pass through Next.js server — no memory pressure, no size limits
- Cloudinary enforces file type and size constraints via upload preset
- Our server only stores metadata (URL + publicId), not binary data

---

## Search Architecture

Knotly search is built on **PostgreSQL full-text search via Prisma** — no external search service needed at portfolio scale.

```sql
-- Prisma raw query for vendor search
SELECT * FROM "VendorProfile"
WHERE to_tsvector('english', name || ' ' || bio || ' ' || location)
  @@ plainto_tsquery('english', $1)
  AND category = $2         -- optional filter
  AND "isApproved" = true
ORDER BY ts_rank(...) DESC
LIMIT 20 OFFSET $3;
```

Filters available:
- **Category** — Venue, Photographer, Caterer, etc.
- **Location** — String match on city/region
- **Price Range** — `BUDGET | MID | PREMIUM | LUXURY` enum filter
- **Rating** — Minimum average rating filter (computed from Review aggregate)

---

## Caching Strategy

| Data | Cache Approach | Revalidation |
|---|---|---|
| Homepage featured vendors | `fetch` with `revalidate: 3600` | Hourly |
| Vendor profile page | `revalidate: 300` + on-demand revalidation | 5 min + on listing update |
| Vendor directory | No cache (filter params) | Per-request |
| User dashboard | No cache (auth-gated) | Per-request |
| Search results | No cache (query-driven) | Per-request |

On-demand revalidation: Server Actions call `revalidatePath('/vendors/[slug]')` after any listing mutation so the cached profile reflects changes immediately.

---

## Error Handling Strategy

### Client-Side
- Form errors: Zod validation surfaced inline via react-hook-form integration
- Network errors: Try/catch around fetch calls, toast notification displayed
- Optimistic UI failures (save/unsave): Roll back on error, show toast

### Server-Side
- All Route Handlers wrapped in try/catch, return typed error JSON
- Server Actions return `{ success: boolean, error?: string }` — never throw to client
- Prisma errors caught and mapped to human-readable messages (e.g. unique constraint → "Email already registered")
- Unhandled errors bubble to `error.tsx` boundary

### HTTP Status Codes (Route Handlers)
- `200` — Success with data
- `201` — Resource created
- `400` — Validation error (Zod failure)
- `401` — Unauthenticated
- `403` — Authenticated but wrong role or not owner
- `404` — Resource not found
- `409` — Conflict (duplicate)
- `500` — Internal server error