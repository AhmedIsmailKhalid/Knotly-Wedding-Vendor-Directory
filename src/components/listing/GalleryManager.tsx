'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Photo {
  id: string
  url: string
  publicId: string
  isPrimary: boolean
}

interface GalleryManagerProps {
  vendorId: string
  initialPhotos: Photo[]
}

export function GalleryManager({ vendorId, initialPhotos }: GalleryManagerProps) {
  const router = useRouter()
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [deletingId, setDeletingId] = useState<string | null>(null)

  const uploadToCloudinary = useCallback(async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!)
    formData.append('folder', 'knotly/gallery')

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: 'POST', body: formData }
    )

    if (!res.ok) throw new Error('Upload failed')
    return await res.json()
  }, [])

  const handleFileChange = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return

    setIsUploading(true)
    setUploadError(null)

    try {
      for (const file of Array.from(files)) {
        const data = await uploadToCloudinary(file)

        const res = await fetch(`/api/vendors/${vendorId}/gallery`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ url: data.secure_url, publicId: data.public_id }),
        })

        if (!res.ok) throw new Error('Failed to save photo')

        const json = await res.json()
        setPhotos((prev) => [...prev, json.photo])
      }
      router.refresh()
    } catch {
      setUploadError('Some photos failed to upload. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }, [vendorId, uploadToCloudinary, router])

  const handleDelete = useCallback(async (photo: Photo) => {
    setDeletingId(photo.id)

    try {
      const res = await fetch(`/api/vendors/${vendorId}/gallery`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ photoId: photo.id, publicId: photo.publicId }),
      })

      if (!res.ok) throw new Error('Failed to delete photo')

      setPhotos((prev) => {
        const remaining = prev.filter((p) => p.id !== photo.id)
        if (photo.isPrimary && remaining.length > 0) {
          return remaining.map((p, i) => ({ ...p, isPrimary: i === 0 }))
        }
        return remaining
      })

      router.refresh()
    } catch {
      setUploadError('Failed to delete photo. Please try again.')
    } finally {
      setDeletingId(null)
    }
  }, [vendorId, router])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-700">
          Gallery ({photos.length} photos)
        </p>
        <label className={[
          'rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer',
          isUploading ? 'opacity-60 cursor-not-allowed' : '',
        ].join(' ')}>
          {isUploading ? 'Uploading...' : '+ Add photos'}
          <input
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            disabled={isUploading}
            onChange={(e) => handleFileChange(e.target.files)}
          />
        </label>
      </div>

      {uploadError && (
        <p className="text-xs text-red-500">{uploadError}</p>
      )}

      {photos.length === 0 ? (
        <div className="rounded-xl border-2 border-dashed border-gray-200 p-8 text-center">
          <p className="text-sm text-gray-400">No photos yet. Add some above.</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          {photos.map((photo) => (
            <div key={photo.id} className="relative group rounded-xl overflow-hidden aspect-square">
              <Image
                src={photo.url}
                alt="Gallery photo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                  onClick={() => handleDelete(photo)}
                  disabled={deletingId === photo.id}
                  className="rounded-lg bg-red-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-600 transition-colors disabled:opacity-60"
                >
                  {deletingId === photo.id ? 'Deleting...' : 'Remove'}
                </button>
              </div>
              {photo.isPrimary && (
                <div className="absolute top-1 left-1 bg-rose-500 text-white text-xs px-1.5 py-0.5 rounded-md font-medium">
                  Primary
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}