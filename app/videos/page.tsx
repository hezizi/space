import Link from 'next/link'
import { VIDEO_LIST } from '@/constants'

export default async function Videos() {
  return (
    <>
      <ul className="grid grid-cols-3">
        {VIDEO_LIST.map(({ title, iframeUrl, linkUrl }) => (
          <li key={linkUrl}>
            <iframe src={iframeUrl} allowFullScreen={true} />
            <Link
              href={linkUrl}
              target="_blank"
              className="text-sky-500 block mt-3"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
