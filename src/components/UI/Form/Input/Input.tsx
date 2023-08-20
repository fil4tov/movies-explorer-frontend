import React, { type InputHTMLAttributes } from 'react'
import { cn } from 'utils/helpers'
import { useFormControlContext } from '../FormControl/FormControl'
import './Input.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  noBorder?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, noBorder, required, ...rest } = props
  const { isRequired, error } = useFormControlContext()

  return (
    <input
      ref={ref}
      required={required ?? isRequired}
      className={cn(['input', className], {
        'input_type_no-border': Boolean(noBorder),
        input_type_error: Boolean(error)
      })}
      {...rest}
    />
  )
})
