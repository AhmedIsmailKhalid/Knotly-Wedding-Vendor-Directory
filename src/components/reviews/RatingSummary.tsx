import { StarRating } from '@/components/ui/StarRating'

interface RatingSummaryProps {
  avgRating: number
  totalReviews: number
}

export function RatingSummary({ avgRating, totalReviews }: RatingSummaryProps) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-3xl font-bold text-gray-900">
        {avgRating.toFixed(1)}
      </span>
      <div>
        <StarRating rating={avgRating} size="md" />
        <p className="text-xs text-gray-500 mt-0.5">
          {totalReviews} {totalReviews === 1 ? 'review' : 'reviews'}
        </p>
      </div>
    </div>
  )
}