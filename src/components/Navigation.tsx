'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`)
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  useEffect(() => {
    // Handle initial hash scroll
    if (window.location.hash) {
      const hash = window.location.hash
      // Small timeout to ensure elements are rendered and layout is settled
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 500)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 16 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'shadow-lg backdrop-blur-md bg-white/90'
        : 'bg-transparent'
        }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold font-poppins"
          >
            <span className="gradient-text">Ahmad</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href
              return (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium transition-all duration-200 relative ${scrolled
                    ? isActive ? 'font-bold text-primary-600' : 'text-gray-700 hover:text-primary-600'
                    : isActive ? 'font-bold text-white' : 'text-white/80 hover:text-white'
                    }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${scrolled ? 'bg-gradient-to-r from-primary-500 to-secondary-500' : 'bg-white'
                        }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              )
            })}
          </div>

          {/* Mobile Menu Button and Controls */}
          <div className="flex items-center space-x-2 md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'
                }`}
            >
              <motion.span
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                className="inline-flex"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="absolute top-0 right-0 h-svh w-[86%] max-w-sm bg-white shadow-2xl"
            >
              <div className="flex justify-between items-center px-5 pt-6 pb-4 border-b border-gray-100">
                <div className="text-lg font-bold text-gray-900 font-poppins">
                  Ahmad <span className="gradient-text">Salamh</span>
                </div>
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-gray-700 bg-gray-50 rounded-xl transition-colors duration-200 hover:bg-gray-100"
                >
                  <X size={20} />
                </motion.button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.25 }}
                className="px-5 py-6"
              >
                <motion.div
                  variants={listVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-2"
                >
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href
                    return (
                      <motion.button
                        key={item.name}
                        variants={itemVariants}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => scrollToSection(item.href)}
                        className={`flex justify-between items-center px-4 py-3 w-full text-left rounded-2xl transition-colors duration-200 ${isActive
                          ? 'bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-700'
                          : 'text-gray-900 bg-gray-50 hover:bg-gray-100'
                          }`}
                      >
                        <span className={`text-base ${isActive ? 'font-bold' : 'font-semibold'}`}>
                          {item.name}
                        </span>
                        <motion.span
                          aria-hidden="true"
                          initial={false}
                          whileHover={{ x: 2 }}
                          className={`text-sm font-semibold ${isActive ? 'text-primary-600' : 'text-gray-400'}`}
                        >
                          {isActive ? '●' : '↗'}
                        </motion.span>
                      </motion.button>
                    )
                  })}
                </motion.div>

                <div className="p-5 mt-8 bg-gradient-to-br rounded-3xl border border-gray-100 from-primary-50 to-secondary-50">
                  <div className="text-sm font-semibold text-gray-900">Available for opportunities</div>
                  <div className="mt-1 text-sm text-gray-700">Let’s talk about your next project.</div>
                  <motion.a
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex justify-center items-center px-4 py-3 mt-4 w-full text-sm font-semibold text-white bg-gradient-to-r rounded-2xl shadow-sm transition-all duration-300 from-primary-500 to-secondary-500 hover:shadow-md"
                  >
                    Contact me
                  </motion.a>
                </div>
              </motion.div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation

