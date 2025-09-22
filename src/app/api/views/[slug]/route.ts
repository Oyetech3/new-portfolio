import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest, { params }: { params: { slug: string } }) {
  const slug = params.slug
  const ip =
    req.headers.get('x-forwarded-for') ||
    req.headers.get('x-real-ip') ||
    'unknown'

  const ua = req.headers.get('user-agent') || 'unknown'

  try {
    await db.postView.create({
      data: {
        post_slug: slug,
        ip_address: ip,
        user_agent: ua,
      },
    })
    
    const total = await db.postView.count({
      where: { post_slug: slug },
    })

    return NextResponse.json({ views: total })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Failed to record view' }, { status: 500 })
  }
}

export async function GET(_: NextRequest, { params }: { params: { slug: string } }) {
  const slug = params.slug
  const total = await db.postView.count({
    where: { post_slug: slug },
  })
  return NextResponse.json({ views: total })
}
