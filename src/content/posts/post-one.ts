// src/content/posts/post-one.ts
export const postOne = {
  slug: 'post-one',
  frontmatter: {
    title: 'My First Blog Post',
    date: '2024-01-15',
    excerpt: 'Welcome to my first blog post written in MDX with Next.js.',
    tag: 'Tutorial',
    readTime: '5 min read'
  },
  content: `
    <div className="prose prose-invert prose-lg max-w-3xl mx-auto">
      <p className="text-gray-300 text-lg mb-6">
        Welcome to my first blog post written in <strong className="text-white">MDX</strong> with <strong className="text-white">Next.js</strong>. 
        This setup gives you the power of Markdown combined with React components – perfect for a developer portfolio.
      </p>
      
      <h2 className="text-2xl font-semibold text-white mt-10 mb-4">🚀 Using Images</h2>
      
      <div className="rounded-xl overflow-hidden border border-gray-800 shadow-xl my-6">
        <img
          src="/images/blog-banner.png"
          alt="A simple blog banner"
          className="w-full h-auto object-cover"
        />
      </div>
      
      <h2 className="text-2xl font-semibold text-white mt-10 mb-4">✨ Using Next.js Image Component</h2>
      
      <p className="text-gray-300 mb-4">
        For better performance and optimization, we can use Next.js Image components:
      </p>
      
      <div className="rounded-xl overflow-hidden border border-gray-800 shadow-xl my-6">
        <img
          src="/assets/projects/fbclone.png"
          alt="A project preview"
          className="w-full h-auto object-cover"
        />
      </div>
      
      <p className="text-gray-400 mb-4">
        This approach lets you use React components inside your content while avoiding 
        <code className="bg-gray-800 px-2 py-1 rounded text-sm text-gray-300 mx-1">createContext</code> 
        errors in server components.
      </p>
      
      <div className="mt-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
        <p className="text-center text-white font-semibold mb-2">
          🫶 Thanks for reading!
        </p>
        <p className="text-center text-gray-400">
          Come back soon for more posts.
        </p>
      </div>
    </div>
  `
}