import { Portal } from '../Portal/Portal'
import { cn } from 'utils/helpers'
import { type MouseEvent, type ReactNode, useEffect } from 'react'
import { useResizeObserver } from 'utils/hooks'
import './Drawer.scss'

interface DrawerProps {
  isOpen: boolean
  children: ReactNode
  onClose: () => void
  blockScrollOnOpen?: boolean
  closeOnOverlay?: boolean
  hideOnDesktop?: boolean
  className?: string
}

export const Drawer = ({
  isOpen,
  onClose,
  children,
  blockScrollOnOpen,
  closeOnOverlay,
  hideOnDesktop,
  className
}: DrawerProps) => {
  const { body } = document

  const handleCloseOnDesktop = (entry: ResizeObserverEntry) => {
    const { width } = entry.contentRect
    if (width > 768) {
      body.removeAttribute('style')
      onClose()
    }
  }

  useResizeObserver({
    target: body,
    onResize: handleCloseOnDesktop,
    unobserve: !isOpen
  })

  const handleCloseOnOverlay = () => {
    closeOnOverlay && onClose()
  }

  const onClickContent = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  useEffect(() => {
    const { body } = document
    isOpen && blockScrollOnOpen
      ? body.style.overflow = 'hidden'
      : body.removeAttribute('style')
  }, [isOpen, blockScrollOnOpen])

  return (
    <Portal>
      <div
        className={cn(['drawer', className], {
          drawer_opened: Boolean(isOpen)
        })}
        onClick={handleCloseOnOverlay}
      >
        <div
          className={cn(['drawer__menu'], {
            drawer__menu_opened: Boolean(isOpen)
          })}
          onClick={onClickContent}
        >
          {children}
        </div>
      </div>
    </Portal>
  )
}
