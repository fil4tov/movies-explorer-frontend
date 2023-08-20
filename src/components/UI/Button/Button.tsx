import { type ButtonHTMLAttributes } from 'react'
import { cn } from 'utils/helpers'
import './Button.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'green' | 'blue' | 'red' | 'grey'
  borderRadius?: 's' | 'l' | 'xl'
  fullWidth?: boolean
}

export const Button = ({
  children,
  className,
  color,
  borderRadius,
  fullWidth,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={cn(['button', className], {
        [`button_color_${color}`]: Boolean(color),
        [`button_radius_${borderRadius}`]: Boolean(borderRadius),
        button_size_full: Boolean(fullWidth)
      })}
      {...rest}
    >
      {children}
    </button>
  )
}
