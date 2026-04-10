import Link from 'next/link'
import { VendorCategory } from '@prisma/client'
import { CATEGORY_LABELS, CATEGORY_ICONS } from '@/lib/constants/categories'

export function CategoryGrid() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
          Browse by category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {Object.values(VendorCategory).map((cat) => (
            <Link
              key={cat}
              href={`/vendors?category=${cat}`}
              className="flex flex-col items-center gap-3 rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:border-rose-200 hover:bg-rose-50 transition-colors group"
            >
              <span className="text-3xl">{CATEGORY_ICONS[cat]}</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-rose-600 text-center transition-colors">
                {CATEGORY_LABELS[cat]}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}