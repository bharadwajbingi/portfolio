# Personal Portfolio - Production Ready

A modern, responsive personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features glassmorphism design, accessibility-first approach, and optimized performance.

## 🚀 Features

- **Modern Design**: Glassmorphism with subtle gradients and backdrop-blur effects
- **Fully Responsive**: Mobile-first design that works on all devices
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Performance**: Optimized images, lazy loading, and minimal bundle size
- **SEO Optimized**: Meta tags, structured data, and sitemap ready
- **Theme Support**: Light/dark mode with system preference detection
- **Animations**: Smooth Framer Motion animations and micro-interactions
- **Type Safe**: Full TypeScript coverage with strict mode

## 🛠 Tech Stack

- **Framework**: Next.js 13+ with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with JIT compilation
- **UI Components**: shadcn/ui with Radix UI primitives  
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📝 Customization

### Content Management

All content is centrally managed in `/data/profile.ts`. Update this file to customize:

- Personal information and contact details
- Skills with categories and proficiency levels  
- Project showcases with descriptions and tech stacks
- Work experience and achievements
- Certifications and courses
- Social media and coding profiles

### Theme Customization

Modify design tokens in:

- `tailwind.config.ts` - Colors, spacing, fonts
- `app/globals.css` - CSS custom properties for themes
- `/data/profile.ts` - Skill category colors

### Skill Categories & Colors

Update the skills section with your technologies:

```typescript
skills: [
  {
    category: "Frontend",
    color: "blue", // Available: blue, green, purple, orange, red, indigo
    skills: [
      { name: "React", proficiency: 4 }, // 1-5 scale
      // Add more skills...
    ]
  }
]
```

### Adding Projects

Add new projects to the projects array:

```typescript
projects: [
  {
    id: "unique-id",
    title: "Project Name",
    description: "Brief description for cards",
    problem: "What problem does this solve?",
    impact: "What was the measurable impact?",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/images/project-preview.jpg",
    demo: "https://demo-url.com",
    github: "https://github.com/username/repo",
    featured: true, // Shows on homepage
    category: "Full-Stack"
  }
]
```

## 🎨 Design Guidelines

### Color System

The portfolio uses semantic colors for different skill categories:

- **Blue**: Frontend technologies (React, CSS, etc.)
- **Green**: Backend & APIs (Node.js, Express, etc.)  
- **Purple**: Databases (MongoDB, PostgreSQL, etc.)
- **Orange**: Programming languages (JavaScript, Python, etc.)
- **Red**: Tools & DevOps (Git, Docker, etc.)
- **Indigo**: Algorithms & CS concepts

### Accessibility

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- High contrast ratios (4.5:1 minimum)
- Focus indicators
- Screen reader friendly

## 🚀 Deployment

The portfolio is a static-ready Next.js App Router project and can be easily deployed to static hosting providers with zero configuration required.

### Vercel (Recommended)

1. Push your code to a GitHub repository (e.g., `github.com/bharadwajbingi/portfolio`).
2. Import the repository in your [Vercel Dashboard](https://vercel.com).
3. Vercel will automatically detect Next.js and deploy your live site.

### Alternative Platforms

You can build and export the project as static files using `npm run build` and deploy to:
- **Netlify**: Super fast Next.js deployment.
- **GitHub Pages**: Easy static hosting.
- **AWS S3 + CloudFront**: Enterprise static hosting.

---

## ⚡ Features & Optimizations

- **Next-Gen Performance**: Built on Next.js 13+ App Router with React Server Components.
- **Image Optimization**: Automatic WebP generation and resizing using `next/image`.
- **Preloaded Typography**: Standard high-performance preloaded Inter font.
- **Fully Responsive**: Highly dynamic CSS layouts with smooth scaling interactive Tech Ecosystem orbits.
- **Premium Animations**: Framer Motion 3D parallax tilt effects for immersive interactions.

---

## 🆘 Contact & Support

This portfolio belongs to **Bharadwaj Bingi**. For support, questions, or collaboration opportunities:

- **GitHub**: [github.com/bharadwajbingi](https://github.com/bharadwajbingi)
- **LinkedIn**: [linkedin.com/in/bharadwajbingi](https://linkedin.com/in/bharadwajbingi)
- **Email**: [bharadwajbingi555@gmail.com](mailto:bharadwajbingi555@gmail.com)
- **Phone**: +91-9866640181

---

Built with ❤️ by Bharadwaj Bingi using Next.js and modern web technologies.