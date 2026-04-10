import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { VendorCard } from '@/components/vendors/VendorCard'
import Link from 'next/link'
import type { VendorCardData } from '@/types/vendor'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saved Vendors — Knotly',
}

export default async function CoupleSavedPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'COUPLE') {
    redirect('/login')
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

  const vendors: VendorCardData[] = await Promise.all(
    saved.map(async (s: typeof saved[number]) => {
      const agg = await prisma.review.aggregate({
        where: { vendorId: s.vendor.id },
        _avg: { rating: true },
      })
      return {
        ...s.vendor,
        avgRating: agg._avg.rating ?? 0,
      }
    })
  )

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Saved Vendors</h1>

      {vendors.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">♡</div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            No saved vendors yet
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Save vendors you love to keep track of them
          </p>
          <Link
            href="/vendors"
            className="inline-flex items-center rounded-lg bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
          >
            Browse vendors
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendors.map((vendor: typeof vendors[number]) => (
            <VendorCard key={vendor.id} vendor={vendor} />
          ))}
        </div>
      )}
    </div>
  )
}