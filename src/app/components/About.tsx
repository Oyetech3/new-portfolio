"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

function AboutPage() {
    return (
        <div>
            <motion.section 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="py-10 md:py-20 space-y-6"
            >
                <h2 className="text-4xl font-bold text-white">About Me</h2>
                <div className='flex flex-col lg:flex-row gap-10 justify-between'>
                    <Image 
                    className='rounded w-full lg:w-[400px] h-[400px] object-cover object-top' 
                    src={'/assets/profiles/profile.jpg'} 
                    alt='profile' 
                    width={200} height={200} 
                    />
                    <div className="space-y-6">
                        <p className="text-gray-300 leading-relaxed max-w-2xl">
                            I'm Oyekola Abdulqobid Bolaji, a passionate Fullstack Developer from Nigeria.
                            My focus is on building scalable, responsive, and efficient web applications
                            using modern technologies. I enjoy solving real-world problems and turning
                            ideas into reality through clean, maintainable code.
                        </p>
                        
                        <p className="text-gray-300 leading-relaxed max-w-2xl">
                            On the frontend, I specialize in creating interactive and responsive user interfaces 
                            using <span className="text-[#f04770]">React</span>, <span className="text-[#f04770]">Next.js</span>, 
                            and <span className="text-[#f04770]">TypeScript</span>, styled with <span className="text-[#f04770]">Tailwind CSS</span>. 
                            I also build cross-platform mobile applications with <span className="text-[#f04770]">React Native</span>.
                        </p>
                        
                        <p className="text-gray-300 leading-relaxed max-w-2xl">
                            For backend development, I work with <span className="text-[#f04770]">Node.js</span>, 
                            <span className="text-[#f04770]"> Express</span>, and <span className="text-[#f04770]">Laravel</span> 
                            to build robust server-side applications, integrating with databases like 
                            <span className="text-[#f04770]"> MySQL</span> and <span className="text-[#f04770]">MongoDB</span>. 
                            I'm experienced in designing and implementing <span className="text-[#f04770]">REST APIs</span> 
                            that power modern web applications.
                        </p>
                        
                        <p className="text-gray-300 leading-relaxed max-w-2xl">
                            I'm driven by continuous learning, collaboration, and delivering impactful user 
                            experiences through web technology. Whether it's crafting pixel-perfect interfaces 
                            or architecting scalable backend systems, I'm committed to writing maintainable code 
                            that stands the test of time.
                        </p>
                    </div>
                </div>
                
            </motion.section>
        </div>
    );
}

export default AboutPage;