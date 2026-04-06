'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { VendorCategory, PriceRange } from '@prisma/client'
import { CATEGORY_LABELS } from '@/lib/constants/categories'
import { PRICE_RANGE_LABELS } from '@/lib/constants/pricing'
import { LOCATIONS } from '@/lib/constants/locations'
import { cn } from '@/lib/utils/cn'

export function VendorFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateFilter = useCallback((key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    params.delete('page')
    router.push(`/vendors?${params.toString()}`)
  }, [router, searchParams])

  const clearAll = useCallback(() => {
    router.push('/vendors')
  }, [router])

  const hasFilters = searchParams.has('category') ||
    searchParams.has('location') ||
    searchParams.has('priceRange')

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Filters</h3>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="text-xs text-rose-500 hover:text-rose-600 font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      <div>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
          Category
        </p>
        <div className="space-y-2">
          {Object.values(VendorCategory).map((cat) => (
            <button
              key={cat}
              onClick={() => updateFilter(
                'category',
                searchParams.get('category') === cat ? '' : cat
              )}
              className={cn(
                'w-full text-left text-sm px-3 py-2 rounded-lg transition-colors',
                searchParams.get('category') === cat
                  ? 'bg-rose-50 text-rose-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
          Location
        </p>
        <select
          value={searchParams.get('location') ?? ''}
          onChange={(e) => updateFilter('location', e.target.value)}
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
        >
          <option value="">All locations</option>
          {LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      <div>
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
          Price Range
        </p>
        <div className="space-y-2">
          {Object.values(PriceRange).map((range) => (
            <button
              key={range}
              onClick={() => updateFilter(
                'priceRange',
                searchParams.get('priceRange') === range ? '' : range
              )}
              className={cn(
                'w-full text-left text-sm px-3 py-2 rounded-lg transition-colors',
                searchParams.get('priceRange') === range
                  ? 'bg-rose-50 text-rose-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50'
              )}
            >
              {PRICE_RANGE_LABELS[range]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}