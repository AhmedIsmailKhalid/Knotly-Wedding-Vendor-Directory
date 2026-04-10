'use client'

import { useState } from 'react'

interface DemoAccount {
  role: string
  label: string
  email: string
  password: string
  color: string
}

const DEMO_ACCOUNTS: DemoAccount[] = [
  {
    role: 'Couple',
    label: 'Sarah & James',
    email: 'couple@knotly.dev',
    password: 'Demo1234!',
    color: 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100',
  },
  {
    role: 'Couple',
    label: 'Emily & Tom',
    email: 'couple2@knotly.dev',
    password: 'Demo1234!',
    color: 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100',
  },
  {
    role: 'Vendor',
    label: 'The Grand Estate',
    email: 'grand.estate@knotly.dev',
    password: 'Demo1234!',
    color: 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100',
  },
  {
    role: 'Vendor',
    label: 'Bliss & Co Weddings',
    email: 'bliss.co@knotly.dev',
    password: 'Demo1234!',
    color: 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100',
  },
  {
    role: 'Admin',
    label: 'Admin',
    email: 'admin@knotly.dev',
    password: 'Demo1234!',
    color: 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100',
  },
]

interface DemoCredentialsProps {
  onSelect: (email: string, password: string) => void
}

export function DemoCredentials({ onSelect }: DemoCredentialsProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-center text-xs text-gray-400 hover:text-gray-600 transition-colors py-1"
      >
        {isOpen ? '▲ Hide demo accounts' : '▼ Try a demo account'}
      </button>

      {isOpen && (
        <div className="mt-3 space-y-2">
          <p className="text-xs text-gray-400 text-center mb-2">
            Click any account to auto-fill credentials
          </p>
          {DEMO_ACCOUNTS.map((account) => (
            <button
              key={account.email}
              type="button"
              onClick={() => {
                onSelect(account.email, account.password)
                setIsOpen(false)
              }}
              className={`w-full flex items-center justify-between rounded-lg border px-3 py-2.5 transition-colors ${account.color}`}
            >
              <div className="text-left">
                <p className="text-xs font-semibold">{account.role}</p>
                <p className="text-xs opacity-75">{account.label}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-mono opacity-75">{account.email}</p>
                <p className="text-xs opacity-60">Demo1234!</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}