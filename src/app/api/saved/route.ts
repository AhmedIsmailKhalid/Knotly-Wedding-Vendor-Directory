import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'COUPLE') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const saved = await prisma.savedVendor.findMany({
      where: { coupleId: session.user.id },
      include: {
        vendor: {
          include: {
            photos: { where: { isPrimary: true }, take: 1 },
            _count: { select: { reviews: true } },
          },
        },
      },
      orderBy: { savedAt: 'desc' },
    })

    return NextResponse.json({ saved })
  } catch (error) {
    console.error('[SAVED_GET]', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'COUPLE') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { vendorId } = await req.json()

    if (!vendorId) {
      return NextResponse.json({ error: 'Vendor ID is required' }, { status: 400 })
    }

    const vendor = await prisma.vendorProfile.findUnique({
      where: { id: vendorId, isApproved: true },
      select: { id: true },
    })

    if (!vendor) {
      return NextResponse.json({ error: 'Vendor not found' }, { status: 404 })
    }

    const saved = await prisma.savedVendor.create({
      data: {
        coupleId: session.user.id,
        vendorId,
      },
    })

    return NextResponse.json({ saved }, { status: 201 })
  } catch (error: unknown) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as { code: string }).code === 'P2002'
    ) {
      return NextResponse.json(
        { error: 'Vendor already saved' },
        { status: 409 }
      )
    }
    console.error('[SAVED_POST]', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'COUPLE') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { vendorId } = await req.json()

    if (!vendorId) {
      return NextResponse.json({ error: 'Vendor ID is required' }, { status: 400 })
    }

    await prisma.savedVendor.deleteMany({
      where: {
        coupleId: session.user.id,
        vendorId,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[SAVED_DELETE]', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}