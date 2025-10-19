import { db } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import { parseUserAgent } from '@/lib/userAgentParser'
import { getLocationFromIP } from '@/lib/geoIP'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params
    const decodedSlug = decodeURIComponent(slug)

    const views = await db.postView.findMany({
      where: { post_slug: decodedSlug },
      orderBy: { viewed_at: 'desc' },
    })

    const visitorsWithDetails = await Promise.all(
      views.map(async (view) => {
        const ua = parseUserAgent(view.user_agent || '')
        const location = await getLocationFromIP(view.ip_address || '')

        return {
          id: String(view.id),
          ip_address: view.ip_address || 'N/A',
          country: location.country || 'Unknown',
          city: location.city || 'Unknown',
          user_agent: view.user_agent || 'N/A',
          browser: ua.browser || 'Unknown',
          device: ua.device || 'Desktop',
          os: ua.os || 'Unknown',
          viewed_at: view.viewed_at?.toISOString() || new Date().toISOString(),
        }
      })
    )

    return NextResponse.json(visitorsWithDetails)
  } catch (error) {
    console.error('Page details error:', error)
    return NextResponse.json({ error: 'Failed to fetch page details' }, { status: 500 })
  }
}