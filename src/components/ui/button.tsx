import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer select-none focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-[#C6A15B] text-white hover:bg-[#A07C2A] shadow-sm hover:shadow-md',
        outline:
          'border border-[#C6A15B] text-[#C6A15B] bg-transparent hover:bg-[#C6A15B]/10',
        ghost:
          'text-[#6F6A63] hover:text-[#161616] hover:bg-[#E5DDD0]/50',
        white:
          'bg-white text-[#161616] hover:bg-[#F8F4EE] shadow-sm',
        'white-outline':
          'border border-white/50 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm',
      },
      size: {
        sm: 'text-sm px-4 py-2 rounded-full',
        default: 'text-sm px-5 py-2.5 rounded-full',
        lg: 'text-base px-7 py-3.5 rounded-full',
        xl: 'text-base px-8 py-4 rounded-full',
        icon: 'w-10 h-10 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { buttonVariants }
