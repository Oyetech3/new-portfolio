"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const socialMedias = [
    {
      href: "https://linkedin.com/in/oyekola-abdulqobid-bolaji-999490271",
      src: "/assets/socials/linknd.png",
      alt: "LinkedIn",
    },
    {
      href: "https://github.com/Oyetech3",
      src: "/assets/socials/github.png",
      alt: "GitHub",
    },
    {
      href: "https://x.com/oyekolaabdulqo1?s=21",
      src: "/assets/socials/twitter.png",
      alt: "Twitter (X)",
    },
    {
      href: "https://wa.me/2348022761274",
      src: "/assets/socials/whatsapp.png",
      alt: "WhatsApp",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="w-full py-10 text-center text-gray-400 text-sm border-t border-white/10 mt-28 bg-[#010109]/60 backdrop-blur-md"
    >
      
      <div className="flex items-center justify-center gap-5 mb-6">
        {socialMedias.map((social) => (
          <motion.a
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.alt}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 border border-white/10 hover:bg-white/50 transition-all"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={social.src}
              alt={social.alt}
              width={200}
              height={200}
              className="object-contain w-7 h-7"
            />
          </motion.a>
        ))}
      </div>

    
      <p className="px-5 text-white/60">
        &copy; {new Date().getFullYear()} <span className="text-[#f04770] font-medium">OYETECH</span> | Abdulqobid Oyekola. All rights reserved.
      </p>
    </motion.footer>
  );
}
