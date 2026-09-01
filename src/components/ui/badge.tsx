import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border px-3 py-1 text-xs font-mono font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border border-blue-600 bg-blue-600 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-sm shadow-blue-500/10',
        secondary:
          'border-blue-200 bg-blue-50 text-blue-800 hover:bg-blue-100',
        outline:
          'border-blue-200 text-blue-900 bg-white hover:bg-blue-50',
        destructive:
          'border-transparent bg-red-500 text-white hover:bg-red-600',
        cyan:
          'border-sky-200 bg-sky-50 text-sky-800 hover:bg-sky-100',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
