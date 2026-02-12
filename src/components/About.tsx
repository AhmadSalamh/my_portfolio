'use client'

import { motion, useInView, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, GraduationCap, Sparkles, Target, Trophy, TrendingUp, User2, Code, Zap, Globe, Award, X, ExternalLink, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useMemo, useRef, useState } from 'react'

type SectionId = 'overview' | 'strengths' | 'impact' | 'education'

type Strength = {
  id: number
  title: string
  description: string
  icon: LucideIcon
  color: string
  details: string
  skills: string[]
}

type Achievement = {
  title: string
  text: string
  icon: LucideIcon
  stat: string
}

type Stat = {
  label: string
  value: string
  description: string
  color: string
}

type Section = {
  id: SectionId
  label: string
  icon: LucideIcon
  ref: React.RefObject<HTMLDivElement>
}

const About = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const overviewRef = useRef<HTMLDivElement | null>(null)
  const strengthsRef = useRef<HTMLDivElement | null>(null)
  const impactRef = useRef<HTMLDivElement | null>(null)
  const educationRef = useRef<HTMLDivElement | null>(null)

  const overviewInView = useInView(overviewRef, { amount: 0.55 })
  const strengthsInView = useInView(strengthsRef, { amount: 0.55 })
  const impactInView = useInView(impactRef, { amount: 0.55 })
  const educationInView = useInView(educationRef, { amount: 0.55 })

  const [activeSection, setActiveSection] = useState<SectionId>('overview')
  const [selectedStrength, setSelectedStrength] = useState<Strength | null>(null)
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)
  const [currentAchievement, setCurrentAchievement] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (educationInView) setActiveSection('education')
    else if (impactInView) setActiveSection('impact')
    else if (strengthsInView) setActiveSection('strengths')
    else if (overviewInView) setActiveSection('overview')
  }, [educationInView, impactInView, strengthsInView, overviewInView])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 35, mass: 0.2 })

  const tiltX = useMotionValue(0)
  const tiltY = useMotionValue(0)
  const rotateX = useTransform(tiltY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(tiltX, [-0.5, 0.5], [-12, 12])
  const glowX = useTransform(tiltX, [-0.5, 0.5], ['30%', '70%'])
  const glowY = useTransform(tiltY, [-0.5, 0.5], ['30%', '70%'])
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(147, 51, 234, 0.3), transparent 60%)`

  const strengths = useMemo<Strength[]>(
    () => [
      {
        id: 1,
        title: 'Responsive Design & Accessibility',
        description: 'Mobile-first layouts with accessibility-first patterns and semantic structure.',
        icon: Sparkles,
        color: 'from-purple-500 to-pink-500',
        details: 'WCAG 2.1 AA compliant, keyboard navigation, screen reader optimization, and responsive across all devices.',
        skills: ['Flexbox/Grid', 'Media Queries', 'ARIA', 'Semantic HTML']
      },
      {
        id: 2,
        title: 'Performance & Core Web Vitals',
        description: 'Measurable performance gains via smart rendering, caching, and bundle strategy.',
        icon: TrendingUp,
        color: 'from-blue-500 to-cyan-500',
        details: 'Optimize LCP, FID, CLS. Code splitting, lazy loading, image optimization, and caching strategies.',
        skills: ['Lighthouse', 'Bundle Analysis', 'Lazy Loading', 'CDN Strategy']
      },
      {
        id: 3,
        title: 'Real-time Apps',
        description: 'WebSockets, Socket.io, SSE with event-driven UI and resilient state updates.',
        icon: Target,
        color: 'from-green-500 to-emerald-500',
        details: 'Build collaborative tools, live dashboards, and chat applications with seamless real-time updates.',
        skills: ['WebSockets', 'Socket.io', 'SSE', 'Redis']
      },
      {
        id: 4,
        title: 'SEO & Modern SSR',
        description: 'Next/Nuxt SSR patterns, metadata hygiene, and content-driven architecture.',
        icon: Trophy,
        color: 'from-orange-500 to-red-500',
        details: 'Server-side rendering, dynamic meta tags, structured data, and optimal crawlability.',
        skills: ['Next.js', 'Nuxt.js', 'Meta Tags', 'Schema Markup']
      }
    ],
    []
  )

  const achievements = useMemo<Achievement[]>(
    () => [
      { title: 'Enterprise Scale', text: 'Successfully handled 1000+ concurrent users in an enterprise application.', icon: Globe, stat: '1000+' },
      { title: 'Engagement Lift', text: 'Achieved 40% improvement in user engagement metrics with UI/UX optimizations.', icon: TrendingUp, stat: '+40%' },
      { title: 'SEO Outcomes', text: 'Implemented 60% SEO ranking improvement for client websites.', icon: Award, stat: '+60%' },
      { title: 'Velocity Gains', text: '30% reduction in development time through code optimization and reuse.', icon: Zap, stat: '+30%' },
      { title: 'Global Delivery', text: 'Delivered projects for international clients across Canada, Sweden, and UAE.', icon: Globe, stat: '3+' }
    ],
    []
  )

  const stats: Stat[] = [
    { label: 'Projects', value: '20+', description: 'Successfully delivered', color: 'from-purple-500 to-pink-500' },
    { label: 'Countries', value: '3+', description: 'Global reach', color: 'from-blue-500 to-cyan-500' },
    { label: 'Core Web Vitals', value: '95+', description: 'Performance score', color: 'from-green-500 to-emerald-500' },
    { label: 'Real-time', value: '100%', description: 'Uptime achieved', color: 'from-orange-500 to-red-500' }
  ]

  const sections: Section[] = [
    { id: 'overview', label: 'Profile', icon: User2, ref: overviewRef },
    { id: 'strengths', label: 'Strengths', icon: Sparkles, ref: strengthsRef },
    { id: 'impact', label: 'Impact', icon: TrendingUp, ref: impactRef },
    { id: 'education', label: 'Education', icon: GraduationCap, ref: educationRef }
  ]

  const scrollToSection = (id: SectionId) => {
    const section = sections.find((s) => s.id === id)?.ref.current
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Auto-advance achievements
  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setCurrentAchievement((prev) => (prev + 1) % achievements.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlay, achievements.length])

  return (
    <section
      id="about"
      ref={containerRef}
      className="overflow-hidden relative py-6 bg-gradient-to-b from-white via-gray-50 to-white md:py-10"
    >
      {/* Animated background elements */}
      <div className="overflow-hidden absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-gradient-to-br rounded-full blur-3xl from-purple-200/30 to-pink-200/30"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br rounded-full blur-3xl from-blue-200/30 to-cyan-200/30"
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-6 text-center sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-2 text-3xl font-bold text-gray-900 sm:text-5xl"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl"
          >
            Passionate frontend developer with expertise in modern web technologies
          </motion.p>
        </div>

        <div className="grid gap-8 items-start lg:grid-cols-12">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl backdrop-blur-sm bg-white/80">
              <div className="relative p-4 bg-gradient-to-br from-purple-50 to-pink-50 md:p-6">
                <div className="flex gap-3 justify-between items-start">
                  <div>
                    <div className="text-xl font-bold text-gray-900">Ahmad Salamh</div>
                    <div className="mt-1 text-sm text-gray-700">Senior Frontend Developer</div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg"
                  >
                    6+ yrs
                  </motion.div>
                </div>

                {/* Interactive profile image */}
                <motion.div
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect()
                    const x = (e.clientX - rect.left) / rect.width - 0.5
                    const y = (e.clientY - rect.top) / rect.height - 0.5
                    tiltX.set(x)
                    tiltY.set(y)
                  }}
                  onMouseLeave={() => {
                    tiltX.set(0)
                    tiltY.set(0)
                  }}
                  whileHover={{ scale: 1.02 }}
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                  }}
                  transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                  className="relative mt-6 rounded-2xl cursor-pointer"
                >
                  <motion.div className="absolute inset-0 rounded-2xl opacity-50" style={{ background: glow }} />
                  <div className="overflow-hidden relative rounded-2xl border shadow-2xl transform-gpu border-white/60">
                    <Image
                      src="/profile-pic.png"
                      alt="Ahmad Salamh"
                      width={400}
                      height={400}
                      className="object-contain w-full h-64"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-pink-500/10" />
                  </div>
                </motion.div>

                {/* Interactive stats grid */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  {stats.map((stat, idx) => (
                    <motion.div
                      key={stat.label}
                      whileHover={{ scale: 1.05, y: -2 }}
                      onHoverStart={() => setHoveredStat(idx)}
                      onHoverEnd={() => setHoveredStat(null)}
                      className="overflow-hidden relative p-3 rounded-2xl border shadow-sm cursor-pointer bg-white/90 border-white/70"
                    >
                      <AnimatePresence>
                        {hoveredStat === idx && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-10`}
                          />
                        )}
                      </AnimatePresence>
                      <div className="relative">
                        <div className="text-sm font-semibold text-gray-900">{stat.value}</div>
                        <div className="mt-1 text-xs text-gray-700">
                          {hoveredStat === idx ? stat.description : stat.label}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Navigation with progress indicator */}
              <div className="p-4 md:p-6">
                <div className="relative">
                  <div className="absolute top-0 bottom-0 left-3 w-px bg-gray-200" />
                  <motion.div
                    className="absolute top-0 bottom-0 left-3 w-px bg-gradient-to-b from-purple-500 to-pink-500 origin-top"
                    style={{ scaleY: progress }}
                  />

                  <nav className="space-y-2">
                    {sections.map((section) => {
                      const isActive = activeSection === section.id
                      return (
                        <motion.button
                          key={section.id}
                          type="button"
                          onClick={() => scrollToSection(section.id)}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex relative gap-3 items-center p-3 w-full text-left rounded-2xl transition-all duration-200"
                        >
                          {isActive && (
                            <motion.span
                              layoutId="about-stepper"
                              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                              className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl"
                            />
                          )}
                          <span className="flex relative justify-center items-center w-6 h-6">
                            <motion.span
                              animate={{
                                scale: isActive ? [1, 1.2, 1] : 1,
                              }}
                              transition={{ duration: 0.3 }}
                              className={`absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 ${isActive ? 'bg-purple-600 border-purple-600 shadow-lg shadow-purple-300' : 'bg-white border-gray-300'
                                }`}
                            />
                          </span>
                          <span className={`relative inline-flex items-center gap-2 text-sm font-semibold ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                            <section.icon size={16} />
                            {section.label}
                          </span>
                        </motion.button>
                      )
                    })}
                  </nav>
                </div>

                <div className="mt-6">
                  <motion.a
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="inline-flex gap-2 justify-center items-center px-5 py-3 w-full text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    Let's build something great <ArrowRight size={16} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 lg:col-span-8"
          >
            {/* Overview Section */}
            <div ref={overviewRef} className="scroll-mt-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 rounded-3xl border border-gray-200 shadow-xl backdrop-blur-sm bg-white/80 md:p-7"
              >
                <div className="flex flex-wrap gap-4 justify-between items-end">
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase">Profile</div>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900">Senior Frontend Developer</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Vue', 'Nuxt', 'TypeScript'].map((tag, idx) => (
                      <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        transition={{ delay: idx * 0.1 }}
                        className="px-3 py-1 text-xs font-semibold text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full border border-gray-200 shadow-sm cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 mt-6 md:grid-cols-2">
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      Senior Frontend Developer with 6+ years of experience building scalable web applications and e-commerce platforms.
                    </p>
                    <p className="leading-relaxed">
                      Strong engineering background with a focus on performance, accessibility, and business outcomes.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {[
                      { icon: CheckCircle2, title: 'Clean UI systems', text: 'Reusable components' },
                      { icon: TrendingUp, title: 'Performance mindset', text: 'Core Web Vitals focus' },
                      { icon: Target, title: 'Real-time UX', text: 'Event-driven interfaces' }
                    ].map((item, idx) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-3 items-start p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 shadow-sm"
                      >
                        <div className="flex justify-center items-center text-purple-700 rounded-2xl min-w-10 min-h-10 bg-purple-500/10">
                          <item.icon size={18} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900">{item.title}</div>
                          <div className="mt-1 text-sm text-gray-700">{item.text}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Interactive Strengths Section */}
            <div ref={strengthsRef} className="scroll-mt-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 rounded-3xl border border-gray-200 shadow-xl backdrop-blur-sm bg-white/80 md:p-7"
              >
                <div className="flex gap-4 justify-between items-end">
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase">Strengths</div>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900">Click to explore details</h3>
                  </div>
                </div>

                <div className="grid gap-4 mt-6 md:grid-cols-2">
                  {strengths.map((s, idx) => (
                    <motion.div
                      key={s.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ y: -6, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => setSelectedStrength(s)}
                      className="overflow-hidden relative p-4 bg-white rounded-3xl border border-gray-100 shadow-sm cursor-pointer md:p-6 hover:shadow-xl group"
                    >
                      <motion.div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${s.color}`}
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 0.1 }}
                      />
                      <div className="flex relative gap-3 items-start">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="flex justify-center items-center rounded-2xl border shadow-sm min-w-10 min-h-10 bg-white/80 border-white/50"
                        >
                          <s.icon size={18} className="text-gray-900" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div className="text-base font-bold text-gray-900">{s.title}</div>
                            <ExternalLink size={14} className="text-gray-400 opacity-0 transition-opacity group-hover:opacity-100" />
                          </div>
                          <div className="mt-1 text-sm leading-relaxed text-gray-700">{s.description}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Interactive Impact Section */}
            <div ref={impactRef} className="scroll-mt-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 rounded-3xl border border-gray-200 shadow-xl backdrop-blur-sm bg-white/80 md:p-7"
              >
                <div className="flex flex-wrap gap-4 justify-between items-end">
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase">Impact</div>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900">Proof through outcomes</h3>
                  </div>
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsAutoPlay(!isAutoPlay)}
                      className={`px-3 py-1 text-xs font-semibold rounded-full border transition-colors ${isAutoPlay ? 'text-white bg-purple-500 border-purple-500' : 'text-gray-700 bg-white border-gray-200'
                        }`}
                    >
                      {isAutoPlay ? 'Auto' : 'Manual'}
                    </motion.button>
                  </div>
                </div>

                {/* Interactive achievement carousel */}
                <div className="mt-6">
                  <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 min-h-[200px]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentAchievement}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center text-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="flex justify-center items-center mb-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg"
                        >
                          {(() => {
                            const Icon = achievements[currentAchievement].icon
                            return <Icon size={28} className="text-white" />
                          })()}
                        </motion.div>
                        <div className="mb-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                          {achievements[currentAchievement].stat}
                        </div>
                        <div className="mb-2 text-lg font-bold text-gray-900">
                          {achievements[currentAchievement].title}
                        </div>
                        <div className="max-w-md text-sm text-gray-700">
                          {achievements[currentAchievement].text}
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation dots */}
                    <div className="flex gap-2 justify-center mt-6">
                      {achievements.map((_, idx) => (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => {
                            setCurrentAchievement(idx)
                            setIsAutoPlay(false)
                          }}
                          className={`h-2 rounded-full transition-all ${idx === currentAchievement ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500' : 'w-2 bg-gray-300'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Education Section */}
            <div ref={educationRef} className="scroll-mt-28">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 rounded-3xl border border-gray-200 shadow-xl backdrop-blur-sm bg-white/80 md:p-7"
              >
                <div className="flex gap-4 justify-between items-end">
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase">Education</div>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900">Academic background</h3>
                  </div>
                </div>

                <div className="grid gap-4 mt-6 md:grid-cols-2">
                  {[
                    { title: 'Master of Web Technology', place: 'Syrian Virtual University', period: '2021 — Present', accent: 'from-orange-500 to-red-500' },
                    { title: 'Bachelor of Computer Engineering', place: 'Tishreen University', period: '2020', accent: 'from-purple-500 to-pink-500' }
                  ].map((edu, idx) => (
                    <motion.div
                      key={edu.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-4 bg-white rounded-3xl border border-gray-100 shadow-sm md:p-6 hover:shadow-lg"
                    >
                      <div className="flex gap-3 items-start">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={`flex justify-center items-center rounded-2xl min-w-10 min-h-10 bg-gradient-to-br ${edu.accent} bg-opacity-10`}
                        >
                          <GraduationCap size={18} className="text-gray-900" />
                        </motion.div>
                        <div>
                          <div className="text-base font-bold text-gray-900">{edu.title}</div>
                          <div className="mt-1 text-sm font-semibold text-gray-700">{edu.place}</div>
                          <div className="mt-1 text-sm text-gray-600">{edu.period}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Strength Detail Modal */}
      <AnimatePresence>
        {selectedStrength && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStrength(null)}
            className="flex fixed inset-0 z-50 justify-center items-center p-4 backdrop-blur-sm bg-black/50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative p-6 w-full max-w-2xl bg-white rounded-3xl shadow-2xl md:p-8"
            >
              <button
                onClick={() => setSelectedStrength(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 rounded-full transition-colors hover:bg-gray-100 hover:text-gray-600"
              >
                <X size={20} />
              </button>

              <div className="flex gap-4 items-start mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className={`flex justify-center items-center rounded-2xl min-w-14 min-h-14 bg-gradient-to-br ${selectedStrength.color}`}
                >
                  <selectedStrength.icon size={24} className="text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedStrength.title}</h3>
                  <p className="mt-2 text-gray-700">{selectedStrength.description}</p>
                </div>
              </div>

              <div className="p-4 mb-6 bg-gray-50 rounded-2xl">
                <p className="leading-relaxed text-gray-700">{selectedStrength.details}</p>
              </div>

              <div>
                <div className="mb-3 text-sm font-semibold text-gray-500 uppercase">Key Skills</div>
                <div className="flex flex-wrap gap-2">
                  {selectedStrength.skills.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className={`px-4 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r ${selectedStrength.color} shadow-lg`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default About
