'use client'

import Link from 'next/link'
import ThemeMode from '@/components/ThemeMode'
import { LINKS, SPACE_NAME } from '@/constants'
import { useState } from 'react'

export default function Header() {
  const [active, setActive] = useState('Home')
  const onClick = (key: string) => {
    setActive(key)
  }
  return (
    <header className="flex justify-between items-center mb-20 -mx-28">
      <Link onClick={() => onClick('Home')} className="text-xl" href="/">
        {SPACE_NAME}
      </Link>
      <nav className="flex justify-around rounded-full shadow-2xl shadow-gray-400 px-3">
        {Object.entries(LINKS).map((item) => {
          const className = `py-3 px-5 transition-transform duration-200 hover:text-cyan-500 ${
            item[0] === active ? 'text-cyan-500' : ''
          }`
          return (
            <Link
              onClick={() => onClick(item[0])}
              key={item[0]}
              href={item[1]}
              className={className}
            >
              {item[0]}
            </Link>
          )
        })}
      </nav>
      <ThemeMode />
    </header>
  )
}
