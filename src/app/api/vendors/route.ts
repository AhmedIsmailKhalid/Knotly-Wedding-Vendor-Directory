import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createListingSchema } from '@/lib/validations/vendor'
import { generateUniqueSlug } from '@/lib/utils/generateSlug'
import { searchSchema } from '@/lib/validations/search'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type WhereInput = Record<string, any>

const VENDORS_PER_PAGE = 12

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const params = searchSchema.safeParse({
      q: searchParams.get('q') ?? undefined,
      category: searchParams.get('category') ?? undefined,
      location: searchParams.get('location') ?? undefined,
      priceRange: searchParams.get('priceRange') ?? undefined,
      page: searchParams.get('page') ?? 1,
    })

    if (!params.success) {
      return NextResponse.json({ error: 'Invalid search params' }, { status: 400 })
    }

    const { q, category, location, priceRange, page } = params.data
    const skip = (page - 1) * VENDORS_PER_PAGE

    const where: WhereInput = {
      isApproved: true,
      ...(category && { category }),
      ...(location && { location }),
      ...(priceRange && { priceRange }),
      ...(q && {
        OR: [
          { businessName: { contains: q, mode: 'insensitive' } },
          { bio: { contains: q, mode: 'insensitive' } },
          { location: { contains: q, mode: 'insensitive' } },
        ],
      }),
    }

    const [vendors, total] = await Promise.all([
      prisma.vendorProfile.findMany({
        where,
        include: {
          photos: {
            where: { isPrimary: true },
            take: 1,
          },
          _count: { select: { reviews: true } },
        },
        orderBy: { createdAt: 'desc' },
        skip,
        take: VENDORS_PER_PAGE,
      }),
      prisma.vendorProfile.count({ where }),
    ])

    const vendorsWithRating = await Promise.all(
      vendors.map(async (vendor: typeof vendors[number]) => {
        const agg = await prisma.review.aggregate({
          where: { vendorId: vendor.id },
          _avg: { rating: true },
        })
        return { ...vendor, avgRating: agg._avg.rating ?? 0 }
      })
    )

    return NextResponse.json({
      vendors: vendorsWithRating,
      total,
      pages: Math.ceil(total / VENDORS_PER_PAGE),
      page,
    })
  } catch (error) {
    console.error('[VENDORS_GET]', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'VENDOR') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

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
      include: { photos: true },
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