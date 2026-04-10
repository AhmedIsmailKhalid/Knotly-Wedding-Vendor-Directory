'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { inquiryResponseSchema, type InquiryResponseInput } from '@/lib/validations/inquiry'

interface InquiryResponseFormProps {
  inquiryId: string
  coupleName: string
  onClose: () => void
}

type ResponseStatus = 'REPLIED' | 'ACCEPTED' | 'DECLINED'

const STATUS_OPTIONS: { value: ResponseStatus; label: string; desc: string; active: string; inactive: string }[] = [
  {
    value: 'REPLIED',
    label: 'Reply',
    desc: 'Continue the conversation',
    active: 'border-blue-400 bg-blue-50 text-blue-700',
    inactive: 'border-gray-200 text-gray-600 hover:border-gray-300',
  },
  {
    value: 'ACCEPTED',
    label: 'Accept',
    desc: 'Confirm the booking',
    active: 'border-green-400 bg-green-50 text-green-700',
    inactive: 'border-gray-200 text-gray-600 hover:border-gray-300',
  },
  {
    value: 'DECLINED',
    label: 'Decline',
    desc: 'Turn down the request',
    active: 'border-red-400 bg-red-50 text-red-700',
    inactive: 'border-gray-200 text-gray-600 hover:border-gray-300',
  },
]

const PLACEHOLDERS: Record<ResponseStatus, string> = {
  REPLIED: 'Thanks for reaching out! We have availability on that date. Could you tell us more about...',
  ACCEPTED: 'Great news! We would love to be part of your wedding day...',
  DECLINED: 'Thank you for your inquiry. Unfortunately we are unavailable on that date...',
}

export function InquiryResponseForm({ inquiryId, coupleName, onClose }: InquiryResponseFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<ResponseStatus>('REPLIED')

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<InquiryResponseInput>({
    resolver: zodResolver(inquiryResponseSchema),
    defaultValues: { status: 'REPLIED' },
  })

  async function onSubmit(data: InquiryResponseInput) {
    setIsLoading(true)
    setServerError(null)

    try {
      const res = await fetch(`/api/inquiries/${inquiryId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok) {
        setServerError(json.error ?? 'Failed to respond. Please try again.')
        return
      }

      router.refresh()
      onClose()
    } catch {
      setServerError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {serverError && (
        <div className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
          {serverError}
        </div>
      )}

      <div>
        <p className="text-sm font-medium text-gray-700 mb-2">Response type</p>
        <div className="grid grid-cols-3 gap-2">
          {STATUS_OPTIONS.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                setSelectedStatus(option.value)
                setValue('status', option.value, { shouldValidate: true })
              }}
              className={[
                'flex flex-col items-center gap-0.5 rounded-xl border-2 py-3 px-2 text-center transition-colors',
                selectedStatus === option.value ? option.active : option.inactive,
              ].join(' ')}
            >
              <span className="text-sm font-semibold">{option.label}</span>
              <span className="text-xs opacity-70">{option.desc}</span>
            </button>
          ))}
        </div>
        <input type="hidden" {...register('status')} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message to {coupleName}
        </label>
        <textarea
          {...register('message')}
          rows={4}
          placeholder={PLACEHOLDERS[selectedStatus]}
          className="w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400 resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          onClick={onClose}
          disabled={isLoading}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-60"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 rounded-lg bg-rose-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-rose-600 transition-colors disabled:opacity-60"
        >
          {isLoading ? 'Sending...' : 'Send response'}
        </button>
      </div>
    </form>
  )
}