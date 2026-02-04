import type { Metadata } from 'next'
import './globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const metadata: Metadata = {
  title: 'Ahmad Salamah - Senior Frontend Developer',
  description: 'Senior Frontend Developer with 5+ years building high-performance, scalable web apps and e-commerce platforms. Expert in React, Next.js, Vue.js, Nuxt.js, and TypeScript. Focused on SEO and Core Web Vitals.',
  keywords: 'Frontend Developer, JavaScript, React, Vue.js, Next.js, Nuxt.js, TypeScript, Shadcn UI, Tailwind CSS, Redux, Pinia, React Query, GraphQL, Vite, Webpack, PNPM, Web Development, UAE, Saudi Arabia, Europe',
  authors: [{ name: 'Ahmad Salamah' }],
  creator: 'Ahmad Salamah',
  openGraph: {
    title: 'Ahmad Salamah - Senior Frontend Developer',
    description: 'Senior Frontend Developer with 5+ years building high-performance, scalable web apps and e-commerce platforms. Expert in React, Next.js, Vue.js, Nuxt.js, and TypeScript.',
    url: 'https://ahmed-salameh.dev',
    siteName: 'Ahmad Salamah Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/profile-pic.png',
        width: 800,
        height: 600,
        alt: 'Ahmad Salamah - Senior Frontend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmad Salamah - Senior Frontend Developer',
    description: 'Senior Frontend Developer with 5+ years building high-performance, scalable web apps and e-commerce platforms. Expert in React, Next.js, Vue.js, Nuxt.js, and TypeScript.',
    images: ['/profile-pic.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/profile-pic.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366f1" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Ahmad Salamah",
              "jobTitle": "Senior Frontend Developer",
              "description": "Senior Frontend Developer with 5+ years building high-performance, scalable web apps and e-commerce platforms. Expert in React, Next.js, Vue.js, Nuxt.js, and TypeScript.",
              "url": "https://ahmed-salameh.dev",
              "sameAs": [
                "https://github.com/AhmadSalamh",
                "https://www.linkedin.com/in/ahmed-salamh"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Latakia",
                "addressCountry": "Syria"
              },
              "email": "ahmad.m.salamh@gmail.com",
              "telephone": "+963 933 259 525",
              "knowsAbout": [
                "JavaScript",
                "React.js",
                "Vue.js",
                "Next.js",
                "Nuxt.js",
                "TypeScript",
                "Tailwind CSS",
                "Shadcn UI",
                "Redux",
                "Pinia",
                "React Query",
                "GraphQL",
                "Frontend Development",
                "Web Development"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
