'use client'

import { useState } from 'react'
import { InquiryStatusBadge } from './InquiryStatusBadge'
import { CoupleReplyForm } from './CoupleReplyForm'
import { CATEGORY_LABELS } from '@/lib/constants/categories'
import { formatShortDate } from '@/lib/utils/formatDate'
import Link from 'next/link'
import type { InquiryWithVendor } from '@/types/inquiry'

interface InquiryCardProps {
  inquiry: InquiryWithVendor
}

export function InquiryCard({ inquiry }: InquiryCardProps) {
  const [isReplying, setIsReplying] = useState(false)
  const canReply = inquiry.status === 'REPLIED' || inquiry.status === 'PENDING'

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            <Link
              href={`/vendors/${inquiry.vendor.slug}`}
              className="text-base font-bold text-gray-900 hover:text-rose-600 transition-colors"
            >
              {inquiry.vendor.businessName}
            </Link>
            <p className="text-xs text-gray-400 mt-0.5">
              {CATEGORY_LABELS[inquiry.vendor.category]} · {inquiry.vendor.location}
            </p>
          </div>
          <InquiryStatusBadge status={inquiry.status} />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">
              Wedding date
            </p>
            <p className="text-sm font-semibold text-gray-900">
              {formatShortDate(inquiry.eventDate)}
            </p>
          </div>
          {inquiry.guestCount && (
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">
                Guests
              </p>
              <p className="text-sm font-semibold text-gray-900">{inquiry.guestCount}</p>
            </div>
          )}
        </div>

        {/* Initial message */}
        <div className="mb-4">
          <p className="text-xs text-gray-400 uppercase tracking-wide font-medium mb-1">
            Your message
          </p>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
            {inquiry.message}
          </p>
        </div>

        {/* Conversation thread */}
        {inquiry.responses.length > 0 && (
          <div className="space-y-3 mb-4">
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">
              {inquiry.responses.length === 1 ? 'Response' : 'Conversation'}
            </p>
            {inquiry.responses.map((response, index) => {
              const isCouple = response.senderRole === 'COUPLE'
              const isFinal = index === inquiry.responses.length - 1
              const isAccepted = isFinal && inquiry.status === 'ACCEPTED'
              const isDeclined = isFinal && inquiry.status === 'DECLINED'

              if (isCouple) {
                return (
                  <div key={response.id} className="rounded-xl border bg-pink-50 border-pink-200 p-4">
                    <p className="text-xs font-semibold text-pink-500 uppercase tracking-wide mb-1">
                      You replied
                    </p>
                    <p className="text-sm text-gray-700 leading-relaxed">{response.message}</p>
                    <p className="text-xs text-gray-400 mt-2">{formatShortDate(response.createdAt)}</p>
                  </div>
                )
              }

              return (
                <div
                  key={response.id}
                  className={[
                    'rounded-xl border p-4',
                    isAccepted ? 'bg-emerald-50 border-emerald-100' :
                    isDeclined ? 'bg-red-50 border-red-100' :
                    'bg-indigo-50 border-indigo-100',
                  ].join(' ')}
                >
                  <p className={[
                    'text-xs font-semibold uppercase tracking-wide mb-1',
                    isAccepted ? 'text-emerald-600' :
                    isDeclined ? 'text-red-500' :
                    'text-indigo-500',
                  ].join(' ')}>
                    {isAccepted ? 'Accepted' : isDeclined ? 'Declined' : 'Vendor reply'}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">{response.message}</p>
                  <p className="text-xs text-gray-400 mt-2">{formatShortDate(response.createdAt)}</p>
                </div>
              )
            })}
          </div>
        )}

        {/* Couple reply */}
        {canReply && (
          <div>
            {isReplying ? (
              <CoupleReplyForm
                inquiryId={inquiry.id}
                vendorName={inquiry.vendor.businessName}
                onClose={() => setIsReplying(false)}
              />
            ) : (
              <button
                onClick={() => setIsReplying(true)}
                className="w-full rounded-xl border border-rose-200 px-4 py-2.5 text-sm font-semibold text-rose-500 hover:bg-rose-50 transition-colors"
              >
                {inquiry.responses.length > 0 ? 'Send follow-up' : 'Add a message'}
              </button>
            )}
          </div>
        )}
      </div>

      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          Sent {formatShortDate(inquiry.createdAt)}
        </p>
      </div>
    </div>
  )
}