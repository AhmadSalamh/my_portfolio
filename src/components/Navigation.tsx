'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
        ? 'bg-white/90 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold font-poppins"
          >
            <span className="gradient-text">Ahmed</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-200 ${scrolled
                  ? 'text-gray-700 hover:text-primary-600'
                  : 'text-white hover:text-primary-200'
                  }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button and Controls */}
          <div className="md:hidden flex items-center space-x-2">
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
              <div className="flex items-center justify-between px-5 pt-6 pb-4 border-b border-gray-100">
                <div className="text-lg font-bold font-poppins text-gray-900">
                  Ahmed <span className="gradient-text">Salameh</span>
                </div>
                <motion.button
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-gray-700 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
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
                  {navItems.map((item) => (
                    <motion.button
                      key={item.name}
                      variants={itemVariants}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center justify-between w-full px-4 py-3 text-left rounded-2xl bg-gray-50 hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 transition-colors duration-200"
                    >
                      <span className="text-base font-semibold text-gray-900">{item.name}</span>
                      <motion.span
                        aria-hidden="true"
                        initial={false}
                        whileHover={{ x: 2 }}
                        className="text-sm font-semibold text-primary-600"
                      >
                        ↗
                      </motion.span>
                    </motion.button>
                  ))}
                </motion.div>

                <div className="mt-8 p-5 rounded-3xl bg-gradient-to-br from-primary-50 to-secondary-50 border border-gray-100">
                  <div className="text-sm font-semibold text-gray-900">Available for opportunities</div>
                  <div className="mt-1 text-sm text-gray-700">Let’s talk about your next project.</div>
                  <motion.a
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="mt-4 inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white rounded-2xl bg-gradient-to-r from-primary-500 to-secondary-500 shadow-sm hover:shadow-md transition-all duration-300"
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

