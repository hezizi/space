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
        href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU5ODA0MTI1OQ==&action=getalbum&album_id=3069439733992505346&scene=173&from_msgid=2247484154&from_itemidx=1&count=3&nolastread=1#wechat_redirect"
        target="_blank"
        className="text-sky-500 hover:underline"
      >
        <span className="font-bold">Front-End Weekly</span>
      </Link>
    </div>
  )
}
