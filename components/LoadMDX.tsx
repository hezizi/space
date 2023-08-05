'use client'

import { useContext, useEffect, useState } from 'react'
import { type ContextProps, PostContext } from './PostProvider'

export default function LoadMDX({ slug }: { slug: string }) {
  const posts = useContext(PostContext)
  const [dynamicMDX, setDynamicMDX] = useState(<p>loading...</p>)

  const { title, date } = posts.find((post) => post.id === slug) as ContextProps

  const loadDynamicMDX = async () => {
    try {
      const mdx = await import(`@/mdxs/posts/${slug}.mdx`)
      setDynamicMDX(mdx.default)
    } catch (error) {
      setDynamicMDX(<p>something went wrong</p>)
    }
  }

  useEffect(() => {
    loadDynamicMDX()
  }, [])

  return (
    <>
      {slug}
      <div className="mb-12">
        <h1 className="mb-5 font-[600]">{title}</h1>
        <time className="my-0">{date}</time>
      </div>
      {dynamicMDX}
    </>
  )
}
