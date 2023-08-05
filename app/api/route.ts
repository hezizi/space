import path from 'node:path'
import fs from 'node:fs'
import { NextResponse } from 'next/server'
import matter from 'gray-matter'

export function GET() {
  const POST_PATH = path.join(process.cwd(), 'mdxs/posts')
  const posts = fs
    .readdirSync(POST_PATH)
    .map((post) => post.replace('.mdx', ''))

  console.log('POST_PATH', POST_PATH)

  const postmetas = posts.map((post) => {
    const {
      data: { title, description, date }
    } = matter.read(path.join(POST_PATH, `${post}.mdx`))

    return {
      id: post,
      title,
      description,
      date
    }
  })

  return NextResponse.json(postmetas)
}
