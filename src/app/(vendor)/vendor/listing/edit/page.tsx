import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { ListingEditForm } from '@/components/listing/ListingEditForm'
import { GalleryManager } from '@/components/listing/GalleryManager'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Edit Listing — Knotly',
}

export default async function EditListingPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'VENDOR') {
    redirect('/login')
  }

  const vendorProfile = await prisma.vendorProfile.findUnique({
    where: { userId: session.user.id },
    include: { photos: true },
  })

  if (!vendorProfile) {
    redirect('/vendor/listing/create')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-lg mx-auto mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Edit your listing</h1>
        <p className="text-sm text-gray-500 mt-1">
          Update your business information
        </p>
      </div>

      <div className="max-w-lg mx-auto space-y-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-5">
            Business details
          </h2>
          <ListingEditForm vendorProfile={vendorProfile} />
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-5">
            Photo gallery
          </h2>
          <GalleryManager
            vendorId={vendorProfile.id}
            initialPhotos={vendorProfile.photos}
          />
        </div>
      </div>
    </div>
  )
}