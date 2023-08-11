import { cn } from 'utils/helpers'
import './Container.scss'
import { type ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn(['container', className])}>
      {children}
    </div>
  )
}
