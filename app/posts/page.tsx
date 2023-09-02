import Link from 'next/link'
import { fetchPostList } from 'lib/fetch'

export default async function Posts() {
  const posts = await fetchPostList().catch(() => [])

  const dateList = [
    ...new Set(posts.map((post) => post.date.split('-').shift() as string))
  ].sort((a, b) => Number(b) - Number(a))

  return (
    <>
      {dateList.map((date) => (
        <div key={date} className="mb-16">
          <h1 className="text-3xl mb-8">{date}</h1>
          <ul>
            {posts.map(({ slug, title, description, date: postDate }) => {
              if (postDate.includes(date)) {
                return (
                  <li
                    key={slug}
                    className="prose prose-custom dark:prose-invert max-w-none mb-5"
                  >
                    <Link
                      href={`/posts/${slug}`}
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
