import type { Review } from '@/generated/prisma'

export type ReviewWithCouple = Review & {
  couple: { id: string; name: string }
}

export type ReviewFormData = {
  vendorId: string
  rating: number
  body: string
}