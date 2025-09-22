"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#010109]/70 border-b border-white/10">
      <div className="flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex items-center text-white">
          <span className="text-[#ff2e57] flex items-center gap-0">
            <Image 
              className="h-[1.2em] w-auto" 
              src={'/assets/faviconn.png'} 
              alt="logo" 
              width={32} 
              height={32}
            />
            YE
          </span>
          TECH
        </Link>

        {/* Hamburger Toggle */}
        <button
          type="button"
          title="menu"
          onClick={() => setOpen(!open)}
          className="sm:hidden text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex gap-8">
          {navLinks.map((link) => {
            const active = link.href === '/' ? path === '/' : path.startsWith(link.href) ;
            return (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={`text-lg transition-all ${
                    active ? "text-[#f04770] font-bold" : "text-white "
                  }`}
                >
                  {link.label}
                </Link>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-[#f04770] transition-all duration-300 ${
                    active ? "" : "w-0 group-hover:w-full"
                  }`}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-16 right-0 w-3/4 sm:hidden h-[calc(100vh-4rem)] bg-[#0a0a10] text-white py-10 px-6 flex flex-col gap-6 shadow-lg border-l border-white/10 z-50"
          >
            {navLinks.map((link) => {
              const active = path === link.href;
              return (
                <motion.div
                  key={link.href}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block text-lg transition-colors ${
                      active ? "text-[#f04770] font-semibold" : "text-white hover:text-[#f04770]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

