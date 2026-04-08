import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const { action } = await req.json()

    if (!['approve', 'reject'].includes(action)) {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }

    const vendor = await prisma.vendorProfile.findUnique({
      where: { id },
      select: { id: true },
    })

    if (!vendor) {
      return NextResponse.json({ error: 'Vendor not found' }, { status: 404 })
    }

    const updated = await prisma.vendorProfile.update({
      where: { id },
      data: { isApproved: action === 'approve' },
    })

    return NextResponse.json({ vendor: updated })
  } catch (error) {
    console.error('[ADMIN_VENDOR_PATCH]', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}