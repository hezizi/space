'use client'

import { useEffect, useState } from 'react'
import { debounce } from '@yuci/utils'
import Icon from '@/components/Icon'

export default function BackTop() {
  const onClick = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const [show, setShow] = useState(false)
  const scroll = () => {
    const { scrollTop } = document.documentElement
    setShow(scrollTop > 600)
  }

  useEffect(() => {
    window.addEventListener('scroll', debounce(scroll, 50))
    return () => {
      window.removeEventListener('scroll', debounce(scroll, 50))
    }
  }, [])

  return (
    <>
      {show ? (
        <button
          onClick={onClick}
          className="fixed right-10 bottom-10 p-3 rounded-full transition-all hover:bg-gray-100/70 dark:hover:bg-white"
        >
          <Icon name="up-arrow" width={20} height={20} />
        </button>
      ) : (
        <></>
      )}
    </>
  )
}
