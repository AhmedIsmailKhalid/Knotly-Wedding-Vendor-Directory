'use client'

import { cn } from '@/lib/utils/cn'

type Role = 'COUPLE' | 'VENDOR'

interface RoleSelectorProps {
  value: Role
  onChange: (role: Role) => void
}

export function RoleSelector({ value, onChange }: RoleSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <button
        type="button"
        onClick={() => onChange('COUPLE')}
        className={cn(
          'flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all',
          value === 'COUPLE'
            ? 'border-rose-400 bg-rose-50 text-rose-700'
            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
        )}
      >
        <span className="text-2xl">💍</span>
        <span className="text-sm font-medium">We&apos;re a Couple</span>
        <span className="text-center text-xs text-gray-500">
          Browse and book vendors
        </span>
      </button>

      <button
        type="button"
        onClick={() => onChange('VENDOR')}
        className={cn(
          'flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all',
          value === 'VENDOR'
            ? 'border-rose-400 bg-rose-50 text-rose-700'
            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
        )}
      >
        <span className="text-2xl">🏢</span>
        <span className="text-sm font-medium">We&apos;re a Vendor</span>
        <span className="text-center text-xs text-gray-500">
          List your business
        </span>
      </button>
    </div>
  )
}