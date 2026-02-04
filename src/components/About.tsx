'use client'

import { motion, useInView, useMotionTemplate, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle2, GraduationCap, Sparkles, Target, Trophy, TrendingUp, User2 } from 'lucide-react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useMemo, useRef, useState, type RefObject } from 'react'

const About = () => {
  type SectionId = 'overview' | 'strengths' | 'impact' | 'education'

  const containerRef = useRef<HTMLElement | null>(null)
  const overviewRef = useRef<HTMLDivElement | null>(null)
  const strengthsRef = useRef<HTMLDivElement | null>(null)
  const impactRef = useRef<HTMLDivElement | null>(null)
  const educationRef = useRef<HTMLDivElement | null>(null)

  const overviewInView = useInView(overviewRef, { amount: 0.55 })
  const strengthsInView = useInView(strengthsRef, { amount: 0.55 })
  const impactInView = useInView(impactRef, { amount: 0.55 })
  const educationInView = useInView(educationRef, { amount: 0.55 })

  const [activeSection, setActiveSection] = useState<SectionId>('overview')

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
  const glow = useMotionTemplate`radial-gradient(circle at ${glowX} ${glowY}, rgba(255,255,255,0.75), transparent 45%)`

  const strengths = useMemo(
    () => [
      {
        title: 'Responsive Design & Accessibility',
        description: 'Mobile-first layouts with accessibility-first patterns and semantic structure.',
        icon: Sparkles,
        color: 'from-primary-500 to-secondary-500'
      },
      {
        title: 'Performance & Core Web Vitals',
        description: 'Measurable performance gains via smart rendering, caching, and bundle strategy.',
        icon: TrendingUp,
        color: 'from-accent-500 to-primary-500'
      },
      {
        title: 'Real-time Apps',
        description: 'WebSockets, Socket.io, SSE with event-driven UI and resilient state updates.',
        icon: Target,
        color: 'from-secondary-500 to-accent-500'
      },
      {
        title: 'SEO & Modern SSR',
        description: 'Next/Nuxt SSR patterns, metadata hygiene, and content-driven architecture.',
        icon: Trophy,
        color: 'from-primary-500 to-accent-500'
      }
    ],
    []
  )

  const achievements = useMemo(
    () => [
      { title: 'Enterprise scale', text: 'Successfully handled 1000+ concurrent users in an enterprise application.' },
      { title: 'Engagement lift', text: 'Achieved 40% improvement in user engagement metrics with UI/UX optimizations.' },
      { title: 'SEO outcomes', text: 'Implemented 60% SEO ranking improvement for client websites.' },
      { title: 'Velocity gains', text: '30% reduction in development time through code optimization and reuse.' },
      { title: 'Global delivery', text: 'Delivered projects for international clients across Canada, Sweden, and UAE.' }
    ],
    []
  )

  const sections = useMemo<
    Array<{
      id: SectionId
      label: string
      icon: typeof User2
      ref: RefObject<HTMLDivElement | null>
    }>
  >(
    () => [
      { id: 'overview', label: 'Profile', icon: User2, ref: overviewRef },
      { id: 'strengths', label: 'Strengths', icon: Sparkles, ref: strengthsRef },
      { id: 'impact', label: 'Impact', icon: TrendingUp, ref: impactRef },
      { id: 'education', label: 'Education', icon: GraduationCap, ref: educationRef }
    ],
    []
  )

  const scrollToSection = (id: SectionId) => {
    const section = sections.find((s) => s.id === id)?.ref.current
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative pt-10 overflow-hidden bg-gradient-to-b from-white via-white to-gray-50 "
    >
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl font-bold text-gray-900 sm:text-5xl font-poppins"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-xl text-gray-600"
          >
            Passionate frontend developer with a strong engineering background and expertise in modern web technologies
          </motion.p>
        </div>

        <div className="grid gap-8 items-start lg:grid-cols-12">
          <motion.aside
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 lg:sticky lg:top-24"
          >
            <div className="overflow-hidden bg-white rounded-3xl border border-gray-100 shadow-sm">
              <div className="relative p-6 bg-gradient-to-br from-primary-50 to-secondary-50">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xl font-bold text-gray-900 font-poppins">Ahmad Salamah</div>
                    <div className="mt-1 text-sm text-gray-700">Senior Frontend Developer</div>
                  </div>
                  <div className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-primary-500 to-secondary-500">
                    5+ yrs
                  </div>
                </div>

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
                  style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 18 }}
                  className="relative mt-6 rounded-2xl"
                >
                  <motion.div className="absolute inset-0 rounded-2xl opacity-70" style={{ background: glow }} />
                  <div className="relative overflow-hidden rounded-2xl shadow-lg border border-white/60" style={{ transform: 'translateZ(0px)' }}>
                    <img src="/profile-pic.png" alt="Ahmad Salamah" className="object-contain w-full h-64" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10" />
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-3 mt-6">
                  {[
                    { label: 'Projects', value: '20+' },
                    { label: 'Countries', value: '3+' },
                    { label: 'Core Web Vitals', value: 'Focused' },
                    { label: 'Real-time', value: 'Experienced' }
                  ].map((stat) => (
                    <div key={stat.label} className="p-3 rounded-2xl border bg-white/70 border-white/70">
                      <div className="text-sm font-semibold text-gray-900">{stat.value}</div>
                      <div className="mt-1 text-xs text-gray-700">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="relative">
                  <div className="absolute left-3 top-0 bottom-0 w-px bg-gray-200" />
                  <motion.div
                    className="absolute left-3 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-primary-500 to-secondary-500"
                    style={{ scaleY: progress }}
                  />

                  <nav aria-label="About navigation" className="space-y-2">
                    {sections.map((section) => {
                      const isActive = activeSection === section.id
                      return (
                        <button
                          key={section.id}
                          type="button"
                          onClick={() => scrollToSection(section.id)}
                          className="relative flex items-center w-full gap-3 p-3 text-left rounded-2xl transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40"
                        >
                          {isActive && (
                            <motion.span
                              layoutId="about-stepper"
                              transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-50 to-secondary-50"
                            />
                          )}
                          <span className="relative flex items-center justify-center w-6 h-6">
                            <span
                              className={`absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border ${isActive ? 'bg-primary-600 border-primary-600' : 'bg-white border-gray-300'
                                }`}
                            />
                          </span>
                          <span
                            className={`relative inline-flex items-center gap-2 text-sm font-semibold ${isActive ? 'text-gray-900' : 'text-gray-700'
                              }`}
                          >
                            <section.icon size={16} />
                            {section.label}
                          </span>
                        </button>
                      )
                    })}
                  </nav>
                </div>

                <div className="mt-6">
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 text-sm font-semibold text-white rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    Let’s build something great <ArrowRight size={16} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.aside>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="space-y-6 lg:col-span-8"
          >
            <div ref={overviewRef} className="scroll-mt-28">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="p-7 bg-white rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase">Profile</div>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900">Senior Frontend Developer & JavaScript Specialist</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'Vue', 'Nuxt', 'TypeScript'].map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-semibold text-gray-700 rounded-full border border-gray-200 bg-gray-50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 mt-6 md:grid-cols-2">
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      Senior Frontend Developer with 5+ years of experience building scalable web applications and e‑commerce
                      platforms. Expert in React, Next.js, Vue.js, Nuxt.js, and TypeScript, with a focus on intuitive UI and
                      measurable performance improvements.
                    </p>
                    <p className="leading-relaxed">
                      Strong engineering background and a system‑level approach to problem solving. I collaborate with distributed
                      teams and prioritize maintainability, accessibility, and business outcomes.
                    </p>
                  </div>

                  <div className="grid gap-4">
                    {[
                      { icon: CheckCircle2, title: 'Clean UI systems', text: 'Reusable components and consistent patterns.' },
                      { icon: TrendingUp, title: 'Performance mindset', text: 'Optimize for Core Web Vitals and UX metrics.' },
                      { icon: Target, title: 'Real-time UX', text: 'Event-driven interfaces with resilient state updates.' }
                    ].map((item) => (
                      <div key={item.title} className="flex gap-3 items-start p-4 rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white">
                        <div className="flex items-center justify-center min-w-10 min-h-10 rounded-2xl bg-primary-500/10 text-primary-700">
                          <item.icon size={18} />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900">{item.title}</div>
                          <div className="mt-1 text-sm text-gray-700">{item.text}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div ref={strengthsRef} className="scroll-mt-28">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="p-7 bg-white rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase">Strengths</div>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900">What I bring to the team</h3>
                  </div>
                </div>

                <div className="grid gap-4 mt-6 md:grid-cols-2">
                  {strengths.map((s) => (
                    <motion.div
                      key={s.title}
                      whileHover={{ y: -6 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className="relative overflow-hidden p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-lg"
                    >
                      <div className={`absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${s.color}`} />
                      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_55%)]" />
                      <div className="relative flex items-start gap-3">
                        <div className="flex items-center justify-center min-w-10 min-h-10 rounded-2xl bg-white/80 border border-white/50">
                          <s.icon size={18} className="text-gray-900" />
                        </div>
                        <div>
                          <div className="text-base font-bold text-gray-900">{s.title}</div>
                          <div className="mt-1 text-sm text-gray-700 leading-relaxed">{s.description}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div ref={impactRef} className="scroll-mt-28">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="p-7 bg-white rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="flex flex-wrap items-end justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase">Impact</div>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900">Proof through outcomes</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: 'Concurrency', value: '1000+' },
                      { label: 'Engagement', value: '+40%' },
                      { label: 'SEO', value: '+60%' }
                    ].map((s) => (
                      <div key={s.label} className="px-4 py-2 rounded-2xl border border-gray-100 bg-gradient-to-br from-primary-50 to-secondary-50">
                        <div className="text-sm font-bold text-gray-900">{s.value}</div>
                        <div className="text-xs font-semibold text-gray-700">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    slidesPerView={1}
                    spaceBetween={16}
                    breakpoints={{
                      768: { slidesPerView: 2, spaceBetween: 16 },
                      1024: { slidesPerView: 2, spaceBetween: 20 }
                    }}
                  >
                    {achievements.map((a) => (
                      <SwiperSlide key={a.title}>
                        <div className="h-full p-6 bg-gray-50 rounded-3xl border border-gray-100">
                          <div className="flex items-start gap-3">
                            <div className="flex items-center justify-center min-w-10 min-h-10 rounded-2xl bg-white border border-gray-200 text-accent-700">
                              <CheckCircle2 size={18} />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-gray-900">{a.title}</div>
                              <div className="mt-2 text-sm text-gray-700 leading-relaxed">{a.text}</div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </motion.div>
            </div>

            <div ref={educationRef} className="scroll-mt-28">
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="p-7 bg-white rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-xs font-semibold tracking-wide text-gray-500 uppercase">Education</div>
                    <h3 className="mt-2 text-2xl font-bold text-gray-900">Academic background</h3>
                  </div>
                </div>

                <div className="grid gap-4 mt-6 md:grid-cols-2">
                  {[
                    { title: 'Master of Web Technology', place: 'Syrian Virtual University', period: '2021 – Present', accent: 'bg-accent-500/10 text-accent-700' },
                    {
                      title: 'Bachelor of Computer and Automatic Control Engineering',
                      place: 'Tishreen University',
                      period: '2020',
                      accent: 'bg-primary-500/10 text-primary-700'
                    }
                  ].map((edu) => (
                    <motion.div
                      key={edu.title}
                      whileHover={{ y: -4 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                      className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex items-center justify-center min-w-10 min-h-10 rounded-2xl ${edu.accent}`}>
                          <GraduationCap size={18} />
                        </div>
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
    </section>
  )
}

export default About

