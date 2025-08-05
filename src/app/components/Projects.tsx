"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const allProjects = [
  {
    title: "School Management System",
    description: "A comprehensive full-stack web application for educational institution management.",
    image: "/assets/projects/school.png",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://fortressofmercy.vercel.app/",
    type: "Fullstack",
  },
  {
    title: "Language Translator",
    description: "Real-time translation app with instant multilingual capabilities.",
    image: "/assets/projects/langtrans.png",
    tech: ["React", "Express.js", "Memory API", "Tailwind CSS"],
    liveUrl: "https://language-translator-oyetech.vercel.app/",
    type: "Fullstack",
  },
  {
    title: "Chat App",
    description: "Real-time chat app with status and profile customization.",
    image: "/assets/projects/chatapppng.png",
    tech: ["JavaScript", "PHP", "MySQL", "HTML&CSS"],
    liveUrl: "https://chatapp-oyetech.kesug.com/",
    type: "Fullstack"
  },
  {
    title: "API & Auth Integration",
    description: "API integration project using Reqres + Nominatim APIs.",
    image: "/assets/projects/integ.png",
    tech: ["Next.js", "TypeScript", "Reqres API", "Nomatim API", "Tailwind CSS"],
    liveUrl: "https://project-assessment-sigma.vercel.app/",
    type: "Fullstack"
  },
  {
    title: "Facebook Clone",
    description: "A full frontend-featured Facebook clone with posting & interaction.",
    image: "/assets/projects/fbclone.png",
    tech: ["React", "JavaScript", "CSS"],
    liveUrl: "https://fb-clone-oyetech.netlify.app/",
    type: "Frontend",
  },
  {
    title: "Text To Voice",
    description: "Converts text input into spoken voice with multiple options.",
    image: "/assets/projects/text.png",
    tech: ["JavaScript", "Web API", "HTML&CSS"],
    liveUrl: "https://texttovoice-oyetech.netlify.app/",
    type: "Frontend"
  },
  {
    title: "Voice To Text",
    description: "Voice recognition app that turns speech into readable text.",
    image: "/assets/projects/voice.png",
    tech: ["JavaScript", "Web API", "HTML&CSS"],
    liveUrl: "https://voicetotext-oyetech.netlify.app/",
    type: "Frontend"
  },
  {
    title: "Weather App",
    description: "Live weather condition tracker for any city using OpenWeather.",
    image: "/assets/projects/weather.png",
    tech: ["JavaScript", "Open Weather API", "HTML&CSS"],
    liveUrl: "https://weather-app-oyetech.netlify.app/",
    type: "Frontend"
  },
  {
    title: "Calculator App",
    description: "Simple and clean calculator for basic arithmetic operations.",
    image: "/assets/projects/calculatorpng.png",
    tech: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://calculator-oyetech.netlify.app/",
    type: "Frontend"
  },
  {
    title: "Quiz App",
    description: "Interactive quiz game with results and answer explanation.",
    image: "/assets/projects/quiz.png",
    tech: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://quiz-oyetech.netlify.app/",
    type: "Frontend"
  },
  {
    title: "W3schools Clone",
    description: "A pixel-accurate UI clone of W3Schools.",
    image: "/assets/projects/w3sc.png",
    tech: ["JavaScript", "Tailwind CSS", "HTML"],
    liveUrl: "https://w3school-clone-oyetech.netlify.app/",
    type: "Frontend",
  },
  {
    title: "Slider App",
    description: "Auto image slider with manual navigation buttons.",
    image: "/assets/projects/slider.png",
    tech: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://slider-oyetech.netlify.app/",
    type: "Frontend"
  },

];

const getAllTechs = () => {
  const techSet = new Set<string>();
  allProjects.forEach((p) => p.tech.forEach((t) => techSet.add(t)));
  return Array.from(techSet).sort();
};

export default function ProjectsPage() {
  const [category, setCategory] = useState<"All" | "Frontend" | "Fullstack">("All");
  const [activeTech, setActiveTech] = useState<string | null>("All");

  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = category === "All" || project.type === category;
    const matchesTech = !activeTech || project.tech.includes(activeTech);
    if(activeTech === "All") return project
    return matchesCategory && matchesTech;
  });

  const techs = getAllTechs();

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-10 md:py-20"
      >
        <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>

        <div className="flex flex-wrap gap-3 mb-6">
          {["All", "Frontend", "Fullstack"].map((type) => (
            <button
              key={type}
              onClick={() => setCategory(type as any)}
              className={`px-4 py-2 text-sm rounded border ${
                category === type
                  ? "bg-[#f04770] text-white"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <button
          onClick={() => setActiveTech("All")}
          className={`px-3 py-1 text-xs rounded border ${
                activeTech === "All"
                  ? "bg-[#f04770] text-white"
                  : "border-gray-600 text-gray-400 hover:bg-gray-800"
              }`}
          >
            All
          </button>
          {techs.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveTech((prev) => (prev === tech ? null : tech))}
              className={`px-3 py-1 text-xs rounded border ${
                activeTech === tech
                  ? "bg-[#f04770] text-white"
                  : "border-gray-600 text-gray-400 hover:bg-gray-800"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-4"
            >
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h4 className="font-semibold text-white mb-2">{project.title}</h4>
                <p className="text-sm text-gray-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#f04770] rounded text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-[#f04770] rounded text-xs text-white">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
