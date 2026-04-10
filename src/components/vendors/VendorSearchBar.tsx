'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from '@/hooks/useDebounce'
import { CATEGORY_LABELS } from '@/lib/constants/categories'
import Link from 'next/link'

interface Suggestion {
  slug: string
  businessName: string
  category: string
  location: string
}

export function VendorSearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') ?? '')
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const debouncedQuery = useDebounce(query, 300)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let cancelled = false

    if (debouncedQuery.length < 2) {
      Promise.resolve().then(() => {
        if (!cancelled) {
          setSuggestions([])
          setIsOpen(false)
        }
      })
      return () => { cancelled = true }
    }

    fetch(`/api/search?q=${encodeURIComponent(debouncedQuery)}`)
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled) {
          setSuggestions(data.suggestions ?? [])
          setIsOpen(true)
        }
      })
      .catch(() => {
        if (!cancelled) setSuggestions([])
      })

    return () => { cancelled = true }
  }, [debouncedQuery])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setIsOpen(false)
    const params = new URLSearchParams(searchParams.toString())
    if (query.trim()) {
      params.set('q', query.trim())
    } else {
      params.delete('q')
    }
    params.delete('page')
    router.push(`/vendors?${params.toString()}`)
  }, [query, router, searchParams])

  return (
    <div ref={containerRef} className="relative w-full">
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="relative flex-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
            🔍
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => suggestions.length > 0 && setIsOpen(true)}
            placeholder="Search vendors by name or location..."
            className="w-full rounded-lg border border-gray-300 pl-9 pr-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
        >
          Search
        </button>
      </form>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 rounded-xl border border-gray-100 bg-white shadow-lg overflow-hidden">
          {suggestions.map((s) => (
            <Link
              key={s.slug}
              href={`/vendors/${s.slug}`}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
            >
              <div>
                <p className="text-sm font-medium text-gray-900">{s.businessName}</p>
                <p className="text-xs text-gray-500">
                  {CATEGORY_LABELS[s.category]} • {s.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}