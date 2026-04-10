import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { searchSchema } from '@/lib/validations/search'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type WhereInput = Record<string, any>

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
      return NextResponse.json({ error: 'Invalid params' }, { status: 400 })
    }

    const { q } = params.data

    if (!q || q.trim().length < 2) {
      return NextResponse.json({ suggestions: [] })
    }

    const where: WhereInput = {
      isApproved: true,
      OR: [
        { businessName: { contains: q, mode: 'insensitive' } },
        { location: { contains: q, mode: 'insensitive' } },
      ],
    }

    const results = await prisma.vendorProfile.findMany({
      where,
      select: {
        slug: true,
        businessName: true,
        category: true,
        location: true,
      },
      take: 5,
    })

    return NextResponse.json({ suggestions: results })
  } catch (error) {
    console.error('[SEARCH_GET]', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}