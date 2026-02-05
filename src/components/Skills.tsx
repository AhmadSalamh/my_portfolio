'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Code, Palette, Database, Wrench, Sparkles, X, CheckCircle2, TrendingUp, type LucideIcon } from 'lucide-react'

type CategoryId = 'all' | 'frameworks' | 'styling' | 'state' | 'tools'

type Category = {
  id: CategoryId
  label: string
  icon: LucideIcon
  color: string
}

type Technology = {
  name: string
  icon: string
  category: Exclude<CategoryId, 'all'>
  level: number
  description: string
  experience: string
}

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all')
  const [selectedSkill, setSelectedSkill] = useState<Technology | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  const categories: Category[] = [
    { id: 'all', label: 'All Skills', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 'frameworks', label: 'Frameworks', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { id: 'styling', label: 'Styling', icon: Palette, color: 'from-green-500 to-emerald-500' },
    { id: 'state', label: 'State & Data', icon: Database, color: 'from-orange-500 to-red-500' },
    { id: 'tools', label: 'Tools', icon: Wrench, color: 'from-purple-500 to-pink-500' }
  ]

  const technologies: Technology[] = [
    {
      name: 'JavaScript',
      icon: '🟨',
      category: 'frameworks',
      level: 95,
      description: 'Expert in modern ES6+ features, async patterns, and functional programming',
      experience: '5+ years',
    },
    {
      name: 'TypeScript',
      icon: '🔷',
      category: 'frameworks',
      level: 90,
      description: 'Strong typing, interfaces, generics, and type-safe development',
      experience: '4+ years',
    },
    {
      name: 'React',
      icon: '⚛️',
      category: 'frameworks',
      level: 95,
      description: 'Hooks, Context API, performance optimization, and modern patterns',
      experience: '5+ years',
    },
    {
      name: 'Next.js',
      icon: '▲',
      category: 'frameworks',
      level: 90,
      description: 'SSR, SSG, API routes, App Router, and performance optimization',
      experience: '3+ years',
    },
    {
      name: 'Vue.js',
      icon: '💚',
      category: 'frameworks',
      level: 92,
      description: 'Composition API, reactivity system, and component architecture',
      experience: '4+ years',
    },
    {
      name: 'Nuxt.js',
      icon: '🔺',
      category: 'frameworks',
      level: 88,
      description: 'Universal rendering, modules, and SEO optimization',
      experience: '3+ years',
    },
    {
      name: 'TailwindCSS',
      icon: '🎨',
      category: 'styling',
      level: 95,
      description: 'Utility-first approach, custom configurations, and design systems',
      experience: '4+ years',
    },
    {
      name: 'Shadcn UI',
      icon: '✨',
      category: 'styling',
      level: 85,
      description: 'Component library integration and customization',
      experience: '2+ years',
    },
    {
      name: 'Bootstrap',
      icon: '🅱️',
      category: 'styling',
      level: 88,
      description: 'Grid system, components, and responsive design patterns',
      experience: '5+ years',
    },
    {
      name: 'Redux',
      icon: '🔄',
      category: 'state',
      level: 90,
      description: 'State management, middleware, Redux Toolkit, and best practices',
      experience: '4+ years',
    },
    {
      name: 'Vuex',
      icon: '🗃️',
      category: 'state',
      level: 88,
      description: 'Centralized state management for Vue applications',
      experience: '3+ years',
    },
    {
      name: 'Pinia',
      icon: '🍍',
      category: 'state',
      level: 85,
      description: 'Modern Vue state management with composition API support',
      experience: '2+ years',
    },
    {
      name: 'React Query',
      icon: '🔍',
      category: 'state',
      level: 87,
      description: 'Server state management, caching, and data synchronization',
      experience: '3+ years',
    },
    {
      name: 'GraphQL',
      icon: '🧬',
      category: 'state',
      level: 82,
      description: 'Query language, Apollo Client, and schema design',
      experience: '2+ years',
    },
    {
      name: 'Axios',
      icon: '📡',
      category: 'state',
      level: 93,
      description: 'HTTP client, interceptors, and API integration',
      experience: '5+ years',
    },
    {
      name: 'WebSocket',
      icon: '🔌',
      category: 'state',
      level: 85,
      description: 'Real-time communication, Socket.io, and event-driven architecture',
      experience: '3+ years',
    },
    {
      name: 'Git',
      icon: '📝',
      category: 'tools',
      level: 92,
      description: 'Version control, branching strategies, and collaboration workflows',
      experience: '5+ years',
    },
    {
      name: 'Figma',
      icon: '🎨',
      category: 'tools',
      level: 88,
      description: 'Design systems, prototyping, and design-to-code workflows',
      experience: '4+ years',
    },
    {
      name: 'Adobe XD',
      icon: '🖌️',
      category: 'tools',
      level: 80,
      description: 'UI/UX design, wireframing, and interactive prototypes',
      experience: '3+ years',
    },
    {
      name: 'PNPM',
      icon: '📦',
      category: 'tools',
      level: 90,
      description: 'Fast, disk space efficient package manager',
      experience: '3+ years',
    },
  ]

  const filteredTechnologies = selectedCategory === 'all'
    ? technologies
    : technologies.filter(tech => tech.category === selectedCategory)


  return (
    <section id="skills" className="overflow-hidden relative py-10 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Animated background */}
      <div className="overflow-hidden absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br rounded-full blur-3xl from-purple-200/20 to-pink-200/20"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -right-1/4 -bottom-1/4 w-96 h-96 bg-gradient-to-br rounded-full blur-3xl from-blue-200/20 to-cyan-200/20"
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-2 text-3xl font-bold text-gray-900 sm:text-5xl"
          >
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl"
          >
            Expertise in modern web technologies with a focus on performance and user experience
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-8"
        >
          {categories.map((cat, idx) => {
            const isActive = selectedCategory === cat.id
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-full border-2 font-semibold text-sm transition-all duration-300 ${isActive
                  ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 border-transparent shadow-lg'
                  : 'text-gray-700 bg-white border-gray-200 shadow-sm hover:border-purple-300'
                  }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="flex relative z-10 gap-2 items-center">
                  <cat.icon size={16} />
                  {cat.label}
                </span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-4 rounded-3xl border border-gray-200 shadow-xl backdrop-blur-sm bg-white/80 md:p-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-3 justify-center md:gap-4"
            >
              {filteredTechnologies.map((tech, index) => {
                const isHovered = hoveredSkill === index
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    whileHover={{ scale: 1.1, y: -8 }}
                    whileTap={{ scale: 0.95 }}
                    onHoverStart={() => setHoveredSkill(index)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    onClick={() => setSelectedSkill(tech)}
                    className="relative cursor-pointer group"
                  >
                    <div className="flex gap-2 items-center px-5 py-3 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 transition-all duration-300 hover:border-purple-300 hover:shadow-xl md:px-6 md:py-3">
                      <motion.span
                        animate={{ rotate: isHovered ? 360 : 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xl md:text-2xl"
                      >
                        {tech.icon}
                      </motion.span>
                      <span className="text-sm font-semibold text-gray-700 md:text-base">{tech.name}</span>

                      {/* Proficiency indicator */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: isHovered ? '100%' : 0 }}
                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      />
                    </div>

                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Click to view details hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 text-sm text-center text-gray-500"
          >
            Click on any skill to view details
          </motion.div>
        </motion.div>
      </div>

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            className="flex fixed inset-0 z-50 justify-center items-center p-4 backdrop-blur-sm bg-black/50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="overflow-hidden relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl"
            >
              {/* Header with gradient */}
              <div className="relative p-6 bg-gradient-to-br from-purple-500 to-pink-500 md:p-8">
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 p-2 rounded-full transition-colors text-white/80 hover:bg-white/20 hover:text-white"
                >
                  <X size={20} />
                </button>

                <div className="flex gap-4 items-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="flex justify-center items-center w-16 h-16 text-4xl rounded-2xl shadow-lg backdrop-blur-sm bg-white/20"
                  >
                    {selectedSkill.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">{selectedSkill.name}</h3>
                    <p className="mt-1 text-white/90">Professional expertise</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Proficiency bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-700">Proficiency Level</span>
                    <span className="text-sm font-bold text-purple-600">{selectedSkill.level}%</span>
                  </div>
                  <div className="overflow-hidden h-3 bg-gray-100 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="p-4 mb-6 bg-gray-50 rounded-2xl">
                  <p className="leading-relaxed text-gray-700">{selectedSkill.description}</p>
                </div>

                {/* Stats grid */}
                <div className="grid gap-4">
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                    <div className="mb-1 text-xs font-semibold text-gray-500 uppercase">Experience</div>
                    <div className="text-2xl font-bold text-gray-900">{selectedSkill.experience}</div>
                  </div>

                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Skills
