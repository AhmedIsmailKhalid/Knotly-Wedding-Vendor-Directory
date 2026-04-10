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

  const initials = inquiry.couple.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const canRespond = inquiry.status === 'PENDING' || inquiry.status === 'REPLIED'

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 text-sm font-bold text-gray-600">
              {initials}
            </div>
            <div>
              <p className="text-base font-bold text-gray-900">{inquiry.couple.name}</p>
              <p className="text-xs text-gray-400">{inquiry.couple.email}</p>
            </div>
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
            Initial message
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">{inquiry.message}</p>
        </div>

        {/* Conversation thread */}
        {inquiry.responses.length > 0 && (
          <div className="space-y-3 mb-4">
            <p className="text-xs text-gray-400 uppercase tracking-wide font-medium">
              Conversation
            </p>
            {inquiry.responses.map((response, index) => {
              const isCouple = response.senderRole === 'COUPLE'
              const isFinal = index === inquiry.responses.length - 1
              const isAccepted = isFinal && inquiry.status === 'ACCEPTED'
              const isDeclined = isFinal && inquiry.status === 'DECLINED'

              if (isCouple) {
                return (
                  <div key={response.id} className="rounded-xl border bg-gray-50 border-gray-200 p-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                      Couple replied
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
                    'bg-blue-50 border-blue-100',
                  ].join(' ')}
                >
                  <p className={[
                    'text-xs font-semibold uppercase tracking-wide mb-1',
                    isAccepted ? 'text-emerald-600' :
                    isDeclined ? 'text-red-500' :
                    'text-blue-500',
                  ].join(' ')}>
                    {isAccepted ? 'Accepted' : isDeclined ? 'Declined' : 'Your reply'}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">{response.message}</p>
                  <p className="text-xs text-gray-400 mt-2">{formatShortDate(response.createdAt)}</p>
                </div>
              )
            })}
          </div>
        )}

        {canRespond && (
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
                className="w-full rounded-xl bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
              >
                {inquiry.responses.length > 0 ? 'Send another response' : 'Respond to inquiry'}
              </button>
            )}
          </div>
        )}
      </div>

      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          Received {formatShortDate(inquiry.createdAt)}
        </p>
      </div>
    </div>
  )
}