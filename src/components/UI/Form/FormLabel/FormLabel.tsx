import { cn } from 'utils/helpers'
import './FormLabel.scss'

interface FormLabelProps {
  label: string
  className?: string
}

export const FormLabel = ({ className, label }: FormLabelProps) => {
  return (
    <label className={cn(['form-label', className])}>
      {label}
    </label>
  )
}
