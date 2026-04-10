'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { pricingSchema, type PricingInput } from '@/lib/validations/vendor'
import { PRICE_RANGE_LABELS, PRICE_RANGE_DESCRIPTIONS } from '@/lib/constants/pricing'
import { cn } from '@/lib/utils/cn'

const PRICE_RANGES = Object.keys(PRICE_RANGE_LABELS) as Array<keyof typeof PRICE_RANGE_LABELS>

interface PricingStepProps {
  defaultValues?: Partial<PricingInput>
  onNext: (data: PricingInput) => void
  onBack: () => void
}

export function PricingStep({ defaultValues, onNext, onBack }: PricingStepProps) {
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<PricingInput>({
    resolver: zodResolver(pricingSchema),
    defaultValues,
  })

  const selected = watch('priceRange')

  return (
    <form onSubmit={handleSubmit(onNext)} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Price range
        </label>
        <div className="grid grid-cols-2 gap-3">
          {PRICE_RANGES.map((range) => (
            <button
              key={range}
              type="button"
              onClick={() => setValue('priceRange', range as 'BUDGET' | 'MID' | 'PREMIUM' | 'LUXURY', { shouldValidate: true })}
              className={cn(
                'flex flex-col items-start gap-1 rounded-xl border-2 p-4 text-left transition-all',
                selected === range
                  ? 'border-rose-400 bg-rose-50'
                  : 'border-gray-200 bg-white hover:border-gray-300'
              )}
            >
              <span className={cn(
                'text-sm font-semibold',
                selected === range ? 'text-rose-700' : 'text-gray-900'
              )}>
                {PRICE_RANGE_LABELS[range]}
              </span>
              <span className="text-xs text-gray-500">
                {PRICE_RANGE_DESCRIPTIONS[range]}
              </span>
            </button>
          ))}
        </div>
        {errors.priceRange && (
          <p className="mt-2 text-xs text-red-500">{errors.priceRange.message}</p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
        >
          Continue
        </button>
      </div>
    </form>
  )
}