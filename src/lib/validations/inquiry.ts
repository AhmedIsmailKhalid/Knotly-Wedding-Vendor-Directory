import { z } from 'zod'

export const inquirySchema = z.object({
  vendorId: z.string().min(1, 'Vendor ID is required'),
  message: z
    .string()
    .min(20, 'Message must be at least 20 characters')
    .max(1000, 'Message must be under 1000 characters'),
  eventDate: z
    .string()
    .min(1, 'Event date is required')
    .refine((val) => {
      const date = new Date(val)
      return date > new Date()
    }, 'Event date must be in the future'),
  guestCount: z
    .number()
    .int()
    .min(1, 'Guest count must be at least 1')
    .max(10000)
    .optional(),
})

export const inquiryResponseSchema = z.object({
  message: z
    .string()
    .min(10, 'Response must be at least 10 characters')
    .max(1000, 'Response must be under 1000 characters'),
  status: z.enum(['ACCEPTED', 'DECLINED']),
})

export type InquiryInput = z.infer<typeof inquirySchema>
export type InquiryResponseInput = z.infer<typeof inquiryResponseSchema>