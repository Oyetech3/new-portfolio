'use client'

import { useState } from 'react'

export default function Sidebar() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      alert("Thank you for subscribing! You'll receive a confirmation email soon.")
      setEmail('')
    }
  }

  const services = [
    'Custom Web Development',
    'React Application Development',
    'API Development & Integration',
    'Code Reviews & Consulting',
    'Technical Mentoring'
  ]

  const popularPosts = [
    { title: 'JavaScript ES6+ Features You Should Know', views: '12,500 views' },
    { title: 'MongoDB vs MySQL: Which to Choose?', views: '8,200 views' },
    { title: 'Laravel Best Practices for 2024', views: '6,800 views' }
  ]

  return (
    <div className="flex flex-col gap-8">
      {/* Author Widget */}
      <div className="card p-6 text-center">
        <div className="w-20 h-20 bg-[#f04770] rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
          OA
        </div>
        <h3 className="text-xl font-semibold mb-2 text-[#fff]">
          Oyekola Abdulqobid
        </h3>
        <div className="text-gray-400 mb-4">Full-Stack Developer</div>
        <p className="text-gray-200 mb-4">
          Passionate about creating efficient, scalable web applications and sharing knowledge with the developer community.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="http://linkedin.com/in/oyekola-abdulqobid-bolaji-999490271" className="text-[#f04770] hover:text-[#f06292] font-medium transition-colors duration-300">
            LinkedIn
          </a>
          <a href="https://github.com/Oyetech3" className="text-[#f04770] hover:text-[#f06292] font-medium transition-colors duration-300">
            GitHub
          </a>
          <a href="https://x.com/oyekolaabdulqo1?s=21" className="text-[#f04770] hover:text-[#f06292] font-medium transition-colors duration-300">
            Twitter
          </a>
        </div>
      </div>

      {/* Newsletter Widget */}
      <div className="card gradient-purple p-6 border-none">
        <h3 className="text-xl font-semibold mb-4 text-white">📧 Weekly Newsletter</h3>
        <p className="text-white/90 mb-4">
          Get the latest tutorials and development tips delivered to your inbox every Monday.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <button type="submit" className="w-full bg-[#f04770] hover:bg-[#f04770] text-white py-3 rounded font-bold transition-colors duration-300">
            Subscribe Free
          </button>
        </form>
        <p className="text-xs text-white/70 mt-2">Join 2,500+ developers</p>
      </div>

      {/* Services Widget */}
      <div className="card p-6">
        <h3 className="text-xl font-semibold mb-4 text-[#f04770]">💼 My Services</h3>
        <ul className="space-y-3">
          {services.map((service, index) => (
            <li key={index} className="pb-3 border-b border-[#333333] last:border-b-0">
              <p 
                className="text-gray-300 hover:text-[#f06292] transition-colors duration-300"
              >
                {service}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts Widget */}
      <div className="card p-6">
        <h3 className="text-xl font-semibold mb-4 text-[#f04770]">🔥 Popular Posts</h3>
        <ul className="space-y-4">
          {popularPosts.map((post, index) => (
            <li key={index} className="pb-4 border-b border-[#333333] last:border-b-0 last:pb-0">
              <a 
                href="#" 
                className="text-gray-300 hover:text-[#f06292] font-bold transition-colors duration-300 block mb-2"
              >
                {post.title}
              </a>
              <div className="text-xs text-gray-400">{post.views}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}