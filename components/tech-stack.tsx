"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Heading5Icon as Html5,
  CodepenIcon as Css3,
  CodepenIcon as Javascript,
  CodepenIcon as ReactLogo,
  GitGraphIcon as Git,
  Figma,
} from "lucide-react"
import { Github } from "lucide-react"

const technologies = [
  {
    name: "HTML",
    icon: <Html5 className="h-12 w-12" />,
    color: "bg-orange-500/20 text-orange-500",
  },
  {
    name: "CSS",
    icon: <Css3 className="h-12 w-12" />,
    color: "bg-blue-500/20 text-blue-500",
  },
  {
    name: "JavaScript",
    icon: <Javascript className="h-12 w-12" />,
    color: "bg-yellow-500/20 text-yellow-500",
  },
  {
    name: "ReactJS",
    icon: <ReactLogo className="h-12 w-12" />,
    color: "bg-cyan-500/20 text-cyan-500",
  },
  {
    name: "Ruby on Rails",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <path d="M20.9 18.55c.06-.43.1-.85.1-1.28 0-4.59-3.72-8.3-8.3-8.3-2.4 0-4.57 1.02-6.09 2.65-.41.44-.78.91-1.12 1.39l-.01-.01C3.17 15.14 2 18.42 2 22h11.15a8.32 8.32 0 0 0 7.75-3.45z" />
      </svg>
    ),
    color: "bg-red-500/20 text-red-500",
  },
  {
    name: "Bootstrap",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <path d="M2 12s2-7 10-7 10 7 10 7-2 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    color: "bg-purple-500/20 text-purple-500",
  },
  {
    name: "SCSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" />
        <path d="M12 16v-4" />
        <path d="M8 12h8" />
      </svg>
    ),
    color: "bg-pink-500/20 text-pink-500",
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    color: "bg-teal-500/20 text-teal-500",
  },
  {
    name: "Git",
    icon: <Git className="h-12 w-12" />,
    color: "bg-orange-600/20 text-orange-600",
  },
  {
    name: "GitHub",
    icon: <Github className="h-12 w-12" />,
    color: "bg-gray-500/20 text-gray-400",
  },
  {
    name: "Figma",
    icon: <Figma className="h-12 w-12" />,
    color: "bg-purple-600/20 text-purple-600",
  },
  {
    name: "Jira",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <path d="M12 7V2H5v5" />
        <path d="M5 7H2v12h5v-5" />
        <path d="M5 14h5v5h5v-5" />
        <path d="M15 14h2v-2h2V7h-5v5" />
        <path d="M17 12h-5V7" />
      </svg>
    ),
    color: "bg-blue-600/20 text-blue-600",
  },
]

export default function TechStack() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="tech-stack" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            My <span className="text-red-600">Tech Stack</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            These are the technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div
                className={`w-24 h-24 rounded-full ${tech.color} flex items-center justify-center mb-3 transition-transform duration-300 hover:scale-110`}
              >
                {tech.icon}
              </div>
              <h3 className="text-white font-medium">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

