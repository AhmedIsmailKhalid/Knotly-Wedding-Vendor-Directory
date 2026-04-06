import { PriceRange } from '@prisma/client'

export const PRICE_RANGE_LABELS: Record<PriceRange, string> = {
  BUDGET: 'Budget',
  MID: 'Mid-Range',
  PREMIUM: 'Premium',
  LUXURY: 'Luxury',
}

export const PRICE_RANGE_DESCRIPTIONS: Record<PriceRange, string> = {
  BUDGET: 'Under $1,000',
  MID: '$1,000 – $5,000',
  PREMIUM: '$5,000 – $15,000',
  LUXURY: '$15,000+',
}

export const PRICE_RANGES = Object.values(PriceRange)