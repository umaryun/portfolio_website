import { useState } from 'react'

interface UseHoverReturn {
  isHovered: boolean
  onMouseEnter: () => void
  onMouseLeave: () => void
}

/** Tracks whether the consumer element is currently hovered. */
export function useHover(): UseHoverReturn {
  const [isHovered, setIsHovered] = useState(false)
  return {
    isHovered,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  }
}
