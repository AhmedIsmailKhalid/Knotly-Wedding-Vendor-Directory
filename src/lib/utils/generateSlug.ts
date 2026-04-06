import { prisma } from '@/lib/prisma'

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export async function generateUniqueSlug(businessName: string): Promise<string> {
  const baseSlug = slugify(businessName)
  let slug = baseSlug
  let attempt = 0

  while (true) {
    const existing = await prisma.vendorProfile.findUnique({
      where: { slug },
      select: { id: true },
    })

    if (!existing) return slug

    attempt++
    slug = `${baseSlug}-${attempt}`
  }
}