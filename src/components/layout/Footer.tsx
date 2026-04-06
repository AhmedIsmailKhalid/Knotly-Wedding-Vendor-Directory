import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link href="/" className="text-lg font-bold text-gray-900">
          Knotly
        </Link>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Knotly. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/vendors" className="text-sm text-gray-500 hover:text-gray-700">
            Find vendors
          </Link>
          <Link href="/register" className="text-sm text-gray-500 hover:text-gray-700">
            List your business
          </Link>
        </div>
      </div>
    </footer>
  )
}