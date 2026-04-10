import { z } from 'zod'

const VendorCategoryEnum = z.enum([
  'VENUE',
  'PHOTOGRAPHER',
  'CATERER',
  'FLORIST',
  'DJ_ENTERTAINMENT',
  'MAKEUP_HAIR',
  'WEDDING_PLANNER',
])

const PriceRangeEnum = z.enum([
  'BUDGET',
  'MID',
  'PREMIUM',
  'LUXURY',
])

export const basicInfoSchema = z.object({
  businessName: z
    .string()
    .min(2, 'Business name must be at least 2 characters')
    .max(100, 'Business name must be under 100 characters'),
  category: VendorCategoryEnum.refine((val) => val !== undefined, {
    message: 'Please select a category',
  }),
  location: z
    .string()
    .min(2, 'Location is required')
    .max(100, 'Location must be under 100 characters'),
  bio: z
    .string()
    .min(50, 'Bio must be at least 50 characters')
    .max(1000, 'Bio must be under 1000 characters'),
})

export const pricingSchema = z.object({
  priceRange: PriceRangeEnum.refine((val) => val !== undefined, {
    message: 'Please select a price range',
  }),
})

export const gallerySchema = z.object({
  photos: z
    .array(
      z.object({
        url: z.string().url(),
        publicId: z.string().min(1),
        isPrimary: z.boolean(),
      })
    )
    .min(1, 'Please upload at least one photo'),
})

export const createListingSchema = basicInfoSchema
  .merge(pricingSchema)
  .extend({
    photos: z.array(
      z.object({
        url: z.string().url(),
        publicId: z.string().min(1),
        isPrimary: z.boolean(),
      })
    ).min(1, 'Please upload at least one photo'),
  })

export type BasicInfoInput = z.infer<typeof basicInfoSchema>
export type PricingInput = z.infer<typeof pricingSchema>
export type GalleryInput = z.infer<typeof gallerySchema>
export type CreateListingInput = z.infer<typeof createListingSchema>