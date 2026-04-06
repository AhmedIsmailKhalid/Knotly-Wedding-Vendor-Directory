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
      response: true,
    },
    orderBy: { createdAt: 'desc' },
  }) as InquiryWithCouple[]

  const pending = inquiries.filter((i) => i.status === 'PENDING')
  const responded = inquiries.filter((i) => i.status !== 'PENDING')

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Inquiries</h1>

      {inquiries.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">📬</div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            No inquiries yet
          </h2>
          <p className="text-sm text-gray-500">
            Inquiries from couples will appear here once your listing is approved.
          </p>
        </div>
      ) : (
        <div className="space-y-8">
          {pending.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Pending ({pending.length})
              </h2>
              <div className="space-y-4">
                {pending.map((inquiry) => (
                  <VendorInquiryCard key={inquiry.id} inquiry={inquiry} />
                ))}
              </div>
            </div>
          )}

          {responded.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
                Responded ({responded.length})
              </h2>
              <div className="space-y-4">
                {responded.map((inquiry) => (
                  <VendorInquiryCard key={inquiry.id} inquiry={inquiry} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}