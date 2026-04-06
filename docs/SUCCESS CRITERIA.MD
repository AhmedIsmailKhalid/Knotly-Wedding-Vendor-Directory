# SUCCESS CRITERIA

## Definition of Done

Knotly is considered complete when all three user roles can complete their core journey end-to-end, the platform is publicly accessible, and the codebase reflects production-grade engineering standards.

---

## Role-Based Success Criteria

### Couple (Demand Side)

| # | Criteria | How to Verify |
|---|---|---|
| C1 | Can register with email and password, role assigned as COUPLE | Register → session shows role: COUPLE |
| C2 | Can browse the full vendor directory with visible listings | /vendors → cards visible across all categories |
| C3 | Can filter vendors by category, location, and price range | Apply each filter → results update correctly |
| C4 | Can search vendors by keyword — results reflect name, bio, location | Search "photographer London" → relevant results |
| C5 | Can open a vendor profile and see full details — gallery, bio, pricing, reviews | /vendors/[slug] → all sections populated |
| C6 | Can save a vendor to their shortlist with optimistic UI feedback | Click save → immediate UI update, persists on refresh |
| C7 | Can unsave a vendor — removed from saved list | Click unsave → removed immediately |
| C8 | Can submit a booking inquiry to a vendor | Inquiry form → submitted → appears in /couple/inquiries as PENDING |
| C9 | Can view inquiry status updates (ACCEPTED / DECLINED) | Vendor responds → couple sees updated status |
| C10 | Can leave a review for a vendor after an accepted inquiry | Review form → review appears on vendor profile |
| C11 | Dashboard shows accurate summary of saved vendors and inquiries | /couple/dashboard → correct counts |

---

### Vendor (Supply Side)

| # | Criteria | How to Verify |
|---|---|---|
| V1 | Can register with email and password, role assigned as VENDOR | Register → session shows role: VENDOR |
| V2 | Can complete the multi-step listing wizard — basic info, pricing, gallery | Wizard → all steps pass validation → listing created |
| V3 | Can upload photos via drag-and-drop — photos stored in Cloudinary | Upload → photos appear in gallery on profile |
| V4 | Listing is created with isApproved: false — not publicly visible | New listing → does not appear at /vendors |
| V5 | Can edit their listing — changes reflected on profile after save | Edit form → save → updated data visible |
| V6 | Can view received inquiries in their inbox | Couple sends inquiry → appears in /vendor/inquiries |
| V7 | Can accept or decline an inquiry with a message | Accept/Decline → couple sees updated status |
| V8 | Can manage their gallery — add and remove photos | Gallery page → add photo → appears; remove photo → gone |
| V9 | Dashboard shows inquiry count, listing status, and recent activity | /vendor/dashboard → accurate stats |
| V10 | Can update account settings — name, email, password | Settings form → save → session reflects update |

---

### Admin

| # | Criteria | How to Verify |
|---|---|---|
| A1 | Can log in as admin — redirected to /admin/dashboard | Login with admin credentials → /admin |
| A2 | Dashboard shows platform-wide stats — vendors, couples, inquiries, pending approvals | /admin/dashboard → live aggregate data |
| A3 | Can view all vendor listings, filtered by approval status | /admin/vendors → all listings visible |
| A4 | Can approve a vendor listing — listing becomes publicly visible | Approve → listing appears at /vendors |
| A5 | Can reject a vendor listing — listing remains hidden | Reject → listing absent from /vendors |
| A6 | Can view all registered users | /admin/users → full user list |
| A7 | Non-admin users cannot access /admin/* routes | Logged-in couple hits /admin → redirected |

---

## Technical Success Criteria

### Type Safety
- [ ] Zero TypeScript errors — `tsc --noEmit` passes with zero errors
- [ ] All API response shapes typed — no `any` in response handling
- [ ] Prisma-generated types used throughout — no manual type duplication
- [ ] NextAuth session fully typed — `role` and `vendorProfileId` available without casting

### Validation
- [ ] All user inputs validated with Zod — both client-side (form feedback) and server-side (API / Server Action)
- [ ] Validation errors surface inline on forms — not alert dialogs
- [ ] No raw user input reaches the database unvalidated

### Security
- [ ] All protected routes verified via middleware AND server-side session check
- [ ] All mutations verify ownership before write (e.g. vendor can only edit their own listing)
- [ ] No user IDs or role claims accepted from client request bodies — always derived from session
- [ ] Cloudinary upload uses signed preset — upload preset not exposed to client
- [ ] Passwords hashed with bcrypt before storage
- [ ] `NEXTAUTH_SECRET` set and not hardcoded

### Performance
- [ ] Lighthouse Performance score ≥ 90 on homepage and vendor directory
- [ ] All vendor photos served via `next/image` — automatic WebP, lazy load, blur placeholder
- [ ] No unnecessary Client Components — data-only pages use Server Components
- [ ] Prisma queries include only necessary fields — no unbounded `SELECT *`
- [ ] Search results paginated — max 20 per page

### Accessibility
- [ ] Lighthouse Accessibility score ≥ 90
- [ ] All interactive elements keyboard-navigable
- [ ] All images have descriptive `alt` text
- [ ] Form inputs have associated `<label>` elements
- [ ] Star rating component accessible via keyboard

### Error Handling
- [ ] Every API route returns typed error responses — never unhandled 500s in production
- [ ] Every Server Action returns `{ success, error }` — never throws to the client
- [ ] Empty states implemented — directory with no results, empty saved list, empty inbox
- [ ] Loading skeletons on all data-fetching pages
- [ ] `error.tsx` boundary per route group

### Code Quality
- [ ] ESLint passes with zero warnings
- [ ] No console.log statements in production code
- [ ] No hardcoded credentials or secrets in source
- [ ] All components have defined TypeScript prop types
- [ ] Utility functions have JSDoc comments

---

## SEO & Discoverability

- [ ] All public pages have unique `<title>` and `<meta description>` via `generateMetadata()`
- [ ] Vendor profile pages have Open Graph metadata — shareable link previews
- [ ] Dynamic `sitemap.ts` includes all approved vendor slugs
- [ ] `robots.ts` configured — public pages indexed, dashboard routes excluded
- [ ] Vendor URLs use readable slugs (`/vendors/bloom-photography-london`) not UUIDs

---

## Deployment Criteria

- [ ] Application deployed to Vercel — public URL accessible
- [ ] Production environment variables set in Vercel dashboard — none hardcoded
- [ ] Database connected to Neon production project — not local dev DB
- [ ] Cloudinary connected to production account
- [ ] Production deployment has seeded vendor data — realistic content visible without manual setup
- [ ] GitHub Actions CI passes on every push — type check + lint + schema validation

---

## Portfolio Presentation Criteria

- [ ] README.md complete — project overview, tech stack table, local setup instructions, screenshots
- [ ] Architecture diagram included in README
- [ ] Live URL prominent in README and GitHub repo description
- [ ] All 7 vendor categories have at least 3 seeded vendors with photos
- [ ] Demo accounts documented — couple@demo.com, vendor@demo.com, admin@demo.com with shared password
- [ ] LinkedIn project description written
- [ ] Project added to portfolio website (Knotly section)

---

## Non-Goals (Out of Scope)

The following are explicitly out of scope for the portfolio version of Knotly:

- Real payment processing (Stripe) — no financial transactions
- Email notifications — no transactional email (SendGrid etc.)
- Real-time messaging — no WebSocket chat between vendors and couples
- Calendar/availability system — inquiry uses event date field only
- Mobile native app
- Multi-language / internationalisation
- Advanced analytics dashboard for vendors

These are called out so scope does not drift during implementation.