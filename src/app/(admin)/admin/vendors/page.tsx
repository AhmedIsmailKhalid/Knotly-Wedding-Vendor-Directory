import { prisma } from '@/lib/prisma'
import { CATEGORY_LABELS } from '@/lib/constants/categories'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vendors — Admin — Knotly',
}

interface PageProps {
  searchParams: Promise<{ filter?: string }>
}

export default async function AdminVendorsPage({ searchParams }: PageProps) {
  const { filter } = await searchParams

  const vendors = await prisma.vendorProfile.findMany({
    where: filter === 'pending' ? { isApproved: false } : undefined,
    include: {
      user: { select: { name: true, email: true } },
      photos: { where: { isPrimary: true }, take: 1 },
      _count: { select: { inquiries: true, reviews: true } },
    },
    orderBy: [{ isApproved: 'asc' }, { createdAt: 'desc' }],
  })

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Vendors</h1>

        <div className="flex gap-2">
          <Link
            href="/admin/vendors"
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              !filter
                ? 'bg-gray-900 text-white'
                : 'border border-gray-200 bg-white text-gray-600 hover:border-gray-300'
            }`}
          >
            All
          </Link>

          <Link
            href="/admin/vendors?filter=pending"
            className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
              filter === 'pending'
                ? 'bg-gray-900 text-white'
                : 'border border-gray-200 bg-white text-gray-600 hover:border-gray-300'
            }`}
          >
            Pending
          </Link>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50">
              <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Business
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Category
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Status
              </th>
              <th className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
                Stats
              </th>
              <th className="px-5 py-3" />
            </tr>
          </thead>

          <tbody>
            {vendors.map((vendor) => (
              <tr
                key={vendor.id}
                className="border-b border-gray-50 transition-colors last:border-0 hover:bg-gray-50"
              >
                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-gray-900">
                    {vendor.businessName}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-400">
                    {vendor.user.email}
                  </p>
                </td>

                <td className="px-5 py-4">
                  <span className="text-sm text-gray-600">
                    {CATEGORY_LABELS[vendor.category]}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <Badge variant={vendor.isApproved ? 'green' : 'amber'}>
                    {vendor.isApproved ? 'Approved' : 'Pending'}
                  </Badge>
                </td>

                <td className="px-5 py-4">
                  <p className="text-xs text-gray-500">
                    {vendor._count.inquiries} inquiries · {vendor._count.reviews}{' '}
                    reviews
                  </p>
                </td>

                <td className="px-5 py-4 text-right">
                  <Link
                    href={`/admin/vendors/${vendor.id}`}
                    className="text-sm font-medium text-rose-500 hover:text-rose-600"
                  >
                    Review
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {vendors.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-sm text-gray-500">No vendors found</p>
          </div>
        )}
      </div>
    </div>
  )
}