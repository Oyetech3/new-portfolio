'use client'

import { useEffect, useState } from 'react'

export default function ViewCounter({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null)

  useEffect(() => {
    fetch(`/api/views/${slug}`, { method: 'POST' })

    const loadViews = async () => {
      const res = await fetch(`/api/views/${slug}`)
      const data = await res.json()
      setViews(data.views)
    }
    loadViews()
  }, [slug])

//   if (views === null) return <span>Loading…</span>
  return null
}
