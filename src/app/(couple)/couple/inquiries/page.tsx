import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { InquiryCard } from '@/components/inquiry/InquiryCard'
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
      response: true,
    },
    orderBy: { createdAt: 'desc' },
  }) as InquiryWithVendor[]

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">My Inquiries</h1>

      {inquiries.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">💌</div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            No inquiries yet
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Browse vendors and send your first inquiry
          </p>
          
            <a> href=&quot;/vendors&quot;
            className=&quot;inline-flex items-center rounded-lg bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors&quot;
            
            Browse vendors
          </a>
        </div>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <InquiryCard key={inquiry.id} inquiry={inquiry} />
          ))}
        </div>
      )}
    </div>
  )
}