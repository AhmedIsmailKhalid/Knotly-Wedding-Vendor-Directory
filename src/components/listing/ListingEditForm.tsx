'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { basicInfoSchema, pricingSchema, type BasicInfoInput, type PricingInput } from '@/lib/validations/vendor'
import { CATEGORY_LABELS } from '@/lib/constants/categories'
import { PRICE_RANGE_LABELS, PRICE_RANGE_DESCRIPTIONS } from '@/lib/constants/pricing'
import { LOCATIONS } from '@/lib/constants/locations'
import { cn } from '@/lib/utils/cn'
import type { VendorProfile, GalleryPhoto } from '@prisma/client'

type VendorProfileWithPhotos = VendorProfile & { photos: GalleryPhoto[] }

const CATEGORIES = Object.keys(CATEGORY_LABELS) as Array<keyof typeof CATEGORY_LABELS>
const PRICE_RANGES = Object.keys(PRICE_RANGE_LABELS) as Array<keyof typeof PRICE_RANGE_LABELS>

interface ListingEditFormProps {
  vendorProfile: VendorProfileWithPhotos
}

export function ListingEditForm({ vendorProfile }: ListingEditFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [selectedPriceRange, setSelectedPriceRange] = useState(vendorProfile.priceRange)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicInfoInput>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      businessName: vendorProfile.businessName,
      category: vendorProfile.category,
      location: vendorProfile.location,
      bio: vendorProfile.bio,
    },
  })

  const { setValue: setPricingValue } = useForm<PricingInput>({
    resolver: zodResolver(pricingSchema),
    defaultValues: { priceRange: vendorProfile.priceRange },
  })

  async function onSubmit(data: BasicInfoInput) {
    setIsLoading(true)
    setServerError(null)

    try {
      const res = await fetch(`/api/vendors/${vendorProfile.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          priceRange: selectedPriceRange,
          photos: vendorProfile.photos,
        }),
      })

      const json = await res.json()

      if (!res.ok) {
        setServerError(json.error ?? 'Failed to update listing.')
        return
      }

      router.push('/vendor/listing')
      router.refresh()
    } catch {
      setServerError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-5">
      {serverError && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {serverError}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Business name
        </label>
        <input
          {...register('businessName')}
          type="text"
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
        />
        {errors.businessName && (
          <p className="mt-1 text-xs text-red-500">{errors.businessName.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          {...register('category')}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {CATEGORY_LABELS[cat]}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="mt-1 text-xs text-red-500">{errors.category.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Location
        </label>
        <select
          {...register('location')}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
        >
          {LOCATIONS.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        {errors.location && (
          <p className="mt-1 text-xs text-red-500">{errors.location.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Bio
        </label>
        <textarea
          {...register('bio')}
          rows={6}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400 resize-none"
        />
        {errors.bio && (
          <p className="mt-1 text-xs text-red-500">{errors.bio.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Price range
        </label>
        <div className="grid grid-cols-2 gap-3">
          {PRICE_RANGES.map((range) => (
            <button
              key={range}
              type="button"
              onClick={() => {
                setSelectedPriceRange(range as typeof vendorProfile.priceRange)
                setPricingValue('priceRange', range as typeof vendorProfile.priceRange)
              }}
              className={cn(
                'flex flex-col items-start gap-1 rounded-xl border-2 p-4 text-left transition-all',
                selectedPriceRange === range
                  ? 'border-rose-400 bg-rose-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              )}
            >
              <span className={cn(
                'text-sm font-semibold',
                selectedPriceRange === range ? 'text-rose-700' : 'text-gray-900'
              )}>
                {PRICE_RANGE_LABELS[range]}
              </span>
              <span className="text-xs text-gray-500">
                {PRICE_RANGE_DESCRIPTIONS[range]}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={() => router.back()}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors disabled:opacity-60"
        >
          {isLoading ? 'Saving...' : 'Save changes'}
        </button>
      </div>
    </form>
  )
}