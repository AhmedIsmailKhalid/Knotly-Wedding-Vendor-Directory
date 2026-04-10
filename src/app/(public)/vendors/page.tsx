import { Suspense } from 'react'
import { prisma } from '@/lib/prisma'
import { VendorGrid } from '@/components/vendors/VendorGrid'
import { VendorFilters } from '@/components/vendors/VendorFilters'
import { VendorSearchBar } from '@/components/vendors/VendorSearchBar'
import { searchSchema } from '@/lib/validations/search'
import type { Prisma } from '@prisma/client'
import type { VendorCardData } from '@/types/vendor'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Find Wedding Vendors — Knotly',
  description: 'Browse and book top wedding vendors near you',
}

const VENDORS_PER_PAGE = 12

interface PageProps {
  searchParams: Promise<Record<string, string>>
}

async function getVendors(rawParams: Record<string, string>) {
  const params = searchSchema.safeParse({
    q: rawParams.q,
    category: rawParams.category,
    location: rawParams.location,
    priceRange: rawParams.priceRange,
    page: rawParams.page ?? 1,
  })

  if (!params.success) return { vendors: [], total: 0, pages: 0, page: 1 }

  const { q, category, location, priceRange, page } = params.data
  const skip = (page - 1) * VENDORS_PER_PAGE

  const where: Prisma.VendorProfileWhereInput = {
    isApproved: true,
    ...(category && { category }),
    ...(location && { location }),
    ...(priceRange && { priceRange }),
    ...(q && {
      OR: [
        { businessName: { contains: q, mode: 'insensitive' } },
        { bio: { contains: q, mode: 'insensitive' } },
        { location: { contains: q, mode: 'insensitive' } },
      ],
    }),
  }

  const [vendors, total] = await Promise.all([
    prisma.vendorProfile.findMany({
      where,
      include: {
        photos: { where: { isPrimary: true }, take: 1 },
        _count: { select: { reviews: true } },
      },
      orderBy: { createdAt: 'desc' },
      skip,
      take: VENDORS_PER_PAGE,
    }),
    prisma.vendorProfile.count({ where }),
  ])

  const vendorsWithRating: VendorCardData[] = await Promise.all(
    vendors.map(async (vendor: typeof vendors[number]) => {
      const agg = await prisma.review.aggregate({
        where: { vendorId: vendor.id },
        _avg: { rating: true },
      })
      return { ...vendor, avgRating: agg._avg.rating ?? 0 }
    })
  )

  return {
    vendors: vendorsWithRating,
    total,
    pages: Math.ceil(total / VENDORS_PER_PAGE),
    page,
  }
}

function PaginationLink({
  pageNum,
  currentPage,
  rawParams,
}: {
  pageNum: number
  currentPage: number
  rawParams: Record<string, string>
}) {
  const params = new URLSearchParams(rawParams)
  params.set('page', String(pageNum))
  const url = '/vendors?' + params.toString()
  const isActive = pageNum === currentPage
  const base = 'h-9 w-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors '
  const active = 'bg-rose-500 text-white'
  const inactive = 'bg-white border border-gray-200 text-gray-600 hover:border-rose-300'

  return (
    <a href={url} className={base + (isActive ? active : inactive)}>
      {pageNum}
    </a>
  )
}

export default async function VendorsPage({ searchParams }: PageProps) {
  const rawParams = await searchParams
  const { vendors, total, pages, page } = await getVendors(rawParams)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Find your perfect vendors
          </h1>
          <Suspense>
            <VendorSearchBar />
          </Suspense>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-6 bg-white rounded-xl border border-gray-200 p-5">
              <Suspense>
                <VendorFilters />
              </Suspense>
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                {total} vendor{total !== 1 ? 's' : ''} found
              </p>
            </div>

            <VendorGrid vendors={vendors} />

            {pages > 1 && (
              <div className="flex justify-center gap-2 mt-10">
                {Array.from({ length: pages }).map((_, i) => (
                  <PaginationLink
                    key={i + 1}
                    pageNum={i + 1}
                    currentPage={page}
                    rawParams={rawParams}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}