import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { z } from 'zod'

const coupleReplySchema = z.object({
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be under 1000 characters'),
})

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'COUPLE') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params

    const inquiry = await prisma.inquiry.findUnique({
      where: { id },
      select: { id: true, coupleId: true, status: true },
    })

    if (!inquiry) {
      return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 })
    }

    if (inquiry.coupleId !== session.user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    if (inquiry.status === 'ACCEPTED' || inquiry.status === 'DECLINED' || inquiry.status === 'CANCELLED') {
      return NextResponse.json(
        { error: 'Cannot reply to a finalised inquiry' },
        { status: 409 }
      )
    }

    const body = await req.json()
    const result = coupleReplySchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', fields: result.error.flatten().fieldErrors },
        { status: 400 }
      )
    }

    const response = await prisma.inquiryResponse.create({
      data: {
        inquiryId: id,
        message: result.data.message,
        senderRole: 'COUPLE',
      },
    })

    return NextResponse.json({ response }, { status: 201 })
  } catch (error) {
    console.error('[COUPLE_REPLY_POST]', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}