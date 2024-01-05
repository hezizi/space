import LoadMDX, { type LoadMDXPropsType } from '@/components/LoadMDX'
import { fetchPostList } from 'lib/fetch'
import { getMetaBySlug } from 'lib/post'

export function generateMetadata({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const { title } = getMetaBySlug(slug)!
  return {
    title
  }
}

export async function generateStaticParams() {
  const posts = await fetchPostList(false)
  return posts.map((post) => ({
    slug: post
  }))
}

export default function PostDetail({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const { title, description, date } = getMetaBySlug(slug)!
  const props: LoadMDXPropsType = {
    slug,
    title,
    description,
    date
  }

  return (
    <article className="prose prose-a:text-sky-500 dark:prose-invert max-w-none pb-16">
      <LoadMDX {...props} />
    </article>
  )
}
