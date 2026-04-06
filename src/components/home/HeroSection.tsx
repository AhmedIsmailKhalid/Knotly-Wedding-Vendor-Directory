import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-white to-pink-50 py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-rose-100 text-rose-600 text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-wide">
          Wedding Vendor Directory
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Find the perfect vendors{' '}
          <span className="text-rose-500">for your big day</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          Browse thousands of trusted wedding vendors — venues, photographers, caterers, and more — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/vendors"
            className="rounded-xl bg-rose-500 px-8 py-3.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
          >
            Browse vendors
          </Link>
          <Link
            href="/register"
            className="rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-700 hover:border-gray-300 transition-colors"
          >
            List your business
          </Link>
        </div>
      </div>
    </section>
  )
}