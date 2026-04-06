'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { inquirySchema, type InquiryInput } from '@/lib/validations/inquiry'

interface InquiryFormProps {
  vendorId: string
  vendorName: string
}

export function InquiryForm({ vendorId, vendorName }: InquiryFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const today = new Date()
  today.setDate(today.getDate() + 1)
  const minDate = today.toISOString().split('T')[0]

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InquiryInput>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { vendorId },
  })

  async function onSubmit(data: InquiryInput) {
    setIsLoading(true)
    setServerError(null)

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok) {
        setServerError(json.error ?? 'Failed to send inquiry. Please try again.')
        return
      }

      setSuccess(true)
      router.refresh()
    } catch {
      setServerError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-4">
        <div className="text-3xl mb-3">💌</div>
        <h3 className="text-base font-semibold text-gray-900 mb-1">
          Inquiry sent!
        </h3>
        <p className="text-sm text-gray-500">
          {vendorName} will get back to you soon. You can track your inquiry in your dashboard.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input type="hidden" {...register('vendorId')} value={vendorId} />

      {serverError && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {serverError}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Wedding date
        </label>
        <input
          {...register('eventDate')}
          type="date"
          min={minDate}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
        />
        {errors.eventDate && (
          <p className="mt-1 text-xs text-red-500">{errors.eventDate.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Estimated guest count
        </label>
        <input
          {...register('guestCount', { valueAsNumber: true })}
          type="number"
          min={1}
          placeholder="e.g. 100"
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
        />
        {errors.guestCount && (
          <p className="mt-1 text-xs text-red-500">{errors.guestCount.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder={`Tell ${vendorName} about your wedding vision, style, and any specific requirements...`}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400 resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? 'Sending...' : 'Send inquiry'}
      </button>
    </form>
  )
}