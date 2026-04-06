'use client'

import { useState } from 'react'
import { InquiryStatusBadge } from './InquiryStatusBadge'
import { InquiryResponseForm } from './InquiryResponseForm'
import { formatShortDate } from '@/lib/utils/formatDate'
import type { InquiryWithCouple } from '@/types/inquiry'

interface VendorInquiryCardProps {
  inquiry: InquiryWithCouple
}

export function VendorInquiryCard({ inquiry }: VendorInquiryCardProps) {
  const [isResponding, setIsResponding] = useState(false)

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-base font-semibold text-gray-900">
            {inquiry.couple.name}
          </p>
          <p className="text-xs text-gray-500 mt-0.5">{inquiry.couple.email}</p>
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
          Message
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">{inquiry.message}</p>
      </div>

      {inquiry.response ? (
        <div className="rounded-lg bg-gray-50 border border-gray-100 p-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">
            Your response
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {inquiry.response.message}
          </p>
        </div>
      ) : inquiry.status === 'PENDING' && (
        <div>
          {isResponding ? (
            <InquiryResponseForm
              inquiryId={inquiry.id}
              coupleName={inquiry.couple.name}
              onClose={() => setIsResponding(false)}
            />
          ) : (
            <button
              onClick={() => setIsResponding(true)}
              className="w-full rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
            >
              Respond to inquiry
            </button>
          )}
        </div>
      )}

      <p className="text-xs text-gray-400">
        Received {formatShortDate(inquiry.createdAt)}
      </p>
    </div>
  )
}