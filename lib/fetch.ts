import { type ListType } from './file'

const isNodeEnv = typeof window === 'undefined'
const base = isNodeEnv
  ? process.env.FETCH_URL
  : process.env.NEXT_PUBLIC_FETCH_URL

// export function fetchPostList<T = ListType[]>(withMeta?: true): Promise<T>
// export function fetchPostList<T = string[]>(withMeta?: false): Promise<T>

type FetchPostReturnType<T> = T extends true ? ListType[] : string[]

/**
 * 请求文章(元数据)列表
 * @param withMeta default true boolean
 * @returns 文章列表 FetchPostReturnType<T>
 */
export async function fetchPostList<T extends boolean = true>(
  withMeta: T = true as T
): Promise<FetchPostReturnType<T>> {
  const res = await fetch(`${base}/${withMeta ? 'postmetas' : 'posts'}`)
  return res.json()
}

/**
 * 请求weekly周刊列表
 * @returns 周刊列表 ListType[]
 */
export async function fetchWeeklyList(): Promise<ListType[]> {
  const res = await fetch(`${base}/weekly`)
  return res.json()
}
