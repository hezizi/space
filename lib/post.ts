import { getDirPath, getMDXs, getListWithMeta } from './file'

const postDirPath = getDirPath('mdxs/posts')

// 文章名称列表
export function getPostMdxs() {
  return getMDXs(postDirPath)
}

// 文章元数据列表
export function getPostList() {
  const postMdxs = getPostMdxs()
  const sortedPosts = getListWithMeta(postMdxs, postDirPath).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  return sortedPosts
}

// 根据文章名称获取title， date
export function getTitleAndDateBySlug(slug: string) {
  const posts = getPostList()
  const meta = posts.find((post) => post.slug === slug)
  if (!meta) {
    return {}
  }
  const { title, date } = meta
  return { title, date }
}
