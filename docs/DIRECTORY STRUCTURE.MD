# DIRECTORY STRUCTURE

## Root Structure

```
knotly/
├── .env.local                        # Environment variables (never committed)
├── .env.example                      # Template for environment variables
├── .eslintrc.json                    # ESLint configuration
├── .gitignore
├── next.config.js                    # Next.js configuration
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── prisma/
│   ├── schema.prisma                 # Database schema
│   ├── seed.ts                       # Seed script for dev data
│   └── migrations/                   # Prisma migration history
├── public/
│   ├── images/
│   │   ├── hero/                     # Homepage hero images
│   │   ├── categories/               # Vendor category icons
│   │   └── placeholders/             # Fallback images
│   └── favicon.ico
└── src/
    ├── app/                          # Next.js 14 App Router
    ├── components/                   # Reusable UI components
    ├── lib/                          # Utilities, DB client, helpers
    ├── hooks/                        # Custom React hooks
    ├── types/                        # TypeScript type definitions
    └── middleware.ts                 # Route protection middleware
```

---

## App Router — Full Structure

```
src/app/
│
├── layout.tsx                        # Root layout (font, metadata, providers)
├── page.tsx                          # Homepage — hero, featured vendors, categories
├── not-found.tsx                     # Global 404 page
├── error.tsx                         # Global error boundary
├── loading.tsx                       # Global loading skeleton
│
├── (public)/                         # Public-facing couple experience
│   ├── vendors/
│   │   ├── page.tsx                  # Vendor directory — search, filter, browse
│   │   └── [slug]/
│   │       └── page.tsx              # Individual vendor profile page
│   ├── categories/
│   │   └── [category]/
│   │       └── page.tsx              # Category-filtered vendor listing
│   └── search/
│       └── page.tsx                  # Full search results page
│
├── (auth)/                           # Auth pages (no nav chrome)
│   ├── login/
│   │   └── page.tsx                  # Shared login — role detected post-auth
│   ├── register/
│   │   ├── page.tsx                  # Registration type selector
│   │   ├── couple/
│   │   │   └── page.tsx              # Couple registration flow
│   │   └── vendor/
│   │       └── page.tsx              # Vendor registration flow
│   └── verify/
│       └── page.tsx                  # Email verification holding page
│
├── (couple)/                         # Authenticated couple dashboard
│   ├── layout.tsx                    # Couple dashboard layout + nav
│   ├── dashboard/
│   │   └── page.tsx                  # Couple dashboard — saved vendors, inquiries
│   ├── saved/
│   │   └── page.tsx                  # Saved/favourited vendor listings
│   └── inquiries/
│       └── page.tsx                  # Sent booking inquiry history
│
├── (vendor)/                         # Authenticated vendor dashboard
│   ├── layout.tsx                    # Vendor dashboard layout + nav
│   ├── dashboard/
│   │   └── page.tsx                  # Overview — listing stats, inquiry inbox
│   ├── listing/
│   │   ├── page.tsx                  # View current published listing
│   │   ├── create/
│   │   │   └── page.tsx              # Multi-step listing creation wizard
│   │   └── edit/
│   │       └── page.tsx              # Edit existing listing
│   ├── inquiries/
│   │   └── page.tsx                  # Received inquiry management
│   ├── gallery/
│   │   └── page.tsx                  # Photo gallery management
│   └── settings/
│       └── page.tsx                  # Account and profile settings
│
├── (admin)/                          # Admin panel (internal use)
│   ├── layout.tsx                    # Admin layout
│   ├── dashboard/
│   │   └── page.tsx                  # Platform overview stats
│   ├── vendors/
│   │   ├── page.tsx                  # All vendor listings — approve/reject
│   │   └── [id]/
│   │       └── page.tsx              # Individual vendor review
│   └── users/
│       └── page.tsx                  # User management
│
└── api/                              # API Route Handlers
    ├── auth/
    │   └── [...nextauth]/
    │       └── route.ts              # NextAuth handler
    ├── vendors/
    │   ├── route.ts                  # GET all vendors (with filters), POST create
    │   └── [id]/
    │       ├── route.ts              # GET, PUT, DELETE single vendor
    │       ├── gallery/
    │       │   └── route.ts          # POST upload photos, DELETE photo
    │       └── inquiries/
    │           └── route.ts          # POST new inquiry to vendor
    ├── reviews/
    │   ├── route.ts                  # POST new review
    │   └── [vendorId]/
    │       └── route.ts              # GET reviews for vendor
    ├── saved/
    │   └── route.ts                  # GET saved vendors, POST save, DELETE unsave
    ├── inquiries/
    │   ├── route.ts                  # GET couple's sent inquiries
    │   └── [id]/
    │       └── route.ts              # GET, PUT (status update) single inquiry
    ├── upload/
    │   └── route.ts                  # Image upload handler (Cloudinary/S3)
    └── search/
        └── route.ts                  # Full-text search endpoint
```

---

## Components

```
src/components/
│
├── ui/                               # Primitive UI components (design system)
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Select.tsx
│   ├── Badge.tsx
│   ├── Avatar.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   ├── Skeleton.tsx
│   ├── Toast.tsx
│   └── StarRating.tsx
│
├── layout/                           # Layout scaffolding
│   ├── Header.tsx                    # Public site header + nav
│   ├── Footer.tsx
│   ├── DashboardSidebar.tsx          # Shared sidebar (couple + vendor)
│   └── MobileNav.tsx
│
├── vendors/                          # Vendor-specific components
│   ├── VendorCard.tsx                # Directory listing card
│   ├── VendorGrid.tsx                # Responsive grid wrapper
│   ├── VendorProfile.tsx             # Full vendor profile view
│   ├── VendorGallery.tsx             # Photo gallery lightbox
│   ├── VendorFilters.tsx             # Category, location, price filters
│   ├── VendorSearchBar.tsx           # Search input with suggestions
│   └── CategoryBadge.tsx             # Vendor category pill
│
├── inquiry/                          # Booking inquiry flow
│   ├── InquiryForm.tsx               # Couple-side inquiry submission form
│   ├── InquiryCard.tsx               # Single inquiry display card
│   ├── InquiryStatusBadge.tsx        # Pending / Accepted / Declined badge
│   └── InquiryResponseForm.tsx       # Vendor-side response form
│
├── reviews/                          # Reviews and ratings
│   ├── ReviewCard.tsx
│   ├── ReviewList.tsx
│   ├── ReviewForm.tsx
│   └── RatingSummary.tsx             # Aggregate star rating display
│
├── listing/                          # Vendor listing creation/edit
│   ├── ListingWizard.tsx             # Multi-step creation wizard shell
│   ├── steps/
│   │   ├── BasicInfoStep.tsx         # Name, category, location, bio
│   │   ├── PricingStep.tsx           # Pricing structure and packages
│   │   ├── GalleryStep.tsx           # Photo upload step
│   │   └── ReviewStep.tsx            # Final preview before publish
│   └── GalleryUploader.tsx           # Drag-and-drop image uploader
│
├── dashboard/                        # Dashboard widgets
│   ├── StatsCard.tsx                 # Single stat display card
│   ├── InquiryInbox.tsx              # Vendor inquiry inbox widget
│   ├── SavedVendorsList.tsx          # Couple saved vendors widget
│   └── RecentActivity.tsx
│
├── home/                             # Homepage-specific components
│   ├── HeroSection.tsx
│   ├── CategoryGrid.tsx              # Category browsing grid
│   ├── FeaturedVendors.tsx
│   └── HowItWorks.tsx
│
└── auth/                             # Auth form components
    ├── LoginForm.tsx
    ├── RegisterForm.tsx
    └── RoleSelector.tsx              # Couple vs Vendor selection
```

---

## Lib, Hooks, Types

```
src/lib/
├── prisma.ts                         # Prisma client singleton
├── auth.ts                           # NextAuth config and options
├── validations/
│   ├── vendor.ts                     # Zod schemas — vendor listing
│   ├── inquiry.ts                    # Zod schemas — inquiry form
│   ├── review.ts                     # Zod schemas — review form
│   └── auth.ts                       # Zod schemas — registration
├── utils/
│   ├── formatCurrency.ts
│   ├── formatDate.ts
│   ├── generateSlug.ts
│   └── cn.ts                         # Tailwind class merging utility
└── constants/
    ├── categories.ts                 # Vendor category definitions
    ├── locations.ts                  # Supported location list
    └── pricing.ts                    # Pricing tier definitions

src/hooks/
├── useVendors.ts                     # Vendor data fetching hook
├── useSavedVendors.ts                # Save/unsave toggle with optimistic update
├── useInquiry.ts                     # Inquiry submission hook
└── useDebounce.ts                    # Search debounce hook

src/types/
├── vendor.ts                         # Vendor-related TypeScript types
├── inquiry.ts                        # Inquiry types
├── review.ts                         # Review types
├── auth.ts                           # Extended NextAuth session types
└── index.ts                          # Barrel export
```

---

## Prisma Schema Overview

```
prisma/schema.prisma

Models:
├── User              — id, email, role (COUPLE | VENDOR | ADMIN), name, createdAt
├── VendorProfile     — id, userId, slug, category, location, bio, priceRange, isApproved
├── GalleryPhoto      — id, vendorId, url, publicId, isPrimary
├── Inquiry           — id, coupleId, vendorId, message, eventDate, status, createdAt
├── InquiryResponse   — id, inquiryId, message, createdAt
├── Review            — id, coupleId, vendorId, rating, body, createdAt
└── SavedVendor       — id, coupleId, vendorId, savedAt
```