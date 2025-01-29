import React from 'react'
import { cn } from '../../utils/cn'

export function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={cn(
        'py-2 pl-2 border border-zinc-700 focus:outline-none focus:ring-1 ring-zinc-600 rounded-md',
        className || ''
      )}
      {...props}
    />
  )
}
