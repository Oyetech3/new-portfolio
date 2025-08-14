"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16 px-4 md:px-20 lg:px-36 text-white space-y-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center text-white"
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/assets/profiles/pro2.jpg"
            alt="Profile photo"
            width={500}
            height={500}
            className="w-full max-w-sm h-[500px] rounded object-cover object-top mx-auto"
          />
        </motion.div>

        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-300 leading-relaxed text-lg"
          >
            I'm Oyekola Abdulqobid Bolaji, a passionate Fullstack Developer from Nigeria.
            My focus is on building scalable, responsive, and efficient web applications
            using modern technologies. I enjoy solving real-world problems and turning
            ideas into reality through clean, maintainable code.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-gray-300 leading-relaxed text-lg"
          >
            On the frontend, I specialize in creating interactive and responsive user interfaces 
            using <span className="text-[#f04770]">React</span>, <span className="text-[#f04770]">Next.js</span>, 
            and <span className="text-[#f04770]">TypeScript</span>, styled with <span className="text-[#f04770]">Tailwind CSS</span>. 
            I also build cross-platform mobile applications with <span className="text-[#f04770]">React Native</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-300 leading-relaxed text-lg"
          >
            For backend development, I work with <span className="text-[#f04770]">Node.js</span>, 
            <span className="text-[#f04770]"> Express</span>, and <span className="text-[#f04770]">Laravel </span> 
            to build robust server-side applications, integrating with databases like 
            <span className="text-[#f04770]"> MySQL</span> and <span className="text-[#f04770]">MongoDB</span>. 
            I'm experienced in designing and implementing <span className="text-[#f04770]">REST APIs</span> 
            that power modern web applications.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-gray-300 leading-relaxed text-lg"
          >
            I'm driven by continuous learning, collaboration, and delivering impactful user 
            experiences through web technology. Whether it's crafting pixel-perfect interfaces 
            or architecting scalable backend systems, I'm committed to writing maintainable code 
            that stands the test of time.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
}
