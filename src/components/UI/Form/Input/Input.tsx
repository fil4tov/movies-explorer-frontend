import React, { type InputHTMLAttributes } from 'react'
import { cn } from 'utils/helpers'
import './Input.scss'
import { useFormControlContext } from 'components/UI/Form/FormControl/FormControl'

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
