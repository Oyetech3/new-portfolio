import { getPostBySlugAction, getPostSlugsAction } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import BlogContentRenderer from '@/app/components/BlogContentRenderer'


export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = await getPostSlugsAction()
  return slugs.map(slug => ({ slug }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params
  const post = await getPostBySlugAction(slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen py-10 md:py-20">
      <div className="max-w-4xl mx-auto px-4">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-[#f04770] hover:text-[#f04770]/80 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
        
        <header className="mb-8">
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
            <span>{new Date(post.frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</span>
            <span>•</span>
            <span>{post.frontmatter.readTime}</span>
            <span className="bg-[#f04770] text-white px-2 py-1 rounded text-xs font-medium">
              {post.frontmatter.tag}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {post.frontmatter.title}
          </h1>
          
          {/* {post.frontmatter.excerpt && (
            <p className="text-xl text-gray-300 leading-relaxed">
              {post.frontmatter.excerpt}
            </p>
          )} */}
        </header>
        
        <article className="prose prose-invert prose-lg max-w-none">
          <BlogContentRenderer content={post.content} />
        </article>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link 
            href="/blog" 
            className="text-[#f04770] hover:text-[#f04770]/80 transition-colors duration-300"
          >
            ← Read more articles
          </Link>
        </div>
      </div>
    </div>
  )
}