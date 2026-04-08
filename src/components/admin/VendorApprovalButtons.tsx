'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface VendorApprovalButtonsProps {
  vendorId: string
  isApproved: boolean
}

export function VendorApprovalButtons({ vendorId, isApproved }: VendorApprovalButtonsProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleAction(action: 'approve' | 'reject') {
    setIsLoading(true)
    setError(null)

    try {
      const res = await fetch(`/api/admin/vendors/${vendorId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action }),
      })

      if (!res.ok) {
        setError('Action failed. Please try again.')
        return
      }

      router.refresh()
    } catch {
      setError('Something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-2">
      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
      <div className="flex gap-2">
        {!isApproved ? (
          <button
            onClick={() => handleAction('approve')}
            disabled={isLoading}
            className="flex-1 rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-white hover:bg-green-600 transition-colors disabled:opacity-60"
          >
            {isLoading ? 'Processing...' : 'Approve'}
          </button>
        ) : (
          <button
            onClick={() => handleAction('reject')}
            disabled={isLoading}
            className="flex-1 rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 transition-colors disabled:opacity-60"
          >
            {isLoading ? 'Processing...' : 'Revoke approval'}
          </button>
        )}
      </div>
    </div>
  )
}