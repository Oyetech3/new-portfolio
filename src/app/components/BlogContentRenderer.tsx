// src/components/BlogContentRenderer.tsx
'use client'

import { useEffect, useRef } from 'react'

interface BlogContentRendererProps {
  content: string
}

export default function BlogContentRenderer({ content }: BlogContentRendererProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = content
    }
  }, [content])

  return (
    <div 
      ref={contentRef}
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: content }}
      suppressHydrationWarning
    />
  )
}