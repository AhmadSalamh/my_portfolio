'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, AlertCircle, CheckCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { sendEmail, validateForm, initEmailJS, logSetupInstructions, type ContactFormData, type ValidationErrors } from '@/lib/emailService'

const WhatsAppIcon = ({ size = 20, className }: { size?: number; className?: string }) => {
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

const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<ValidationErrors>({})
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS()
    // Log setup instructions for developer
    if (process.env.NODE_ENV === 'development') {
      logSetupInstructions()
    }
  }, [])

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (notification.type) {
      const timer = setTimeout(() => {
        setNotification({ type: null, message: '' })
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [notification])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Clear error for this field when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})
    setNotification({ type: null, message: '' })

    try {
      // Validate form
      const validationErrors = validateForm(formData)
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors)
        setNotification({
          type: 'error',
          message: 'Please fix the errors below and try again.'
        })
        return
      }

      // Send email
      const result = await sendEmail(formData)

      if (result.success) {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
        setNotification({
          type: 'success',
          message: result.message
        })
      } else {
        setNotification({
          type: 'error',
          message: result.message
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setNotification({
        type: 'error',
        message: 'An unexpected error occurred. Please try again or contact me directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ahmad.m.salamh@gmail.com',
      href: 'mailto:ahmad.m.salamh@gmail.com',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(+963) 933971416',
      href: 'tel:+963933971416',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Syria, Latakia',
      href: '#',
      color: 'from-orange-500 to-red-600'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/AhmadSalamh',
      color: 'hover:text-gray-900'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/Ahmad-salamh',
      color: 'hover:text-blue-600'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:ahmad.m.salamh@gmail.com',
      color: 'hover:text-red-500'
    },
    {
      icon: WhatsAppIcon,
      label: 'WhatsApp',
      href: 'https://wa.me/963933971416',
      color: 'hover:text-green-600'
    }
  ]

  return (
    <section id="contact" className="py-6 bg-white md:py-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Notification */}
        {notification.type && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`fixed top-4 right-4 z-50 max-w-md p-4 rounded-lg shadow-lg border ${notification.type === 'success'
              ? 'bg-green-50 border-green-200 text-green-800'
              : 'bg-red-50 border-red-200 text-red-800'
              }`}
          >
            <div className="flex gap-3 items-start">
              {notification.type === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p className="text-sm font-medium">{notification.message}</p>
              </div>
              <button
                onClick={() => setNotification({ type: null, message: '' })}
                className="text-gray-400 transition-colors hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        <div className="mb-8 text-center md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="mb-2 text-3xl font-bold text-gray-900 sm:text-5xl font-poppins"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl"
          >
            Ready to start your next project? Let's discuss how I can help bring your ideas to life
          </motion.p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 md:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 md:mb-6">Let's Start a Conversation</h3>
              <p className="mb-4 leading-relaxed text-gray-600 md:mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you're a
                startup looking to build your first product or an established company wanting to
                enhance your web presence, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  href={info.href}
                  className="flex items-center p-4 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-gray-100 group"
                >
                  <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.label}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="md:pt-8">
              <h4 className="mb-4 text-lg font-semibold text-gray-900">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gray-100 rounded-full text-gray-600 ${social.color} transition-all duration-300 hover:shadow-lg`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 md:p-6"
            >
              <div className="flex items-center mb-3">
                <div className="mr-3 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="font-semibold text-green-800">Currently Available</h4>
              </div>
              <p className="text-sm text-green-700">
                I'm currently accepting new projects and would love to discuss your requirements.
                Typical response time is within 24 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="p-4 bg-gray-50 rounded-2xl md:p-8"
          >
            <div className="flex items-center mb-6">
              <MessageCircle className="mr-3 w-6 h-6 text-primary-500" />
              <h3 className="text-xl font-bold text-gray-900">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="flex gap-1 items-center mt-1 text-sm text-red-600">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="flex gap-1 items-center mt-1 text-sm text-red-600">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && (
                  <p className="flex gap-1 items-center mt-1 text-sm text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  placeholder="Project inquiry, collaboration, etc."
                />
                {errors.subject && (
                  <p className="flex gap-1 items-center mt-1 text-sm text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    {errors.subject}
                  </p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  placeholder="Tell me about your project, timeline, and requirements..."
                />
                {errors.message && (
                  <p className="flex gap-1 items-center mt-1 text-sm text-red-600">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
                <div className="mt-1 text-xs text-right text-gray-500">
                  {formData.message.length}/1000 characters
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center"
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${isSubmitting
                    ? 'text-white bg-gray-400 cursor-not-allowed'
                    : 'text-white bg-primary-600 hover:bg-primary-700 hover:scale-105'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white animate-spin border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Rate limiting notice */}
                <p className="mt-2 text-xs text-gray-500">
                  Protected by rate limiting to prevent spam
                </p>
              </motion.div>
            </form>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-4 text-sm text-center text-gray-500"
            >
              I'll get back to you within 24 hours. Looking forward to hearing from you!
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
