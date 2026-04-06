import type { Role } from '@prisma/client'

export type { Role }

export type SessionUser = {
  id: string
  email: string
  name: string
  role: Role
  vendorProfileId?: string | null
}

export type RegisterCoupleInput = {
  name: string
  email: string
  password: string
}

export type RegisterVendorInput = {
  name: string
  email: string
  password: string
}