import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { reviewSchema } from '@/lib/validations/review'

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'COUPLE') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const result = reviewSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', fields: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { vendorId, rating, body: reviewBody } = result.data

    // Verify vendor exists
    const vendor = await prisma.vendorProfile.findUnique({
      where: { id: vendorId, isApproved: true },
      select: { id: true },
    })

    if (!vendor) {
      return NextResponse.json({ error: 'Vendor not found' }, { status: 404 })
    }

    // Verify couple had an accepted inquiry with this vendor
    const acceptedInquiry = await prisma.inquiry.findFirst({
      where: {
        coupleId: session.user.id,
        vendorId,
        status: 'ACCEPTED',
      },
      select: { id: true },
    })

    if (!acceptedInquiry) {
      return NextResponse.json(
        { error: 'You can only review vendors you have worked with' },
        { status: 403 }
      )
    }

    const review = await prisma.review.create({
      data: {
        coupleId: session.user.id,
        vendorId,
        rating,
        body: reviewBody,
      },
      include: {
        couple: { select: { id: true, name: true } },
      },
    })

    return NextResponse.json({ review }, { status: 201 })
  } catch (error: unknown) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as { code: string }).code === 'P2002'
    ) {
      return NextResponse.json(
        { error: 'You have already reviewed this vendor' },
        { status: 409 }
      )
    }
    console.error('[REVIEWS_POST]', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}