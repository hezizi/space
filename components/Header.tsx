'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import ThemeMode from '@/components/ThemeMode'
import { LINKS, LinksType, SPACE_NAME } from '@/constants'

export default function Header() {
  const pathname = usePathname()
  const [active, setActive] = useState<LinksType>('Home')

  useEffect(() => {
    const keys = Object.keys(LINKS) as LinksType[]
    const pathnames = pathname.split('/')
    keys.map((key) => {
      const val = LINKS[key].substring(1, key.length + 1)
      if (pathnames.includes(val)) setActive(key)
    })
  }, [pathname])

  return (
    <header className="flex justify-between items-center mb-20 -mx-28">
      <Link className="text-xl" href="/">
        {SPACE_NAME}
      </Link>
      <nav className="flex justify-around rounded-full shadow-2xl shadow-gray-400 px-3">
        {Object.entries(LINKS).map((item) => {
          const className = `py-3 px-5 transition-transform duration-200 hover:text-cyan-500 ${
            item[0] === active ? 'text-cyan-500' : ''
          }`
          return (
            <Link key={item[0]} href={item[1]} className={className}>
              {item[0]}
            </Link>
          )
        })}
      </nav>
      <ThemeMode />
    </header>
  )
}
