import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import Link from 'next/link'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session || session.user.role !== 'ADMIN') {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-56 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col">
        <div className="p-5 border-b border-gray-100">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Knotly
          </Link>
          <p className="text-xs text-gray-400 mt-0.5">Admin Panel</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <Link
            href="/admin/dashboard"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <span>📊</span> Dashboard
          </Link>
          <Link
            href="/admin/vendors"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <span>🏢</span> Vendors
          </Link>
          <Link
            href="/admin/users"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <span>👥</span> Users
          </Link>
        </nav>
        <div className="p-4 border-t border-gray-100">
          <Link
            href="/api/auth/signout"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50 transition-colors w-full"
          >
            <span>🚪</span> Sign out
          </Link>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}