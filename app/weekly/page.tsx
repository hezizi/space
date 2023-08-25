import Link from 'next/link'
import { fetchWeeklyList } from 'lib/fetch'

export default async function Weekly() {
  const weekly = await fetchWeeklyList().catch(() => [])
  const sortedWeekly = weekly.sort(
    (a, b) => new Date(b.slug).getTime() - new Date(a.slug).getTime()
  )
  const weeklyLen = sortedWeekly.length

  return (
    <ul>
      {sortedWeekly.map(({ slug, title }, index: number) => (
        <li
          key={slug}
          className="prose prose-custom dark:prose-invert max-w-none mb-1"
        >
          <span className="mr-3 text-gray-600 dark:text-slate-400">
            #{weeklyLen - index} <time>{slug}</time>
          </span>
          <Link
            href={`/weekly/${slug}`}
            className="hover:text-sky-500 hover:underline dark:text-slate-300 dark:hover:text-sky-500"
          >
            <span className="font-bold">{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
