import { db } from '@/lib/db' 
import { startOfDay, subDays, format } from 'date-fns'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const days = parseInt(searchParams.get('days') || '7')

    const startDate = startOfDay(subDays(new Date(), days))

    const views = await db.postView.groupBy({
      by: ['viewed_at'],
      where: {
        viewed_at: {
          gte: startDate,
        },
      },
      _count: {
        id: true,
      },
      orderBy: {
        viewed_at: 'asc',
      },
    })

    const uniqueVisitors = await db.postView.groupBy({
      by: ['viewed_at', 'ip_address'],
      where: {
        viewed_at: {
          gte: startDate,
        },
      },
      _count: {
        ip_address: true,
      },
    })

    // Group by date
    const dailyData = new Map<string, { views: number; uniqueVisitors: number }>()

    views.forEach((view) => {
      const date = format(new Date(view.viewed_at!), 'MMM dd')
      const current = dailyData.get(date) || { views: 0, uniqueVisitors: 0 }
      dailyData.set(date, { ...current, views: current.views + view._count.id })
    })

    uniqueVisitors.forEach((visitor) => {
      const date = format(new Date(visitor.viewed_at!), 'MMM dd')
      const current = dailyData.get(date) || { views: 0, uniqueVisitors: 0 }
      if (!current.uniqueVisitors) {
        dailyData.set(date, { ...current, uniqueVisitors: 1 })
      }
    })

    const result = Array.from(dailyData.entries()).map(([date, data]) => ({
      date,
      ...data,
    }))

    return NextResponse.json(result)
  } catch (error) {
    console.error('Analytics error:', error)
    return NextResponse.json({ error: 'Failed to fetch daily analytics' }, { status: 500 })
  }
}