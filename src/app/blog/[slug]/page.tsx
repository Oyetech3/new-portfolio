import { getPostBySlugAction, getPostSlugsAction } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import BlogContentRenderer from '@/app/components/BlogContentRenderer'
import ViewCounter from './ViewCounter'
import SubscribeInformation from '@/app/components/SubscribeInformation'
import { Metadata } from 'next'


export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = await getPostSlugsAction()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlugAction(slug)

  if (!post) {
    return {
      title: 'Post Not Found | OyeTech',
    }
  }

  return {
    title: `${post.frontmatter.title} | OyeTech Blog`,
    description: post.frontmatter.excerpt,
    keywords: [post.frontmatter.tag, 'web development', 'programming', 'tutorial'],
    
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      url: `https://oyetech.vercel.app/blog/${slug}`,
      siteName: 'OyeTech',
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: ['Oyekola Abdulqobid'],
      images: [
        {
          url: post.frontmatter.image,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
    

    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      creator: '@OyekolaAbdulqo1', 
      images: [post.frontmatter.image ],
    },
    
    alternates: {
      canonical: `https://oyetech.vercel.app/blog/${slug}`,
    },
  }
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    image: post.frontmatter.image,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date, 
    author: {
      '@type': 'Person',
      name: 'Oyekola Abdulqobid',
      url: 'https://oyetech.vercel.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'OyeTech',
      logo: {
        '@type': 'ImageObject',
        url: 'https://oyetech.vercel.app/assets/faviconn.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://oyetech.vercel.app/blog/${slug}`,
    },
  }

  return (
    <div className="min-h-screen py-10 md:py-20">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <ViewCounter slug={slug} />

      <div className="max-w-4xl mx-auto px-4">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-[#f04770] hover:text-[#f04770]/80 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>

      

        
        <header className="mb-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 text-sm text-gray-400">
            <span>{new Date(post.frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
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
        
        <SubscribeInformation />

        <div className='mt-4'>
          <p className=''>Related article 👇</p>
          <a className='text-gray-400 underline' href={`/blog/${post.frontmatter.related}`}>{post.frontmatter.related}</a>
        </div>
        
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