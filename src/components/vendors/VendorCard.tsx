import Image from 'next/image'
import Link from 'next/link'
import { CategoryBadge } from './CategoryBadge'
import { StarRating } from '@/components/ui/StarRating'
import { formatPriceRange } from '@/lib/utils/formatCurrency'
import type { VendorCardData } from '@/types/vendor'

interface VendorCardProps {
  vendor: VendorCardData
}

export function VendorCard({ vendor }: VendorCardProps) {
  const primaryPhoto = vendor.photos.find((p) => p.isPrimary) ?? vendor.photos[0]

  return (
    <Link
      href={`/vendors/${vendor.slug}`}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="relative h-52 w-full bg-gray-100 overflow-hidden">
        {primaryPhoto ? (
          <Image
            src={primaryPhoto.url}
            alt={vendor.businessName}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-4xl text-gray-300">
            📷
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 p-4">
        <CategoryBadge category={vendor.category} />

        <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors line-clamp-1">
          {vendor.businessName}
        </h3>

        <p className="text-xs text-gray-500 flex items-center gap-1">
          <span>📍</span> {vendor.location}
        </p>

        <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
          {vendor.bio}
        </p>

        <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-50">
          <div className="flex items-center gap-1.5">
            <StarRating rating={vendor.avgRating ?? 0} />
            <span className="text-xs text-gray-400">
              ({vendor._count.reviews})
            </span>
          </div>
          <span className="text-xs font-medium text-gray-600">
            {formatPriceRange(vendor.priceRange)}
          </span>
        </div>
      </div>
    </Link>
  )
}