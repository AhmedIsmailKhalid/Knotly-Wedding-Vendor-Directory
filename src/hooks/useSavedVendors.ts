'use client'

import { useState, useCallback } from 'react'

export function useSavedVendor(vendorId: string, initialSaved: boolean) {
  const [isSaved, setIsSaved] = useState(initialSaved)
  const [isLoading, setIsLoading] = useState(false)

  const toggle = useCallback(async () => {
    setIsLoading(true)
    const prevState = isSaved

    // Optimistic update
    setIsSaved(!isSaved)

    try {
      const res = await fetch('/api/saved', {
        method: isSaved ? 'DELETE' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vendorId }),
      })

      if (!res.ok) {
        // Rollback on failure
        setIsSaved(prevState)
      }
    } catch {
      // Rollback on error
      setIsSaved(prevState)
    } finally {
      setIsLoading(false)
    }
  }, [isSaved, vendorId])

  return { isSaved, isLoading, toggle }
}