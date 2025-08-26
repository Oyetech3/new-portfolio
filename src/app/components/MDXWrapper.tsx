'use client'

import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import { ReactNode } from 'react'

const components = {
  img: (props: any) => (
    <Image
      {...props}
      width={800}
      height={400}
      className={`rounded-xl border border-gray-700 shadow-lg w-full ${props.className || ''}`}
    />
  ),
  
  h1: (props: any) => <h1 className="text-4xl font-bold text-[#f04770] mb-8" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold text-white mt-10 mb-4" {...props} />,
  p: (props: any) => <p className="text-gray-300 mb-4" {...props} />,
  strong: (props: any) => <strong className="text-white font-semibold" {...props} />,
  code: (props: any) => <code className="bg-gray-800 px-2 py-1 rounded text-sm text-gray-300" {...props} />,
}

interface MDXWrapperProps {
  children: ReactNode
}

export default function MDXWrapper({ children }: MDXWrapperProps) {
  return (
    <MDXProvider components={components}>
      <div className="prose prose-invert prose-lg max-w-3xl mx-auto py-12 px-4">
        {children}
      </div>
    </MDXProvider>
  )
}