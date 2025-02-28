"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Front End Developer Intern",
    company: "BEfied (fka Edufied)",
    location: "Remote (Singapore)",
    period: "Aug 2024 – Oct 2024",
    description:
      "Worked closely with lead developers to design products and solutions to different user and infrastructure problems as well as communicating design ideas using user flows, process flows, site maps, and wireframes.",
  },
  {
    title: "Front End Developer Intern",
    company: "BlastAsia, Inc.",
    location: "Remote",
    period: "May 2024 – July 2024",
    description:
      "Worked with the web development team and assisted in designing and implementing user interfaces for web applications, collaborating with the development team to enhance user experience and ensure seamless functionality.",
  },
  {
    title: "IT Intern",
    company: "CloudSwyft Global Systems, Inc.",
    location: "Remote",
    period: "Feb 2024 - Apr 2024",
    description:
      "UI/UX designing with the development team and provided platform support by troubleshooting issues, as well as assisting with system configurations.",
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work <span className="text-red-600">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-red-600/30"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-black z-10"></div>

                {/* Content */}
                <div className="md:w-1/2 ml-8 md:ml-0 md:px-8">
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-red-600/50 transition-all duration-300 h-full">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-red-600/20 rounded-full mr-4">
                        <Briefcase className="h-6 w-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-red-500">{exp.company}</p>
                      </div>
                    </div>
                    <div className="mb-4 flex justify-between text-sm text-gray-400">
                      <span>{exp.location}</span>
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                </div>

                {/* Empty div for layout on mobile */}
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

