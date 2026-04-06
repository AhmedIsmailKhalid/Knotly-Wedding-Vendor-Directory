import { z } from 'zod'
import { VendorCategory, PriceRange } from '@prisma/client'

export const searchSchema = z.object({
  q: z.string().optional(),
  category: z.nativeEnum(VendorCategory).optional(),
  location: z.string().optional(),
  priceRange: z.nativeEnum(PriceRange).optional(),
  page: z.coerce.number().min(1).default(1),
})

export type SearchParams = z.infer<typeof searchSchema>