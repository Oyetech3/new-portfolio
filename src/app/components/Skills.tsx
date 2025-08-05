"use client";

import { motion } from "framer-motion";

export default function SkillsPage() {
  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript",
    "React", "Next.js", "Tailwind CSS", "React Native",
    "Node.js", "Express", "Laravel", "MySQL",
    "MongoDB", "Git", "GitHub", "REST APIs"
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-16 px-4 md:px-20 lg:px-36"
    >
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center text-white mb-12"
      >
        Skills
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="p-4 bg-[#1a1a2e] rounded-lg text-center text-white shadow-sm transition"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
