import type { Inquiry, InquiryResponse, VendorProfile } from '@prisma/client'

export type InquiryStatus = 'PENDING' | 'REPLIED' | 'ACCEPTED' | 'DECLINED' | 'CANCELLED'

export type InquiryWithDetails = Inquiry & {
  vendor: { id: string; slug: string; businessName: string; category: VendorProfile['category']; location: string }
  couple: { id: string; name: string; email: string }
  responses: InquiryResponse[]
}

export type InquiryWithVendor = Inquiry & {
  vendor: { id: string; slug: string; businessName: string; category: VendorProfile['category']; location: string }
  responses: InquiryResponse[]
}

export type InquiryWithCouple = Inquiry & {
  couple: { id: string; name: string; email: string }
  responses: InquiryResponse[]
}