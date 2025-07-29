"use client"

import { motion } from 'framer-motion'

function SkillsPage() {

    const skills = [
        'HTML', 'CSS', 'JavaScript', 'TypeScript',
        'React', 'Next.js', 'Tailwind CSS', 'React Native',
        'Node.js', 'Express', 'Laravel', 'MySQL',
        'MongoDB', 'Git', 'GitHub', 'REST APIs',
      ]
      
    return (
        <div>
            <motion.section 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }}
                className="py-10 md:py-20"
            >
                <h2 className="text-4xl font-bold text-white mb-8">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {skills.map(skill => (
                    <motion.div 
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-[#1a1a2e] rounded-lg text-center text-white"
                    >
                    {skill}
                    </motion.div>
                ))}
                </div>
            </motion.section>
        </div>
    );
}

export default SkillsPage;