import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { CATEGORY_LABELS } from '@/lib/constants/categories'
import { InquiryStatusBadge } from '@/components/inquiry/InquiryStatusBadge'
import { formatShortDate } from '@/lib/utils/formatDate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard — Knotly',
}

export default async function CoupleDashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'COUPLE') {
    redirect('/login')
  }

  const [inquiryCount, savedCount, recentInquiries] = await Promise.all([
    prisma.inquiry.count({ where: { coupleId: session.user.id } }),
    prisma.savedVendor.count({ where: { coupleId: session.user.id } }),
    prisma.inquiry.findMany({
      where: { coupleId: session.user.id },
      include: {
        vendor: {
          select: {
            businessName: true,
            slug: true,
            category: true,
            photos: { where: { isPrimary: true }, take: 1 },
          },
        },
        responses: {
          orderBy: { createdAt: 'desc' as const },
          take: 1,
          select: { id: true, message: true, senderRole: true, createdAt: true, inquiryId: true },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 4,
    }),
  ])

  const acceptedCount = await prisma.inquiry.count({
    where: { coupleId: session.user.id, status: 'ACCEPTED' },
  })

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-rose-100 text-sm font-medium mb-1">Welcome back</p>
          <h1 className="text-3xl font-bold text-white">{session.user.name}</h1>
          <p className="text-rose-100 mt-2 text-sm">
            Your wedding planning hub — track vendors, inquiries, and your shortlist all in one place.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-6 pb-12">
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Inquiries sent', value: inquiryCount, icon: '💌', href: '/couple/inquiries' },
            { label: 'Saved vendors', value: savedCount, icon: '♥', href: '/couple/saved' },
            { label: 'Accepted', value: acceptedCount, icon: '✅', href: '/couple/inquiries' },
          ].map((stat) => (
            <Link
              key={stat.label}
              href={stat.href}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-gray-900">Recent inquiries</h2>
              <Link href="/couple/inquiries" className="text-xs font-medium text-rose-500 hover:text-rose-600">
                View all
              </Link>
            </div>

            {recentInquiries.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">
                <div className="text-4xl mb-3">💍</div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Start planning</h3>
                <p className="text-sm text-gray-500 mb-5">
                  Browse vendors and send your first inquiry
                </p>
                <Link
                  href="/vendors"
                  className="inline-flex items-center rounded-lg bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
                >
                  Browse vendors
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                {recentInquiries.map((inquiry) => (
                  <div
                    key={inquiry.id}
                    className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4"
                  >
                    <div className="h-12 w-12 rounded-xl bg-rose-50 flex items-center justify-center flex-shrink-0 text-xl">
                      💌
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/vendors/${inquiry.vendor.slug}`}
                        className="text-sm font-semibold text-gray-900 hover:text-rose-600 transition-colors truncate block"
                      >
                        {inquiry.vendor.businessName}
                      </Link>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {CATEGORY_LABELS[inquiry.vendor.category]} · {formatShortDate(inquiry.eventDate)}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {inquiry.responses.length > 0 ? 'Vendor responded' : 'Awaiting response'}
                      </p>
                    </div>
                    <InquiryStatusBadge status={inquiry.status} />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h2 className="text-base font-semibold text-gray-900">Quick actions</h2>
            <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
              {[
                { href: '/vendors', icon: '🔍', label: 'Browse vendors', desc: 'Find your perfect team' },
                { href: '/couple/inquiries', icon: '💌', label: 'My inquiries', desc: 'Track your requests' },
                { href: '/couple/saved', icon: '♥', label: 'Saved vendors', desc: 'Your shortlist' },
                { href: '/vendors?category=VENUE', icon: '🏛️', label: 'Find a venue', desc: 'Browse all venues' },
              ].map((action) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className="flex items-center gap-3 p-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="text-xl">{action.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{action.label}</p>
                    <p className="text-xs text-gray-400">{action.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}