import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { inquirySchema } from '@/lib/validations/inquiry'

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'COUPLE') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const inquiries = await prisma.inquiry.findMany({
      where: { coupleId: session.user.id },
      include: {
        vendor: {
          select: {
            id: true,
            slug: true,
            businessName: true,
            category: true,
            location: true,
          },
        },
        response: true,
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json({ inquiries })
  } catch (error) {
    console.error('[INQUIRIES_GET]', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    console.log('[INQUIRY_POST] session:', JSON.stringify(session, null, 2))

    if (!session || session.user.role !== 'COUPLE') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await req.json()
    const result = inquirySchema.safeParse({
      ...body,
      guestCount: body.guestCount ? Number(body.guestCount) : undefined,
    })

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', fields: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { vendorId, message, eventDate, guestCount } = result.data

    const vendor = await prisma.vendorProfile.findUnique({
      where: { id: vendorId, isApproved: true },
      select: { id: true },
    })

    if (!vendor) {
      return NextResponse.json({ error: 'Vendor not found' }, { status: 404 })
    }

    const existingInquiry = await prisma.inquiry.findFirst({
      where: {
        coupleId: session.user.id,
        vendorId,
        status: 'PENDING',
      },
    })

    if (existingInquiry) {
      return NextResponse.json(
        { error: 'You already have a pending inquiry with this vendor' },
        { status: 409 }
      )
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        coupleId: session.user.id,
        vendorId,
        message,
        eventDate: new Date(eventDate),
        guestCount,
        status: 'PENDING',
      },
      include: {
        vendor: {
          select: {
            id: true,
            slug: true,
            businessName: true,
            category: true,
            location: true,
          },
        },
        response: true,
      },
    })

    return NextResponse.json({ inquiry }, { status: 201 })
  } catch (error) {
    console.error('[INQUIRIES_POST]', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}