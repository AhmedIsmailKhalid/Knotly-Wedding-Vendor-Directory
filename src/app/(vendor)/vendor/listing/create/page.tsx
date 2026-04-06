import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import { ListingWizard } from '@/components/listing/ListingWizard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Listing — Knotly',
}

export default async function CreateListingPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'VENDOR') {
    redirect('/login')
  }

  const existing = await prisma.vendorProfile.findUnique({
    where: { userId: session.user.id },
    select: { id: true },
  })

  if (existing) {
    redirect('/vendor/dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-lg mx-auto mb-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Create your listing</h1>
        <p className="text-sm text-gray-500 mt-1">
          Tell couples about your business in a few simple steps
        </p>
      </div>
      <ListingWizard />
    </div>
  )
}