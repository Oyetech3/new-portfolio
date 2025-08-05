// src/lib/mdx.ts
import { postOne } from '@/content/posts/post-one'

export interface PostFrontmatter {
  title: string
  date: string
  excerpt: string
  tag: string
  readTime: string
}

export interface BlogPostData {
  slug: string
  frontmatter: PostFrontmatter
  content?: string // Optional for listing pages
}

export interface Post extends BlogPostData {
  content: string // Required for individual post pages
}

// You can add more posts here as you create them
const allPosts: Post[] = [
  postOne,
  // Add more posts here: postTwo, postThree, etc.
]

export async function getPostSlugsAction(): Promise<string[]> {
  return allPosts.map(post => post.slug)
}

export async function getPostBySlugAction(slug: string): Promise<Post | null> {
  const post = allPosts.find(p => p.slug === slug)
  return post || null
}

export async function getAllPostsAction(): Promise<BlogPostData[]> {
  // Return posts without content for listing (better performance)
  return allPosts
    .map(post => ({
      slug: post.slug,
      frontmatter: post.frontmatter
    }))
    .sort((a, b) => 
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
    )
}