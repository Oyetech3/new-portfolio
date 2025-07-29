"use client"

import Image from 'next/image';
import { motion } from 'framer-motion'

function HomePage() {
    return (
        <div>
            <motion.section 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            className="flex flex-row justify-between items-center py-10 md:py-20 gap-8">
                <div className="flex  items-center gap-4">
                    <div className="grid grid-rows-[auto_auto_auto] gap-4">
                        <div className="w-1 h-12 bg-[#f04770] rounded"></div>
                        <div className="w-1 h-2 bg-white rounded-full mx-0"></div>
                        <div className="w-1 h-12 bg-[#f04770] rounded"></div>
                        <div className="w-1 h-2 bg-white rounded-full mx-0"></div>
                        <div className="w-1 h-12 bg-[#f04770] rounded"></div>
                    </div>
                    <div className='pl-5'>
                        <p className="text-xl text-white">Hello <span className="text-[#f04770]">!</span></p>
                        <h1 className="text-3xl sm:text-4xl font-bold text-white">
                        I'm <span className="text-[#f04770]">Oyekola Abdulqobid B.</span>
                        </h1>
                        <p className="text-lg font-semibold text-white">Full-Stack  Developer</p>
                        <a href="/assets/profiles/resume.pdf" download className="mt-4 inline-block bg-[#f04770] text-white px-6 py-2 rounded-full hover:bg-[#d03a64] transition">
                        Download Resume
                        </a>
                    </div>
                </div>
                <Image className='hidden md:block' src="/assets/profiles/dev1.png" alt="Developer illustration" width={250} height={250} priority />
            </motion.section>
        </div>
    );
}

export default HomePage;