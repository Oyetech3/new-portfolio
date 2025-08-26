"use client";

import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import CTASection from "./BlogCTA";
import BlogPost from "./BlogPosts";
import Sidebar from "./BlogSide";
import { BlogPostData, getAllPostsAction } from "@/lib/mdx";

const fallbackPosts: BlogPostData[] = [
  {
    slug: 'building-react-components',
    frontmatter: {
      title: 'Building Reusable React Components: A Complete Guide',
      date: '2024-03-15',
      tag: 'React',
      image: '',
      readTime: '8 min read',
      excerpt: 'Learn how to create flexible, reusable React components that scale with your application and improve code maintainability.',
    }
  },
  {
    slug: 'career-development',
    frontmatter: {
      title: 'My Journey from Junior to Senior Developer',
      date: '2024-03-05',
      tag: 'Career',
      image: '',
      readTime: '6 min read',
      excerpt: 'Reflections on my growth as a developer, lessons learned, and advice for aspiring developers.',
    }
  },
  {
    slug: 'nodejs-best-practices',
    frontmatter: {
      title: 'Node.js Best Practices for 2024',
      date: '2024-02-20',
      tag: 'Node.js',
      image: '',
      readTime: '10 min read',
      excerpt: 'Essential Node.js patterns and practices every backend developer should know.',
    }
  },
  {
    slug: 'post-one',
    frontmatter: {
      title: 'How I Built My Developer Portfolio with Next.js, Tailwind, and Vercel',
      date: '2025-08-17',
      tag: 'Tutorial',
      image: '',
      readTime: '4 min read',
      excerpt: 'Welcome to my first blog post written in MDX with Next.js.',
    }
  }
]

export default function BlogsPage() {
  const [filter, setFilter] = useState<string>("All")
  const [posts, setPosts] = useState<BlogPostData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPosts() {
      try {
        const mdxPosts = await getAllPostsAction()
        setPosts(mdxPosts.length > 0 ? mdxPosts : fallbackPosts)
      } catch (error) {
        console.error('Error loading posts:', error)
        setPosts(fallbackPosts)
      } finally {
        setLoading(false)
      }
    }
    
    loadPosts()
  }, [])

  // Get unique tags from posts
  const availableTags = useMemo(() => {
    const tags = posts.map(post => post.frontmatter.tag).filter(Boolean)
    return ['All', ...Array.from(new Set(tags))]
  }, [posts])

  const filteredPosts = useMemo(() => {
    return filter === "All" ? posts : posts.filter((post) => post.frontmatter.tag === filter)
  }, [filter, posts])

  if (loading) {
    return (
      <div className="py-10 md:py-20 flex justify-center">
        <div className="text-gray-300">Loading posts...</div>
      </div>
    )
  }

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-10 md:py-20 space-y-6"
      >
        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <h1 className="text-[#f04770] text-4xl font-bold">Developer Blog</h1>
          <p className="text-gray-300 text-xl">
            Sharing insights, tutorials, and lessons from my full-stack journey
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-2 mt-6">
          {availableTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                filter === tag ? 'bg-[#f04770] text-white' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="pt-6"
        >
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-8">
                {filteredPosts.map((post) => (
                  <BlogPost
                    key={post.slug}
                    image={post.frontmatter.image} 
                    date={new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                    readTime={post.frontmatter.readTime}
                    tag={post.frontmatter.tag}
                    title={post.frontmatter.title}
                    excerpt={post.frontmatter.excerpt || 'No excerpt available'}
                    href={`${post.slug}`}
                  />
                ))}
              </div>
            </div>

            <aside className="lg:col-span-1">
              <Sidebar />
            </aside>
          </div>
          <CTASection />
        </motion.div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No posts found for the selected category.</p>
          </div>
        )}
      </motion.section>
    </div>
  );
}
