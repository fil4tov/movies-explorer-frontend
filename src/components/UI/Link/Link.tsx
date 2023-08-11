import { cn } from 'utils/helpers'
import { type AnchorHTMLAttributes } from 'react'
import './Link.scss'

export const Link = ({
  children,
  className,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a className={cn(['link', className])} {...rest}>
      {children}
    </a>
  )
}
