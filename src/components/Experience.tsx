'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Jomla.ae',
      location: 'Dubai, UAE (Remote)',
      period: 'Jan 2025 – Present',
      type: 'Full-time',
      description: 'Developing and maintaining features for a leading UAE e-commerce platform using React, Next.js, and TypeScript.',
      achievements: [
        'Built modern UI components with Shadcn UI and Tailwind CSS to enhance user experience',
        'Optimized data fetching and state with React Query and GraphQL, reducing API overhead',
        'Led SEO optimizations and Core Web Vitals improvements to increase organic traffic',
        'Ensured seamless responsive design with mobile-first architecture across devices',
        'Collaborated with cross-functional teams to deliver high-quality technical solutions'
      ],
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Shadcn UI', 'TailwindCSS', 'React Query', 'GraphQL', 'SEO'],
      color: 'from-teal-500 to-cyan-600'
    },
    {
      title: 'Senior Frontend Developer',
      company: 'Keytime Company',
      location: 'Remote, Saudi Arabia',
      period: 'July 2024 - Jan 2026',
      type: 'Full-time',
      description: 'Leading development of LoopChat, an enterprise customer messaging platform serving 1000+ concurrent users.',
      achievements: [
        'Developed scalable Vue.js application handling 1000+ concurrent users',
        'Implemented real-time messaging with WebSocket technology',
        'Built responsive UI components using TailwindCSS with mobile-first approach',
        'Created analytics dashboard with data visualization features',
        'Optimized application performance achieving fast load times'
      ],
      technologies: ['Vue.js', 'JavaScript', 'TypeScript', 'WebSocket', 'TailwindCSS', 'REST API'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Frontend Developer',
      company: 'Tb International DMCC',
      location: 'Dubai, UAE',
      period: 'September 2023 - May 2024',
      type: 'Full-time',
      description: 'Built interactive gaming web applications and improved user engagement through optimized UI/UX implementation.',
      achievements: [
        'Built interactive gaming web applications using React.js and Vue.js',
        'Improved user engagement by 40% through optimized UI/UX implementation',
        'Developed reusable component library for consistent design system',
        'Implemented performance optimization techniques including code splitting and lazy loading',
        'Created responsive web applications ensuring cross-browser compatibility'
      ],
      technologies: ['React.js', 'Vue.js', 'JavaScript', 'Bootstrap', 'REST API'],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Frontend Developer',
      company: 'Kuwait Net',
      location: 'Kuwait Remote',
      period: 'October 2020 - October 2023',
      type: 'Full-time',
      description: 'Delivered 20+ responsive websites across government, e-commerce, and social platforms with significant performance improvements.',
      achievements: [
        'Delivered 20+ responsive websites across government, e-commerce, and social platforms',
        'Improved SEO rankings by 60% through optimization techniques',
        'Reduced development time by 30% with reusable component libraries',
        'Ensured cross-browser compatibility and accessibility compliance',
        'Converted Figma and Adobe XD designs to pixel-perfect web interfaces'
      ],
      technologies: ['Vue.js', 'React.js', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap', 'SEO'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Frontend Developer',
      company: 'ICE CODE',
      location: 'UAE Remote',
      period: 'July 2022 - October 2022',
      type: 'Contract',
      description: 'Built responsive website using modern web technologies with focus on performance optimization.',
      achievements: [
        'Built responsive website using HTML5, CSS3, and vanilla JavaScript',
        'Implemented user interface design ensuring cross-device compatibility',
        'Optimized website performance and loading speed using image optimization'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'NPM'],
      color: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Freelance Frontend Developer',
      company: 'Independent Contractor',
      location: 'Remote',
      period: '2020 - Present',
      type: 'Freelance',
      description: 'Completed 15+ international projects with 100% client satisfaction across Canada, Sweden, and UAE.',
      achievements: [
        'Completed 15+ international projects with 100% client satisfaction',
        'Served clients in Canada, Sweden, and UAE',
        'Managed full project lifecycle from requirements to deployment',
        'Specialized in e-commerce platforms and business portals',
        'Developed custom web applications using modern JavaScript frameworks'
      ],
      technologies: ['React.js', 'Vue.js', 'Next.js', 'Nuxt.js', 'TailwindCSS'],
      color: 'from-purple-500 to-indigo-600'
    }
  ]

  return (
    <section id="experience" className="py-6 bg-white md:py-10">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-16">
          <motion.h2
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-2 text-3xl font-bold text-gray-900 sm:text-5xl font-poppins"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.p
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-3xl text-lg text-gray-600 md:text-xl"
          >
            6+ years of professional experience building scalable web applications for international clients
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.aside
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 h-fit"
          >
            <div className="p-6 bg-gradient-to-br rounded-2xl border border-gray-100 shadow-sm from-primary-50 to-secondary-50">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Career Highlights</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Experience', value: '5+ yrs' },
                  { label: 'Projects', value: '20+' },
                  { label: 'Tech Stack', value: '15+' },
                  { label: 'Satisfaction', value: '100%' }
                ].map((stat, index) => (
                  <div key={index} className="p-4 rounded-xl border bg-white/70 border-white/70">
                    <div className="text-lg font-bold text-primary-700">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {['React', 'Next.js', 'Vue', 'Nuxt', 'TypeScript', 'SEO', 'Core Web Vitals'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-gray-700 bg-white rounded-full border border-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>

          <div className="space-y-6 lg:col-span-2">
            {experiences.map((exp, index) => (
              <motion.article
                key={`${exp.company}-${exp.period}`}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="overflow-hidden relative bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <div className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b ${exp.color}`} />
                <div className="p-4 md:p-6">
                  <div className="flex flex-wrap gap-4 justify-between items-start">
                    <div>
                      <div className="flex gap-2 items-center">
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-y-1 gap-x-3 items-center mt-1">
                        <span className="text-lg font-semibold text-primary-600">{exp.company}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-gray-600">{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${exp.color} text-white`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                    <div className="flex gap-2 items-center">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="mt-4 leading-relaxed text-gray-700">{exp.description}</p>

                  <div className="grid gap-6 mt-5 md:grid-cols-2">
                    <div>
                      <h4 className="mb-3 text-sm font-semibold text-gray-900">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <li key={achievement} className="flex gap-2 items-start text-sm text-gray-600">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-3 text-sm font-semibold text-gray-900">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full transition-colors duration-200 hover:bg-primary-100 hover:text-primary-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

