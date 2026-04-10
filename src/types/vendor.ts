import type { VendorProfile, GalleryPhoto, Review } from '@prisma/client'

export type VendorCategory = 'VENUE' | 'PHOTOGRAPHER' | 'CATERER' | 'FLORIST' | 'DJ_ENTERTAINMENT' | 'MAKEUP_HAIR' | 'WEDDING_PLANNER'

export type PriceRange = 'BUDGET' | 'MID' | 'PREMIUM' | 'LUXURY'

export type VendorWithPhotos = VendorProfile & {
  photos: GalleryPhoto[]
}

export type VendorWithDetails = VendorProfile & {
  photos: GalleryPhoto[]
  reviews: Array<Review & { couple: { id: string; name: string } }>
  user: { id: string; name: string; email: string }
  _count: {
    reviews: number
    savedBy: number
    inquiries: number
  }
}

export type VendorCardData = {
  id: string
  slug: string
  businessName: string
  category: VendorCategory
  location: string
  priceRange: PriceRange
  bio: string
  photos: Array<{ url: string; isPrimary: boolean }>
  _count: { reviews: number }
  avgRating?: number
}

export type VendorFilters = {
  category?: VendorCategory
  location?: string
  priceRange?: PriceRange
  search?: string
  page?: number
}