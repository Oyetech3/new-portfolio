// app/admin/dashboard/page.tsx
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { format, subDays, startOfDay } from 'date-fns'
import AdminLogoutButton from '@/app/components/AdminLogoutButton'
import { Loader } from '@/app/components/Loader'

interface DailyViewsData {
  date: string
  views: number
  uniqueVisitors: number
}

export interface PageViewsData {
  slug: string
  views: number
  lastViewed: string
}

interface VisitorInfo {
  date: string
  pages: number
  devices: Record<string, number>
}

export default function AdminDashboard() {
  const [dailyViews, setDailyViews] = useState<DailyViewsData[]>([])
  const [pageViews, setPageViews] = useState<PageViewsData[]>([])
  const [totalViews, setTotalViews] = useState(0)
  const [uniqueVisitors, setUniqueVisitors] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [dateRange, setDateRange] = useState(7)

  const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F']

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true)
        const [dailyRes, pagesRes, totalRes, uniqueRes] = await Promise.all([
          fetch(`/api/analytics/daily?days=${dateRange}`),
          fetch('/api/analytics/pages'),
          fetch('/api/analytics/total'),
          fetch('/api/analytics/unique-visitors'),
        ])

        if (!dailyRes.ok || !pagesRes.ok) throw new Error('Failed to fetch analytics')

        const daily = await dailyRes.json()
        const pages = await pagesRes.json()
        const total = await totalRes.json()
        const unique = await uniqueRes.json()

        setDailyViews(daily)
        setPageViews(pages)
        setTotalViews(total.total)
        setUniqueVisitors(unique.unique)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchAnalytics()
    const interval = setInterval(fetchAnalytics, 60000) // Refresh every minute
    return () => clearInterval(interval)
  }, [dateRange])

  if (loading) {
    return (
      <div className="flex flex-col gap-2 items-center justify-center h-[70vh] md:h-screen bg-slate-900">
        <Loader />
        <div className="text-white text-xl">Loading analytics...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-slate-900">
        <div className="text-red-500 text-xl">Error: {error}</div>
      </div>
    )
  }

  const topPages = pageViews.slice(0, 5)
  console.log(topPages)
  console.log(pageViews)
  pageViews.forEach((value: PageViewsData, index: number) => {
    if(value.slug.length > 8) {
      console.log(value.slug)
    }
  })
  const deviceBreakdown = pageViews.reduce(
    (acc, page) => {
      acc.total += page.views
      return acc
    },
    { total: 0 }
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-2.5 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className='flex justify-between'>

          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Analytics Dashboard</h1>
            <p className="text-slate-300">Track your portfolio website traffic and engagement</p>
          </div>

          <div className="">
            <AdminLogoutButton />
          </div>

        </div>
        

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <KPICard
            title="Total Views"
            value={totalViews}
            change={12}
            icon="📊"
          />
          <KPICard
            title="Unique Visitors"
            value={uniqueVisitors}
            change={8}
            icon="👥"
          />
          <KPICard
            title="Total Pages"
            value={pageViews.length}
            change={0}
            icon="📄"
          />
          <KPICard
            title="Avg. Views/Page"
            value={Math.round(totalViews / (pageViews.length || 1))}
            change={5}
            icon="📈"
          />
        </div>

        {/* Date Range Selector */}
        <div className='flex justify-between'>
          <div className="mb-8 flex gap-4">
            {[7, 14, 30].map((days) => (
              <button
                key={days}
                onClick={() => setDateRange(days)}
                className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                  dateRange === days
                    ? 'bg-red-500 text-white'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                Last {days} days
              </button>
            ))}
          </div>
          <div>
            <Link
              href={'/admin/send-newsletter'}
              className="flex items-center gap-2 px-4 py-2 text-slate-700 bg-slate-300 rounded-lg  transition-colors font-semibold disabled:opacity-50"
            >
              Newsletter
            </Link>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Daily Views Chart */}
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Daily Views Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dailyViews}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="date" stroke="#94a3b8" style={{ fontSize: '12px' }} />
                <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid #475569',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="#FF6B6B"
                  strokeWidth={2}
                  dot={{ fill: '#FF6B6B' }}
                />
                <Line
                  type="monotone"
                  dataKey="uniqueVisitors"
                  stroke="#4ECDC4"
                  strokeWidth={2}
                  dot={{ fill: '#4ECDC4' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Top Pages Overview */}
          <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-6">Top Pages</h2>
            <div className="space-y-4">
              {topPages.map((page, idx) => (
                <div key={page.slug} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-slate-200 ">
                      {page.slug || 'home'}
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                      <div
                        className="bg-gradient-to-r from-red-500 to-pink-500 h-2 rounded-full transition-all"
                        style={{
                          width: `${(page.views / Math.max(...pageViews.map(p => p.views), 1)) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="ml-4 text-right">
                    <div className="font-bold text-white">{page.views}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* All Pages Table */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-6">All Pages</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="md:px-6 px-3 py-3 text-left text-sm font-semibold text-slate-300">Page Slug</th>
                  <th className="md:px-6 px-3 py-3 text-left text-sm font-semibold text-slate-300">Views</th>
                  <th className="md:px-6 px-3 py-3 text-left text-sm font-semibold text-slate-300">Last Viewed</th>
                  <th className="md:px-6 px-3 py-3 text-left text-sm font-semibold text-slate-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {pageViews.map((page) => (
                  <tr key={page.slug} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="md:px-6 px-3 py-4 text-sm text-slate-200">{page.slug || 'home'}</td>
                    <td className="md:px-6 px-3 py-4 text-sm font-semibold text-red-400">{page.views}</td>
                    <td className="md:px-6 px-3 py-4 text-sm text-slate-400">{page.lastViewed}</td>
                    <td className="md:px-6 px-3 py-4 text-sm">
                      <Link
                        href={`/admin/analytics/${encodeURIComponent(page.slug || 'home')}`}
                        className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/20 text-red-300 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-colors font-semibold text-xs"
                      >
                        View Details
                        <span>→</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

function KPICard({
  title,
  value,
  change,
  icon,
}: {
  title: string
  value: number
  change: number
  icon: string
}) {
  return (
    <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-slate-300 text-sm font-semibold">{title}</h3>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="text-3xl font-bold text-white mb-2">{value.toLocaleString()}</div>
      <div className="text-xs text-green-400">↑ {change}% from last period</div>
    </div>
  )
}