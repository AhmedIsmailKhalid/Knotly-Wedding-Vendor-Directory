import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { createListingSchema } from '@/lib/validations/vendor'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    const vendor = await prisma.vendorProfile.findUnique({
      where: { id },
      include: {
        photos: true,
        reviews: {
          include: { couple: { select: { id: true, name: true } } },
          orderBy: { createdAt: 'desc' },
        },
        user: { select: { id: true, name: true, email: true } },
        _count: { select: { reviews: true, savedBy: true, inquiries: true } },
      },
    })

    if (!vendor) {
      return NextResponse.json({ error: 'Vendor not found' }, { status: 404 })
    }

    return NextResponse.json({ vendor })
  } catch (error) {
    console.error('[VENDORS_GET]', error)
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    )
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'VENDOR') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params

    const existingProfile = await prisma.vendorProfile.findUnique({
      where: { id },
      select: { userId: true },
    })

    if (!existingProfile) {
      return NextResponse.json({ error: 'Vendor not found' }, { status: 404 })
    }

    if (existingProfile.userId !== session.user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await req.json()
    const result = createListingSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', fields: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { businessName, category, location, bio, priceRange } = result.data

    const updated = await prisma.vendorProfile.update({
      where: { id },
      data: { businessName, category, location, bio, priceRange },
      include: { photos: true },
    })

    return NextResponse.json({ vendor: updated })
  } catch (error) {
    console.error('[VENDORS_PUT]', error)
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    )
  }
}