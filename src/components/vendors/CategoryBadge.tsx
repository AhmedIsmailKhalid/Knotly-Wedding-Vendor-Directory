import { CATEGORY_LABELS, CATEGORY_ICONS } from '@/lib/constants/categories'
import { Badge } from '@/components/ui/Badge'

interface CategoryBadgeProps {
  category: string
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  const label = CATEGORY_LABELS[category as keyof typeof CATEGORY_LABELS] ?? category
  const icon = CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS] ?? ''
  return (
    <Badge variant="rose">
      {icon} {label}
    </Badge>
  )
}