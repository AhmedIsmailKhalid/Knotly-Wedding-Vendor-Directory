import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function CoupleSavedPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'COUPLE') {
    redirect('/login')
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900">Saved Vendors</h1>
      <p className="text-gray-500 mt-1">Coming in Phase 5</p>
    </div>
  )
}