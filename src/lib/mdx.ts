import { fullStactRoadmap } from '@/content/posts/fullstack-development-roadmap'
import { postOne } from '@/content/posts/how-i-built-my-portfolio'
import { howAuthenticate } from '@/content/posts/how-to-set-up-authentication-in-nextjs'
import { nextjs16 } from '@/content/posts/nextjs-16-whats-new'

export interface PostFrontmatter {
  title: string,
  image: string,
  date: string
  excerpt: string
  tag: string
  readTime: string,
  related: string
}

export interface BlogPostData {
  slug: string
  frontmatter: PostFrontmatter
  content?: string
}

export interface Post extends BlogPostData {
  content: string 
}

const allPosts: Post[] = [
  postOne,
  howAuthenticate,
  fullStactRoadmap,
  nextjs16
]

export async function getPostSlugsAction(): Promise<string[]> {
  return allPosts.map(post => post.slug)
}

export async function getPostBySlugAction(slug: string): Promise<Post | null> {
  const post = allPosts.find(p => p.slug === slug)
  return post || null
}

export async function getAllPostsAction(): Promise<BlogPostData[]> {
  
  return allPosts
    .map(post => ({
      slug: post.slug,
      frontmatter: post.frontmatter
    }))
    .sort((a, b) => 
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    )
}