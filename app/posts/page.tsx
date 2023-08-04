'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { type ContextProps, PostContext } from '@/components/PostProvider'

export default function Posts() {
  // const posts = useContext(PostContext)

  const posts = [
    {
      id: 'http',
      title: '哈哈哈',
      date: '2022-10-01'
    },
    {
      id: 'http2',
      title: '哈哈哈2',
      date: '2022-10-01'
    },
    {
      id: 'http3',
      title: '哈哈哈3',
      date: '2022-10-01'
    }
  ]

  const dateList = ['2023', '2022', '2018']

  // const dateList = [
  //   ...new Set(posts.map((post) => post.date.split('-').shift() as string))
  // ].sort((a, b) => Number(b) - Number(a))

  // const postMap: Record<string, ContextProps[]> = {}
  // for (const date of dateList) {
  //   postMap[date] = posts.filter((post) => post.date.includes(date))
  // }

  return (
    <>
      {dateList.map((date) => (
        <div key={date} className="mb-16">
          <h1 className="text-3xl mb-8">{date}</h1>
          <ul>
            {posts.map(({ id, title, date: postDate }) => {
              if (postDate.includes(date)) {
                return (
                  <li
                    key={id}
                    className="prose prose-custom dark:prose-invert max-w-none mb-5"
                  >
                    <Link
                      href={`/posts/${id}`}
                      className="text-lg hover:text-sky-500 hover:underline dark:text-slate-300 dark:hover:text-sky-500"
                    >
                      {title}
                    </Link>
                    {/* <blockquote className="mt-2 text-neutral-500 dark:text-neutral-400">
                      {description}
                    </blockquote> */}
                  </li>
                )
              }
            })}
          </ul>
        </div>
      ))}
    </>
  )
}
