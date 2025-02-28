"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-red-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="w-full max-w-md mx-auto aspect-[2/3] bg-gradient-to-tr from-red-600 to-red-900 rounded-lg overflow-hidden relative shadow-xl p-1">
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img
                  src="/images/graduation-portrait.jpg"
                  alt="Red Tañag - Graduation Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-600/20 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-red-600/20 rounded-full blur-xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4">Frontend Engineer & UI/UX Enthusiast</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I&apos;m a passionate frontend engineer currently working at Digiteer Software Solutions Inc. With a
              strong foundation in computer engineering from Mapua University, I specialize in creating responsive,
              user-friendly web applications that combine aesthetic appeal with functional excellence.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My journey in web development is driven by a love for coding and a commitment to staying at the forefront
              of frontend technologies. I enjoy the creative process of transforming designs into interactive
              experiences and am constantly exploring new ways to enhance user interfaces.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-400">
                  <span className="font-semibold text-red-500">Name:</span> Red Tañag
                </p>
              </div>
              <div>
                <p className="text-gray-400">
                  <span className="font-semibold text-red-500">Email:</span> rebekahtanag19@gmail.com
                </p>
              </div>
              <div>
                <p className="text-gray-400">
                  <span className="font-semibold text-red-500">Phone:</span> +63 945 830 6201
                </p>
              </div>
              <div>
                <p className="text-gray-400">
                  <span className="font-semibold text-red-500">Location:</span> Cavite City, Philippines
                </p>
              </div>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

