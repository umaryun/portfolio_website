import { useRef, useEffect, useState } from 'react'

interface UseIntersectionObserverReturn<T extends HTMLElement> {
  ref: React.RefObject<T | null>
  isVisible: boolean
}

/**
 * Fires once when the referenced element enters the viewport,
 * then disconnects – ideal for one-shot scroll-reveal animations.
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.1,
): UseIntersectionObserverReturn<T> {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}
