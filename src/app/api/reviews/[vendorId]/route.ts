import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ vendorId: string }> }
) {
  try {
    const { vendorId } = await params

    const reviews = await prisma.review.findMany({
      where: { vendorId },
      include: {
        couple: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: 'desc' },
    })

    const aggregate = await prisma.review.aggregate({
      where: { vendorId },
      _avg: { rating: true },
      _count: { rating: true },
    })

    return NextResponse.json({
      reviews,
      avgRating: aggregate._avg.rating ?? 0,
      totalReviews: aggregate._count.rating,
    })
  } catch (error) {
    console.error('[REVIEWS_GET]', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}