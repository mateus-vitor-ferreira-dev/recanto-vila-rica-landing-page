import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-[#C6A15B]/30 bg-[#C6A15B]/10 text-[#A07C2A]',
        className
      )}
    >
      {children}
    </span>
  )
}
