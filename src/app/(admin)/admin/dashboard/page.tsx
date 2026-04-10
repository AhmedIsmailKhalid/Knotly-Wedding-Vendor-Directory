import { prisma } from '@/lib/prisma'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Admin Dashboard — Knotly',
}

export default async function AdminDashboardPage() {
  const [
    totalVendors,
    pendingVendors,
    totalCouples,
    totalInquiries,
    totalReviews,
    recentVendors,
  ] = await Promise.all([
    prisma.vendorProfile.count(),
    prisma.vendorProfile.count({ where: { isApproved: false } }),
    prisma.user.count({ where: { role: 'COUPLE' } }),
    prisma.inquiry.count(),
    prisma.review.count(),
    prisma.vendorProfile.findMany({
      where: { isApproved: false },
      include: {
        user: { select: { name: true, email: true } },
        photos: { where: { isPrimary: true }, take: 1 },
      },
      orderBy: { createdAt: 'desc' },
      take: 5,
    }),
  ])

  const stats = [
    { label: 'Total Vendors', value: totalVendors, icon: '🏢' },
    {
      label: 'Pending Approval',
      value: pendingVendors,
      icon: '⏳',
      highlight: pendingVendors > 0,
    },
    { label: 'Total Couples', value: totalCouples, icon: '💍' },
    { label: 'Total Inquiries', value: totalInquiries, icon: '💌' },
    { label: 'Total Reviews', value: totalReviews, icon: '⭐' },
  ]

  return (
    <div className="p-8">
      <h1 className="mb-8 text-2xl font-bold text-gray-900">Dashboard</h1>

      <div className="mb-10 grid grid-cols-2 gap-4 lg:grid-cols-5">
        {stats.map((stat: typeof stats[number]) => (
          <div
            key={stat.label}
            className={`rounded-xl border p-5 ${
              stat.highlight
                ? 'border-amber-300 bg-amber-50'
                : 'border-gray-200 bg-white'
            }`}
          >
            <div className="mb-2 text-2xl">{stat.icon}</div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="mt-0.5 text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {recentVendors.length > 0 && (
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-base font-semibold text-gray-900">
              Pending Approvals
            </h2>

            <Link
              href="/admin/vendors?filter=pending"
              className="text-sm font-medium text-rose-500 hover:text-rose-600"
            >
              View all
            </Link>
          </div>

          <div className="space-y-3">
            {recentVendors.map((vendor: typeof recentVendors[number]) => (
              <div
                key={vendor.id}
                className="flex items-center justify-between border-b border-gray-50 py-3 last:border-0"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {vendor.businessName}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-400">
                    {vendor.user.email}
                  </p>
                </div>

                <a
                  href={`/admin/vendors/${vendor.id}`}
                  className="text-sm font-medium text-rose-500 hover:text-rose-600"
                >
                  Review
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}