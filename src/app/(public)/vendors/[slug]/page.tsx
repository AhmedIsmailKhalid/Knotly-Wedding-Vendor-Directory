import { notFound } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import { CategoryBadge } from '@/components/vendors/CategoryBadge'
import { StarRating } from '@/components/ui/StarRating'
import { Badge } from '@/components/ui/Badge'
import { InquiryForm } from '@/components/inquiry/InquiryForm'
import { SaveButton } from '@/components/vendors/SaveButton'
import { ReviewForm } from '@/components/reviews/ReviewForm'
import { formatPriceRange } from '@/lib/utils/formatCurrency'
import { formatShortDate } from '@/lib/utils/formatDate'
import Link from 'next/link'
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
  const session = await getServerSession(authOptions)

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

  const isCouple = session?.user.role === 'COUPLE'
  const isOwnListing = session?.user.vendorProfileId === vendor.id

  let hasPendingInquiry = false
  let isSaved = false
  let canReview = false
  let hasReviewed = false

  if (isCouple) {
    const [pendingInquiry, savedRecord, acceptedInquiry, existingReview] =
      await Promise.all([
        prisma.inquiry.findFirst({
          where: { coupleId: session.user.id, vendorId: vendor.id, status: 'PENDING' },
          select: { id: true },
        }),
        prisma.savedVendor.findFirst({
          where: { coupleId: session.user.id, vendorId: vendor.id },
          select: { id: true },
        }),
        prisma.inquiry.findFirst({
          where: { coupleId: session.user.id, vendorId: vendor.id, status: 'ACCEPTED' },
          select: { id: true },
        }),
        prisma.review.findFirst({
          where: { coupleId: session.user.id, vendorId: vendor.id },
          select: { id: true },
        }),
      ])

    hasPendingInquiry = !!pendingInquiry
    isSaved = !!savedRecord
    canReview = !!acceptedInquiry && !existingReview
    hasReviewed = !!existingReview
  }

  return (
    <div className="min-h-screen bg-gray-50">
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
              <div className="flex gap-2">
                {isCouple && (
                  <SaveButton vendorId={vendor.id} initialSaved={isSaved} />
                )}
                
                 <a href="#inquiry" className="rounded-lg bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors">
                    Send inquiry
                 </a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">About</h2>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {vendor.bio}
              </p>
            </div>

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

              {canReview && (
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="text-base font-semibold text-gray-900 mb-4">
                    Leave a review
                  </h3>
                  <ReviewForm
                    vendorId={vendor.id}
                    vendorName={vendor.businessName}
                  />
                </div>
              )}

              {hasReviewed && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    You have already reviewed this vendor.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div id="inquiry" className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-6">
              {isOwnListing ? (
                <div className="text-center py-4">
                  <p className="text-sm text-gray-500">This is your listing.</p>
                  <Link
                    href="/vendor/dashboard"
                    className="mt-3 inline-block text-sm font-medium text-rose-500 hover:text-rose-600"
                  >
                    Go to dashboard
                  </Link>
                </div>
              ) : isCouple && hasPendingInquiry ? (
                <div className="text-center py-4">
                  <div className="text-2xl mb-2">📬</div>
                  <p className="text-sm font-medium text-gray-900">Inquiry sent</p>
                  <p className="text-xs text-gray-500 mt-1">
                    You already have a pending inquiry with this vendor.
                  </p>
                  <Link
                    href="/couple/inquiries"
                    className="mt-3 inline-block text-sm font-medium text-rose-500 hover:text-rose-600"
                  >
                    View your inquiries
                  </Link>
                </div>
              ) : isCouple ? (
                <>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Send an inquiry
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    Check availability for your wedding date.
                  </p>
                  <InquiryForm
                    vendorId={vendor.id}
                    vendorName={vendor.businessName}
                  />
                </>
              ) : (
                <>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">
                    Interested?
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    Sign in to send an inquiry and check availability.
                  </p>
                  <Link
                    href="/login"
                    className="block w-full text-center rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
                  >
                    Sign in to send inquiry
                  </Link>
                  <p className="text-xs text-gray-400 text-center mt-3">
                    Free to join — no credit card required
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}