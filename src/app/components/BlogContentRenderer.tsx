'use client'

import { useEffect, useRef } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-css'


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

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div 
      ref={contentRef}
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: content }}
      suppressHydrationWarning
    />
  )
}