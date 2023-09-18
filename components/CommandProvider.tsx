'use client'

import React, { createContext, useState, useEffect } from 'react'
import { fetchPostList, fetchWeeklyList } from 'lib/fetch'
import { type ListType } from 'lib/file'

type ProviderValueType = {
  posts: ListType[]
  weekly: ListType[]
  [key: string]: any
}

export const CommandContext = createContext<ProviderValueType>({
  posts: [],
  weekly: []
})

export default function PostProvider({
  versions,
  children
}: {
  versions?: Record<string, string>
  children: React.ReactNode
}) {
  const [providerValue, setProviderValue] = useState<ProviderValueType>({
    posts: [],
    weekly: []
  })

  const fetch = async () => {
    const posts = await fetchPostList()
    const weekly = await fetchWeeklyList()
    setProviderValue({ posts, weekly })
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <CommandContext.Provider value={{ ...providerValue, versions }}>
      {children}
    </CommandContext.Provider>
  )
}
