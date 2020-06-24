import { useEffect, useRef } from 'react'

// https://usehooks.com/usePrevious/
export function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef()

  // Store current value in ref
  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current
}

export function useZoom(threshold, setZoom, base = 1) {
  useEffect(() => {
    const resizeHandler = () => {
      const displayRatio = window.innerHeight / window.innerWidth

      if (displayRatio < threshold) {
        setZoom((displayRatio / threshold) * base)
      } else {
        setZoom(base)
      }
    }

    resizeHandler()
    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
