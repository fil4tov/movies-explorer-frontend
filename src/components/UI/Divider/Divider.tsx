import { cn } from 'utils/helpers'
import './Divider.scss'

export const Divider = ({ className }: { className?: string }) => {
  return (
    <div className={cn(['divider', className])} />
  )
}
