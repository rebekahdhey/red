"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Travel Adventuress",
    description: "A travel blog showcasing adventures and destinations around the world.",
    image: "/images/projects/journey.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://travel-adventuress.netlify.app/",
    codeLink: "#",
  },
  {
    title: "Chanel Fashion",
    description: "A sleek and elegant fashion website inspired by Chanel's iconic style.",
    image: "/images/projects/coco-chanel.png",
    tags: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://chanel-fashion.netlify.app/",
    codeLink: "#",
  },
  {
    title: "Spaceyy",
    description: "An interactive space exploration website with stunning visuals and information.",
    image: "/images/projects/spaceyy.png",
    tags: ["React", "CSS", "JavaScript"],
    liveLink: "https://spaceyy.netlify.app/",
    codeLink: "#",
  },
  {
    title: "Talentfied",
    description: "A talent management platform connecting professionals with opportunities.",
    image: "/images/projects/talentfied.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    liveLink: "https://talentfied.netlify.app/",
    codeLink: "#",
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-red-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge and learning experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 hover:border-red-600/50 transition-all duration-300">
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <div className="flex space-x-3">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 bg-red-600/20 text-red-500 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

