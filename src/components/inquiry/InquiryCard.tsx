import { InquiryStatusBadge } from './InquiryStatusBadge'
import { CATEGORY_LABELS } from '@/lib/constants/categories'
import { formatShortDate } from '@/lib/utils/formatDate'
import Link from 'next/link'
import type { InquiryWithVendor } from '@/types/inquiry'

interface InquiryCardProps {
  inquiry: InquiryWithVendor
}

export function InquiryCard({ inquiry }: InquiryCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Link
            href={`/vendors/${inquiry.vendor.slug}`}
            className="text-base font-semibold text-gray-900 hover:text-rose-600 transition-colors"
          >
            {inquiry.vendor.businessName}
          </Link>
          <p className="text-xs text-gray-500 mt-0.5">
            {CATEGORY_LABELS[inquiry.vendor.category]} • {inquiry.vendor.location}
          </p>
        </div>
        <InquiryStatusBadge status={inquiry.status} />
      </div>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">
            Wedding date
          </p>
          <p className="text-gray-700">{formatShortDate(inquiry.eventDate)}</p>
        </div>
        {inquiry.guestCount && (
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-0.5">
              Guests
            </p>
            <p className="text-gray-700">{inquiry.guestCount}</p>
          </div>
        )}
      </div>

      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">
          Your message
        </p>
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
          {inquiry.message}
        </p>
      </div>

      {inquiry.response && (
        <div className="rounded-lg bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">
            Vendor response
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {inquiry.response.message}
          </p>
          <p className="text-xs text-gray-400 mt-2">
            {formatShortDate(inquiry.response.createdAt)}
          </p>
        </div>
      )}

      <p className="text-xs text-gray-400">
        Sent {formatShortDate(inquiry.createdAt)}
      </p>
    </div>
  )
}