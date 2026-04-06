import { cn } from '@/lib/utils/cn'

interface StarRatingProps {
  rating: number
  max?: number
  size?: 'sm' | 'md'
  className?: string
}

export function StarRating({ rating, max = 5, size = 'sm', className }: StarRatingProps) {
  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {Array.from({ length: max }).map((_, i) => (
        <span
          key={i}
          className={cn(
            size === 'sm' ? 'text-sm' : 'text-base',
            i < Math.round(rating) ? 'text-amber-400' : 'text-gray-200'
          )}
        >
          ★
        </span>
      ))}
    </div>
  )
}