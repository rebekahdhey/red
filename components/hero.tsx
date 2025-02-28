"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-red-600/10 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <h2 className="text-xl md:text-2xl font-medium text-red-500">Hello, I&apos;m</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Red </span>
            <span className="text-red-600">Tañag</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 h-16"
        >
          <TypeAnimation
            sequence={["Frontend Engineer", 2000, "UI/UX Enthusiast", 2000, "Web Developer", 2000]}
            wrapper="span"
            speed={50}
            repeat={Number.POSITIVE_INFINITY}
            className="text-red-500 font-medium"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link
            href="#contact"
            className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
          >
            Contact Me
          </Link>
          <Link
            href="#projects"
            className="px-6 py-3 bg-transparent border border-red-600 text-red-500 rounded-md hover:bg-red-600/10 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </Link>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <Link href="#about">
          <ChevronDown className="h-8 w-8 text-red-500" />
        </Link>
      </motion.div>
    </section>
  )
}

