import { z } from 'zod'

export const searchSchema = z.object({
  q: z.string().optional(),
  category: z.enum([
    'VENUE',
    'PHOTOGRAPHER',
    'CATERER',
    'FLORIST',
    'DJ_ENTERTAINMENT',
    'MAKEUP_HAIR',
    'WEDDING_PLANNER',
  ]).optional(),
  location: z.string().optional(),
  priceRange: z.enum([
    'BUDGET',
    'MID',
    'PREMIUM',
    'LUXURY',
  ]).optional(),
  page: z.coerce.number().min(1).default(1),
})

export type SearchParams = z.infer<typeof searchSchema>