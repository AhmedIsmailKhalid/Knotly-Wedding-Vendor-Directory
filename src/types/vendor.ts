import type { VendorProfile, GalleryPhoto, Review, User, VendorCategory, PriceRange } from '@prisma/client'

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