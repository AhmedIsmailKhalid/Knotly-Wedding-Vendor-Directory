'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { reviewSchema, type ReviewInput } from '@/lib/validations/review'

interface ReviewFormProps {
  vendorId: string
  vendorName: string
  onSuccess?: () => void
}

export function ReviewForm({ vendorId, vendorName, onSuccess }: ReviewFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [selectedRating, setSelectedRating] = useState(0)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ReviewInput>({
    resolver: zodResolver(reviewSchema),
    defaultValues: { vendorId },
  })

  function handleRatingClick(rating: number) {
    setSelectedRating(rating)
    setValue('rating', rating, { shouldValidate: true })
  }

  async function onSubmit(data: ReviewInput) {
    setIsLoading(true)
    setServerError(null)

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok) {
        setServerError(json.error ?? 'Failed to submit review.')
        return
      }

      router.refresh()
      onSuccess?.()
    } catch {
      setServerError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input type="hidden" {...register('vendorId')} />
      <input type="hidden" {...register('rating', { valueAsNumber: true })} />

      {serverError && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {serverError}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your rating
        </label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => handleRatingClick(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="text-2xl transition-colors"
            >
              <span className={
                star <= (hoveredRating || selectedRating)
                  ? 'text-amber-400'
                  : 'text-gray-200'
              }>
                ★
              </span>
            </button>
          ))}
        </div>
        {errors.rating && (
          <p className="mt-1 text-xs text-red-500">{errors.rating.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your review
        </label>
        <textarea
          {...register('body')}
          rows={4}
          placeholder={`Share your experience with ${vendorName}...`}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400 resize-none"
        />
        {errors.body && (
          <p className="mt-1 text-xs text-red-500">{errors.body.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading || selectedRating === 0}
        className="w-full rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Submitting...' : 'Submit review'}
      </button>
    </form>
  )
}