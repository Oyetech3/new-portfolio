'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'

interface subscribersProp {
  email: string,
  subscribedAt: string
}

export default function SendNewsletter() {
  const [subject, setSubject] = useState('')
  const [blogSlug, setBlogSlug] = useState('')
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState('')

  const [subscribers, setSubscribers ] = useState<subscribersProp[]>([])

  const handleSend = async () => {
    setSending(true)
    setResult('')

    const res = await fetch('/api/send-newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ subject, blogSlug }),
    })

    const data = await res.json()
    setResult(data.message)
    setSending(false)
  }

  useEffect(() => {
    const fetchSubscribers = async () => {
      const res = await axios.get('/api/subscribers')
      setSubscribers(res.data)
    }
    fetchSubscribers()
  }, [])


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-2xl mx-auto bg-slate-800/50 border border-slate-700 rounded-xl p-8">
        <h1 className="text-3xl font-bold text-white mb-6">Send Newsletter</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block text-slate-300 mb-2">Email Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="New Post: Full-Stack Development Roadmap"
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
            />
          </div>

          <div>
            <label className="block text-slate-300 mb-2">Blog Slug</label>
            <input
              type="text"
              value={blogSlug}
              onChange={(e) => setBlogSlug(e.target.value)}
              placeholder="fullstack-development-roadmap"
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white"
            />
          </div>

          <button
            onClick={handleSend}
            disabled={sending}
            className="w-full py-3 bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white font-bold rounded-lg"
          >
            {sending ? 'Sending...' : 'Send to All Subscribers'}
          </button>

          {result && (
            <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
              {result}
            </div>
          )}
        </div>
      </div>

      <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 mt-12">
        <h2 className="text-xl font-bold text-white mb-6">Subscribers</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="md:px-6 px-3 py-3 text-left text-sm font-semibold text-slate-300">Email</th>
                <th className="md:px-6 px-3 py-3 text-left text-sm font-semibold text-slate-300">Date Subscribed</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((sub) => {
              return (
                <tr key={sub.email} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                  <td className="md:px-6 px-3 py-4 text-sm text-slate-200">{sub.email}</td>
                  <td className="md:px-6 px-3 py-4 text-sm font-semibold text-red-400">
                  {new Date(sub.subscribedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  </td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}