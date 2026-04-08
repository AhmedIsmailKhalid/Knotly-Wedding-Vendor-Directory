import { StarRating } from '@/components/ui/StarRating'
import { formatShortDate } from '@/lib/utils/formatDate'
import type { ReviewWithCouple } from '@/types/review'

interface ReviewCardProps {
  review: ReviewWithCouple
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <div className="border-b border-gray-50 pb-4 last:border-0">
      <div className="flex items-center justify-between mb-1">
        <p className="text-sm font-medium text-gray-900">{review.couple.name}</p>
        <p className="text-xs text-gray-400">{formatShortDate(review.createdAt)}</p>
      </div>
      <StarRating rating={review.rating} />
      <p className="text-sm text-gray-700 mt-2 leading-relaxed">{review.body}</p>
    </div>
  )
}