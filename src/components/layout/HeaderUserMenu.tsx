'use client'

import { useState, useRef, useEffect } from 'react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import type { Role } from '@/types/auth'

interface HeaderUserMenuProps {
  name: string
  email: string
  role: Role
}

export function HeaderUserMenu({ name, email, role }: HeaderUserMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const dashboardHref =
    role === 'VENDOR'
      ? '/vendor/dashboard'
      : role === 'ADMIN'
      ? '/admin/dashboard'
      : '/couple/dashboard'

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 hover:border-gray-300 transition-colors"
      >
        <div className="h-6 w-6 rounded-full bg-rose-100 flex items-center justify-center">
          <span className="text-xs font-semibold text-rose-600">{initials}</span>
        </div>
        <span className="text-sm font-medium text-gray-700 hidden sm:block">
          {name.split(' ')[0]}
        </span>
        <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-gray-100 bg-white shadow-lg overflow-hidden z-50">
          <div className="px-4 py-3 border-b border-gray-50">
            <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
            <p className="text-xs text-gray-400 truncate">{email}</p>
          </div>

          <div className="py-1">
            <Link
              href={dashboardHref}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span>📊</span> Dashboard
            </Link>

            {role === 'COUPLE' && (
              <>
                <Link
                  href="/couple/inquiries"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span>💌</span> My Inquiries
                </Link>
                <Link
                  href="/couple/saved"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span>♥</span> Saved Vendors
                </Link>
              </>
            )}

            {role === 'VENDOR' && (
              <>
                <Link
                  href="/vendor/listing"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span>🏢</span> My Listing
                </Link>
                <Link
                  href="/vendor/inquiries"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <span>💌</span> Inquiries
                </Link>
              </>
            )}

            {role === 'ADMIN' && (
              <Link
                href="/admin/vendors"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <span>🏢</span> Manage Vendors
              </Link>
            )}
          </div>

          <div className="border-t border-gray-50 py-1">
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="flex items-center gap-2 px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors w-full text-left"
            >
              <span>🚪</span> Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  )
}