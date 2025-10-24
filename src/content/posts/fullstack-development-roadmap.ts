export const fullStactRoadmap = {
  slug: 'fullstack-development-roadmap',
  frontmatter: {
    title: 'Full-Stack Development Roadmap from Zero to Hero',
    date: '2025-09-21',
    excerpt: 'Becoming a full-stack developer means you can build entire web applications—from the polished interface a user sees to the server logic and database that power it. This guide breaks the journey into clear phases so you know what to learn, why it matters, and in what order...',
    tag: 'Full-Stack',
    image: 'https://oyetech.vercel.app/assets/blogs/3.png',
    readTime: '5 min read',
    related: 'how-to-set-up-authentication-in-nextjs'
  },
  content: `
    <p class="italic text-gray-200 mb-5 ">A complete guide from absolute beginner to job-ready engineer</p>

    <p class="text-gray-300 text-lg mb-3">
      Becoming a full-stack developer means you can build entire web applications—from 
      the polished interface a user sees to the server logic and database that power it.
       This guide breaks the journey into clear phases so you know what to learn, why it matters, and in what order.
    </p>

    <h2 class="text-2xl font-semibold text-white mt-10 mb-4">1️⃣ Why Full-Stack</h2>


    <div class="rounded-xl overflow-hidden  my-6">
      <p class="text-gray-300">Full-stack developers build entire web applications—the user interface and the behind-the-scenes APIs, servers, and databases.</p>
      <p class="text-gray-300">Companies love full-stack engineers because they can:</p>
     
      <ul class="list-disc list-inside text-gray-300 my-3 px-3">
        <li>Ship features end-to-end.</li>
        <li>Understand how front-end and back-end choices affect each other.</li>
        <li>Work on small teams without heavy specialization.</li>
      </ul>

      <p class="text-gray-300 mb-3">If your goal is to launch your own SaaS, work in a startup, or just stay versatile, full-stack is a smart path.</p>
    </div>

    <h2 class="text-2xl font-semibold text-white mt-10 mb-4">2️⃣ Core Foundations (Month 1–2)</h2>

    <div class="rounded-xl overflow-hidden  my-6">
      <p class="text-gray-300 mb-3">Before touching any framework, master the raw building blocks.</p>

      <h3 class="text-xl font-semibold text-[#f04770]">HTML</h3>
      <ul class="list-disc list-inside text-gray-300 px-3 my-3">
        <li>Semantic tags (<span class="bg-gray-300 px-1 mx-2 rounded text-black">&ltheader&gt</span>, <span class="bg-gray-300 px-1 mx-2 rounded text-black">&ltarticle&gt</span>)</li>
        <li>Forms, accessibility (ARIA roles), SEO-friendly structure.</li>
      </ul>

      <h3 class="text-xl font-semibold text-[#f04770]">CSS</h3>
      <ul class="list-disc list-inside text-gray-300 px-3 my-3">
        <li>Box model, positioning, flexbox, CSS grid.</li>
        <li>Responsive design with media queries.</li>
        <li>Transitions & animations.</li>
      </ul>

      <h3 class="text-xl font-semibold text-[#f04770]">JavaScript (ES6+)</h3>
      <ul class="list-disc list-inside text-gray-300 px-3 my-3">
        <li>Variables/const/let, arrow functions.</li>
        <li>Async programming: promises,<span class="bg-gray-300 px-1 mx-2 rounded text-black">async/await</span></li>
        <li>DOM manipulation, events, fetch API.</li>
      </ul>

      <h3 class="text-xl font-semibold text-[#f04770]">Git & GitHub</h3>
      <ul class="list-disc list-inside text-gray-300 px-3 my-3">
        <li>Cloning, branching, pull requests, resolving merge conflicts.</li>
        <li>Writing clear commit messages.</li>
      </ul>
      <p class="text-gray-300 mb-3 ">💡<strong class="text-white">Goal:</strong> Build and deploy a small static site with interactive JS (e.g., a to-do list) using GitHub Pages or Netlify.</p>

      <h2 class="text-2xl font-semibold text-white mt-10 mb-4">3️⃣ Front-End Specialization (Month 3–5)</h2>

      <div class="rounded-xl overflow-hidden  my-6">
       <p class="text-gray-300 mb-3">Modern applications demand structure and performance.</p>

       <h3 class="text-xl font-semibold text-[#f04770]">Core Libraries & Frameworks</h3>
       <ul class="list-disc list-inside text-gray-300 px-3 my-3">
         <li><strong class="text-white">React –</strong> Hooks, Context API, React Router. </li>
         <li>Alternatives: Vue 3 or Svelte, but React dominates 2025 job boards.</li>
       </ul>

       <h3 class="text-xl font-semibold text-[#f04770]">TypeScript</h3>
       <ul class="list-disc list-inside text-gray-300 px-3 my-3">
         <li>Interfaces, types vs. interfaces, generics.</li>
         <li>Strong typing prevents runtime bugs and improves autocompletion.</li>
       </ul>

       <h3 class="text-xl font-semibold text-[#f04770]">Styling Approaches</h3>
       <ul class="list-disc list-inside text-gray-300 px-3 my-3">
         <li>Tailwind CSS utility-first workflow.</li>
         <li>Component libraries: shadcn/ui, Chakra UI, Radix.</li>
         <li>CSS Modules or Styled Components if not using Tailwind.</li>
       </ul>

       <h3 class="text-xl font-semibold text-[#f04770]">State & Data</h3>
       <ul class="list-disc list-inside text-gray-300 px-3 my-3">
         <li>Global state with Redux Toolkit or Zustand.</li>
         <li>Server state with React Query/TanStack Query.</li>
       </ul>

       <h3 class="text-xl font-semibold text-[#f04770]">Front-End Tooling</h3>
       <ul class="list-disc list-inside text-gray-300 px-3 my-3">
         <li>Vite or Next.js 15 for fast builds & SSR/SSG.</li>
         <li>ESLint + Prettier for code quality.</li>
       </ul>

       <p class="text-gray-300 mb-3 ">💡<strong class="text-white">Goal:</strong> Build a responsive SPA that consumes a public API (weather dashboard, movie search, etc.).</p>

      </div>

      <h2 class="text-2xl font-semibold text-white mt-10 mb-4">4️⃣ Back-End Fundamentals (Month 6–8)</h2>

      <div class="rounded-xl overflow-hidden  my-6">
       <p class="text-gray-300 mb-3">Learn to create APIs and manage data.</p>

       <h3 class="text-xl font-semibold text-[#f04770]">Node.js & Express/Fastify</h3>
       <ul class="list-disc list-inside text-gray-300 px-3 my-3">
         <li>Routing, middleware, error handling. </li>
         <li>RESTful design principles.</li>
       </ul>

       <h3 class="text-xl font-semibold text-[#f04770]">Databases</h3>
       <ul class="list-disc list-inside text-gray-300 px-3 my-3">
         <li><strong class="text-white">Relational (SQL):</strong> PostgreSQL or MySQL.</li>
         <li><strong class="text-white">NoSQL:</strong>  MongoDB for flexible schemas.</li>
         <li>ORMs: Prisma or TypeORM.</li>
       </ul>

       <h3 class="text-xl font-semibold text-[#f04770]">Authentication & Security</h3>
       <ul class="list-disc list-inside text-gray-300 px-3 my-3">
         <li>Sessions vs. JWT tokens.</li>
         <li>OAuth (Google, GitHub).</li>
         <li>Hashing passwords with bcrypt/argon2.</li>
         <li>Preventing XSS/CSRF and SQL injection.</li>
       </ul>

       <h3 class="text-xl font-semibold text-[#f04770]">Testing</h3>
       <ul class="list-disc list-inside text-gray-300 px-3 my-3">
         <li>Jest or Vitest for unit tests.</li>
         <li>Supertest for API endpoint testing.</li>
       </ul>

       <p class="text-gray-300 mb-3 ">💡<strong class="text-white">Goal:</strong> Create a REST API with authentication and a CRUD resource (e.g., a notes app) and connect it to your React front-end.</p>

      </div>

      <h2 class="text-2xl font-semibold text-white mt-10 mb-4">5️⃣ Going Full-Stack (Month 9–11)</h2>

      <div class="rounded-xl overflow-hidden  my-6">
       <p class="text-gray-300 mb-3">Combine the front and back into a single, production-ready application.</p>

       <h3 class="text-xl font-semibold text-[#f04770]">Frameworks for Both Ends</h3>
       <ul class="list-disc list-inside text-gray-300 px-3 my-3">
         <li><strong class="text-white">Next.js 15 –</strong> file-based routing, server actions, API routes, SSR/SSG. </li>
         <p class="px-5">Lets you write front-end and back-end code in one project.</p>
         <li>tRPC or GraphQL (Apollo/Urql) for type-safe APIs.</li>
       </ul>

       <h3 class="text-xl font-semibold text-[#f04770]">Real-World Features</h3>
       <ul class="list-disc list-inside text-gray-300 px-3 my-3">
         <li>File uploads (AWS S3/Cloudinary).</li>
         <li>Payments (Stripe).</li>
         <li>Real-time updates with WebSockets or Socket.IO.</li>
       </ul>

       <h3 class="text-xl font-semibold text-[#f04770]">Performance</h3>
       <ul class="list-disc list-inside text-gray-300 px-3 my-3">
         <li>Caching strategies.</li>
         <li>Image optimization, lazy loading, Core Web Vitals.</li>
       </ul>

       <p class="text-gray-300 mb-3 ">💡<strong class="text-white">Capstone Project Idea:</strong> A small SaaS product—e.g., a project management tool with user auth, team collaboration, and billing.</p>

      </div>

      <h2 class="text-2xl font-semibold text-white mt-10 mb-4">6️⃣ DevOps & Deployment (Month 12)</h2>

      <div class="rounded-xl overflow-hidden  my-6">
       <p class="text-gray-300 mb-3">You built it—now ship it.</p>

       <ul class="list-disc list-inside text-gray-300 px-3 my-3">
         <li><strong class="text-white">Hosting:</strong> Vercel or Netlify for JAMstack; Render, Railway, or AWS for custom Node servers.</li>
         <li><strong class="text-white">CI/CD:</strong> GitHub Actions or GitLab CI for automated tests and deploys.</li>
         <li><strong class="text-white">Monitoring:</strong> Sentry for error tracking, Logtail or Datadog for logs.</li>
         <li><strong class="text-white">Containers:</strong> Docker basics for reproducible builds.</li>
       </ul>
      </div>

      <h2 class="text-2xl font-semibold text-white mt-10 mb-4">7️⃣ Suggested Year-Long Timeline</h2>
      <table class="text-gray-300 w-full border-collapse bg-gray-800 rounded-lg overflow-hidden shadow-lg">
        <thead>
            <tr class="border-b-2 border-gray-600 text-white bg-gray-700">
                <th class="px-6 py-4 text-left font-semibold align-top">Quarter</th>
                <th class="px-6 py-4 text-left font-semibold align-top">Focus</th>
            </tr>
        </thead>
        <tbody>
            <tr class="border-b border-gray-600 hover:bg-gray-750 transition-colors">
                <td class="px-6 py-4 font-medium text-blue-400 align-top">Q1</td>
                <td class="px-6 py-4 align-top">HTML, CSS, JS, Git</td>
            </tr>
            <tr class="border-b border-gray-600 hover:bg-gray-750 transition-colors">
                <td class="px-6 py-4 font-medium text-blue-400 align-top">Q2</td>
                <td class="px-6 py-4 align-top">React + TypeScript + Tailwind</td>
            </tr>
            <tr class="border-b border-gray-600 hover:bg-gray-750 transition-colors">
                <td class="px-6 py-4 font-medium text-blue-400 align-top">Q3</td>
                <td class="px-6 py-4 align-top">Node.js, Express, PostgreSQL/MongoDB</td>
            </tr>
            <tr class="hover:bg-gray-750 transition-colors">
                <td class="px-6 py-4 font-medium text-blue-400 align-top">Q4</td>
                <td class="px-6 py-4 align-top">Next.js full-stack project, deployment, CI/CD</td>
            </tr>
        </tbody>
       </table>

       <h2 class="text-2xl font-semibold text-white mt-10 mb-4">🎯 Final Thoughts</h2>
       <p class="text-gray-300 mb-3">
       The stack evolves, but the fundamentals<strong class="text-white">-HTML, CSS, JavaScript, HTTP, and problem-solving—</strong>are timeless.
       Treat this roadmap as a flexible guide: build real projects at every stage, share your work on GitHub, and write about what you learn.
       </p>
       <p class="text-gray-300 mb-3">
        <strong class="text-white">Tip:</strong> Don’t wait until you “know everything” to apply for jobs. Employers value projects and proof you can learn quickly more than a checklist of buzzwords.
       </p>

       
  `
}