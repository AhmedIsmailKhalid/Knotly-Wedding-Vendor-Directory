import { cn } from '@/lib/utils/cn'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'rose' | 'green' | 'amber' | 'gray' | 'red'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span className={cn(
      'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
      variant === 'default' && 'bg-gray-100 text-gray-700',
      variant === 'rose' && 'bg-rose-100 text-rose-700',
      variant === 'green' && 'bg-green-100 text-green-700',
      variant === 'amber' && 'bg-amber-100 text-amber-700',
      variant === 'gray' && 'bg-gray-50 text-gray-500',
      variant === 'red' && 'bg-red-100 text-red-700',
      className
    )}>
      {children}
    </span>
  )
}