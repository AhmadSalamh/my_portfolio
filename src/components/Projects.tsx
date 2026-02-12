'use client'

import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

type ProjectsProps = {
  hidePaginationOnMobile?: boolean
}

const Projects = ({ hidePaginationOnMobile = false }: ProjectsProps) => {
  const projects = [
    {
      title: 'LoopChat',
      category: 'enterprise',
      description: 'Enterprise customer messaging platform built with Vue.js and WebSocket technology, handling 1000+ concurrent users with real-time messaging capabilities.',
      image: '/loopchat-logo.svg',
      technologies: ['Vue.js', 'TypeScript', 'WebSocket', 'TailwindCSS', 'REST API'],
      features: [
        'Real-time messaging with WebSocket',
        'Analytics dashboard with data visualization',
        'Responsive UI with mobile-first approach',
        'Scalable architecture for 1000+ users'
      ],
      demo: 'https://loopchat.sa/',
      color: 'from-blue-500 to-purple-600',
      featured: true
    },
    {
      title: 'Gulf Bank Website',
      category: 'banking',
      description: 'Financial services platform developed with React.js and TypeScript, featuring secure banking interfaces and responsive design.',
      image: '/gbk_logo.svg',
      technologies: ['React.js', 'TypeScript', 'Material-UI', 'Redux', 'REST API'],
      features: [
        'Secure banking interface design',
        'Responsive cross-device compatibility',
        'Performance optimized loading',
        'Accessibility compliance'
      ],
      demo: 'https://www.e-gulfbank.com/en/personal/',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'KuwaitNet',
      category: 'business',
      description: 'Corporate website for KuwaitNet (software company) built with Vue.js, featuring a multi-page structure and SEO-friendly, accessible UI.',
      image: '/kuwait-logo.jfif',
      technologies: ['Vue.js', 'HTML5', 'CSS3', 'Bootstrap', 'SEO'],
      features: [
        'Company intro website with multiple pages',
        'Partners, Industries, and Careers pages',
        'Accessibility compliance (WCAG) and cross-browser support',
        'SEO optimization'
      ],
      demo: 'https://kuwaitnet.com/en/',
      color: 'bg-black'
    },
    {
      title: 'Ajial Real Estate',
      category: 'realestate',
      description: 'Property management system developed with React.js featuring property listings, search functionality, and user management.',
      image: '/ajial-logo.webp',
      technologies: ['React.js', 'Redux', 'Bootstrap', 'REST API', 'Maps API'],
      features: [
        'Property listing and search',
        'Interactive maps integration',
        'User management system',
        'Responsive design'
      ],
      demo: 'http://ajial-realestate.com/',
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'OpaAvenue',
      category: 'ecommerce',
      description: 'Online marketplace built with Vue.js featuring e-commerce functionality, payment integration, and responsive design.',
      image: '/opa-logo.png',
      technologies: ['Vue.js', 'Vuex', 'TailwindCSS', 'Payment API', 'REST API'],
      features: [
        'E-commerce platform',
        'Payment gateway integration',
        'Shopping cart functionality',
        'Responsive marketplace design'
      ],
      demo: 'https://www.opaavenue.com/en/',
      color: 'from-purple-500 to-indigo-600'
    },
    {
      title: 'Alhamra Hotel',
      category: 'hospitality',
      description: 'Hotel booking management system created with Vue.js featuring reservation management, room availability, and guest services.',
      image: '/alhamra-logo.webp',
      technologies: ['Vue.js', 'Vuex', 'Bootstrap', 'REST API', 'Payment API'],
      features: [
        'Hotel booking management',
        'Room availability system',
        'Guest services integration',
        'Payment processing'
      ],
      demo: 'https://www.alhamrahotel.com.kw/en/',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'Gulf Insurance Group',
      category: 'insurance',
      description: 'Insurance services platform developed with modern web technologies featuring policy management and customer services.',
      image: '/gig-logo.png',
      technologies: ['React.js', 'TypeScript', 'Material-UI', 'REST API'],
      features: [
        'Insurance policy management',
        'Customer service portal',
        'Claims processing system',
        'Responsive design'
      ],
      demo: 'https://gulfinsgroup.com/en/',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      title: 'Jomla.ae',
      category: 'ecommerce',
      description: 'UAE e-commerce platform featuring modern UI, optimized data fetching, and SEO-focused performance.',
      image: '/jomla-logo.png',
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Shadcn UI', 'TailwindCSS', 'React Query', 'GraphQL', 'SEO'],
      features: [
        'Modern UI built with Shadcn UI + Tailwind CSS',
        'React Query + GraphQL for efficient data fetching',
        'Core Web Vitals and SEO optimizations',
        'Mobile-first responsive design'
      ],
      demo: 'https://jomla.ae',
      color: 'from-red-500 to-orange-600',
      featured: true
    },
    {
      title: 'zain',
      category: 'business',
      description: 'Professional services website developed with modern frontend technologies featuring service showcases and client management.',
      image: '/zain-logo.svg',
      technologies: ['Vue.js', 'TailwindCSS', 'REST API', 'SEO'],
      features: [
        'Professional services showcase',
        'Client management system',
        'SEO optimization',
        'Responsive design'
      ],
      demo: 'https://zain.com/en',
      color: 'from-teal-500 to-green-600'
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-6 bg-gray-50 md:py-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-14">
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2 text-3xl font-bold text-gray-900 sm:text-5xl font-poppins"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl"
          >
            Showcase of successful projects across various industries and technologies
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project, index) => {
            const isDemoAvailable = Boolean(project.demo && project.demo !== '#')

            return (
              <motion.div
                key={`${project.title}-${index}`}
                initial={false}
                whileHover={{ y: -8 }}
                className="overflow-hidden bg-white rounded-3xl border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >
                <div className={`relative h-60 bg-gradient-to-br ${project.color}`}>
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.35),transparent_50%)]" />
                  <div className="flex absolute inset-0 justify-center items-center p-6 md:p-10">
                    {project.image ? (
                      <div className="relative w-full h-full rounded-2xl border shadow-sm backdrop-blur-sm bg-white/75 border-white/40">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain p-8"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                    ) : (
                      <div className="flex justify-center items-center w-full h-full rounded-2xl border shadow-sm backdrop-blur-sm bg-white/15 border-white/25">
                        <span className="text-3xl font-bold tracking-tight text-white">
                          {project.title?.trim()?.[0] ?? 'P'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex flex-wrap gap-2 justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">{project.title}</h3>
                    <span className="px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 uppercase rounded-full border border-gray-200 bg-white/70">
                      {project.category}
                    </span>
                  </div>

                  <p className="mb-5 text-sm leading-relaxed text-gray-600">
                    {project.description}
                  </p>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">Highlights</h4>
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-xs leading-relaxed text-gray-600">
                            <div className="mt-2 mr-2 w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 6).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2.5 py-1 text-xs font-medium text-gray-700 rounded-full border border-gray-200 bg-gray-50"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 6 && (
                          <span className="px-2.5 py-1 text-xs font-medium text-gray-700 rounded-full border border-gray-200 bg-gray-50">
                            +{project.technologies.length - 6}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 items-center mt-7">
                    {isDemoAvailable ? (
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex gap-2 justify-center items-center px-5 py-2.5 text-sm font-semibold text-white rounded-xl transition-colors duration-200 bg-primary-600 hover:bg-primary-700"
                      >
                        <span>View Live</span>
                        <ExternalLink size={16} />
                      </motion.a>
                    ) : (
                      <div className="inline-flex justify-center items-center px-5 py-2.5 text-sm font-semibold text-gray-500 rounded-xl border border-gray-200 bg-gray-100">
                        Private / NDA
                      </div>
                    )}
                    <div className="flex-1" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12">
          <div className="flex flex-wrap gap-4 justify-between items-end mb-6">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">More Projects</h3>
              <p className="mt-1 text-sm text-gray-600">Additional work across finance, government, hospitality, and business.</p>
            </div>
          </div>

          <div className="relative pt-6">
            <div className="hidden absolute left-0 top-1/2 z-10 -translate-y-1/2 md:flex">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex justify-center items-center w-11 h-11 text-gray-700 rounded-full border border-gray-200 shadow-lg backdrop-blur-sm more-projects-prev bg-white/90 hover:bg-white"
              >
                <ChevronLeft size={18} />
              </motion.button>
            </div>
            <div className="hidden absolute right-0 top-1/2 z-10 -translate-y-1/2 md:flex">
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex justify-center items-center w-11 h-11 text-gray-700 rounded-full border border-gray-200 shadow-lg backdrop-blur-sm more-projects-next bg-white/90 hover:bg-white"
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>

            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              freeMode={true}
              navigation={{
                prevEl: '.more-projects-prev',
                nextEl: '.more-projects-next'
              }}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true
              }}
              grabCursor
              spaceBetween={24}
              slidesPerView={1.1}
              breakpoints={{
                640: { slidesPerView: 1.4 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3.4 }
              }}
              className={[
                'px-4 pb-10 -mx-4',
                hidePaginationOnMobile ? '[&_.swiper-pagination]:hidden md:[&_.swiper-pagination]:block' : null
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {otherProjects.map((project, index) => {
                const isDemoAvailable = Boolean(project.demo && project.demo !== '#')

                return (
                  <SwiperSlide key={`${project.title}-${index}`} className="h-auto">
                    <motion.div
                      initial={false}
                      whileHover={{ y: -6 }}
                      className="h-full"
                    >
                      <div className="overflow-hidden h-full bg-white rounded-3xl border border-gray-100 shadow-lg transition-all duration-300 hover:shadow-2xl">
                        <div className={`relative h-44 bg-gradient-to-br ${project.color}`}>
                          <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_55%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.35),transparent_50%)]" />
                          <div className="flex absolute inset-0 justify-center items-center p-6">
                            {project.image ? (
                              <div className="relative w-full h-full rounded-2xl border shadow-sm backdrop-blur-sm bg-white/75 border-white/40">
                                <Image
                                  src={project.image}
                                  alt={project.title}
                                  fill
                                  className="object-contain p-5"
                                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                              </div>
                            ) : (
                              <div className="flex justify-center items-center w-full h-full rounded-2xl border shadow-sm backdrop-blur-sm bg-white/15 border-white/25">
                                <span className="text-2xl font-bold tracking-tight text-white">
                                  {project.title?.trim()?.[0] ?? 'P'}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col p-6 h-full">
                          <div className="flex flex-wrap gap-2 justify-between items-center mb-3">
                            <h4 className="text-lg font-bold tracking-tight text-gray-900">{project.title}</h4>
                            <span className="px-3 py-1 text-xs font-semibold tracking-wide text-gray-700 uppercase rounded-full border border-gray-200 bg-white/70">
                              {project.category}
                            </span>
                          </div>

                          <p className="mb-4 text-sm leading-relaxed text-gray-600 line-clamp-3">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-5">
                            {project.technologies.slice(0, 4).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2.5 py-1 text-xs font-medium text-gray-700 rounded-full border border-gray-200 bg-gray-50"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 4 && (
                              <span className="px-2.5 py-1 text-xs font-medium text-gray-700 rounded-full border border-gray-200 bg-gray-50">
                                +{project.technologies.length - 4}
                              </span>
                            )}
                          </div>

                          <div className="">
                            {isDemoAvailable ? (
                              <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex gap-2 justify-center items-center px-4 py-2 text-sm font-semibold text-white rounded-xl transition-colors duration-200 bg-primary-600 hover:bg-primary-700"
                              >
                                <span>View Live</span>
                                <ExternalLink size={16} />
                              </motion.a>
                            ) : (
                              <div className="inline-flex justify-center items-center px-4 py-2 text-sm font-semibold text-gray-500 bg-gray-100 rounded-xl border border-gray-200">
                                Private / NDA
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="p-4 text-white bg-gradient-to-r rounded-2xl md:p-8 from-primary-500 to-secondary-500">
            <h3 className="mb-4 text-2xl font-bold">Interested in Working Together?</h3>
            <p className="mb-6 text-lg opacity-90">
              Let's discuss your next project and bring your ideas to life
            </p>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex gap-2 items-center px-8 py-3 font-semibold bg-white rounded-full transition-all duration-300 text-primary-600 hover:shadow-lg"
            >
              <span>Start a Project</span>
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
