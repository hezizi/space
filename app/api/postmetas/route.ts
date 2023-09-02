import { NextResponse } from 'next/server'
import { getPostList } from 'lib/post'

export async function GET() {
  const res = getPostList()
  return NextResponse.json(res)
}
