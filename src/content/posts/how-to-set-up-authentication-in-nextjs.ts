export const howAuthenticate = {
  slug: 'how-to-set-up-authentication-in-nextjs',
  frontmatter: {
    title: 'How to Set Up Authentication in Next.js 15 with Server Actions',
    date: '2025-08-26',
    excerpt: 'Authentication is one of the most important parts of any modern web application. Whether you’re building a portfolio, SaaS platform, or an e-commerce app, you’ll need a way for users to securely sign up, log in, and manage their sessions...',
    tag: 'Next.js',
    image: '/assets/blogs/2.png',
    readTime: '6 min read',
    related: 'fullstack-development-roadmap'
  },
  content: `
    <p class="text-gray-300 text-lg mb-3">
    Authentication is one of the most important parts of any modern web application.
    Whether you’re building a portfolio, SaaS platform, or an e-commerce app, 
    you’ll need a way for users to securely sign up, log in, and manage their sessions.
    </p>

    <p class="text-gray-300 text-lg mb-3">
    In this guide, I’ll walk you through setting up authentication in <strong class="text-white">Next.js 15 (App Router)</strong> using modern best practices. 
    We’ll use <strong class="text-white">TypeScript, Next.js server actions, cookies/sessions, and Tailwind CSS</strong> for styling.
    </p>

    <p class="text-gray-300 mb-3">
    By the end, you’ll have a working authentication system with:
    </p>

    <ul class="mb-3 text-gray-300 list-disc list-inside px-2">
        <li>✅ User registration</li>
        <li>✅ Login & Logout</li>
        <li>✅ Protected routes</li>
    </ul>

    <div class="rounded-xl overflow-hidden border border-gray-800 shadow-xl my-6">
        <img
            src="/assets/blogs/auth1.png"
            alt="A project preview"
            class="w-full h-auto object-cover"
        />
    </div>

    <h2 class="text-2xl font-semibold text-white mt-10 mb-4">❓ Why Authentication Matters</h2>
    <ul class="mb-3 text-gray-300 list-disc list-inside px-2">
        <li>Keeps user data secure</li>
        <li>Enables personalized experiences (e.g dashboards)</li>
        <li>Builds trust in your application</li>
        <li>Lays the foundation for features like payments, subscriptions, or role-based access</li>
    </ul>

    <h2 class="text-2xl font-semibold text-white mt-10 mb-4">1️⃣ <span class="text-[#f04770]">Step 1:</span> Setting Up the Next.js Project</h2>
    <p class="text-gray-300 mb-3">
        First, create a new Next.js 15 project with TypeScript and Tailwind CSS:
    </p>
    <div class="bg-gray-800 p-3 rounded-md mb-3">
        <p class="text-gray-300">npx create-next-app@latest my-auth-app --typescript --tailwind</p>
        <p class="text-gray-300">cd my-auth-app</p>
    </div>
    <p class="text-gray-300 mb-3">
        Copy the commands above into your terminal and that will give you a fresh Next.js 15 setup with the App Router enabled.
    </p>

    <h2 class="text-2xl font-semibold text-white mt-10 mb-4">2️⃣ <span class="text-[#f04770]">Step 2:</span> Creating the Database Model</h2>
    <p class="text-gray-300 mb-3">
        For simplicity, let’s use Prisma + SQLite (works with PostgreSQL/MySQL too).
    </p>
    <p class="text-gray-300 mb-3">Install Prisma:</p>
    <div class="bg-gray-800 p-3 rounded-md mb-3">
        <p class="text-gray-300">npm install prisma @prisma/client</p>
        <p class="text-gray-300">npx prisma init --datasource-provider sqlite</p>
    </div>
    <p class="text-gray-300 mb-2">Update your<span class="bg-gray-300 px-1 mx-2 rounded text-black">prisma/schema.prisma</span> :</p>
    <div class="rounded-xl overflow-hidden border border-gray-800 shadow-xl my-6">
        <img
            src="/assets/blogs/auth2.png"
            alt="A project preview"
            class="w-full h-auto object-cover"
        />
    </div>
    <p class="text-gray-300 mb-3">Then migrate:</p>
    <div class="bg-gray-800 p-3 rounded-md mb-3">
        <p class="text-gray-300">npx prisma migrate dev --name init</p>
    </div>
    <p class="text-gray-300 mb-3">Don't worry if you want to know more about Prisma, I will cover that in another blog soon</p>

    <h2 class="text-2xl font-semibold text-white mt-10 mb-4">3️⃣ <span class="text-[#f04770]">Step 3:</span> Handling User Registration</h2>
    <p class="text-gray-300 mb-3">
        We’ll use Next.js Server Actions for form submissions.
    </p>
    <p>
        <span class="bg-gray-300 px-1 my-2 rounded text-black">app/register/page.tsx</span> :
    </p>
    <div class="rounded-xl overflow-hidden border border-gray-800 shadow-xl my-6">
        <img
            src="/assets/blogs/auth3.png"
            alt="A project preview"
            class="w-full h-auto object-cover"
        />
    </div>

    <h2 class="text-2xl font-semibold text-white mt-10 mb-4">4️⃣ <span class="text-[#f04770]">Step 4:</span> Creating the API Route for Registration</h2>
    <p>
        <span class="bg-gray-300 px-1 my-2 rounded text-black">app/api/register/route.ts</span> :
    </p>
    <div class="rounded-xl overflow-hidden border border-gray-800 shadow-xl my-6">
        <img
            src="/assets/blogs/auth4.png"
            alt="A project preview"
            class="w-full h-auto object-cover"
        />
    </div>

    <h2 class="text-2xl font-semibold text-white mt-10 mb-4">5️⃣ <span class="text-[#f04770]">Step 5:</span> Login & Session Handling</h2>
    <p class="text-gray-300 mb-3">We’ll use cookies to keep users logged in.</p>
    <p>
        <span class="bg-gray-300 px-1 my-2 rounded text-black">app/api/login/route.ts</span> :
    </p>
    <div class="rounded-xl overflow-hidden border border-gray-800 shadow-xl my-6">
        <img
            src="/assets/blogs/auth5.png"
            alt="A project preview"
            class="w-full h-auto object-cover"
        />
    </div>

    <h2 class="text-2xl font-semibold text-white mt-10 mb-4">6️⃣ <span class="text-[#f04770]">Step 6:</span> Protecting Routes</h2>
    <p class="text-gray-300 mb-3">We can read cookies inside server components:</p>
    <div class="rounded-xl overflow-hidden border border-gray-800 shadow-xl my-6">
        <img
            src="/assets/blogs/auth6.png"
            alt="A project preview"
            class="w-full h-auto object-cover"
        />
    </div>

    <h2 class="text-2xl font-semibold text-white mt-10 mb-4">7️⃣ <span class="text-[#f04770]">Step 7:</span> Logout</h2>
    <p class="text-gray-300 mb-3">We can read cookies inside server components:</p>
    <div class="rounded-xl overflow-hidden border border-gray-800 shadow-xl my-6">
        <img
            src="/assets/blogs/auth7.png"
            alt="A project preview"
            class="w-full h-auto object-cover"
        />
    </div>

    <p class="text-gray-300 mb-3">
        And that’s it 🎉 You’ve just built a simple authentication system in <strong class="text-white">Next.js 15 with App Router.</strong>
    </p>
    <p class="text-gray-300 mb-3">
        Through this project, I learned:
    </p>
    <ul class="mb-3 text-gray-300 list-disc list-inside px-2">
        <li> How powerful server actions and API routes are in Next.js 15</li>
        <li> How TypeScript makes authentication logic safer</li>
        <li> How Tailwind CSS helps build clean forms quickly</li>
        <li> How smooth deployments are on Vercel</li>
    </ul>
    <p class="text-gray-300 mb-3">
        This setup is great for learning and small apps. For production, 
        consider using <strong class="text-white">NextAuth.js</strong> or <strong class="text-white">Auth.js</strong>, which provide OAuth, JWTs, 
        and more advanced security out of the box.
    </p>

    

  `
}