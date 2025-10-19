import { db } from '@/lib/db' 
import {  format } from 'date-fns'
import {  NextResponse } from 'next/server'

export async function GET() {
    try {
      const pages = await db.postView.groupBy({
        by: ['post_slug'],
        _count: {
          id: true,
        },
        orderBy: {
          _count: {
            id: 'desc',
          },
        },
      })
  
      const pageDetails = await Promise.all(
        pages.map(async (page) => {
          const lastView = await db.postView.findFirst({
            where: { post_slug: page.post_slug },
            orderBy: { viewed_at: 'desc' },
            select: { viewed_at: true },
          })
  
          return {
            slug: page.post_slug,
            views: page._count.id,
            lastViewed: lastView?.viewed_at
              ? format(new Date(lastView.viewed_at), 'MMM dd, yyyy HH:mm')
              : 'Never',
          }
        })
      )
  
      return NextResponse.json(pageDetails)
    } catch (error) {
      console.error('Pages analytics error:', error)
      return NextResponse.json({ error: 'Failed to fetch page analytics' }, { status: 500 })
    }
  }