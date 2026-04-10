import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import Link from 'next/link'
import { CATEGORY_LABELS } from '@/lib/constants/categories'
import { PRICE_RANGE_LABELS } from '@/lib/constants/pricing'
import { Badge } from '@/components/ui/Badge'
import { DeleteListingButton } from '@/components/listing/DeleteListingButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My Listing — Knotly',
}

export default async function VendorListingPage() {
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

  const primaryPhoto = vendorProfile.photos.find((p) => p.isPrimary) ?? vendorProfile.photos[0]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-10">
        <div className="max-w-3xl mx-auto flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white">{vendorProfile.businessName}</h1>
            <p className="text-gray-400 mt-1 text-sm">
              {CATEGORY_LABELS[vendorProfile.category]} · {vendorProfile.location}
            </p>
          </div>
          <Badge variant={vendorProfile.isApproved ? 'green' : 'amber'}>
            {vendorProfile.isApproved ? '● Live' : '● Pending approval'}
          </Badge>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-4 pb-12">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-4">
          {primaryPhoto && (
            <div className="relative h-56 w-full">
              <Image
                src={primaryPhoto.url}
                alt={vendorProfile.businessName}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          )}

          <div className="p-6 space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">
                  Price Range
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  {PRICE_RANGE_LABELS[vendorProfile.priceRange]}
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">
                  Photos
                </p>
                <p className="text-sm font-semibold text-gray-900">
                  {vendorProfile.photos.length} uploaded
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-2">Bio</p>
              <p className="text-sm text-gray-700 leading-relaxed">{vendorProfile.bio}</p>
            </div>

            {vendorProfile.photos.length > 0 && (
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-3">
                  Gallery
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {vendorProfile.photos.map((photo) => (
                    <div key={photo.id} className="relative aspect-square rounded-xl overflow-hidden">
                      <Image src={photo.url} alt={vendorProfile.businessName} fill className="object-cover" />
                      {photo.isPrimary && (
                        <div className="absolute top-1 left-1 bg-rose-500 text-white text-xs px-1.5 py-0.5 rounded-md font-medium">
                          Primary
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-2 border-t border-gray-100">
              <Link
                href="/vendor/listing/edit"
                className="flex-1 text-center rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Edit listing
              </Link>
              {vendorProfile.isApproved && (
                <Link
                  href={`/vendors/${vendorProfile.slug}`}
                  className="flex-1 text-center rounded-xl bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
                >
                  View public profile
                </Link>
              )}
            </div>
          </div>
        </div>

        <DeleteListingButton vendorId={vendorProfile.id} />
      </div>
    </div>
  )
}