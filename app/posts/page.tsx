'use client'

import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { type ContextProps, PostContext } from '@/components/PostProvider'

export default function Posts() {
  const [posts, setPosts] = useState<ContextProps[]>([
    {
      id: '',
      title: '',
      description: '',
      date: ''
    }
  ])

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((res) => {
        console.log('res', res)
        setPosts(res)
      })
  }, [])

  const dateList = [
    ...new Set(posts.map((post) => post.date.split('-').shift() as string))
  ].sort((a, b) => Number(b) - Number(a))

  // const posts = useContext(PostContext)

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
            {posts.map(({ id, title, description, date: postDate }) => {
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
                    <blockquote className="mt-2 text-neutral-500 dark:text-neutral-400">
                      {description}
                    </blockquote>
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
