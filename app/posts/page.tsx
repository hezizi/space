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
        <div key={date} className="mb-12">
          <h1 className="text-3xl mb-6">{date}</h1>
          <ul>
            {posts.map(({ slug, title, date: postDate }) => {
              if (postDate.includes(date)) {
                return (
                  <li
                    key={slug}
                    className="flex items-center justify-between prose prose-custom dark:prose-invert max-w-none mb-3"
                  >
                    <Link
                      href={`/posts/${slug}`}
                      className="hover:text-sky-500 hover:underline dark:text-slate-300 dark:hover:text-sky-500"
                    >
                      {title}
                    </Link>
                    <span className="text-sm text-neutral-300">{postDate}</span>
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
