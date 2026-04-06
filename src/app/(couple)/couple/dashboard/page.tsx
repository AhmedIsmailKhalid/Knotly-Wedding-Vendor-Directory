import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function CoupleDashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'COUPLE') {
    redirect('/login')
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-900">
        Welcome, {session.user.name}
      </h1>
      <p className="text-gray-500 mt-1">Your couple dashboard — coming in Phase 5</p>
    </div>
  )
}