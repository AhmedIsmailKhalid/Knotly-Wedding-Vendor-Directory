'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { BasicInfoStep } from './steps/BasicInfoStep'
import { PricingStep } from './steps/PricingStep'
import { GalleryStep } from './steps/GalleryStep'
import { ReviewStep } from './steps/ReviewStep'
import type { BasicInfoInput, PricingInput } from '@/lib/validations/vendor'
import { cn } from '@/lib/utils/cn'

const STEPS = ['Basic Info', 'Pricing', 'Gallery', 'Review']

interface WizardData {
  basicInfo?: BasicInfoInput
  pricing?: PricingInput
  photos?: { url: string; publicId: string; isPrimary: boolean }[]
}

export function ListingWizard() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [data, setData] = useState<WizardData>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  function handleBasicInfoNext(basicInfo: BasicInfoInput) {
    setData((prev) => ({ ...prev, basicInfo }))
    setCurrentStep(1)
  }

  function handlePricingNext(pricing: PricingInput) {
    setData((prev) => ({ ...prev, pricing }))
    setCurrentStep(2)
  }

  function handleGalleryNext(photos: { url: string; publicId: string; isPrimary: boolean }[]) {
    setData((prev) => ({ ...prev, photos }))
    setCurrentStep(3)
  }

  async function handleSubmit() {
    if (!data.basicInfo || !data.pricing || !data.photos) return

    setIsSubmitting(true)
    setServerError(null)

    try {
      const res = await fetch('/api/vendors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data.basicInfo,
          ...data.pricing,
          photos: data.photos,
        }),
      })

      const json = await res.json()

      if (!res.ok) {
        setServerError(json.error ?? 'Failed to create listing. Please try again.')
        setCurrentStep(3)
        return
      }

      router.push('/vendor/dashboard?listing=created')
      router.refresh()
    } catch {
      setServerError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const reviewData = data.basicInfo && data.pricing && data.photos
  ? {
      businessName: data.basicInfo.businessName,
      category: data.basicInfo.category,
      location: data.basicInfo.location,
      bio: data.basicInfo.bio,
      priceRange: data.pricing.priceRange,
      photos: data.photos,
    }
  : null

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {STEPS.map((step, index) => (
            <div key={step} className="flex items-center">
              <div className={cn(
                'flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors',
                index < currentStep
                  ? 'bg-rose-500 text-white'
                  : index === currentStep
                  ? 'bg-rose-100 text-rose-600 ring-2 ring-rose-400'
                  : 'bg-gray-100 text-gray-400'
              )}>
                {index < currentStep ? '✓' : index + 1}
              </div>
              {index < STEPS.length - 1 && (
                <div className={cn(
                  'h-0.5 w-12 mx-1 transition-colors',
                  index < currentStep ? 'bg-rose-400' : 'bg-gray-200'
                )} />
              )}
            </div>
          ))}
        </div>
        <p className="text-sm font-medium text-gray-700 mt-2">{STEPS[currentStep]}</p>
      </div>

      {serverError && (
        <div className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {serverError}
        </div>
      )}

      {currentStep === 0 && (
        <BasicInfoStep
          defaultValues={data.basicInfo}
          onNext={handleBasicInfoNext}
        />
      )}

      {currentStep === 1 && (
        <PricingStep
          defaultValues={data.pricing}
          onNext={handlePricingNext}
          onBack={() => setCurrentStep(0)}
        />
      )}

      {currentStep === 2 && (
        <GalleryStep
          defaultPhotos={data.photos}
          onNext={handleGalleryNext}
          onBack={() => setCurrentStep(1)}
        />
      )}

      {currentStep === 3 && reviewData && (
        <ReviewStep
          data={reviewData}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
          onBack={() => setCurrentStep(2)}
        />
      )}
    </div>
  )
}