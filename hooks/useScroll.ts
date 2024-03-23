import { useEffect, useState } from 'react'
import { debounce } from '@yuci/utils'

export default function useScroll() {
  const [scrollTop, setScrollTop] = useState(0)

  const scroll = () => {
    const { scrollTop } = document.documentElement
    setScrollTop(scrollTop)
  }

  useEffect(() => {
    window.addEventListener('scroll', debounce(scroll, 50))
    return () => {
      window.removeEventListener('scroll', debounce(scroll, 50))
    }
  }, [])

  return {
    scrollTop
  }
}
