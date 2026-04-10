import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { InquiryCard } from '@/components/inquiry/InquiryCard'
import Link from 'next/link'
import type { Metadata } from 'next'
import type { InquiryWithVendor } from '@/types/inquiry'

export const metadata: Metadata = {
  title: 'My Inquiries — Knotly',
}

export default async function CoupleInquiriesPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'COUPLE') {
    redirect('/login')
  }

  const inquiries = await prisma.inquiry.findMany({
    where: { coupleId: session.user.id },
    include: {
      vendor: {
        select: {
          id: true,
          slug: true,
          businessName: true,
          category: true,
          location: true,
        },
      },
      responses: {
        orderBy: { createdAt: 'asc' as const },
        select: { id: true, message: true, senderRole: true, createdAt: true, inquiryId: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  }) as InquiryWithVendor[]

  const pending = inquiries.filter((i) => i.status === 'PENDING')
  const responded = inquiries.filter((i) => i.status !== 'PENDING')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-rose-500 to-pink-500 px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white">My Inquiries</h1>
          <p className="text-rose-100 mt-2 text-sm">
            Track all your vendor inquiries and responses in one place.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-4 pb-12">
        {inquiries.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center mt-2">
            <div className="text-5xl mb-4">💌</div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">No inquiries yet</h2>
            <p className="text-sm text-gray-500 mb-6">
              Browse vendors and send your first inquiry to get started.
            </p>
            <Link
              href="/vendors"
              className="inline-flex items-center rounded-xl bg-rose-500 px-6 py-3 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
            >
              Browse vendors
            </Link>
          </div>
        ) : (
          <div className="space-y-8 mt-2">
            {pending.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Awaiting response
                  </h2>
                  <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {pending.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {pending.map((inquiry: typeof pending[number]) => (
                    <InquiryCard key={inquiry.id} inquiry={inquiry} />
                  ))}
                </div>
              </div>
            )}

            {responded.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Responded
                  </h2>
                  <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {responded.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {responded.map((inquiry: typeof responded[number]) => (
                    <InquiryCard key={inquiry.id} inquiry={inquiry} />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}