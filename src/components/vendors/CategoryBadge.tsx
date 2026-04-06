import { VendorCategory } from '@prisma/client'
import { CATEGORY_LABELS, CATEGORY_ICONS } from '@/lib/constants/categories'
import { Badge } from '@/components/ui/Badge'

interface CategoryBadgeProps {
  category: VendorCategory
}

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return (
    <Badge variant="rose">
      {CATEGORY_ICONS[category]} {CATEGORY_LABELS[category]}
    </Badge>
  )
}