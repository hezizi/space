import { useEffect, useState } from 'react'
import { throttle } from '@yuci/utils'

export default function useScroll() {
  const [scrollTop, setScrollTop] = useState(0)

  const scroll = () => {
    const { scrollTop } = document.documentElement
    setScrollTop(scrollTop)
  }

  useEffect(() => {
    window.addEventListener('scroll', throttle(scroll, 50))
    return () => {
      window.removeEventListener('scroll', throttle(scroll, 50))
    }
  }, [])

  return {
    scrollTop
  }
}
