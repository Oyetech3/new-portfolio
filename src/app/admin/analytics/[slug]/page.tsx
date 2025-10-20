'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { ChevronLeft, Globe, Smartphone, Monitor } from 'lucide-react'
import { Loader } from '@/app/components/Loader'

interface VisitorDetail {
  id: number
  ip_address: string
  country: string
  city: string
  user_agent: string
  browser: string
  device: string
  os: string
  viewed_at: string
}

export default function PageDetailsAnalytics() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const [visitors, setVisitors] = useState<VisitorDetail[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterBrowser, setFilterBrowser] = useState('all')
  const [sortBy, setSortBy] = useState<'date' | 'country'>('date')

  useEffect(() => {
    const fetchPageDetails = async () => {
      try {
        setLoading(true)
        const res = await fetch(`/api/analytics/page-details/${slug}`)
        if (!res.ok) throw new Error('Failed to fetch page details')
        const data = await res.json()
        setVisitors(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPageDetails()
  }, [slug])

  const filteredVisitors = visitors
    .filter((visitor) => {
      const matchesSearch =
        visitor.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        visitor.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        visitor.ip_address.includes(searchTerm)
      const matchesBrowser = filterBrowser === 'all' || visitor.browser.toLowerCase() === filterBrowser.toLowerCase()
      return matchesSearch && matchesBrowser
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.viewed_at).getTime() - new Date(a.viewed_at).getTime()
      }
      return a.country.localeCompare(b.country)
    })

  const browsers = [...new Set(visitors.map((v) => v.browser))].filter(Boolean)
  const countries = [...new Set(visitors.map((v) => v.country))].filter(Boolean)
  const devices = [...new Set(visitors.map((v) => v.device))].filter(Boolean)

  const getDeviceIcon = (device: string) => {
    if (device.toLowerCase().includes('mobile')) return <Smartphone className="w-4 h-4" />
    if (device.toLowerCase().includes('tablet')) return <Smartphone className="w-4 h-4" />
    return <Monitor className="w-4 h-4" />
  }

  const getBrowserColor = (browser: string) => {
    const colors: Record<string, string> = {
      Chrome: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      Firefox: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      Safari: 'bg-gray-500/20 text-gray-300 border-gray-500/30',
      Edge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      'Samsung Internet': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    }
    return colors[browser] || 'bg-slate-500/20 text-slate-300 border-slate-500/30'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
        <Loader />
        <div className="text-white text-center pt-2">Loading page details...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
        <div className="text-red-500 text-center">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-2.5 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-slate-300 hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Page Analytics</h1>
            <p className="text-slate-300 text-lg">{decodeURIComponent(slug)}</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total Views" value={visitors.length} icon="👁️" />
          <StatCard label="Unique Countries" value={countries.length} icon="🌍" />
          <StatCard label="Browsers" value={browsers.length} icon="🌐" />
          <StatCard label="Device Types" value={devices.length} icon="📱" />
        </div>

        {/* Filters */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Search</label>
              <input
                type="text"
                placeholder="Search by country, city, or IP..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Filter by Browser</label>
              <select 
              title='browser'
                value={filterBrowser}
                onChange={(e) => setFilterBrowser(e.target.value)}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
              >
                <option value="all">All Browsers</option>
                {browsers.map((browser) => (
                  <option key={browser} value={browser}>
                    {browser}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-2">Sort By</label>
              <select
                title='sort'
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'date' | 'country')}
                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-red-500 transition-colors"
              >
                <option value="date">Latest First</option>
                <option value="country">Country (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Visitors Table */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700 bg-slate-900/50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Location</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">IP Address</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Browser</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Device</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">OS</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-300">Viewed At</th>
                </tr>
              </thead>
              <tbody>
                {filteredVisitors.length > 0 ? (
                  filteredVisitors.map((visitor, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-slate-400" />
                          <div>
                            <div className="text-sm font-semibold text-white">{visitor.country}</div>
                            <div className="text-xs text-slate-400">{visitor.city}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <code className="text-xs bg-slate-900 px-2 py-1 rounded text-slate-300 font-mono">
                          {visitor.ip_address}
                        </code>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-semibold border ${getBrowserColor(
                            visitor.browser
                          )}`}
                        >
                          {visitor.browser}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-slate-300">
                          {getDeviceIcon(visitor.device)}
                          <span className="text-sm">{visitor.device}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">{visitor.os}</td>
                      <td className="px-6 py-4 text-sm text-slate-400">
                        {format(new Date(visitor.viewed_at), 'MMM dd, yyyy HH:mm')}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-slate-400">
                      No visitors found matching your filters
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="bg-slate-900/50 px-6 py-3 text-sm text-slate-400 border-t border-slate-700">
            Showing {filteredVisitors.length} of {visitors.length} visitors
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ label, value, icon }: { label: string; value: number; icon: string }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-300 text-sm font-semibold">{label}</span>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="text-3xl font-bold text-white">{value}</div>
    </div>
  )
}