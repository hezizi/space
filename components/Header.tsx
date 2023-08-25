import Link from 'next/link'
import ThemeMode from '@/components/ThemeMode'
import { LINKS, SPACE_NAME } from '@/constants'

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-20">
      <Link className="text-xl" href="/">
        {SPACE_NAME}
      </Link>
      <nav className="flex justify-around rounded-full shadow-2xl shadow-gray-400 px-3">
        {Object.entries(LINKS).map((item) => (
          <Link
            key={item[0]}
            href={item[1]}
            className="py-3 px-5 transition-transform duration-200 hover:scale-125"
          >
            {item[0]}
          </Link>
        ))}
      </nav>
      <ThemeMode />
    </header>
  )
}
