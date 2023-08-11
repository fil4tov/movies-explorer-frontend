import { useEffect, useRef } from 'react'

interface UseResizeObserverProps {
  onResize: (entry: ResizeObserverEntry) => void
  target: HTMLElement
  unobserve?: boolean
}

export const useResizeObserver = ({ onResize, target, unobserve }: UseResizeObserverProps) => {
  const resizeRef = useRef<ResizeObserver | null>(null)

  useEffect(() => {
    resizeRef.current = new ResizeObserver(entries => {
      for (const entry of entries) {
        onResize(entry)
      }
    })

    if (unobserve) {
      resizeRef.current?.unobserve(target)
      return
    }

    resizeRef.current.observe(target)

    return () => {
      resizeRef.current?.disconnect()
    }
  }, [onResize, target, unobserve])

  return resizeRef
}
