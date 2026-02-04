# Ahmed Salameh - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Framer Motion to showcase Ahmed Salameh's skills and experience as a Senior Frontend Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Built with Next.js for optimal performance
- **Interactive Animations**: Smooth animations using Framer Motion
- **TypeScript**: Fully typed for better development experience
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.5
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ahmed-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
└── lib/
    └── utils.ts
```

## 🎨 Sections

1. **Hero Section**: Introduction with animated background and call-to-action
2. **About Section**: Professional summary and achievements
3. **Skills Section**: Technical skills with animated progress bars
4. **Experience Section**: Work history with timeline layout
5. **Projects Section**: Featured projects with filtering capabilities
6. **Contact Section**: Contact form and information
7. **Footer**: Social links and additional information

## 🎯 Key Features

### Animations
- Scroll-triggered animations using Framer Motion
- Hover effects and micro-interactions
- Smooth page transitions
- Animated particle background

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

### Performance
- Optimized images and assets
- Code splitting and lazy loading
- SEO-friendly structure

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds

### Manual Deployment
1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📝 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* your primary colors */ },
  secondary: { /* your secondary colors */ },
  accent: { /* your accent colors */ }
}
```

### Content
Update personal information in the respective component files:
- `Hero.tsx`: Name, title, and introduction
- `About.tsx`: Professional summary and achievements
- `Experience.tsx`: Work history and roles
- `Projects.tsx`: Featured projects and portfolio items
- `Contact.tsx`: Contact information and social links

### Animations
Customize animations in component files using Framer Motion:
```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {/* Your content */}
</motion.div>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues).

## 📞 Contact

Ahmed Salameh - [ahmad.m.salamh@gmail.com](mailto:ahmad.m.salamh@gmail.com)

Project Link: [https://github.com/AhmadSalamh/portfolio](https://github.com/AhmadSalamh/portfolio)

---

⭐ If you like this project, please give it a star on GitHub!

