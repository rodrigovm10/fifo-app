import { cn } from '../../utils/cn'

export function Button({ children, className, ...props }: React.ComponentProps<'button'>) {
  return (
    <button
      className={cn(
        'bg-malachite-500 text-malachite-950 hover:bg-malachite-600 active:bg-malachite-700 rounded-md py-2 font-semibold  transition-all',
        className || ''
      )}
      {...props}
    >
      {children}
    </button>
  )
}
