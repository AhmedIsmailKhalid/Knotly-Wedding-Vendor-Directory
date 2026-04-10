import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

async function getVendorAndVerifyOwnership(vendorId: string, userId: string) {
  const vendor = await prisma.vendorProfile.findUnique({
    where: { id: vendorId },
    select: { id: true, userId: true },
  })
  if (!vendor) return null
  if (vendor.userId !== userId) return null
  return vendor
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== 'VENDOR') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const vendor = await getVendorAndVerifyOwnership(id, session.user.id)

    if (!vendor) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { url, publicId } = await req.json()

    if (!url || !publicId) {
      return NextResponse.json({ error: 'URL and publicId are required' }, { status: 400 })
    }

    // Check if this is the first photo — make it primary
    const existingCount = await prisma.galleryPhoto.count({
      where: { vendorId: id },
    })

    const photo = await prisma.galleryPhoto.create({
      data: {
        vendorId: id,
        url,
        publicId,
        isPrimary: existingCount === 0,
      },
    })

    return NextResponse.json({ photo }, { status: 201 })
  } catch (error) {
    console.error('[GALLERY_POST]', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session || session.user.role !== 'VENDOR') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const vendor = await getVendorAndVerifyOwnership(id, session.user.id)

    if (!vendor) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { photoId, publicId } = await req.json()

    if (!photoId || !publicId) {
      return NextResponse.json({ error: 'photoId and publicId are required' }, { status: 400 })
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(publicId)

    // Delete from DB
    await prisma.galleryPhoto.delete({ where: { id: photoId } })

    // If we deleted the primary photo, make the first remaining photo primary
    const remaining = await prisma.galleryPhoto.findFirst({
      where: { vendorId: id },
      orderBy: { createdAt: 'asc' },
    })

    if (remaining) {
      await prisma.galleryPhoto.update({
        where: { id: remaining.id },
        data: { isPrimary: true },
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[GALLERY_DELETE]', error)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}