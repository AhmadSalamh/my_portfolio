'use client'

import { motion } from 'framer-motion'
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react'

const WhatsAppIcon = ({ size = 18, className }: { size?: number; className?: string }) => {
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

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/AhmadSalamh',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ahmed-salamh',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:ahmad.m.salamh@gmail.com',
      label: 'Email'
    },
    {
      icon: WhatsAppIcon,
      href: 'https://wa.me/963933971416',
      label: 'WhatsApp'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="text-white bg-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid gap-8 py-12 md:grid-cols-3">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold font-poppins">
              Ahmed <span className="text-primary-400">Salamh</span>
            </h3>
            <p className="leading-relaxed text-gray-400">
              Senior Frontend Developer with 5+ years building high‑performance, scalable web apps
              and e‑commerce platforms. Expert in React, Next.js, Vue.js, Nuxt.js, and TypeScript,
              focused on intuitive UI, SEO, and Core Web Vitals performance.
            </p>
            <div className="flex gap-2 items-center text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Available for new opportunities</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors duration-200 hover:text-primary-400"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Syria, Latakia</p>
              <a
                href="mailto:ahmad.m.salamh@gmail.com"
                className="block mb-3 transition-colors duration-200 hover:text-primary-400"
              >
                ahmad.m.salamh@gmail.com
              </a>
              <a
                href="tel:+963933971416"
                className="block transition-colors duration-200 hover:text-primary-400"
              >
                (+963) 933971416
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-primary-600"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col gap-4 justify-between items-center md:flex-row">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
              className="flex gap-2 items-center text-sm text-gray-400"
            >
              © {currentYear} Ahmad Salamh. Made with
              <Heart size={14} className="text-red-500 animate-pulse" />
              and lots of coffee.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex gap-4 items-center text-sm text-gray-400"
            >
              <span>Built with Next.js & TypeScript</span>
              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="p-2 bg-gray-800 rounded-lg transition-all duration-300 hover:bg-primary-600"
                aria-label="Back to top"
              >
                <ArrowUp size={16} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
    </footer>
  )
}

export default Footer
