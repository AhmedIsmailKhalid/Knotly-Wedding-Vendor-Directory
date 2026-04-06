import type { Review } from '@prisma/client'

export type ReviewWithCouple = Review & {
  couple: { id: string; name: string }
}

export type ReviewFormData = {
  vendorId: string
  rating: number
  body: string
}