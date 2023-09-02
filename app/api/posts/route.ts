import { NextResponse } from 'next/server'
import { getPostMdxs } from 'lib/post'

export async function GET() {
  const res = getPostMdxs()
  return NextResponse.json(res)
}
