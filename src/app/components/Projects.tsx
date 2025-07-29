"use client"

import { motion } from "framer-motion"
import Link from "next/link";

function ProjectsPage() {

      const projects = [
        {
            title: "School Management System",
            description: "A comprehensive full-stack web application for educational institution management with role-based access control and administrative dashboard.",
            image: "/assets/projects/school.png",
            tech: ["Next.js [Full Stack]", "TypeScript", "MongoDB", "Tailwind"],
            liveUrl: "https://fortressofmercy.vercel.app/",
          },
        {
          title: "Language Translator",
          description: "A powerful real-time language translation app with support for multiple languages and instant translation capabilities.",
          image: "/assets/projects/langtrans.png",
          tech: ["React", "Express.js", "Memory API", "Tailwind"],
          liveUrl: "https://language-translator-oyetech.vercel.app/",
        },
        {
          title: "Chat App",
          description: "An Ultimate Chap web application where users can have real time chat with one another with profile customization while also knowing their statuses.",
          image: "/assets/projects/chatapppng.png",
          tech: ["JavaScript", "PHP", "MySQL", "HTML&CSS"],
          liveUrl: "https://chatapp-oyetech.kesug.com/",
        },
        {
          title: "API & AUTH INTEGRATION",
          description: "An integration of API using 'https://reqres.in/' in combination with NEXT AUTH and  NOMINATIM API for live location including CRUD operations.",
          image: "/assets/projects/integ.png",
          tech: ["Next.js", "TypeScript", "Reqres API", "Nomatim API", "Tailwind"],
          liveUrl: "https://project-assessment-sigma.vercel.app/",
        },
        {
          title: "Facebook Clone",
          description: "A full frontend-featured facebook web application clone with instant features of adding posts and some interactions.",
          image: "/assets/projects/fbclone.png",
          tech: ["React", "JavaScript", "CSS"],
          liveUrl: "https://fb-clone-oyetech.netlify.app/",
        },
        {
          title: "Text To Voice",
          description: "A web application that converts your inputted words into any voice of your choice among the available voices and reads it out.",
          image: "/assets/projects/text.png",
          tech: ["JavaScript", "Web API", "HTML&CSS"],
          liveUrl: "https://texttovoice-oyetech.netlify.app/",
        },
        {
          title: "Voice To Text",
          description: "A web application that records your voice and converts the recorded words into a readable texts - just the opposite of the former.",
          image: "/assets/projects/voice.png",
          tech: ["JavaScript", "Web API", "HTML&CSS",],
          liveUrl: "https://voicetotext-oyetech.netlify.app/",
        },
        {
          title: "Weather App",
          description: "This is a web application that gives the information of the current weather condition of any inputted city you search for.",
          image: "/assets/projects/weather.png",
          tech: ["JavaScript", "Open Weather API", "HTML&CSS"],
          liveUrl: "https://weather-app-oyetech.netlify.app/",
        },
        {
          title: "Calculator App",
          description: "This is a simple calculator web application that does everything basic calculations needed from a calculator.",
          image: "/assets/projects/calculatorpng.png",
          tech: ["JavaScript", "HTML", "CSS"],
          liveUrl: "https://calculator-oyetech.netlify.app/",
        },
        {
          title: "Quiz App",
          description: "A simple Quiz and Game-like web application that shows you the accurate answer when you are wrong and sum up your result when done.",
          image: "/assets/projects/quiz.png",
          tech: ["JavaScript", "HTML", "CSS"],
          liveUrl: "https://quiz-oyetech.netlify.app/",
        },
        {
          title: "W3schools Clone",
          description: "This is a clone of the UI of the popular website W3school, with a very high accuracy and resemblance.",
          image: "/assets/projects/w3sc.png",
          tech: ["JavaScript", "Tailwind CSS", "HTML"],
          liveUrl: "https://w3school-clone-oyetech.netlify.app/",
        },
        {
          title: "Slider App",
          description: "This is just a Slider web application that slides automatically to another image and also have button for the function.",
          image: "/assets/projects/slider.png",
          tech: ["JavaScript", "HTML", "CSS"],
          liveUrl: "https://slider-oyetech.netlify.app/",
        },
      ];
    
    return (
      <div>
      <motion.section 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="py-10 md:py-20"
      >
          <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                  <Link 
                      key={index}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group cursor-pointer transition-all duration-300 hover:scale-105"
                  >
                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="relative bg-gray-900/30 shadow-gray-800 shadow rounded-xl p-4 border transition-all border-gray-800/50 hover:border-gray-700"
                      >
                          <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-40 object-cover rounded-lg mb-3"
                          />
                          <h4 className="font-semibold text-[#fff] mb-2">{project.title}</h4>
                          <p className="text-sm text-gray-400 mb-3">{project.description}</p>
                          <div className="flex flex-wrap gap-1">
                              {project.tech.slice(0, 3).map((tech) => (
                                  <span 
                                      key={tech}
                                      className="px-2 py-1 bg-[#f04770] rounded text-xs"
                                  >
                                      {tech}
                                  </span>
                              ))}
                              {project.tech.length > 3 && (
                                  <span className="px-2 py-1 bg-[#f04770] rounded text-xs">
                                      +{project.tech.length - 3}
                                  </span>
                              )}
                          </div>
                      </motion.div>
                  </Link>
              ))}
          </div>
          
      </motion.section>
  </div>
    );
}

export default ProjectsPage;