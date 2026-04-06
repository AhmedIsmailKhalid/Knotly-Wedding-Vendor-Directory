# IMPLEMENTATION ROADMAP

## Overview

The roadmap is structured across 7 phases. Each phase is independently deployable and testable — we never have a long period of broken state. Phases build on each other strictly in dependency order.

**Total estimated phases:** 7  
**Deployment strategy:** Deploy to Vercel from Phase 1 — live URL exists from day one.

---

## Phase 0 — Project Scaffold & Infrastructure

**Goal:** Working Next.js app deployed to Vercel, database connected, environment configured.

### Tasks
- ✅ `npx create-next-app@latest knotly --typescript --tailwind --app --src-dir`
- ✅ Configure `tsconfig.json` — strict mode on
- ✅ Configure `eslint` with Next.js ruleset
- ✅ Set up Tailwind custom theme — Knotly brand palette (blush, gold, slate)
- ✅ Install and configure Prisma — `prisma init`
- ✅ Create Neon PostgreSQL project, connect via `DATABASE_URL`
- ✅ Write initial `schema.prisma` — all models (User, VendorProfile, GalleryPhoto, Inquiry, InquiryResponse, Review, SavedVendor)
- ✅ Run first migration — `prisma migrate dev --name init`
- ✅ Build `src/lib/prisma.ts` — singleton Prisma client
- ✅ Build `cn()` utility — `clsx` + `tailwind-merge`
- ✅ Set up constants — `categories.ts`, `locations.ts`, `pricing.ts`
- ✅ Deploy to Vercel — connect GitHub repo, set environment variables
- ✅ Confirm database connection works in production

**Exit Criteria:** App loads at Vercel URL. Prisma connects to Neon. No TypeScript errors.

---

## Phase 1 — Authentication

**Goal:** Working login, registration, and role-based session. All three portals protected.

### Tasks
- ✅ Install NextAuth — `next-auth`, `@auth/prisma-adapter`
- ✅ Build `src/lib/auth.ts` — NextAuth config, credentials provider, JWT callbacks
- ✅ Extend NextAuth session types — `role`, `vendorProfileId` on `Session`
- ✅ Build `/api/auth/[...nextauth]/route.ts`
- ✅ Build `middleware.ts` — protect `/couple/*`, `/vendor/*`, `/admin/*` routes
- ✅ Build UI components — `LoginForm.tsx`, `RegisterForm.tsx`, `RoleSelector.tsx`
- ✅ Build pages — `/login`, `/register`, `/register/couple`, `/register/vendor`
- ✅ Add bcrypt password hashing on registration
- ✅ Zod validation schemas for auth forms
- ✅ Build shared `AuthProvider` wrapper in root layout
- ✅ Test: register as couple → redirected to couple dashboard; register as vendor → vendor dashboard

**Exit Criteria:** All three roles can register and log in. Wrong-role access redirects correctly. Sessions persist across refresh.

---

## Phase 2 — Vendor Listing Creation (Vendor Portal)

**Goal:** Vendors can create and publish their listing. This is the supply side — without it, there's nothing to browse.

### Tasks
- ✅ Build vendor dashboard layout — `(vendor)/layout.tsx` with sidebar nav
- ✅ Build `ListingWizard.tsx` — multi-step shell with progress indicator
- ✅ Build wizard steps:
  - `BasicInfoStep.tsx` — business name, category (dropdown), location, bio
  - `PricingStep.tsx` — price range selection, packages description
  - `GalleryStep.tsx` — photo upload (Cloudinary integration)
  - `ReviewStep.tsx` — preview before publish
- ✅ Set up Cloudinary — create account, unsigned upload preset, install `next-cloudinary`
- ✅ Build `GalleryUploader.tsx` — drag-and-drop with preview
- ✅ Build `/api/vendors/route.ts` — POST create vendor listing (Server Action)
- ✅ Build `generateSlug()` utility — unique slug from business name
- ✅ Build `/vendor/listing/page.tsx` — view current listing
- ✅ Build `/vendor/listing/edit/page.tsx` — edit existing listing
- ✅ Build `/vendor/settings/page.tsx` — account settings
- ✅ Zod validation for listing form
- ✅ `isApproved: false` by default — listings not publicly visible until admin approves

**Exit Criteria:** Vendor can complete the wizard, upload photos, and publish a listing (pending admin approval).

---

## Phase 3 — Public Vendor Directory (Couple/Public Experience)

**Goal:** Couples can browse, search, and filter vendors. The core product experience.

### Tasks
- ✅ Build homepage — `HeroSection`, `CategoryGrid`, `FeaturedVendors`, `HowItWorks`
- ✅ Build `VendorCard.tsx` — photo, name, category badge, location, price range, star rating
- ✅ Build `VendorGrid.tsx` — responsive masonry-style grid
- ✅ Build `VendorFilters.tsx` — category, location, price range filter sidebar
- ✅ Build `VendorSearchBar.tsx` — debounced search input
- ✅ Build `/vendors/page.tsx` — full directory with filters (SSR, URL query params)
- ✅ Build `/vendors/[slug]/page.tsx` — full vendor profile (gallery, bio, pricing, reviews)
- ✅ Build `VendorGallery.tsx` — photo gallery with lightbox
- ✅ Build `/api/search/route.ts` — PostgreSQL full-text search
- ✅ Build `/api/vendors/route.ts` GET — paginated vendor listing with filter params
- ✅ Build `/categories/[category]/page.tsx` — category-filtered listing page
- ✅ Seed database — realistic vendor data across all 7 categories via `prisma/seed.ts`
- ✅ Only `isApproved: true` vendors visible publicly

**Exit Criteria:** Homepage, directory, filters, search, and individual profiles all work. Seeded vendors appear correctly across categories.

---

## Phase 4 — Booking Inquiry System

**Goal:** Couples can send booking inquiries to vendors. Vendors can respond. Core transactional flow.

### Tasks
- [ ] Build `InquiryForm.tsx` — event date picker, guest count, message textarea
- [ ] Build couple dashboard layout — `(couple)/layout.tsx`
- [ ] Build `/couple/dashboard/page.tsx` — overview with recent inquiries
- [ ] Build `/couple/inquiries/page.tsx` — sent inquiry history with status badges
- [ ] Build `InquiryCard.tsx` — displays inquiry + vendor response if any
- [ ] Build `InquiryStatusBadge.tsx` — PENDING / ACCEPTED / DECLINED / CANCELLED
- [ ] Build `/vendor/inquiries/page.tsx` — inquiry inbox for vendors
- [ ] Build `InquiryResponseForm.tsx` — vendor accepts/declines with message
- [ ] Build Server Actions — `submitInquiry`, `respondToInquiry`
- [ ] Build `/api/inquiries/route.ts` — GET/POST inquiries
- [ ] Build `/api/inquiries/[id]/route.ts` — GET, PUT (status update)
- [ ] Zod validation for inquiry form
- [ ] Auth guard — only authenticated couples can submit inquiries

**Exit Criteria:** Full inquiry lifecycle works — couple submits, vendor sees it, vendor responds, couple sees response and updated status.

---

## Phase 5 — Save Vendors & Reviews

**Goal:** Couples can save vendors to a shortlist. Couples can leave reviews after interactions.

### Tasks
- [ ] Build `SavedVendorsList.tsx` — couple's saved vendor shortlist widget
- [ ] Build `/couple/saved/page.tsx` — full saved vendors page
- [ ] Build save/unsave toggle on `VendorCard` — optimistic UI update
- [ ] Build `/api/saved/route.ts` — GET saved list, POST save, DELETE unsave
- [ ] Build `useSavedVendors.ts` hook — manages optimistic toggle with server sync
- [ ] Build `ReviewForm.tsx` — star rating + written review
- [ ] Build `ReviewCard.tsx`, `ReviewList.tsx`, `RatingSummary.tsx`
- [ ] Build `/api/reviews/route.ts` — POST create review
- [ ] Build `/api/reviews/[vendorId]/route.ts` — GET reviews for vendor
- [ ] Display reviews and aggregate rating on vendor profile page
- [ ] Guard: only couples who sent an accepted inquiry to a vendor can leave a review

**Exit Criteria:** Save/unsave works with optimistic UI. Reviews appear on vendor profiles with accurate aggregate rating.

---

## Phase 6 — Admin Panel & Listing Approval

**Goal:** Admins can approve vendor listings and manage the platform. Prevents spam, maintains quality.

### Tasks
- [ ] Build admin layout — `(admin)/layout.tsx`
- [ ] Build `/admin/dashboard/page.tsx` — platform stats (total vendors, couples, inquiries, pending approvals)
- [ ] Build `/admin/vendors/page.tsx` — all listings with approve/reject actions
- [ ] Build `/admin/vendors/[id]/page.tsx` — individual vendor review with full listing preview
- [ ] Build approve/reject Server Actions — toggle `isApproved`, optionally add rejection reason
- [ ] Build `/admin/users/page.tsx` — user list with role and status
- [ ] Build `StatsCard.tsx` — reusable dashboard stat widget
- [ ] Seed admin user in `prisma/seed.ts`
- [ ] Admin middleware protection — `role: ADMIN` required for all `/admin/*`

**Exit Criteria:** Admin can approve a vendor listing and it immediately appears in the public directory. Admin can reject a listing. Stats dashboard reflects live data.

---

## Phase 7 — Polish, SEO & Deployment Hardening

**Goal:** Production-ready finish. Performance, SEO, accessibility, error states, empty states.

### Tasks
- [ ] Add `generateMetadata()` to all public pages — title, description, Open Graph
- [ ] Add `sitemap.ts` — dynamic sitemap including all approved vendor slugs
- [ ] Add `robots.ts`
- [ ] Implement loading skeletons — `Skeleton.tsx` for all data-fetching pages
- [ ] Implement empty states — no vendors found, no inquiries, no saved vendors
- [ ] Implement error boundaries — `error.tsx` per route group
- [ ] Add toast notification system — success/error feedback on all mutations
- [ ] Responsive audit — test all pages on mobile breakpoints
- [ ] Accessibility audit — keyboard navigation, ARIA labels, focus management
- [ ] Image optimization — `next/image` on all vendor photos, blur placeholder
- [ ] Rate limiting on inquiry submission — prevent spam
- [ ] Final environment variable audit — no secrets in client components
- [ ] Lighthouse audit — target 90+ on Performance, Accessibility, Best Practices
- [ ] Update README.md — setup instructions, architecture overview, screenshots

**Exit Criteria:** Lighthouse 90+ across all categories. All pages have correct metadata. Mobile experience is polished. README is complete.

---

## Development Order Summary

```
Phase 0 → Scaffold & DB          [Infrastructure]
Phase 1 → Authentication          [Foundation — everything needs auth]
Phase 2 → Vendor Listings         [Supply side — content needed before browsing]
Phase 3 → Public Directory        [Demand side — core product experience]
Phase 4 → Inquiry System          [Core transaction — supply meets demand]
Phase 5 → Save & Reviews          [Engagement layer]
Phase 6 → Admin Panel             [Quality control]
Phase 7 → Polish & SEO            [Production hardening]
```

---

## Git Branch Strategy

```
main          → production (Vercel auto-deploys)
develop       → integration branch
feature/*     → individual feature branches

Branch naming:
  feature/auth-system
  feature/vendor-listing-wizard
  feature/public-directory
  feature/inquiry-system
  feature/save-reviews
  feature/admin-panel
```

Each phase = one feature branch → PR → merge to `develop` → merge to `main` when phase is complete and tested.