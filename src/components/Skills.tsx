'use client'

import { motion } from 'framer-motion'
const Skills = () => {
  const technologies = [
    { name: 'JavaScript', icon: '🟨' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'React', icon: '⚛️' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Nuxt.js', icon: '🔺' },
    { name: 'TailwindCSS', icon: '🎨' },
    { name: 'Shadcn UI', icon: '✨' },
    { name: 'Bootstrap', icon: '🅱️' },
    { name: 'Git', icon: '📝' },
    { name: 'WebSocket', icon: '🔌' },
    { name: 'Redux', icon: '🔄' },
    { name: 'Vuex', icon: '🗃️' },
    { name: 'Pinia', icon: '🍍' },
    { name: 'React Query', icon: '🔍' },
    { name: 'GraphQL', icon: '🧬' },
    { name: 'Axios', icon: '📡' },
    { name: 'Figma', icon: '🎨' },
    { name: 'Adobe XD', icon: '🖌️' },
    { name: 'PNPM', icon: '📦' },
  ]

  return (
    <section id="skills" className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold font-poppins text-gray-900 mb-4"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Expertise in modern web technologies and frameworks with a focus on performance and user experience
          </motion.p>
        </div>

        {/* Technology Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-2 bg-gradient-to-r from-gray-50 to-gray-100 px-4 py-2 rounded-full border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all duration-300"
              >
                <span className="text-lg">{tech.icon}</span>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

