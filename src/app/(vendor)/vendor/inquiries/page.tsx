import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { VendorInquiryCard } from '@/components/inquiry/VendorInquiryCard'
import type { InquiryWithCouple } from '@/types/inquiry'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inquiries — Knotly',
}

export default async function VendorInquiriesPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'VENDOR') {
    redirect('/login')
  }

  if (!session.user.vendorProfileId) {
    redirect('/vendor/listing/create')
  }

  const inquiries = await prisma.inquiry.findMany({
    where: { vendorId: session.user.vendorProfileId },
    include: {
      couple: { select: { id: true, name: true, email: true } },
      responses: {
        orderBy: { createdAt: 'asc' as const },
        select: { id: true, message: true, senderRole: true, createdAt: true, inquiryId: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  }) as InquiryWithCouple[]

  const pending = inquiries.filter((i) => i.status === 'PENDING')
  const responded = inquiries.filter((i) => i.status !== 'PENDING')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Inquiries</h1>
          <p className="text-gray-400 mt-2 text-sm">
            Manage booking requests from couples.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-4 pb-12">
        {inquiries.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center mt-2">
            <div className="text-5xl mb-4">📬</div>
            <h2 className="text-lg font-bold text-gray-900 mb-1">No inquiries yet</h2>
            <p className="text-sm text-gray-500">
              Inquiries will appear here once your listing is approved and visible to couples.
            </p>
          </div>
        ) : (
          <div className="space-y-8 mt-2">
            {pending.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Pending
                  </h2>
                  <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                    {pending.length}
                  </span>
                </div>
                <div className="space-y-3">
                  {pending.map((inquiry) => (
                    <VendorInquiryCard key={inquiry.id} inquiry={inquiry} />
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
                  {responded.map((inquiry) => (
                    <VendorInquiryCard key={inquiry.id} inquiry={inquiry} />
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