import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'

export async function Header() {
  const session = await getServerSession(authOptions)

  const dashboardHref =
    session?.user.role === 'VENDOR'
      ? '/vendor/dashboard'
      : session?.user.role === 'ADMIN'
      ? '/admin/dashboard'
      : '/couple/dashboard'

  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold text-gray-900 hover:text-rose-500 transition-colors"
        >
          Knotly
        </Link>

        <nav className="hidden sm:flex items-center gap-6">
          <Link
            href="/vendors"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Find vendors
          </Link>
          <Link
            href="/register?role=VENDOR"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            List your business
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {session ? (
            <Link
              href={dashboardHref}
              className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/register"
                className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
              >
                Get started
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}