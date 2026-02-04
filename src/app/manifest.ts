import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ahmad Salamh - Senior Frontend Developer',
    short_name: 'Ahmad Salamh',
    description: 'Senior Frontend Developer with 5+ years building high-performance, scalable web apps and e-commerce platforms. Expert in React, Next.js, Vue.js, Nuxt.js, and TypeScript.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#6366f1',
    icons: [
      {
        src: '/profile-pic.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/profile-pic.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
