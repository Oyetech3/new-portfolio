'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const path = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/blogs', label: 'Blog' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="sticky p-3 top-0 bg-[#010109] z-50">
      <div className="flex items-center justify-between py-4 px-2">
        <Link href="/" className="text-2xl font-bold text-white">
          <span className="text-[#f04770]">OYE</span>TECH
        </Link>
        <button
          type="button"
          title="menu"
          onClick={() => setOpen(!open)}
          className="sm:hidden text-white"
        >
          <Menu />
        </button>

        <ul className={`hidden sm:flex gap-8`}>
          {navLinks.map((link) => {
            const active = path === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-lg relative ${
                    active ? 'text-[#f04770] font-bold' : 'text-white hover:text-gray-300 transition'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-[#f04770] transition-all ${
                      active ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>

       
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-16 right-0 w-2/3 h-full bg-white text-black py-8 px-4 space-y-6 shadow-lg sm:hidden"
            >
              {navLinks.map((link) => {
                const active = path === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block text-xl ${active ? 'text-[#f04770]' : ''}`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
