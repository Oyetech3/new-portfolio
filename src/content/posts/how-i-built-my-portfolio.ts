export const postOne = {
  slug: 'how-i-built-my-portfolio',
  frontmatter: {
    title: 'How I Built My Developer Portfolio with Next.js, TypeScript, Tailwind and Vercel',
    date: '2025-08-17',
    excerpt: 'Every developer needs a portfolio — not just as a showcase of projects, but as a way to communicate who they are and what they can do. Earlier this year, I decided to give my old portfolio a complete makeover. My previous site ...',
    tag: 'Tutorial',
    readTime: '4 min read'
  },
  content: `
    <p class="text-gray-300 text-lg mb-3">
      Every developer needs a portfolio — not just as a showcase of projects, 
      but as a way to communicate who they are and what they can do. Earlier this year, 
      I decided to give my old portfolio a complete makeover. My previous site was hosted on <strong class="text-white">Netlify</strong> and built with plain React, 
      but I wanted something more modern, scalable, and SEO-friendly.
    </p>
    <p class="text-gray-300 mb-3">
      That's how my new portfolio, built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and hosted on Vercel, was born: 👉
      <a class="text-white font-semibold underline" href="https://oyetech.vercel.app">oyetech.vercel.app</a>
    </p>
    
    <h2 class="text-2xl font-semibold text-white mt-10 mb-4">🚀 Why I Chose This Stack</h2>
    
    <div class="rounded-xl overflow-hidden shadow-xl my-6">
      <h3 class="text-xl font-semibold text-[#f04770]">Next.js 15 (App Router):</h3>
      
      <ul class="list-disc list-inside text-gray-300 my-3 px-3">
        <li>Server-side rendering for better SEO.</li>
        <li>File-based routing made managing pages easier.</li>
        <li>Built-in support for server actions, which I plan to use for things like handling form submissions.</li>
      </ul>

      <h3 class="text-xl font-semibold text-[#f04770]">TypeScript:</h3>
      <ul class="list-disc list-inside text-gray-300 px-3 my-3">
        <li>Strong typing helped catch errors early during development.</li>
        <li>Made my codebase more predictable and easier to maintain.</li>
        <li>Better developer experience with IntelliSense and autocomplete in VS Code.</li>
      </ul>


      <h3 class="text-xl font-semibold text-[#f04770]">Tailwind CSS:</h3>
      <ul class="list-disc list-inside text-gray-300 my-3 px-3">
        <li>Writing CSS classes directly in my JSX sped up development.</li>
        <li>Easy to make the design responsive with breakpoints.</li>
        <li>Utility-first approach let me focus more on design and less on managing separate CSS files.</li>
      </ul>

      <h3 class="text-xl font-semibold text-[#f04770]">Vercel:</h3>
      <ul class="list-disc list-inside text-gray-300 my-3 px-3">
        <li>One-click GitHub deployment.</li>
        <li>Free hosting with SSL and blazing-fast load times.</li>
        <li>Built-in optimizations for Next.js projects.</li>
      </ul>

    </div>
    
    <h2 class="text-2xl font-semibold text-white mt-10 mb-4">✨ Designing the Layout</h2>
    
    <p class="text-gray-300 mb-4">
      I wanted the portfolio to feel minimal, modern, and smooth. Here’s the structure I followed:
    </p>

    <ul class="list-disc list-inside text-gray-300 my-3 px-3">
      <li><span class="font-semibold text-white">Home → </span> Hero section introducing me</li>
      <li><span class="font-semibold text-white">About → </span> A short story about who I am and my journey</li>
      <li><span class="font-semibold text-white">Projects → </span> Featured projects with images, descriptions, and links</li>
      <li><span class="font-semibold text-white">Skills → </span> My technical stack, displayed in a clean grid</li>
      <li><span class="font-semibold text-white">Blog → </span> Where this post (and future ones) lives</li>
      <li><span class="font-semibold text-white">Contact → </span> A simple form and social links</li>
    </ul>

    <p class="text-gray-300 mb-4">
      I used <span class="font-semibold text-white">Framer Motion</span> to add subtle animations — things like fade-ins, slide-ups, and hover effects. For example:
    </p>
    
    <div class="rounded-xl overflow-hidden border border-gray-800 shadow-xl my-6">
      <img
        src="/assets/blogs/motion.png"
        alt="A project preview"
        class="w-full h-auto object-cover"
      />
    </div>

    <div>
      <h2 class="text-2xl font-semibold text-white mt-10 mb-4">👎 Challenges I Faced</h2>

      <p class="text-gray-300 mb-4">
        Every rebuild comes with its hurdles. Here are some of mine:
      </p>

      <ol class="list-decimal list-inside text-gray-300 my-3 px-3">
        <li>
          <span class="text-xl text-[#f04770] font-semibold">Migrating from React Router to App Router</span>
          <p class="px-5 py-1">
            I had to rethink my routing logic because Next.js 15 handles routes differently. 
            Instead of 
            <span class="bg-gray-800 px-2 py-1 rounded text-sm text-white mx-1">&ltSwitch&gt</span> and 
            <span class="bg-gray-800 px-2 py-1 rounded text-sm text-white">&ltRoute&gt</span>, 
            everything became file-based, which took some adjusting.
          </p>
        </li>
        <li>
          <span class="text-xl text-[#f04770] font-semibold">Making it fully responsive</span>
          <p class="px-5 py-1">
            Tailwind helped, but I still had to fine-tune padding and spacing so the site looked good on mobile screens.
          </p>
        </li>
        <li>
          <span class="text-xl text-[#f04770] font-semibold">Handling SEO-friendly slugs for the blog</span>
          <p class="px-5 py-1">
            I wanted URLs like 
            <span class="bg-gray-800 px-2 py-1 rounded text-sm text-white mx-1">/blog/how-i-built-my-portfolio </span> instead of just 
            <span class="bg-gray-800 px-2 py-1 rounded text-sm text-white mx-1">/post1</span>. Next.js dynamic routes made that possible.
          </p>
        </li>
      </ol>

    </div>

    <div>
       <h2 class="text-2xl font-semibold text-white mt-10 mb-4">✨ Deployment</h2>
       <p class="text-gray-300 mb-4">
        Deploying with Vercel was one of the easiest parts. I connected my GitHub repo, 
        clicked deploy, and within a minute my portfolio was live.
       </p>
       <p class="text-gray-300 mb-4">
        I also added a <strong class="text-white">redirect from my old Netlify portfolio</strong> so anyone visiting 
        <a href="https://portfolio-oyetech.netlify.app"
         class="underline text-white font-semibold">portfolio-oyetech.netlify.app</a>
        would automatically land on the new Vercel site. This way, no traffic gets lost.
       </p>

       <p class="text-gray-300 mb-4">
        These are the preview images of the old and new portfolios 👇
       </p>

       <div class="rounded-xl overflow-hidden border border-gray-800 shadow-xl my-6">
        <img
          src="/assets/blogs/old.png"
          alt="A project preview"
          class="w-full h-auto object-cover"
        />
       </div>
       <p class="text-gray-300 text-center">Old Portfolio with React.js</p>

       <div class="rounded-xl overflow-hidden border border-gray-800 shadow-xl my-6">
        <img
          src="/assets/blogs/new.png"
          alt="A project preview"
          class="w-full h-auto object-cover"
        />
       </div>
       <p class="text-gray-300 text-center mb-3">New Portfolio with Next.js</p>

    </div>

    <div class="pt-4">
      <p class="text-gray-300 py-3">
        Rebuilding my portfolio wasn’t just about a new look — it was about upgrading my stack, 
        <strong class="text-white">improving performance, and preparing for future growth</strong> (like this blog).
      </p>
      <p class="text-gray-300 pt-3">Through this process, I learned:</p>
      <ul class="text-gray-300 p-3 list-disc list-inside">
        <li>How powerful <strong class="text-white">Next.js App Router</strong> is for SEO and routing</li>
        <li>How TypeScript makes code  <strong class="text-white">safer and less error-prone</strong></li>
        <li>How much <strong class="text-white">Tailwind CSS</strong> speeds up styling</li>
        <li>How smooth deployments can be with <strong class="text-white">Vercel</strong></li>
      </ul>
      <p class="py-3 text-gray-300">
        This is just the beginning. I’ll be using this blog to share more about my journey — 
        from building fullstack apps to exploring React Native and security-focused projects
      </p>
    </div>
    
    <a href="href://oyetech.vercel.app" class="text-gray-400 mb-4">
      👉 You can check out the live site here: <strong class="text-white underline">oyetech.vercel.app</strong>
    </a>
    
    <div class="mt-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
      <p class="text-center text-white font-semibold mb-2">
        🫶 Thanks for reading!
      </p>
      <p class="text-center text-gray-400">
        Come back soon for more posts.
      </p>
    </div>
  `
}