'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { basicInfoSchema, type BasicInfoInput } from '@/lib/validations/vendor'
import { CATEGORY_LABELS } from '@/lib/constants/categories'
import { LOCATIONS } from '@/lib/constants/locations'
import { VendorCategory } from '@prisma/client'

interface BasicInfoStepProps {
  defaultValues?: Partial<BasicInfoInput>
  onNext: (data: BasicInfoInput) => void
}

export function BasicInfoStep({ defaultValues, onNext }: BasicInfoStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicInfoInput>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues,
  })

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Business name
        </label>
        <input
          {...register('businessName')}
          type="text"
          placeholder="e.g. Bloom Photography"
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
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
          <option value="">Select a category</option>
          {Object.values(VendorCategory).map((cat) => (
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
          <option value="">Select a location</option>
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
          rows={5}
          placeholder="Tell couples about your business, style, and what makes you unique..."
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400 resize-none"
        />
        {errors.bio && (
          <p className="mt-1 text-xs text-red-500">{errors.bio.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
      >
        Continue
      </button>
    </form>
  )
}