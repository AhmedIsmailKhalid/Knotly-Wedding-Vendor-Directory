import type { Inquiry, InquiryResponse, InquiryStatus, VendorProfile, User } from '@prisma/client'

export type InquiryWithDetails = Inquiry & {
  vendor: { id: string; slug: string; businessName: string; category: VendorProfile['category']; location: string }
  couple: { id: string; name: string; email: string }
  response: InquiryResponse | null
}

export type InquiryWithVendor = Inquiry & {
  vendor: { id: string; slug: string; businessName: string; category: VendorProfile['category']; location: string }
  response: InquiryResponse | null
}

export type InquiryWithCouple = Inquiry & {
  couple: { id: string; name: string; email: string }
  response: InquiryResponse | null
}

export type { InquiryStatus }