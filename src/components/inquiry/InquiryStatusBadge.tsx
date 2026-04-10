import { InquiryStatus } from '@prisma/client'
import { Badge } from '@/components/ui/Badge'

interface InquiryStatusBadgeProps {
  status: InquiryStatus
}

const STATUS_CONFIG: Record<InquiryStatus, { label: string; variant: 'amber' | 'green' | 'red' | 'gray' | 'default' }> = {
  PENDING: { label: 'Pending', variant: 'amber' },
  REPLIED: { label: 'Replied', variant: 'default' },
  ACCEPTED: { label: 'Accepted', variant: 'green' },
  DECLINED: { label: 'Declined', variant: 'red' },
  CANCELLED: { label: 'Cancelled', variant: 'gray' },
}

export function InquiryStatusBadge({ status }: InquiryStatusBadgeProps) {
  const config = STATUS_CONFIG[status]
  return <Badge variant={config.variant}>{config.label}</Badge>
}