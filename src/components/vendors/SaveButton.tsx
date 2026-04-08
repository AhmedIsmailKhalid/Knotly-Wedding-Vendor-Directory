'use client'

import { useSavedVendor } from '@/hooks/useSavedVendors'
import { cn } from '@/lib/utils/cn'

interface SaveButtonProps {
  vendorId: string
  initialSaved: boolean
}

export function SaveButton({ vendorId, initialSaved }: SaveButtonProps) {
  const { isSaved, isLoading, toggle } = useSavedVendor(vendorId, initialSaved)

  return (
    <button
      onClick={toggle}
      disabled={isLoading}
      className={cn(
        'flex items-center gap-1.5 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors disabled:opacity-60',
        isSaved
          ? 'border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100'
          : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
      )}
    >
      <span>{isSaved ? '♥' : '♡'}</span>
      <span>{isSaved ? 'Saved' : 'Save'}</span>
    </button>
  )
}