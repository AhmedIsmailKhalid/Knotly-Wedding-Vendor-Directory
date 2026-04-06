'use client'

import { useState } from 'react'
import { GalleryUploader } from '../GalleryUploader'

interface Photo {
  url: string
  publicId: string
  isPrimary: boolean
}

interface GalleryStepProps {
  defaultPhotos?: Photo[]
  onNext: (photos: Photo[]) => void
  onBack: () => void
}

export function GalleryStep({ defaultPhotos = [], onNext, onBack }: GalleryStepProps) {
  const [photos, setPhotos] = useState<Photo[]>(defaultPhotos)
  const [error, setError] = useState<string | null>(null)

  function handleNext() {
    if (photos.length === 0) {
      setError('Please upload at least one photo')
      return
    }
    setError(null)
    onNext(photos)
  }

  return (
    <div className="space-y-5">
      <GalleryUploader
        photos={photos}
        onChange={setPhotos}
        error={error ?? undefined}
      />

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="flex-1 rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  )
}