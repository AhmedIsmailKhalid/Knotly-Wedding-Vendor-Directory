import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { CATEGORY_LABELS } from '@/lib/constants/categories'

export default async function VendorDashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'VENDOR') {
    redirect('/login')
  }

  const vendorProfile = await prisma.vendorProfile.findUnique({
    where: { userId: session.user.id },
    include: {
      photos: true,
      _count: { select: { inquiries: true, reviews: true } },
    },
  })

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-gray-900">
        Welcome, {session.user.name}
      </h1>

      {!vendorProfile ? (
        <div className="mt-8 rounded-xl border-2 border-dashed border-gray-200 p-10 text-center">
          <div className="text-4xl mb-3">🏢</div>
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            You don&apos;t have a listing yet
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Create your listing to start receiving inquiries from couples
          </p>
          <Link
            href="/vendor/listing/create"
            className="inline-flex items-center rounded-lg bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
          >
            Create listing
          </Link>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {vendorProfile.businessName}
                </h2>
                <p className="text-sm text-gray-500 mt-0.5">
                  {CATEGORY_LABELS[vendorProfile.category]} • {vendorProfile.location}
                </p>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                vendorProfile.isApproved
                  ? 'bg-green-100 text-green-700'
                  : 'bg-amber-100 text-amber-700'
              }`}>
                {vendorProfile.isApproved ? 'Live' : 'Pending approval'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-2xl font-bold text-gray-900">
                  {vendorProfile._count.inquiries}
                </p>
                <p className="text-sm text-gray-500 mt-0.5">Inquiries</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="text-2xl font-bold text-gray-900">
                  {vendorProfile._count.reviews}
                </p>
                <p className="text-sm text-gray-500 mt-0.5">Reviews</p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <Link
                href="/vendor/listing/edit"
                className="flex-1 text-center rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Edit listing
              </Link>
              <Link
                href="/vendor/inquiries"
                className="flex-1 text-center rounded-lg bg-rose-500 px-4 py-2 text-sm font-medium text-white hover:bg-rose-600 transition-colors"
              >
                View inquiries
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}