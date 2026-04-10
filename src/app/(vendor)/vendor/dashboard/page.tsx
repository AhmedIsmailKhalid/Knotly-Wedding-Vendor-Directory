import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { CATEGORY_LABELS } from '@/lib/constants/categories'
import { InquiryStatusBadge } from '@/components/inquiry/InquiryStatusBadge'
import { Badge } from '@/components/ui/Badge'
import { formatShortDate } from '@/lib/utils/formatDate'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vendor Dashboard — Knotly',
}

export default async function VendorDashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'VENDOR') {
    redirect('/login')
  }

  const vendorProfile = await prisma.vendorProfile.findUnique({
    where: { userId: session.user.id },
    include: {
      photos: { where: { isPrimary: true }, take: 1 },
      _count: { select: { inquiries: true, reviews: true } },
    },
  })

  const recentInquiries = vendorProfile
    ? await prisma.inquiry.findMany({
        where: { vendorId: vendorProfile.id },
        include: {
          couple: { select: { name: true, email: true } },
          responses: {
            orderBy: { createdAt: 'desc' as const },
            take: 1,
            select: { id: true, message: true, senderRole: true, createdAt: true, inquiryId: true },
          },
        },
        orderBy: { createdAt: 'desc' },
        take: 4,
      })
    : []

  const pendingCount = recentInquiries.filter((i) => i.status === 'PENDING').length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero banner */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-10">
        <div className="max-w-4xl mx-auto flex items-start justify-between">
          <div>
            <p className="text-gray-400 text-sm font-medium mb-1">Vendor dashboard</p>
            <h1 className="text-3xl font-bold text-white">{session.user.name}</h1>
            {vendorProfile && (
              <p className="text-gray-400 mt-2 text-sm">
                {CATEGORY_LABELS[vendorProfile.category]} · {vendorProfile.location}
              </p>
            )}
          </div>
          {vendorProfile && (
            <Badge variant={vendorProfile.isApproved ? 'green' : 'amber'}>
              {vendorProfile.isApproved ? '● Live' : '● Pending approval'}
            </Badge>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-6 pb-12">
        {!vendorProfile ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
            <div className="text-5xl mb-4">🏢</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Create your listing
            </h2>
            <p className="text-sm text-gray-500 mb-8 max-w-sm mx-auto">
              Set up your business profile to start receiving inquiries from couples planning their wedding.
            </p>
            <Link
              href="/vendor/listing/create"
              className="inline-flex items-center rounded-xl bg-rose-500 px-6 py-3 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
            >
              Create listing
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Total inquiries', value: vendorProfile._count.inquiries, icon: '💌' },
                  { label: 'Pending', value: pendingCount, icon: '⏳' },
                  { label: 'Reviews', value: vendorProfile._count.reviews, icon: '⭐' },
                ].map((stat: { label: string; value: number; icon: string }) => (
                  <div
                    key={stat.label}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Recent inquiries */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-semibold text-gray-900">
                    Recent inquiries
                  </h2>
                  <Link
                    href="/vendor/inquiries"
                    className="text-xs font-medium text-rose-500 hover:text-rose-600"
                  >
                    View all
                  </Link>
                </div>

                {recentInquiries.length === 0 ? (
                  <div className="bg-white rounded-2xl border border-gray-100 p-8 text-center">
                    <div className="text-3xl mb-3">📬</div>
                    <p className="text-sm font-medium text-gray-900 mb-1">
                      No inquiries yet
                    </p>
                    <p className="text-xs text-gray-500">
                      Inquiries will appear here once your listing is approved and visible to couples.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {recentInquiries.map((inquiry: typeof recentInquiries[number]) => (
                      <div
                        key={inquiry.id}
                        className="bg-white rounded-2xl border border-gray-100 p-4 flex items-center gap-4"
                      >
                        <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-sm font-semibold text-gray-600">
                          {inquiry.couple.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold text-gray-900 truncate">
                            {inquiry.couple.name}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {formatShortDate(inquiry.eventDate)} · {inquiry.couple.email}
                          </p>
                        </div>
                        <InquiryStatusBadge status={inquiry.status} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-4">
              <h2 className="text-base font-semibold text-gray-900">Your listing</h2>
              <div className="bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50">
                {[
                  { href: '/vendor/listing', icon: '🏢', label: 'View listing', desc: 'See your public profile' },
                  { href: '/vendor/listing/edit', icon: '✏️', label: 'Edit listing', desc: 'Update your details' },
                  { href: '/vendor/inquiries', icon: '💌', label: 'All inquiries', desc: 'Manage requests' },
                  {
                    href: vendorProfile.isApproved ? `/vendors/${vendorProfile.slug}` : '#',
                    icon: '🔗',
                    label: 'Public profile',
                    desc: vendorProfile.isApproved ? 'View as couples see it' : 'Pending approval',
                  },
                ].map((action: { href: string; icon: string; label: string; desc: string }) => (
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
        )}
      </div>
    </div>
  )
}