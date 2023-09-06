import { type ButtonHTMLAttributes } from 'react'
import { cn } from 'utils/helpers'
import './Button.scss'
import { Loader } from 'components/UI/Loader/Loader'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'green' | 'blue' | 'red' | 'grey'
  borderRadius?: 's' | 'l' | 'xl'
  fullWidth?: boolean
  isLoading?: boolean
}

export const Button = ({
  children,
  className,
  color,
  borderRadius,
  fullWidth,
  isLoading = false,
  ...rest
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={cn(['button', className], {
        [`button_color_${color}`]: Boolean(color),
        [`button_radius_${borderRadius}`]: Boolean(borderRadius),
        button_size_full: Boolean(fullWidth)
      })}
      {...rest}
    >
      {isLoading && (
        <Loader
          isLoading={isLoading}
          className="button__loader"
        />
      )}
     {children}
    </button>
  )
}
