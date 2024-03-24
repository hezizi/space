'use client'

import { useEffect, useState } from 'react'
import Icon from '@/components/Icon'
import { useScroll } from 'hooks'

export default function BackTop() {
  const onClick = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const { scrollTop } = useScroll()
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(scrollTop > 600)
  }, [scrollTop])

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
