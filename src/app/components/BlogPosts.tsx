import Link from 'next/link'
import { motion } from "framer-motion"

interface BlogPostProps {
  image: string
  date: string
  readTime: string
  tag: string
  title: string
  excerpt: string
  href: string
}

export default function BlogPost({ image, date, readTime, tag, title, excerpt, href }: BlogPostProps) {
  return (
    <motion.section
    
    >
        <article className="card card-hover overflow-hidden ">
            <div style={{ backgroundImage: `url(${image})` }} className={`gradient-purple bg-cover bg-center opacity-80  rounded-t-md h-48 flex items-center justify-center text-white text-lg font-bold`}>
                
            </div>
            
            <div className="p-6">
                <div className="flex items-center gap-3.5 sm:gap-4 mb-4 text-sm text-gray-400">
                  <span>{date}</span>
                  <span>•</span>
                  <span>{readTime}</span>
                  <span className="bg-[#f04770] text-white px-2 py-1 rounded text-xs font-medium">
                      {tag}
                  </span>
                </div>
                
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-[#ffffff]">
                  <Link
                      href={`/blog/${href}`}
                      className="hover:text-[#f04770] transition-colors duration-300"
                  >
                      {title}
                  </Link>
                </h2>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                {excerpt}
                </p>
                
                <Link 
                href={`/blog/${href}`}
                className="text-[#f04770] font-bold hover:text-[#f06292] transition-colors duration-300"
                >
                Read Full Article →
                </Link>
            </div>
        </article>
    </motion.section>
    
  )
}