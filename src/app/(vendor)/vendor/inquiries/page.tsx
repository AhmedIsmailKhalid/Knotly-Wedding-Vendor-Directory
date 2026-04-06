import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function VendorInquiriesPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'VENDOR') {
    redirect('/login')
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold text-gray-900">Inquiries</h1>
      <p className="text-gray-500 mt-1">Coming in Phase 4</p>
    </div>
  )
}