import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-6xl font-bold text-rose-500 mb-4">404</p>
        <h2 className="text-lg font-semibold text-gray-900 mb-1">
          Page not found
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          The page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="rounded-lg bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
        >
          Go home
        </Link>
      </div>
    </div>
  )
}