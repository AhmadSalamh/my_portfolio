'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const WhatsAppIcon = ({ size = 24, className }: { size?: number; className?: string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.02 3C9.39 3 4 8.39 4 15.02c0 2.33.63 4.6 1.82 6.59L4 29l7.58-1.99c1.35.56 2.81.86 4.44.86 6.63 0 12.02-5.39 12.02-12.02S22.65 3 16.02 3zm6.99 17.21c-.3.84-1.76 1.65-2.42 1.75-.62.1-1.41.14-2.27-.14-.52-.17-1.18-.39-2.03-.78-3.56-1.54-5.87-5.16-6.05-5.4-.18-.24-1.45-1.93-1.45-3.68 0-1.75.92-2.61 1.24-2.97.33-.36.72-.45.96-.45h.69c.22 0 .51-.08.8.61.3.69 1.02 2.38 1.11 2.55.09.17.15.37.03.6-.12.24-.18.37-.36.57-.18.21-.38.47-.54.63-.18.18-.37.38-.16.74.21.36.93 1.54 2 2.5 1.37 1.22 2.52 1.6 2.88 1.78.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.1.99 2.46 1.17.36.18.6.27.69.42.09.15.09.87-.21 1.71z" />
    </svg>
  )
}

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      })
    }

    let animationId: number | null = null

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fill()
      })

      animationId = window.requestAnimationFrame(animate)
    }

    const start = () => {
      if (animationId !== null) return
      animationId = window.requestAnimationFrame(animate)
    }

    const stop = () => {
      if (animationId === null) return
      window.cancelAnimationFrame(animationId)
      animationId = null
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleVisibility = () => {
      if (document.hidden) stop()
      else start()
    }

    start()

    window.addEventListener('resize', handleResize)
    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      stop()
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [reduceMotion])

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      />

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <Image
                src="/profile-pic.png"
                alt="Ahmad Salamh"
                width={160}
                height={160}
                priority
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white/20 shadow-2xl object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-secondary-500/20"></div>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-7xl font-bold font-poppins leading-tight"
          >
            <span className="text-accent-400">Ahmad Salamh</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl font-light"
          >
            <span className="typing-text">Senior Frontend Developer</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
          >
            Building scalable web applications with modern technologies. Specialized in JavaScript, React.js, Vue.js with 6+ years of proven experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300"
          >
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>Syria, Latakia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Available for opportunities</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="bg-white text-primary-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:ahmad.m.salamh@gmail.com"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-700 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center gap-6 pt-8"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/AhmadSalamh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <Github size={24} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/Ahmad-salamh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <Linkedin size={24} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:ahmad.m.salamh@gmail.com"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <Mail size={24} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://wa.me/963933971416"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <WhatsAppIcon size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-14 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 text-white/70 hover:text-white transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
