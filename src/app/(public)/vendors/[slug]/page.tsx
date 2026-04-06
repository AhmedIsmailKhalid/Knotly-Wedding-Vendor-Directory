import { notFound } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import { CategoryBadge } from '@/components/vendors/CategoryBadge'
import { StarRating } from '@/components/ui/StarRating'
import { Badge } from '@/components/ui/Badge'
import { formatPriceRange } from '@/lib/utils/formatCurrency'
import { formatShortDate } from '@/lib/utils/formatDate'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const vendor = await prisma.vendorProfile.findUnique({
    where: { slug, isApproved: true },
    select: { businessName: true, bio: true },
  })
  if (!vendor) return { title: 'Vendor Not Found — Knotly' }
  return {
    title: `${vendor.businessName} — Knotly`,
    description: vendor.bio.slice(0, 155),
  }
}

export default async function VendorProfilePage({ params }: PageProps) {
  const { slug } = await params

  const vendor = await prisma.vendorProfile.findUnique({
    where: { slug, isApproved: true },
    include: {
      photos: true,
      reviews: {
        include: { couple: { select: { id: true, name: true } } },
        orderBy: { createdAt: 'desc' },
      },
      _count: { select: { reviews: true } },
    },
  })

  if (!vendor) notFound()

  const avgRating =
    vendor.reviews.length > 0
      ? vendor.reviews.reduce((sum, r) => sum + r.rating, 0) / vendor.reviews.length
      : 0

  const primaryPhoto = vendor.photos.find((p) => p.isPrimary) ?? vendor.photos[0]
  const reviewCount = vendor._count.reviews
  const reviewLabel = reviewCount === 1 ? 'review' : 'reviews'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="relative h-72 w-full bg-gray-200">
        {primaryPhoto && (
          <Image
            src={primaryPhoto.url}
            alt={vendor.businessName}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto px-4 -mt-16 relative z-10 pb-16">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <CategoryBadge category={vendor.category} />
              <h1 className="text-2xl font-bold text-gray-900 mt-2">
                {vendor.businessName}
              </h1>
              <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                <span>📍</span> {vendor.location}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <StarRating rating={avgRating} size="md" />
                <span className="text-sm text-gray-500">
                  {avgRating.toFixed(1)} ({reviewCount} {reviewLabel})
                </span>
              </div>
            </div>

            <div className="flex flex-col items-start sm:items-end gap-2">
              <Badge variant="gray">{formatPriceRange(vendor.priceRange)}</Badge>
              
              <a href="#inquiry" className="rounded-lg bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors">
                Send inquiry
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">About</h2>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {vendor.bio}
              </p>
            </div>

            {/* Gallery */}
            {vendor.photos.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {vendor.photos.map((photo) => (
                    <div
                      key={photo.id}
                      className="relative aspect-square rounded-xl overflow-hidden"
                    >
                      <Image
                        src={photo.url}
                        alt={vendor.businessName}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Reviews ({reviewCount})
              </h2>
              {vendor.reviews.length === 0 ? (
                <p className="text-sm text-gray-500">No reviews yet.</p>
              ) : (
                <div className="space-y-4">
                  {vendor.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-50 pb-4 last:border-0"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-gray-900">
                          {review.couple.name}
                        </p>
                        <p className="text-xs text-gray-400">
                          {formatShortDate(review.createdAt)}
                        </p>
                      </div>
                      <StarRating rating={review.rating} />
                      <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                        {review.body}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Inquiry sidebar */}
          <div id="inquiry" className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Interested?
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                Send an inquiry to check availability for your wedding date.
              </p>
              
                <a href="/login" className="block w-full text-center rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors">
                  Sign in to send inquiry
                </a>
              <p className="text-xs text-gray-400 text-center mt-3">
                Free to join — no credit card required
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}