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

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npx vercel
   ```

2. **Set up custom domain** (optional)
   - Add domain in Vercel dashboard
   - Update canonical URLs in metadata

3. **Environment Variables**
   No environment variables needed for basic deployment.

### Alternative Platforms

The portfolio is a static Next.js app and can be deployed to:
- Netlify
- GitHub Pages  
- AWS S3 + CloudFront
- Any static hosting provider

## 📧 Contact Form Setup

The contact form currently uses a `mailto:` fallback. To add server-side email:

### Option 1: SendGrid Integration

1. **Install SendGrid**
   ```bash
   npm install @sendgrid/mail
   ```

2. **Add API route** (`app/api/contact/route.ts`)
   ```typescript
   import sgMail from '@sendgrid/mail';
   
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   
   export async function POST(request: Request) {
     // Implementation here
   }
   ```

3. **Environment Variables**
   ```
   SENDGRID_API_KEY=your_api_key
   FROM_EMAIL=your_email@domain.com
   TO_EMAIL=your_email@domain.com
   ```

### Option 2: Other Email Providers

- **Resend**: Modern email API with great DX
- **EmailJS**: Client-side email sending
- **Formspree**: Form handling service

## 📊 Analytics Setup

### Option 1: Plausible (Privacy-friendly)

Add to `app/layout.tsx`:

```typescript
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### Option 2: Google Analytics 4

Add to `app/layout.tsx`:

```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `
}} />
```

## 🔍 SEO Optimization

### Sitemap Generation

Install and configure `next-sitemap`:

```bash
npm install next-sitemap
```

Create `next-sitemap.config.js`:

```javascript
module.exports = {
  siteUrl: 'https://yourdomain.com',
  generateRobotsTxt: true,
}
```

### Meta Tags

Update metadata in:
- `app/layout.tsx` - Global meta tags
- `app/page.tsx` - Homepage specific
- `app/projects/page.tsx` - Projects page

## ⚡ Performance Optimization

### Images

- Use `next/image` for automatic optimization
- Add images to `/public/images/`
- Use WebP format when possible
- Add proper alt text for accessibility

### Fonts

- Inter font is preloaded for performance
- Using `font-display: swap` for better loading

### Bundle Analysis

Analyze bundle size:

```bash
npm run build
npx @next/bundle-analyzer
```

## 🧪 Testing & Quality

### Accessibility Testing

1. **Install axe-core**
   ```bash
   npm install --dev @axe-core/react
   ```

2. **Run Lighthouse audit**
   - Open DevTools → Lighthouse
   - Run accessibility audit
   - Aim for score > 95

3. **Keyboard Testing**
   - Navigate using only Tab/Shift+Tab
   - Ensure all interactive elements are reachable
   - Verify focus indicators are visible

### Performance Testing

- Lighthouse performance score > 90
- Core Web Vitals compliance
- Mobile-first optimization

## 📱 Browser Support

- Chrome 90+
- Firefox 90+  
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License. See LICENSE file for details.

## 🆘 Support

For support or questions:
- Create an issue on GitHub
- Email: your.email@domain.com
- LinkedIn: [Your LinkedIn Profile]

---

Built with ❤️ using Next.js and modern web technologies.