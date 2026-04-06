import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createListingSchema } from '@/lib/validations/vendor'
import { generateUniqueSlug } from '@/lib/utils/generateSlug'

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'VENDOR') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Check if vendor already has a listing
    const existingProfile = await prisma.vendorProfile.findUnique({
      where: { userId: session.user.id },
      select: { id: true },
    })

    if (existingProfile) {
      return NextResponse.json(
        { error: 'You already have a listing' },
        { status: 409 }
      )
    }

    const body = await req.json()
    const result = createListingSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', fields: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { businessName, category, location, bio, priceRange, photos } = result.data

    const slug = await generateUniqueSlug(businessName)

    const vendorProfile = await prisma.vendorProfile.create({
      data: {
        userId: session.user.id,
        slug,
        businessName,
        category,
        location,
        bio,
        priceRange,
        isApproved: false,
        photos: {
          create: photos.map((photo, index) => ({
            url: photo.url,
            publicId: photo.publicId,
            isPrimary: index === 0,
          })),
        },
      },
      include: {
        photos: true,
      },
    })

    return NextResponse.json({ vendorProfile }, { status: 201 })
  } catch (error) {
    console.error('[VENDORS_POST]', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}