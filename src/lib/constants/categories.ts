import { VendorCategory } from '@prisma/client'

export const CATEGORY_LABELS: Record<VendorCategory, string> = {
  VENUE: 'Venue',
  PHOTOGRAPHER: 'Photographer',
  CATERER: 'Caterer',
  FLORIST: 'Florist',
  DJ_ENTERTAINMENT: 'DJ & Entertainment',
  MAKEUP_HAIR: 'Makeup & Hair',
  WEDDING_PLANNER: 'Wedding Planner',
}

export const CATEGORY_SLUGS: Record<VendorCategory, string> = {
  VENUE: 'venues',
  PHOTOGRAPHER: 'photographers',
  CATERER: 'caterers',
  FLORIST: 'florists',
  DJ_ENTERTAINMENT: 'dj-entertainment',
  MAKEUP_HAIR: 'makeup-hair',
  WEDDING_PLANNER: 'wedding-planners',
}

export const CATEGORY_ICONS: Record<VendorCategory, string> = {
  VENUE: '🏛️',
  PHOTOGRAPHER: '📷',
  CATERER: '🍽️',
  FLORIST: '💐',
  DJ_ENTERTAINMENT: '🎵',
  MAKEUP_HAIR: '💄',
  WEDDING_PLANNER: '📋',
}

export const CATEGORIES = Object.values(VendorCategory)