import Link from 'next/link'
import Icon from './Icon'

export default function Notice() {
  return (
    <div className="mb-5 p-3 bg-yellow-100 rounded-lg flex items-center">
      <p className="text-gray-600 flex items-center mr-3">
        <Icon name="notice" width={24} height={24} />
        <span className="ml-2">周刊调整 新地址 👉</span>
      </p>
      <Link
        href="https://github.com/hezizi/front-end-weekly"
        target="_blank"
        className="text-sky-500 hover:underline"
      >
        <span className="font-bold">Front-End Weekly</span>
      </Link>
    </div>
  )
}
