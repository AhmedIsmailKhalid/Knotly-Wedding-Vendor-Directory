import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import { CATEGORY_LABELS } from '@/lib/constants/categories'
import { PRICE_RANGE_LABELS, PRICE_RANGE_DESCRIPTIONS } from '@/lib/constants/pricing'
import { Badge } from '@/components/ui/Badge'
import { VendorApprovalButtons } from '@/components/admin/VendorApprovalButtons'
import { formatDate } from '@/lib/utils/formatDate'
import Link from 'next/link'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ id: string }>
}

export const metadata: Metadata = {
  title: 'Review Vendor — Admin — Knotly',
}

export default async function AdminVendorReviewPage({ params }: PageProps) {
  const { id } = await params

  const vendor = await prisma.vendorProfile.findUnique({
    where: { id },
    include: {
      user: { select: { id: true, name: true, email: true, createdAt: true } },
      photos: true,
      _count: { select: { inquiries: true, reviews: true } },
    },
  })

  if (!vendor) notFound()

  const primaryPhoto = vendor.photos.find((p) => p.isPrimary) ?? vendor.photos[0]

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/admin/vendors"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          ← Back to vendors
        </Link>
      </div>

      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {vendor.businessName}
          </h1>
          <p className="text-sm text-gray-500 mt-1">{vendor.user.email}</p>
        </div>
        <Badge variant={vendor.isApproved ? 'green' : 'amber'}>
          {vendor.isApproved ? 'Approved' : 'Pending approval'}
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {primaryPhoto && (
            <div className="relative h-56 rounded-xl overflow-hidden bg-gray-100">
              <Image
                src={primaryPhoto.url}
                alt={vendor.businessName}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">
                  Category
                </p>
                <p className="text-sm text-gray-900">
                  {CATEGORY_LABELS[vendor.category]}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">
                  Location
                </p>
                <p className="text-sm text-gray-900">{vendor.location}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">
                  Price Range
                </p>
                <p className="text-sm text-gray-900">
                  {PRICE_RANGE_LABELS[vendor.priceRange]} — {PRICE_RANGE_DESCRIPTIONS[vendor.priceRange]}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">
                  Listed
                </p>
                <p className="text-sm text-gray-900">
                  {formatDate(vendor.createdAt)}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">
                Bio
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {vendor.bio}
              </p>
            </div>
          </div>

          {vendor.photos.length > 1 && (
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-3">
                Gallery ({vendor.photos.length} photos)
              </p>
              <div className="grid grid-cols-3 gap-3">
                {vendor.photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="relative aspect-square rounded-lg overflow-hidden"
                  >
                    <Image
                      src={photo.url}
                      alt={vendor.businessName}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-4">
              Approval
            </h2>
            <VendorApprovalButtons
              vendorId={vendor.id}
              isApproved={vendor.isApproved}
            />
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
            <h2 className="text-sm font-semibold text-gray-900">Stats</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Inquiries</span>
                <span className="font-medium text-gray-900">
                  {vendor._count.inquiries}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Reviews</span>
                <span className="font-medium text-gray-900">
                  {vendor._count.reviews}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Photos</span>
                <span className="font-medium text-gray-900">
                  {vendor.photos.length}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-3">
            <h2 className="text-sm font-semibold text-gray-900">
              Vendor Account
            </h2>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-gray-400">Name</p>
                <p className="text-sm text-gray-900">{vendor.user.name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Email</p>
                <p className="text-sm text-gray-900">{vendor.user.email}</p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Member since</p>
                <p className="text-sm text-gray-900">
                  {formatDate(vendor.user.createdAt)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}