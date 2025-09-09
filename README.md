# Portfolio Website - Senior Backend Developer

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Lazy loading, optimized images, and efficient code splitting
- **SEO Friendly**: Proper meta tags, structured data, and sitemap
- **Interactive**: Smooth scroll animations and hover effects
- **Three.js Integration**: Animated background with particle effects
- **TypeScript**: Full type safety throughout the application
- **Dark Mode Ready**: Built-in dark mode support

## 🛠️ Technologies Used

- **Frontend Framework**: Next.js 15.5.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js with React Three Fiber
- **Icons**: Lucide React
- **Component Library**: Radix UI (shadcn/ui)
- **Font**: Inter, Outfit, JetBrains Mono

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and custom CSS
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── ui/                  # Reusable UI components
│   ├── Header.tsx           # Navigation header
│   ├── Hero.tsx             # Hero section with Three.js
│   ├── About.tsx            # About section
│   ├── Experience.tsx       # Experience timeline
│   ├── Projects.tsx         # Projects showcase
│   ├── Skills.tsx           # Skills and technologies
│   ├── Contact.tsx          # Contact form and info
│   ├── Footer.tsx           # Footer section
│   ├── LazyComponent.tsx    # Lazy loading wrapper
│   └── ScrollProgress.tsx   # Scroll progress indicator
├── data/
│   └── portfolio.ts         # Mock data for portfolio content
├── hooks/
│   └── usePortfolio.ts      # Custom React hooks
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Customization

### 1. Personal Information
Edit the data in `src/data/portfolio.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  subtitle: "Your Subtitle",
  description: "Your description...",
  email: "your.email@example.com",
  // ... other fields
};
```

### 2. Experience
Update the `experiences` array in `src/data/portfolio.ts`

### 3. Projects
Update the `projects` array in `src/data/portfolio.ts`

### 4. Skills
Update the `skills` array in `src/data/portfolio.ts`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## 📱 Responsive Design

The portfolio is designed to work seamlessly across all device sizes:
- **Desktop**: Full layout with all animations and effects
- **Tablet**: Optimized layout with touch-friendly interactions  
- **Mobile**: Compressed layout with mobile-optimized navigation

## ⚡ Performance Features

- **Lazy Loading**: Components are loaded only when needed
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for optimal loading
- **Caching**: Proper caching headers for static assets
- **Minification**: CSS and JavaScript minification in production

## 🎭 Animations

The portfolio includes various smooth animations:
- **Scroll Animations**: Elements animate in as you scroll
- **Hover Effects**: Interactive hover states on all clickable elements
- **Page Transitions**: Smooth transitions between sections
- **Three.js Background**: Animated particle background in hero section
- **Loading States**: Smooth loading animations for lazy-loaded content

**Built with ❤️ and lots of ☕**
