"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "BS Computer Engineering",
    institution: "Mapua University",
    period: "Aug 2020 – May 2025",
    description:
      "Currently pursuing a Bachelor's degree in Computer Engineering with a focus on software development and engineering principles.",
  },
  {
    degree: "Senior High School",
    institution: "Cavite National High School",
    period: "2018 - 2019",
    description:
      "Completed senior high school education with a focus on STEM (Science, Technology, Engineering, and Mathematics).",
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-red-600">Education</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-red-600/50 transition-all duration-300 h-full">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-red-600/20 rounded-full mr-4">
                    <GraduationCap className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-red-500">{edu.institution}</p>
                  </div>
                </div>
                <div className="mb-4 text-sm text-gray-400">
                  <span>{edu.period}</span>
                </div>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4">Research Projects</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-red-500">
                  Asian Currency Identification and Recognition using Lightweight Convolutional Neural Network
                </h4>
                <p className="text-gray-400 text-sm mb-2">2023 - 2024</p>
                <p className="text-gray-300">
                  The project focuses on developing a system to accurately identify and recognize various Asian
                  currencies in real-time using a compact and optimized convolutional neural network.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-red-500">
                  YOLOv8 Implementation for Web Application in Asian Currency Identification and Recognition using
                  Streamlit
                </h4>
                <p className="text-gray-400 text-sm mb-2">2023 - 2024</p>
                <p className="text-gray-300">
                  This project involves developing a web application that utilizes YOLOv8's object detection
                  capabilities to accurately identify and recognize various Asian currencies by uploading images.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

