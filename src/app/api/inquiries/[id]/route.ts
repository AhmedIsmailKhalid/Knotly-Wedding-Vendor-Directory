import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { inquiryResponseSchema } from '@/lib/validations/inquiry'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params

    const inquiry = await prisma.inquiry.findUnique({
      where: { id },
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
        couple: {
          select: { id: true, name: true, email: true },
        },
        response: true,
      },
    })

    if (!inquiry) {
      return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 })
    }

    const isOwner =
      inquiry.coupleId === session.user.id ||
      (session.user.role === 'VENDOR' &&
        session.user.vendorProfileId === inquiry.vendorId)

    if (!isOwner && session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    return NextResponse.json({ inquiry })
  } catch (error) {
    console.error('[INQUIRY_GET]', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
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

    const inquiry = await prisma.inquiry.findUnique({
      where: { id },
      select: {
        id: true,
        vendorId: true,
        status: true,
        response: true,
      },
    })

    if (!inquiry) {
      return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 })
    }

    if (inquiry.vendorId !== session.user.vendorProfileId) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    if (inquiry.status !== 'PENDING') {
      return NextResponse.json(
        { error: 'Inquiry has already been responded to' },
        { status: 409 }
      )
    }

    const body = await req.json()
    const result = inquiryResponseSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', fields: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const { message, status } = result.data

    const [updatedInquiry] = await prisma.$transaction([
      prisma.inquiry.update({
        where: { id },
        data: { status },
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
          couple: { select: { id: true, name: true, email: true } },
          response: true,
        },
      }),
      prisma.inquiryResponse.create({
        data: { inquiryId: id, message },
      }),
    ])

    return NextResponse.json({ inquiry: updatedInquiry })
  } catch (error) {
    console.error('[INQUIRY_PUT]', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}