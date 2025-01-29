import { cn } from '../../utils/cn'

interface CardProps {
  children: React.ReactNode
  className?: string
}
export function Card({ children, className }: CardProps) {
  return (
    <section
      className={cn(
        'bg-zinc-900 p-10 border-zinc-700 border shadow-md rounded-lg',
        className || ''
      )}
    >
      {children}
    </section>
  )
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export function CardTitle({ children, className }: CardTitleProps) {
  return <h2 className={cn('font-bold text-xl text-center', className || '')}>{children}</h2>
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn('p-6 pt-0', className || '')}>{children}</div>
}
