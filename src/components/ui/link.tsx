import { Link as LinkRouter } from 'react-router'
import { cn } from '../../utils/cn'

interface LinkProps {
  to: string
  className?: string
  children: React.ReactNode
}

export function Link({ to, className, children }: LinkProps) {
  return (
    <LinkRouter
      to={to}
      className={cn(
        'text-malachite-600 font-semibold underline transition-all hover:text-malachite-700 ',
        className || ''
      )}
    >
      {children}
    </LinkRouter>
  )
}
