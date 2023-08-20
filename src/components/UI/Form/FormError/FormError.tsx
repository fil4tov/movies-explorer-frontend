import { cn } from 'utils/helpers'
import { useFormControlContext } from '../FormControl/FormControl'
import './FormError.scss'

interface FormErrorProps {
  className?: string
}

export const FormError = ({ className }: FormErrorProps) => {
  const { error } = useFormControlContext()
  return (
    <span className={cn(['form-error', className])}>
      {error}
    </span>
  )
}
