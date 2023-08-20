import './Loader.scss'
import { cn } from 'utils/helpers'

type LoaderProps = {
  isLoading: boolean
  className?: string
}

export const Loader = ({ className, isLoading }: LoaderProps) => {
  return (
    <>
      {isLoading && (
        <span className={cn(['loader', className])} />
      )}
    </>
  )
}
