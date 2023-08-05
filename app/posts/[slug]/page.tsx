import LoadMDX from '@/components/LoadMDX'

export async function generateMetadata({
  params: { slug }
}: {
  params: { slug: string }
}) {
  return {
    title: slug
  }
}

export default function Posts({
  params: { slug }
}: {
  params: { slug: string }
}) {
  return (
    <article className="prose dark:prose-invert max-w-none pb-20">
      <LoadMDX slug={slug} />
    </article>
  )
}
