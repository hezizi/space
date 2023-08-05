'use client'

import React, {
  type ProviderProps,
  createContext,
  useEffect,
  useState
} from 'react'

export type ContextProps = {
  id: string
  title: string
  description: string
  date: string
}

const initContext: ContextProps[] = [
  {
    id: '',
    title: '',
    description: '',
    date: ''
  }
]

export const PostContext = createContext(initContext)

export default function PostProvider({
  children
}: ProviderProps<ContextProps[]>) {
  const [posts, setPosts] = useState<ContextProps[]>([])

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((res) => {
        console.log('res', res)
        setPosts(res)
      })
  }, [])

  return <PostContext.Provider value={posts}>{children}</PostContext.Provider>
}
