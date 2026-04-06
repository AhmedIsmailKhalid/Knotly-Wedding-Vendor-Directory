import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard — Knotly',
}

export default async function CoupleDashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'COUPLE') {
    redirect('/login')
  }

  const [inquiryCount, savedCount] = await Promise.all([
    prisma.inquiry.count({ where: { coupleId: session.user.id } }),
    prisma.savedVendor.count({ where: { coupleId: session.user.id } }),
  ])

  const recentInquiries = await prisma.inquiry.findMany({
    where: { coupleId: session.user.id },
    include: {
      vendor: {
        select: { businessName: true, slug: true, category: true },
      },
      response: true,
    },
    orderBy: { createdAt: 'desc' },
    take: 3,
  })

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Welcome, {session.user.name}
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Here is an overview of your wedding planning progress.
      </p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-3xl font-bold text-gray-900">{inquiryCount}</p>
          <p className="text-sm text-gray-500 mt-1">Inquiries sent</p>
          <Link
            href="/couple/inquiries"
            className="text-xs font-medium text-rose-500 hover:text-rose-600 mt-2 inline-block"
          >
            View all
          </Link>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <p className="text-3xl font-bold text-gray-900">{savedCount}</p>
          <p className="text-sm text-gray-500 mt-1">Saved vendors</p>
          <Link
            href="/couple/saved"
            className="text-xs font-medium text-rose-500 hover:text-rose-600 mt-2 inline-block"
          >
            View all
          </Link>
        </div>
      </div>

      {recentInquiries.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            Recent inquiries
          </h2>
          <div className="space-y-3">
            {recentInquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"
              >
                <div>
                  <Link
                    href={`/vendors/${inquiry.vendor.slug}`}
                    className="text-sm font-medium text-gray-900 hover:text-rose-600 transition-colors"
                  >
                    {inquiry.vendor.businessName}
                  </Link>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {inquiry.response ? 'Responded' : 'Awaiting response'}
                  </p>
                </div>
                <span className={[
                  'text-xs font-medium px-2 py-1 rounded-full',
                  inquiry.status === 'ACCEPTED' ? 'bg-green-100 text-green-700' :
                  inquiry.status === 'DECLINED' ? 'bg-red-100 text-red-700' :
                  inquiry.status === 'CANCELLED' ? 'bg-gray-100 text-gray-500' :
                  'bg-amber-100 text-amber-700'
                ].join(' ')}>
                  {inquiry.status.charAt(0) + inquiry.status.slice(1).toLowerCase()}
                </span>
              </div>
            ))}
          </div>
          <Link
            href="/couple/inquiries"
            className="text-sm font-medium text-rose-500 hover:text-rose-600 mt-4 inline-block"
          >
            View all inquiries
          </Link>
        </div>
      )}

      {recentInquiries.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
          <div className="text-4xl mb-3">💍</div>
          <h2 className="text-base font-semibold text-gray-900 mb-1">
            Start planning your wedding
          </h2>
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
      )}
    </div>
  )
}