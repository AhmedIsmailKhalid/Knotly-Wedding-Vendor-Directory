import { z } from 'zod'

export const reviewSchema = z.object({
  vendorId: z.string().min(1, 'Vendor ID is required'),
  rating: z
    .number()
    .int()
    .min(1, 'Rating must be at least 1')
    .max(5, 'Rating must be at most 5'),
  body: z
    .string()
    .min(20, 'Review must be at least 20 characters')
    .max(1000, 'Review must be under 1000 characters'),
})

export type ReviewInput = z.infer<typeof reviewSchema>