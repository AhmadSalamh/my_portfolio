'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'

const About = dynamic(() => import('@/components/About'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false })
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })

export default function Home() {
  const reduceMotion = useReducedMotion()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => setIsLoading(false), 1200)
    return () => window.clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    if (isLoading) return

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll('.animate-on-scroll')
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [isLoading])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
          aria-busy="true"
          aria-live="polite"
        >
          <motion.div
            animate={reduceMotion ? undefined : { scale: [1, 1.02, 1] }}
            transition={reduceMotion ? undefined : { duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl bg-white/10"
          />
          <motion.div
            animate={reduceMotion ? undefined : { scale: [1, 1.03, 1] }}
            transition={reduceMotion ? undefined : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full blur-3xl bg-white/10"
          />

          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 1.01 }}
            transition={{ duration: reduceMotion ? 0 : 0.35 }}
            className="relative px-8 py-10 rounded-3xl border shadow-2xl backdrop-blur-xl bg-white/10 border-white/20"
          >
            <div className="flex flex-col items-center">
              <div className="relative w-20 h-20">
                <motion.div
                  animate={reduceMotion ? undefined : { rotate: 360 }}
                  transition={reduceMotion ? undefined : { duration: 1.1, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border-2 border-white/30 border-t-white"
                />
                <div className="absolute inset-3 rounded-full bg-white/10" />
              </div>

              <div className="mt-6 text-xl font-bold text-white font-poppins">Ahmad Salamh</div>
              <div className="mt-1 text-sm text-white/80">Loading portfolio</div>

              <div className="flex gap-2 items-center mt-5" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    animate={reduceMotion ? undefined : { y: [0, -6, 0], opacity: [0.7, 1, 0.7] }}
                    transition={reduceMotion ? undefined : { duration: 0.7, repeat: Infinity, delay: i * 0.12 }}
                    className="w-2.5 h-2.5 rounded-full bg-white"
                  />
                ))}
              </div>

              <div className="overflow-hidden mt-7 w-64 h-2 rounded-full bg-white/15">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                  className="h-full rounded-full bg-white/80"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.main
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
          className="min-h-screen"
        >
          <Navigation />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects hidePaginationOnMobile />
          <Contact />
          <Footer />
        </motion.main>
      )}
    </AnimatePresence>
  )
}
