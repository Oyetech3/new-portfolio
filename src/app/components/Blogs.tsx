"use client"

import { motion } from "framer-motion"
import BlogPost from "./BlogPosts";
import Sidebar from "./BlogSide";
import CTASection from "./BlogCTA";

interface BlogPostData {
    id: string
    image: string
    date: string
    readTime: string
    tag: string
    title: string
    excerpt: string
    href: string
  }
  
  const blogPosts: BlogPostData[] = [
    {
      id: '1',
      image: 'Building React Components',
      date: 'March 15, 2024',
      readTime: '8 min read',
      tag: 'React',
      title: 'Building Reusable React Components: A Complete Guide',
      excerpt: 'Learn how to create flexible, reusable React components that scale with your application. This guide covers component composition, prop patterns, and best practices I\'ve learned while building production apps.',
      href: '#'
    },
    {
      id: '2',
      image: 'Node.js API Development',
      date: 'March 10, 2024',
      readTime: '12 min read',
      tag: 'Node.js',
      title: 'REST API Security: Essential Practices for Node.js',
      excerpt: 'A comprehensive guide to securing your Node.js APIs. From authentication strategies to input validation, learn how to protect your applications from common vulnerabilities.',
      href: '#'
    },
    {
      id: '3',
      image: 'Career Development',
      date: 'March 5, 2024',
      readTime: '6 min read',
      tag: 'Career',
      title: 'My Journey from Junior to Senior Developer',
      excerpt: 'Reflections on my growth as a developer, the challenges I faced, and the key lessons that helped me advance in my career. Plus actionable tips for other developers on the same path.',
      href: '#'
    }
  ]

const BlogsPage = () => {
    return ( 
        <div>
            <motion.section
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="py-10 md:py-20 space-y-6"
            >
                <div className="flex flex-col gap-4 text-center items-center justify-center">
                    <h1 className='text-[#f04770] text-4xl font-bold'>Developer Blog</h1>
                    <p className="text-gray-300 text-xl">Sharing insights, tutorials, and lessons learned from my journey as a full-stack developer</p>
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
                            {blogPosts.map((post) => (
                            <BlogPost key={post.id} {...post} />
                            ))}
                        </div>
                        </div>
                        
                        <aside className="lg:col-span-1">
                        <Sidebar />
                        </aside>
                    </div>
                
                    <CTASection />
                </motion.div>
                

            </motion.section> 
        </div>
     );
}
 
export default BlogsPage;