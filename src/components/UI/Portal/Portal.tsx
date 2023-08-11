import { createPortal } from 'react-dom'
import { type ReactNode } from 'react'

interface PortalProps {
  children: ReactNode
  container?: Element | DocumentFragment
}

const DEFAULT_PORTAL_CONTAINER = document.body

export const Portal = (props: PortalProps) => {
  const {
    children,
    container = DEFAULT_PORTAL_CONTAINER
  } = props
  return createPortal(children, container)
}
