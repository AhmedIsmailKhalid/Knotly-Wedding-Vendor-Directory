import { VendorCard } from './VendorCard'
import type { VendorCardData } from '@/types/vendor'

interface VendorGridProps {
  vendors: VendorCardData[]
}

export function VendorGrid({ vendors }: VendorGridProps) {
  if (vendors.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="text-5xl mb-4">🔍</div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">No vendors found</h3>
        <p className="text-sm text-gray-500">
          Try adjusting your filters or search terms
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {vendors.map((vendor) => (
        <VendorCard key={vendor.id} vendor={vendor} />
      ))}
    </div>
  )
}