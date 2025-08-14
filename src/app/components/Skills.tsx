"use client";
import { motion } from "framer-motion";

export default function SkillsPage() {

  const skillCategories = [
    {
      category: "Frontend",
      color: "from-blue-500/20 to-blue-600/10 border-blue-500/30 hover:border-blue-400/50",
      hoverGlow: "hover:shadow-lg hover:shadow-blue-500/25",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"]
    },
    {
      category: "Mobile",
      color: "from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:border-purple-400/50",
      hoverGlow: "hover:shadow-lg hover:shadow-purple-500/25",
      skills: ["React Native", "Expo"]
    },
    {
      category: "Backend",
      color: "from-green-500/20 to-green-600/10 border-green-500/30 hover:border-green-400/50",
      hoverGlow: "hover:shadow-lg hover:shadow-green-500/25",
      skills: ["Node.js", "Express", "Laravel", "REST APIs"]
    },
    {
      category: "Database",
      color: "from-orange-500/20 to-orange-600/10 border-orange-500/30 hover:border-orange-400/50",
      hoverGlow: "hover:shadow-lg hover:shadow-orange-500/25",
      skills: ["MySQL", "MongoDB", "Prisma"]
    },
    {
      category: "Tools & Others",
      color: "from-gray-500/20 to-gray-600/10 border-gray-500/30 hover:border-gray-400/50",
      hoverGlow: "hover:shadow-lg hover:shadow-gray-500/25",
      skills: ["Blade Template", "Git", "GitHub", "Framer Motion"]
    }
  ];

  const allSkills = skillCategories.flatMap(category => 
    category.skills.map(skill => ({
      name: skill,
      category: category.category,
      color: category.color,
      hoverGlow: category.hoverGlow
    }))
  );

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-10 md:py-16 px-4 md:px-20 lg:px-36"
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
        {allSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 0.05 * index, 
              duration: 0.4,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ 
              scale: 1.05,
              y: -5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative p-4 rounded-xl text-center text-white 
              bg-gradient-to-br ${skill.color}
              border backdrop-blur-sm
              ${skill.hoverGlow}
              hover:transform hover:transition-all hover:duration-300
              cursor-pointer group
            `}
          >
            <span className="relative z-10 font-medium text-sm sm:text-base">
              {skill.name}
            </span>
            
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className={`
              absolute -top-1 -right-1 w-2 h-2 rounded-full
              ${skill.category === 'Frontend' ? 'bg-blue-400' : ''}
              ${skill.category === 'Mobile' ? 'bg-purple-400' : ''}
              ${skill.category === 'Backend' ? 'bg-green-400' : ''}
              ${skill.category === 'Database' ? 'bg-orange-400' : ''}
              ${skill.category === 'Tools & Others' ? 'bg-gray-400' : ''}
              opacity-60 group-hover:opacity-100 transition-opacity duration-300
            `} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4 mt-12"
      >
        {skillCategories.map((category) => (
          <div key={category.category} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full
              ${category.category === 'Frontend' ? 'bg-blue-400' : ''}
              ${category.category === 'Mobile' ? 'bg-purple-400' : ''}
              ${category.category === 'Backend' ? 'bg-green-400' : ''}
              ${category.category === 'Database' ? 'bg-orange-400' : ''}
              ${category.category === 'Tools & Others' ? 'bg-gray-400' : ''}
            `} />
            <span className="text-white/70 text-xs font-medium">
              {category.category}
            </span>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}