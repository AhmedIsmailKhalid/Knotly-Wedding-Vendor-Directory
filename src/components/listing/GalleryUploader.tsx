'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

interface UploadedPhoto {
  url: string
  publicId: string
  isPrimary: boolean
}

interface GalleryUploaderProps {
  photos: UploadedPhoto[]
  onChange: (photos: UploadedPhoto[]) => void
  error?: string
}

export function GalleryUploader({ photos, onChange, error }: GalleryUploaderProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)

  const uploadToCloudinary = useCallback(async (file: File): Promise<UploadedPhoto> => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!)
    formData.append('folder', 'knotly/gallery')

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: 'POST', body: formData }
    )

    if (!res.ok) throw new Error('Upload failed')

    const data = await res.json()
    return {
      url: data.secure_url,
      publicId: data.public_id,
      isPrimary: photos.length === 0,
    }
  }, [photos.length])

  const handleFileChange = useCallback(async (files: FileList | null) => {
    if (!files || files.length === 0) return

    setIsUploading(true)
    setUploadError(null)

    try {
      const uploads = await Promise.all(
        Array.from(files).map((file) => uploadToCloudinary(file))
      )
      onChange([...photos, ...uploads])
    } catch {
      setUploadError('Some photos failed to upload. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }, [photos, onChange, uploadToCloudinary])

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    handleFileChange(e.dataTransfer.files)
  }, [handleFileChange])

  const handleRemove = useCallback((publicId: string) => {
    const updated = photos
      .filter((p) => p.publicId !== publicId)
      .map((p, i) => ({ ...p, isPrimary: i === 0 }))
    onChange(updated)
  }, [photos, onChange])

  const handleSetPrimary = useCallback((publicId: string) => {
    onChange(photos.map((p) => ({ ...p, isPrimary: p.publicId === publicId })))
  }, [photos, onChange])

  return (
    <div className="space-y-4">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center hover:border-rose-300 hover:bg-rose-50 transition-colors cursor-pointer"
      >
        <input
          type="file"
          accept="image/*"
          multiple
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={(e) => handleFileChange(e.target.files)}
          disabled={isUploading}
        />
        <div className="text-3xl mb-2">📷</div>
        {isUploading ? (
          <p className="text-sm text-gray-600">Uploading...</p>
        ) : (
          <>
            <p className="text-sm font-medium text-gray-700">
              Drag & drop photos here, or click to browse
            </p>
            <p className="text-xs text-gray-400 mt-1">
              JPG, PNG, WebP — up to 10MB each
            </p>
          </>
        )}
      </div>

      {(error || uploadError) && (
        <p className="text-xs text-red-500">{error ?? uploadError}</p>
      )}

      {photos.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {photos.map((photo) => (
            <div key={photo.publicId} className="relative group rounded-lg overflow-hidden aspect-square">
              <Image
                src={photo.url}
                alt="Gallery photo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                {!photo.isPrimary && (
                  <button
                    type="button"
                    onClick={() => handleSetPrimary(photo.publicId)}
                    className="text-xs bg-white text-gray-800 rounded-md px-2 py-1 font-medium hover:bg-gray-100"
                  >
                    Set primary
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => handleRemove(photo.publicId)}
                  className="text-xs bg-red-500 text-white rounded-md px-2 py-1 font-medium hover:bg-red-600"
                >
                  Remove
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