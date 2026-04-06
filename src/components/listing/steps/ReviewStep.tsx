'use client'

import Image from 'next/image'
import { CATEGORY_LABELS } from '@/lib/constants/categories'
import { PRICE_RANGE_LABELS, PRICE_RANGE_DESCRIPTIONS } from '@/lib/constants/pricing'
import { VendorCategory, PriceRange } from '@prisma/client'

interface ReviewStepProps {
  data: {
    businessName: string
    category: VendorCategory
    location: string
    bio: string
    priceRange: PriceRange
    photos: { url: string; publicId: string; isPrimary: boolean }[]
  }
  isSubmitting: boolean
  onSubmit: () => void
  onBack: () => void
}

export function ReviewStep({ data, isSubmitting, onSubmit, onBack }: ReviewStepProps) {
  const primaryPhoto = data.photos.find((p) => p.isPrimary) ?? data.photos[0]

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-gray-200 overflow-hidden">
        {primaryPhoto && (
          <div className="relative h-48 w-full">
            <Image
              src={primaryPhoto.url}
              alt={data.businessName}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-5 space-y-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{data.businessName}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-500">{CATEGORY_LABELS[data.category]}</span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-500">{data.location}</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">Bio</p>
            <p className="text-sm text-gray-700 line-clamp-3">{data.bio}</p>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-1">Price Range</p>
            <p className="text-sm font-medium text-gray-900">
              {PRICE_RANGE_LABELS[data.priceRange]}{' '}
              <span className="font-normal text-gray-500">
                — {PRICE_RANGE_DESCRIPTIONS[data.priceRange]}
              </span>
            </p>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
              Gallery ({data.photos.length} photo{data.photos.length !== 1 ? 's' : ''})
            </p>
            <div className="flex gap-2 overflow-x-auto">
              {data.photos.map((photo) => (
                <div
                  key={photo.publicId}
                  className="relative h-16 w-16 flex-shrink-0 rounded-lg overflow-hidden"
                >
                  <Image src={photo.url} alt="" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg bg-amber-50 border border-amber-200 px-4 py-3">
        <p className="text-sm text-amber-700">
          <span className="font-semibold">Note:</span> Your listing will be reviewed by our team before it appears publicly. This usually takes 24–48 hours.
        </p>
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          disabled={isSubmitting}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-60"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          disabled={isSubmitting}
          className="flex-1 rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors disabled:opacity-60"
        >
          {isSubmitting ? 'Publishing...' : 'Publish listing'}
        </button>
      </div>
    </div>
  )
}