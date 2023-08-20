import { createContext, type ReactNode, useContext, useMemo } from 'react'
import { cn } from 'utils/helpers'
import './FormControl.scss'

interface FormControlState {
  isRequired?: boolean
  error?: string | boolean
}

interface FormControlProps extends FormControlState {
  children: ReactNode
  className?: string
}

const FormControlContext = createContext<FormControlState>({})

export const FormControl = ({ className, children, isRequired, error }: FormControlProps) => {
  const store: FormControlState = useMemo(() => {
    return { isRequired, error }
  }, [error, isRequired])

  return (
    <FormControlContext.Provider value={store}>
      <div className={cn(['form-control', className])}>
        {children}
      </div>
    </FormControlContext.Provider>
  )
}

export const useFormControlContext = () => {
  return useContext(FormControlContext)
}
